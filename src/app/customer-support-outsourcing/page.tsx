import type { Metadata } from "next";
import Link from "next/link";
import SpsBpoEnquiryForm from "@/components/SpsBpoEnquiryForm";
import SpsFaqAccordion from "@/components/SpsFaqAccordion";
import { ArrowRight, CheckCircle2, Headset, PhoneCall, Users, ClipboardCheck, Mail, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Call Centre & Customer Support Outsourcing | SPS Nexus Tech",
  description:
    "Explore human-led call centre and BPO support with SPS Nexus Tech. Inbound and outbound calling, customer queries, order support and back-office services, scoped to your project.",
  alternates: { canonical: "/customer-support-outsourcing" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iabhishekshukla.com/customer-support-outsourcing",
    title: "Call Centre & Customer Support Outsourcing | SPS Nexus Tech",
    description:
      "Discuss project-based, human-led customer support, inbound and outbound calling, order support and back-office operations with SPS Nexus Tech.",
    siteName: "SPS Nexus Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Centre & Customer Support Outsourcing | SPS Nexus Tech",
    description:
      "Human-led customer support, inbound and outbound calling, order support and project-based BPO operations.",
    creator: "@Abhishek1610200",
  },
};

const services = [
  {
    icon: PhoneCall,
    title: "Inbound call handling",
    text: "Customer enquiries, product or service questions, appointment requests, and agreed call-routing or escalation workflows.",
  },
  {
    icon: Headset,
    title: "Outbound calling",
    text: "Customer follow-ups, lead qualification, appointment confirmation, feedback calls, and other clearly scoped calling campaigns.",
  },
  {
    icon: Mail,
    title: "Customer query support",
    text: "Email and other agreed customer communication queues, with response guidelines, escalation rules, and quality checks defined in advance.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce and order support",
    text: "Order-status questions, delivery updates, returns and exchange enquiries, and customer follow-ups based on your policies.",
  },
  {
    icon: ClipboardCheck,
    title: "Back-office operations",
    text: "Project-defined administrative tasks, data entry, documentation, verification, and routine process support.",
  },
  {
    icon: Users,
    title: "Project-based team setup",
    text: "Recruitment, role-specific training, supervision planning, and delivery preparation based on the agreed contract and workload.",
  },
];

const deliverySteps = [
  {
    title: "1. Share your requirement",
    text: "Tell us about your business, customer type, channels, expected volumes, working hours, languages, and target start date.",
  },
  {
    title: "2. Confirm scope and feasibility",
    text: "We review the workload, staffing profile, training needs, systems, quality expectations, data handling, and commercial fit before making a commitment.",
  },
  {
    title: "3. Agree the contract and plan",
    text: "Both sides confirm pricing, responsibilities, service measures, escalation paths, reporting, security requirements, and launch milestones in writing.",
  },
  {
    title: "4. Prepare the project team",
    text: "After the contract is signed, project-specific recruitment and training can be arranged against the approved requirements and agreed start plan.",
  },
];

const faqs = [
  {
    question: "What customer support services can SPS Nexus Tech discuss?",
    answer:
      "We can assess inbound and outbound calling, customer query handling, e-commerce and order support, email support, appointment follow-ups, and project-defined back-office work.",
  },
  {
    question: "Do you already have a large, ready-to-deploy team?",
    answer:
      "Staffing is planned around each signed project. Once the scope, commercial terms, and requirements are agreed in a contract, project-specific recruitment and training can be arranged. Team size and start dates are confirmed before launch.",
  },
  {
    question: "Can you support businesses outside India?",
    answer:
      "We are open to discussing international projects. Country, time-zone coverage, language needs, data-protection obligations, systems access, and commercial feasibility must be reviewed before confirming delivery.",
  },
  {
    question: "How is pricing decided?",
    answer:
      "Pricing depends on the work type, expected volume, staffing profile, operating hours, training, systems, quality requirements, and contract duration. A proposal is prepared after the requirement is understood.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send a short brief with your company details, service requirement, expected workload, and target start date. We can then arrange an introductory discussion and assess fit.",
  },
];

export default function CustomerSupportOutsourcingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="inline-flex items-center" aria-label="SPS Nexus Tech home">
            <img
              src="/sps-nexus-tech-official-logo.png"
              alt="SPS Nexus Tech"
              className="h-12 w-auto max-w-[220px] object-contain"
            />
          </Link>
          <a
            href="#project-enquiry"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Discuss a project <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            SPS Nexus Tech · BPO & customer operations
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Human-led call centre and customer support outsourcing
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Looking for support with customer calls, follow-ups, service enquiries, or day-to-day operations? SPS Nexus Tech discusses project-based BPO support shaped around your workload, customer needs, operating hours, and quality expectations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#project-enquiry"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Request a project discussion <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore support services
            </a>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-400">
            Every engagement is scoped before commitment. Staffing, coverage, pricing, and launch dates are confirmed against the signed project requirements.
          </p>
        </div>
      </section>

      <section id="services" className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
              Customer support and BPO services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Practical support for the work your customers need done
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Start with one defined process or a wider customer-support requirement. The final scope is agreed around your volumes, customer journey, systems, and service expectations.
            </p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-2xl border border-slate-200 p-6 transition hover:border-sky-300 hover:shadow-sm">
                  <Icon className="text-sky-700" size={25} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
              Clear scope. Planned delivery.
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              How a project moves from enquiry to launch
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              We first understand what needs to be handled, then confirm whether the people, process, systems, and commercial model can support it.
            </p>
          </div>
          <div className="space-y-4">
            {deliverySteps.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-sky-700" size={21} aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
              Built around your requirement
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              What we need to prepare a useful proposal
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A short project brief helps us understand whether the requirement is a fit and what a realistic delivery plan should include.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "The service you want to outsource and the customer types involved",
              "Estimated calls, emails, cases, or records per day or month",
              "Required operating hours, time zone, languages, and coverage days",
              "Existing scripts, SOPs, knowledge resources, and escalation rules",
              "CRM, telephony, ticketing, and other systems the team must use",
              "Quality measures, reporting needs, data controls, and target launch date",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-slate-200 p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-sky-700" size={20} aria-hidden="true" />
                <span className="leading-6 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpsFaqAccordion />

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SpsBpoEnquiryForm />
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <img
              src="/sps-nexus-tech-official-logo.png"
              alt="SPS Nexus Tech"
              className="h-10 w-auto max-w-[190px] object-contain"
            />
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
