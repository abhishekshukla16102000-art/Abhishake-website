import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";

export const OUTREACH_FROM_ADDRESS = "abhishek@iabhishekshukla.com";
export const ZOHO_MAIL_BASE_URL = "https://mail.zoho.in";
export const ZOHO_ACCOUNTS_BASE_URL = "https://accounts.zoho.in";
export const ZOHO_SESSION_COOKIE = "__Host-sps-outreach-session";
export const ZOHO_STATE_COOKIE = "__Host-sps-zoho-oauth-state";
export const ZOHO_OAUTH_SCOPES = [
  "ZohoMail.accounts.READ",
  "ZohoMail.folders.READ",
  "ZohoMail.messages.READ",
  "ZohoMail.messages.CREATE",
].join(",");

export type OutreachSession = {
  refreshToken: string;
  accountId: string;
  fromAddress: string;
  sentDay: string;
  sentToday: number;
  lastExternalSendAt: number;
};

type ZohoEnvelope<T> = {
  status?: { code?: number; description?: string };
  data?: T;
};

function constantTimeTextEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function isOutreachAdmin(request: Request) {
  const expected = process.env.OUTREACH_ADMIN_TOKEN;
  const authorization = request.headers.get("authorization") ?? "";
  const supplied = authorization.startsWith("Bearer ")
    ? authorization.slice(7).trim()
    : "";
  return Boolean(expected && supplied && constantTimeTextEqual(expected, supplied));
}

export function getCookie(request: Request, name: string) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  for (const part of cookieHeader.split(";")) {
    const separator = part.indexOf("=");
    if (separator < 0) continue;
    const key = part.slice(0, separator).trim();
    if (key === name) return part.slice(separator + 1).trim();
  }
  return null;
}

export function cookieHeader(name: string, value: string, maxAge: number) {
  return [
    `${name}=${value}`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    `Max-Age=${maxAge}`,
  ].join("; ");
}

export function clearCookieHeader(name: string) {
  return [
    `${name}=`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    "Max-Age=0",
  ].join("; ");
}

function sessionKey() {
  const secret = process.env.OUTREACH_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("OUTREACH_SESSION_SECRET must contain at least 32 characters.");
  }
  return createHash("sha256").update(secret, "utf8").digest();
}

export function encryptSession(session: OutreachSession) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", sessionKey(), iv);
  const ciphertext = Buffer.concat([
    cipher.update(JSON.stringify(session), "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();
  return [
    iv.toString("base64url"),
    tag.toString("base64url"),
    ciphertext.toString("base64url"),
  ].join(".");
}

export function decryptSession(value: string | null): OutreachSession | null {
  if (!value) return null;
  try {
    const [ivPart, tagPart, cipherPart] = value.split(".");
    if (!ivPart || !tagPart || !cipherPart) return null;
    const decipher = createDecipheriv(
      "aes-256-gcm",
      sessionKey(),
      Buffer.from(ivPart, "base64url"),
    );
    decipher.setAuthTag(Buffer.from(tagPart, "base64url"));
    const plaintext = Buffer.concat([
      decipher.update(Buffer.from(cipherPart, "base64url")),
      decipher.final(),
    ]).toString("utf8");
    const parsed = JSON.parse(plaintext) as Partial<OutreachSession>;
    if (
      typeof parsed.refreshToken !== "string" ||
      typeof parsed.accountId !== "string" ||
      parsed.fromAddress !== OUTREACH_FROM_ADDRESS
    ) return null;
    return {
      refreshToken: parsed.refreshToken,
      accountId: parsed.accountId,
      fromAddress: OUTREACH_FROM_ADDRESS,
      sentDay: typeof parsed.sentDay === "string" ? parsed.sentDay : "",
      sentToday: Number.isInteger(parsed.sentToday) ? Number(parsed.sentToday) : 0,
      lastExternalSendAt: Number.isFinite(parsed.lastExternalSendAt)
        ? Number(parsed.lastExternalSendAt)
        : 0,
    };
  } catch {
    return null;
  }
}

export async function refreshZohoAccessToken(refreshToken: string) {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("Zoho OAuth client credentials are not configured.");
  }

  const form = new URLSearchParams({
    refresh_token: refreshToken,
    grant_type: "refresh_token",
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(`${ZOHO_ACCOUNTS_BASE_URL}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form,
    cache: "no-store",
  });
  const result = await response.json().catch(() => ({})) as {
    access_token?: string;
    error?: string;
  };
  if (!response.ok || !result.access_token) {
    throw new Error("Zoho could not refresh the access token. Reconnect the mailbox.");
  }
  return result.access_token;
}

export async function zohoApi<T>(
  accessToken: string,
  path: string,
  init: RequestInit = {},
): Promise<ZohoEnvelope<T>> {
  const response = await fetch(`${ZOHO_MAIL_BASE_URL}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      ...init.headers,
    },
    cache: "no-store",
  });
  const result = await response.json().catch(() => ({})) as ZohoEnvelope<T>;
  if (!response.ok || (result.status?.code && result.status.code >= 300)) {
    throw new Error(
      result.status?.description
        ? `Zoho Mail API error: ${result.status.description}`
        : `Zoho Mail API request failed (${response.status}).`,
    );
  }
  return result;
}

export async function getZohoAccountId(
  accessToken: string,
  expectedEmail = OUTREACH_FROM_ADDRESS,
) {
  const result = await zohoApi<Array<Record<string, unknown>>>(accessToken, "/api/accounts");
  const accounts = Array.isArray(result.data) ? result.data : [];
  const target = expectedEmail.toLowerCase();
  const account = accounts.find((item) => {
    const direct = [
      item.primaryEmailAddress,
      item.mailboxAddress,
      item.incomingUserName,
    ].some((value) => typeof value === "string" && value.toLowerCase() === target);
    const addresses = Array.isArray(item.emailAddress) ? item.emailAddress : [];
    const nested = addresses.some((value) => {
      if (!value || typeof value !== "object") return false;
      const mailId = (value as Record<string, unknown>).mailId;
      return typeof mailId === "string" && mailId.toLowerCase() === target;
    });
    return direct || nested;
  });
  if (!account || typeof account.accountId !== "string") {
    throw new Error(`The Zoho account ${expectedEmail} was not found in the authorised mailbox.`);
  }
  return account.accountId;
}

export function extractEmailAddresses(value: unknown) {
  if (typeof value !== "string") return [];
  const decoded = value
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#64;/gi, "@");
  return decoded.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [];
}

export async function getRecentSentRecipients(accessToken: string, accountId: string) {
  const folders = await zohoApi<Array<Record<string, unknown>>>(
    accessToken,
    `/api/accounts/${encodeURIComponent(accountId)}/folders`,
  );
  const folderList = Array.isArray(folders.data) ? folders.data : [];
  const sentFolder = folderList.find((folder) => {
    const name = String(folder.folderName ?? "").toLowerCase();
    const type = String(folder.folderType ?? "").toLowerCase();
    return name === "sent" || type === "sent";
  });
  if (!sentFolder || typeof sentFolder.folderId !== "string") {
    throw new Error("Zoho Sent folder could not be located; duplicate protection is unavailable.");
  }

  const sent = new Set<string>();
  for (const start of [1, 201, 401]) {
    const params = new URLSearchParams({
      folderId: sentFolder.folderId,
      start: String(start),
      limit: "200",
      sortBy: "date",
      sortorder: "false",
      includeto: "true",
    });
    const page = await zohoApi<Array<Record<string, unknown>>>(
      accessToken,
      `/api/accounts/${encodeURIComponent(accountId)}/messages/view?${params.toString()}`,
    );
    const rows = Array.isArray(page.data) ? page.data : [];
    for (const row of rows) {
      for (const address of extractEmailAddresses(row.toAddress)) {
        sent.add(address.toLowerCase());
      }
    }
    if (rows.length < 200) break;
  }
  return sent;
}

export async function sendZohoMessage(args: {
  accessToken: string;
  accountId: string;
  fromAddress: string;
  toAddress: string;
  subject: string;
  content: string;
}) {
  const response = await zohoApi<Record<string, unknown>>(
    args.accessToken,
    `/api/accounts/${encodeURIComponent(args.accountId)}/messages`,
    {
      method: "POST",
      body: JSON.stringify({
        fromAddress: args.fromAddress,
        toAddress: args.toAddress,
        subject: args.subject,
        content: args.content,
        mailFormat: "plaintext",
        askReceipt: "no",
        encoding: "UTF-8",
      }),
    },
  );
  return response.data ?? {};
}

export function indiaCalendarDay(timestamp = Date.now()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(timestamp);
}

export const OUTREACH_DAILY_LIMIT = 20;
export const OUTREACH_SEND_COOLDOWN_MS = 5 * 60 * 1000;
