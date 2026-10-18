import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CX, AI & Operations Insights | Abhishek Shukla",
  description: "Practical guides for customer experience, AI adoption, and contact centre leaders. Explore metrics, implementation roadmaps, and responsible ways to improve workflows.",
  alternates: { canonical: "/insights" },
};

const guides = [
  { title: "Customer Experience Metrics: A Practical Guide", href: "/insights/customer-experience-metrics-guide", description: "Learn how CSAT, customer effort, first-contact resolution, repeat contacts and quality measures work together." },
  { title: "A Practical AI Adoption Roadmap for Business Leaders", href: "/insights/ai-adoption-roadmap", description: "Move from isolated AI experiments to a measured plan based on workflows, readiness, risk and human oversight." },
  { title: "AI in Contact Centres: Use Cases and Risks", href: "/insights/contact-centre-ai", description: "Evaluate agent assistance, interaction summaries, self-service, human escalation and pilot metrics." },
];

export default function InsightsPage() {
  return <main className="min-h-screen bg-white text-slate-900">
    <header className="border-b border-slate-200 px-6 py-5"><div className="mx-auto flex max-w-6xl justify-between"><Link href="/" className="font-bold">Abhishek Shukla</Link><Link href="/business" className="font-semibold text-sky-700">Consulting services</Link></div></header>
    <section className="bg-slate-950 px-6 py-16 text-white"><div className="mx-auto max-w-6xl"><p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-300">Insights & practical guides</p><h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">Better decisions start with the right questions.</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Practical guidance on customer experience, AI adoption and contact centre operations to help business leaders assess problems, trade-offs and next steps.</p></div></section>
    <section className="px-6 py-14"><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">{guides.map(g => <article key={g.href} className="rounded-2xl border border-slate-200 p-7"><h2 className="text-xl font-bold"><Link className="hover:text-sky-700" href={g.href}>{g.title}</Link></h2><p className="mt-3 leading-relaxed text-slate-600">{g.description}</p><Link className="mt-5 inline-block font-semibold text-sky-700" href={g.href}>Read the guide →</Link></article>)}</div></section>
  </main>;
}