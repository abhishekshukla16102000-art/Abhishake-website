import { timingSafeEqual } from "node:crypto";
import {
  OUTREACH_FROM_ADDRESS,
  ZOHO_ACCOUNTS_BASE_URL,
  ZOHO_STATE_COOKIE,
  ZOHO_SESSION_COOKIE,
  clearCookieHeader,
  cookieHeader,
  encryptSession,
  getCookie,
  getZohoAccountId,
  type OutreachSession,
} from "@/lib/outreachServer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function sameState(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

function returnToAdmin(request: Request, state: string) {
  const url = new URL("/sps-outreach-admin", request.url);
  url.searchParams.set("zoho", state);
  return url;
}

function redirectWithCookies(location: URL, cookies: string[] = []) {
  const headers = new Headers({
    Location: location.toString(),
    "Cache-Control": "no-store",
  });
  for (const cookie of cookies) headers.append("Set-Cookie", cookie);
  return new Response(null, { status: 303, headers });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const storedState = getCookie(request, ZOHO_STATE_COOKIE);
  const returnedState = url.searchParams.get("state") ?? "";
  const code = url.searchParams.get("code") ?? "";

  if (!storedState || !returnedState || !sameState(storedState, returnedState)) {
    return redirectWithCookies(returnToAdmin(request, "state-error"), [
      clearCookieHeader(ZOHO_STATE_COOKIE),
    ]);
  }

  if (url.searchParams.has("error") || !code) {
    return redirectWithCookies(returnToAdmin(request, "denied"), [
      clearCookieHeader(ZOHO_STATE_COOKIE),
    ]);
  }

  try {
    const clientId = process.env.ZOHO_CLIENT_ID;
    const clientSecret = process.env.ZOHO_CLIENT_SECRET;
    if (!clientId || !clientSecret) throw new Error("Zoho OAuth is not configured.");

    const redirectUri = new URL("/api/outreach/zoho/callback", url.origin).toString();
    const form = new URLSearchParams({
      code,
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
    });

    const tokenResponse = await fetch(`${ZOHO_ACCOUNTS_BASE_URL}/oauth/v2/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form,
      cache: "no-store",
    });
    const tokenData = await tokenResponse.json().catch(() => ({})) as {
      access_token?: string;
      refresh_token?: string;
    };

    if (!tokenResponse.ok || !tokenData.access_token || !tokenData.refresh_token) {
      throw new Error("Zoho did not return the required offline access credentials.");
    }

    const accountId = await getZohoAccountId(tokenData.access_token, OUTREACH_FROM_ADDRESS);
    const session: OutreachSession = {
      refreshToken: tokenData.refresh_token,
      accountId,
      fromAddress: OUTREACH_FROM_ADDRESS,
      sentDay: "",
      sentToday: 0,
      lastExternalSendAt: 0,
    };

    return redirectWithCookies(returnToAdmin(request, "connected"), [
      cookieHeader(ZOHO_SESSION_COOKIE, encryptSession(session), 60 * 60 * 24 * 30),
      clearCookieHeader(ZOHO_STATE_COOKIE),
    ]);
  } catch {
    return redirectWithCookies(returnToAdmin(request, "error"), [
      clearCookieHeader(ZOHO_STATE_COOKIE),
    ]);
  }
}
