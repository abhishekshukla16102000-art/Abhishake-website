import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhishek Shukla | Business, CX, AI & Career Consulting",
  description:
    "Explore business consulting in customer experience, AI adoption, operations, analytics and leadership, plus career support, hiring guidance and SPS Nexus Tech outsourcing.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iabhishekshukla.com/",
    title: "Abhishek Shukla | Business, CX, AI & Career Consulting",
    description:
      "Explore business consulting in customer experience, AI adoption, operations, analytics and leadership, plus career support, hiring guidance and SPS Nexus Tech outsourcing.",
    siteName: "iAbhishekShukla.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Shukla | Business, CX, AI & Career Consulting",
    description:
      "Explore business consulting in customer experience, AI adoption, operations, analytics and leadership, plus career support, hiring guidance and SPS Nexus Tech outsourcing.",
    creator: "@Abhishek1610200",
  },
};
import {
  Hero,
  CredibilityStrip,
  AudiencePathways,
  WhyItMatters,
  OrganizationSolutions,
  ProfessionalServices,
  TalentHiring,
  Methodology,
  AIPhilosophy,
  LeadershipArchitecture,
  CaseStudies,
  Testimonials,
  ResourceHub,
  PublishedBook,
  Insights,
  Credentials,
  Collaborations,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <section aria-labelledby="outsourcing-heading" className="bg-slate-950 px-6 py-12 text-white sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">SPS Nexus Tech · Outsourcing</p>
              <h2 id="outsourcing-heading" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Customer Support Outsourcing Worldwide</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">Explore a partner-led approach to customer support, contact centre operations and service quality. Requirements, delivery capacity and responsibilities are confirmed before any engagement.</p>
            </div>
            <a href="/customer-support-outsourcing" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">Explore Outsourcing <span aria-hidden="true">→</span></a>
          </div>
        </section>
        <CredibilityStrip />
        <OrganizationSolutions />
        <Methodology />
        <CaseStudies />
        <AIPhilosophy />
        <AudiencePathways />
        <ProfessionalServices />
        <TalentHiring />
        <WhyItMatters />
        <LeadershipArchitecture />
        <Credentials />
        <ResourceHub />
        <PublishedBook />
        <Insights />
        <Collaborations />
      </main>
      <Footer />
    </>
  );
}
