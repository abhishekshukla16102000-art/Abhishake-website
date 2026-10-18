import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Centre KPIs to Review Before AI Automation",
  description:
    "Learn which contact centre metrics to baseline before an AI pilot, including resolution, quality, repeat contacts, transfers, service levels, and customer experience.",
  alternates: { canonical: "/insights/contact-centre-kpis-before-ai" },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://www.iabhishekshukla.com/insights/contact-centre-kpis-before-ai",
    title: "Contact Centre KPIs to Review Before AI Automation",
    description:
      "A practical guide to selecting contact centre measures before introducing AI assistance or automation.",
    publishedTime: "2026-10-18T00:00:00.000Z",
    modifiedTime: "2026-10-18T00:00:00.000Z",
    authors: ["https://www.iabhishekshukla.com/"],
    siteName: "iAbhishekShukla.com",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Contact Centre KPIs to Review Before AI Automation",
  description:
    "A practical guide to selecting contact centre measures before introducing AI assistance or automation.",
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  author: {
    "@type": "Person",
    name: "Abhishek Shukla",
    url: "https://www.iabhishekshukla.com/",
  },
  mainEntityOfPage: "https://www.iabhishekshukla.com/insights/contact-centre-kpis-before-ai",
};

const metrics = [
  {
    title: "Resolution and repeat contact",
    questions: "Are customers getting their issue resolved, and do they need to contact the team again for the same reason?",
    note: "Review resolution with repeat contacts, reopen rates, and the type of request. A shorter interaction does not necessarily mean a better outcome.",
  },
  {
    title: "Quality and policy adherence",
    questions: "Are responses accurate, complete, empathetic, and consistent with approved guidance and process requirements?",
    note: "Use a consistent quality rubric and examine errors by issue type. For AI-assisted work, sample both the draft and the final customer-facing response.",
  },
  {
    title: "Customer effort and feedback",
    questions: "Can customers reach the right support, understand the answer, and move forward without unnecessary friction?",
    note: "Combine structured feedback with recurring complaint themes and examples of where customers get stuck. Consider which channels and customer groups are under-represented.",
  },
  {
    title: "Service level, wait time, and abandonment",
    questions: "How long do customers wait, and how often do they leave before receiving help?",
    note: "Interpret service levels and wait times alongside demand, staffing, issue complexity, and quality. A single metric rarely explains performance by itself.",
  },
  {
    title: "Transfers, escalation, and handoff quality",
    questions: "How often is work transferred, escalated, or repeated because context or ownership is missing?",
    note: "For AI summaries or routing pilots, check whether the next agent receives accurate context and whether the customer must repeat information.",
  },
  {
    title: "Agent effort and workflow time",
    questions: "Which tasks consume agent time, and which steps are necessary for a good customer outcome?",
    note: "Average handling time can provide context, but reducing it in isolation can encourage rushed interactions. Compare it with resolution, quality, rework, and customer impact.",
  },
  {
    title: "AI-specific quality and fallback",
    questions: "When AI is used, how often is its output accepted, corrected, escalated, or rejected?",
    note: "Track incorrect or unsupported answers, agent edits, fallback to a person, failure patterns, response time, and cost where relevant. Define thresholds before testing.",
  },
];

export default function ContactCentreKpisBeforeAiPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="font-semibold tracking-tight text-slate-950">Abhishek Shukla</Link>
          <Link href="/contact-centre-bpo-consulting" className="text-sm font-semibold text-sky-800 hover:text-sky-600">Contact centre consulting <ArrowRight className="ml-1 inline" size={15} /></Link>
        </div>
      </header>

      <article className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Practical guide · Contact centre operations</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">Contact centre KPIs to review before automating customer support</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">An AI pilot can appear faster while making customer outcomes worse if the wrong metrics are used. Before introducing AI assistance, summaries, routing, or automation, capture a baseline that reflects service quality and the full customer journey.</p>

          <div className="mt-7 rounded-2xl border border-sky-100 bg-sky-50 p-5">
            <div className="flex items-start gap-3">
              <BarChart3 className="mt-1 shrink-0 text-sky-800" size={23} />
              <div><h2 className="font-semibold text-slate-950">Do not optimize one number in isolation</h2><p className="mt-2 text-base leading-7 text-slate-700">Choose a primary outcome and a few balancing measures. The exact set depends on your channel mix, service commitments, customer needs, and the type of AI being tested.</p></div>
            </div>
          </div>

          <div className="mt-10 space-y-7">
            {metrics.map((metric, index) => (
              <section key={metric.title} className="border-b border-slate-200 pb-6">
                <h2 className="text-xl font-semibold leading-snug text-slate-950">{index + 1}. {metric.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-700">{metric.questions}</p>
                <p className="mt-2 text-base leading-7 text-slate-600">{metric.note}</p>
              </section>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-950">Create a simple pilot scorecard</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Before the pilot starts, write down the problem, the current baseline, the proposed change, how samples will be reviewed, who is accountable, and the criteria for continuing or stopping. Compare similar request types and time periods where possible, and document other changes that may affect the result.</p>
            <p className="mt-4 text-base leading-7 text-slate-600">If quality drops, customers need more help, or agents spend more time correcting output, pause and investigate rather than assuming that higher automation is progress. A controlled pilot should produce evidence that supports a decision.</p>
          </section>

          <section className="mt-10 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 shrink-0 text-sky-300" size={23} /><div><h2 className="text-2xl font-semibold">Review a contact centre or BPO workflow</h2><p className="mt-3 text-base leading-7 text-slate-300">Explore a practical approach to service performance, agent enablement, workflow handoffs, and AI readiness with human oversight.</p><Link href="/contact-centre-bpo-consulting" className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-300 hover:text-sky-200">Explore contact centre and BPO consulting <ArrowRight size={17} /></Link></div></div>
          </section>
          <p className="mt-8 text-sm leading-6 text-slate-500">Written by Abhishek Shukla, working across customer experience, contact centre operations, process improvement, and practical AI adoption.</p>
        </div>
      </article>
    </main>
  );
}
