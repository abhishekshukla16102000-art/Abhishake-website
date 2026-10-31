import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Users, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Experience Consulting for Businesses | Abhishek Shukla",
  description:
    "Improve customer journeys, service quality, contact centre performance and support operations with practical customer experience consulting from Abhishek Shukla.",
  alternates: { canonical: "/customer-experience-consulting" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iabhishekshukla.com/customer-experience-consulting",
    title: "Customer Experience Consulting for Businesses | Abhishek Shukla",
    description:
      "Improve customer journeys, service quality, contact centre performance and support operations with practical customer experience consulting.",
    siteName: "iAbhishekShukla.com",
  },
};

const reviewAreas = [
  {
    title: "Customer journeys and repeat contacts",
    text: "Map the steps customers take, identify where they get stuck, and examine why they need to contact your team again.",
  },
  {
    title: "Service operations and handoffs",
    text: "Review how work moves between channels, teams, queues, and escalation points, including where ownership becomes unclear.",
  },
  {
    title: "Quality, knowledge, and consistency",
    text: "Explore how agents access accurate information, how quality is reviewed, and whether guidance supports consistent service.",
  },
  {
    title: "Performance measures and feedback",
    text: "Select measures that match the problem, such as resolution, repeat contact, quality, response time, service levels, and customer feedback.",
  },
];

const steps = [
  {
    number: "01",
    title: "Define the customer and business problem",
    text: "Agree which customers, journeys, channels, or service outcomes matter most and what evidence is available.",
  },
  {
    number: "02",
    title: "Understand the current experience",
    text: "Review workflows, customer feedback, operational data, team input, and existing quality practices where available.",
  },
  {
    number: "03",
    title: "Prioritize practical changes",
    text: "Separate root causes from symptoms and rank changes by likely value, effort, dependencies, and customer impact.",
  },
  {
    number: "04",
    title: "Measure, learn, and refine",
    text: "Agree owners, a baseline, and review points so the organization can evaluate what changed before expanding the approach.",
  },
];

export default function CustomerExperienceConsultingPage() {
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
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Customer experience and service operations</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Customer experience consulting built around real service problems
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Customer experience improves when organizations understand what customers are trying to do, where the journey becomes difficult, and what prevents teams from resolving issues consistently. I help business teams examine those causes and decide what to improve first.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/business#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">
              Discuss a CX challenge <ArrowRight size={17} />
            </Link>
            <Link href="/contact-centre-bpo-consulting" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Contact centre and BPO consulting
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">What the work can cover</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Find the friction behind the customer experience</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">A practical review starts with your goals and available evidence. It does not assume that every issue needs new technology or that the same solution fits every organization.</p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {reviewAreas.map((area) => (
              <article key={area.title} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/50 p-6 sm:p-7">
                <CheckCircle2 className="text-sky-700" size={23} aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{area.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">A structured approach</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">From customer friction to a clear action plan</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">The scope depends on your operations, data, teams, and goals. Recommendations are agreed with you and are not a promise of a particular business result.</p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <Compass className="mt-1 shrink-0 text-sky-700" size={22} />
              <p className="text-sm leading-6 text-slate-600">Relevant measures may include first-contact resolution, repeat contacts, quality scores, service levels, response times, escalations, and customer feedback. Which measures matter depends on the problem being addressed.</p>
            </div>
          </div>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <span className="text-2xl font-light text-sky-700">{step.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Who this is for</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Support for teams responsible for customer outcomes</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">This work can be relevant to CX leaders, customer support managers, contact centre teams, operations leaders, and organizations reviewing service consistency or customer journeys.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5"><Users className="text-sky-700" size={22} /><h3 className="mt-3 font-semibold">People and quality</h3><p className="mt-2 text-sm leading-6 text-slate-600">Agent guidance, coaching, knowledge, quality checks, and escalation ownership.</p></div>
            <div className="rounded-2xl border border-slate-200 p-5"><Workflow className="text-sky-700" size={22} /><h3 className="mt-3 font-semibold">Process and journeys</h3><p className="mt-2 text-sm leading-6 text-slate-600">Customer effort, workflow steps, handoffs, repeat work, and process delays.</p></div>
            <div className="rounded-2xl border border-slate-200 p-5"><Compass className="text-sky-700" size={22} /><h3 className="mt-3 font-semibold">Measurement and action</h3><p className="mt-2 text-sm leading-6 text-slate-600">Baselines, ownership, practical priorities, and a review cadence.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-7 space-y-6">
            <div><h3 className="font-semibold">What does customer experience consulting involve?</h3><p className="mt-2 text-base leading-7 text-slate-300">It can include reviewing customer journeys, support workflows, feedback, handoffs, quality practices, and service measures, then prioritizing improvements based on the evidence and business goals.</p></div>
            <div><h3 className="font-semibold">Does every CX problem require AI?</h3><p className="mt-2 text-base leading-7 text-slate-300">No. Some problems are better addressed through process clarity, training, knowledge management, ownership, or measurement. Technology is considered when it fits the need and readiness.</p></div>
            <div><h3 className="font-semibold">Are specific results guaranteed?</h3><p className="mt-2 text-base leading-7 text-slate-300">No. Findings and recommendations are tailored to the information available. Results depend on the organization's context, decisions, and execution.</p></div>
          </div>
          <Link href="/business#contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 hover:bg-sky-300">Discuss your customer experience goals <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
