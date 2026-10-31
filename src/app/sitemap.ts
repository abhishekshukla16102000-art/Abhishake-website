import type { MetadataRoute } from "next";

const siteUrl = "https://www.iabhishekshukla.com";
const seoMetadataLastModified = new Date("2026-10-31T00:00:00.000Z");
const contentLastModified = new Date("2026-10-18T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: seoMetadataLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/business`,
      lastModified: seoMetadataLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/customer-experience-consulting`,
      lastModified: seoMetadataLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/customer-support-outsourcing`,
      lastModified: seoMetadataLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact-centre-bpo-consulting`,
      lastModified: seoMetadataLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/ai-readiness-consulting`,
      lastModified: seoMetadataLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/insights`,
      lastModified: seoMetadataLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/insights/ai-readiness-checklist`,
      lastModified: seoMetadataLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/insights/contact-centre-kpis-before-ai`,
      lastModified: seoMetadataLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
