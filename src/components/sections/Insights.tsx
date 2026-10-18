import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";

const guides = [
  {
    category: "CUSTOMER EXPERIENCE",
    title: "Customer Experience Metrics: A Practical Guide",
    description:
      "Understand CSAT, customer effort, first-contact resolution, repeat contacts and the measures that help teams turn feedback into action.",
    href: "/insights/customer-experience-metrics-guide",
  },
  {
    category: "AI ADOPTION",
    title: "A Practical AI Adoption Roadmap for Business Leaders",
    description:
      "Move from scattered AI experiments to a responsible plan based on real workflows, measurable outcomes and human oversight.",
    href: "/insights/ai-adoption-roadmap",
  },
  {
    category: "CONTACT CENTRE OPERATIONS",
    title: "AI in Contact Centres: Use Cases, Risks and a Pilot Checklist",
    description:
      "Explore agent assistance, interaction summaries, knowledge support and the controls to evaluate before scaling automation.",
    href: "/insights/contact-centre-ai",
  },
];

export function Insights() {
  return (
    <section id="insights" className="bg-slate-50 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
            Practical insights
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Useful guides for CX, AI and operations leaders
          </h2>
          <p className="leading-relaxed text-slate-600">
            Practical guidance to help you frame business problems, evaluate
            trade-offs, and choose meaningful next steps.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.href} className="card-3d flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-[0.12em] text-sky-700">{guide.category}</span>
                <BookOpenText size={18} className="shrink-0 text-sky-700" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold leading-snug text-slate-950">
                <Link href={guide.href} className="transition hover:text-sky-700 focus-visible:underline">
                  {guide.title}
                </Link>
              </h3>
              <p className="mb-6 flex-1 leading-relaxed text-slate-600">{guide.description}</p>
              <Link href={guide.href} className="inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-sky-700 hover:text-sky-900">
                Read the guide <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link href="/insights" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-sky-600 hover:text-sky-700">
            Explore all insights <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
