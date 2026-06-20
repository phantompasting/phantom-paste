/**
 * Services registry — single source of truth for cross-linking into /services
 * from the blog, locations, or anywhere else that needs to list what we do.
 *
 * Mirrors the convention in `/lib/blogRegistry.ts`: typed entries, no magic
 * strings sprinkled across components. Adding a service means editing this
 * file and nothing else.
 *
 * Ordering here is the authoring order — we want "Wheat Pasting" first on
 * every grid because it's the flagship service and the site's primary SEO
 * head term.
 */
export type ServiceSlug =
  | "wheat-pasting"
  | "chalk-spray-stencils"
  | "snipes"
  | "street-flyering"
  | "full-impact-campaigns"
  | "art-murals";

export interface ServiceMeta {
  slug: ServiceSlug;
  /** Full URL path, always absolute within the app. */
  href: string;
  /** Display name used in card headings. Kept short — under 28 chars. */
  name: string;
  /** Short mono-cap label over the card, like "Service 01 · Wheat Paste". */
  tag: string;
  /** One-line blurb rendered under the card name. 60–95 chars ideal. */
  blurb: string;
  /** CTA text on the card. Usually "Explore →" unless intent differs. */
  cta: string;
}

export const SERVICES: ServiceMeta[] = [
  {
    slug: "wheat-pasting",
    href: "/services/wheat-pasting",
    name: "Wheat Pasting",
    tag: "Service 01",
    blurb:
      "Large-format paste posters on prime urban walls. Print, install, and photo documentation in 50+ cities.",
    cta: "Explore Wheat Pasting",
  },
  {
    slug: "chalk-spray-stencils",
    href: "/services/chalk-spray-stencils",
    name: "Chalk Spray Stencils",
    tag: "Service 02",
    blurb:
      "Stencil-cut brand marks sprayed in removable chalk on sidewalks, walls, and plazas. Legal, precise, repeatable.",
    cta: "Explore Chalk Stencils",
  },
  {
    slug: "snipes",
    href: "/services/snipes",
    name: "Snipes & Stickers",
    tag: "Service 03",
    blurb:
      "Die-cut sticker campaigns and pole-mounted snipe signs placed across high-traffic corridors. The cost-efficient way to build frequency.",
    cta: "Explore Snipes",
  },
  {
    slug: "street-flyering",
    href: "/services/street-flyering",
    name: "Street Flyering",
    tag: "Service 04",
    blurb:
      "Windshield flyers and hand-to-hand handbilling across lots, venues, and corridors. The fastest way to drive a local push.",
    cta: "Explore Street Flyering",
  },
  {
    slug: "full-impact-campaigns",
    href: "/services/full-impact-campaigns",
    name: "Full Impact Campaigns",
    tag: "Service 05",
    blurb:
      "Wheat paste, snipes, stencils, and sticker passes stacked in one coordinated multi-format takeover.",
    cta: "Explore Full Impact",
  },
  {
    slug: "art-murals",
    href: "/services/art-murals",
    name: "Art Murals",
    tag: "Service 06",
    blurb:
      "Original hand-painted murals for business, interior or exterior. We match you with a vetted artist and manage the commission.",
    cta: "Explore Art Murals",
  },
];

/** Lookup by slug — returns undefined for unknown slugs. */
export function getService(slug: ServiceSlug): ServiceMeta | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
