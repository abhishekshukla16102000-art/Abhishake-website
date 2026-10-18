import type { MetadataRoute } from "next";

const siteUrl = "https://www.iabhishekshukla.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/business",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/refund",
  ];

  return pages.map((page) => ({
    url: `${siteUrl}${page}`,
  }));
}
