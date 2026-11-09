# SPS NEXUS TECH Outreach Workspace

The private workspace lives at:

`https://www.iabhishekshukla.com/sps-outreach-admin`

It uses OpenRouter only to draft and personalise copy. It sends mail directly through the Zoho Mail REST API from `abhishek@iabhishekshukla.com`. API keys and Zoho refresh tokens are never placed in browser JavaScript or committed to the repository.

## Vercel environment variables

Add these as **Encrypted** environment variables on the website's Vercel project:

| Variable | Required | Value |
|---|---:|---|
| `OUTREACH_ADMIN_TOKEN` | Yes | A long random secret used to unlock the private workspace |
| `OUTREACH_SESSION_SECRET` | Yes | A separate 32+ character random secret used to encrypt the Zoho refresh-token cookie |
| `OPENROUTER_API_KEY` | Yes | Your OpenRouter API key |
| `OPENROUTER_MODEL` | No | Defaults to `openrouter/free`; keep this for free-model routing |
| `ZOHO_CLIENT_ID` | Yes | Client ID from Zoho API Console |
| `ZOHO_CLIENT_SECRET` | Yes | Client Secret from Zoho API Console |

Generate the two private application secrets locally, for example:

```bash
openssl rand -hex 32
openssl rand -hex 32
```

Use a different generated value for each variable. Do not paste secrets into chat, GitHub, source files, or screenshots. The session secret must remain unchanged after Zoho is connected; changing it invalidates the encrypted browser session and requires reconnecting.

## Create the Zoho OAuth client

1. Open [Zoho API Console](https://api-console.zoho.com/).
2. Create a **Server-based Application**.
3. Set the homepage URL to `https://www.iabhishekshukla.com`.
4. Add this exact Authorized Redirect URI:

   `https://www.iabhishekshukla.com/api/outreach/zoho/callback`

5. Save the Client ID and Client Secret as the Vercel variables above.
6. When connecting the mailbox in the workspace, approve these least-purpose scopes:

   - `ZohoMail.accounts.READ`
   - `ZohoMail.folders.READ`
   - `ZohoMail.messages.READ`
   - `ZohoMail.messages.CREATE`

The accounts and folders read scopes identify the sending mailbox and Sent folder. Message read access is used only for duplicate and daily-volume checks. Message create access is used to send. The application uses the India data centre: `accounts.zoho.in` and `mail.zoho.in`.

## OpenRouter

Create an API key at [OpenRouter](https://openrouter.ai/keys) and save it as `OPENROUTER_API_KEY`. The default `openrouter/free` router chooses among available free models and does not configure a paid fallback. Free inference availability and provider rate limits can vary, so a draft request may occasionally need to be retried.

## First-time connection and self-test

1. Deploy the branch/PR.
2. Open `/sps-outreach-admin`.
3. Enter the `OUTREACH_ADMIN_TOKEN` value and unlock the workspace.
4. Select **Connect Zoho Mail** and sign in to the Zoho account that owns `abhishek@iabhishekshukla.com`.
5. Approve the requested scopes.
6. Return to the workspace and confirm Zoho shows as connected.
7. Select **Send test to my mailbox**. This sends only to `abhishek@iabhishekshukla.com`.

The Zoho refresh token is stored in an encrypted, Secure, HttpOnly, SameSite=Lax cookie for this browser. No database is used. Clearing the browser's site cookies or changing `OUTREACH_SESSION_SECRET` requires reconnecting Zoho in that browser.

## Sending safeguards

- One recipient per API request. No multi-recipient, CC or BCC mode exists.
- Each external send requires the operator to confirm the address is an appropriate, publicly listed business contact.
- Each external message must contain an unsubscribe/opt-out instruction.
- The operator reviews and edits each AI-generated draft before sending.
- Duplicate protection checks the latest 600 messages in the Zoho Sent folder.
- The workspace limits external sends to 20 per India calendar day and enforces a five-minute gap between sends.
- The daily ceiling is also checked against Zoho Sent history, not only the browser's displayed counter.
- Test messages can only be addressed to the configured sender mailbox.
- A successful Zoho API response is not represented as guaranteed inbox delivery. The app separately checks whether the message appears in Sent.

**Important:** Zoho Mail's published policy says bulk/burst sending from an ordinary mailbox is not supported. This workspace is a controlled individual-outreach aid, not a 100-recipient campaign sender. Use a purpose-built, compliant campaign service for opted-in mailing lists, and honour opt-outs and applicable privacy/marketing rules.

## Routes

- `POST /api/outreach/zoho/connect` — starts the authenticated OAuth flow; requires the admin bearer token.
- `GET /api/outreach/zoho/callback` — validates OAuth state, exchanges the code and stores the encrypted browser session.
- `GET /api/outreach` — protected configuration and connection status.
- `POST /api/outreach` — protected OpenRouter draft generation or a single Zoho send/test action.
