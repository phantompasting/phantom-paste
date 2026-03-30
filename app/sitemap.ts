import type { MetadataRoute } from "next";

const BASE = "https://phantompasting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Homepage ────────────────────────────────────────────────
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Services ────────────────────────────────────────────────
    {
      url: `${BASE}/services/wheat-pasting`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/services/chalk-spray-stencils`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/services/full-impact-campaigns`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Core pages ──────────────────────────────────────────────
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // ── Work / Case Studies (coming soon) ──────────────────────
    {
      url: `${BASE}/work/fashionpass-los-angeles`,
      lastModified: now,
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${BASE}/work/fifa-world-cup-atlanta`,
      lastModified: now,
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${BASE}/work/incrediwear-street-campaign`,
      lastModified: now,
      changeFrequency: "never",
      priority: 0.8,
    },

    // ── Tier 1 City Pages (coming soon) ────────────────────────
    {
      url: `${BASE}/locations/los-angeles`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/locations/new-york`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/locations/chicago`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/locations/miami`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/locations/atlanta`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
