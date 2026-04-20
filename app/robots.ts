/**
 * robots.ts — Googlebot + AI bot strategy
 *
 * Two categories of AI bots — handled differently:
 *
 * ALLOW: AI search bots (OAI-SearchBot, PerplexityBot, Claude-SearchBot, etc.)
 *   These power ChatGPT Search, Perplexity, and Claude web answers. They CITE
 *   your site when users ask questions — that citation drives warm, high-intent
 *   referral traffic. AI-referred traffic converts 4.4× better than standard
 *   organic (Superlines 2025). Allow them.
 *
 * BLOCK: AI training scrapers (GPTBot, Google-Extended, ClaudeBot, anthropic-ai, CCBot)
 *   These feed large model training datasets. They give zero attribution and
 *   zero traffic back. Blocking GPTBot has no measurable impact on Google Search
 *   rankings (multiple 2026 studies). Block them.
 *
 * Note: Google-Extended = Gemini TRAINING only — separate from Googlebot (search).
 * Blocking it does NOT affect Google Search rankings.
 *
 * Reference: 3floorguys.com AI bot strategy (2026-04-20 crawlability playbook)
 */
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Standard crawlers ──────────────────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        // Block pagination/filter params + Next.js image optimization endpoint
        // (saves crawl budget on non-canonical query-string variants)
        disallow: ["/_next/image?url=", "/api/"],
      },

      // ── AI search retrieval bots (ALLOW — these cite and drive traffic) ───
      { userAgent: "OAI-SearchBot",    allow: "/" },
      { userAgent: "ChatGPT-User",     allow: "/" },
      { userAgent: "PerplexityBot",    allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User",      allow: "/" },

      // ── AI training scrapers (BLOCK — no attribution, no traffic back) ────
      { userAgent: "GPTBot",           disallow: "/" },
      { userAgent: "Google-Extended",  disallow: "/" },
      { userAgent: "CCBot",            disallow: "/" },
      { userAgent: "anthropic-ai",     disallow: "/" },
      { userAgent: "ClaudeBot",        disallow: "/" },
    ],
    sitemap: [
      "https://www.phantompasting.com/sitemap.xml",
      "https://www.phantompasting.com/sitemap-images.xml",
    ],
  };
}
