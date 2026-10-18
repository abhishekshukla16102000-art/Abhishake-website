import type { MetadataRoute } from "next";

const siteUrl = "https://www.iabhishekshukla.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
    },
    {
      url: `${siteUrl}/business`,
    },
  ];
}
