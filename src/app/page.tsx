import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Experience & Contact Centre Consulting | SPS Nexus Tech",
  description:
    "Remote customer experience and contact centre consulting for businesses in the US, Canada and internationally. Improve support workflows, service quality and practical AI readiness.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iabhishekshukla.com/",
    title: "Customer Experience & Contact Centre Consulting | SPS Nexus Tech",
    description:
      "Remote customer experience and contact centre consulting for businesses in the US, Canada and internationally. Improve support workflows, service quality and practical AI readiness.",
    siteName: "iAbhishekShukla.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Experience & Contact Centre Consulting | SPS Nexus Tech",
    description:
      "Remote customer experience and contact centre consulting for businesses in the US, Canada and internationally. Improve support workflows, service quality and practical AI readiness.",
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
