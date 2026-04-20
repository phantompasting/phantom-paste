/**
 * Self-building sitemap — lastmod is derived from each page file's last git
 * commit date, so Google sees accurate freshness signals without manual bumping.
 *
 * Pattern ported from 3floorguys.com/scripts/generate-sitemap.mjs:
 *   git log -1 --format=%aI -- <file>  →  ISO date  →  Date object
 *
 * Fallback chain: git log → fs.statSync mtime → SITE_LAUNCH constant.
 * This runs server-side at `next build` time (Next.js App Router route), so
 * execSync is safe here — it never runs in the browser.
 *
 * MAINTENANCE: When adding a new page, add its entry to ROUTES_META below.
 * That's the only file you need to touch.
 */

import type { MetadataRoute } from "next";
import { execSync } from "child_process";
import { existsSync, statSync } from "fs";
import { join } from "path";

const BASE = "https://www.phantompasting.com";
const REPO_ROOT = process.cwd();

// ── Route registry ────────────────────────────────────────────────────────────
// Single source of truth. Add new pages here — sitemap + IndexNow both pull
// from this list (see scripts/indexnow-submit.mjs).
//
// `file` is the page's source file relative to repo root. Git log uses it to
// find the last commit that touched this page.
type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

interface RouteMeta {
  path: string;
  file: string;
  priority: number;
  changeFreq: ChangeFreq;
}

export const ROUTES_META: RouteMeta[] = [
  // ── Homepage ──────────────────────────────────────────────────────────────
  { path: "/",                               file: "app/page.tsx",                                         priority: 1.0,  changeFreq: "weekly"  },

  // ── Services ──────────────────────────────────────────────────────────────
  { path: "/services",                       file: "app/services/page.tsx",                                priority: 0.9,  changeFreq: "monthly" },
  { path: "/services/wheat-pasting",         file: "app/services/wheat-pasting/page.tsx",                  priority: 0.95, changeFreq: "monthly" },
  { path: "/services/chalk-spray-stencils",  file: "app/services/chalk-spray-stencils/page.tsx",           priority: 0.9,  changeFreq: "monthly" },
  { path: "/services/full-impact-campaigns", file: "app/services/full-impact-campaigns/page.tsx",          priority: 0.9,  changeFreq: "monthly" },

  // ── Core pages ────────────────────────────────────────────────────────────
  { path: "/about",                          file: "app/about/page.tsx",                                   priority: 0.65, changeFreq: "monthly" },
  { path: "/contact",                        file: "app/contact/page.tsx",                                 priority: 0.8,  changeFreq: "monthly" },
  { path: "/gallery",                        file: "app/gallery/page.tsx",                                 priority: 0.7,  changeFreq: "monthly" },

  // ── Work / Case Studies ───────────────────────────────────────────────────
  { path: "/work",                           file: "app/work/page.tsx",                                    priority: 0.75, changeFreq: "monthly" },
  { path: "/work/fashionpass-los-angeles",   file: "app/work/fashionpass-los-angeles/page.tsx",            priority: 0.8,  changeFreq: "never"   },
  { path: "/work/fifa-world-cup-atlanta",    file: "app/work/fifa-world-cup-atlanta/page.tsx",             priority: 0.8,  changeFreq: "never"   },
  { path: "/work/incrediwear-street-campaign", file: "app/work/incrediwear-street-campaign/page.tsx",      priority: 0.8,  changeFreq: "never"   },

  // ── Locations (hub + Tier 1 cities) ──────────────────────────────────────
  { path: "/locations",                      file: "app/locations/page.tsx",                               priority: 0.85, changeFreq: "monthly" },
  { path: "/locations/new-york",             file: "app/locations/new-york/page.tsx",                      priority: 0.9,  changeFreq: "monthly" },
  { path: "/locations/los-angeles",          file: "app/locations/los-angeles/page.tsx",                   priority: 0.9,  changeFreq: "monthly" },
  { path: "/locations/miami",                file: "app/locations/miami/page.tsx",                         priority: 0.85, changeFreq: "monthly" },
  { path: "/locations/chicago",              file: "app/locations/chicago/page.tsx",                       priority: 0.85, changeFreq: "monthly" },
  { path: "/locations/atlanta",              file: "app/locations/atlanta/page.tsx",                       priority: 0.85, changeFreq: "monthly" },

  // ── Blog (add posts here as they go live) ─────────────────────────────────
  // { path: "/blog",                        file: "app/blog/page.tsx",                                    priority: 0.8,  changeFreq: "weekly"  },
  // { path: "/blog/what-is-wheat-pasting",  file: "app/blog/what-is-wheat-pasting/page.tsx",              priority: 0.75, changeFreq: "monthly" },
  // { path: "/blog/wheat-pasting-cost-guide", file: "app/blog/wheat-pasting-cost-guide/page.tsx",         priority: 0.75, changeFreq: "monthly" },
];

// ── lastmod helper ────────────────────────────────────────────────────────────

/**
 * Return the Date of the last git commit that touched `relFile`.
 * Falls back to file mtime, then SITE_LAUNCH.
 */
function getLastMod(relFile: string): Date {
  // 1. git log — authoritative in CI (Netlify sets git history correctly)
  try {
    const iso = execSync(`git log -1 --format=%aI -- "${relFile}"`, {
      cwd: REPO_ROOT,
      encoding: "utf-8",
      timeout: 5000,
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    // git not available or file has no commits yet — fall through
  }

  // 2. fs mtime — reliable on dev machines
  try {
    const abs = join(REPO_ROOT, relFile);
    if (existsSync(abs)) return statSync(abs).mtime;
  } catch {
    // fall through
  }

  // 3. Last resort
  return new Date("2026-03-20");
}

// ── Sitemap export ────────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES_META.map(({ path, file, priority, changeFreq }) => ({
    url: `${BASE}${path}`,
    lastModified: getLastMod(file),
    changeFrequency: changeFreq,
    priority,
  }));
}
