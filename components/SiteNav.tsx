/**
 * Shared site navigation for inner pages (non-hero).
 * Server component — no "use client" needed.
 */
import Image from "next/image";
import Link from "next/link";

const ACCENT = "#D4A010";
const NAV_LINKS = [
  { label: "Services", href: "/services/wheat-pasting" },
  { label: "Work",     href: "/#work" },
  { label: "Cities",   href: "/#cities" },
  { label: "About",    href: "/about" },
] as const;

export default function SiteNav() {
  return (
    <nav
      className="sticky top-0 z-50 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-5"
      style={{
        background: "rgba(255,254,248,0.94)",
        backdropFilter: "blur(16px) saturate(1.5)",
        WebkitBackdropFilter: "blur(16px) saturate(1.5)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 no-underline">
        <Image
          src="/phantom-pasting-logo.webp"
          alt="Phantom Pasting Logo"
          width={32}
          height={32}
          className="rounded-lg"
          style={{ objectFit: "cover" }}
          priority
        />
        <span
          className="font-black text-[13px] tracking-[0.08em] uppercase"
          style={{ color: "#1A1A1A" }}
        >
          Phantom<span style={{ color: ACCENT }}>Pasting</span>
        </span>
      </Link>

      {/* Center links */}
      <ul className="hidden md:flex items-center gap-10 lg:gap-14 list-none m-0 p-0">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="nav-link font-mono text-[11px] tracking-[0.22em] uppercase no-underline py-3 px-1"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right CTA */}
      <Link
        href="/contact"
        className="hero-cta-nav nav-cta-star relative inline-flex items-center gap-2 font-bold text-[10px] tracking-[0.2em] uppercase no-underline px-5 py-2.5 rounded-full overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)",
          color: "#FFF",
          boxShadow: "0 2px 16px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.08) inset",
          transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <span
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(196,162,18,0.22) 0%, transparent 48%)" }}
        />
        Get a Quote
      </Link>
    </nav>
  );
}
