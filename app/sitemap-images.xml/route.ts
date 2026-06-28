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
  // ── Luke Borchelt "Water Town" / MDDN Records — Nashville (stencils + snipes) ──
  "luke-borchelt-water-town-sticker-snipe-bridgestone-arena-nashville.webp": {
    title: "Luke Borchelt Pole Snipe — Bridgestone Arena, Nashville",
    caption: "Water Town by Luke Borchelt sticker snipe on a pole by Bridgestone Arena with a crowd crossing in downtown Nashville — campaign by Phantom Pasting",
  },
  "luke-borchelt-water-town-sticker-snipe-riverboats-nashville.webp": {
    title: "Luke Borchelt Pole Snipe — River District, Nashville",
    caption: "Water Town by Luke Borchelt sticker snipe on a downtown Nashville pole with a red Nashville Riverboats trolley behind — by Phantom Pasting",
  },
  "luke-borchelt-water-town-chalk-stencil-sidewalk-nashville.webp": {
    title: "Luke Borchelt Sidewalk Stencil — Nashville",
    caption: "Water Town by Luke Borchelt chalk-spray sidewalk stencil between two Spin share bikes in downtown Nashville — by Phantom Pasting",
  },
  "luke-borchelt-water-town-chalk-stencil-trash-can-nashville.webp": {
    title: "Luke Borchelt Sidewalk Stencil — Nashville",
    caption: "Water Town by Luke Borchelt chalk-spray sidewalk stencil beside a downtown Nashville trash can — by Phantom Pasting",
  },
  // ── Snipes & Sticker Posting — Calvin Priice / Incrediwear / Biodance ──
  "calvin-priice-sticker-pole-install-gas-station-los-angeles.webp": {
    title: "Calvin Priice pole sticker install — Los Angeles",
    caption: "Phantom Pasting crew installing a Calvin Priice QR sticker on a pole at a Los Angeles gas station",
  },
  "incrediwear-qr-sticker-pole-night-palm-boulevard.webp": {
    title: "Incrediwear pole snipe — palm boulevard at night",
    caption: "Incrediwear QR sticker on a pole at night beside a palm-lined boulevard — guerrilla advertising by Phantom Pasting",
  },

  // ── Street Flyering — windshield flyers + handbilling, Los Angeles ──
  "street-flyering-windshield-flyer-closeup-los-angeles.webp": {
    title: "Street flyering windshield flyer — Los Angeles",
    caption: "Phantom Pasting flyer placed under a windshield wiper on a parked car — Los Angeles street flyering",
  },
  "street-flyering-windshield-flyer-parked-cars-los-angeles.webp": {
    title: "Street flyering on parked cars — Los Angeles",
    caption: "Phantom Pasting windshield flyers on a row of parked cars along a Los Angeles street",
  },
  "street-flyering-windshield-flyer-tan-car-los-angeles.webp": {
    title: "Windshield flyer on a parked car — Los Angeles",
    caption: "Phantom Pasting flyer under the wiper of a parked car in a Los Angeles lot",
  },
  "street-flyering-windshield-flyer-parking-lot-sunset-los-angeles.webp": {
    title: "Windshield flyer in a parking lot at sunset — Los Angeles",
    caption: "Phantom Pasting windshield flyer on a car in a Los Angeles parking lot at sunset",
  },

  // ── Biodance "Hydrogel Splash" campaign — Los Angeles (latest) ────────
  "biodance-hydrogel-splash-wheat-paste-wall-los-angeles.webp": {
    title: "Biodance wheat paste poster wall — Los Angeles",
    caption: "Biodance \"We Are Making A Splash\" wheat paste poster wall with palm trees — Los Angeles campaign by Phantom Pasting",
  },
  "biodance-making-a-splash-poster-wall-the-grove-los-angeles.webp": {
    title: "Biodance The Grove poster wall — Los Angeles",
    caption: "Biodance \"We Are Making A Splash\" The Grove launch wheat paste poster wall — Los Angeles street advertising by Phantom Pasting",
  },
  "biodance-making-a-splash-wheat-paste-scaffold-wall-los-angeles.webp": {
    title: "Biodance wheat paste wall under scaffolding — Los Angeles",
    caption: "Biodance \"We Are Making A Splash\" wheat paste poster wall under scaffolding — Los Angeles guerrilla marketing by Phantom Pasting",
  },
  "biodance-making-a-splash-wheat-paste-underpass-wall-los-angeles.webp": {
    title: "Biodance wheat paste underpass wall — Los Angeles",
    caption: "Biodance \"We Are Making A Splash\" wheat paste poster wall under a Los Angeles underpass — guerrilla marketing by Phantom Pasting",
  },
  "biodance-making-a-splash-wheat-paste-plywood-wall-los-angeles.webp": {
    title: "Biodance wheat paste on plywood barrier — Los Angeles",
    caption: "Biodance \"We Are Making A Splash\" wheat paste posters on a plywood construction barrier — Los Angeles by Phantom Pasting",
  },
  "biodance-making-a-splash-wheat-paste-install-documentation-los-angeles.webp": {
    title: "Biodance wheat paste install documentation — Los Angeles",
    caption: "Photographer documenting a Biodance \"We Are Making A Splash\" wheat paste poster wall — Los Angeles by Phantom Pasting",
  },
  "biodance-making-a-splash-wheat-paste-storefront-night-los-angeles.webp": {
    title: "Biodance wheat paste storefront wall at night — Los Angeles",
    caption: "Biodance \"We Are Making A Splash\" wheat paste posters on a storefront wall at night — Los Angeles by Phantom Pasting",
  },
  "biodance-hydrogel-splash-sticker-wall-los-angeles.webp": {
    title: "Biodance Hydrogel Splash sticker on wall — Los Angeles",
    caption: "Biodance Hydrogel Splash die-cut sticker on painted street wall — Los Angeles guerrilla marketing by Phantom Pasting",
  },
  "biodance-hydrogel-splash-sticker-pole-night-los-angeles.webp": {
    title: "Biodance Hydrogel Splash pole sticker — Los Angeles nighttime",
    caption: "Biodance Hydrogel Splash sticker on street pole at night — Los Angeles guerrilla advertising by Phantom Pasting",
  },
  "biodance-glow-on-the-go-chalk-stencil-sidewalk-los-angeles.webp": {
    title: "Biodance Glow On The Go chalk stencil — Los Angeles sidewalk",
    caption: "Biodance \"Glow On The Go This Way\" pink chalk spray sidewalk stencil — Los Angeles guerrilla marketing by Phantom Pasting",
  },
  "biodance-glow-on-the-go-chalk-stencil-street-los-angeles.webp": {
    title: "Biodance Glow On The Go sidewalk stencil — Los Angeles street view",
    caption: "Biodance \"Glow On The Go This Way\" chalk spray sidewalk stencil with directional arrow — Los Angeles by Phantom Pasting",
  },

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

  // ── Momentous "Trend Proof" campaign — Los Angeles ───────────────────
  "momentous-trend-proof-wheat-paste-poster-detail-los-angeles.webp": {
    title: "Momentous Trend Proof wheat paste poster detail — Los Angeles",
    caption: "Momentous Trend Proof wheat paste poster campaign — closeup detail, Los Angeles, Phantom Pasting",
  },
  "momentous-trend-proof-wheat-paste-wall-los-angeles-street.webp": {
    title: "Momentous Trend Proof wheat paste wall — Los Angeles street view",
    caption: "Momentous Trend Proof wheat paste poster wall at street level — Los Angeles campaign by Phantom Pasting",
  },
  "momentous-wheat-paste-billboard-wall-palm-trees-los-angeles.webp": {
    title: "Momentous wheat paste billboard wall — Los Angeles palm trees",
    caption: "Momentous brand billboard-scale wheat paste wall installation with palm trees — Los Angeles",
  },
  "momentous-wheat-paste-campaign-wall-wide-los-angeles.webp": {
    title: "Momentous wheat paste campaign wall — wide shot Los Angeles",
    caption: "Wide shot of Momentous wheat paste poster campaign wall — Los Angeles street advertising by Phantom Pasting",
  },
  "momentous-wheat-paste-poster-wall-los-angeles-overhead.webp": {
    title: "Momentous wheat paste poster wall — overhead view Los Angeles",
    caption: "Overhead perspective of Momentous wheat paste poster wall installation — Los Angeles",
  },
  "momentous-wheat-paste-posters-close-up-los-angeles.webp": {
    title: "Momentous wheat paste posters — closeup Los Angeles",
    caption: "Closeup of Momentous wheat paste posters on Los Angeles wall — Phantom Pasting guerrilla campaign",
  },
  "momentous-wheat-paste-wall-corner-los-angeles.webp": {
    title: "Momentous wheat paste wall — corner installation Los Angeles",
    caption: "Momentous brand wheat paste wall wrapping a street corner — Los Angeles campaign by Phantom Pasting",
  },

  // ── Vaura Pilates chalk stencil campaign — Austin ─────────────────────
  "vaura-pilates-chalk-spray-stencil-sidewalk-street-view-austin.webp": {
    title: "Vaura Pilates chalk spray stencil — Austin sidewalk street view",
    caption: "Vaura Pilates chalk spray stencil on Austin sidewalk — street-level view, Phantom Pasting campaign",
  },
  "vaura-pilates-chalk-stencil-sidewalk-austin-texas.webp": {
    title: "Vaura Pilates chalk stencil on sidewalk — Austin Texas",
    caption: "Vaura Pilates chalk stencil guerrilla marketing on Austin Texas sidewalk — Phantom Pasting",
  },
  "vaura-pilates-sidewalk-chalk-stencil-guerrilla-marketing-austin.webp": {
    title: "Vaura Pilates sidewalk chalk stencil — Austin guerrilla marketing",
    caption: "Vaura Pilates sidewalk chalk stencil guerrilla marketing campaign — Austin Texas by Phantom Pasting",
  },

  // ── Process / behind-the-scenes — Los Angeles wall prep ───────────────
  "wheat-paste-crew-power-washing-wall-los-angeles.webp": {
    title: "Wheat paste crew power washing wall — Los Angeles prep",
    caption: "Phantom Pasting crew power washing Los Angeles wall surface before wheat paste poster install",
  },
  "wheat-paste-installer-cleaning-wall-los-angeles.webp": {
    title: "Wheat paste installer cleaning wall — Los Angeles surface prep",
    caption: "Phantom Pasting installer cleaning Los Angeles wall surface before campaign install",
  },
  "wheat-paste-installer-scraping-old-posters-los-angeles.webp": {
    title: "Wheat paste installer scraping old posters — Los Angeles wall prep",
    caption: "Phantom Pasting crew scraping old posters from Los Angeles wall before wheat paste install",
  },
  "wheat-paste-wall-blank-before-install-los-angeles.webp": {
    title: "Blank wall before wheat paste install — Los Angeles",
    caption: "Clean Los Angeles wall surface prepared and ready for wheat paste poster campaign install",
  },
  "wheat-paste-wall-location-los-angeles-wide.webp": {
    title: "Wheat paste wall location — wide shot Los Angeles",
    caption: "Wide shot of prime Los Angeles wheat paste wall location — Phantom Pasting campaign site scouting",
  },
  "wheat-paste-wall-location-street-corner-los-angeles.webp": {
    title: "Wheat paste wall location — Los Angeles street corner",
    caption: "High-traffic Los Angeles street corner wheat paste wall location — Phantom Pasting campaign site",
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
    "momentous-trend-proof-wheat-paste-wall-los-angeles-street.webp",
  ],
  "/services/chalk-spray-stencils": [
    "bedstuy-stencil.webp",
    "black-pearl-la-chalk-spray-stencil-sidewalk.webp",
    "black-pearl-la-stencil-template-grass.webp",
    "chalk-spray-stencil-sidewalk-guerrilla-marketing.webp",
    "custom-stencil-template-cut-out-design.webp",
    "vaura-pilates-chalk-spray-stencil-sidewalk-street-view-austin.webp",
  ],
  "/services/full-impact-campaigns": [
    "biodance-hydrogel-splash-wheat-paste-wall-los-angeles.webp",
    "black-pearl-la-chalk-spray-stencil-sidewalk.webp",
    "calvin-priice-sticker-pole-install-gas-station-los-angeles.webp",
    "fifa-world-cup-poster-wall-gallery-wide.webp",
  ],
  "/services/snipes": [
    "calvin-priice-sticker-pole-install-gas-station-los-angeles.webp",
    "biodance-hydrogel-splash-sticker-wall-los-angeles.webp",
    "biodance-hydrogel-splash-sticker-pole-night-los-angeles.webp",
    "incrediwear-qr-sticker-pole-night-intersection.webp",
  ],
  "/services/street-flyering": [
    "street-flyering-windshield-flyer-closeup-los-angeles.webp",
    "street-flyering-windshield-flyer-parked-cars-los-angeles.webp",
    "street-flyering-windshield-flyer-tan-car-los-angeles.webp",
    "street-flyering-windshield-flyer-parking-lot-sunset-los-angeles.webp",
  ],

  // City pages — hero/OG images used in those markets
  "/locations/los-angeles": [
    "biodance-hydrogel-splash-wheat-paste-wall-los-angeles.webp",
    "biodance-glow-on-the-go-chalk-stencil-sidewalk-los-angeles.webp",
    "momentous-trend-proof-wheat-paste-wall-los-angeles-street.webp",
    "fashionpass-wheat-paste-street-postering-wall-los-angeles.webp",
    "dont-fall-off-wheat-paste-street-view-la.webp",
    "black-pearl-la-chalk-spray-stencil-sidewalk.webp",
    "calvin-priice-sticker-pole-install-gas-station-los-angeles.webp",
    "biodance-hydrogel-splash-sticker-wall-los-angeles.webp",
  ],
  "/locations/austin": [
    "vaura-pilates-chalk-spray-stencil-sidewalk-street-view-austin.webp",
    "vaura-pilates-chalk-stencil-sidewalk-austin-texas.webp",
    "vaura-pilates-sidewalk-chalk-stencil-guerrilla-marketing-austin.webp",
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
