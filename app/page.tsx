import type { Metadata } from "next";
import ClientShell from "@/components/ClientShell";
import HeroSection from "@/components/hero/HeroSection";

export const metadata: Metadata = {
  title: "Phantom Pasting | Guerrilla Marketing Agency — Wheat Pasting & Wild Posting",
  description:
    "Phantom Pasting is a guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities.",
  alternates: { canonical: "https://www.phantompasting.com" },
  openGraph: {
    title: "Phantom Pasting | Guerrilla Marketing Agency",
    description:
      "Wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities. Every activation photo-documented.",
    url: "https://www.phantompasting.com",
    type: "website",
    siteName: "Phantom Pasting",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/fashionpass-wheat-paste-wild-posting-wall-los-angeles.webp",
        width: 1200,
        height: 630,
        alt: "Phantom Pasting — wheat paste wild posting wall campaign Los Angeles",
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Phantom Pasting",
  url: "https://www.phantompasting.com",
  description: "Guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.phantompasting.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const homeBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.phantompasting.com" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Phantom Pasting",
  url: "https://www.phantompasting.com",
  logo: "https://www.phantompasting.com/phantom-pasting-logo.png",
  description:
    "Guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities.",
  foundingDate: "2014",
  areaServed: "United States",
  knowsAbout: ["Wheat Pasting", "Wild Posting", "Guerrilla Marketing", "Street Advertising", "Chalk Spray Stencils"],
  sameAs: ["https://www.instagram.com/phantompasting"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://www.phantompasting.com/contact",
    areaServed: "US",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Street Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wheat Pasting",
          description: "Large-format wheat paste poster advertising on prime urban walls across 50+ US cities.",
          url: "https://www.phantompasting.com/services/wheat-pasting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chalk Spray Stencils",
          description: "Precision chalk spray stencil activations at street level.",
          url: "https://www.phantompasting.com/services/chalk-spray-stencils",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Impact Street Campaigns",
          description: "End-to-end guerrilla marketing campaigns combining wheat pasting, wild posting, and stencil activations.",
          url: "https://www.phantompasting.com/services/full-impact-campaigns",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumb) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <ClientShell>
        <HeroSection />
      </ClientShell>
    </>
  );
}
