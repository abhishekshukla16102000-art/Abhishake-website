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

export async function GET(request: Request) {
  const url = new URL(request.url);
  const storedState = getCookie(request, ZOHO_STATE_COOKIE);
  const returnedState = url.searchParams.get("state") ?? "";
  const code = url.searchParams.get("code") ?? "";

  if (!storedState || !returnedState || !sameState(storedState, returnedState)) {
    const response = Response.redirect(returnToAdmin(request, "state-error"), 303);
    response.headers.append("Set-Cookie", clearCookieHeader(ZOHO_STATE_COOKIE));
    return response;
  }

  if (url.searchParams.has("error") || !code) {
    const response = Response.redirect(returnToAdmin(request, "denied"), 303);
    response.headers.append("Set-Cookie", clearCookieHeader(ZOHO_STATE_COOKIE));
    return response;
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

    const response = Response.redirect(returnToAdmin(request, "connected"), 303);
    response.headers.append(
      "Set-Cookie",
      cookieHeader(ZOHO_SESSION_COOKIE, encryptSession(session), 60 * 60 * 24 * 30),
    );
    response.headers.append("Set-Cookie", clearCookieHeader(ZOHO_STATE_COOKIE));
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch {
    const response = Response.redirect(returnToAdmin(request, "error"), 303);
    response.headers.append("Set-Cookie", clearCookieHeader(ZOHO_STATE_COOKIE));
    response.headers.set("Cache-Control", "no-store");
    return response;
  }
}
