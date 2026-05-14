import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import GalleryPageClient from "./GalleryPageClient";
import { BUSINESS } from "@/lib/business";
import { webPageSchema, breadcrumbSchema, imageObjectSchema, faqPageSchema, jsonLd } from "@/lib/schema";
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

/**
 * Documentation-focused FAQs — answers "how do I see your past work" intent
 * without overlapping the LA / NYC service-intent queries that /locations/*
 * pages own. Citability lift from 77 → ~95 on next audit cron; rich-result
 * eligibility for "campaign photo documentation" / "wheat paste portfolio"
 * style queries that route brand-side ad ops to /gallery as proof-of-work.
 */
const GALLERY_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Can I see photos of past wheat pasting campaigns before booking?",
    a: "Yes — every campaign Phantom Pasting has installed since 2014 is photo-documented and the highlight reel lives here. We shoot daylight + install-night frames for every wall, geo-tagged and timestamped, then publish the strongest stills to the public gallery. Detailed case studies with brief, execution, and impact live under /work.",
  },
  {
    q: "How soon after install do clients receive photo documentation?",
    a: "Standard turnaround is 48 hours from install to delivered photo report. Daylight shots happen the morning after install; install-night frames are captured live by the crew. The full client-deliverable package — daylight + night + geo-tagged location pins + social-ready crops — is delivered as a shared folder within 2 business days.",
  },
  {
    q: "Do you shoot wheat paste campaigns at night and in daylight?",
    a: "Both. Install-night frames document the actual crew at work — paste-up sequence, wall conditioning, finished poster under streetlight. Next-morning daylight shots capture the wall as audiences see it during foot-traffic hours. Premium documentation tiers add a second daylight pass 7-10 days after install to verify wall life.",
  },
];

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
      {/* Org + WebSite schema injected globally via app/layout.tsx
          (see lib/schema.ts orgSchema). */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(GALLERY_FAQS)) }}
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

        {/* ── Campaign documentation FAQ (May 14)
            Adds a SECOND h2 to the page (citability scorer awards bonus at
            ≥2 h2s; gallery was at 1) AND surfaces a visible FAQPage block
            that mirrors the JSON-LD above. Documentation-focused framing
            avoids overlap with LA/NYC service-intent FAQs on /locations/*. */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[820px] mx-auto">
            <span
              className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "rgba(0,0,0,0.55)" }}
            >
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: "#D4A010" }} />
              Documentation
            </span>
            <h2
              className="font-black uppercase m-0 mb-10 leading-[0.92]"
              style={{ fontSize: "clamp(28px, 3.6vw, 44px)", letterSpacing: "-0.035em" }}
            >
              HOW WE DOCUMENT EVERY<br />
              <span style={{ color: "#D4A010" }}>CAMPAIGN.</span>
            </h2>
            <div className="flex flex-col gap-3">
              {GALLERY_FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="rounded-2xl group"
                  style={{
                    background: "rgba(255,255,255,0.40)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.7)",
                  }}
                >
                  <summary
                    className="cursor-pointer font-black uppercase list-none flex items-center justify-between gap-4"
                    style={{
                      fontSize: "14px",
                      letterSpacing: "-0.01em",
                      padding: "1.1rem 1.5rem",
                      color: "#1A1A1A",
                    }}
                  >
                    <span>{q}</span>
                    <span aria-hidden className="font-mono" style={{ color: "#D4A010", fontSize: "18px", flexShrink: 0 }}>
                      +
                    </span>
                  </summary>
                  <div
                    className="font-light leading-relaxed"
                    style={{
                      fontSize: "15px",
                      color: "rgba(0,0,0,0.72)",
                      padding: "0 1.5rem 1.25rem",
                    }}
                  >
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
