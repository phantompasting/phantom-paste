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
const NAV_LINKS = ["Services", "Work", "Cities", "Blog"] as const;
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

      {/* Mobile: justify-between spreads 4 blocks across full height.
          Desktop: justify-center stacks them tightly with explicit margins. */}
      <div className="relative z-10 flex-1 flex flex-col items-center text-center px-5 md:px-6 justify-between md:justify-center py-5 md:py-0">

        {/* 1 — Eyebrow pill (top on mobile) */}
        <div style={{ animation: `heroUp 0.55s 0.04s ${EXPO} both` }}>
          <span
            className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] uppercase px-5 py-2.5 rounded-full"
            style={{
              color: "rgba(0,0,0,0.55)",
              background: "rgba(242,240,236,0.55)",
              backdropFilter: "blur(14px) saturate(1.5)",
              WebkitBackdropFilter: "blur(14px) saturate(1.5)",
              border: "1px solid rgba(255,255,255,0.72)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)",
            }}
          >
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            Wheat Pasting &amp; Stencil Activations
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT, opacity: 0.4 }} />
          </span>
        </div>

        {/* 2 — Headline + divider */}
        {/* calc(100% + padding*2) expands to full real content width — handles scrollbar correctly */}
        <div className="flex flex-col items-center md:mt-8 w-[calc(100%+40px)] md:w-[calc(100%+48px)]">
          <h1
            className="font-black uppercase m-0 leading-[0.88] text-center w-full"
            style={{ fontSize: "clamp(38px, 11.8vw, 168px)", letterSpacing: "-0.04em" }}
          >
            <span className="block">
              <SplitReveal text="WE OWN" color="#1A1A1A" baseDelay={0.08} />
            </span>
            <span className="block" style={{ animation: `heroUp 0.65s 0.2s ${EXPO} both` }}>
              <ShinyGoldText>THE STREETS</ShinyGoldText>
            </span>
          </h1>
          <div className="mt-3 md:mt-7 mb-0 flex items-center gap-4" style={{ animation: `heroUp 0.55s 0.34s ${EXPO} both` }}>
            <span className="block w-10 h-px" style={{ background: `${ACCENT}40` }} />
            <span className="font-black text-[12px] tracking-[0.28em] uppercase" style={{ color: "rgba(0,0,0,0.35)" }}>
              Phantom<span style={{ color: ACCENT }}>Pasting</span>
            </span>
            <span className="block w-10 h-px" style={{ background: `${ACCENT}40` }} />
          </div>
        </div>

        {/* 3 — Tagline + CTAs */}
        <div className="flex flex-col items-center gap-5 md:gap-0 md:mt-4">
          <p
            className="font-light leading-relaxed max-w-lg m-0"
            style={{
              fontSize: "clamp(13px, 1.5vw, 17px)",
              color: "rgba(0,0,0,0.42)",
              animation: `heroUp 0.55s 0.4s ${EXPO} both`,
            }}
          >
            Guerrilla marketing for brands that refuse to blend in.
            Large-format wheat paste. Precision chalk spray stencils. Every major US city.
          </p>
          <div
            className="flex items-center gap-4 md:gap-5 flex-wrap justify-center md:mt-10"
            style={{ animation: `heroUp 0.55s 0.46s ${EXPO} both` }}
          >
            <MagneticPrimaryCTA />
            <MagneticSecondaryCTA />
          </div>
        </div>

        {/* 4 — Stats (bottom on mobile) */}
        <div
          className="w-full flex items-center justify-center gap-3 md:gap-6 flex-wrap md:mt-12"
          style={{ animation: `heroUp 0.55s 0.52s ${EXPO} both` }}
        >
          {[["500+", "Campaigns"], ["50+", "US Cities"], ["100%", "Documented"]].map(([num, label]) => (
            <div key={label} className="flex items-center gap-1.5 md:gap-2.5">
              <span className="font-black text-[18px] md:text-[22px] leading-none" style={{ color: "#1A1A1A", letterSpacing: "-0.03em" }}>{num}</span>
              <span className="font-mono text-[8px] md:text-[9px] tracking-[0.28em] uppercase" style={{ color: "rgba(0,0,0,0.38)" }}>{label}</span>
              <span className="w-px h-3 ml-1 md:ml-2" style={{ background: "rgba(0,0,0,0.12)" }} />
            </div>
          ))}
          <span className="font-mono text-[8px] md:text-[9px] tracking-[0.28em] uppercase ml-0" style={{ color: "rgba(0,0,0,0.38)" }}>10yr Street Cred</span>
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
        {NAV_LINKS.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="nav-link font-mono text-[11px] tracking-[0.22em] uppercase no-underline py-3 px-1"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right — CTA */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-3 md:py-5">
        <a
          href="#contact"
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
