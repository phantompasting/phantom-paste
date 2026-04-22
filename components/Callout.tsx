import type { ReactNode } from "react";

const ACCENT = "#D4A010";

/**
 * Callout — inline block for highlighting key stats, side notes, or
 * mid-body CTAs inside blog post bodies. Pattern ported from 3floorguys.com
 * blog post layout where paragraphs are broken up with boxed asides.
 *
 * Two visual variants:
 *   - "muted"  — glass card, sits alongside the paragraph flow
 *   - "accent" — gold-tinged card, draws the eye for stronger emphasis
 *
 * Usage:
 *   <Callout variant="muted" label="Campaign math">
 *     A 12-wall, ~200-poster LA install runs $3,500–$5,500 all-in.
 *   </Callout>
 *
 *   <Callout variant="accent" label="Planning a campaign?"
 *            href="/contact" cta="Get a quote →">
 *     Tell us what city and what poster count — we quote in 24 hours.
 *   </Callout>
 */
export default function Callout({
  children,
  label,
  variant = "muted",
  href,
  cta,
}: {
  children: ReactNode;
  label?: string;
  variant?: "muted" | "accent";
  href?: string;
  cta?: string;
}) {
  const isAccent = variant === "accent";

  return (
    <aside
      className="not-prose my-8 rounded-2xl"
      style={{
        background: isAccent
          ? "linear-gradient(135deg, rgba(212,160,16,0.10) 0%, rgba(212,160,16,0.04) 100%)"
          : "rgba(255,255,255,0.45)",
        border: isAccent
          ? `1px solid rgba(212,160,16,0.35)`
          : "1px solid rgba(255,255,255,0.7)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        padding: "1.35rem 1.55rem",
      }}
    >
      {label && (
        <div
          className="font-mono uppercase mb-2"
          style={{
            fontSize: "10px",
            letterSpacing: "0.28em",
            color: isAccent ? ACCENT : "rgba(0,0,0,0.55)",
            fontWeight: 700,
          }}
        >
          {label}
        </div>
      )}
      <div
        className="font-light leading-relaxed"
        style={{
          fontSize: "15px",
          color: "rgba(0,0,0,0.8)",
        }}
      >
        {children}
      </div>
      {href && cta && (
        <a
          href={href}
          className="inline-flex items-center gap-2 font-bold uppercase no-underline mt-4"
          style={{
            fontSize: "11px",
            letterSpacing: "0.22em",
            color: isAccent ? "#1A1A1A" : ACCENT,
          }}
        >
          {cta}
        </a>
      )}
    </aside>
  );
}
