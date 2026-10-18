import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck } from "lucide-react";

const guides = [
  {
    href: "/insights/ai-readiness-checklist",
    category: "AI adoption",
    title: "AI readiness checklist: 10 questions before a business pilot",
    summary:
      "Evaluate business value, workflow fit, data, risk, human oversight, and pilot success measures before committing to an AI project.",
    icon: ClipboardCheck,
  },
  {
    href: "/insights/contact-centre-kpis-before-ai",
    category: "Contact centre operations",
    title: "Contact centre KPIs to review before AI automation",
    summary:
      "Build a balanced scorecard covering resolution, quality, repeat contacts, handoffs, customer effort, and AI-specific fallback.",
    icon: BookOpen,
  },
];

export function Insights() {
  return (
    <section id="insights" className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Insights and practical guides</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Useful guidance for CX, operations, and AI decisions</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Start with a clear question, evaluate your options, and make decisions based on business needs, available evidence, and appropriate safeguards.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <article key={guide.href} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-800">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-sky-700">{guide.category}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-950 sm:text-2xl">{guide.title}</h3>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">{guide.summary}</p>
                <Link href={guide.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-800 group-hover:text-sky-600">
                  Read the guide <ArrowRight size={17} className="transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
        <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:p-6">
          <div>
            <h3 className="font-semibold text-slate-950">Looking for help with a business challenge?</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">Explore customer experience, contact centre, BPO, operations, and AI readiness services.</p>
          </div>
          <Link href="/business" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Explore business services <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
