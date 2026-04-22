import Link from "next/link";
import { SERVICES } from "@/lib/servicesRegistry";

const ACCENT = "#D4A010";
const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * RelatedServicesGrid — end-of-post cross-link panel driving readers from
 * editorial content into the services funnel. Used at the bottom of every
 * /blog/<slug> page.
 *
 * Design language matches the rest of the site:
 *   • Glass-morph cards — rgba(255,255,255,0.35) + backdrop-blur
 *   • Mono 9px uppercase labels with 0.3em letter-spacing
 *   • Numbered tags (Service 01, Service 02, Service 03)
 *   • Dark gradient accent row appears on hover — the same gradient used on
 *     homepage CTA + sidebar CTA card, so the interaction feels like the card
 *     is "activating" into a CTA rather than changing color
 *   • EXPO easing on transforms site-wide
 *
 * Decisions worth noting:
 *   - No icons — the site leans on typography, not iconography. Adding icons
 *     here would break the brand's text-first voice
 *   - No images — these are navigation cards, not hero cards; an image would
 *     compete with the blog post's own hero further up the page
 *   - Card count is always 3 (the full SERVICES list). Context-filtering by
 *     silo felt clever but the set is small enough that showing all three
 *     is both simpler and gives every service equal SEO juice from each post
 */
export default function RelatedServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
      {SERVICES.map((s) => (
        <Link
          key={s.slug}
          href={s.href}
          className="service-card group no-underline block rounded-2xl overflow-hidden relative"
          style={{
            background: "rgba(255,255,255,0.35)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.65)",
            color: "inherit",
            padding: "1.5rem 1.6rem 1.65rem",
            boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
            transition: `transform 0.5s ${EXPO}, box-shadow 0.5s ${EXPO}, border-color 0.35s ease`,
          }}
        >
          {/* Top hairline that fills with gold on hover — a subtle brand cue
              borrowed from the TOC progress rail so the two widgets read as
              the same design system speaking to each other. */}
          <span
            aria-hidden
            className="service-card-rail"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 2,
              width: 0,
              background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(212,160,16,0.15) 100%)`,
              transition: `width 0.6s ${EXPO}`,
              boxShadow: `0 0 8px rgba(212,160,16,0.35)`,
            }}
          />

          {/* Tag row: numbered Service label + small accent dot */}
          <div
            className="font-mono uppercase mb-3 inline-flex items-center gap-2"
            style={{
              fontSize: "9px",
              letterSpacing: "0.3em",
              color: "rgba(0,0,0,0.55)",
              fontWeight: 700,
            }}
          >
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: ACCENT }}
            />
            {s.tag}
          </div>

          {/* Service name */}
          <div
            className="font-black uppercase leading-[1.05] mb-3"
            style={{
              fontSize: "clamp(18px, 1.9vw, 22px)",
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            {s.name}
            <span style={{ color: ACCENT }}>.</span>
          </div>

          {/* Blurb */}
          <p
            className="font-light leading-relaxed m-0 mb-5"
            style={{ fontSize: "13.5px", color: "rgba(0,0,0,0.65)" }}
          >
            {s.blurb}
          </p>

          {/* CTA row */}
          <span
            className="inline-flex items-center gap-1.5 font-bold uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: ACCENT,
            }}
          >
            <span>{s.cta}</span>
            <span
              className="service-card-arrow"
              aria-hidden
              style={{
                display: "inline-block",
                transition: `transform 0.45s ${EXPO}`,
              }}
            >
              →
            </span>
          </span>
        </Link>
      ))}

      {/* Scoped hover styles — declared once rather than per-card */}
      <style>{`
        .service-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 32px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
          border-color: rgba(212,160,16,0.35);
        }
        .service-card:hover .service-card-rail {
          width: 100%;
        }
        .service-card:hover .service-card-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
