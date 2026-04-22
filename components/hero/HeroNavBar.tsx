"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("@/components/MobileNav"), { ssr: false });
const NavCitiesMenu = dynamic(() => import("@/components/NavCitiesMenu"), { ssr: false });
const NavServicesMenu = dynamic(() => import("@/components/NavServicesMenu"), { ssr: false });

const ACCENT = "#D4A010";
const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";
// inline-flex items-center on plain links too, so they share the same box
// model as the dropdown triggers (which are inline-flex containers with a
// chevron SVG). Without this, the flex-baseline vs. inline-text-baseline
// difference pushes the dropdowns ~1–2px higher than the plain links.
const LINK_CLS = "nav-link font-mono text-[11px] tracking-[0.22em] uppercase no-underline py-3 px-1 inline-flex items-center";

export default function HeroNavBar() {
  return (
    <nav
      className="fixed md:absolute top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{ animation: `heroDown 0.6s 0.02s ${EXPO} both` }}
    >
      {/* Left — Logo */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-3 md:py-5">
        <a href="/" className="flex items-center gap-2 no-underline">
          <div className="rounded-lg" style={{ position: "relative", width: 32, height: 32, flexShrink: 0, overflow: "hidden" }}>
            <Image
              src="/phantom-pasting-logo.webp"
              alt="Phantom Pasting Logo"
              fill
              sizes="32px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <span className="font-black text-[13px] tracking-[0.08em] uppercase" style={{ color: "#1A1A1A" }}>
            Phantom<span style={{ color: ACCENT }}>Pasting</span>
          </span>
        </a>
      </div>

      {/* Center — Links (desktop only) — Services ▾ · Gallery · Cities ▾ · Blog · About.
          Every <li> uses flex items-center so the dropdown triggers (which are
          inline-flex containers holding text + chevron SVG) align to the same
          vertical center as the plain anchors. Without this, the dropdowns'
          flex baseline sits ~1px higher than the plain links' text baseline. */}
      <ul className="relative z-10 hidden md:flex items-center gap-8 lg:gap-12 list-none m-0 p-0">
        <li className="flex items-center"><NavServicesMenu /></li>
        <li className="flex items-center"><a href="/gallery" className={LINK_CLS}>Gallery</a></li>
        <li className="flex items-center"><NavCitiesMenu /></li>
        <li className="flex items-center"><a href="/blog"    className={LINK_CLS}>Blog</a></li>
        <li className="flex items-center"><a href="/about"   className={LINK_CLS}>About</a></li>
      </ul>

      {/* Right — CTA (desktop) / Hamburger (mobile) */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-3 md:py-5 flex items-center">
        <MobileNav />
        <a
          href="/contact"
          className="hero-cta-nav nav-cta-star relative hidden md:inline-flex items-center gap-2 font-bold text-[10px] tracking-[0.2em] uppercase no-underline px-5 py-2.5 rounded-full overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
            color: "#FFF",
            boxShadow: "0 2px 16px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.08) inset",
            transition: `transform 0.25s ${EXPO}, box-shadow 0.25s ${EXPO}`,
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
