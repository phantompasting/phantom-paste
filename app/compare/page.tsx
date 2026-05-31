import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBar from "@/components/TrustBar";
import SiteFooter from "@/components/SiteFooter";
import ShinyGoldText from "@/components/ShinyGoldText";
import { BUSINESS } from "@/lib/business";
import { COMPETITORS, PHANTOM_FACTS } from "@/lib/competitors";
import { webPageSchema, faqPageSchema, jsonLd } from "@/lib/schema";

const ACCENT = "#D4A010";
const PAGE_URL = `${BUSINESS.url}/compare`;
const PAGE_TITLE = "Wheat Pasting Companies Compared";
const PAGE_DESC =
  "An honest comparison of the top US wheat pasting & wild posting companies — track record, formats, documentation, coverage, and pricing — and how Phantom Pasting fits.";

export const metadata: Metadata = {
  title: { absolute: `${PAGE_TITLE} (2026) | Phantom Pasting` },
  description: PAGE_DESC,
  keywords: [
    "wheat pasting companies",
    "best wheat pasting company",
    "wheatpasting companies",
    "wild posting companies",
    "wheat pasting agencies",
    "wild posting agency comparison",
    "street postering companies",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${PAGE_TITLE} | Phantom Pasting`,
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "website",
    images: [{ url: BUSINESS.ogImageDefault, width: 1200, height: 630, alt: "Wheat pasting companies compared" }],
  },
};

const CRITERIA = [
  { t: "Documentation", d: "Do they prove every placement ran — photos, timestamps, GPS — or just send a few hero shots?" },
  { t: "Formats", d: "Wall posters only, or paste plus chalk stencils and snipes for neighborhood saturation?" },
  { t: "Pricing clarity", d: "Are rates published and itemized, or quote-only with a high, opaque floor?" },
  { t: "Coverage", d: "US-focused depth, or international breadth — match it to where your audience actually is." },
];

const HUB_FAQS = [
  {
    q: "What is the best wheat pasting company?",
    a: "It depends on the campaign. Established agencies like ALT TERRAIN (since 2003) and Wheatpaste Posters (since 2002) bring long track records, blue-chip rosters, and — for ALT TERRAIN — international reach. Phantom Pasting (since 2014, 500+ campaigns) is the documentation-first US specialist: every placement timestamped + GPS-logged, multi-format street work, and transparent per-city pricing from $3,500.",
  },
  {
    q: "How much does a wheat pasting campaign cost?",
    a: "Entry pricing ranges by company. Phantom Pasting publishes per-city tiers from $3,500 for a single-neighborhood test. Wheatpaste Posters quotes from roughly $4,000. ALT TERRAIN's published guidance is roughly $10,000–$30,000 per week. Always confirm what's included — design, print, install, permits, and documentation.",
  },
  {
    q: "What should I look for when choosing a wheat pasting company?",
    a: "Four things: proof of documentation (timestamped, GPS-logged placements), the formats they actually run (paste-only vs. paste + chalk stencils + snipes), pricing transparency (published tiers vs. opaque quote-only), and coverage that matches your target markets.",
  },
];

export default function CompareHubPage() {
  return (
    <>
      {/* BreadcrumbList JSON-LD comes from the <Breadcrumb> component below. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(webPageSchema({ name: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL, dateModified: "2026-05-31" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(HUB_FAQS)) }} />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Compare", href: "/compare" }]} />
        <TrustBar />

        <article className="max-w-[1000px] mx-auto px-5 sm:px-8 md:px-12 py-8 md:py-14">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: "rgba(0,0,0,0.55)" }}>
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            Compare
          </span>
          <h1 className="font-black uppercase m-0 leading-[0.9]" style={{ fontSize: "clamp(40px, 6vw, 76px)", letterSpacing: "-0.04em" }}>
            Wheat Pasting<br /><ShinyGoldText>Companies Compared</ShinyGoldText>
          </h1>
          <p className="font-light leading-relaxed mt-7 mb-0" style={{ fontSize: "clamp(16px, 1.7vw, 19px)", color: "rgba(0,0,0,0.65)", maxWidth: "720px" }}>
            The US wheat pasting / wild posting market has a handful of serious players, each with real strengths.
            Below is an honest breakdown of how they differ — and where Phantom Pasting ({PHANTOM_FACTS.founded}, {PHANTOM_FACTS.campaigns} campaigns,
            {" "}{PHANTOM_FACTS.documentation.toLowerCase()}) fits. Facts on each company are taken from their own public sites.
          </p>

          {/* What to look for */}
          <h2 className="font-black uppercase mt-12 mb-5" style={{ fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-0.02em" }}>
            What to look for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CRITERIA.map((c) => (
              <div key={c.t} className="p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.08)" }}>
                <h3 className="font-bold uppercase text-[12px] tracking-[0.14em] m-0 mb-2" style={{ color: ACCENT }}>{c.t}</h3>
                <p className="font-light leading-snug m-0" style={{ fontSize: "15px", color: "rgba(0,0,0,0.72)" }}>{c.d}</p>
              </div>
            ))}
          </div>

          {/* Head-to-head comparisons */}
          <h2 className="font-black uppercase mt-12 mb-5" style={{ fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-0.02em" }}>
            Head-to-head
          </h2>
          <div className="flex flex-col gap-4">
            {COMPETITORS.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/phantom-pasting-vs-${c.slug}`}
                className="no-underline group block p-5 md:p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.1)", color: "#1A1A1A" }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-black uppercase m-0" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.02em" }}>
                    Phantom Pasting <span style={{ color: "rgba(0,0,0,0.4)" }}>vs</span> {c.competitorName}
                  </h3>
                  <span className="font-bold shrink-0" style={{ color: ACCENT }}>→</span>
                </div>
                <p className="font-light leading-snug mt-2 mb-0" style={{ fontSize: "15px", color: "rgba(0,0,0,0.62)" }}>
                  {c.tldr.split(". ").slice(0, 2).join(". ")}.
                </p>
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="font-black uppercase mt-12 mb-5" style={{ fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-0.02em" }}>
            FAQ
          </h2>
          <div className="flex flex-col gap-5">
            {HUB_FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="font-bold m-0 mb-1.5" style={{ fontSize: "17px" }}>{f.q}</h3>
                <p className="font-light leading-relaxed m-0" style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)" }}>{f.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 p-7 md:p-10 rounded-3xl text-center" style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF" }}>
            <h2 className="font-black uppercase m-0 mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
              Get an itemized quote in 24 hours
            </h2>
            <p className="font-light m-0 mb-7" style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px" }}>
              Published per-city pricing, 100% documented installs, {PHANTOM_FACTS.coverage}.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full" style={{ background: "#FFF", color: "#1A1A1A" }}>
              Get a Quote <span style={{ color: ACCENT }}>→</span>
            </Link>
          </div>
        </article>

        <SiteFooter />
      </div>
    </>
  );
}
