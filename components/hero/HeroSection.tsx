/**
 * PHANTOM PASTING — Hero Section
 * Pure CSS animations — no Framer Motion in critical path.
 * Server-compatible: loads instantly, paints before any JS.
 */

import { TickerMarquee, MARQUEE_ITEMS } from "@/components/Ticker";
import { MagneticPrimaryCTA, MagneticSecondaryCTA } from "@/components/hero/MagneticCTA";
import ShinyGoldText from "@/components/ShinyGoldText";
import HeroNavBar from "@/components/hero/HeroNavBar";

const ACCENT = "#D4A010";
/* expo-out: fast start, long glide — mimics a spring without JS */
const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function HeroSection() {
  return (
    <section
      className="relative h-[100dvh] flex flex-col"
      style={{ background: "transparent", scrollSnapAlign: "start", scrollSnapStop: "always", overflowY: "clip" }}
    >
      <HeroNavBar />
      <div className="pt-[46px] md:pt-[58px]">
        <TickerMarquee items={MARQUEE_ITEMS} />
      </div>

      {/* Hero body */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-8 md:gap-10">

        {/* Pill — sits flush under the ticker on mobile (absolute),
            flows above the headline in the centered column on desktop (static) */}
        <div
          className="absolute top-9 inset-x-0 flex justify-center md:static md:inset-auto"
          style={{ animation: `heroUp 0.55s 0.04s ${EXPO} both` }}
        >
          <h1
            className="inline-flex items-center gap-2.5 font-mono text-[9px] md:text-[10px] tracking-[0.30em] uppercase px-4 md:px-5 py-2 md:py-2.5 rounded-full m-0"
            style={{
              color: "rgba(0,0,0,0.52)",
              // Swapped from `backdrop-filter: blur(10px)` to a slightly
              // more opaque static fill. The pill sits over the already-
              // blurred gold canvas, so a second live gaussian produced
              // essentially no extra frosted-glass effect but forced the
              // GPU compositor to sample and re-blur the underlying texture
              // every frame — a 2–4ms/frame stutter contributor on Intel
              // iGPUs which lack a dedicated compositor thread. The
              // higher alpha here (0.72 vs 0.6) recovers the perceived
              // depth without any per-frame filter cost.
              background: "rgba(242,240,236,0.72)",
              border: "1px solid rgba(255,255,255,0.75)",
              boxShadow: "0 2px 14px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            Wheat Pasting Company · Nationwide Poster Campaigns
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT, opacity: 0.35 }} />
          </h1>
        </div>

        {/* Centered content group — headline · tagline · CTAs */}
        <div className="flex flex-col items-center gap-8 md:gap-10 w-full">

          {/* Headline — full viewport width. Visual display only (H1 lives
              in the pill above for SEO keyword alignment with the <title>). */}
          <div className="w-screen -mx-6 md:-mx-8 px-0">
            <div
              className="font-black uppercase m-0 leading-[0.85] text-center w-full"
              style={{ fontSize: "clamp(96px, 16vw, 187px)", letterSpacing: "-0.045em" }}
            >
              <span className="block">
                <SplitReveal text="WE OWN" color="#1A1A1A" baseDelay={0.08} />
              </span>{" "}
              <span className="block" style={{ animation: `heroUpVisible 0.65s 0.22s ${EXPO} both` }}>
                <ShinyGoldText>THE STREETS</ShinyGoldText>
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p
            className="font-light leading-[1.7] max-w-[320px] md:max-w-[520px] m-0"
            style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "rgba(0,0,0,0.55)",
              animation: `heroUp 0.55s 0.34s ${EXPO} both`,
            }}
          >
            Guerrilla marketing for brands that refuse to blend in.{" "}
            Large-format wheat paste. Precision chalk spray stencils. Every major US city.
          </p>

          {/* CTAs */}
          <div
            className="flex items-center gap-3 md:gap-5 flex-wrap justify-center"
            style={{ animation: `heroUp 0.55s 0.42s ${EXPO} both` }}
          >
            <MagneticPrimaryCTA />
            <MagneticSecondaryCTA />
          </div>

        </div>
      </div>

      {/* Scroll indicator — bottom-right, desktop only */}
      <div
        className="hidden md:flex absolute bottom-7 right-10 flex-col items-center gap-2 pointer-events-none z-10"
        style={{ animation: `heroUp 0.65s 0.8s ${EXPO} both` }}
      >
        <span
          className="font-mono text-[8px] tracking-[0.35em] uppercase"
          style={{ color: "rgba(0,0,0,0.52)", writingMode: "horizontal-tb" }}
        >
          Scroll
        </span>
        <div className="w-px h-8 relative overflow-hidden rounded-full" style={{ background: "rgba(0,0,0,0.08)" }}>
          <div className="scroll-pulse absolute left-0 right-0 h-4 rounded-full" style={{ background: ACCENT }} />
        </div>
      </div>
    </section>
  );
}

/**
 * Per-character translate-up — each letter rises from translateY(24px).
 * Stagger: baseDelay + (charIndex * 0.028s).
 *
 * Uses the LCP-safe `heroUpVisible` keyframe (translate-only, no opacity
 * fade) so Chrome sees the headline at full opacity on the very first paint.
 * The LCP element on the homepage is this h1 — any opacity-0 start state
 * here was pushing LCP out by the full stagger + animation duration.
 */
function SplitReveal({ text, color, baseDelay }: { text: string; color: string; baseDelay: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            color,
            animation: `heroUpVisible 0.65s ${(baseDelay + i * 0.028).toFixed(3)}s cubic-bezier(0.16, 1, 0.3, 1) both`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}
