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

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting & Wild Posting Agency | Phantom Pasting" },
  description:
    "Wheat pasting, wild posting & chalk spray stencil campaigns across 50+ US cities. 500+ photo-documented guerrilla marketing activations.",
  alternates: { canonical: BUSINESS.url },
  openGraph: {
    title: "Wheat Pasting & Wild Posting Agency | Phantom Pasting",
    description:
      "Wheat pasting, wild posting & chalk spray stencil campaigns across 50+ US cities. 500+ photo-documented guerrilla marketing activations.",
    url: BUSINESS.url,
    type: "website",
    siteName: "Phantom Pasting",
    images: [
      {
        url: `${BUSINESS.url}/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp`,
        width: 1200,
        height: 630,
        alt: "Phantom Pasting — wheat paste wild posting wall campaign Los Angeles",
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
        "Guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities.",
      knowsAbout: [
        "Wheat Pasting",
        "Wild Posting",
        "Guerrilla Marketing",
        "Street Advertising",
        "Chalk Spray Stencils",
      ],
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
                "End-to-end guerrilla marketing campaigns combining wheat pasting, wild posting, and stencil activations.",
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
        "Guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities. Founded 2014. 500+ campaigns. 100% photo documented.",
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
