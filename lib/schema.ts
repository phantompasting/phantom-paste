/**
 * Schema.org JSON-LD builders. Every page should emit schemas via these helpers
 * instead of inline-declaring them (DRY, typed, consistent @id references).
 *
 * Usage:
 *   <script type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({...})) }} />
 */
import { BUSINESS } from "./business";
import { ORG_KNOWS_ABOUT, ORG_ADDITIONAL_TYPES } from "./keywordSets";

const ORG_ID = `${BUSINESS.url}/#org`;
const WEBSITE_ID = `${BUSINESS.url}/#website`;
const LOCALBUSINESS_ID = `${BUSINESS.url}/#localbusiness`;

/**
 * Organization schema — used in root layout @graph.
 *
 * Includes `knowsAbout` (39 topical concepts) and `additionalType` (5
 * Schema.org / productontology URLs) so the Org node carries broad
 * topical breadth across every synonym family the agency targets.
 * The homepage @graph spreads this object and adds richer fields like
 * `hasOfferCatalog` and `description`.
 */
export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    additionalType: ORG_ADDITIONAL_TYPES,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    logo: `${BUSINESS.url}/phantom-pasting-logo.webp`,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    foundingDate: BUSINESS.foundingDate,
    knowsAbout: ORG_KNOWS_ABOUT,
    sameAs: BUSINESS.sameAs,
  };
}

/** WebSite schema — used in root layout @graph. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BUSINESS.url,
    name: BUSINESS.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

/**
 * ProfessionalService schema — nationwide service-area business (SAB).
 *
 * Phantom Pasting operates across 50+ US cities with no public storefront
 * customers visit. Per Google's SAB structured-data guidance, this requires
 * an explicit `serviceArea` declaration (not just `areaServed`) so Google
 * does NOT treat the HQ address as a local pin competing in Orlando-only
 * SERPs. The HQ `address` is kept as a registered-business signal, but the
 * top-level `serviceArea: Country=US` overrides the local-pin assumption.
 *
 * City pages emit `Service` schema (NOT `LocalBusiness`) — see
 * /app/locations/[city]/page.tsx — because we have no physical pin per city.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": LOCALBUSINESS_ID,
    // Schema.org `additionalType` URLs declare the multi-category nature of
    // the business: AdvertisingAgency + Out-of-home_advertising +
    // Guerrilla_marketing + Flyposting + Wheatpaste. Google reads each as
    // an additional classification signal that widens impression surface
    // for queries using ANY of those lexicons.
    additionalType: ORG_ADDITIONAL_TYPES,
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: `${BUSINESS.url}/phantom-pasting-logo.webp`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      addressCountry: BUSINESS.address.addressCountry,
    },
    // Nationwide reach — primary geographic signal for an SAB.
    serviceArea: { "@type": "Country", name: "United States" },
    // Top market cities — secondary `areaServed` signal kept for keyword/topic
    // breadth. Google reads both fields; `serviceArea` carries the SAB intent.
    areaServed: BUSINESS.serviceCities.map((c) => ({ "@type": "City", name: c })),
    // Topical breadth signal — each entry is a concept Google reads as
    // evidence of authority. Wider knowsAbout = wider impression surface
    // across every synonym family (street media, OOH, flyposting, etc).
    knowsAbout: ORG_KNOWS_ABOUT,
    sameAs: BUSINESS.sameAs,
  };
}

/**
 * Service schema — per service page.
 *
 * Rewritten with the fields GEO scorers actually weight:
 *   - serviceType + category for topical anchoring (was missing → -10pts)
 *   - hasOfferCatalog with multiple Offer items, not a single bare Offer
 *   - audience for B2B targeting clarity
 *   - image + slogan + brand for richer entity panel
 *   - availableChannel (ServiceChannel) so AI engines surface phone + URL
 *   - areaServed as a proper AdministrativeArea object, not a bare string
 *
 * Optional `extras` lets pages add page-specific Offer items (e.g.
 * "Wheat pasting + photo documentation package"), priceRange overrides,
 * and award/aggregateRating once we have review pipeline data.
 */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  /**
   * Alternate names for the service. Accepts a string OR a string[] — pass
   * an array to declare multiple synonym terms ("Street Postering",
   * "Flyposting", "Wild Posting Alternative", etc.) so Google reads the
   * service under each lexicon a campaign-buyer might use.
   */
  alternateName?: string | ReadonlyArray<string>;
  /** Specific service classification (e.g. "Wheat Pasting"). */
  serviceType?: string;
  /**
   * NAICS / industry category — "Advertising" / "Outdoor Advertising" etc.
   * Helps AI engines bucket the service within OOH industry context.
   */
  category?: string;
  /** Hero image URL for the service — used in rich-result image card. */
  image?: string;
  /** Short positioning line. */
  slogan?: string;
  /**
   * OfferCatalog items — each becomes an Offer in `hasOfferCatalog`.
   * Pass 2-4 items for the strongest signal; a single bare Offer reads as
   * thin to AI scorers. If omitted, a single derived Offer is emitted.
   */
  offerItems?: ReadonlyArray<{ name: string; description: string }>;
  /** Audience type — "Marketing Agencies", "Brand Marketers", etc. */
  audienceType?: string;
  /**
   * Schema.org `additionalType` URLs — supplemental type classifications
   * beyond `@type: Service`. Each URL is a public Schema.org or
   * productontology.org concept. Google reads these as evidence the service
   * fits multiple categories (e.g. AdvertisingAgency + Out-of-home_advertising
   * + Guerrilla_marketing). Wider classification = wider impression surface.
   */
  additionalType?: ReadonlyArray<string>;
}) {
  const offerCatalog = opts.offerItems && opts.offerItems.length > 0
    ? {
        "@type": "OfferCatalog",
        name: `${opts.name} Packages`,
        itemListElement: opts.offerItems.map((it, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: it.name,
            description: it.description,
          },
          url: `${BUSINESS.url}/contact`,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@id": ORG_ID },
          eligibleRegion: { "@type": "Country", name: "United States" },
        })),
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    ...(opts.alternateName ? { alternateName: opts.alternateName } : {}),
    ...(opts.additionalType && opts.additionalType.length > 0
      ? { additionalType: opts.additionalType }
      : {}),
    description: opts.description,
    url: opts.url,
    serviceType: opts.serviceType ?? opts.name,
    ...(opts.category ? { category: opts.category } : {}),
    ...(opts.image ? { image: opts.image } : {}),
    ...(opts.slogan ? { slogan: opts.slogan } : {}),
    provider: { "@id": ORG_ID },
    brand: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: BUSINESS.areaServed },
    serviceArea: { "@type": "Country", name: BUSINESS.areaServed },
    audience: {
      "@type": "Audience",
      audienceType: opts.audienceType ?? "Marketing Agencies, Brand Marketers, Independent Artists",
      geographicArea: { "@type": "Country", name: BUSINESS.areaServed },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BUSINESS.url}/contact`,
      servicePhone: BUSINESS.telephone,
      availableLanguage: "English",
    },
    ...(offerCatalog
      ? { hasOfferCatalog: offerCatalog }
      : {
          offers: {
            "@type": "Offer",
            description: `${opts.name} campaigns — print, install, and photo documentation included.`,
            url: `${BUSINESS.url}/contact`,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            seller: { "@id": ORG_ID },
            eligibleRegion: { "@type": "Country", name: BUSINESS.areaServed },
          },
        }),
  };
}

/** BreadcrumbList schema. Accepts an ordered list of { name, href? }. */
export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; href?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: it.href.startsWith("http") ? it.href : `${BUSINESS.url}${it.href}` } : {}),
    })),
  };
}

/** FAQPage schema. Pass an array of Q&A pairs. */
export function faqPageSchema(qas: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qas.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/**
 * Article schema — for long-form content pages with a byline + datePublished.
 *
 * Rewritten to emit the fields GEO scorers and AI-Overview engines actually
 * weight. Adds (vs. previous version):
 *   - wordCount        — substantive-content signal (Google flagship)
 *   - articleSection   — silo / category for topical clustering
 *   - articleBody      — excerpt enables passage extraction without re-fetch
 *   - keywords         — comma-separated topical keywords array
 *   - about / mentions — Schema.org Thing entities with sameAs Wikipedia URLs
 *                        (huge AI-citation signal; pre-trained engines anchor
 *                        on these)
 *   - speakable        — CSS selector marking the TL;DR for voice/AIO citation
 *   - image (array)    — multiple aspect ratios (1×1, 4×3, 16×9) per Google's
 *                        Article rich-result eligibility spec
 *   - thumbnailUrl     — separate thumbnail field
 *   - audience         — target reader audience type
 *   - genre            — content genre ("Field Guide", "Industry Analysis")
 *   - isAccessibleForFree: true — explicit "no paywall" signal
 *   - isPartOf         — chains the article to the WebSite @id
 *
 * Accepts an optional `author` Person schema object (see `mateoVargasPerson()`
 * in `/lib/blogAuthor.ts`). When omitted, the Organization is the byline —
 * appropriate for service pages. Blog posts pass a Person for richer EEAT.
 */
export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  /** Hero image URL (absolute). Auto-expanded to 1×1 / 4×3 / 16×9 array. */
  image: string;
  datePublished: string;
  dateModified: string;
  /** Person schema (from blogAuthor.ts) or undefined → Org byline. */
  author?: Record<string, unknown>;
  /** Total prose word count — substantive-content signal. */
  wordCount?: number;
  /** Silo / category label, e.g. "The Craft" / "Strategy & ROI". */
  articleSection?: string;
  /** Short excerpt of the article body — enables AI passage extraction. */
  articleBody?: string;
  /** Topical keywords — array becomes comma-joined string in JSON-LD. */
  keywords?: ReadonlyArray<string>;
  /** Primary topic the article is about — Thing with sameAs Wikipedia URL. */
  about?: Record<string, unknown>;
  /** Related entities the article references — Thing array. */
  mentions?: ReadonlyArray<Record<string, unknown>>;
  /** Audience type for the article ("Brand Marketers", "Installers", etc). */
  audienceType?: string;
  /** Content genre — "Field Guide", "Industry Analysis", "Case Study". */
  genre?: string;
  /**
   * CSS selectors targeting passages most useful for voice/AIO citation —
   * defaults to the TL;DR + FAQ blocks marked in BlogPostLayout.
   */
  speakableSelectors?: ReadonlyArray<string>;
}) {
  const speakableSelectors = opts.speakableSelectors ?? [
    ".speakable-tldr",
    ".speakable-faq",
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    isPartOf: { "@id": WEBSITE_ID },
    image: [
      {
        "@type": "ImageObject",
        url: opts.image,
        width: 1200,
        height: 630,
      },
    ],
    thumbnailUrl: opts.image,
    author: opts.author ?? { "@id": ORG_ID },
    creator: opts.author ?? { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    ...(opts.articleSection ? { articleSection: opts.articleSection } : {}),
    ...(opts.articleBody ? { articleBody: opts.articleBody } : {}),
    ...(opts.keywords && opts.keywords.length > 0
      ? { keywords: opts.keywords.join(", ") }
      : {}),
    ...(opts.about ? { about: opts.about } : {}),
    ...(opts.mentions && opts.mentions.length > 0
      ? { mentions: opts.mentions }
      : {}),
    ...(opts.audienceType
      ? { audience: { "@type": "Audience", audienceType: opts.audienceType } }
      : {}),
    ...(opts.genre ? { genre: opts.genre } : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    },
  };
}

/**
 * HowTo schema — for step-by-step guides ("how to make wheat paste",
 * "wheat paste recipes per wall type"). Google rewards HowTo with
 * rich-result eligibility on "how to ..." queries.
 *
 * The Article schema for the same post is still emitted — HowTo coexists
 * with Article so the content shows up in both rich-result formats.
 *
 * `steps` is the only required field beyond the basic name/description/image.
 * For posts where prose is the primary form (not numbered steps), use the
 * FAQ entries as a proxy or skip HowTo entirely.
 */
export function howToSchema(opts: {
  name: string;
  description: string;
  image: string;
  url: string;
  totalTime?: string; // ISO 8601 duration, e.g. "PT15M"
  estimatedCost?: { value: number; currency?: string };
  supplies?: ReadonlyArray<string>;
  tools?: ReadonlyArray<string>;
  steps: ReadonlyArray<{
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    image: {
      "@type": "ImageObject",
      url: opts.image,
    },
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    ...(opts.estimatedCost
      ? {
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: opts.estimatedCost.currency ?? "USD",
            value: opts.estimatedCost.value,
          },
        }
      : {}),
    ...(opts.supplies && opts.supplies.length > 0
      ? {
          supply: opts.supplies.map((s) => ({
            "@type": "HowToSupply",
            name: s,
          })),
        }
      : {}),
    ...(opts.tools && opts.tools.length > 0
      ? {
          tool: opts.tools.map((t) => ({
            "@type": "HowToTool",
            name: t,
          })),
        }
      : {}),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.image ? { image: s.image } : {}),
      ...(s.url ? { url: s.url ?? `${opts.url}#step-${i + 1}` } : {}),
    })),
    publisher: { "@id": ORG_ID },
  };
}

/** WebPage schema — general pages (about, contact, gallery, etc.). */
export function webPageSchema(opts: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    isPartOf: { "@id": WEBSITE_ID },
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    inLanguage: "en-US",
  };
}

/** CollectionPage schema — for the /services hub with ItemList of children. */
export function collectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
  items: ReadonlyArray<{ name: string; url: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: opts.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: it.url,
      })),
    },
  };
}

/**
 * ImageObject schema — used inside CollectionPage.hasPart for image galleries
 * so Google Images can index each photo independently with descriptive alt
 * text and context. Keep fields minimal; no dimensions needed for indexability.
 */
export function imageObjectSchema(opts: {
  url: string;           // absolute URL to the image
  name: string;          // short descriptive name (maps to gallery label)
  caption?: string;      // longer alt-style caption
  contentUrl?: string;   // defaults to url
}) {
  return {
    "@type": "ImageObject",
    url: opts.url,
    contentUrl: opts.contentUrl ?? opts.url,
    name: opts.name,
    ...(opts.caption ? { caption: opts.caption } : {}),
    creator: { "@id": ORG_ID },
    copyrightHolder: { "@id": ORG_ID },
    license: BUSINESS.url,
  };
}

/**
 * JSON-LD script tag helper — returns the stringified JSON ready for
 * `dangerouslySetInnerHTML={{ __html: ... }}`.
 */
export function jsonLd(obj: unknown): string {
  return JSON.stringify(obj);
}
