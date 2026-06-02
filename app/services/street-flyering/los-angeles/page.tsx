import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import {
  serviceSchema,
  webPageSchema,
  faqPageSchema,
  jsonLd,
} from "@/lib/schema";
import {
  KW_SERVICE_STREET_FLYERING,
  cityBuyerIntent,
  KW_CITY_BASE,
} from "@/lib/keywordSets";

const PAGE_URL = `${BUSINESS.url}/services/street-flyering/los-angeles`;
const PAGE_OG = `${BUSINESS.url}/gallery/street-flyering-windshield-flyer-closeup-los-angeles.webp`;
const PAGE_TITLE = "Flyer Distribution Los Angeles | Windshield Flyers";
const PAGE_DESC =
  "Street flyering in Los Angeles — windshield flyers on parked cars and hand-to-hand handbilling across Melrose, DTLA, Hollywood, Westwood, Venice, and LA event lots. 100% documented.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  keywords: [
    "flyer distribution Los Angeles",
    "flyer distribution LA",
    "windshield flyers Los Angeles",
    "windshield advertising Los Angeles",
    "street flyering Los Angeles",
    "handbilling Los Angeles",
    "leafleting Los Angeles",
    "parking lot flyering Los Angeles",
    "car flyer advertising LA",
    "flyer distribution company Los Angeles",
    "windshield flyer advertising LA",
    "event flyering Los Angeles",
    ...KW_SERVICE_STREET_FLYERING.slice(0, 10),
    ...cityBuyerIntent("Los Angeles").slice(0, 8),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Flyer Distribution Los Angeles · Windshield Flyers | Phantom Pasting",
    description:
      "Windshield flyers on parked cars and hand-to-hand handbilling across Los Angeles — Melrose, DTLA, Hollywood, Westwood, Venice, and event lots.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: PAGE_OG,
        width: 1200,
        height: 630,
        alt: "Phantom Pasting windshield flyer on a parked car in Los Angeles",
      },
    ],
  },
};

const ACCENT = "#D4A010";

/* ─── LA-specific content ───────────────────────────────────────── */

const ZONES = [
  { name: "Melrose & Fairfax", desc: "Streetwear and boutique foot traffic — packed metered parking and lot turnover make it prime for windshield runs plus hand-to-hand on the avenue." },
  { name: "DTLA & Arts District", desc: "Dense surface lots, gallery-and-brewery crowds, and event-night parking around the stadium district. High windshield volume per block." },
  { name: "Hollywood & Sunset", desc: "Tourism by day, nightlife by night. Venue lots, garage exits, and the Walk of Fame corridor for hand-to-hand distribution." },
  { name: "Westwood / UCLA", desc: "Student density, campus-adjacent lots, and Westwood Village — a captive young audience that responds to events and openings." },
  { name: "Venice & Santa Monica", desc: "Beach lots and Abbot Kinney foot traffic. Weekend parking turnover is some of the highest in the city — ideal windshield ground." },
  { name: "Silver Lake & Echo Park", desc: "Creative-class neighborhoods with tight commercial corridors. Strong for promos and event flyering to an engaged local crowd." },
];

const PRICING = [
  { tier: "Single-Zone Run", range: "$1,500 – $3,000", includes: "One LA district · 500–1,000 flyers · Windshield or hand-to-hand · Photo + GPS-logged route" },
  { tier: "Multi-Zone LA Activation", range: "$4,000 – $8,000", includes: "3–5 LA districts · Windshield + handbilling · Multi-day · Daylight documentation" },
  { tier: "Event / Promo Blitz", range: "$6,000 – $12,000", includes: "Event lots + corridors · High-volume saturation · Timed to your date · Full report" },
];

const FAQS = [
  {
    q: "Is it legal to put flyers on car windshields in Los Angeles?",
    a: "It depends on the surface. On public streets, windshield flyers are restricted and anti-litter rules apply; on private lots, you need the property owner's permission. Hand-to-hand handbilling on public LA sidewalks is far more protected. Phantom Pasting flyers from permitted lots and public corridors and keeps placement clean and compliant. See our guide: are windshield flyers legal.",
  },
  {
    q: "Why does street flyering work so well in Los Angeles?",
    a: "LA is the most car-dependent major US city — millions of cars sit in lots and street parking every day, which makes windshield flyers a uniquely high-volume format here. Combined with dense pedestrian corridors like Melrose, Abbot Kinney, and Westwood Village for hand-to-hand, LA gives flyering more surface area than almost any other market.",
  },
  {
    q: "What LA neighborhoods do you cover for flyering?",
    a: "Melrose, Fairfax, DTLA and the Arts District, Hollywood, Sunset corridor, Westwood/UCLA, Venice, Santa Monica, Silver Lake, and Echo Park are our core LA flyering zones — plus event lots around the stadium and arena district on game and concert nights. We cover greater LA on request.",
  },
  {
    q: "How much does a Los Angeles flyering campaign cost?",
    a: "A single-zone LA run (500–1,000 flyers, one district) starts at $1,500–$3,000. A multi-zone activation across 3–5 LA districts runs $4,000–$8,000. Event and promo blitzes timed to a date run $6,000–$12,000. Call (917) 400-4594 for a custom LA quote within 24 hours.",
  },
  {
    q: "How fast can a flyering campaign go live in LA?",
    a: "Most LA runs go live 5–10 days from approved artwork — covering print, route planning, and scheduling. Rush single-zone runs are possible in 2–4 days depending on capacity.",
  },
];

const SHOTS = [
  { src: "/gallery/street-flyering-windshield-flyer-closeup-los-angeles.webp", meta: "Windshield flyer · Los Angeles", alt: "Phantom Pasting flyer under a windshield wiper on a parked car in Los Angeles" },
  { src: "/gallery/street-flyering-windshield-flyer-parked-cars-los-angeles.webp", meta: "Street run · Los Angeles", alt: "Phantom Pasting windshield flyers on parked cars along a Los Angeles street" },
  { src: "/gallery/street-flyering-windshield-flyer-tan-car-los-angeles.webp", meta: "Windshield flyer · Los Angeles", alt: "Phantom Pasting flyer under the wiper of a parked car in a Los Angeles lot" },
  { src: "/gallery/street-flyering-windshield-flyer-parking-lot-sunset-los-angeles.webp", meta: "Parking lot · Los Angeles", alt: "Phantom Pasting windshield flyer on a car in a Los Angeles parking lot at sunset" },
];

export default function StreetFlyeringLosAngelesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              name: "Street Flyering in Los Angeles",
              alternateName: [
                "Flyer Distribution Los Angeles",
                "Windshield Flyers Los Angeles",
                "Windshield Advertising Los Angeles",
                "Handbilling Los Angeles",
                "Leafleting Los Angeles",
              ],
              description:
                "Windshield flyers on parked cars and hand-to-hand handbilling across Los Angeles — Melrose, DTLA, Hollywood, Westwood, Venice, and event lots. Print, distribute, and photo documentation included.",
              url: PAGE_URL,
              serviceType: "Street Flyering",
              category: "Advertising Distribution",
              image: PAGE_OG,
              slogan: "Flyers on every LA windshield.",
              audienceType: "Local Businesses, Event Promoters, Brand Marketers, Marketing Agencies",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              name: PAGE_TITLE,
              description: PAGE_DESC,
              url: PAGE_URL,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(FAQS.map(({ q, a }) => ({ q, a })))) }}
      />
      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Street Flyering", href: "/services/street-flyering" },
            { name: "Los Angeles", href: "/services/street-flyering/los-angeles" },
          ]}
        />
        <TrustBar />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-[640px] items-center">
              <div className="relative z-10 flex flex-col justify-center py-6 md:py-10 lg:py-14 lg:pr-16">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(0,0,0,0.55)" }}>
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Street Flyering · Los Angeles
                </span>
                <h1 className="font-black uppercase m-0 leading-[0.88]" style={{ fontSize: "clamp(44px, 6.5vw, 92px)", letterSpacing: "-0.04em" }}>
                  FLYER DISTRIBUTION<br /><ShinyGoldText>IN LOS ANGELES.</ShinyGoldText>
                </h1>
                <p className="font-light leading-relaxed mt-8 mb-10" style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.5)", maxWidth: "500px" }}>
                  Windshield flyers on parked cars and hand-to-hand handbilling across LA&apos;s
                  highest-traffic lots, corridors, and event venues. In the most car-dependent city
                  in America, no format reaches more drivers. Print, crew, distribution, and 100%
                  photo documentation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden" style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF", boxShadow: "0 4px 28px rgba(0,0,0,0.42), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                    <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.28) 0%, transparent 48%)" }} />
                    Get an LA Quote <span className="cta-arrow" style={{ color: ACCENT }}>→</span>
                  </Link>
                  <a href={BUSINESS.telHref} className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full" style={{ color: "rgba(0,0,0,0.82)", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
                    Call {BUSINESS.telephoneDisplay}
                  </a>
                </div>
                <div className="flex flex-wrap gap-10 md:gap-16 mt-12 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  {[{ stat: "6+", label: "LA Zones" }, { stat: "10+ yrs", label: "Active in LA" }, { stat: "100%", label: "Documented" }].map(({ stat, label }) => (
                    <div key={label}>
                      <div className="font-black uppercase leading-none" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.04em", color: ACCENT }}>{stat}</div>
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase mt-1.5" style={{ color: "rgba(0,0,0,0.55)" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden lg:block h-[640px] overflow-hidden">
                <div className="absolute top-10 right-0 rounded-2xl overflow-hidden" style={{ width: "82%", height: "80%", transform: "rotate(1.8deg)", boxShadow: "0 24px 64px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.10)" }}>
                  <Image src="/gallery/street-flyering-windshield-flyer-closeup-los-angeles.webp" alt="Phantom Pasting flyer under a windshield wiper on a parked car in Los Angeles" fill style={{ objectFit: "cover" }} sizes="(max-width: 1024px) 0vw, 40vw" priority />
                </div>
                <div className="absolute bottom-10 left-2 rounded-xl overflow-hidden" style={{ width: "50%", height: "48%", transform: "rotate(-2.2deg)", boxShadow: "0 16px 48px rgba(0,0,0,0.26), 0 3px 10px rgba(0,0,0,0.12)" }}>
                  <Image src="/gallery/street-flyering-windshield-flyer-parking-lot-sunset-los-angeles.webp" alt="Phantom Pasting windshield flyer in a Los Angeles parking lot at sunset" fill style={{ objectFit: "cover" }} sizes="25vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why LA ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Why LA
              </span>
              <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}>
                A CITY BUILT<br />ON <ShinyGoldText>WINDSHIELDS.</ShinyGoldText>
              </h2>
              <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}>
                Los Angeles runs on cars. With one of the lowest transit-share rates of any major US
                city, millions of vehicles sit in lots and street parking across LA every single day
                — a moving canvas of windshields that no other format reaches as efficiently.
              </p>
              <p className="font-light leading-relaxed m-0 mb-4" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}>
                Pair that with LA&apos;s dense pedestrian corridors — Melrose, Abbot Kinney, Westwood
                Village, the Sunset strip — and you get both halves of the format firing at once:
                windshield volume in the lots, hand-to-hand reach on the avenues.
              </p>
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "520px" }}>
                We&apos;ve been running street campaigns in LA since 2014. The flyers you see on this
                page are real LA placements — and every run comes back photo-documented and
                GPS-logged the same day.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Core Zones", value: "6+ LA Districts" },
                { label: "Methods", value: "Windshield + Hand-to-Hand" },
                { label: "Go-Live", value: "5–10 Days" },
                { label: "Documentation", value: "100% Photo Proof" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.55)" }}>{label}</div>
                  <div className="font-black uppercase leading-tight" style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "#1A1A1A", letterSpacing: "-0.02em" }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Where we flyer in LA ─────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              LA Coverage
            </span>
            <h2 className="font-black uppercase m-0 mb-10 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
              WHERE WE FLYER IN <ShinyGoldText>LA.</ShinyGoldText>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ZONES.map(({ name, desc }) => (
                <div key={name} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.6)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
                  <h3 className="font-black uppercase m-0 mb-2" style={{ fontSize: "15px", letterSpacing: "-0.01em" }}>{name}<span style={{ color: ACCENT }}>.</span></h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Proof gallery ────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Recent LA Work
            </span>
            <h2 className="font-black uppercase m-0 mb-10 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
              REAL LA <ShinyGoldText>PLACEMENTS.</ShinyGoldText>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {SHOTS.map((shot) => (
                <div key={shot.src} className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "3 / 4", border: "1px solid rgba(255,255,255,0.6)", boxShadow: "0 8px 28px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}>
                  <Image src={shot.src} alt={shot.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 p-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)" }}>
                    <div className="font-mono text-[8px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.9)" }}>{shot.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              LA Pricing
            </span>
            <h2 className="font-black uppercase m-0 mb-10 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
              LA FLYERING <ShinyGoldText>PRICING.</ShinyGoldText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PRICING.map(({ tier, range, includes }) => (
                <div key={tier} className="rounded-3xl p-7 flex flex-col" style={{ background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.6)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
                  <div className="font-black uppercase m-0 mb-2 leading-tight" style={{ fontSize: "clamp(16px, 1.8vw, 20px)", letterSpacing: "-0.02em" }}>{tier}</div>
                  <div className="font-black m-0 mb-4" style={{ fontSize: "clamp(20px, 2.4vw, 28px)", letterSpacing: "-0.03em", color: ACCENT }}>{range}</div>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "13px" }}>{includes}</p>
                </div>
              ))}
            </div>
            <p className="font-light mt-6 m-0" style={{ color: "rgba(0,0,0,0.5)", fontSize: "13px" }}>
              Pricing scales with flyer volume, zone count, and timeline. For the format breakdown, see{" "}
              <Link href="/services/street-flyering" style={{ color: ACCENT, textDecoration: "underline" }}>street flyering</Link>, and on legality, our guide on{" "}
              <Link href="/blog/are-windshield-flyers-legal" style={{ color: ACCENT, textDecoration: "underline" }}>whether windshield flyers are legal</Link>.
            </p>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.55)" }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Common Questions
            </span>
            <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]" style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.035em" }}>
              LA FLYERING <ShinyGoldText>FAQ.</ShinyGoldText>
            </h2>
            <div className="flex flex-col">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="py-6" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                  <h3 className="font-black uppercase m-0 mb-3" style={{ fontSize: "15px", letterSpacing: "-0.01em" }}>{q}</h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px" }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]" style={{ fontSize: "clamp(34px, 5.5vw, 72px)", letterSpacing: "-0.04em" }}>
              FLYER LA<br /><ShinyGoldText>THIS WEEK.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-8 mx-auto" style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "460px" }}>
              Tell us your LA zones, your timeline, and your goal. We&apos;ll respond within 24 hours
              with a route plan and pricing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF", boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
                <span className="absolute inset-0 pointer-events-none rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
                Get an LA Quote <span className="cta-arrow">→</span>
              </Link>
              <a href={BUSINESS.telHref} className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-5 rounded-full" style={{ color: "#1A1A1A", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.14)" }}>
                Call {BUSINESS.telephoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
