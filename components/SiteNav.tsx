"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

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
      className="sticky top-0 z-50 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-5"
      style={{
        background: "transparent",
        animation: `heroDown 0.6s 0.02s ${EXPO} both`,
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 no-underline">
        <Image
          src="/phantom-pasting-logo.webp"
          alt="Phantom Pasting Logo"
          width={512}
          height={460}
          className="rounded-lg"
          style={{ width: 32, height: 32, objectFit: "cover" }}
          priority
        />
        <span className="font-black text-[13px] tracking-[0.08em] uppercase" style={{ color: "#1A1A1A" }}>
          Phantom<span style={{ color: ACCENT }}>Pasting</span>
        </span>
      </Link>

      {/* Center links (desktop) — Services ▾ · Gallery · Cities ▾ · About */}
      <ul className="hidden md:flex items-center gap-10 lg:gap-14 list-none m-0 p-0">
        <li className="flex items-center"><NavServicesMenu /></li>
        <li className="flex items-center"><Link href="/gallery" className={LINK_CLS}>Gallery</Link></li>
        <li className="flex items-center"><NavCitiesMenu /></li>
        <li className="flex items-center"><Link href="/about"   className={LINK_CLS}>About</Link></li>
      </ul>

      {/* Right — CTA (desktop) / Hamburger (mobile) */}
      <div className="flex items-center">
        <MobileNav />
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
