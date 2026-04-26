import Image from "next/image";
import Link from "next/link";
import ShinyGoldText from "@/components/ShinyGoldText";
import { BUSINESS, LOCATIONS } from "@/lib/business";

const ACCENT = "#D4A010";
// Darker gold used for body text on the cream footer bg — `#D4A010` only hits
// 2.29:1 contrast at small sizes (fails WCAG AA 4.5:1). `#8C6500` clears AA
// at 11px while still reading as the brand gold.
const ACCENT_TEXT = "#8C6500";

const FOOTER_LINKS = {
  Services: [
    { label: "All Services", href: "/services" },
    { label: "Wheat Pasting", href: "/services/wheat-pasting" },
    { label: "Chalk Spray Stencils", href: "/services/chalk-spray-stencils" },
    { label: "Full Impact", href: "/services/full-impact-campaigns" },
  ],
  Markets: [
    { label: "All Locations", href: "/locations" },
    ...LOCATIONS.map((l) => ({ label: l.name, href: l.href })),
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Wheat Pasting Guide", href: "/blog/what-is-wheat-pasting" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

// ── Mega-footer states + cities grid ────────────────────────────────────
//
// Renders every state landing page + every city landing page as a flat
// crawlable internal-link surface on every page of the site. Three SEO
// reasons this matters more than the compact "Markets" column above:
//
//   1. Internal-link weight: each city/state page picks up footer links
//      from every other page. With 25+ location pages, the cumulative
//      internal-link count per page jumps from ~5 → ~30.
//   2. Crawl depth: location pages were 2-clicks-deep from the homepage
//      (Home → /locations → city). Now they're 1-click-deep from every
//      page (Home → footer city link).
//   3. Anchor-text variety: the footer renders state + city names as
//      anchor text, reinforcing topical relevance for every nationwide
//      page on the site.
//
// Cities listed under each state link only when a dedicated city page
// exists. Cities without pages render as plain text (mentioned for context
// + supporting body of evidence that we serve them).
interface FooterCity { label: string; href?: string }
interface FooterStateGroup { name: string; href: string; cities: FooterCity[] }

const FOOTER_STATE_GROUPS: FooterStateGroup[] = [
  { name: "California",    href: "/locations/california",
    cities: [{ label: "Los Angeles", href: "/locations/los-angeles" }, { label: "San Francisco", href: "/locations/san-francisco" }, { label: "San Diego" }, { label: "Sacramento" }, { label: "Oakland" }] },
  { name: "New York",      href: "/locations/new-york-state",
    cities: [{ label: "New York City", href: "/locations/new-york" }, { label: "Buffalo" }, { label: "Rochester" }, { label: "Syracuse" }, { label: "Albany" }] },
  { name: "Texas",         href: "/locations/texas",
    cities: [{ label: "Houston", href: "/locations/houston" }, { label: "Dallas", href: "/locations/dallas" }, { label: "Austin", href: "/locations/austin" }, { label: "San Antonio" }, { label: "Fort Worth" }] },
  { name: "Florida",       href: "/locations/florida",
    cities: [{ label: "Miami", href: "/locations/miami" }, { label: "Tampa" }, { label: "Orlando" }, { label: "Jacksonville" }, { label: "St. Petersburg" }] },
  { name: "Georgia",       href: "/locations/georgia",
    cities: [{ label: "Atlanta", href: "/locations/atlanta" }, { label: "Savannah" }, { label: "Athens" }, { label: "Augusta" }, { label: "Macon" }] },
  { name: "Illinois",      href: "/locations/illinois",
    cities: [{ label: "Chicago", href: "/locations/chicago" }, { label: "Naperville" }, { label: "Champaign-Urbana" }, { label: "Rockford" }, { label: "Springfield" }] },
  { name: "Arizona",       href: "/locations/arizona",
    cities: [{ label: "Phoenix", href: "/locations/phoenix" }, { label: "Tucson" }, { label: "Mesa" }, { label: "Scottsdale" }, { label: "Tempe" }] },
  { name: "Washington",    href: "/locations/washington",
    cities: [{ label: "Seattle", href: "/locations/seattle" }, { label: "Spokane" }, { label: "Tacoma" }, { label: "Vancouver WA" }, { label: "Bellevue" }] },
  { name: "Oregon",        href: "/locations/oregon",
    cities: [{ label: "Portland", href: "/locations/portland" }, { label: "Eugene" }, { label: "Salem" }, { label: "Bend" }] },
  { name: "Colorado",      href: "/locations/colorado",
    cities: [{ label: "Denver", href: "/locations/denver" }, { label: "Colorado Springs" }, { label: "Boulder" }, { label: "Fort Collins" }] },
  { name: "Nevada",        href: "/locations/nevada",
    cities: [{ label: "Las Vegas", href: "/locations/las-vegas" }, { label: "Henderson" }, { label: "Reno" }] },
  { name: "Massachusetts", href: "/locations/massachusetts",
    cities: [{ label: "Boston", href: "/locations/boston" }, { label: "Cambridge" }, { label: "Worcester" }, { label: "Springfield MA" }] },
  { name: "Pennsylvania",  href: "/locations/pennsylvania",
    cities: [{ label: "Philadelphia" }, { label: "Pittsburgh" }, { label: "Allentown" }, { label: "Erie" }] },
  { name: "Tennessee",     href: "/locations/nashville",
    cities: [{ label: "Nashville", href: "/locations/nashville" }, { label: "Memphis" }, { label: "Knoxville" }] },
  { name: "DC",            href: "/locations/washington-dc",
    cities: [{ label: "Washington DC", href: "/locations/washington-dc" }] },
];

// Inline SVG icons — small, no external deps.
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Site-wide footer. Renders NAP (phone + email), service/market/company link
 * columns, real clickable social+contact icons, and copyright.
 *
 * @param snap — when true, adds scroll-snap alignment for the homepage snap-scroll layout.
 */
export default function SiteFooter({ snap = false }: { snap?: boolean }) {
  return (
    <footer
      className="relative flex items-center px-5 sm:px-8 md:px-12 lg:px-16 border-t py-16 cv-auto contain-paint"
      style={{
        scrollSnapAlign: snap ? "start" : undefined,
        scrollSnapStop: snap ? "always" : undefined,
        background: "rgba(242,240,236,0.75)",
        borderColor: "rgba(255,255,255,0.55)",
      }}
    >
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto">
          {/* Brand block */}
          <div className="mb-14 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start mb-3">
              <div className="rounded-xl" style={{ position: "relative", width: 48, height: 48, flexShrink: 0, overflow: "hidden" }}>
                <Image
                  src="/phantom-pasting-logo.webp"
                  alt="Phantom Pasting Logo"
                  fill
                  sizes="48px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <h2
              className="font-black uppercase m-0 leading-[0.85]"
              style={{ fontSize: "clamp(48px, 8vw, 120px)", letterSpacing: "-0.04em" }}
            >
              <span style={{ color: "#1A1A1A" }}>PHANTOM</span>
              <ShinyGoldText>PASTING</ShinyGoldText>
            </h2>
            <p
              className="font-light leading-relaxed mt-4 max-w-md mx-auto md:mx-0"
              style={{ color: "rgba(0,0,0,0.58)", fontSize: "14px" }}
            >
              The premier guerrilla marketing agency. Wheat pasting and stencil activations across
              50+ US cities.
            </p>
          </div>

          {/* Columns */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pb-14 border-b"
            style={{ borderColor: "rgba(0,0,0,0.06)" }}
          >
            {/* Contact NAP column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                <span
                  className="font-mono text-[9px] tracking-[0.35em] uppercase"
                  style={{ color: "rgba(0,0,0,0.55)" }}
                >
                  Contact
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={BUSINESS.telHref}
                  className="font-mono text-[11px] tracking-[0.1em] no-underline inline-flex items-center gap-2"
                  style={{ color: ACCENT_TEXT }}
                >
                  <PhoneIcon /> {BUSINESS.telephoneDisplay}
                </a>
                <a
                  href={BUSINESS.mailtoHref}
                  className="font-mono text-[11px] tracking-[0.1em] no-underline inline-flex items-center gap-2"
                  style={{ color: ACCENT_TEXT }}
                >
                  <MailIcon /> {BUSINESS.email}
                </a>
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-[0.1em] no-underline footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon /> {BUSINESS.instagramHandle}
                </a>
                <span
                  className="font-mono text-[10px] tracking-[0.22em] uppercase mt-1"
                  style={{ color: "rgba(0,0,0,0.55)" }}
                >
                  Serving 50+ US Cities
                </span>
              </div>
            </div>

            {Object.entries(FOOTER_LINKS).map(([col, links]) => (
              <div key={col}>
                <h3
                  className="font-mono text-[9px] tracking-[0.3em] uppercase mb-5 m-0"
                  style={{ color: "rgba(0,0,0,0.55)" }}
                >
                  {col}
                </h3>
                <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="footer-link font-light no-underline"
                        style={{ fontSize: "13px" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── States & Cities Mega-Grid (SEO internal linking) ──────────
              Every state + every city we serve, listed as crawlable anchor
              text on every page of the site. See FOOTER_STATE_GROUPS docstring
              above for the SEO rationale. */}
          <div className="pt-12 pb-10 border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
            <div className="flex items-center gap-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              <span
                className="font-mono text-[9px] tracking-[0.35em] uppercase"
                style={{ color: "rgba(0,0,0,0.55)" }}
              >
                States &amp; Cities Served
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-6">
              {FOOTER_STATE_GROUPS.map((sg) => (
                <div key={sg.name}>
                  <Link
                    href={sg.href}
                    className="block font-mono text-[10px] tracking-[0.24em] uppercase mb-2 no-underline footer-link"
                    style={{ color: "#1A1A1A", fontWeight: 700 }}
                  >
                    {sg.name}
                  </Link>
                  {/* Show only cities with their own page. Unlinked cities
                      are hidden from the footer until their pages ship —
                      each state's full editorial city list lives on its
                      state page. */}
                  {/* gap-1.5 + py-1 on each anchor lifts the tap target above
                      24×24 (Lighthouse target-size requirement). The visual
                      density only changes by ~2px per row. */}
                  <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
                    {sg.cities
                      .filter((c) => c.href)
                      .map((c) => (
                        <li key={c.label} className="m-0 p-0">
                          <Link
                            href={c.href!}
                            className="block font-light no-underline footer-link py-1"
                            style={{ fontSize: "12px" }}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase no-underline"
                style={{ color: ACCENT_TEXT }}
              >
                View All Locations <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between pt-8 flex-wrap gap-4">
            <p
              className="font-mono text-[9px] tracking-[0.22em] uppercase m-0"
              style={{ color: "rgba(0,0,0,0.52)" }}
            >
              © 2014–2026 Phantom Pasting — All Rights Reserved
            </p>
            <div className="flex gap-2.5">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon w-9 h-9 flex items-center justify-center rounded-lg no-underline transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href={BUSINESS.mailtoHref}
                aria-label="Email Phantom Pasting"
                className="social-icon w-9 h-9 flex items-center justify-center rounded-lg no-underline transition-colors duration-200"
              >
                <MailIcon />
              </a>
              <a
                href={BUSINESS.telHref}
                aria-label="Call Phantom Pasting"
                className="social-icon w-9 h-9 flex items-center justify-center rounded-lg no-underline transition-colors duration-200"
              >
                <PhoneIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
