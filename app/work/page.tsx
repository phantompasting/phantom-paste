import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { collectionPageSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import { KW_WORK } from "@/lib/keywordSets";

const PAGE_URL = `${BUSINESS.url}/work`;
const PAGE_TITLE = "Guerrilla Marketing Case Studies";
const PAGE_DESC =
  "Wheat pasting, street postering & OOH case studies — FashionPass LA, FIFA World Cup Atlanta, Incrediwear. Photo-documented guerrilla marketing.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [...KW_WORK],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Guerrilla Marketing Case Studies | Phantom Pasting",
    description:
      "Real campaigns, real streets, real results. Wheat pasting and guerrilla marketing case studies across the US.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BUSINESS.url}${BUSINESS.ogImageDefault}`,
        width: BUSINESS.ogImageWidth,
        height: BUSINESS.ogImageHeight,
        alt: "Phantom Pasting guerrilla marketing case studies",
      },
    ],
  },
};

const ACCENT = "#D4A010";

const CASE_STUDIES = [
  {
    client: "FashionPass",
    city: "Los Angeles, CA",
    format: "Wheat Pasting",
    href: "/work/fashionpass-los-angeles",
    image: "/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp",
    alt: "FashionPass wheat paste poster campaign wall in Los Angeles",
  },
  {
    client: "FIFA World Cup",
    city: "Atlanta, GA",
    format: "Wheat Pasting",
    href: "/work/fifa-world-cup-atlanta",
    image: "/gallery/fifa-world-cup-atlanta-wall-installation.webp",
    alt: "FIFA World Cup poster wall installation in Atlanta",
  },
  {
    client: "Incrediwear",
    city: "Los Angeles · New York",
    format: "Multi-Format",
    href: "/work/incrediwear-street-campaign",
    image: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",
    alt: "Incrediwear pole wrap guerrilla advertising at night",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Install & Photograph",
    body: "Crew photographs each placement immediately after installation — no guessing, no assuming.",
  },
  {
    number: "02",
    title: "Timestamp & Geo-Tag",
    body: "Every photo is timestamped and geo-tagged with exact coordinates so you know precisely where your brand landed.",
  },
  {
    number: "03",
    title: "Compile Report",
    body: "Photos compiled into a branded campaign report organized by location, date, and format.",
  },
  {
    number: "04",
    title: "Deliver Assets",
    body: "Report delivered with social-ready image assets sized and optimized for immediate reuse.",
  },
];

const FORMATS = [
  {
    name: "Wheat Pasting",
    href: "/services/wheat-pasting",
    body: "Large-format paper posters adhered to walls with wheat paste adhesive. Sizes from 24\"×36\" to 48\"×72\". High-impact wall takeovers that stop foot traffic cold.",
  },
  {
    name: "Chalk Spray Stencils",
    href: "/services/chalk-spray-stencils",
    body: "Water-based chalk spray applied through precision-cut stencil templates onto sidewalks and plazas. Temporary and eco-friendly — maximum impression, zero permanence.",
  },
  {
    name: "Multi-Format",
    href: "/services/full-impact-campaigns",
    body: "Combined wheat pasting and chalk stencil activations for total street saturation. Every angle covered, every surface activated.",
  },
];

const CITIES = [
  { label: "Los Angeles", href: "/locations/los-angeles" },
  { label: "New York", href: "/locations/new-york" },
  { label: "Chicago", href: "/locations/chicago" },
  { label: "Atlanta", href: "/locations/atlanta" },
  { label: "Miami", href: "/locations/miami" },
];

const GLASS = {
  background: "rgba(255,255,255,0.35)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.6)",
} as const;

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            collectionPageSchema({
              name: PAGE_TITLE,
              description: PAGE_DESC,
              url: PAGE_URL,
              items: CASE_STUDIES.map(({ client, href }) => ({
                name: `${client} — Guerrilla Marketing Case Study`,
                url: `${BUSINESS.url}${href}`,
              })),
            })
          ),
        }}
      />
      {/* localBusinessSchema is emitted globally via app/layout.tsx. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Work", href: "/work" },
            ])
          ),
        }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Work" },
          ]}
        />
        <TrustBar />

        {/* ── Hero (split-screen) ───────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[660px] items-center">
              <div className="relative z-10 flex flex-col justify-center py-16 md:py-20 lg:py-24 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(0,0,0,0.55)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Case Studies
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]"
                  style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
                  REAL CAMPAIGNS,<br /><ShinyGoldText>REAL STREETS.</ShinyGoldText>
                </h1>
                <p className="font-light leading-relaxed mt-8 mb-10"
                  style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.5)", maxWidth: "480px" }}>
                  Every campaign documented from install to delivery. Here&apos;s what guerrilla
                  marketing looks like when it actually hits the streets.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact"
                    className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF",
                      boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                    <span className="absolute inset-0 pointer-events-none rounded-full"
                      style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                    Get a Quote <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
                  </Link>
                  <a href={BUSINESS.telHref}
                    className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                    style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(0,0,0,0.14)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                    Call {BUSINESS.telephoneDisplay}
                  </a>
                </div>
                <div className="flex flex-wrap gap-10 md:gap-16 mt-12 pt-10"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  {[
                    { stat: "500+", label: "Campaigns" },
                    { stat: "50+", label: "Cities" },
                    { stat: "100%", label: "Photo Proof" },
                  ].map(({ stat, label }) => (
                    <div key={label}>
                      <div className="font-black uppercase leading-none"
                        style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.04em", color: ACCENT }}>
                        {stat}
                      </div>
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1.5" style={{ color: "rgba(0,0,0,0.55)" }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:block h-[660px] overflow-hidden">
                <span aria-hidden className="absolute right-0 top-1/2 font-black uppercase pointer-events-none select-none"
                  style={{ fontSize: "clamp(80px, 12vw, 180px)", letterSpacing: "-0.06em",
                    color: "rgba(212,160,16,0.05)", lineHeight: 1,
                    writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}>
                  WORK
                </span>
                <div className="absolute top-10 right-0 rounded-2xl overflow-hidden"
                  style={{ width: "82%", height: "80%", transform: "rotate(1.8deg)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                  <Image src="/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp"
                    alt="FashionPass case study wall" fill style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 0vw, 40vw" loading="lazy" />
                </div>
                <div className="absolute bottom-10 left-2 rounded-xl overflow-hidden"
                  style={{ width: "50%", height: "48%", transform: "rotate(-2.2deg)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  <Image src="/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp"
                    alt="Incrediwear pole wrap campaign at night" fill style={{ objectFit: "cover" }}
                    sizes="25vw" />
                </div>
                <div aria-hidden className="absolute pointer-events-none"
                  style={{ top: "30%", left: "32%", width: "1px", height: "28%",
                    background: "linear-gradient(to bottom, transparent, rgba(212,160,16,0.5), transparent)",
                    transform: "rotate(18deg)" }} />
                <div className="absolute top-6 left-4 rounded-xl px-4 py-3"
                  style={{ background: "rgba(255,254,248,0.92)", backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.75)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.09)" }}>
                  <div className="font-black uppercase leading-none"
                    style={{ fontSize: "20px", letterSpacing: "-0.04em", color: ACCENT }}>
                    500+
                  </div>
                  <div className="font-mono text-[8px] tracking-[0.3em] uppercase mt-1"
                    style={{ color: "rgba(0,0,0,0.55)" }}>
                    Campaigns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Cards */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map(({ client, city, format, href, image, alt }) => (
              <Link key={href} href={href} className="no-underline group rounded-3xl overflow-hidden"
                style={{ ...GLASS }}>
                <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                  <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: "rgba(0,0,0,0.55)" }}>
                    {format} · {city}
                  </div>
                  <div className="font-black uppercase leading-tight"
                    style={{ fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "-0.025em", color: "#1A1A1A" }}>
                    {client}<span style={{ color: ACCENT }}>.</span>
                  </div>
                  <span className="mt-3 inline-block font-bold text-[11px] tracking-[0.2em] uppercase"
                    style={{ color: ACCENT }}>
                    View Case Study →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Section 1: What Does a Documented Campaign Look Like? ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[800px]">
            <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Documentation
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 62px)", letterSpacing: "-0.04em" }}>
              WHAT DOES A DOCUMENTED CAMPAIGN<span style={{ color: ACCENT }}> LOOK LIKE?</span>
            </h2>
            <p className="font-light leading-relaxed mb-5"
              style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)" }}>
              Every Phantom Pasting campaign is fully documented from start to finish. We don&apos;t just put your
              brand on the streets — we prove it. Every installation is photographed with timestamped, geo-tagged
              images that show exactly where and when each placement went up.
            </p>
            <p className="font-light leading-relaxed"
              style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)" }}>
              Documentation isn&apos;t an add-on — it&apos;s built into every campaign. Your campaign report includes
              high-resolution photos ready to repurpose as organic social content, investor decks, or internal
              presentations. Every placement is accounted for.
            </p>
          </div>
        </section>

        {/* ── Section 2: How Every Campaign Is Documented ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "rgba(0,0,0,0.55)" }}>
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            The Process
          </span>
          <h2 className="font-black uppercase m-0 mb-10 leading-[0.9]"
            style={{ fontSize: "clamp(32px, 4.5vw, 62px)", letterSpacing: "-0.04em" }}>
            HOW EVERY CAMPAIGN IS<span style={{ color: ACCENT }}> DOCUMENTED.</span>
          </h2>
          <div className="max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map(({ number, title, body }) => (
              <div key={number} className="rounded-2xl p-6" style={{ ...GLASS }}>
                <div className="font-black mb-3" style={{ fontSize: "28px", color: ACCENT, letterSpacing: "-0.03em" }}>
                  {number}
                </div>
                <div className="font-black uppercase mb-2 leading-tight"
                  style={{ fontSize: "13px", letterSpacing: "-0.01em", color: "#1A1A1A" }}>
                  {title}
                </div>
                <p className="font-light leading-relaxed m-0"
                  style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Formats We Deploy ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "rgba(0,0,0,0.55)" }}>
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            Formats
          </span>
          <h2 className="font-black uppercase m-0 mb-10 leading-[0.9]"
            style={{ fontSize: "clamp(32px, 4.5vw, 62px)", letterSpacing: "-0.04em" }}>
            FORMATS WE<span style={{ color: ACCENT }}> DEPLOY.</span>
          </h2>
          <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-5">
            {FORMATS.map(({ name, href, body }) => (
              <Link key={name} href={href} className="no-underline group rounded-2xl p-7 block"
                style={{ ...GLASS, color: "inherit" }}>
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: "rgba(0,0,0,0.55)" }}>
                  Format
                </div>
                <div className="font-black uppercase mb-4 leading-tight"
                  style={{ fontSize: "16px", letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                  {name}<span style={{ color: ACCENT }}>.</span>
                </div>
                <p className="font-light leading-relaxed m-0 mb-4"
                  style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)" }}>
                  {body}
                </p>
                <span className="inline-block font-bold text-[11px] tracking-[0.2em] uppercase"
                  style={{ color: ACCENT }}>
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Section 4: Why Choose Guerrilla Over Digital? ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[800px]">
            <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Why Guerrilla
            </span>
            <h2 className="font-black uppercase m-0 mb-7 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 4.5vw, 62px)", letterSpacing: "-0.04em" }}>
              WHY CHOOSE GUERRILLA OVER<span style={{ color: ACCENT }}> DIGITAL?</span>
            </h2>
            <p className="font-light leading-relaxed mb-8"
              style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)" }}>
              Digital advertising is crowded, expensive, and easily ignored. Guerrilla marketing puts your brand in
              the physical world where it can&apos;t be skipped, muted, or blocked by an ad blocker.
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-4">
              {[
                { key: "social", node: "Street campaigns generate organic social shares — people photograph and tag your brand" },
                { key: "cultural", node: "Physical presence builds cultural credibility that display ads never will" },
                {
                  key: "local",
                  node: (
                    <>
                      Hyper-local targeting by{" "}
                      <Link href="/locations" style={{ color: ACCENT, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                        neighborhood
                      </Link>
                      , not by algorithm
                    </>
                  ),
                },
                { key: "proof", node: "100% photo documentation proves every single placement" },
              ].map(({ key, node }) => (
                <li key={key} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-black text-[10px]"
                    style={{ background: `rgba(212,160,16,0.12)`, color: ACCENT }}>
                    ✓
                  </span>
                  <span className="font-light leading-relaxed"
                    style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)" }}>
                    {node}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Section 5: TL;DR Callout ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[800px] rounded-2xl px-8 py-7"
            style={{ border: `1.5px solid ${ACCENT}`, background: "rgba(212,160,16,0.05)" }}>
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-4"
              style={{ color: ACCENT }}>
              TL;DR
            </div>
            <p className="font-light leading-relaxed m-0"
              style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)" }}>
              Real campaigns. Real streets. Every placement photographed and documented.{" "}
              <Link href="/work/fashionpass-los-angeles" className="font-bold no-underline"
                style={{ color: "#1A1A1A", borderBottom: `1.5px solid ${ACCENT}` }}>FashionPass</Link>,{" "}
              <Link href="/work/fifa-world-cup-atlanta" className="font-bold no-underline"
                style={{ color: "#1A1A1A", borderBottom: `1.5px solid ${ACCENT}` }}>FIFA World Cup</Link>, and{" "}
              <Link href="/work/incrediwear-street-campaign" className="font-bold no-underline"
                style={{ color: "#1A1A1A", borderBottom: `1.5px solid ${ACCENT}` }}>Incrediwear</Link>{" "}
              trusted Phantom Pasting to bring their brands to the street.
            </p>
          </div>
        </section>

        {/* ── Section 6: City Coverage ── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "rgba(0,0,0,0.55)" }}>
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            Markets We Cover
          </span>
          <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
            style={{ fontSize: "clamp(32px, 4.5vw, 62px)", letterSpacing: "-0.04em" }}>
            CAMPAIGNS ACROSS THE<span style={{ color: ACCENT }}> US.</span>
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {CITIES.map(({ label, href }) => (
              <Link key={label} href={href}
                className="no-underline font-bold text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 rounded-full"
                style={{ ...GLASS, color: "#1A1A1A" }}>
                {label}
              </Link>
            ))}
          </div>
          <p className="font-light leading-relaxed"
            style={{ fontSize: "14px", color: "rgba(0,0,0,0.58)" }}>
            Plus every other US city. Name your market — we can hit it.
          </p>
        </section>

        {/* CTA */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[600px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5vw, 70px)", letterSpacing: "-0.04em" }}>
              YOUR BRAND,<br /><ShinyGoldText>ON THE STREET.</ShinyGoldText>
            </h2>
            <Link href="/contact"
              className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF",
                boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
              <span className="absolute inset-0 pointer-events-none rounded-full"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
              Get a Quote <span className="cta-arrow">→</span>
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
