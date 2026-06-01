import type { Metadata } from "next";
import ClientShell from "@/components/ClientShell";
import HeroSection from "@/components/hero/HeroSection";
import StaticSEOSections from "@/components/sections/StaticSEOSections";
import { BUSINESS } from "@/lib/business";
import {
  faqPageSchema,
  breadcrumbSchema,
  jsonLd,
} from "@/lib/schema";
import { HOMEPAGE_FAQS } from "@/lib/homepageFAQs";
import { KW_HOMEPAGE } from "@/lib/keywordSets";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Phantom Pasting" template so
  // the homepage title can carry trust signals without going past Google's
  // ~60-char SERP truncation. 58 chars — positions Phantom Pasting as a full
  // street-advertising agency (postering + guerrilla marketing) rather than
  // a single-tactic shop. Avoids the "wild posting" trademark term.
  title: { absolute: "Wheat Pasting · Street Advertising Agency | Phantom Pasting" },
  // Description leads with the full-service positioning (wheat pasting +
  // postering + guerrilla marketing), price anchor ($3,500) and urgency
  // (24 hrs) for cost queries, closes with trust signal + target verticals.
  description:
    "Wheat pasting, postering & guerrilla marketing across 50+ US cities. From $3,500 — quote in 24 hours. 500+ campaigns for fashion, music & DTC.",
  // Meta keywords: low Google weight, real Bing weight, also indexed by some
  // AI search engines. Centralized in lib/keywordSets.ts so the synonym set
  // stays coherent across pages.
  keywords: [...KW_HOMEPAGE],
  alternates: { canonical: BUSINESS.url },
  openGraph: {
    title: "Wheat Pasting · Street Advertising Agency | Phantom Pasting",
    description:
      "Wheat pasting, postering & guerrilla marketing across 50+ US cities. From $3,500 — quote in 24 hours. 500+ campaigns for fashion, music & DTC.",
    url: BUSINESS.url,
    type: "website",
    siteName: "Phantom Pasting",
    images: [
      {
        url: `${BUSINESS.url}/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp`,
        width: 1200,
        height: 630,
        alt: "Phantom Pasting — wheat paste poster campaign wall Los Angeles",
      },
    ],
  },
};

/**
 * Homepage-specific Org enrichment — references the canonical Organization
 * @id from the layout's orgSchema() emission. Google's documented @id-merge
 * behavior consolidates this onto the single Organization node, so we only
 * need to express the FIELDS UNIQUE TO THE HOMEPAGE (description override
 * + hasOfferCatalog) rather than re-spreading the full 39-entry knowsAbout
 * + serviceCities array + sameAs + contactPoint that already live in the
 * layout-emitted Organization.
 *
 * Previous emission had a subtle bug: it spread `...orgSchema()` (with rich
 * areaServed city-array) then immediately overrode it with
 * `areaServed: BUSINESS.areaServed` (a plain string "United States") —
 * downgrading the homepage's geographic signal vs what every other page
 * carries. Removing the spread fixes that AND saves ~1.3-1.9KB on every
 * homepage HTML payload.
 *
 * WebSite schema is also no longer duplicated here — the layout's emission
 * is canonical.
 */
const homepageOrgEnrichment = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BUSINESS.url}/#org`,
  description:
    "Wheat pasting company also known as a flyposting, street postering, street media, guerrilla marketing, and alternative OOH agency. Large-format poster campaigns, chalk spray stencil activations, and full-impact multi-format rollouts across 50+ US cities. Founded 2014. 500+ campaigns. 100% photo documented.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Street Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wheat Pasting",
          description:
            "Large-format wheat paste poster advertising on prime urban walls across 50+ US cities.",
          url: `${BUSINESS.url}/services/wheat-pasting`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chalk Spray Stencils",
          description: "Precision chalk spray stencil activations at street level.",
          url: `${BUSINESS.url}/services/chalk-spray-stencils`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Snipes & Sticker Posting",
          description:
            "Die-cut sticker campaigns and pole-mounted snipe signs placed across high-traffic urban corridors.",
          url: `${BUSINESS.url}/services/snipes`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Impact Street Campaigns",
          description:
            "End-to-end guerrilla marketing campaigns combining wheat pasting, street postering, and stencil activations.",
          url: `${BUSINESS.url}/services/full-impact-campaigns`,
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homepageOrgEnrichment) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(HOMEPAGE_FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([{ name: "Home", href: BUSINESS.url }])),
        }}
      />
      <ClientShell>
        <HeroSection />
        <StaticSEOSections />
      </ClientShell>
    </>
  );
}
