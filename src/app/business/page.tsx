import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Compass,
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
  "Business improvement discussion"
)}&body=${encodeURIComponent(
  "Hi Abhishek,\n\nI'd like to discuss a customer experience, operations, or AI adoption challenge.\n\nBusiness / team:\nCurrent challenge:\nWhat we'd like to improve:\n\nRegards,"
)}`;

export const metadata: Metadata = {
  title: "Customer Experience, Operations & Practical AI Consulting | Abhishek Shukla",
  description:
    "Work with Abhishek Shukla to identify customer-support friction, improve operational workflows, and assess where AI can deliver practical value. Start with the business problem.",
  alternates: { canonical: "/business" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://iabhishekshukla.com/business",
    title: "Improve Customer Operations | Abhishek Shukla",
    description:
      "A practical, human-centred approach to customer experience, operational improvement, and AI adoption.",
    siteName: "iAbhishekShukla.com",
  },
};

const serviceCards = [
  {
    icon: Users,
    eyebrow: "CUSTOMER EXPERIENCE",
    title: "Customer support & service operations",
    description:
      "Find the points where customers, agents, and teams lose time or context—and define practical ways to improve the experience.",
    deliverables: [
      "Customer journey and handoff review",
      "Repeat-contact, escalation, and knowledge-gap analysis",
      "Clear service-quality measures to track",
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "PRACTICAL AI",
    title: "AI opportunity & readiness assessment",
    description:
      "Identify where AI assistance may help, where a simpler process change is better, and where human judgement must stay central.",
    deliverables: [
      "Use-case shortlist based on business value and readiness",
      "Knowledge, workflow, data, and oversight considerations",
      "Prioritized next steps before committing to tools",
    ],
  },
  {
    icon: Workflow,
    eyebrow: "OPERATIONS",
    title: "Process & performance improvement",
    description:
      "Make work easier to understand, manage, and improve with clearer workflows, roles, operating practices, and measures.",
    deliverables: [
      "Current-state workflow and friction-point map",
      "Improvement opportunities ranked by effort and value",
      "A practical action plan with owners and measures",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Understand the challenge",
    description:
      "Align on the business goal, customer or team impact, constraints, and what a useful outcome would look like.",
  },
  {
    number: "02",
    title: "Review the current state",
    description:
      "Work from the process, team input, and available evidence—not assumptions or a pre-selected technology.",
  },
  {
    number: "03",
    title: "Agree on the next steps",
    description:
      "Set priorities, owners, practical measures, and a realistic route to test improvements.",
  },
];

const principles = [
  {
    icon: Target,
    title: "Diagnose before prescribing",
    text: "Choose the approach after the problem and operating context are clear.",
  },
  {
    icon: ShieldCheck,
    title: "Keep people accountable",
    text: "Consider human review, quality, risk, and customer impact when evaluating AI.",
  },
  {
    icon: BarChart3,
    title: "Define how to measure progress",
    text: "Agree on baseline measures before promising outcomes or scaling a solution.",
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
            <a href="#approach" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              How it works
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              About
            </a>
          </nav>

          <a
            href={inquiryHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 sm:px-5"
          >
            <span className="hidden sm:inline">Discuss a challenge</span>
            <span className="sm:hidden">Contact</span>
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
              Improve customer operations
              <span className="mt-1 block bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                before you buy another tool.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              I help customer-support and operations teams uncover friction, improve workflows, and assess where AI can add practical value—starting with the business problem, not a pre-selected technology.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={inquiryHref}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                Discuss your business challenge
                <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.08]"
              >
                Explore services
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-300" /> Practical, scoped recommendations</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-300" /> Human-centred by design</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] bg-sky-400/10 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-900/90 p-5 shadow-2xl shadow-black/30 sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-sky-300">A practical path forward</p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">From friction to focused action</h2>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
                  <Compass size={25} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { number: "01", title: "Understand the workflow", text: "Where do customers or teams lose time, clarity, or context?" },
                  { number: "02", title: "Prioritize what matters", text: "Which changes are useful, feasible, and proportionate to the risk?" },
                  { number: "03", title: "Define the next steps", text: "What should change—and how will progress be measured?" },
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
                  <span className="font-semibold text-white">People + process + data + AI.</span> Use the right mix for the challenge—not automation for its own sake.
                </p>
              </div>
            </div>
            <div className="relative mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:absolute sm:-bottom-7 sm:-left-7 sm:mt-0 sm:max-w-[290px] sm:shadow-xl sm:shadow-black/20">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/15 bg-slate-800">
                <Image src={siteConfig.profileImage} alt={siteConfig.name} fill sizes="48px" className="object-cover object-top" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-white">Abhishek Shukla</p>
                <p className="mt-0.5 text-xs leading-5 text-slate-400">Founder, SPS Nexus Tech · CX & AI leader</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Start with the actual business problem",
            "Recommendations matched to your context",
            "Human oversight and responsible AI considered",
            "Progress measures agreed before rollout",
          ].map((item, index) => (
            <div key={item} className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-700">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-sky-700 shadow-sm ring-1 ring-slate-200">
                {index === 0 ? <Target size={15} /> : index === 1 ? <Compass size={15} /> : index === 2 ? <ShieldCheck size={15} /> : <BarChart3 size={15} />}
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">Business services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Start where the friction is.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A focused engagement can help clarify the problem, establish priorities, and create a realistic plan before you commit to a larger change.
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
                    <span className="text-[10px] font-bold tracking-[0.17em] text-slate-400 sm:text-xs">{service.eyebrow}</span>
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
              Clear thinking before costly commitments.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              The first conversation is about understanding your context. It is not a commitment to buy a tool or launch a large transformation.
            </p>
            <a href={inquiryHref} className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800">
              Talk through the challenge <ArrowRight size={17} aria-hidden="true" />
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
              Useful recommendations—not AI theatre.
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
            <p className="mt-3 text-base font-semibold leading-7 text-slate-800 sm:text-lg">Founder, SPS Nexus Tech · CX & AI Leader · Consultant · Project Leader · Author</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              I work at the intersection of customer experience, operations, data, practical AI, and human-centred leadership. My focus is to understand the real business challenge and help teams define practical, measurable next steps.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              <span className="rounded-full bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-900 ring-1 ring-sky-100">7+ years of experience</span>
              <span className="rounded-full bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">Thinkers360 Top 50 — AI Ethics</span>
              <span className="rounded-full bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">Top 50 — Customer Loyalty</span>
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
              <a href={`tel:${siteConfig.phone.replace(/[^\\d+]/g, "")}`} className="flex min-w-0 items-start gap-3 rounded-xl bg-slate-50 p-3.5 transition hover:bg-sky-50">
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
              Bring the business problem. Let’s work out the right next step.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Share what your team is trying to improve. We can determine whether an assessment, process change, AI use-case review, or another approach makes the most sense.
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
                <a href={`tel:${siteConfig.phone.replace(/[^\\d+]/g, "")}`} className="mt-1 block font-semibold text-white underline decoration-sky-400/50 underline-offset-4 hover:decoration-sky-300">{siteConfig.phone}</a>
              </div>
              <div className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                <MapPin size={17} className="mt-1 shrink-0 text-sky-300" aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
            <a href={inquiryHref} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-300">
              Email your challenge <ArrowRight size={17} aria-hidden="true" />
            </a>
            <p className="mt-4 text-xs leading-5 text-slate-400">
              This opens your email app with a draft. You will need to press Send there.
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
