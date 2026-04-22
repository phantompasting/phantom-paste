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
import { PUBLISHED_POSTS } from "@/lib/blogRegistry";

// Force static generation at BUILD time. Without this, Next.js 15 + the
// Netlify plugin can wrap the sitemap as a serverless function per request —
// which crashes because execSync("git log ...") needs a git binary that isn't
// in the function runtime. "force-static" guarantees the sitemap is baked
// during `next build` (where git + fs are available) and served as a flat
// file thereafter. Sitemap still auto-updates on every deploy because Netlify
// re-runs `next build` on every git push.
export const dynamic = "force-static";
export const revalidate = false;

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
  // Dynamic [slug] route — each post's lastmod comes from its /content/blog/<slug>.tsx
  // file, so editing a post body naturally updates the sitemap on next build.
  { path: "/blog",                                         file: "app/blog/page.tsx",                                       priority: 0.8,  changeFreq: "weekly"  },
  { path: "/blog/how-to-make-wheat-paste",                 file: "content/blog/how-to-make-wheat-paste.tsx",                priority: 0.75, changeFreq: "monthly" },
  { path: "/blog/is-wheat-pasting-legal",                  file: "content/blog/is-wheat-pasting-legal.tsx",                 priority: 0.75, changeFreq: "monthly" },
  { path: "/blog/wheat-pasting-campaign",                  file: "content/blog/wheat-pasting-campaign.tsx",                 priority: 0.75, changeFreq: "monthly" },
  { path: "/blog/wheat-paste-recipes",                     file: "content/blog/wheat-paste-recipes.tsx",                    priority: 0.75, changeFreq: "monthly" },
  { path: "/blog/snipe-posters-vs-wheat-paste-vs-floor-decals", file: "content/blog/snipe-posters-vs-wheat-paste-vs-floor-decals.tsx", priority: 0.75, changeFreq: "monthly" },
  { path: "/blog/street-postering-tools",                  file: "content/blog/street-postering-tools.tsx",                 priority: 0.75, changeFreq: "monthly" },
  { path: "/blog/flyposting-explained",                    file: "content/blog/flyposting-explained.tsx",                   priority: 0.75, changeFreq: "monthly" },
  { path: "/blog/what-is-wheat-pasting",                   file: "content/blog/what-is-wheat-pasting.tsx",                  priority: 0.8,  changeFreq: "monthly" },
  { path: "/blog/wheat-pasting-cost",                      file: "content/blog/wheat-pasting-cost.tsx",                     priority: 0.8,  changeFreq: "monthly" },
  { path: "/blog/wheat-pasting-vs-billboards",             file: "content/blog/wheat-pasting-vs-billboards.tsx",            priority: 0.75, changeFreq: "monthly" },
  { path: "/blog/wheat-pasting-for-fashion-brands",        file: "content/blog/wheat-pasting-for-fashion-brands.tsx",       priority: 0.75, changeFreq: "monthly" },
  { path: "/blog/guerrilla-marketing-for-music",           file: "content/blog/guerrilla-marketing-for-music.tsx",          priority: 0.75, changeFreq: "monthly" },
  { path: "/blog/wheat-pasting-los-angeles",               file: "content/blog/wheat-pasting-los-angeles.tsx",              priority: 0.8,  changeFreq: "monthly" },
  { path: "/blog/wheat-pasting-new-york",                  file: "content/blog/wheat-pasting-new-york.tsx",                 priority: 0.8,  changeFreq: "monthly" },
  { path: "/blog/wheat-pasting-phoenix",                   file: "content/blog/wheat-pasting-phoenix.tsx",                  priority: 0.75, changeFreq: "monthly" },
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

// Slugs of posts currently shipped (status: "published"). Any ROUTES_META entry
// whose path is `/blog/<slug>` where <slug> is NOT in this set is filtered out —
// keeps drafts out of the public sitemap without requiring a manual sitemap edit
// every time we flip a post's status.
const PUBLISHED_BLOG_SLUGS = new Set(PUBLISHED_POSTS.map((p) => p.slug));

function isLivePath(path: string): boolean {
  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (!blogMatch) return true; // non-blog routes always ship
  const slug = blogMatch[1];
  return slug ? PUBLISHED_BLOG_SLUGS.has(slug) : false;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES_META.filter(({ path }) => isLivePath(path)).map(
    ({ path, file, priority, changeFreq }) => ({
      url: `${BASE}${path}`,
      lastModified: getLastMod(file),
      changeFrequency: changeFreq,
      priority,
    })
  );
}
