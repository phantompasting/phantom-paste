import type { MetadataRoute } from "next";

const BASE = "https://www.phantompasting.com";

// Static dates — update when page content changes. Using new Date() causes
// Googlebot to re-crawl the entire site on every request (crawl budget waste).
const SITE_LAUNCH  = new Date("2026-03-20");
const SEO_REV      = new Date("2026-04-16"); // SEO overhaul + structure fixes
const SERVICES_REV = new Date("2026-04-16");
const CITY_REV     = new Date("2026-04-16");
const GALLERY_REV  = new Date("2026-04-11");
const WORK_REV     = new Date("2026-04-16");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Homepage ────────────────────────────────────────────────
    {
      url: BASE,
      lastModified: SEO_REV,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Services (pillar + 3 clusters) ──────────────────────────
    {
      url: `${BASE}/services`,
      lastModified: SERVICES_REV,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/services/wheat-pasting`,
      lastModified: SERVICES_REV,
      changeFrequency: "monthly",
      priority: 0.95,
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
      priority: 0.65,
    },
    {
      url: `${BASE}/contact`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/gallery`,
      lastModified: GALLERY_REV,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Work / Case Studies ─────────────────────────────────────
    {
      url: `${BASE}/work`,
      lastModified: WORK_REV,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE}/work/fashionpass-los-angeles`,
      lastModified: WORK_REV,
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${BASE}/work/fifa-world-cup-atlanta`,
      lastModified: WORK_REV,
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${BASE}/work/incrediwear-street-campaign`,
      lastModified: WORK_REV,
      changeFrequency: "never",
      priority: 0.8,
    },

    // ── Locations (hub + 5 city pages) ──────────────────────────
    {
      url: `${BASE}/locations`,
      lastModified: CITY_REV,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/locations/new-york`,
      lastModified: CITY_REV,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/locations/los-angeles`,
      lastModified: CITY_REV,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/locations/miami`,
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
      url: `${BASE}/locations/atlanta`,
      lastModified: CITY_REV,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
