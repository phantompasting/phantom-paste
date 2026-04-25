import type { Metadata } from "next";
import ClientShell from "@/components/ClientShell";
import HeroSection from "@/components/hero/HeroSection";
import StaticSEOSections from "@/components/sections/StaticSEOSections";
import { BUSINESS } from "@/lib/business";
import {
  orgSchema,
  webSiteSchema,
  localBusinessSchema,
  faqPageSchema,
  breadcrumbSchema,
  jsonLd,
} from "@/lib/schema";
import { HOMEPAGE_FAQS } from "@/lib/homepageFAQs";
import { KW_HOMEPAGE } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Company | Phantom Pasting" },
  description:
    "Wheat pasting, street postering, street media & chalk stencil campaigns across 50+ US cities. Guerrilla marketing agency, 500+ photo-documented activations. Also called flyposting, street marketing, alternative OOH.",
  // Meta keywords: low Google weight, real Bing weight, also indexed by some
  // AI search engines. Centralized in lib/keywordSets.ts so the synonym set
  // stays coherent across pages.
  keywords: [...KW_HOMEPAGE],
  alternates: { canonical: BUSINESS.url },
  openGraph: {
    title: "Wheat Pasting Company | Phantom Pasting",
    description:
      "Wheat pasting, street postering & chalk spray stencil campaigns across 50+ US cities. 500+ photo-documented guerrilla marketing activations.",
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
    {
      ...localBusinessSchema(),
      description:
        "Wheat pasting company specializing in large-format poster campaigns, street postering, and chalk spray stencil activations across 50+ US cities. Founded 2014. 500+ campaigns. 100% photo documented.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        url: `${BUSINESS.url}/contact`,
        areaServed: "US",
        availableLanguage: "English",
      },
    },
  ],
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
