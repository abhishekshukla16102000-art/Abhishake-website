import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Experience, AI & Operations Consultant | Abhishek Shukla",
  description:
    "Helping organizations improve customer experience, contact centre operations, and practical AI adoption through process improvement and human-centred consulting.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iabhishekshukla.com/",
    title: "Customer Experience, AI & Operations Consultant | Abhishek Shukla",
    description:
      "Helping organizations improve customer experience, contact centre operations, and practical AI adoption through process improvement and human-centred consulting.",
    siteName: "iAbhishekShukla.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Experience, AI & Operations Consultant | Abhishek Shukla",
    description:
      "Helping organizations improve customer experience, contact centre operations, and practical AI adoption through process improvement and human-centred consulting.",
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
