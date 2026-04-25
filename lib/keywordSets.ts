/**
 * Central keyword synonym registry — single source of truth for the synonym
 * families Phantom Pasting targets across pages, schema, and llms.txt.
 *
 * Strategy:
 *   wildposting.com owns "Wild Posting®" so we can't lead with that term.
 *   "Wheat pasting" is our anchor, but the medium is also called street
 *   postering, flyposting, street media, street marketing, guerrilla
 *   advertising, OOH, alternative OOH, etc. — each with its own search
 *   demand and (importantly) its own competitive landscape.
 *
 *   By unifying these synonyms into one library and projecting them into:
 *     - Schema.org `knowsAbout`, `additionalType`, `alternateName` arrays
 *     - <meta name="keywords"> per page (low Google weight, real Bing weight)
 *     - llms.txt (AI search engine indexing)
 *     - Natural body prose where they fit
 *   we surface for the same campaign-buyer regardless of which lexicon the
 *   searcher used.
 *
 * Add new terms here, never inline on a page. That keeps the synonym set
 * coherent and discoverable across the codebase.
 */

// ── Wheat-pasting craft terms (anchor) ─────────────────────────────────────
export const KW_CRAFT = [
  "wheat pasting",
  "wheatpasting",
  "wheat paste posters",
  "wheat paste advertising",
  "wheatpaste posters",
  "wheat paste campaigns",
  "wheat pasting agency",
  "wheat pasting company",
  "commercial wheat pasting",
] as const;

// ── Street poster / postering family ───────────────────────────────────────
export const KW_STREET_POSTERS = [
  "street posters",
  "street postering",
  "street poster advertising",
  "street poster campaigns",
  "street postering campaigns",
  "poster campaigns",
  "poster advertising",
  "snipe posters",
  "snipes",
  "scaffold wraps",
  "scaffolding wraps",
] as const;

// ── Flyposting (UK / international term, US-uncontested) ───────────────────
export const KW_FLYPOSTING = [
  "flyposting",
  "fly posting",
  "flyposting agency",
  "flyposting campaigns",
] as const;

// ── Street media (channel terminology) ─────────────────────────────────────
export const KW_STREET_MEDIA = [
  "street media",
  "street media advertising",
  "street media buying",
  "street media planning",
  "street media agency",
  "urban advertising",
  "urban OOH",
  "urban media",
  "urban marketing",
] as const;

// ── OOH umbrella ───────────────────────────────────────────────────────────
export const KW_OOH = [
  "out-of-home advertising",
  "OOH advertising",
  "OOH media",
  "outdoor advertising",
  "outdoor marketing",
  "alternative OOH",
  "non-traditional OOH",
  "tactical OOH",
  "alternative media",
  "alternative advertising",
  "ambient media",
  "ambient advertising",
] as const;

// ── Street / guerrilla / experiential marketing ────────────────────────────
export const KW_STREET_MARKETING = [
  "street marketing",
  "street marketing agency",
  "street marketing campaigns",
  "guerrilla marketing",
  "guerrilla advertising",
  "guerrilla marketing agency",
  "guerrilla advertising agency",
  "guerrilla OOH",
  "experiential marketing",
  "brand activation",
  "street activation",
  "urban activation",
  "grassroots marketing",
  "grassroots advertising",
  "buzz marketing",
] as const;

// ── Stencil family ─────────────────────────────────────────────────────────
export const KW_STENCILS = [
  "chalk spray stencils",
  "chalk stencils",
  "chalk stencil advertising",
  "sidewalk stencils",
  "sidewalk chalk advertising",
  "spray chalk advertising",
  "stencil advertising",
  "custom stencils",
  "street stencils",
] as const;

// ── Floor / pavement / sidewalk media ──────────────────────────────────────
export const KW_FLOOR_MEDIA = [
  "floor decals",
  "sidewalk decals",
  "pavement graphics",
  "sidewalk advertising",
  "floor advertising",
  "crosswalk advertising",
] as const;

// ── Vertical / use-case ────────────────────────────────────────────────────
export const KW_VERTICALS = [
  "music marketing",
  "album launch marketing",
  "festival marketing",
  "tour promo OOH",
  "fashion marketing",
  "streetwear marketing",
  "fashion brand OOH",
  "film marketing",
  "movie launch advertising",
  "film festival advertising",
  "DTC OOH",
  "DTC brand activation",
] as const;

// ── SAB / nationwide rollouts ──────────────────────────────────────────────
export const KW_NATIONWIDE = [
  "nationwide guerrilla marketing",
  "multi-city wheat pasting",
  "multi-city OOH rollout",
  "multi-city street campaigns",
  "national street campaigns",
  "coast-to-coast street marketing",
  "US-wide poster campaigns",
] as const;

// ── Format-specific stickers / wraps ───────────────────────────────────────
export const KW_STICKERS_WRAPS = [
  "sticker campaigns",
  "vinyl stickers",
  "brand stickers",
  "pole wraps",
  "lamppost wraps",
  "construction barricade advertising",
] as const;

// ── Pricing / cost intent ──────────────────────────────────────────────────
export const KW_PRICING = [
  "wheat pasting cost",
  "wheat pasting pricing",
  "guerrilla marketing cost",
  "street poster pricing",
  "OOH campaign cost",
  "wild posting cost",
] as const;

// ──────────────────────────────────────────────────────────────────────────
// Combined sets — pre-bundled for common page types. Use these instead of
// composing inline on the page so the keyword strategy stays centralized.
// ──────────────────────────────────────────────────────────────────────────

/** Homepage — broadest synonym coverage. */
export const KW_HOMEPAGE = [
  ...KW_CRAFT,
  ...KW_STREET_POSTERS.slice(0, 6),
  ...KW_STREET_MEDIA.slice(0, 5),
  ...KW_STREET_MARKETING.slice(0, 6),
  ...KW_OOH.slice(0, 6),
  ...KW_FLYPOSTING.slice(0, 2),
  ...KW_NATIONWIDE.slice(0, 3),
];

/** Wheat-pasting service page — craft + posters + flyposting + OOH. */
export const KW_SERVICE_WHEAT_PASTING = [
  ...KW_CRAFT,
  ...KW_STREET_POSTERS,
  ...KW_FLYPOSTING,
  ...KW_OOH.slice(0, 5),
  ...KW_STREET_MARKETING.slice(0, 5),
  ...KW_VERTICALS.slice(0, 6),
];

/** Chalk stencil service page — stencil family + floor + activation. */
export const KW_SERVICE_STENCILS = [
  ...KW_STENCILS,
  ...KW_FLOOR_MEDIA,
  ...KW_STREET_MARKETING.slice(0, 6),
  ...KW_VERTICALS.slice(0, 6),
  ...KW_OOH.slice(0, 4),
];

/** Full-impact service page — everything. */
export const KW_SERVICE_FULL_IMPACT = [
  ...KW_CRAFT.slice(0, 4),
  ...KW_STREET_POSTERS.slice(0, 6),
  ...KW_STREET_MARKETING,
  ...KW_OOH.slice(0, 6),
  ...KW_VERTICALS,
  ...KW_NATIONWIDE,
  ...KW_STICKERS_WRAPS.slice(0, 4),
];

/** Services hub — broad coverage of every service vertical. */
export const KW_SERVICES_HUB = [
  ...KW_CRAFT.slice(0, 4),
  ...KW_STREET_POSTERS.slice(0, 5),
  ...KW_STENCILS.slice(0, 4),
  ...KW_STREET_MEDIA.slice(0, 4),
  ...KW_STREET_MARKETING.slice(0, 6),
  ...KW_OOH.slice(0, 5),
  ...KW_VERTICALS.slice(0, 5),
];

/** Locations hub — geographic + craft + nationwide rollout. */
export const KW_LOCATIONS_HUB = [
  ...KW_CRAFT.slice(0, 4),
  ...KW_STREET_POSTERS.slice(0, 4),
  ...KW_STREET_MARKETING.slice(0, 5),
  ...KW_OOH.slice(0, 4),
  ...KW_NATIONWIDE,
];

/** Per-city pages — craft + street poster + city-aware. Caller appends city terms. */
export const KW_CITY_BASE = [
  ...KW_CRAFT.slice(0, 5),
  ...KW_STREET_POSTERS.slice(0, 5),
  ...KW_STREET_MARKETING.slice(0, 4),
  ...KW_OOH.slice(0, 3),
  ...KW_FLYPOSTING.slice(0, 1),
];

/** About page — agency / company / brand framing. */
export const KW_ABOUT = [
  "wheat pasting agency",
  "wheat pasting company",
  "guerrilla marketing agency",
  "street marketing agency",
  "OOH agency",
  "alternative OOH agency",
  "nationwide OOH agency",
  ...KW_CRAFT.slice(0, 3),
  ...KW_STREET_MEDIA.slice(0, 3),
];

/** Work / case studies hub. */
export const KW_WORK = [
  "wheat pasting case studies",
  "guerrilla marketing case studies",
  "street poster campaign portfolio",
  "OOH campaign portfolio",
  ...KW_CRAFT.slice(0, 3),
  ...KW_STREET_POSTERS.slice(0, 3),
  ...KW_VERTICALS.slice(0, 6),
];

/** Gallery — visual / photo documentation framing. */
export const KW_GALLERY = [
  "wheat pasting photos",
  "guerrilla marketing photo gallery",
  "street poster campaign photos",
  "OOH campaign documentation",
  ...KW_CRAFT.slice(0, 3),
  ...KW_STREET_POSTERS.slice(0, 3),
  ...KW_STENCILS.slice(0, 3),
];

/** Contact / quote page. */
export const KW_CONTACT = [
  "wheat pasting quote",
  "guerrilla marketing quote",
  "street poster campaign quote",
  "OOH campaign pricing",
  "wheat pasting cost estimate",
  ...KW_CRAFT.slice(0, 3),
  ...KW_PRICING,
];

/** Blog hub. */
export const KW_BLOG_HUB = [
  "wheat pasting blog",
  "wheat pasting guides",
  "street postering field notes",
  "guerrilla marketing blog",
  ...KW_CRAFT.slice(0, 3),
  ...KW_STREET_POSTERS.slice(0, 3),
  ...KW_STREET_MARKETING.slice(0, 3),
];

// ──────────────────────────────────────────────────────────────────────────
// Schema-projection helpers
// ──────────────────────────────────────────────────────────────────────────

/**
 * Comprehensive `knowsAbout` array for the Organization schema. Each entry
 * is a topical concept Google reads as evidence the entity is authoritative
 * on that topic. Wider than KW_HOMEPAGE because Org-level knowsAbout is
 * the single best place to declare topical breadth.
 */
export const ORG_KNOWS_ABOUT = [
  "Wheat Pasting",
  "Wheat Paste Posters",
  "Street Postering",
  "Street Posters",
  "Poster Campaigns",
  "Flyposting",
  "Guerrilla Marketing",
  "Guerrilla Advertising",
  "Street Marketing",
  "Street Media",
  "Street Media Buying",
  "Urban Advertising",
  "Out-of-Home Advertising",
  "OOH Advertising",
  "Alternative OOH",
  "Alternative Media",
  "Non-Traditional Advertising",
  "Ambient Media",
  "Experiential Marketing",
  "Brand Activation",
  "Street Activation",
  "Grassroots Marketing",
  "Chalk Spray Stencils",
  "Sidewalk Stencils",
  "Floor Decals",
  "Sidewalk Advertising",
  "Snipe Posters",
  "Pole Wraps",
  "Sticker Campaigns",
  "Scaffold Wraps",
  "Music Marketing",
  "Festival Marketing",
  "Album Launch Marketing",
  "Fashion Brand Marketing",
  "Streetwear Marketing",
  "Film Launch Marketing",
  "DTC Brand Activation",
  "Multi-City OOH Rollouts",
  "Nationwide Guerrilla Marketing",
];

/**
 * Schema.org `additionalType` URLs for the Organization / ProfessionalService.
 * Each URL is a public Schema.org type the entity also embodies — Google
 * reads these as additional classification signals beyond the main @type.
 *
 * AdvertisingAgency is the canonical Schema.org type for our category;
 * MarketingAgency is its sibling on the productontology side. Both carry
 * weight in Google's entity graph.
 */
export const ORG_ADDITIONAL_TYPES = [
  "https://schema.org/AdvertisingAgency",
  "https://www.productontology.org/id/Out-of-home_advertising",
  "https://www.productontology.org/id/Guerrilla_marketing",
  "https://www.productontology.org/id/Flyposting",
  "https://www.productontology.org/id/Wheatpaste",
];

// ──────────────────────────────────────────────────────────────────────────
// Type helper
// ──────────────────────────────────────────────────────────────────────────
export type KeywordSet = ReadonlyArray<string>;
