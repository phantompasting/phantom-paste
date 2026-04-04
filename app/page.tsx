import ClientShell from "@/components/ClientShell";
import HeroSection from "@/components/hero/HeroSection";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Phantom Pasting",
  url: "https://phantompasting.com",
  description: "Guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://phantompasting.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const homeBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://phantompasting.com" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Phantom Pasting",
  url: "https://phantompasting.com",
  logo: "https://phantompasting.com/phantom-pasting-logo.png",
  description:
    "Guerrilla marketing agency specializing in wheat pasting, wild posting, and chalk spray stencil campaigns across 50+ US cities.",
  foundingDate: "2014",
  areaServed: "United States",
  knowsAbout: ["Wheat Pasting", "Wild Posting", "Guerrilla Marketing", "Street Advertising", "Chalk Spray Stencils"],
  sameAs: ["https://www.instagram.com/phantompasting"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://phantompasting.com/contact",
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
          url: "https://phantompasting.com/services/wheat-pasting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chalk Spray Stencils",
          description: "Precision chalk spray stencil activations at street level.",
          url: "https://phantompasting.com/services/chalk-spray-stencils",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Impact Street Campaigns",
          description: "End-to-end guerrilla marketing campaigns combining wheat pasting, wild posting, and stencil activations.",
          url: "https://phantompasting.com/services/full-impact-campaigns",
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
