/**
 * Image sitemap — served at /sitemap-images.xml
 *
 * Uses the Google image-sitemap extension to give Googlebot explicit image
 * metadata for all campaign photography. Per-page attribution (each image
 * linked to the page it appears on) is the Google-preferred format — it
 * gives context for ranking in Google Images and provides a stronger signal
 * than standalone image URLs.
 *
 * Pattern: adapts 3floorguys/scripts/generate-sitemap.mjs image logic for
 * Next.js App Router route handler (runs server-side at build time).
 *
 * MAINTENANCE: When adding new images to /public/gallery/, add their metadata
 * to IMAGE_META below and add them to the relevant PAGE_IMAGES entry.
 */

import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

// Force static generation — pre-rendered at build, served from Netlify CDN.
export const dynamic = "force-static";
export const revalidate = false;

const BASE = "https://www.phantompasting.com";
const GALLERY_URL = `${BASE}/gallery`;

// ── Image metadata ────────────────────────────────────────────────────────────
// title: short descriptive label (shown in Google Images search results)
// caption: longer alt-style text for image context
const IMAGE_META: Record<string, { title: string; caption: string }> = {
  "bedstuy-stencil.webp": {
    title: "Bedstuy chalk spray stencil — New York street campaign",
    caption: "Phantom Pasting chalk spray stencil activation in Bedford-Stuyvesant, New York",
  },
  "black-pearl-la-chalk-spray-stencil-sidewalk.webp": {
    title: "Black Pearl LA chalk spray stencil on sidewalk",
    caption: "Black Pearl LA brand chalk spray stencil applied to Los Angeles sidewalk — Phantom Pasting",
  },
  "black-pearl-la-stencil-template-grass.webp": {
    title: "Black Pearl stencil template on grass — Phantom Pasting",
    caption: "Custom stencil template positioned on grass before activation — Phantom Pasting",
  },
  "chalk-spray-stencil-sidewalk-guerrilla-marketing.webp": {
    title: "Chalk spray stencil sidewalk guerrilla marketing",
    caption: "Large-format chalk spray stencil guerrilla marketing activation on sidewalk",
  },
  "custom-stencil-template-cut-out-design.webp": {
    title: "Custom stencil template cut-out design",
    caption: "Custom-designed and cut stencil template for street-level campaign — Phantom Pasting",
  },
  "dont-fall-off-wheat-paste-building-bike-rack.webp": {
    title: "Don't Fall Off wheat paste poster — building with bike rack",
    caption: "Don't Fall Off brand wheat paste large-format poster on building wall, bike rack in foreground",
  },
  "dont-fall-off-wheat-paste-pedestrian-street-art.webp": {
    title: "Don't Fall Off wheat paste — pedestrian street art view",
    caption: "Don't Fall Off wheat paste poster at pedestrian eye level — street art style installation",
  },
  "dont-fall-off-wheat-paste-street-view-la.webp": {
    title: "Don't Fall Off wheat paste poster — street view Los Angeles",
    caption: "Don't Fall Off brand wheat paste poster campaign — street-level view in Los Angeles",
  },
  "dont-fall-off-wheat-paste-urban-wall-pink.webp": {
    title: "Don't Fall Off wheat paste on urban wall — pink colorway",
    caption: "Don't Fall Off wheat paste poster on urban wall, pink colorway — Phantom Pasting guerrilla campaign",
  },
  "dont-fall-off-wheat-paste-wall-closeup.webp": {
    title: "Don't Fall Off wheat paste wall closeup — large format poster",
    caption: "Closeup of Don't Fall Off large-format wheat paste poster on wall — Phantom Pasting",
  },
  "fashionpass-wheat-paste-campaign-poster-wall.webp": {
    title: "FashionPass wheat paste campaign poster wall — Los Angeles",
    caption: "FashionPass wheat paste poster campaign — full poster wall installation in Los Angeles",
  },
  "fashionpass-wheat-paste-street-art-wall-la.webp": {
    title: "FashionPass wheat paste street art wall — Los Angeles",
    caption: "FashionPass brand wheat paste street art wall — Phantom Pasting Los Angeles campaign",
  },
  "fashionpass-wheat-paste-street-postering-wall-los-angeles.webp": {
    title: "FashionPass wheat paste poster campaign wall — Los Angeles",
    caption: "FashionPass wheat paste poster campaign wall — Los Angeles street postering by Phantom Pasting",
  },
  "fifa-world-cup-atlanta-wall-installation.webp": {
    title: "FIFA World Cup wheat paste wall installation — Atlanta",
    caption: "FIFA World Cup 2026 official wheat paste wall installation by Phantom Pasting — Atlanta, Georgia",
  },
  "fifa-world-cup-poster-installation-closeup.webp": {
    title: "FIFA World Cup poster installation closeup",
    caption: "Closeup of FIFA World Cup poster installation — large-format wheat paste by Phantom Pasting",
  },
  "fifa-world-cup-poster-wall-angle-view.webp": {
    title: "FIFA World Cup poster wall — angle view Atlanta",
    caption: "Angle view of FIFA World Cup wheat paste poster wall installation — Atlanta",
  },
  "fifa-world-cup-poster-wall-gallery-wide.webp": {
    title: "FIFA World Cup poster wall — wide gallery shot",
    caption: "Wide gallery shot of FIFA World Cup wheat paste poster wall — Phantom Pasting Atlanta campaign",
  },
  "fifa-world-cup-poster-wall-street-perspective.webp": {
    title: "FIFA World Cup poster wall — street perspective Atlanta",
    caption: "Street-level perspective of FIFA World Cup wheat paste poster wall — Atlanta",
  },
  "fifa-world-cup-street-gallery-pedestrian-viewing.webp": {
    title: "FIFA World Cup street gallery — pedestrian viewing",
    caption: "Pedestrians viewing FIFA World Cup wheat paste street gallery — Phantom Pasting Atlanta",
  },
  "fifa-world-cup-wheat-paste-posters-closeup.webp": {
    title: "FIFA World Cup wheat paste posters — closeup detail",
    caption: "Closeup detail of FIFA World Cup wheat paste posters — Phantom Pasting installation",
  },
  "incrediwear-pole-wrap-guerrilla-advertising-night.webp": {
    title: "Incrediwear pole wrap guerrilla advertising — nighttime",
    caption: "Incrediwear brand pole wrap guerrilla advertising campaign — nighttime installation by Phantom Pasting",
  },
  "sticker-campaign-street-intersection-urban.webp": {
    title: "Sticker campaign at street intersection — urban guerrilla marketing",
    caption: "Street intersection sticker guerrilla marketing campaign — urban advertising by Phantom Pasting",
  },
  "street-pole-sticker-campaign-urban-advertising.webp": {
    title: "Street pole sticker campaign — urban advertising",
    caption: "Urban street pole sticker campaign installation — guerrilla advertising by Phantom Pasting",
  },
};

// ── Page → images mapping ─────────────────────────────────────────────────────
// Google prefers images attributed to the page they appear on. Images can
// appear on multiple pages — that's expected and not penalized.
const PAGE_IMAGES: Record<string, string[]> = {
  // Gallery — all campaign photography
  "/gallery": Object.keys(IMAGE_META),

  // Work / Case Studies
  "/work/fashionpass-los-angeles": [
    "fashionpass-wheat-paste-campaign-poster-wall.webp",
    "fashionpass-wheat-paste-street-art-wall-la.webp",
    "fashionpass-wheat-paste-street-postering-wall-los-angeles.webp",
  ],
  "/work/fifa-world-cup-atlanta": [
    "fifa-world-cup-atlanta-wall-installation.webp",
    "fifa-world-cup-poster-installation-closeup.webp",
    "fifa-world-cup-poster-wall-angle-view.webp",
    "fifa-world-cup-poster-wall-gallery-wide.webp",
    "fifa-world-cup-poster-wall-street-perspective.webp",
    "fifa-world-cup-street-gallery-pedestrian-viewing.webp",
    "fifa-world-cup-wheat-paste-posters-closeup.webp",
  ],
  "/work/incrediwear-street-campaign": [
    "incrediwear-pole-wrap-guerrilla-advertising-night.webp",
    "sticker-campaign-street-intersection-urban.webp",
    "street-pole-sticker-campaign-urban-advertising.webp",
  ],

  // Services pages
  "/services/wheat-pasting": [
    "dont-fall-off-wheat-paste-building-bike-rack.webp",
    "dont-fall-off-wheat-paste-pedestrian-street-art.webp",
    "dont-fall-off-wheat-paste-street-view-la.webp",
    "dont-fall-off-wheat-paste-urban-wall-pink.webp",
    "dont-fall-off-wheat-paste-wall-closeup.webp",
    "fashionpass-wheat-paste-campaign-poster-wall.webp",
  ],
  "/services/chalk-spray-stencils": [
    "bedstuy-stencil.webp",
    "black-pearl-la-chalk-spray-stencil-sidewalk.webp",
    "black-pearl-la-stencil-template-grass.webp",
    "chalk-spray-stencil-sidewalk-guerrilla-marketing.webp",
    "custom-stencil-template-cut-out-design.webp",
  ],
  "/services/full-impact-campaigns": [
    "fashionpass-wheat-paste-street-postering-wall-los-angeles.webp",
    "fifa-world-cup-poster-wall-gallery-wide.webp",
    "incrediwear-pole-wrap-guerrilla-advertising-night.webp",
    "sticker-campaign-street-intersection-urban.webp",
  ],

  // City pages — hero/OG images used in those markets
  "/locations/los-angeles": [
    "fashionpass-wheat-paste-street-postering-wall-los-angeles.webp",
    "dont-fall-off-wheat-paste-street-view-la.webp",
    "black-pearl-la-chalk-spray-stencil-sidewalk.webp",
  ],
  "/locations/atlanta": [
    "fifa-world-cup-atlanta-wall-installation.webp",
    "fifa-world-cup-poster-wall-gallery-wide.webp",
  ],
  "/locations/new-york": [
    "bedstuy-stencil.webp",
    "incrediwear-pole-wrap-guerrilla-advertising-night.webp",
  ],
};

// ── XML builder ───────────────────────────────────────────────────────────────

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildImageSitemap(): string {
  // Verify gallery dir exists at build time
  const galleryDir = join(process.cwd(), "public", "gallery");
  const galleryExists = existsSync(galleryDir);

  // Cross-check: warn about any images in PAGE_IMAGES not in IMAGE_META
  const knownImages = new Set(Object.keys(IMAGE_META));
  const galleryFiles = galleryExists
    ? new Set(readdirSync(galleryDir).filter((f) => f.endsWith(".webp") || f.endsWith(".jpg") || f.endsWith(".png")))
    : new Set<string>();

  const entries: string[] = [];

  for (const [pagePath, images] of Object.entries(PAGE_IMAGES)) {
    const pageUrl = `${BASE}${pagePath}`;
    const imageBlocks: string[] = [];

    for (const imgFile of images) {
      // Skip if file doesn't actually exist in public/gallery
      if (galleryExists && !galleryFiles.has(imgFile)) continue;

      const imgUrl = `${GALLERY_URL.replace("/gallery", "")}/gallery/${imgFile}`;
      const meta = knownImages.has(imgFile) ? IMAGE_META[imgFile] : null;

      imageBlocks.push(`    <image:image>
      <image:loc>${escapeXml(imgUrl)}</image:loc>${
        meta
          ? `
      <image:title>${escapeXml(meta.title)}</image:title>
      <image:caption>${escapeXml(meta.caption)}</image:caption>`
          : ""
      }
    </image:image>`);
    }

    if (imageBlocks.length === 0) continue;

    entries.push(`  <url>
    <loc>${escapeXml(pageUrl)}</loc>
${imageBlocks.join("\n")}
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join("\n")}
</urlset>`;
}

// ── Route handler ─────────────────────────────────────────────────────────────

export function GET() {
  const xml = buildImageSitemap();
  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // Edge-cached for 24h; auto-invalidated on next Netlify deploy
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
