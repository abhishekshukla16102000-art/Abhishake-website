import { randomBytes } from "node:crypto";
import {
  ZOHO_ACCOUNTS_BASE_URL,
  ZOHO_OAUTH_SCOPES,
  ZOHO_STATE_COOKIE,
  cookieHeader,
  isOutreachAdmin,
} from "@/lib/outreachServer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!isOutreachAdmin(request)) {
    return Response.json({ error: "Unauthorised." }, { status: 401 });
  }

  const clientId = process.env.ZOHO_CLIENT_ID;
  const sessionSecret = process.env.OUTREACH_SESSION_SECRET;
  if (!clientId || !process.env.ZOHO_CLIENT_SECRET || !sessionSecret || sessionSecret.length < 32) {
    return Response.json(
      { error: "Set ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET and a 32+ character OUTREACH_SESSION_SECRET in Vercel first." },
      { status: 503 },
    );
  }

  const origin = new URL(request.url).origin;
  const redirectUri = new URL("/api/outreach/zoho/callback", origin).toString();
  const state = randomBytes(32).toString("base64url");
  const authorizationUrl = new URL("/oauth/v2/auth", ZOHO_ACCOUNTS_BASE_URL);
  authorizationUrl.searchParams.set("client_id", clientId);
  authorizationUrl.searchParams.set("response_type", "code");
  authorizationUrl.searchParams.set("redirect_uri", redirectUri);
  authorizationUrl.searchParams.set("scope", ZOHO_OAUTH_SCOPES);
  authorizationUrl.searchParams.set("access_type", "offline");
  authorizationUrl.searchParams.set("prompt", "consent");
  authorizationUrl.searchParams.set("state", state);

  return Response.json(
    { authorizationUrl: authorizationUrl.toString(), redirectUri },
    {
      headers: {
        "Cache-Control": "no-store",
        "Set-Cookie": cookieHeader(ZOHO_STATE_COOKIE, state, 600),
      },
    },
  );
}
