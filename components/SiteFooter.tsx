import Image from "next/image";
import Link from "next/link";
import ShinyGoldText from "@/components/ShinyGoldText";
import { BUSINESS, LOCATIONS } from "@/lib/business";

const ACCENT = "#D4A010";

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
    { label: "Contact", href: "/contact" },
  ],
} as const;

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
      className="relative flex items-center px-5 sm:px-8 md:px-12 lg:px-16 border-t py-16"
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
                  style={{ color: "rgba(0,0,0,0.3)" }}
                >
                  Contact
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={BUSINESS.telHref}
                  className="font-mono text-[11px] tracking-[0.1em] no-underline inline-flex items-center gap-2"
                  style={{ color: ACCENT }}
                >
                  <PhoneIcon /> {BUSINESS.telephoneDisplay}
                </a>
                <a
                  href={BUSINESS.mailtoHref}
                  className="font-mono text-[11px] tracking-[0.1em] no-underline inline-flex items-center gap-2"
                  style={{ color: ACCENT }}
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
                  style={{ color: "rgba(0,0,0,0.3)" }}
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
