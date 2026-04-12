import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Hire a Wheat Pasting Company | Get a Quote | Phantom Pasting",
  description:
    "Ready to launch a wheat pasting or guerrilla marketing campaign? Contact Phantom Pasting and get a custom quote within 24 hours. Available in 50+ US cities.",
  keywords: [
    "hire wheat pasting company",
    "guerrilla marketing quote",
    "wheat paste advertising quote",
    "wild posting campaign quote",
    "street marketing contact",
    "get a quote guerrilla marketing",
  ],
  alternates: { canonical: "https://www.phantompasting.com/contact" },
  openGraph: {
    title: "Hire a Wheat Pasting Company | Get a Quote | Phantom Pasting",
    description:
      "Launch a wheat pasting or guerrilla marketing campaign. Custom quote within 24 hours. 50+ US cities.",
    url: "https://www.phantompasting.com/contact",
    type: "website",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Phantom Pasting",
  url: "https://www.phantompasting.com/contact",
  description: "Get a custom quote for wheat pasting, chalk spray stencils, or full guerrilla marketing campaigns.",
  mainEntity: {
    "@type": "Organization",
    name: "Phantom Pasting",
    url: "https://www.phantompasting.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@phantompasting.com",
      areaServed: "US",
      availableLanguage: "English",
    },
  },
};

const ACCENT = "#D4A010";
const CITIES = "NYC · LA · Chicago · Miami · SF · Atlanta · Houston · Philly · Seattle · Austin · Boston · DC · Portland · Denver · Vegas · Nashville + Every US City";

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <div style={{ background: "transparent", minHeight: "100vh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />

        {/* ── Page Hero ─────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-16">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "rgba(0,0,0,0.4)" }}>
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            Get a Quote
          </span>
          <h1
            className="font-black uppercase m-0 leading-[0.88]"
            style={{ fontSize: "clamp(48px, 8vw, 110px)", letterSpacing: "-0.04em" }}
          >
            LET&apos;S HIT<br />
            <ShinyGoldText>THE STREETS.</ShinyGoldText>
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
                    label: "Email",
                    value: "info@phantompasting.com",
                    href: "mailto:info@phantompasting.com",
                  },
                  {
                    label: "Instagram",
                    value: "@phantompasting",
                    href: "https://www.instagram.com/phantompasting",
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
                      <span style={{ fontSize: "13px" }}>
                        {label === "Email" ? "✉" : label === "Instagram" ? "◎" : "⏱"}
                      </span>
                    </div>
                    <div>
                      <div className="font-mono text-[9px] tracking-[0.25em] uppercase mb-0.5"
                        style={{ color: "rgba(0,0,0,0.35)" }}>
                        {label}
                      </div>
                      {href ? (
                        <a href={href} className="font-light no-underline" style={{ color: "#1A1A1A", fontSize: "14px" }}>
                          {value}
                        </a>
                      ) : (
                        <span className="font-light" style={{ color: "#1A1A1A", fontSize: "14px" }}>{value}</span>
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
                <p className="font-mono text-[9px] tracking-[0.28em] uppercase mb-2" style={{ color: ACCENT }}>
                  ◎ Nationwide Coverage
                </p>
                <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.45)", fontSize: "11px" }}>
                  {CITIES}
                </p>
              </div>

              {/* Services quick links */}
              <div className="mt-10">
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase mb-4"
                  style={{ color: "rgba(0,0,0,0.35)" }}>
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
                      <span className="font-light" style={{ fontSize: "13px" }}>{label}</span>
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

        {/* ── Footer ────────────────────────────────────────────── */}
        <footer
          className="px-5 sm:px-8 md:px-12 lg:px-16 py-10 border-t"
          style={{ borderColor: "rgba(0,0,0,0.08)" }}
        >
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="font-black uppercase text-[14px] tracking-[0.05em] mb-1" style={{ color: "#1A1A1A" }}>
                Phantom<span style={{ color: ACCENT }}>Pasting</span>
              </div>
              <p className="font-mono text-[9px] tracking-[0.22em] uppercase m-0"
                style={{ color: "rgba(0,0,0,0.3)" }}>
                © 2026 — All Rights Reserved
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                { label: "Wheat Pasting", href: "/services/wheat-pasting" },
                { label: "Chalk Stencils", href: "/services/chalk-spray-stencils" },
                { label: "Full Impact", href: "/services/full-impact-campaigns" },
                { label: "About", href: "/about" },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="footer-link font-light no-underline"
                  style={{ fontSize: "13px" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
