/**
 * Schema.org JSON-LD builders. Every page should emit schemas via these helpers
 * instead of inline-declaring them (DRY, typed, consistent @id references).
 *
 * Usage:
 *   <script type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({...})) }} />
 */
import { BUSINESS } from "./business";

const ORG_ID = `${BUSINESS.url}/#org`;
const WEBSITE_ID = `${BUSINESS.url}/#website`;
const LOCALBUSINESS_ID = `${BUSINESS.url}/#localbusiness`;

/** Organization schema — used in root layout @graph. */
export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    logo: `${BUSINESS.url}/phantom-pasting-logo.webp`,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    foundingDate: BUSINESS.foundingDate,
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
 * ProfessionalService schema — nationwide service-area business variant.
 * Phantom Pasting operates across 50+ US cities with no single storefront, so
 * ProfessionalService (a LocalBusiness subtype) is more accurate than bare
 * LocalBusiness: it preserves the LB signals Google uses for agencies while
 * correctly declaring this as a professional-service agency, not a local pin.
 * City-specific pages still use LocalBusiness + PostalAddress via CityPageTemplate.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": LOCALBUSINESS_ID,
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: `${BUSINESS.url}/phantom-pasting-logo.webp`,
    priceRange: "$$",
    areaServed: BUSINESS.serviceCities.map((c) => ({ "@type": "City", name: c })),
    sameAs: BUSINESS.sameAs,
  };
}

/** Service schema — per service page. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  alternateName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    alternateName: opts.alternateName,
    description: opts.description,
    url: opts.url,
    provider: { "@id": ORG_ID },
    areaServed: BUSINESS.areaServed,
    offers: {
      "@type": "Offer",
      description: `${opts.name} campaigns — print, install, and photo documentation included.`,
      url: `${BUSINESS.url}/contact`,
    },
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

/** Article schema — for long-form content pages with a byline + datePublished. */
export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  image: string;        // absolute URL
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    image: {
      "@type": "ImageObject",
      url: opts.image,
      width: 1200,
      height: 630,
    },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: "en-US",
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
