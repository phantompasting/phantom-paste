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

// ── Buyer intent — services / agency / company / hire framing ─────────────
//
// These are the high-conversion queries a brand marketer types when they're
// ready to buy: "wheat pasting agency", "guerrilla marketing services",
// "hire street postering company", "best OOH agency". The dashboard's
// topic-cluster data (see weekly directives) shows we're getting impressions
// on descriptive terms ("wild posting advertising") but not these
// commercial-intent terms — likely because we haven't been declaring
// ourselves under each agency-side lexicon. Fixing that.
export const KW_BUYER_INTENT = [
  // Services framing
  "wheat pasting services",
  "street postering services",
  "street poster services",
  "guerrilla marketing services",
  "street media services",
  "street marketing services",
  "OOH services",
  "alternative OOH services",
  "outdoor advertising services",
  "flyposting services",
  "postering services",
  "commercial postering services",
  // Agency / company framing
  "wheat pasting agency",
  "wheat pasting company",
  "street postering agency",
  "street postering company",
  "postering agency",
  "postering company",
  "guerrilla marketing agency",
  "guerrilla marketing company",
  "guerrilla advertising agency",
  "street marketing agency",
  "street marketing company",
  "street media agency",
  "street media buyer",
  "OOH agency",
  "OOH agency for brands",
  "alternative OOH agency",
  "alternative advertising agency",
  "outdoor advertising agency",
  "outdoor marketing company",
  "flyposting agency",
  "flyposting company",
  "ambient media agency",
  "experiential marketing agency",
  // Hire / find / best framing
  "hire wheat pasting company",
  "hire guerrilla marketing agency",
  "hire street postering crew",
  "find wheat pasting agency",
  "find guerrilla marketing company",
  "best wheat pasting agency",
  "best guerrilla marketing agency",
  "best OOH agency",
  "best street marketing agency",
  "best alternative OOH agency",
  "top guerrilla marketing agencies",
  "top OOH agencies",
  "professional wheat pasting service",
  "professional flyposting service",
] as const;

// ── Geographic intent — "near me" + local + nationwide ────────────────────
export const KW_NEAR_ME = [
  "wheat pasting near me",
  "guerrilla marketing near me",
  "street postering near me",
  "OOH agency near me",
  "outdoor advertising near me",
  "brand activation near me",
  "alternative OOH near me",
  "local wheat pasting company",
  "local guerrilla marketing agency",
] as const;

// ── Long-tail / question queries (informational + bottom-funnel) ──────────
//
// Question-format searches are huge AI-Overview surfaces because Google
// answers them with featured snippets and AIO panels. Each entry maps to
// at least one published or drafted blog post.
export const KW_QUESTIONS = [
  "what is wheat pasting",
  "what is flyposting",
  "what is street postering",
  "what is wild posting",
  "what is guerrilla marketing",
  "what is street media",
  "what is alternative OOH",
  "how does wheat pasting work",
  "how does flyposting work",
  "how does guerrilla marketing work",
  "how to make wheat paste",
  "how to start a wheat pasting campaign",
  "how to do guerrilla marketing",
  "how much does wheat pasting cost",
  "how much is a guerrilla marketing campaign",
  "how much do street posters cost",
  "is wheat pasting legal",
  "is flyposting legal",
  "is street postering legal",
  "where to do wheat pasting",
  "when to use guerrilla marketing",
  "why use wheat pasting",
] as const;

// ── Vertical-specific buyer queries ───────────────────────────────────────
//
// Brand-vertical queries that map directly to the verticals we serve.
// These are how a music label / fashion brand / film studio searches when
// they're scoping a campaign — very high commercial intent, very specific.
export const KW_VERTICAL_BUYERS = [
  // Music
  "guerrilla marketing for music labels",
  "guerrilla marketing for music",
  "street campaigns for album launches",
  "OOH for album launches",
  "street media for music festivals",
  "festival lineup advertising",
  "tour promo posters",
  "tour OOH campaigns",
  "music industry guerrilla marketing",
  "music brand street marketing",
  // Fashion
  "wheat pasting for fashion brands",
  "wheat pasting for streetwear",
  "fashion brand street campaigns",
  "streetwear drop campaigns",
  "fashion week OOH",
  "luxury brand guerrilla marketing",
  "streetwear marketing agency",
  // Film / TV
  "OOH for film launches",
  "street campaigns for film premieres",
  "movie launch wheat pasting",
  "streaming originals OOH",
  "film festival advertising",
  "movie poster campaigns",
  // DTC + consumer brands
  "guerrilla marketing for DTC brands",
  "DTC brand street campaigns",
  "consumer brand OOH",
  "product launch street campaigns",
  "wellness brand guerrilla marketing",
  "beverage brand street marketing",
  // Tech + SaaS
  "guerrilla marketing for startups",
  "SaaS launch OOH",
  "tech brand street campaigns",
  "conference activation campaigns",
  // Sports + tournaments
  "sports tournament guerrilla marketing",
  "sports league OOH",
  "stadium-area street campaigns",
] as const;

// ── Comparison queries (vs. other media) ──────────────────────────────────
//
// Comparison searches are mid-funnel: the buyer is evaluating wheat pasting
// against billboards / digital OOH / programmatic. We want to be the first
// answer for each comparison.
export const KW_COMPARISON = [
  "wheat pasting vs billboards",
  "wheat pasting vs digital OOH",
  "street postering vs billboards",
  "street postering vs digital advertising",
  "guerrilla marketing vs traditional OOH",
  "guerrilla marketing vs digital marketing",
  "street media vs digital advertising",
  "alternative OOH vs digital",
  "alternative OOH vs traditional OOH",
  "flyposting vs billboards",
  "wheat pasting vs wild posting",
  "wheat pasting vs flyposting",
  "OOH vs digital",
  "wheat pasting ROI",
  "guerrilla marketing ROI",
] as const;

// ── City + buyer-intent combos ────────────────────────────────────────────
//
// Helper: for each Tier-1 city, generate a set of "guerrilla marketing
// agency [city]" / "wheat pasting company [city]" / "OOH agency [city]"
// style queries. These are the highest-conversion local queries and they're
// what city pages should target on top of the city-craft baseline.
export function cityBuyerIntent(city: string): ReadonlyArray<string> {
  return [
    `wheat pasting agency ${city}`,
    `wheat pasting company ${city}`,
    `wheat pasting services ${city}`,
    `street postering agency ${city}`,
    `street postering company ${city}`,
    `guerrilla marketing agency ${city}`,
    `guerrilla marketing company ${city}`,
    `street marketing agency ${city}`,
    `OOH agency ${city}`,
    `outdoor advertising agency ${city}`,
    `alternative OOH agency ${city}`,
    `flyposting agency ${city}`,
    `${city} guerrilla marketing services`,
    `${city} street media buying`,
    `hire wheat pasting company ${city}`,
    `best guerrilla marketing agency ${city}`,
  ];
}

// ──────────────────────────────────────────────────────────────────────────
// Combined sets — pre-bundled for common page types. Use these instead of
// composing inline on the page so the keyword strategy stays centralized.
// ──────────────────────────────────────────────────────────────────────────

/** Homepage — broadest synonym coverage + buyer-intent + question + vertical. */
export const KW_HOMEPAGE = [
  ...KW_CRAFT,
  ...KW_STREET_POSTERS.slice(0, 6),
  ...KW_STREET_MEDIA.slice(0, 5),
  ...KW_STREET_MARKETING.slice(0, 6),
  ...KW_OOH.slice(0, 6),
  ...KW_FLYPOSTING.slice(0, 2),
  ...KW_NATIONWIDE.slice(0, 3),
  // High-conversion buyer-intent queries — the "agency", "services",
  // "company", "hire", "best" framings buyers type when ready to buy.
  ...KW_BUYER_INTENT.slice(0, 18),
  // Top informational + comparison queries that drive SERP feature visibility.
  ...KW_QUESTIONS.slice(0, 8),
  ...KW_COMPARISON.slice(0, 4),
  // Top vertical-buyer queries (music + fashion + film).
  ...KW_VERTICAL_BUYERS.slice(0, 8),
  // "Near me" geo-intent.
  ...KW_NEAR_ME.slice(0, 4),
];

/** Wheat-pasting service page — craft + posters + flyposting + OOH + buyer + Q&A. */
export const KW_SERVICE_WHEAT_PASTING = [
  ...KW_CRAFT,
  ...KW_STREET_POSTERS,
  ...KW_FLYPOSTING,
  ...KW_OOH.slice(0, 5),
  ...KW_STREET_MARKETING.slice(0, 5),
  ...KW_VERTICALS.slice(0, 6),
  // Buyer-intent + question coverage drives bottom-funnel impressions.
  ...KW_BUYER_INTENT.slice(0, 16),
  ...KW_QUESTIONS.filter((q) => q.includes("wheat") || q.includes("flyposting") || q.includes("postering")),
  ...KW_COMPARISON.slice(0, 5),
  ...KW_VERTICAL_BUYERS.slice(0, 6),
];

/** Chalk stencil service page — stencil family + floor + activation + buyer. */
export const KW_SERVICE_STENCILS = [
  ...KW_STENCILS,
  ...KW_FLOOR_MEDIA,
  ...KW_STREET_MARKETING.slice(0, 6),
  ...KW_VERTICALS.slice(0, 6),
  ...KW_OOH.slice(0, 4),
  // Stencil-flavored buyer intent.
  "chalk stencil agency",
  "chalk stencil company",
  "chalk stencil services",
  "sidewalk stencil agency",
  "sidewalk advertising agency",
  "spray chalk advertising company",
  ...KW_BUYER_INTENT.slice(13, 25), // agency / company framing
  ...KW_VERTICAL_BUYERS.slice(0, 6),
];

/** Full-impact service page — everything + buyer + comparison + vertical. */
export const KW_SERVICE_FULL_IMPACT = [
  ...KW_CRAFT.slice(0, 4),
  ...KW_STREET_POSTERS.slice(0, 6),
  ...KW_STREET_MARKETING,
  ...KW_OOH.slice(0, 6),
  ...KW_VERTICALS,
  ...KW_NATIONWIDE,
  ...KW_STICKERS_WRAPS.slice(0, 4),
  ...KW_BUYER_INTENT.slice(0, 20),
  ...KW_VERTICAL_BUYERS,
  ...KW_COMPARISON.slice(0, 6),
];

/** Services hub — broad coverage + buyer-intent across every vertical. */
export const KW_SERVICES_HUB = [
  ...KW_CRAFT.slice(0, 4),
  ...KW_STREET_POSTERS.slice(0, 5),
  ...KW_STENCILS.slice(0, 4),
  ...KW_STREET_MEDIA.slice(0, 4),
  ...KW_STREET_MARKETING.slice(0, 6),
  ...KW_OOH.slice(0, 5),
  ...KW_VERTICALS.slice(0, 5),
  ...KW_BUYER_INTENT.slice(0, 18),
  ...KW_QUESTIONS.slice(0, 6),
  ...KW_VERTICAL_BUYERS.slice(0, 8),
];

/** Locations hub — geographic + craft + nationwide rollout + buyer intent. */
export const KW_LOCATIONS_HUB = [
  ...KW_CRAFT.slice(0, 4),
  ...KW_STREET_POSTERS.slice(0, 4),
  ...KW_STREET_MARKETING.slice(0, 5),
  ...KW_OOH.slice(0, 4),
  ...KW_NATIONWIDE,
  ...KW_BUYER_INTENT.slice(0, 14),
  ...KW_NEAR_ME,
];

/** Per-city pages — craft + street poster + city-aware. Caller appends city terms. */
export const KW_CITY_BASE = [
  ...KW_CRAFT.slice(0, 5),
  ...KW_STREET_POSTERS.slice(0, 5),
  ...KW_STREET_MARKETING.slice(0, 4),
  ...KW_OOH.slice(0, 3),
  ...KW_FLYPOSTING.slice(0, 1),
  // Buyer-intent core that applies to every city.
  ...KW_BUYER_INTENT.slice(0, 12),
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
  ...KW_BUYER_INTENT.slice(13, 25),
];

/** Work / case studies hub. */
export const KW_WORK = [
  "wheat pasting case studies",
  "guerrilla marketing case studies",
  "street poster campaign portfolio",
  "OOH campaign portfolio",
  "wheat pasting examples",
  "guerrilla marketing examples",
  "street media campaign examples",
  ...KW_CRAFT.slice(0, 3),
  ...KW_STREET_POSTERS.slice(0, 3),
  ...KW_VERTICALS.slice(0, 6),
  ...KW_VERTICAL_BUYERS.slice(0, 8),
];

/** Gallery — visual / photo documentation framing. */
export const KW_GALLERY = [
  "wheat pasting photos",
  "guerrilla marketing photo gallery",
  "street poster campaign photos",
  "OOH campaign documentation",
  "wheat paste wall photos",
  "street postering photos",
  "stencil campaign documentation",
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
  "hire wheat pasting company",
  "hire guerrilla marketing agency",
  "request wheat pasting quote",
  "request OOH quote",
  "wheat pasting consultation",
  ...KW_CRAFT.slice(0, 3),
  ...KW_PRICING,
  ...KW_NEAR_ME.slice(0, 4),
];

/** Blog hub. */
export const KW_BLOG_HUB = [
  "wheat pasting blog",
  "wheat pasting guides",
  "street postering field notes",
  "guerrilla marketing blog",
  "guerrilla marketing guides",
  "street media insights",
  "OOH advertising blog",
  ...KW_CRAFT.slice(0, 3),
  ...KW_STREET_POSTERS.slice(0, 3),
  ...KW_STREET_MARKETING.slice(0, 3),
  ...KW_QUESTIONS.slice(0, 8),
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
 * Schema.org `additionalType` URLs for the Organization. Each URL is a
 * public concept the entity also embodies — Google reads these as
 * classification signals beyond the main @type.
 *
 * IMPORTANT: schema.org/AdvertisingAgency is intentionally EXCLUDED.
 * AdvertisingAgency descends from LocalBusiness in the Schema.org type
 * hierarchy (AdvertisingAgency → LocalBusiness → Place), so declaring it
 * pins the org as a local-business entity even when the rest of the schema
 * is set up for a nationwide service-area model. We're a US-wide SAB with
 * no public storefront — declaring AdvertisingAgency would pull us back
 * into city-pack SERPs we cannot win.
 *
 * The productontology.org URLs are conceptual classifications (not
 * Schema.org subtypes), so they carry topical breadth without inheriting
 * the LocalBusiness type-hierarchy baggage.
 */
export const ORG_ADDITIONAL_TYPES = [
  "https://www.productontology.org/id/Out-of-home_advertising",
  "https://www.productontology.org/id/Guerrilla_marketing",
  "https://www.productontology.org/id/Flyposting",
  "https://www.productontology.org/id/Wheatpaste",
];

// ──────────────────────────────────────────────────────────────────────────
// Type helper
// ──────────────────────────────────────────────────────────────────────────
export type KeywordSet = ReadonlyArray<string>;
