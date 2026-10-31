import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Handshake, Users, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Centre & BPO Consulting | SPS Nexus Tech",
  description:
    "Explore contact centre and BPO consulting for customer support workflows, service quality, agent handoffs and practical AI readiness. Remote advisory for support teams.",
  alternates: { canonical: "/contact-centre-bpo-consulting" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iabhishekshukla.com/contact-centre-bpo-consulting",
    title: "Contact Centre & BPO Consulting | SPS Nexus Tech",
    description:
      "Practical guidance on contact centre performance, customer support workflows and responsible AI readiness for service teams.",
    siteName: "iAbhishekShukla.com",
  },
};

const focusAreas = [
  {
    title: "Service operations and workflow",
    text: "Review queues, handoffs, ownership, escalation paths, repeat contacts, and unnecessary process steps that may create friction for customers or agents.",
  },
  {
    title: "Agent enablement and quality",
    text: "Explore knowledge access, response guidance, quality assurance, training needs, and the points where agents need clearer context or human support.",
  },
  {
    title: "Performance visibility",
    text: "Select operating measures suited to the service model, such as quality, resolution, service level, wait time, abandonment, repeat contacts, or customer feedback.",
  },
  {
    title: "AI readiness and controlled pilots",
    text: "Assess whether a proposed use case has the workflow, data, safeguards, oversight, and baseline measures needed for a limited pilot.",
  },
];

const safeguards = [
  "Choose a narrow and observable problem before selecting a tool.",
  "Agree baseline measures and who owns the result.",
  "Protect customer information and review applicable privacy requirements.",
  "Keep human review and escalation available where judgement is needed.",
  "Evaluate quality and customer impact before considering wider automation.",
];

export default function ContactCentreBpoConsultingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="font-semibold tracking-tight text-slate-950">Abhishek Shukla</Link>
          <Link href="/business" className="text-sm font-semibold text-sky-800 hover:text-sky-600">SPS Nexus Tech <ArrowRight className="ml-1 inline" size={15} /></Link>
        </div>
      </header>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Contact centre and BPO operations</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Contact centre and BPO consulting for better customer support
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Contact centre performance depends on people, processes, information, technology, and clear ownership working together. SPS Nexus Tech is exploring partnerships and practical advisory opportunities with customer support operators, BPO leaders, and technology providers to identify what is worth improving first.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/business#partnership" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">Explore a partnership <ArrowRight size={17} /></Link>
            <Link href="/customer-experience-consulting" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Customer experience consulting</Link>
            <Link href="/customer-support-outsourcing" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Customer support outsourcing</Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Areas to examine</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Improve the operating model before adding complexity</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">A focused review looks for causes of customer and agent friction. The scope should reflect the operation's channels, customer needs, current systems, data quality, and contractual obligations.</p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <article key={area.title} className="rounded-2xl border border-slate-200 p-6 sm:p-7">
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
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">A pilot-first approach</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Evaluate AI with human oversight</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">A possible collaboration could begin with AI assistance for agent knowledge access or response drafting, then explore better conversation summaries and handoffs. More automation should only be considered when a specific use case is suitable and controls are established.</p>
            <p className="mt-4 text-sm leading-6 text-slate-500">This is a proposed direction to discuss with partners, not a claim that a finished AI call centre product is currently available.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Before starting a pilot</h3>
            <ul className="mt-5 space-y-4">
              {safeguards.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-slate-600"><CheckCircle2 className="mt-1 shrink-0 text-sky-700" size={19} /><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Who can explore a partnership?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6"><Users className="text-sky-700" size={24} /><h3 className="mt-4 text-lg font-semibold">Call centre and BPO operators</h3><p className="mt-2 text-base leading-7 text-slate-600">Bring operational context, agent experience, workflows, and a clearly defined service challenge.</p></article>
            <article className="rounded-2xl border border-slate-200 p-6"><Workflow className="text-sky-700" size={24} /><h3 className="mt-4 text-lg font-semibold">AI and technology providers</h3><p className="mt-2 text-base leading-7 text-slate-600">Assess workflow fit, integration needs, data access, governance, and human handoffs before choosing an implementation path.</p></article>
            <article className="rounded-2xl border border-slate-200 p-6"><Handshake className="text-sky-700" size={24} /><h3 className="mt-4 text-lg font-semibold">Pilot collaborators</h3><p className="mt-2 text-base leading-7 text-slate-600">Agree a small scope, baseline measures, responsibilities, and review criteria before deciding whether to scale.</p></article>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-7 space-y-6">
            <div><h3 className="font-semibold">Do you provide contact centre and BPO consulting?</h3><p className="mt-2 text-base leading-7 text-slate-300">The business offering focuses on understanding customer support, workflows, service operations, and AI readiness, with scope agreed after an initial discussion.</p></div>
            <div><h3 className="font-semibold">Is an AI call centre product already available?</h3><p className="mt-2 text-base leading-7 text-slate-300">The AI-plus-human roadmap on this site is a proposed direction to validate with partners. It should not be interpreted as an already launched product.</p></div>
            <div><h3 className="font-semibold">What should we bring to an initial discussion?</h3><p className="mt-2 text-base leading-7 text-slate-300">A brief description of your operation, the current service challenge, the teams or customers affected, any available baseline measures, and the outcome you want to understand.</p></div>
          </div>
          <Link href="/business#partnership" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 hover:bg-sky-300">Discuss a BPO partnership <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
