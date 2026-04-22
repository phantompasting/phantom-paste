"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BUSINESS } from "@/lib/business";

const MobileNav = dynamic(() => import("@/components/MobileNav"), { ssr: false });
const NavCitiesMenu = dynamic(() => import("@/components/NavCitiesMenu"), { ssr: false });
const NavServicesMenu = dynamic(() => import("@/components/NavServicesMenu"), { ssr: false });

const ACCENT = "#D4A010";
const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";
// inline-flex items-center on plain links so they share the same box model
// as the dropdown triggers (inline-flex containers with a chevron SVG).
// Without this, the flex-baseline vs. inline-text-baseline difference pushes
// the dropdowns ~1–2px higher than the plain links.
const LINK_CLS = "nav-link font-mono text-[11px] tracking-[0.22em] uppercase no-underline py-3 px-1 inline-flex items-center";

export default function SiteNav() {
  return (
    <nav
      // Match the homepage HeroNavBar: fully transparent, no border, same
      // heroDown entrance animation. The animated GrainientBackground canvas
      // sits behind every page (rendered in app/layout.tsx), so a transparent
      // nav reads identically across the site.
      //
      // Sticky on mobile, static on desktop.
      //
      // Desktop (md+) — `md:relative`: the nav paints once at the top of the
      // page and scrolls away with the hero, matching HeroNavBar's behavior on
      // the homepage (md:absolute inside the scroll-snap hero). On wide screens
      // a persistent bar fights the editorial feel of the hero and eats a slice
      // of vertical space on long content pages like blog posts.
      //
      // Mobile (< md) — `sticky top-0`: on narrow screens users lose the
      // hamburger (the primary nav entry point) the moment the hero scrolls
      // off, so the bar stays pinned so the menu is always one tap away.
      className="sticky md:relative top-0 md:top-auto z-50 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-5"
      style={{
        background: "transparent",
        animation: `heroDown 0.6s 0.02s ${EXPO} both`,
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 no-underline">
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
      </Link>

      {/* Center links (desktop) — Services ▾ · Gallery · Cities ▾ · Blog · About */}
      <ul className="hidden md:flex items-center gap-8 lg:gap-12 list-none m-0 p-0">
        <li className="flex items-center"><NavServicesMenu /></li>
        <li className="flex items-center"><Link href="/gallery" className={LINK_CLS}>Gallery</Link></li>
        <li className="flex items-center"><NavCitiesMenu /></li>
        <li className="flex items-center"><Link href="/blog"    className={LINK_CLS}>Blog</Link></li>
        <li className="flex items-center"><Link href="/about"   className={LINK_CLS}>About</Link></li>
      </ul>

      {/* Right — CTA (desktop) / Hamburger (mobile) */}
      <div className="flex items-center gap-4">
        <MobileNav />
        {/* Click-to-call — desktop only (mobile users get it in the hamburger dropdown) */}
        <a
          href={BUSINESS.telHref}
          aria-label={`Call Phantom Pasting at ${BUSINESS.telephoneDisplay}`}
          className="hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] uppercase no-underline"
          style={{ color: "rgba(0,0,0,0.72)" }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>{BUSINESS.telephoneDisplay}</span>
        </a>
        <Link
          href="/contact"
          className="hero-cta-nav nav-cta-star relative hidden md:inline-flex items-center gap-2 font-bold text-[10px] tracking-[0.2em] uppercase no-underline px-5 py-2.5 rounded-full overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
            color: "#FFF",
            boxShadow: "0 2px 16px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.08) inset",
            transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.22) 0%, transparent 48%)" }} />
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
