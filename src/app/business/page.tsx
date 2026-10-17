import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Compass,
  Handshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { siteConfig } from "@/config";

const inquiryHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Call Centre Partnership Discussion with SPS Nexus Tech"
)}&body=${encodeURIComponent(
  "Hello Abhishek,\n\nI would like to explore a potential partnership with SPS Nexus Tech around call centre operations and AI-enabled customer support.\n\nCompany and website:\nMy role:\nCurrent operations and capabilities:\nPotential partnership opportunity:\nPreferred next step:\n\nRegards,"
)}`;

export const metadata: Metadata = {
  title: "Customer Experience and Operations Consulting | Practical AI | Abhishek Shukla",
  description:
    "Practical consulting for customer support, contact centre operations, process improvement, and AI readiness. Find friction, prioritize opportunities, and build a clear action plan.",
  alternates: { canonical: "/business" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://iabhishekshukla.com/business",
    title: "Improve Customer Experience and Operations | Abhishek Shukla",
    description:
      "Helping business teams improve customer service, simplify operations, and identify responsible, practical uses for AI.",
    siteName: "iAbhishekShukla.com",
  },
};

const serviceCards = [
  {
    icon: Users,
    eyebrow: "CUSTOMER EXPERIENCE",
    title: "Customer experience and contact centre performance",
    description:
      "Find where customers repeat themselves, cases escalate, or teams lose time during handoffs. Turn those friction points into practical service improvements.",
    deliverables: [
      "Customer journey, interaction, and handoff review",
      "Review of repeat contacts, escalations, quality gaps, and missing knowledge",
      "Relevant measures such as resolution, quality, service levels, and customer feedback",
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "PRACTICAL AI",
    title: "AI readiness and use case prioritization",
    description:
      "Prioritize AI use cases by business value, readiness, data quality, risk, and the need for human judgement. Avoid investing in automation before the workflow is ready.",
    deliverables: [
      "A ranked list of use cases based on value, feasibility, and readiness",
      "Requirements for knowledge, workflow, data, privacy, and human oversight",
      "A practical pilot recommendation before larger investment",
    ],
  },
  {
    icon: Workflow,
    eyebrow: "OPERATIONS",
    title: "Workflow and operational performance improvement",
    description:
      "Reduce avoidable complexity by clarifying workflows, role ownership, standard operating practices, and performance measures.",
    deliverables: [
      "A map of the current workflow, delays, rework, and handoff issues",
      "Improvement actions prioritized by likely value and effort",
      "An action plan with owners, milestones, and performance measures",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Understand the challenge",
    description:
      "Clarify the business goal, affected teams and customers, current constraints, and how progress will be evaluated.",
  },
  {
    number: "02",
    title: "Review the current state",
    description:
      "Review workflows, team input, and available evidence before recommending a process change or technology.",
  },
  {
    number: "03",
    title: "Agree on the next steps",
    description:
      "Agree on the first priorities, responsible owners, success measures, and a realistic way to test improvements.",
  },
];

const principles = [
  {
    icon: Target,
    title: "Start with the business need",
    text: "Recommendations fit your customer experience, operating model, constraints, and priorities.",
  },
  {
    icon: ShieldCheck,
    title: "Keep people accountable",
    text: "Protect service quality, customer trust, privacy, and human judgement when considering AI.",
  },
  {
    icon: BarChart3,
    title: "Measure before scaling",
    text: "Agree on a baseline and track relevant measures before expanding a change or investment.",
  },
];

export default function BusinessLandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Abhishek Shukla homepage">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold tracking-wide text-white shadow-sm">
              AS
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-tight text-slate-950 sm:text-base">
                Abhishek Shukla
              </span>
              <span className="hidden text-xs text-slate-500 sm:block">
                CX · Operations · Practical AI
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            <a href="#services" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              Services
            </a>
            <a href="#partnership" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              Partnership
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              About
            </a>
          </nav>

          <a
            href={inquiryHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 sm:px-5"
          >
            <span className="hidden sm:inline">Partner with us</span>
            <span className="sm:hidden">Partner</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 82% 18%, rgba(14,165,233,0.25), transparent 34%), radial-gradient(ellipse at 6% 88%, rgba(99,102,241,0.18), transparent 34%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.35) 1px, transparent 1px)", backgroundSize: "42px 42px", maskImage: "linear-gradient(to bottom, black, transparent 92%)" }} />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-3.5 py-2 text-xs font-semibold tracking-[0.13em] text-sky-200 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-sky-300" />
              CUSTOMER EXPERIENCE · OPERATIONS · AI
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Improve customer service. Strengthen operations.
              <span className="mt-1 block bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                Use AI where it makes business sense.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              I work with customer support, contact centre, BPO, and operations leaders to identify avoidable friction, improve service workflows, and decide where AI can help. You get a clearer view of the problem and a practical plan for what to improve first.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={inquiryHref}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                Discuss a Call Centre Partnership
                <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.08]"
              >
                See how I can help
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-300" /> Clear priorities tied to a business goal</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-300" /> Human oversight remains central</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] bg-sky-400/10 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-900/90 p-5 shadow-2xl shadow-black/30 sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-sky-300">A clear route to improvement</p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">What your team can gain</h2>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
                  <Compass size={25} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { number: "01", title: "Pinpoint the friction", text: "Identify where service, handoffs, or everyday work breaks down." },
                  { number: "02", title: "Prioritize the opportunities", text: "Focus on changes that are useful, achievable, and proportionate to risk." },
                  { number: "03", title: "Build an action plan", text: "Set practical next steps, owners, and measures of progress." },
                ].map((item) => (
                  <div key={item.number} className="flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition hover:border-sky-300/25 hover:bg-white/[0.055]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-xs font-bold text-sky-200">{item.number}</span>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-sky-300/[0.08] p-4">
                <ShieldCheck className="mt-0.5 shrink-0 text-sky-200" size={20} aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-300">
                  <span className="font-semibold text-white">People, process, data, and AI.</span> Choose the right mix for the business need, not automation for its own sake.
                </p>
              </div>
            </div>
            <div className="relative mt-4 flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-black/10">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/15 bg-slate-800">
                <Image src={siteConfig.profileImage} alt={siteConfig.name} fill sizes="48px" className="object-cover object-top" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-white">Abhishek Shukla</p>
                <p className="mt-0.5 text-xs leading-5 text-slate-400">Founder at SPS Nexus Tech<br />Customer Experience and AI Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">Who this helps</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">For leaders who need a clear next move.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">This work is designed for customer experience, contact centre, BPO, and operations teams facing practical service or workflow challenges.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Repeat customer contacts, avoidable escalations, or inconsistent service",
              "Manual tasks, unclear handoffs, and workflows that depend on workarounds",
              "Limited visibility into service quality, workload, or operating performance",
              "Pressure to adopt AI without a clear use case or readiness plan",
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                  {index === 0 ? <Target size={15} /> : index === 1 ? <Workflow size={15} /> : index === 2 ? <BarChart3 size={15} /> : <Sparkles size={15} />}
                </span>
                <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership" className="scroll-mt-24 overflow-hidden border-y border-slate-200 bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Partnership opportunity</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Build better customer support together.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              SPS Nexus Tech is exploring partnerships with call centre operators, BPO companies, and technology providers to shape and validate practical AI-enabled customer support. The goal is to combine operational experience, human expertise, and appropriate AI in ways that can be tested and measured.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={inquiryHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-300">
                Discuss a Call Centre Partnership <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="#services" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.06]">
                Explore consulting services
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Call centre and BPO operators",
                text: "Bring real customer service workflows, agent experience, and operational insight. Together we can identify a suitable first use case and agree how service quality should be measured."
              },
              {
                icon: Workflow,
                title: "AI and technology partners",
                text: "Explore how tools, integrations, knowledge resources, and human handoffs could support a practical customer service workflow. Fit and feasibility would be reviewed before selecting technology."
              },
              {
                icon: BarChart3,
                title: "Pilot-first collaboration",
                text: "Start with a clearly scoped problem, agreed responsibilities, suitable privacy and quality controls, and baseline measures. Review what changes before making decisions about wider rollout."
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-sky-300/20 bg-sky-300/[0.06] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200">
                <Handshake size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">A proposed AI plus human roadmap</h3>
                <div className="mt-5 grid gap-5 md:grid-cols-3">
                  <div>
                    <p className="text-sm font-bold text-sky-200">Phase 1</p>
                    <p className="mt-2 text-base font-semibold text-white">Support human agents</p>
                    <p className="mt-2 text-base leading-7 text-slate-300">Evaluate AI assistance for knowledge access, response drafting, and routine agent tasks while people remain in control.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-sky-200">Phase 2</p>
                    <p className="mt-2 text-base font-semibold text-white">Improve context and handoffs</p>
                    <p className="mt-2 text-base leading-7 text-slate-300">Explore ways to preserve conversation context and give human agents a clearer summary when a case needs attention.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-sky-200">Phase 3</p>
                    <p className="mt-2 text-base font-semibold text-white">Automate suitable routine tasks</p>
                    <p className="mt-2 text-base leading-7 text-slate-300">Consider higher automation only for appropriate interactions, with quality checks and a clear path to human support.</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-400">This is a proposed direction to evaluate with partners, not a claim that a finished AI call centre product is already available. Scope, capability, and readiness would need to be validated before a pilot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">Business services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Solve the problems that slow your team down.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Whether the challenge is rising repeat contacts, inconsistent service, manual work, or uncertainty about AI, the first step is to understand the causes and agree what is worth improving.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceCards.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="card-3d group flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white via-white to-sky-50/60 p-6 shadow-sm sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-700 group-hover:text-white">
                      <Icon size={23} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold tracking-[0.12em] text-slate-400">{service.eyebrow}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{service.description}</p>
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Potential deliverables</p>
                    <ul className="space-y-3">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700">
                          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-sky-700" aria-hidden="true" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href={inquiryHref} className="mt-7 inline-flex items-center gap-2 font-semibold text-sky-800 transition group-hover:text-sky-600">
                    Discuss this service <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-slate-500">
            Scope and deliverables are agreed after an initial discussion. Recommendations are tailored to the information available; specific financial or operational outcomes are not guaranteed.
          </p>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">How it works</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Make a better decision before committing time or budget.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We will discuss your current process, what is not working, what you have already tried, and what a useful result would look like. From there, we can determine whether a short assessment, process improvement, or AI readiness review is the right next step.
            </p>
            <a href={inquiryHref} className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800">
              Discuss your challenge <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:gap-6 sm:p-7">
                <span className="text-2xl font-light tracking-tight text-sky-700 sm:text-3xl">{step.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">A grounded approach</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Practical improvement, not AI for appearances.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="rounded-2xl border border-slate-200 p-6 sm:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-800">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{principle.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:grid-cols-[auto_1fr] md:gap-10 lg:p-10">
          <div className="mx-auto md:mx-0">
            <div className="relative h-36 w-36 overflow-hidden rounded-[1.75rem] border-4 border-white bg-slate-100 shadow-xl ring-1 ring-slate-200 sm:h-44 sm:w-44">
              <Image src={siteConfig.profileImage} alt={siteConfig.name} fill sizes="(max-width: 640px) 144px, 176px" className="object-cover object-top" />
            </div>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-800 md:w-full">
              LinkedIn profile <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="min-w-0 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">Your point of contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Abhishek Shukla</h2>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-800 sm:text-lg">Founder at SPS Nexus Tech. Customer Experience and AI Leader. Consultant, Project Leader, and Author.</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              I bring together customer experience, service operations, process improvement, data, and practical AI to help teams make informed decisions. The focus is always on business needs, people, and changes that can be tested and measured.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              <span className="rounded-full bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-900 ring-1 ring-sky-100">7+ years of experience</span>
              <span className="rounded-full bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">Thinkers360 Top 50: AI Ethics</span>
              <span className="rounded-full bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">Top 50: Customer Loyalty</span>
              <span className="rounded-full bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">Author, The Bridge You Become</span>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 text-left sm:grid-cols-2">
              <div className="flex min-w-0 items-start gap-3 rounded-xl bg-slate-50 p-3.5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-sky-700" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500">Location</p>
                  <p className="mt-1 text-sm font-semibold leading-5 text-slate-800">{siteConfig.location}</p>
                </div>
              </div>
              <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="flex min-w-0 items-start gap-3 rounded-xl bg-slate-50 p-3.5 transition hover:bg-sky-50">
                <Phone size={18} className="mt-0.5 shrink-0 text-sky-700" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500">Phone</p>
                  <p className="mt-1 break-words text-sm font-semibold leading-5 text-slate-800">{siteConfig.phone}</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex min-w-0 items-start gap-3 rounded-xl bg-slate-50 p-3.5 transition hover:bg-sky-50 sm:col-span-2">
                <Mail size={18} className="mt-0.5 shrink-0 text-sky-700" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500">Business enquiries</p>
                  <p className="mt-1 break-all text-sm font-semibold leading-5 text-slate-800">{siteConfig.email}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300 sm:text-sm">Start a conversation</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Tell me what your business needs to improve.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Briefly describe your challenge and the outcome you are aiming for. We can discuss whether a focused assessment, workflow improvement, or AI readiness review is the most useful next step.
            </p>
          </div>
          <div className="w-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8 lg:min-w-[320px]">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-200">
              <Mail size={23} aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm text-slate-400">Email directly</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-1 block break-all text-lg font-semibold text-white underline decoration-sky-400/50 underline-offset-4 hover:decoration-sky-300">
              {siteConfig.email}
            </a>
            <div className="mt-5 space-y-4 border-t border-white/10 pt-5">
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="mt-1 block font-semibold text-white underline decoration-sky-400/50 underline-offset-4 hover:decoration-sky-300">{siteConfig.phone}</a>
              </div>
              <div className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                <MapPin size={17} className="mt-1 shrink-0 text-sky-300" aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
            <a href={inquiryHref} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-300">
              Start a business conversation <ArrowRight size={17} aria-hidden="true" />
            </a>
            <p className="mt-4 text-xs leading-5 text-slate-400">
              Your email app will open with a draft. Review it and press Send to contact me.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Abhishek Shukla. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/" className="transition hover:text-white">Main website</Link>
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}
