import type { MetadataRoute } from "next";

const siteUrl = "https://iabhishekshukla.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/business`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/insights`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/insights/customer-experience-metrics-guide`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/insights/ai-adoption-roadmap`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/insights/contact-centre-ai`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
