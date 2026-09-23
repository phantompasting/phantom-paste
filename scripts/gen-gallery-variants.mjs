/**
 * Pre-generate responsive WebP variants for every gallery photo.
 *
 * WHY: on Netlify, every `/_next/image` derivative is an edge-cache MISS on
 * every request (measured 9/23/2026: 370-950 ms TTFB, `cache-status:
 * "Netlify Edge"; fwd=miss` even on repeat hits with a browser Accept
 * header), while a plain static file under /public is edge-cached at
 * ~170 ms. The gallery loads 9 optimizer-served thumbnails per page, so the
 * mobile LCP was landing at 4.4-4.5 s (Lighthouse perf 77-84). Serving the
 * thumbnails as static pre-sized files removes the optimizer from the hot
 * path entirely.
 *
 * Output: public/gallery/_r/<width>/<name>.webp for widths 480/768/1080.
 * Runs before `next build` (see package.json "build" + netlify.toml).
 * Idempotent: skips variants newer than their source. `_r/` is gitignored.
 */
import { readdirSync, statSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const SRC = "public/gallery";
const OUT = join(SRC, "_r");
const WIDTHS = [480, 768, 1080];
const QUALITY = 70;

const files = readdirSync(SRC).filter((f) => f.endsWith(".webp") && statSync(join(SRC, f)).isFile());
let made = 0, skipped = 0;
for (const w of WIDTHS) mkdirSync(join(OUT, String(w)), { recursive: true });

await Promise.all(
  files.map(async (f) => {
    const src = join(SRC, f);
    const srcM = statSync(src).mtimeMs;
    for (const w of WIDTHS) {
      const dest = join(OUT, String(w), f);
      if (existsSync(dest) && statSync(dest).mtimeMs >= srcM) { skipped++; continue; }
      await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: QUALITY, effort: 4 }).toFile(dest);
      made++;
    }
  }),
);
console.log(`gallery variants: ${made} generated, ${skipped} up to date (${files.length} sources × ${WIDTHS.length} widths)`);
