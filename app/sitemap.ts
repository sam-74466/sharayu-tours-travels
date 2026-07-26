import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sharayutours.com";

  return [
    {
      url: baseUrl,
      priority: 1,
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/booking`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.9,
    },
  ];
}