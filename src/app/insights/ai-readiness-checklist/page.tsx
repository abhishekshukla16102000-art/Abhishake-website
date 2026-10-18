import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Readiness Checklist for Businesses | 10 Questions Before a Pilot",
  description:
    "Use this practical AI readiness checklist to evaluate business value, data, workflow fit, risks, human oversight, and success measures before a pilot.",
  alternates: { canonical: "/insights/ai-readiness-checklist" },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://iabhishekshukla.com/insights/ai-readiness-checklist",
    title: "AI Readiness Checklist for Businesses: 10 Questions Before a Pilot",
    description:
      "A practical checklist for business leaders assessing use cases, data readiness, risk, human oversight, and pilot success measures.",
    publishedTime: "2026-10-18T00:00:00.000Z",
    modifiedTime: "2026-10-18T00:00:00.000Z",
    authors: ["https://iabhishekshukla.com/"],
    siteName: "iAbhishekShukla.com",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Readiness Checklist for Businesses: 10 Questions Before a Pilot",
  description:
    "A practical checklist for business leaders assessing use cases, data readiness, risk, human oversight, and pilot success measures.",
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  author: {
    "@type": "Person",
    name: "Abhishek Shukla",
    url: "https://iabhishekshukla.com/",
  },
  mainEntityOfPage: "https://iabhishekshukla.com/insights/ai-readiness-checklist",
};

const checklist = [
  {
    question: "1. What business problem are we trying to solve?",
    detail: "Describe the current workflow, who experiences the problem, how often it happens, and why it matters. Avoid beginning with a tool or model name.",
  },
  {
    question: "2. What happens today without AI?",
    detail: "Map the current process, time, handoffs, exceptions, workarounds, and existing tools. A simpler process change may solve the issue more reliably.",
  },
  {
    question: "3. How will we recognize a useful outcome?",
    detail: "Choose a small set of measures tied to the problem, then capture a baseline before the pilot. Depending on the use case, this may include quality, time, error rates, customer effort, or cost.",
  },
  {
    question: "4. Is the right information available?",
    detail: "Check whether the data and knowledge are accurate, current, sufficiently complete, permissioned, and usable for this purpose. Missing or outdated knowledge will affect output quality.",
  },
  {
    question: "5. Is AI suitable for the task?",
    detail: "Consider how often the task occurs, how predictable it is, whether the output can be checked, and how harmful a mistake could be. Do not automate a task simply because it is repetitive.",
  },
  {
    question: "6. What are the privacy and security requirements?",
    detail: "Identify sensitive information, access controls, retention needs, vendor data practices, and applicable organizational or legal requirements before sharing data with a tool.",
  },
  {
    question: "7. Where is human judgement required?",
    detail: "Define who reviews outputs, what needs approval, what confidence or quality threshold is acceptable, and when a case must be escalated to a person.",
  },
  {
    question: "8. How will we test accuracy and edge cases?",
    detail: "Use representative examples, including difficult and unusual cases. Track incorrect, incomplete, biased, or unsafe output and decide how those failures will be handled.",
  },
  {
    question: "9. What does the pilot require to operate?",
    detail: "Account for integration, maintenance, training, monitoring, usage costs, process ownership, and the people who will support the workflow after initial testing.",
  },
  {
    question: "10. What decision will we make at the end?",
    detail: "Agree in advance whether the pilot will stop, change, continue, or expand, based on evidence. A pilot is valuable even when it shows an idea should not be scaled.",
  },
];

export default function AiReadinessChecklistPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="font-semibold tracking-tight text-slate-950">Abhishek Shukla</Link>
          <Link href="/ai-readiness-consulting" className="text-sm font-semibold text-sky-800 hover:text-sky-600">AI readiness consulting <ArrowRight className="ml-1 inline" size={15} /></Link>
        </div>
      </header>

      <article className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Practical guide · AI adoption</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">AI readiness checklist: 10 questions to answer before a business pilot</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">A successful AI pilot begins with a defined business problem, appropriate information, clear safeguards, and a way to evaluate whether it helped. This checklist can help leaders, operations teams, and project owners ask the important questions before selecting a tool.</p>
          <div className="mt-7 rounded-2xl border border-sky-100 bg-sky-50 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 shrink-0 text-sky-800" size={23} />
              <div><h2 className="font-semibold text-slate-950">Start with the problem, not the product</h2><p className="mt-2 text-base leading-7 text-slate-700">You may discover that the best next step is a process redesign, clearer knowledge ownership, better reporting, or a smaller technology change rather than AI.</p></div>
            </div>
          </div>

          <div className="mt-10 space-y-7">
            {checklist.map((item) => (
              <section key={item.question} className="border-b border-slate-200 pb-6">
                <h2 className="text-xl font-semibold leading-snug text-slate-950">{item.question}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.detail}</p>
              </section>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-950">Turn the checklist into a decision</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Capture your answers in a short brief: the problem, current process, candidate use case, required data, risks, human checkpoints, baseline, and pilot decision criteria. If important answers are unknown, resolve those gaps before increasing the scope.</p>
            <p className="mt-4 text-base leading-7 text-slate-600">The right level of review depends on the sensitivity of the data, the impact of an incorrect result, and the scale of the proposed use. This checklist is a planning aid, not a substitute for your organization's legal, privacy, security, or compliance review.</p>
          </section>

          <section className="mt-10 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 shrink-0 text-sky-300" size={23} /><div><h2 className="text-2xl font-semibold">Need help prioritizing AI use cases?</h2><p className="mt-3 text-base leading-7 text-slate-300">Explore a structured readiness review covering business value, workflow fit, data, risk, human oversight, and practical next steps.</p><Link href="/ai-readiness-consulting" className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-300 hover:text-sky-200">Explore AI readiness consulting <ArrowRight size={17} /></Link></div></div>
          </section>
          <p className="mt-8 text-sm leading-6 text-slate-500">Written by Abhishek Shukla, who works across customer experience, operations, practical AI adoption, and human-centred leadership.</p>
        </div>
      </article>
    </main>
  );
}
