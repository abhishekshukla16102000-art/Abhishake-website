import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Customer Experience & Contact Centre Consulting | SPS Nexus Tech",
  description:
    "Remote customer experience and contact centre consulting for businesses in the US, Canada and internationally. Improve support workflows, service quality and practical AI readiness.",
  keywords: [
    "Abhishek Shukla",
    "customer experience consultant",
    "CX transformation",
    "AI adoption consulting",
    "operations improvement",
    "AI workplace productivity",
    "process improvement",
    "leadership and change management",
    "The Bridge You Become",
  ],
  authors: [{ name: "Abhishek Shukla" }],
  creator: "Abhishek Shukla",
  metadataBase: new URL("https://www.iabhishekshukla.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iabhishekshukla.com",
    title: "SPS Nexus Tech | Customer Experience & Contact Centre Consulting",
    description:
      "Practical customer experience, contact centre operations and AI-readiness consulting for organizations in the US, Canada and international markets.",
    siteName: "iAbhishekShukla.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Shukla | CX, AI Adoption & Operations Consultant",
    description:
      "Practical consulting for customer experience, AI adoption, operational improvement and leadership.",
    creator: "@Abhishek1610200",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "@/components/ScrollToTop";
import { ServiceModal } from "@/components/ServiceModal";
import { Suspense } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.iabhishekshukla.com/#person",
              name: "Abhishek Shukla",
              jobTitle: "Founder of SPS Nexus Tech; Customer Experience and AI Consultant",
              url: "https://www.iabhishekshukla.com",
              image: "https://www.iabhishekshukla.com/about_profile.jpg",
              email: "abhishek@iabhishekshukla.com",
              worksFor: {
                "@type": "Organization",
                "@id": "https://www.iabhishekshukla.com/business#organization",
                name: "SPS Nexus Tech",
                url: "https://www.iabhishekshukla.com/business",
              },
              knowsAbout: [
                "Customer experience management",
                "Contact centre operations",
                "BPO operations",
                "AI adoption and readiness",
                "Business process improvement",
                "Operations and performance management",
                "Human-centred leadership",
              ],
              sameAs: [
                "https://www.linkedin.com/in/abhishek-shukla-cx",
                "https://x.com/Abhishek1610200",
                "https://www.instagram.com/cxai.leader?igsh=ZzUzMDNod3l3cTRq",
                "https://www.youtube.com/@CXAILeader",
              ],
              description:
                "Practical consulting in customer experience, AI adoption, operations improvement and human-centred leadership.",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 transition-colors duration-300">
        {children}
        <ScrollToTop />
        <Suspense fallback={null}>
          <ServiceModal />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
