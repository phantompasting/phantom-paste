import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Campaign Gallery | Our Work | Phantom Pasting",
  description:
    "Browse 500+ documented wheat paste, wild posting, and chalk spray stencil campaigns across the US. Every activation photo-documented.",
  alternates: { canonical: "https://www.phantompasting.com/gallery" },
  openGraph: {
    title: "Campaign Gallery | Phantom Pasting",
    description: "Photo documentation from 500+ guerrilla marketing campaigns across 50+ US cities.",
    type: "website",
    url: "https://www.phantompasting.com/gallery",
    siteName: "Phantom Pasting",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.phantompasting.com" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://www.phantompasting.com/gallery" },
  ],
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Phantom Pasting Campaign Gallery",
  description:
    "Photo documentation from wheat paste, wild posting, and chalk spray stencil campaigns across 50+ US cities.",
  url: "https://www.phantompasting.com/gallery",
  author: { "@type": "Organization", name: "Phantom Pasting", url: "https://www.phantompasting.com" },
  isPartOf: { "@type": "WebSite", name: "Phantom Pasting", url: "https://www.phantompasting.com" },
};

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <div style={{ background: "transparent", minHeight: "100vh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <GalleryPageClient />
      </div>
    </>
  );
}
