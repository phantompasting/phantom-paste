import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import ShinyGoldText from "@/components/ShinyGoldText";
import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { BUSINESS } from "@/lib/business";
import { webPageSchema, faqPageSchema, jsonLd } from "@/lib/schema";

/**
 * /standards — insurance, compliance, and service commitments.
 *
 * Built 10/22/2026 from an AI-assistant due-diligence review of the site
 * that listed what a skeptical buyer still can't verify: insurance/COI,
 * what "authorized" means per wall, replacement policy, what a quote
 * includes, reporting deadlines. Every answer lives here in plain,
 * quotable sentences (FAQPage schema) so answer engines can cite it.
 */

const PAGE_URL = `${BUSINESS.url}/standards`;
const PAGE_TITLE = "Insurance, Compliance & Service Standards";
const PAGE_DESC =
  "How Phantom Pasting runs a campaign: insured crews, certificates of insurance on request, written wall plans, photo reports, and clear replacement terms.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BUSINESS.url}/gallery/nokia-bell-labs-wheat-paste-installer-48x72-posters-helix-new-brunswick-nj.webp`,
        width: 1400,
        height: 1050,
        alt: "Phantom Pasting installer pasting 48x72 inch posters on an insured construction-site install",
      },
    ],
  },
};

const ACCENT = "#D4A010";

const LINK_STYLE = { color: "rgba(0,0,0,0.75)", textDecoration: "underline", textDecorationColor: ACCENT, textUnderlineOffset: "3px" } as const;

const PAPERWORK = [
  { num: "01", title: "GENERAL LIABILITY + UMBRELLA", desc: "Phantom Pasting LLC carries commercial general liability with an umbrella policy on top, sized for construction sites and managed properties." },
  { num: "02", title: "WORKERS' COMP", desc: "Workers' compensation with employer's liability, and hired and non-owned auto coverage for crew travel." },
  { num: "03", title: "CERTIFICATES ON REQUEST", desc: "We issue a certificate of insurance naming your company, your landlord, or your property manager as additional insured, before the crew arrives." },
  { num: "04", title: "SIGNED AGREEMENT + W-9", desc: "Every campaign runs on a written service agreement that lists poster count, sizes, dates, and deliverables. W-9 available for your accounts payable team." },
];

const COMMITMENTS = [
  { title: "The count you paid for", desc: "We install the agreed poster count. If a wall falls through, we replace it with a comparable wall in the same area or credit the difference. You never pay for posters that did not go up." },
  { title: "Proof of every placement", desc: "Every wall is photographed with a time stamp and location. Your photo report lands within 72 hours of the final install day, with a map of every placement." },
  { title: "Finish you can photograph", desc: "Posters go up flat, aligned, and fully pasted. Small bubbles and wrinkles settle as paste dries; anything that does not settle is fixed on our dime." },
  { title: "Spares and refresh passes", desc: "We print spares on every run. Weather and tear-downs happen on the street, so a refresh pass is priced up front if you want your walls kept fresh after launch." },
];

const QUOTE_INCLUDES = [
  "Poster count, size (24x36 or 48x72), and number of unique designs",
  "Printing on wheat-paste-grade paper",
  "Neighborhoods and wall types for the run",
  "Install window and crew",
  "Materials and paste",
  "Photo report and placement map",
  "Insurance certificate when your site needs one",
  "Any travel, permit, or rush fees, listed as their own line",
];

const TRUST_STACK = [
  { stage: "Before you sign", gets: "Itemized quote, sample photo report, insurance summary, and answers to anything on this page in writing." },
  { stage: "Before install", gets: "Signed agreement, neighborhood plan, artwork check (size, bleed, resolution), install dates, and a certificate of insurance if the site needs one." },
  { stage: "Install day", gets: "Crew on site on the agreed dates, every wall photographed with time and location." },
  { stage: "Within 72 hours", gets: "Full photo report, placement map, and social-ready images." },
  { stage: "After launch", gets: "Optional refresh pass, and a check-in on what the campaign drove (QR scans, landing-page visits) if you tracked it." },
];

const FAQS = [
  {
    q: "Is Phantom Pasting insured?",
    a: "Yes. Phantom Pasting LLC carries commercial general liability with an umbrella policy, workers' compensation with employer's liability, and hired and non-owned auto coverage. We issue certificates of insurance naming clients, landlords, or property managers as additional insureds before installing.",
  },
  {
    q: "Can you work on a construction site or managed property that requires a COI?",
    a: "Yes. In October 2026 we installed 60 jumbo 48x72 posters for Nokia Bell Labs on the construction fence at The Helix in New Brunswick, NJ, an active site run by a commercial property manager. The certificate of insurance, with the owner and manager entities named as additional insureds, was accepted before we mobilized.",
  },
  {
    q: "What does an authorized wall mean?",
    a: "It means the surface owner or the party that controls it, such as a developer, landlord, or your own business, has agreed to the posters. If your brand or legal team requires permission-only placements, tell us at the quote stage: we scope the run to authorized surfaces only and keep a record of who approved each one.",
  },
  {
    q: "What happens if posters are removed or covered early?",
    a: "Street posters live outdoors, so weather, tear-downs, and other posters do happen. We print spares on every run and offer a refresh pass, priced up front, to re-paste walls after launch. If a wall falls through before install, we replace it or credit it.",
  },
  {
    q: "Who handles permits?",
    a: "Most private-wall placements do not need a city permit when the surface owner has agreed. Where a city, district, or venue requires one, we tell you in the quote, list any fee as its own line, and handle the paperwork.",
  },
  {
    q: "What is included in a Phantom Pasting quote?",
    a: "Poster count and size, number of designs, printing, neighborhoods and wall types, install window and crew, materials, the photo report and map, and insurance certificates when needed. Travel, permit, or rush fees are listed separately so nothing is hidden.",
  },
  {
    q: "How do I pay, and when?",
    a: "Campaigns are paid in full by bank transfer (ACH or wire) before printing starts, against a QuickBooks invoice. For larger corporate programs we can work with purchase orders and net terms on approval.",
  },
  {
    q: "Can I see a sample report or recent work before I buy?",
    a: "Yes. Ask for a sample photo report with your quote, browse recent installs in our gallery, or read a full case study like our Nokia Bell Labs install at The Helix. For larger campaigns we share the neighborhood plan before install.",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee what we control: poster count, finish quality, install dates, and a photo report within 72 hours. We do not promise sales or invent impression numbers. If you add a QR code or a campaign URL, you can measure scans and visits directly.",
  },
  {
    q: "Can I get references?",
    a: "Yes, on request. We keep client relationships private by default because many brands prefer it, so we connect you with a past client in a similar category once they agree, and walk you through real campaign photos on a call.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[9px] tracking-[0.35em] uppercase mb-5 flex items-center gap-2"
      style={{ color: "rgba(0,0,0,0.55)" }}>
      <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
      {children}
    </span>
  );
}

const CARD_STYLE = {
  background: "rgba(255,255,255,0.35)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
} as const;

export default function StandardsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(webPageSchema({ name: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(FAQS)) }}
      />
      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Standards", href: "/standards" },
          ]}
        />
        <TrustBar />

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-10 md:py-16">
          <div className="max-w-[1200px] mx-auto">
            <Eyebrow>Insurance · Compliance · Commitments</Eyebrow>
            <h1 className="font-black uppercase m-0 leading-[0.88]"
              style={{ fontSize: "clamp(44px, 7vw, 96px)", letterSpacing: "-0.04em" }}>
              INSURED.<br />DOCUMENTED.<br /><ShinyGoldText>ACCOUNTABLE.</ShinyGoldText>
            </h1>
            <p className="font-light leading-relaxed mt-8 mb-0"
              style={{ fontSize: "clamp(17px, 1.6vw, 19px)", color: "rgba(0,0,0,0.55)", maxWidth: "640px" }}>
              Hiring a street team should not feel like a gamble. This page answers what a careful buyer asks
              before signing: are you insured, what does &ldquo;authorized&rdquo; mean, what happens if posters come down,
              and what exactly is in the quote. If something here does not answer your question,{" "}
              <Link href="/contact" style={LINK_STYLE}>ask us</Link> and we will put the answer in writing.
            </p>
          </div>
        </section>

        {/* ── Insurance + paperwork ────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1200px] mx-auto">
            <Eyebrow>Insurance &amp; Paperwork</Eyebrow>
            <h2 className="font-black uppercase m-0 mb-10 leading-[0.9]"
              style={{ fontSize: "clamp(30px, 4.2vw, 54px)", letterSpacing: "-0.035em" }}>
              COI READY BEFORE<br /><ShinyGoldText>WE ARRIVE.</ShinyGoldText>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
              style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "20px", overflow: "hidden" }}>
              {PAPERWORK.map((v) => (
                <div key={v.num} className="p-8 md:p-10" style={CARD_STYLE}>
                  <div className="font-mono text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: ACCENT }}>{v.num}</div>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.9]"
                    style={{ fontSize: "clamp(18px, 1.8vw, 24px)", letterSpacing: "-0.02em" }}>
                    {v.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "14px" }}>{v.desc}</p>
                </div>
              ))}
            </div>
            <p className="font-light leading-relaxed mt-8 m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px", maxWidth: "720px" }}>
              Real example: for our{" "}
              <Link href="/work/nokia-bell-labs-helix-new-jersey" style={LINK_STYLE}>Nokia Bell Labs install at The Helix</Link>{" "}
              in New Brunswick, NJ, the certificate named the property owner and the property manager as additional insureds
              and was accepted before a single poster went up.
            </p>
          </div>
        </section>

        {/* ── Commitments ──────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1200px] mx-auto">
            <Eyebrow>Service Commitments</Eyebrow>
            <h2 className="font-black uppercase m-0 mb-4 leading-[0.9]"
              style={{ fontSize: "clamp(30px, 4.2vw, 54px)", letterSpacing: "-0.035em" }}>
              WHAT WE <ShinyGoldText>GUARANTEE.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10 m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "15px", maxWidth: "640px" }}>
              We guarantee what we control. We do not promise sales, and we never invent impression numbers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMMITMENTS.map((c) => (
                <div key={c.title} className="p-7 md:p-8 rounded-2xl" style={{ ...CARD_STYLE, border: "1px solid rgba(255,255,255,0.6)" }}>
                  <h3 className="font-black uppercase m-0 mb-3 leading-[0.95]"
                    style={{ fontSize: "clamp(17px, 1.6vw, 21px)", letterSpacing: "-0.02em" }}>
                    {c.title}<span style={{ color: ACCENT }}>.</span>
                  </h3>
                  <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "14px" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Authorized walls ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <Eyebrow>Walls &amp; Permission</Eyebrow>
              <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
                style={{ fontSize: "clamp(30px, 4.2vw, 54px)", letterSpacing: "-0.035em" }}>
                YOU KNOW WHERE<br /><ShinyGoldText>EVERY POSTER IS.</ShinyGoldText>
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px" }}>
                An authorized wall is one where the surface owner, or whoever controls it (a developer, a landlord, or your own business),
                has agreed to the posters. Before install you get the neighborhoods and wall types in writing, and after install you get a
                photo and location for every single placement.
              </p>
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px" }}>
                If your brand, venue, or legal team requires permission-only placements, say so at the quote stage. We scope the run to
                authorized surfaces only and keep a record of who approved each one. Private owner details stay private unless the owner agrees.
              </p>
              <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.6)", fontSize: "15px" }}>
                Our materials are paper and water-based paste, and chalk for stencils. Nothing permanent, no solvents, no damage to the surface underneath.
              </p>
            </div>
          </div>
        </section>

        {/* ── Quote + trust stack ─────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <Eyebrow>Every Quote Lists</Eyebrow>
              <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 3.6vw, 46px)", letterSpacing: "-0.035em" }}>
                NO HIDDEN <ShinyGoldText>LINES.</ShinyGoldText>
              </h2>
              <ul className="m-0 p-0 list-none flex flex-col gap-3">
                {QUOTE_INCLUDES.map((item) => (
                  <li key={item} className="flex gap-3 font-light leading-relaxed" style={{ color: "rgba(0,0,0,0.65)", fontSize: "15px" }}>
                    <span style={{ color: ACCENT }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-light leading-relaxed mt-6 m-0" style={{ color: "rgba(0,0,0,0.55)", fontSize: "14px" }}>
                See typical ranges on our <Link href="/pricing" style={LINK_STYLE}>pricing page</Link>. Payment is in full by bank transfer
                before printing; purchase orders and net terms are available for larger corporate programs on approval.
              </p>
            </div>
            <div>
              <Eyebrow>What You Get, When</Eyebrow>
              <h2 className="font-black uppercase m-0 mb-8 leading-[0.9]"
                style={{ fontSize: "clamp(28px, 3.6vw, 46px)", letterSpacing: "-0.035em" }}>
                THE <ShinyGoldText>TIMELINE.</ShinyGoldText>
              </h2>
              <div className="flex flex-col rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                {TRUST_STACK.map((t, i) => (
                  <div key={t.stage} className="p-5 md:p-6" style={{ ...CARD_STYLE, borderTop: i ? "1px solid rgba(0,0,0,0.06)" : undefined }}>
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: ACCENT }}>{t.stage}</div>
                    <p className="font-light leading-relaxed m-0" style={{ color: "rgba(0,0,0,0.65)", fontSize: "14px" }}>{t.gets}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[900px] mx-auto">
            <Eyebrow>Due Diligence</Eyebrow>
            <h2 className="font-black uppercase m-0 mb-10 leading-[0.9]"
              style={{ fontSize: "clamp(30px, 4.2vw, 54px)", letterSpacing: "-0.035em" }}>
              QUESTIONS TO ASK<br /><ShinyGoldText>BEFORE YOU HIRE.</ShinyGoldText>
            </h2>
            <div className="flex flex-col gap-3">
              {FAQS.map((f) => (
                <details key={f.q} className="group rounded-2xl p-6" style={{ ...CARD_STYLE, border: "1px solid rgba(255,255,255,0.6)" }}>
                  <summary className="cursor-pointer font-black uppercase leading-tight list-none flex justify-between gap-4"
                    style={{ fontSize: "clamp(15px, 1.4vw, 18px)", letterSpacing: "-0.01em" }}>
                    <h3 className="m-0 font-black" style={{ fontSize: "inherit" }}>{f.q}</h3>
                    <span className="group-open:rotate-45 transition-transform" style={{ color: ACCENT }}>+</span>
                  </summary>
                  <p className="font-light leading-relaxed mt-4 mb-0" style={{ color: "rgba(0,0,0,0.62)", fontSize: "15px" }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-24 md:pb-32 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-black uppercase m-0 mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5.5vw, 72px)", letterSpacing: "-0.04em" }}>
              GET IT IN<br /><ShinyGoldText>WRITING.</ShinyGoldText>
            </h2>
            <p className="font-light leading-relaxed mb-10 mx-auto"
              style={{ color: "rgba(0,0,0,0.5)", fontSize: "15px", maxWidth: "420px" }}>
              Send your city, poster count, and dates. Your quote comes back within 24 hours with every line itemized.
            </p>
            <Link href="/contact"
              className="service-cta relative inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-10 py-5 rounded-full overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #F5CA20 100%)`, color: "#FFF",
                boxShadow: `0 6px 32px rgba(212,160,16,0.55), 0 1px 0 rgba(255,255,255,0.25) inset` }}>
              <span className="absolute inset-0 pointer-events-none rounded-full"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)" }} />
              Get a Quote <span className="cta-arrow">→</span>
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
