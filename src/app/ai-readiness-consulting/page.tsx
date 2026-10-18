import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Readiness Consulting for Businesses | Abhishek Shukla",
  description:
    "Assess business workflows, data, risks, and practical AI use cases before investing. AI readiness consulting focused on clear priorities and human oversight.",
  alternates: { canonical: "/ai-readiness-consulting" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://iabhishekshukla.com/ai-readiness-consulting",
    title: "AI Readiness Consulting for Businesses | Abhishek Shukla",
    description:
      "Identify appropriate AI use cases, dependencies, risks, human oversight needs, and practical next steps before scaling.",
    siteName: "iAbhishekShukla.com",
  },
};

const readinessAreas = [
  {
    title: "Business value and workflow fit",
    text: "Define the business problem first. Compare potential use cases by expected value, frequency, complexity, and whether the task genuinely benefits from AI.",
  },
  {
    title: "Data and knowledge readiness",
    text: "Review whether relevant information is available, accurate, current, permissioned, and organized enough to support the proposed workflow.",
  },
  {
    title: "Risk, privacy, and human judgement",
    text: "Identify where errors matter, what information is sensitive, who can approve outputs, and when work must move to a human reviewer.",
  },
  {
    title: "Pilot scope and measurement",
    text: "Define a bounded test, a baseline, success criteria, quality checks, owners, and a decision point before committing to wider implementation.",
  },
];

const questions = [
  { title: "What problem are we solving?", text: "Describe the current workflow, who is affected, and what improvement would be useful." },
  { title: "What evidence is available?", text: "Identify data, documents, policies, examples, and baseline measures needed to assess the opportunity." },
  { title: "What could go wrong?", text: "Consider inaccurate outputs, privacy, access, security, bias, regulatory needs, and the cost of mistakes." },
  { title: "How will we evaluate it?", text: "Agree on quality thresholds, human review, fallback steps, ownership, and whether the pilot should stop, change, or expand." },
];

export default function AiReadinessConsultingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="font-semibold tracking-tight text-slate-950">Abhishek Shukla</Link>
          <Link href="/business" className="text-sm font-semibold text-sky-800 hover:text-sky-600">Business services <ArrowRight className="ml-1 inline" size={15} /></Link>
        </div>
      </header>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Practical AI adoption and readiness</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI readiness consulting that starts with your business problem
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            AI adoption works best when the use case, process, data, risks, and human responsibilities are understood before technology is selected. I help organizations organize those questions, prioritize potential use cases, and define realistic next steps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/business#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">Discuss AI readiness <ArrowRight size={17} /></Link>
            <Link href="/contact-centre-bpo-consulting" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">AI for contact centre workflows</Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">What readiness covers</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Evaluate value, feasibility, and risk together</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">A readiness review does not begin by assuming that AI should be used. It examines where the technology could help, where ordinary process improvement is a better option, and what must be true for a safe and useful test.</p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {readinessAreas.map((area) => (
              <article key={area.title} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/50 p-6 sm:p-7">
                <CheckCircle2 className="text-sky-700" size={23} />
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{area.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">A practical review</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Questions to answer before a pilot</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">A useful outcome is a clearer decision, not a commitment to automate. The depth of review depends on the proposed use case and the organization's constraints.</p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <ShieldCheck className="mt-1 shrink-0 text-sky-700" size={23} />
              <p className="text-sm leading-6 text-slate-600">Human accountability, privacy, security, data permissions, and a way to handle uncertain or incorrect output should be considered as part of the use case.</p>
            </div>
          </div>
          <div className="space-y-4">
            {questions.map((item, index) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <span className="text-xl font-light text-sky-700">0{index + 1}</span>
                <div><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 text-base leading-7 text-slate-600">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Where AI may fit in daily operations</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">Depending on the business and available controls, candidate use cases might include internal knowledge search, summarizing long case histories for human review, drafting responses for agents to approve, classifying requests, or reducing repetitive documentation. These are examples to assess, not claims of an existing product or guaranteed suitability.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6"><Sparkles className="text-sky-700" size={24} /><h3 className="mt-4 font-semibold">Assist</h3><p className="mt-2 text-sm leading-6 text-slate-600">Support a person with retrieval, drafting, or summaries while the person remains responsible.</p></article>
            <article className="rounded-2xl border border-slate-200 p-6"><Workflow className="text-sky-700" size={24} /><h3 className="mt-4 font-semibold">Improve the workflow</h3><p className="mt-2 text-sm leading-6 text-slate-600">Clarify process steps, handoffs, data requirements, and fallback paths around an AI-assisted task.</p></article>
            <article className="rounded-2xl border border-slate-200 p-6"><ShieldCheck className="text-sky-700" size={24} /><h3 className="mt-4 font-semibold">Govern and measure</h3><p className="mt-2 text-sm leading-6 text-slate-600">Monitor quality, errors, privacy, cost, adoption, and outcomes against an agreed baseline.</p></article>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-7 space-y-6">
            <div><h3 className="font-semibold">What is an AI readiness review?</h3><p className="mt-2 text-base leading-7 text-slate-300">It is a structured way to consider candidate use cases, workflow and data readiness, risk, human oversight, and what would be required to run a controlled pilot.</p></div>
            <div><h3 className="font-semibold">Does AI readiness mean we must implement AI?</h3><p className="mt-2 text-base leading-7 text-slate-300">No. The review may conclude that a process change, better knowledge management, or a simpler tool is the better next step.</p></div>
            <div><h3 className="font-semibold">Can you promise a specific return on investment?</h3><p className="mt-2 text-base leading-7 text-slate-300">No. Potential value should be estimated using your data and assumptions, then tested against a defined baseline. Outcomes depend on use case fit and implementation.</p></div>
          </div>
          <Link href="/business#contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 hover:bg-sky-300">Discuss AI readiness for your team <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
