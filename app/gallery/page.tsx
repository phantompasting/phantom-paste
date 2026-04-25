import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import GalleryPageClient from "./GalleryPageClient";
import { BUSINESS } from "@/lib/business";
import { webPageSchema, breadcrumbSchema, imageObjectSchema, jsonLd } from "@/lib/schema";
import { GALLERY_IMGS } from "@/lib/gallery-data";
import { KW_GALLERY } from "@/lib/keywordSets";

const PAGE_URL = `${BUSINESS.url}/gallery`;
const PAGE_TITLE = "Campaign Gallery | Our Work";
const PAGE_DESC =
  "Browse 500+ photo-documented wheat paste, street postering, snipe, pole wrap, sticker & chalk stencil campaigns across 50+ US markets.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [...KW_GALLERY],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Campaign Gallery | Phantom Pasting",
    description: "Photo documentation from 500+ guerrilla marketing campaigns across 50+ US cities.",
    type: "website",
    url: PAGE_URL,
    siteName: "Phantom Pasting",
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Phantom Pasting Campaign Gallery",
  description: PAGE_DESC,
  url: PAGE_URL,
  author: { "@id": `${BUSINESS.url}/#org` },
  isPartOf: { "@id": `${BUSINESS.url}/#website` },
  // hasPart enumerates each photo as an ImageObject so Google Images can
  // index each independently with descriptive name + caption. No visual
  // impact — this is a JSON-LD script injected in <head>.
  hasPart: GALLERY_IMGS.map((img) =>
    imageObjectSchema({
      url: `${BUSINESS.url}${img.src}`,
      name: img.label,
      caption: img.alt,
    })
  ),
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(webPageSchema({ name: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL })),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      {/* localBusinessSchema is emitted globally via app/layout.tsx — re-injecting
          here would duplicate the @id node Google already merges across pages. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Gallery", href: "/gallery" },
            ])
          ),
        }}
      />
      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Gallery" },
          ]}
        />
        <TrustBar />

        {/* The page H1 lives inside GalleryPageClient ("OUR WORK.") — keeping a
            single title block above the grid. SEO is carried by the document
            <title>, meta description, and the gallerySchema/ImageObject JSON-LD
            already injected into <head>. */}
        <GalleryPageClient />

        <SiteFooter />
      </div>
    </>
  );
}
