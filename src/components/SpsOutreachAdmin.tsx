"use client";

import { useState } from "react";

type OutreachStatus = {
  config: {
    zohoOAuthConfigured: boolean;
    openRouterConfigured: boolean;
    senderAddress: string;
    model: string;
  };
  zoho: { connected: boolean; message: string };
  sending: {
    sentToday: number;
    dailyLimit: number;
    remainingToday: number;
    cooldownSeconds: number;
    mode: string;
  };
};

type ApiResult = {
  error?: string;
  authorizationUrl?: string;
  subject?: string;
  body?: string;
  sent?: boolean;
  verifiedInSent?: boolean;
  recipient?: string;
  status?: string;
  message?: string;
};

const sender = "abhishek@iabhishekshukla.com";

export default function SpsOutreachAdmin() {
  const [adminToken, setAdminToken] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [status, setStatus] = useState<OutreachStatus | null>(null);
  const [company, setCompany] = useState("");
  const [recipient, setRecipient] = useState("");
  const [context, setContext] = useState("");
  const [subject, setSubject] = useState("Customer Support & Call Centre Support — SPS NEXUS TECH");
  const [body, setBody] = useState("");
  const [confirmedContact, setConfirmedContact] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  async function apiCall(path: string, method = "GET", payload?: Record<string, unknown>) {
    const response = await fetch(path, {
      method,
      headers: {
        Authorization: `Bearer ${adminToken}`,
        ...(payload ? { "Content-Type": "application/json" } : {}),
      },
      body: payload ? JSON.stringify(payload) : undefined,
      cache: "no-store",
    });
    const data = await response.json().catch(() => ({})) as ApiResult & OutreachStatus;
    if (!response.ok) throw new Error(data.error || "Request failed.");
    return data;
  }

  async function unlock() {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const data = await apiCall("/api/outreach");
      setStatus(data);
      setAuthorized(true);
      const params = new URLSearchParams(window.location.search);
      const zoho = params.get("zoho");
      if (zoho === "connected") setNotice("Zoho Mail has been connected.");
      else if (zoho === "denied") setError("Zoho access was not approved.");
      else if (zoho === "state-error") setError("The Zoho sign-in check expired. Please connect again.");
      else if (zoho === "error") setError("Zoho connection could not be completed. Check the OAuth settings and try again.");
    } catch (cause) {
      setAuthorized(false);
      setStatus(null);
      setError(cause instanceof Error ? cause.message : "Access check failed.");
    } finally {
      setBusy(false);
    }
  }

  async function refreshStatus() {
    const data = await apiCall("/api/outreach");
    setStatus(data);
  }

  async function connectZoho() {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const data = await apiCall("/api/outreach/zoho/connect", "POST", {});
      if (!data.authorizationUrl) throw new Error("Zoho did not return an authorisation URL.");
      window.location.assign(data.authorizationUrl);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not start Zoho connection.");
      setBusy(false);
    }
  }

  async function generateDraft() {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const data = await apiCall("/api/outreach", "POST", {
        action: "draft",
        company,
        context,
      });
      setSubject(data.subject || "Customer Support & Call Centre Support — SPS NEXUS TECH");
      setBody(data.body || "");
      setNotice("Draft generated. Review every sentence and recipient before sending.");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Draft generation failed.");
    } finally {
      setBusy(false);
    }
  }

  async function sendMessage(test = false) {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const data = await apiCall("/api/outreach", "POST", {
        action: test ? "test" : "send",
        to: test ? sender : recipient,
        subject,
        content: body,
        confirmedBusinessContact: confirmedContact,
      });
      setNotice(data.message || "Zoho accepted the message. Check Sent before retrying.");
      await refreshStatus();
      if (!test) {
        setRecipient("");
        setConfirmedContact(false);
      }
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "The email could not be sent.");
      try { await refreshStatus(); } catch { /* Keep the original error visible. */ }
    } finally {
      setBusy(false);
    }
  }

  const canSend = Boolean(
    authorized &&
    status?.zoho.connected &&
    recipient.trim() &&
    body.trim().length >= 30 &&
    subject.trim() &&
    confirmedContact &&
    /unsubscribe|opt[- ]?out|remove this address/i.test(body),
  );

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">SPS NEXUS TECH · Private tool</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Outreach workspace</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            OpenRouter prepares a draft. Zoho Mail sends it from your business mailbox. Each message is reviewed and sent to one address at a time.
          </p>
        </div>

        {!authorized ? (
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Administrator access</h2>
            <p className="mt-2 text-sm text-slate-300">Enter the private outreach access token configured in Vercel. It is held only in this page's memory and is not saved in browser storage.</p>
            <label className="mt-5 block text-sm font-medium" htmlFor="outreach-admin-token">Admin token</label>
            <input
              id="outreach-admin-token"
              type="password"
              autoComplete="off"
              value={adminToken}
              onChange={(event) => setAdminToken(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
              placeholder="Enter the Vercel OUTREACH_ADMIN_TOKEN"
            />
            <button onClick={unlock} disabled={busy || !adminToken.trim()} className="mt-4 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50">
              {busy ? "Checking…" : "Unlock workspace"}
            </button>
          </section>
        ) : (
          <>
            <section className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">OpenRouter</p>
                <p className="mt-2 text-sm font-semibold">{status?.config.openRouterConfigured ? "Configured" : "API key missing"}</p>
                <p className="mt-1 text-xs text-slate-400">{status?.config.model}</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">Zoho Mail</p>
                <p className="mt-2 text-sm font-semibold">{status?.zoho.connected ? "Connected" : "Not connected"}</p>
                <p className="mt-1 text-xs text-slate-400">{status?.zoho.message}</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <p className="text-xs text-slate-400">Today's controlled send count</p>
                <p className="mt-2 text-xl font-semibold tabular-nums">{status?.sending.sentToday ?? 0} / {status?.sending.dailyLimit ?? 20}</p>
                <p className="mt-1 text-xs text-slate-400">India time · one recipient per send</p>
              </div>
            </section>

            {!status?.zoho.connected && (
              <section className="mt-5 rounded-2xl border border-amber-700/60 bg-amber-950/30 p-5">
                <h2 className="font-semibold">Connect your Zoho mailbox</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">The Zoho OAuth application must be configured in Vercel first. The consent screen will request mailbox account read, Sent-folder read and message creation permissions so the tool can identify your sender account, prevent duplicates and send email.</p>
                <button onClick={connectZoho} disabled={busy || !status?.config.zohoOAuthConfigured} className="mt-4 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50">
                  {busy ? "Opening Zoho…" : "Connect Zoho Mail"}
                </button>
                {!status?.config.zohoOAuthConfigured && <p className="mt-3 text-xs text-amber-200">Missing Zoho OAuth credentials or session encryption secret in Vercel.</p>}
              </section>
            )}

            <section className="mt-5 rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">Prepare an individual email</h2>
                  <p className="mt-1 text-sm text-slate-400">Sender: {sender}</p>
                </div>
                <button onClick={() => { void refreshStatus().catch((cause) => setError(cause instanceof Error ? cause.message : "Status refresh failed.")); }} disabled={busy} className="rounded-full border border-slate-600 px-4 py-2 text-xs font-medium text-slate-200 disabled:opacity-50">
                  Refresh status
                </button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="outreach-company" className="block text-sm font-medium">Company</label>
                  <input id="outreach-company" value={company} onChange={(event) => setCompany(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-cyan-400" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="outreach-recipient" className="block text-sm font-medium">Recipient email</label>
                  <input id="outreach-recipient" type="email" value={recipient} onChange={(event) => setRecipient(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-cyan-400" placeholder="name@company.com" />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="outreach-context" className="block text-sm font-medium">Verified company context</label>
                <textarea id="outreach-context" rows={3} value={context} onChange={(event) => setContext(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-cyan-400" placeholder="Paste a short factual description from the company's website or contact page. Do not include private customer data." />
              </div>

              <button onClick={generateDraft} disabled={busy || !company.trim() || !status?.config.openRouterConfigured} className="mt-4 rounded-full border border-cyan-400/60 px-5 py-3 text-sm font-semibold text-cyan-200 disabled:cursor-not-allowed disabled:opacity-50">
                {busy ? "Working…" : "Generate draft with OpenRouter"}
              </button>

              <div className="mt-6">
                <label htmlFor="outreach-subject" className="block text-sm font-medium">Subject</label>
                <input id="outreach-subject" value={subject} onChange={(event) => setSubject(event.target.value)} maxLength={180} className="mt-2 w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-cyan-400" />
              </div>
              <div className="mt-4">
                <label htmlFor="outreach-body" className="block text-sm font-medium">Email body · review and edit before sending</label>
                <textarea id="outreach-body" rows={14} value={body} onChange={(event) => setBody(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-sm leading-6 outline-none focus:border-cyan-400" placeholder="Generate a draft or write the email body here…" />
                <p className="mt-2 text-xs text-slate-400">AI drafts can be inaccurate. Verify company references, recipient address and wording before every send.</p>
              </div>

              <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-300">
                <input type="checkbox" checked={confirmedContact} onChange={(event) => setConfirmedContact(event.target.checked)} className="mt-1 h-4 w-4 accent-cyan-300" />
                I confirm this is a publicly listed business contact appropriate for a vendor or service enquiry, and the email includes an opt-out line.
              </label>

              <div className="mt-5 flex flex-wrap gap-3">
                <button onClick={() => sendMessage(true)} disabled={busy || !status?.zoho.connected} className="rounded-full border border-slate-500 px-5 py-3 text-sm font-semibold text-slate-100 disabled:cursor-not-allowed disabled:opacity-50">
                  Send test to my mailbox
                </button>
                <button onClick={() => sendMessage(false)} disabled={busy || !status?.zoho.connected || !canSend || (status?.sending.cooldownSeconds ?? 0) > 0 || (status?.sending.remainingToday ?? 0) <= 0} className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50">
                  {busy ? "Sending…" : "Send this one email"}
                </button>
              </div>
              {status?.sending.cooldownSeconds ? <p className="mt-3 text-xs text-amber-200">Sending cooldown: wait {status.sending.cooldownSeconds} seconds before the next external message.</p> : null}
              <p className="mt-3 text-xs leading-5 text-slate-400">This tool has no multi-recipient or BCC mode. It enforces 5 minutes between external sends and a limit of 20 per India calendar day. Zoho's current policy says bulk/burst sending from ordinary mailboxes is not supported.</p>
            </section>

            <button onClick={() => { setAuthorized(false); setStatus(null); setAdminToken(""); }} className="mt-5 text-sm text-slate-400 underline underline-offset-4">Lock workspace</button>
          </>
        )}

        {notice && <p role="status" className="mt-5 rounded-xl border border-emerald-700/60 bg-emerald-950/30 p-4 text-sm text-emerald-200">{notice}</p>}
        {error && <p role="alert" className="mt-5 rounded-xl border border-rose-700/60 bg-rose-950/30 p-4 text-sm text-rose-200">{error}</p>}
      </div>
    </main>
  );
}
