import { BUSINESS } from "@/lib/business";

const ACCENT = "#D4A010";

/**
 * Thin above-the-fold trust strip with phone CTA + service area text.
 * Renders directly under the Breadcrumb on service/subpages to satisfy
 * "phone above fold" SEO signal and give a clear call path.
 */
export default function TrustBar() {
  return (
    <div className="px-5 sm:px-8 md:px-12 lg:px-16 pb-4">
      <div
        className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-3 rounded-xl px-5 py-3"
        style={{
          background: "rgba(255,255,255,0.55)",
          border: "1px solid rgba(0,0,0,0.06)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <span
          className="font-mono text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "rgba(0,0,0,0.55)" }}
        >
          Serving 50+ Cities &nbsp;·&nbsp; Open Mon–Fri
        </span>
        <a
          href={BUSINESS.telHref}
          className="inline-flex items-center gap-2 font-black uppercase no-underline rounded-full px-4 py-1.5"
          style={{
            color: "#1A1A1A",
            background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`,
            fontSize: "12px",
            letterSpacing: "0.08em",
            boxShadow: "0 2px 10px rgba(212,160,16,0.35)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          Call {BUSINESS.telephoneDisplay}
        </a>
      </div>
    </div>
  );
}
