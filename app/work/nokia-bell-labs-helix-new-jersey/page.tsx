import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { articleSchema, faqPageSchema, jsonLd } from "@/lib/schema";

const PAGE_URL = `${BUSINESS.url}/work/nokia-bell-labs-helix-new-jersey`;
const PAGE_OG = `${BUSINESS.url}/gallery/nokia-bell-labs-wheat-paste-installer-48x72-posters-helix-new-brunswick-nj.webp`;
const PAGE_TITLE = "Nokia Bell Labs · The Helix NJ Case Study";
const PAGE_DESC =
  "Nokia Bell Labs case study: 60 jumbo 48x72 wheat paste posters installed in one day on a 270 ft construction fence at The Helix, New Brunswick, NJ.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Nokia Bell Labs Helix campaign",
    "wheat pasting New Jersey",
    "48x72 wheat paste posters",
    "jumbo wheat paste posters",
    "construction fence poster campaign",
    "New Brunswick NJ street marketing",
    "construction site hoarding posters",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Nokia Bell Labs · The Helix NJ Case Study | Phantom Pasting",
    description: "60 jumbo 48x72 wheat paste posters, one day, New Brunswick NJ. Brief, wall, install, compliance and photo proof.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: PAGE_OG, width: 1400, height: 1050, alt: "Phantom Pasting installer wheat pasting 48x72 Nokia Bell Labs posters on the construction fence at The Helix in New Brunswick, NJ" }],
  },
};

const ACCENT = "#D4A010";

/** Every photo carries a Phantom watermark bottom-right; anchor crops there so it never clips. */
const WATERMARK_SAFE = "right bottom";

const IMAGES = [
  { src: "/gallery/nokia-bell-labs-wheat-paste-installer-48x72-posters-helix-new-brunswick-nj.webp", alt: "Phantom Pasting installer brushing wheat paste on a 48x72 poster beside the Nokia Bell Labs is coming to the Helix, opening 2028 panel in New Brunswick, NJ" },
  { src: "/gallery/nokia-bell-labs-48x72-wheat-paste-poster-row-construction-fence-new-brunswick-nj.webp", alt: "Row of 48x72 Nokia Bell Labs wheat paste posters, including the Glass Rivers design and a logo panel, along a blue construction fence in New Brunswick, NJ" },
  { src: "/gallery/nokia-bell-labs-wheat-paste-poster-series-blue-hoarding-helix-new-brunswick.webp", alt: "Straight-on view of the Nokia Bell Labs illustrated wheat paste poster series with two branded logo panels on blue hoarding at The Helix" },
  { src: "/gallery/nokia-bell-labs-wheat-paste-posters-helix-plaza-arches-new-brunswick-nj.webp", alt: "Wide view of Nokia Bell Labs wheat paste posters on the construction fence beside the red sculpture arches of The Helix plaza in New Brunswick, NJ" },
  { src: "/gallery/nokia-bell-labs-48x72-wheat-paste-posters-covered-walkway-new-brunswick.webp", alt: "48x72 Nokia Bell Labs wheat paste posters under the covered walkway canopy along The Helix site in New Brunswick" },
  { src: "/gallery/nokia-bell-labs-wheat-paste-poster-wall-dusk-helix-new-brunswick-nj.webp", alt: "Nokia Bell Labs wheat paste poster wall at dusk on the construction fence at The Helix, New Brunswick, NJ" },
  { src: "/gallery/nokia-bell-labs-wheat-paste-posters-night-construction-fence-new-brunswick.webp", alt: "Nokia Bell Labs logo panel and wheat paste posters on the construction fence in the evening in New Brunswick" },
];

const CASE_STUDY_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Can Phantom Pasting install on a construction site that requires a certificate of insurance?",
    a: "Yes. For the Nokia Bell Labs install at The Helix, an active construction site run by a commercial property manager, Phantom Pasting provided a certificate of insurance naming the property owner and the property manager as additional insureds before mobilizing. The surface was client-controlled and a signed service agreement was in place before anything was printed.",
  },
  {
    q: "How long does it take to install 60 48x72 posters?",
    a: "Phantom Pasting installed 60 jumbo 48x72 inch wheat paste posters on a roughly 270 ft construction fence in one day. The crew started at 8 AM on Monday, October 19, 2026 and finished the same day, ahead of a VIP site event the next morning. Layout was set with a chalk line first, then posters went up in the client's set sequence.",
  },
  {
    q: "Do you work in New Jersey and Philadelphia?",
    a: "Yes. Phantom Pasting installs wheat paste campaigns across New Jersey and Pennsylvania. The Nokia Bell Labs campaign ran in New Brunswick, NJ (Middlesex County), about an hour from both Philadelphia and New York City.",
  },
  {
    q: "What size are jumbo wheat paste posters?",
    a: "Phantom Pasting's jumbo wheat paste poster is 48x72 inches, installed portrait. The Nokia Bell Labs campaign used 60 of them in a single row about 1 ft off the ground with 6-inch gaps between posters. The standard smaller format is 24x36 inches.",
  },
  {
    q: "Can a wheat paste campaign run as a sequenced poster series instead of one repeated design?",
    a: "Yes. The Nokia Bell Labs campaign ran a 12-design illustrated series, with titles such as Glass Rivers, The Quantum Internet and The Radio That Could Think, plus a branded blue spacer panel, all placed in a repeating pattern the client set. Each poster reads on its own, so the wall works as a series rather than a tiled mural.",
  },
];

const GLASS_CARD = { background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 14px rgba(0,0,0,0.04)" } as const;
const INLINE_LINK = { color: "#1A1A1A", borderBottom: `1.5px solid ${ACCENT}` } as const;

export default function NokiaBellLabsHelixCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              headline: "Nokia Bell Labs at The Helix: 60 Jumbo Wheat Paste Posters in One Day, New Brunswick NJ",
              description: "Nokia Bell Labs announced its move to The Helix in New Brunswick, NJ with 60 jumbo 48x72 wheat paste posters on a 270 ft construction fence, installed by Phantom Pasting in one day.",
              url: PAGE_URL,
              image: PAGE_OG,
              datePublished: "2026-10-22",
              dateModified: "2026-10-22",
              articleSection: "Case Studies",
              articleBody:
                "Phantom Pasting installed 60 large-format 48x72 inch wheat paste posters for Nokia Bell Labs on a blue-painted plywood construction fence roughly 270 ft long at The Helix, an innovation district in downtown New Brunswick, New Jersey. The 12-design illustrated series plus a branded spacer panel went up in one day on October 19, 2026, on a client-controlled surface, with a certificate of insurance naming the property owner and manager as additional insureds delivered before mobilizing.",
              keywords: [
                "nokia bell labs",
                "the helix",
                "new brunswick nj",
                "case study",
                "48x72 wheat paste posters",
                "construction fence posters",
                "wheat pasting new jersey",
              ],
              audienceType: "Brand Marketers, Real Estate Developers, Property Managers, Marketing Agencies",
              genre: "Case Study",
            })
          ),
        }}
      />
      {/* Org + WebSite schema injected globally via app/layout.tsx (see lib/schema.ts orgSchema). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(CASE_STUDY_FAQS)) }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/work" },
            { name: "Nokia Bell Labs at The Helix", href: "/work/nokia-bell-labs-helix-new-jersey" },
          ]}
        />
        <TrustBar />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-6 md:py-10 lg:py-14 text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <span style={{ width: 40, height: 1, background: "rgba(0,0,0,0.14)" }} />
              <Link href="/work" className="font-mono text-[10px] tracking-[0.3em] uppercase no-underline" style={{ color: "rgba(0,0,0,0.55)" }}>← Back to Work</Link>
              <span style={{ width: 8, height: 1, background: "rgba(0,0,0,0.14)" }} />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: ACCENT }}>
                Case Study / Tech
              </span>
              <span style={{ width: 40, height: 1, background: "rgba(0,0,0,0.14)" }} />
            </div>
            <h1 className="font-black uppercase m-0 leading-[0.88] mx-auto" style={{ fontSize: "clamp(44px, 7vw, 120px)", letterSpacing: "-0.045em", maxWidth: "1280px" }}>
              NOKIA BELL LABS <ShinyGoldText>AT THE HELIX.</ShinyGoldText>
            </h1>
            <p className="font-light leading-relaxed mt-8 mb-10 mx-auto" style={{ fontSize: "clamp(17px, 1.5vw, 20px)", color: "rgba(0,0,0,0.55)", maxWidth: "680px" }}>
              60 jumbo wheat paste posters, one day, New Brunswick NJ. A 12-design illustrated
              series announcing that Nokia Bell Labs is coming to The Helix, installed on a 270 ft
              construction fence in a single shift.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
                style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF", boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                Get a Quote <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
              </Link>
              <Link href="/services/wheat-pasting" className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                Wheat Pasting →
              </Link>
            </div>
            <div className="mt-14 pt-8 mx-auto" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", maxWidth: "1040px" }}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
                {[
                  { stat: "60", label: "Posters" },
                  { stat: "48x72 in", label: "Jumbo Format" },
                  { stat: "~270 ft", label: "Of Fence" },
                  { stat: "1 Day", label: "Install" },
                  { stat: "12", label: "Designs" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <div className="font-black uppercase leading-none" style={{ fontSize: "clamp(17px, 1.9vw, 24px)", letterSpacing: "-0.03em", color: ACCENT }}>{stat}</div>
                    <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-2" style={{ color: "rgba(0,0,0,0.55)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {IMAGES.map((img, i) => (
                <div key={img.src} className={`relative rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2" : ""}`} style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover" style={{ objectPosition: WATERMARK_SAFE }}
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 600px"}
                    quality={i === 0 ? 78 : 70} priority={i === 0} loading={i === 0 ? "eager" : "lazy"} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brief / Wall ──────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Brief
              </span>
              <h2 className="font-black uppercase m-0 mb-5 leading-[0.9]" style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}>
                ANNOUNCE<br /><span style={{ color: ACCENT }}>THE MOVE.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                Nokia Bell Labs is moving to The Helix, a new innovation district development in
                downtown New Brunswick, New Jersey, next to the train station. The brief was to turn
                the site&apos;s construction fence into an announcement: &ldquo;Nokia Bell Labs is
                coming to the Helix, opening 2028.&rdquo; The creative was a 12-design illustrated
                series, with titles including Glass Rivers, The Quantum Internet, Planet Simulated,
                The Radio That Could Think, Sentinels of the Biosphere, The Dreaming Chips, The Magic
                of Stolen Light and Transporters of Touch, plus a branded blue spacer panel. It was
                built as a series, not a tiled mural.
              </p>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Wall
              </span>
              <h2 className="font-black uppercase m-0 mb-5 leading-[0.9]" style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}>
                270 FT OF<br /><span style={{ color: ACCENT }}>BLUE FENCE.</span>
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>
                The surface was a blue-painted plywood construction fence, roughly 270 ft long and 8 ft
                high, running along the plaza walkway at The Helix. The 60 posters ran in a single row
                about 1 ft off the ground with 6-inch gaps, so every design sits at eye level for
                people walking the plaza. The developer owns the site and the fence, which made this a
                client-controlled, fully authorized placement.
              </p>
            </div>
          </div>
        </section>

        {/* ── The Install ───────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-10 md:mb-12">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                The Install
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                ONE DAY,<br /><span style={{ color: ACCENT }}>60 JUMBOS.</span>
              </h2>
              <p className="font-light leading-relaxed mt-5" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "680px" }}>
                The full wall went up on Monday, October 19, 2026. The crew started at 8 AM and
                finished the same day, because the client had a VIP site event the next morning.
              </p>
            </div>
            <ol className="list-none p-0 m-0 grid grid-cols-1 gap-4">
              {[
                { n: "01", h: "Print and File Check", b: "Phantom printed and shipped the 48x72 posters. Every file was checked for size, bleed and color before it went to print." },
                { n: "02", h: "Chalk Line Layout", b: "Before any paste went on, the crew snapped a chalk line along the fence to hold the row about 1 ft off the ground and marked 6-inch gaps, so 60 posters land level across roughly 270 ft." },
                { n: "03", h: "Client Sequence", b: "The 12 illustrated designs and the blue Nokia Bell Labs spacer panel went up in the repeating pattern the client set, poster by poster down the fence." },
                { n: "04", h: "Crew and Paste", b: "Installers brushed wheat paste onto the plywood, hung each 48x72 portrait, then brushed it down flat. The wall was finished the same day it started." },
                { n: "05", h: "Spares and Photos", b: "Spare posters were left with the client for repairs, and a time-stamped photo set was delivered after install." },
              ].map(({ n, h, b }) => (
                <li key={n} className="rounded-2xl p-6 md:p-7 flex gap-5 md:gap-7" style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                  <div className="font-black leading-none shrink-0" style={{ fontSize: "clamp(28px, 3vw, 38px)", letterSpacing: "-0.04em", color: ACCENT }}>{n}</div>
                  <div>
                    <h3 className="font-black uppercase m-0 mb-2 leading-tight" style={{ fontSize: "clamp(17px, 1.6vw, 20px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>{h}</h3>
                    <p className="font-light m-0 leading-relaxed" style={{ fontSize: "14px", color: "rgba(0,0,0,0.58)" }}>{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Compliance & Proof ────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-10 md:mb-12">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Compliance &amp; Proof
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                CLEARED BEFORE<br /><span style={{ color: ACCENT }}>WE MOBILIZED.</span>
              </h2>
              <p className="font-light leading-relaxed mt-5" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "680px" }}>
                The Helix is an active construction site managed by a commercial property manager.
                Everything a site like that asks for was in place before the crew arrived.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                { h: "Certificate of Insurance", b: "Phantom provided a certificate of insurance naming the property owner and property manager entities as additional insureds before mobilizing." },
                { h: "Client-Controlled Surface", b: "The developer owns the site and the fence. The placement was fully authorized, not a guerrilla drop." },
                { h: "Signed Agreement, Paid in Full", b: "A service agreement was signed in late September 2026, and the campaign was paid in full before printing, which is Phantom's standard." },
                { h: "Time-Stamped Photo Set", b: "The client received a time-stamped photo set after install, the same documentation every Phantom campaign gets." },
              ].map(({ h, b }) => (
                <div key={h} className="rounded-2xl p-6 md:p-7" style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                  <h3 className="font-black uppercase m-0 mb-2 leading-tight" style={{ fontSize: "clamp(17px, 1.6vw, 20px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>{h}</h3>
                  <p className="font-light m-0 leading-relaxed" style={{ fontSize: "14px", color: "rgba(0,0,0,0.58)" }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What This Means ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase inline-flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                What This Means for Your Campaign
              </span>
              <h2 className="font-black uppercase m-0 mt-3 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
                SITE-READY, <span style={{ color: ACCENT }}>SAME DAY.</span>
              </h2>
              <p className="font-light leading-relaxed mx-auto mt-5" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "720px" }}>
                If your brand, development or property has a construction fence, a deadline and a
                site manager who needs paperwork, this is the playbook: insurance and agreement
                first, a chalk line layout, and a crew that can put up 60 jumbo{" "}
                <Link href="/services/wheat-pasting" className="font-bold no-underline" style={INLINE_LINK}>wheat paste posters</Link>{" "}
                in one day. Phantom Pasting covers{" "}
                <Link href="/locations/new-jersey" className="font-bold no-underline" style={INLINE_LINK}>New Jersey</Link>{" "}
                and{" "}
                <Link href="/locations/pennsylvania" className="font-bold no-underline" style={INLINE_LINK}>Pennsylvania</Link>,
                including the corridor between Philadelphia and New York City. See{" "}
                <Link href="/pricing" className="font-bold no-underline" style={INLINE_LINK}>pricing</Link>{" "}
                or{" "}
                <Link href="/contact" className="font-bold no-underline" style={INLINE_LINK}>get a quote</Link>.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/locations/new-jersey", tag: "Location", name: "New Jersey" },
                { href: "/locations/pennsylvania", tag: "Location", name: "Pennsylvania" },
                { href: "/services/wheat-pasting", tag: "Service", name: "Wheat Pasting" },
                { href: "/pricing", tag: "Rates", name: "Pricing" },
              ].map(({ href, tag, name }) => (
                <Link key={href} href={href} className="no-underline rounded-2xl p-6 md:p-7 flex items-center justify-between" style={GLASS_CARD}>
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>{tag}</div>
                    <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(16px, 1.6vw, 20px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>{name}</div>
                  </div>
                  <span style={{ color: ACCENT, fontSize: "22px" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[820px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              About This Campaign
            </span>
            <h2 className="font-black uppercase m-0 mb-10 leading-[0.92]" style={{ fontSize: "clamp(28px, 3.6vw, 44px)", letterSpacing: "-0.035em" }}>
              CAMPAIGN<span style={{ color: ACCENT }}> Q&amp;A.</span>
            </h2>
            <div className="flex flex-col gap-3">
              {CASE_STUDY_FAQS.map(({ q, a }) => (
                <details key={q} className="rounded-2xl" style={{ background: "rgba(255,255,255,0.40)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                  <summary className="cursor-pointer font-black uppercase list-none flex items-center justify-between gap-4" style={{ fontSize: "14px", letterSpacing: "-0.01em", padding: "1.1rem 1.5rem", color: "#1A1A1A" }}>
                    <span>{q}</span>
                    <span aria-hidden className="font-mono" style={{ color: ACCENT, fontSize: "18px", flexShrink: 0 }}>+</span>
                  </summary>
                  <div className="font-light leading-relaxed" style={{ fontSize: "15px", color: "rgba(0,0,0,0.72)", padding: "0 1.5rem 1.25rem" }}>{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Backlink ──────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-20">
          <div className="max-w-[900px] mx-auto rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5" style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
            <div>
              <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Format Used in This Campaign</div>
              <div className="font-black uppercase leading-tight mb-1" style={{ fontSize: "clamp(16px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>Wheat Pasting</div>
              <p className="font-light m-0" style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)" }}>Jumbo 48x72 and standard 24x36 paper posters, pasted by hand. The format behind the Nokia Bell Labs wall at The Helix.</p>
            </div>
            <Link href="/services/wheat-pasting" className="shrink-0 no-underline font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-3 rounded-full whitespace-nowrap" style={{ background: `linear-gradient(135deg, #D4A010 0%, #F5CA20 100%)`, color: "#FFF", boxShadow: "0 4px 20px rgba(212,160,16,0.45)" }}>
              Learn About Wheat Pasting →
            </Link>
          </div>
        </section>

        {/* ── More Work + CTA ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]" style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.025em" }}>
              MORE WORK<span style={{ color: ACCENT }}>.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
              <Link href="/work/fifa-world-cup-atlanta" className="no-underline rounded-2xl p-7 flex items-center justify-between" style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Case Study</div>
                  <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>FIFA WORLD CUP<br />ATLANTA</div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
              <Link href="/work/biodance-los-angeles" className="no-underline rounded-2xl p-7 flex items-center justify-between" style={{ background: "rgba(248,247,244,0.9)", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>Case Study</div>
                  <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(17px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "#1A1A1A" }}>BIODANCE<br />LOS ANGELES</div>
                </div>
                <span style={{ color: ACCENT, fontSize: "24px" }}>→</span>
              </Link>
            </div>

            <div className="text-center">
              <h2 className="font-black uppercase m-0 mb-5 leading-[0.9]" style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.04em" }}>
                GOT A FENCE<br /><ShinyGoldText>AND A DEADLINE?</ShinyGoldText>
              </h2>
              <Link href="/contact" className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF", boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Get a Quote <span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
