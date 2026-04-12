import type { MetadataRoute } from "next";

const BASE = "https://www.phantompasting.com";

// Static dates — update when page content changes. Using new Date() causes
// Googlebot to re-crawl the entire site on every request (crawl budget waste).
const SITE_LAUNCH  = new Date("2026-03-20");
const SERVICES_REV = new Date("2026-04-01");
const CITY_REV     = new Date("2026-04-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Homepage ────────────────────────────────────────────────
    {
      url: BASE,
      lastModified: SITE_LAUNCH,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Services ────────────────────────────────────────────────
    {
      url: `${BASE}/services/wheat-pasting`,
      lastModified: SERVICES_REV,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/services/chalk-spray-stencils`,
      lastModified: SERVICES_REV,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/services/full-impact-campaigns`,
      lastModified: SERVICES_REV,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Core pages ──────────────────────────────────────────────
    {
      url: `${BASE}/about`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/contact`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Gallery ─────────────────────────────────────────────────
    {
      url: `${BASE}/gallery`,
      lastModified: new Date("2026-04-11"),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Work / Case Studies ──────────────────────────────────────
    {
      url: `${BASE}/work/fashionpass-los-angeles`,
      lastModified: new Date("2025-11-10"),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${BASE}/work/fifa-world-cup-atlanta`,
      lastModified: new Date("2026-01-20"),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${BASE}/work/incrediwear-street-campaign`,
      lastModified: new Date("2025-12-05"),
      changeFrequency: "never",
      priority: 0.8,
    },

    // ── Tier 1 City Pages ───────────────────────────────────────
    {
      url: `${BASE}/locations/los-angeles`,
      lastModified: CITY_REV,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/locations/new-york`,
      lastModified: CITY_REV,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/locations/chicago`,
      lastModified: CITY_REV,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/locations/miami`,
      lastModified: CITY_REV,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/locations/atlanta`,
      lastModified: CITY_REV,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
