import type { MetadataRoute } from "next";
import { guides } from "./toolkit/guidesData";

const SITE_URL = "https://www.locketsecurity.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${SITE_URL}/toolkit/${g.slug}`,
    lastModified: new Date(g.dateModified),
    changeFrequency: "monthly",
    priority: g.flagship ? 0.8 : 0.6,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/toolkit`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...guideEntries,
    {
      url: `${SITE_URL}/glossary`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/newsletter`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
