import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { localBusinessSchema, breadcrumbSchema, faqPageSchema, jsonLd } from "@/lib/schema";

const PAGE_URL = `${BUSINESS.url}/contact`;
const PAGE_TITLE = "Hire a Wheat Pasting Company";
const PAGE_DESC =
  "Ready to launch a wheat pasting or guerrilla marketing campaign? Contact Phantom Pasting and get a custom quote within 24 hours. Available in 50+ US cities.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "hire wheat pasting company",
    "guerrilla marketing quote",
    "wheat paste advertising quote",
    "wild posting campaign quote",
    "street marketing contact",
    "get a quote guerrilla marketing",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Launch a wheat pasting or guerrilla marketing campaign. Custom quote within 24 hours. 50+ US cities.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BUSINESS.url}/gallery/fifa-world-cup-poster-wall-gallery-wide.webp`,
        width: 1200,
        height: 630,
        alt: "Phantom Pasting — wheat pasting and guerrilla marketing campaigns",
      },
    ],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Phantom Pasting",
  url: PAGE_URL,
  description: "Get a custom quote for wheat pasting, chalk spray stencils, or full guerrilla marketing campaigns.",
  mainEntity: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.url,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      areaServed: "US",
      availableLanguage: "English",
    },
  },
};

const ACCENT = "#D4A010";
const CITIES = "NYC · LA · Chicago · Miami · SF · Atlanta · Houston · Philly · Seattle · Austin · Boston · DC · Portland · Denver · Vegas · Nashville + Every US City";

/**
 * EEAT-aligned FAQ block. Each answer is grounded in real operational details
 * (10+ years, 500+ campaigns, FIFA / FashionPass / Incrediwear pedigree) so
 * Google can attribute Experience + Expertise signals to the page. Also feeds
 * FAQPage JSON-LD below for rich-result eligibility.
 */
const FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "How much does a wheat pasting campaign cost?",
    a: "Campaign budgets typically range from $2,500 for a single-city pilot (25–50 walls) to $25,000+ for multi-market flagship activations. Final pricing depends on city, wall count, poster size, print spec, and install cadence. Every quote we send includes print, paste-up, location scouting, and full photo documentation — no hidden line items.",
  },
  {
    q: "Which cities do you operate in?",
    a: "We run campaigns nationwide across 50+ US markets. Our core metros — New York, Los Angeles, Chicago, Miami, and Atlanta — have dedicated install crews on standby. Secondary markets (San Francisco, Houston, Philadelphia, Seattle, Austin, Boston, DC, Portland, Denver, Las Vegas, Nashville, and every major US city) are covered through our vetted network. If your target city isn't on the shortlist, ask — we've almost certainly pasted there.",
  },
  {
    q: "How fast can a campaign launch after we approve it?",
    a: "Standard turnaround is 7–10 business days from approved artwork to first posters on the wall. Rush launches (3–5 days) are available when print vendors can accommodate. Most clients send us creative Monday and see street photos by the following weekend.",
  },
  {
    q: "What does your process look like from quote to photo delivery?",
    a: "Four phases: (1) strategy call — we map your target neighborhoods and recommend wall counts; (2) location scouting — our crew pre-walks routes and flags high-visibility surfaces; (3) overnight install — posters go up between 11pm–5am when foot traffic is lowest; (4) photo documentation — every wall is shot at day + night and delivered as a client report within 48 hours of the install.",
  },
  {
    q: "Who have you worked with, and can you share references?",
    a: "We've run campaigns for FIFA World Cup (Atlanta activation), FashionPass (multi-wall LA rollout), Incrediwear (NYC pole wraps + stickers), and hundreds of fashion, entertainment, music, and DTC brands since 2014. Detailed case studies with photo documentation live under /work — references from repeat clients are available on request during the quote phase.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(FAQS)) }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Contact" },
          ]}
        />
        <TrustBar />

        {/* ── Page Hero ─────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-10 pb-12 md:pt-16 md:pb-16">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "rgba(0,0,0,0.55)" }}>
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            Get a Quote
          </span>
          <h1
            className="font-black uppercase m-0 leading-[0.88]"
            style={{ fontSize: "clamp(48px, 8vw, 110px)", letterSpacing: "-0.04em" }}
          >
            GET A WHEAT<br />
            <ShinyGoldText>PASTING QUOTE.</ShinyGoldText>
          </h1>
          <p
            className="font-light leading-relaxed mt-6 max-w-[500px]"
            style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "rgba(0,0,0,0.5)" }}
          >
            Tell us about your campaign. We&apos;ll get back within 24 hours with a custom street
            strategy and pricing for your city.
          </p>
        </section>

        {/* ── Two-column layout ─────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">

            {/* Left — contact info */}
            <div>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  {
                    label: "Phone",
                    value: BUSINESS.telephoneDisplay,
                    href: BUSINESS.telHref,
                  },
                  {
                    label: "Email",
                    value: BUSINESS.email,
                    href: BUSINESS.mailtoHref,
                  },
                  {
                    label: "Instagram",
                    value: BUSINESS.instagramHandle,
                    href: BUSINESS.instagramUrl,
                  },
                  {
                    label: "Response Time",
                    value: "Within 24 hours",
                    href: null,
                  },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 flex items-center justify-center shrink-0 rounded-xl"
                      style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.08)" }}
                    >
                      <span aria-hidden="true" style={{ fontSize: "13px" }}>
                        {label === "Phone" ? "☎" : label === "Email" ? "✉" : label === "Instagram" ? "◎" : "⏱"}
                      </span>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.25em] uppercase mb-0.5"
                        style={{ color: "rgba(0,0,0,0.6)" }}>
                        {label}
                      </div>
                      {href ? (
                        <a href={href} className="font-light no-underline" style={{ color: "#1A1A1A", fontSize: "16px" }}>
                          {value}
                        </a>
                      ) : (
                        <span className="font-light" style={{ color: "#1A1A1A", fontSize: "16px" }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(242,240,236,0.7)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <p className="font-mono text-[12px] font-bold tracking-[0.28em] uppercase mb-2 text-[#1A1A1A]">
                  ◎ Nationwide Coverage
                </p>
                <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.65)", fontSize: "15px" }}>
                  {CITIES}
                </p>
              </div>

              {/* Services quick links */}
              <div className="mt-10">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
                  style={{ color: "rgba(0,0,0,0.6)" }}>
                  Our Services
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Wheat Pasting", href: "/services/wheat-pasting" },
                    { label: "Chalk Spray Stencils", href: "/services/chalk-spray-stencils" },
                    { label: "Full Impact Campaigns", href: "/services/full-impact-campaigns" },
                  ].map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="no-underline flex items-center justify-between rounded-xl px-4 py-3"
                      style={{
                        background: "rgba(248,247,244,0.9)",
                        border: "1px solid rgba(0,0,0,0.07)",
                        color: "#1A1A1A",
                      }}
                    >
                      <span className="font-light" style={{ fontSize: "15px" }}>{label}</span>
                      <span style={{ color: ACCENT }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form (client component) */}
            <ContactForm />
          </div>
        </section>

        {/* ── EEAT FAQ ──────────────────────────────────────────────
            Grounded in real operational details (cost, cities, timelines,
            process, client pedigree). Mirrors the FAQPage JSON-LD above so
            Google can surface rich-result expandables in SERP.            */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[900px] mx-auto">
            <span
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(0,0,0,0.55)" }}
            >
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Common Questions
            </span>
            <h2
              className="font-black uppercase m-0 mb-10 leading-[0.9]"
              style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.03em" }}
            >
              QUESTIONS BEFORE YOU<br />
              <ShinyGoldText>GET A QUOTE.</ShinyGoldText>
            </h2>

            <div className="flex flex-col gap-5">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl"
                  style={{
                    background: "rgba(248,247,244,0.9)",
                    border: "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <summary
                    className="list-none cursor-pointer px-5 py-4 flex items-start justify-between gap-4"
                    style={{ color: "#1A1A1A" }}
                  >
                    <span className="font-semibold" style={{ fontSize: "17px", lineHeight: 1.35 }}>
                      {q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 mt-1 font-mono transition-transform group-open:rotate-45"
                      style={{ color: ACCENT, fontSize: "18px", lineHeight: 1 }}
                    >
                      +
                    </span>
                  </summary>
                  <div
                    className="px-5 pb-5 font-light leading-relaxed"
                    style={{ color: "rgba(0,0,0,0.68)", fontSize: "15.5px" }}
                  >
                    {a}
                  </div>
                </details>
              ))}
            </div>

            {/* Trust signal strip — reinforces EEAT (Experience + Authoritativeness) */}
            <div
              className="mt-12 rounded-2xl p-6"
              style={{
                background: "rgba(242,240,236,0.7)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <p
                className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ color: "rgba(0,0,0,0.6)" }}
              >
                Why Phantom Pasting
              </p>
              <p
                className="font-light leading-relaxed m-0"
                style={{ color: "rgba(0,0,0,0.75)", fontSize: "16px" }}
              >
                Founded in 2014. 10+ years running street-level activations. 500+ campaigns delivered across
                50+ US cities. Trusted by FIFA World Cup, FashionPass, Incrediwear, and a long bench of
                fashion, entertainment, music, and DTC brands. Every campaign is planned by the same crew
                that installs it — no subcontractor hand-offs, no disappearing account managers.
              </p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
