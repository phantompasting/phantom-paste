/**
 * PHANTOM PASTING — Hero Section
 * Pure CSS animations — no Framer Motion in critical path.
 * Server-compatible: loads instantly, paints before any JS.
 */

import Image from "next/image";
import { TickerMarquee, MARQUEE_ITEMS } from "@/components/Ticker";
import { MagneticPrimaryCTA, MagneticSecondaryCTA } from "@/components/hero/MagneticCTA";
import ShinyGoldText from "@/components/ShinyGoldText";

const ACCENT = "#D4A010";
const NAV_LINKS = [
  { label: "Services", href: "/services/wheat-pasting" },
  { label: "Work",     href: "/#work" },
  { label: "Cities",   href: "/#cities" },
  { label: "About",    href: "/about" },
] as const;
/* expo-out: fast start, long glide — mimics a spring without JS */
const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function HeroSection() {
  return (
    <section
      className="relative h-[100dvh] flex flex-col"
      style={{ background: "transparent", scrollSnapAlign: "start", scrollSnapStop: "always", overflowY: "clip" }}
    >
      <NavBar />
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
          <span
            className="inline-flex items-center gap-2.5 font-mono text-[9px] md:text-[10px] tracking-[0.30em] uppercase px-4 md:px-5 py-2 md:py-2.5 rounded-full"
            style={{
              color: "rgba(0,0,0,0.52)",
              background: "rgba(242,240,236,0.6)",
              backdropFilter: "blur(14px) saturate(1.5)",
              WebkitBackdropFilter: "blur(14px) saturate(1.5)",
              border: "1px solid rgba(255,255,255,0.75)",
              boxShadow: "0 2px 14px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            Wheat Pasting &amp; Stencil Activations
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT, opacity: 0.35 }} />
          </span>
        </div>

        {/* Centered content group — headline · tagline · CTAs */}
        <div className="flex flex-col items-center gap-8 md:gap-10 w-full">

          {/* Headline — full viewport width */}
          <div className="w-screen -mx-6 md:-mx-8 px-0">
            <h1
              className="font-black uppercase m-0 leading-[0.85] text-center w-full"
              style={{ fontSize: "clamp(96px, 16vw, 187px)", letterSpacing: "-0.045em", willChange: "transform" }}
            >
              <span className="block">
                <SplitReveal text="WE OWN" color="#1A1A1A" baseDelay={0.08} />
              </span>
              <span className="block" style={{ animation: `heroUpVisible 0.65s 0.22s ${EXPO} both` }}>
                <ShinyGoldText>THE STREETS</ShinyGoldText>
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p
            className="font-light leading-[1.7] max-w-[320px] md:max-w-[520px] m-0"
            style={{
              fontSize: "clamp(14px, 1.6vw, 18px)",
              color: "rgba(0,0,0,0.40)",
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

      {/* Scroll indicator — bottom-right, desktop only (inspired by igloo.inc + mont-fort) */}
      <div
        className="hidden md:flex absolute bottom-7 right-10 flex-col items-center gap-2 pointer-events-none z-10"
        style={{ animation: `heroUp 0.65s 0.8s ${EXPO} both` }}
      >
        <span
          className="font-mono text-[8px] tracking-[0.35em] uppercase"
          style={{ color: "rgba(0,0,0,0.25)", writingMode: "horizontal-tb" }}
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

function NavBar() {
  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{ animation: `heroDown 0.6s 0.02s ${EXPO} both` }}
    >
      {/* Left — Logo */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-3 md:py-5">
        <a href="/" className="flex items-center gap-2 no-underline">
          <Image
            src="/phantom-pasting-logo.webp"
            alt="Phantom Pasting Logo"
            width={32}
            height={32}
            className="rounded-lg"
            style={{ objectFit: "cover" }}
            priority
          />
          <span className="font-black text-[13px] tracking-[0.08em] uppercase" style={{ color: "#1A1A1A" }}>
            Phantom<span style={{ color: ACCENT }}>Pasting</span>
          </span>
        </a>
      </div>

      {/* Center — Links */}
      <ul className="relative z-10 hidden md:flex items-center gap-10 lg:gap-14 list-none m-0 p-0">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="nav-link font-mono text-[11px] tracking-[0.22em] uppercase no-underline py-3 px-1"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right — CTA */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-3 md:py-5">
        <a
          href="/contact"
          className="hero-cta-nav nav-cta-star relative inline-flex items-center gap-2 font-bold text-[10px] tracking-[0.2em] uppercase no-underline px-5 py-2.5 rounded-full overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
            color: "#FFF",
            boxShadow: "0 2px 16px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.08) inset",
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(180deg, rgba(196,162,18,0.22) 0%, transparent 48%)",
          }} />
          Get a Quote
        </a>
      </div>
    </nav>
  );
}

function PrimaryCTA() {
  return (
    <a
      href="#contact"
      className="hero-cta-primary relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${ACCENT} 0%, #D4A810 100%)`,
        color: "#FFF",
        boxShadow: `0 4px 24px ${ACCENT}55, 0 1px 0 rgba(255,255,255,0.25) inset, 0 -1px 0 rgba(0,0,0,0.15) inset`,
        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <span className="absolute inset-0 pointer-events-none rounded-full" style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)",
      }} />
      Launch Campaign
      <span className="cta-arrow">→</span>
    </a>
  );
}

function SecondaryCTA() {
  return (
    <a
      href="#work"
      className="hero-cta-secondary inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
      style={{
        color: "rgba(0,0,0,0.55)",
        background: "rgba(242,240,236,0.82)",
        border: "1px solid rgba(255,255,255,0.6)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.75)",
        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s ease, color 0.25s ease",
      }}
    >
      View Work
      <span className="cta-arrow">→</span>
    </a>
  );
}

/**
 * Per-character fade-up — each letter fades in from translateY(24px).
 * Stagger: baseDelay + (charIndex * 0.028s).
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
            animation: `heroUp 0.65s ${(baseDelay + i * 0.028).toFixed(3)}s cubic-bezier(0.16, 1, 0.3, 1) both`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}
