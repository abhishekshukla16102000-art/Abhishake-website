import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Support Outsourcing Services | SPS Nexus Tech",
  description:
    "Explore a partner-led approach to customer support outsourcing, contact centre operations, service quality and delivery planning with SPS Nexus Tech. Discuss your requirements before committing.",
  alternates: { canonical: "/customer-support-outsourcing" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.iabhishekshukla.com/customer-support-outsourcing",
    title: "Customer Support Outsourcing Services | SPS Nexus Tech",
    description:
      "Discuss customer support requirements, coverage, channels, service quality and delivery fit with SPS Nexus Tech.",
    siteName: "SPS Nexus Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Support Outsourcing Services | SPS Nexus Tech",
    description:
      "Explore customer support outsourcing, contact centre operations, and service quality.",
    creator: "@Abhishek1610200",
  },
};

const planningPoints = [
  "Customer enquiries across agreed channels, such as email, chat, or voice",
  "Defined support hours, language requirements, expected volumes, and escalation rules",
  "Knowledge-base, response-quality, reporting, and supervisor requirements",
  "Clear ownership for sensitive cases, exceptions, complaints, and customer data",
];

const process = [
  {
    title: "1. Define the support requirement",
    text: "Describe your customers, channels, operating hours, expected volume, language needs, current pain points, and service-level expectations.",
  },
  {
    title: "2. Check delivery fit before promising a service",
    text: "We assess the requirement, operating needs, service expectations, and commercial fit to shape a practical delivery plan.",
  },
  {
    title: "3. Agree scope, measures, and responsibilities",
    text: "Before work begins, the parties should agree on the contract, pricing, data handling, escalation ownership, reporting, quality checks, and a realistic start plan.",
  },
];

export default function CustomerSupportOutsourcingPage() {
  const enquiryHref = `mailto:abhishek@iabhishekshukla.com?subject=${encodeURIComponent(
    "Customer Support Outsourcing Enquiry"
  )}&body=${encodeURIComponent(
    "Hello SPS Nexus Tech,\n\nI would like to discuss a customer-support requirement.\n\nCompany and website:\nMy role:\nChannels needed (voice, email, chat):\nLanguages and support hours:\nApproximate monthly contact volume:\nCurrent challenge and desired outcome:\nTarget start date:\n\nRegards,"
  )}`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="inline-flex items-center" aria-label="SPS Nexus Tech home">
            <img src="/sps-nexus-tech-official-logo.png" alt="SPS Nexus Tech" className="h-12 w-auto max-w-[220px] object-contain" />
          </Link>
          <Link href="/business" className="text-sm font-semibold text-sky-800 hover:text-sky-600">
            Business services <ArrowRight className="ml-1 inline" size={15} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Business Enquiries
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Customer support outsourcing, scoped before you commit
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            SPS Nexus Tech helps businesses improve customer support through a tailored approach to contact centre operations, service quality, and delivery planning. We align the support model with your customer needs, operating hours, channels, and performance goals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={enquiryHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">
              Discuss your support needs <ArrowRight size={17} aria-hidden="true" />
            </a>
            <Link href="/contact-centre-bpo-consulting" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Explore CX and BPO consulting
            </Link>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-400">
            Flexible delivery planning: define the right coverage, channels, service levels, and operating model around your business requirements.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Start with the requirement</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">What a useful outsourcing brief should cover</h2>
            <p className="mt-5 leading-7 text-slate-600">
              A clear brief helps both sides determine whether the work is practical, what it will cost, and which responsibilities need to be agreed before launch.
            </p>
          </div>
          <ul className="space-y-4">
            {planningPoints.map((point) => (
              <li key={point} className="flex gap-3 rounded-xl border border-slate-200 p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-sky-700" size={21} aria-hidden="true" />
                <span className="leading-6 text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-14 sm:px-8 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">How the discussion works</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">A practical path from enquiry to a delivery decision</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {process.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-18">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400 text-slate-950">
            <Handshake size={24} aria-hidden="true" />
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight">Tell us what your customers need</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Share your support requirements, customer channels, and desired outcomes. We will discuss a practical approach aligned with your business goals.
          </p>
          <a href={enquiryHref} className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">
            Send a business enquiry <ArrowRight size={17} aria-hidden="true" />
          </a>
          <p className="mt-5 text-sm leading-6 text-slate-400">
            We work with you to define the right support model, service expectations, and delivery plan for your business.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <img src="/sps-nexus-tech-official-logo.png" alt="SPS Nexus Tech" className="h-10 w-auto max-w-[190px] object-contain" />
            <p>© {new Date().getFullYear()} SPS Nexus Tech</p>
          </div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link href="/business" className="hover:text-slate-900">Business services</Link>
            <a href="mailto:abhishek@iabhishekshukla.com" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
