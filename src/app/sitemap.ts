import type { MetadataRoute } from "next";

const siteUrl = "https://iabhishekshukla.com";
const lastModified = new Date("2026-10-18T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/business`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/customer-experience-consulting`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact-centre-bpo-consulting`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/ai-readiness-consulting`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/insights/ai-readiness-checklist`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/insights/contact-centre-kpis-before-ai`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
