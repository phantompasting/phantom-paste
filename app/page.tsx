import type { Metadata } from "next";
import ClientShell from "@/components/ClientShell";
import HeroSection from "@/components/hero/HeroSection";
import StaticSEOSections from "@/components/sections/StaticSEOSections";
import { BUSINESS } from "@/lib/business";
import {
  orgSchema,
  webSiteSchema,
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
 * Consolidated @graph — Organization + WebSite + LocalBusiness in a single JSON-LD
 * block with stable @id references. All service/offer details are expressed once
 * via a hasOfferCatalog node attached to the Organization.
 */
const homepageGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...orgSchema(),
      description:
        "Wheat pasting company also known as a flyposting, street postering, street media, guerrilla marketing, and alternative OOH agency. Large-format poster campaigns, chalk spray stencil activations, and full-impact multi-format rollouts across 50+ US cities.",
      // knowsAbout already supplied by orgSchema() via ORG_KNOWS_ABOUT (39
      // topical entities) — the spread above carries it. No inline override
      // needed; the previous 6-entry inline list was narrower than the
      // centralized version.
      areaServed: BUSINESS.areaServed,
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
              name: "Full Impact Street Campaigns",
              description:
                "End-to-end guerrilla marketing campaigns combining wheat pasting, street postering, and stencil activations.",
              url: `${BUSINESS.url}/services/full-impact-campaigns`,
            },
          },
        ],
      },
    },
    webSiteSchema(),
    // Previous third node was a `localBusinessSchema()` ProfessionalService
    // spread that pinned the org geographically (Orlando, FL + priceRange +
    // LocalBusiness subtype). Removed entirely. The Org node above already
    // carries serviceArea (Country=US), areaServed (cities array),
    // contactPoint, and the description that lived here. Description below
    // remains as a homepage-specific Org enrichment via @id merge.
  ],
};

// Homepage-specific Org enrichment — same @id as the layout's orgSchema(),
// so Google merges this into a single Organization node with the richer
// homepage-only `description`. Kept as a separate emission to avoid
// duplicating orgSchema()'s 39-entry knowsAbout / serviceArea / etc.
const homepageOrgEnrichment = {
  "@context": "https://schema.org",
  "@id": `${BUSINESS.url}/#org`,
  description:
    "Wheat pasting company specializing in large-format poster campaigns, street postering, street media, chalk spray stencil activations, and full-impact guerrilla marketing across 50+ US cities. Founded 2014. 500+ campaigns. 100% photo documented.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homepageGraph) }}
      />
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
