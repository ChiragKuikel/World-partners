// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://world-partner.com.np";

  return [
    { url: `${baseUrl}/`, lastModified: new Date("2026-01-29"), priority: 1, },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-01-29"), priority: 0.8 },
    { url: `${baseUrl}/tit`, lastModified: new Date("2026-01-29"), priority: 0.7  },
    { url: `${baseUrl}/ssw`, lastModified: new Date("2026-01-29"), priority:0.7 },
    { url: `${baseUrl}/engineer`, lastModified: new Date("2026-01-29"),priority:0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date("2026-01-29"), changeFrequency:"weekly", priority: 0.7},
    { url: `${baseUrl}/jobs`, lastModified: new Date("2026-01-29"), changeFrequency:"weekly", priority: 0.9},
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-01-29"),priority:0.7 },
  ];
}
