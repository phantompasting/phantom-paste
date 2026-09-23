import type { ImageLoaderProps } from "next/image";

/**
 * Static-variant loader for gallery thumbnails.
 *
 * Maps a `next/image` width request onto the pre-generated files in
 * public/gallery/_r/<w>/ (see scripts/gen-gallery-variants.mjs) instead of
 * the `/_next/image` optimizer, which never edge-caches on Netlify. Widths
 * above the largest variant fall back to the original 1400px file.
 */
const VARIANT_WIDTHS = [480, 768, 1080] as const;

export function galleryLoader({ src, width }: ImageLoaderProps): string {
  const name = src.replace(/^\/gallery\//, "");
  const w = VARIANT_WIDTHS.find((v) => v >= width);
  return w ? `/gallery/_r/${w}/${name}` : src;
}
