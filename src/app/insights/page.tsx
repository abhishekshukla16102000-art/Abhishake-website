import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "CX, AI & Operations Insights | Abhishek Shukla",
  description:
    "Practical guides for customer experience, AI adoption, and contact centre operations. Explore AI readiness, service performance metrics, and responsible improvement.",
  alternates: { canonical: "/insights" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iabhishekshukla.com/insights",
    title: "CX, AI & Operations Insights | Abhishek Shukla",
    description:
      "Practical guides for customer experience, AI adoption, and contact centre operations.",
    siteName: "iAbhishekShukla.com",
  },
};

const guides = [
  {
    category: "AI ADOPTION",
    title: "AI Readiness Checklist: 10 Questions Before a Business Pilot",
    summary:
      "Evaluate business value, workflow fit, data readiness, risk, human oversight and pilot success measures before committing to an AI project.",
    href: "/insights/ai-readiness-checklist",
    icon: ClipboardCheck,
  },
  {
    category: "CONTACT CENTRE OPERATIONS",
    title: "Contact Centre KPIs to Review Before AI Automation",
    summary:
      "Choose a balanced baseline for resolution, quality, repeat contacts, handoffs, customer experience and AI-specific fallback.",
    href: "/insights/contact-centre-kpis-before-ai",
    icon: BookOpen,
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="font-semibold tracking-tight text-slate-950">
            Abhishek Shukla
          </Link>
          <Link
            href="/business"
            className="text-sm font-semibold text-sky-800 hover:text-sky-600"
          >
            Business services <ArrowRight className="ml-1 inline" size={15} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Insights and practical guides
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Clearer decisions for customer experience, operations and AI.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Explore practical guidance from Abhishek Shukla on assessing AI readiness,
            measuring contact centre performance, and making business-first decisions.
            Each guide is designed to help teams identify the right question before
            choosing a tool or changing a workflow.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <article
                key={guide.href}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-800">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
                  {guide.category}
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-snug text-slate-950 sm:text-2xl">
                  <Link href={guide.href} className="hover:text-sky-700">
                    {guide.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                  {guide.summary}
                </p>
                <Link
                  href={guide.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-800 hover:text-sky-600"
                >
                  Read the guide <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Explore consulting services
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Use the guides to frame your questions, then explore specialist services
            for practical support with customer experience, contact centre and BPO
            operations, or AI readiness.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link href="/customer-experience-consulting" className="rounded-xl border border-slate-200 bg-white p-5 font-semibold text-slate-900 hover:border-sky-300 hover:text-sky-800">
              Customer experience consulting <ArrowRight className="ml-1 inline" size={16} aria-hidden="true" />
            </Link>
            <Link href="/contact-centre-bpo-consulting" className="rounded-xl border border-slate-200 bg-white p-5 font-semibold text-slate-900 hover:border-sky-300 hover:text-sky-800">
              Contact centre &amp; BPO consulting <ArrowRight className="ml-1 inline" size={16} aria-hidden="true" />
            </Link>
            <Link href="/ai-readiness-consulting" className="rounded-xl border border-slate-200 bg-white p-5 font-semibold text-slate-900 hover:border-sky-300 hover:text-sky-800">
              AI readiness consulting <ArrowRight className="ml-1 inline" size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500">
        <Link href="/" className="hover:text-sky-700">Home</Link>
        {" · "}
        <Link href="/business" className="hover:text-sky-700">Business services</Link>
      </footer>
    </main>
  );
}
