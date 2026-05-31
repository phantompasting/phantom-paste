import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBar from "@/components/TrustBar";
import SiteFooter from "@/components/SiteFooter";
import ShinyGoldText from "@/components/ShinyGoldText";
import { BUSINESS } from "@/lib/business";
import { webPageSchema, faqPageSchema, jsonLd } from "@/lib/schema";
import type { CompetitorComparison } from "@/lib/competitors";

const ACCENT = "#D4A010";

/**
 * Shared layout for /compare/phantom-pasting-vs-<competitor> pages.
 * Content lives in lib/competitors.ts (single source of truth); this renders
 * it and emits WebPage + Breadcrumb + FAQPage JSON-LD. Honest-comparison copy
 * rules are documented in lib/competitors.ts.
 */
export default function ComparePageTemplate({ data }: { data: CompetitorComparison }) {
  const pageUrl = `${BUSINESS.url}/compare/phantom-pasting-vs-${data.slug}`;
  const crumb = [
    { name: "Home", href: "/" },
    { name: "Compare", href: "/compare" },
    { name: `vs ${data.competitorName}`, href: `/compare/phantom-pasting-vs-${data.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              name: `Phantom Pasting vs ${data.competitorName}`,
              description: data.metaDescription,
              url: pageUrl,
              dateModified: "2026-05-31",
            })
          ),
        }}
      />
      {/* BreadcrumbList JSON-LD is emitted by the <Breadcrumb> component below
          from the same `crumb` items — don't double-emit it here. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(data.faqs)) }}
      />

      <div style={{ background: "transparent", minHeight: "100dvh", color: "#1A1A1A", position: "relative", zIndex: 1 }}>
        <SiteNav />
        <Breadcrumb items={crumb} />
        <TrustBar />

        <article className="max-w-[1000px] mx-auto px-5 sm:px-8 md:px-12 py-8 md:py-14">
          {/* Hero */}
          <span
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase mb-5"
            style={{ color: "rgba(0,0,0,0.55)" }}
          >
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            Comparison
          </span>
          <h1
            className="font-black uppercase m-0 leading-[0.9]"
            style={{ fontSize: "clamp(40px, 6vw, 78px)", letterSpacing: "-0.04em" }}
          >
            <ShinyGoldText>Phantom Pasting</ShinyGoldText>
            <br />
            vs {data.competitorName}
          </h1>

          {/* TL;DR */}
          <div
            className="mt-8 p-5 md:p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase m-0 mb-2" style={{ color: ACCENT }}>
              TL;DR
            </p>
            <p className="font-light leading-relaxed m-0" style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "rgba(0,0,0,0.72)" }}>
              {data.tldr}
            </p>
          </div>

          {/* At-a-glance table */}
          <h2 className="font-black uppercase mt-12 mb-5" style={{ fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-0.02em" }}>
            At a glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontSize: "15px" }}>
              <thead>
                <tr>
                  <th className="text-left font-mono text-[10px] tracking-[0.2em] uppercase py-3 pr-4" style={{ color: "rgba(0,0,0,0.5)", borderBottom: "2px solid rgba(0,0,0,0.12)" }} />
                  <th className="text-left font-bold uppercase py-3 px-4" style={{ borderBottom: "2px solid", borderColor: ACCENT }}>
                    Phantom Pasting
                  </th>
                  <th className="text-left font-bold uppercase py-3 px-4" style={{ color: "rgba(0,0,0,0.7)", borderBottom: "2px solid rgba(0,0,0,0.12)" }}>
                    {data.competitorName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.table.map((row) => (
                  <tr key={row.dimension}>
                    <td className="font-mono text-[11px] tracking-[0.12em] uppercase py-3 pr-4 align-top" style={{ color: "rgba(0,0,0,0.55)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                      {row.dimension}
                    </td>
                    <td className="py-3 px-4 align-top font-light" style={{ background: "rgba(212,160,16,0.06)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                      {row.phantom}
                    </td>
                    <td className="py-3 px-4 align-top font-light" style={{ color: "rgba(0,0,0,0.7)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Category deep-dives */}
          {data.categories.map((cat) => (
            <section key={cat.title} className="mt-11">
              <h2 className="font-black uppercase mb-3" style={{ fontSize: "clamp(20px, 2.6vw, 28px)", letterSpacing: "-0.02em" }}>
                {cat.title}
              </h2>
              <p className="font-light leading-relaxed m-0" style={{ fontSize: "clamp(15px, 1.5vw, 17px)", color: "rgba(0,0,0,0.72)" }}>
                {cat.body}
              </p>
            </section>
          ))}

          {/* Who each is best for */}
          <h2 className="font-black uppercase mt-12 mb-5" style={{ fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-0.02em" }}>
            Who each is best for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 md:p-6 rounded-2xl" style={{ background: "rgba(212,160,16,0.08)", border: `1px solid ${ACCENT}` }}>
              <h3 className="font-bold uppercase text-[13px] tracking-[0.12em] m-0 mb-3">Choose Phantom Pasting if&hellip;</h3>
              <ul className="m-0 pl-0 list-none flex flex-col gap-2">
                {data.phantomBestFor.map((item) => (
                  <li key={item} className="font-light leading-snug flex gap-2" style={{ fontSize: "15px", color: "rgba(0,0,0,0.78)" }}>
                    <span style={{ color: ACCENT }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 md:p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.1)" }}>
              <h3 className="font-bold uppercase text-[13px] tracking-[0.12em] m-0 mb-3" style={{ color: "rgba(0,0,0,0.7)" }}>
                Choose {data.competitorName} if&hellip;
              </h3>
              <ul className="m-0 pl-0 list-none flex flex-col gap-2">
                {data.competitorBestFor.map((item) => (
                  <li key={item} className="font-light leading-snug flex gap-2" style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)" }}>
                    <span style={{ color: "rgba(0,0,0,0.4)" }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-black uppercase mt-12 mb-5" style={{ fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-0.02em" }}>
            FAQ
          </h2>
          <div className="flex flex-col gap-5">
            {data.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-bold m-0 mb-1.5" style={{ fontSize: "17px" }}>{f.q}</h3>
                <p className="font-light leading-relaxed m-0" style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)" }}>{f.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 p-7 md:p-10 rounded-3xl text-center" style={{ background: "linear-gradient(135deg, #221C0E 0%, #1A1A1A 60%)", color: "#FFF" }}>
            <h2 className="font-black uppercase m-0 mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
              See the difference on a wall
            </h2>
            <p className="font-light m-0 mb-7" style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px" }}>
              Tell us your city, timeline, and goal — we&apos;ll send an itemized quote within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.22em] uppercase no-underline px-8 py-4 rounded-full"
                style={{ background: "#FFF", color: "#1A1A1A" }}
              >
                Get a Quote <span style={{ color: ACCENT }}>→</span>
              </Link>
              <a
                href={BUSINESS.telHref}
                className="inline-flex items-center gap-2.5 font-bold text-[11px] tracking-[0.18em] uppercase no-underline px-6 py-4 rounded-full"
                style={{ color: "#FFF", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                Call {BUSINESS.telephoneDisplay}
              </a>
            </div>
          </div>

          {/* Helpful internal links */}
          <p className="font-light mt-10 mb-0" style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)" }}>
            More: <Link href="/compare" style={{ color: ACCENT }}>all wheat pasting company comparisons</Link>{" · "}
            <Link href="/pricing" style={{ color: ACCENT }}>pricing</Link>{" · "}
            <Link href="/work" style={{ color: ACCENT }}>recent campaigns</Link>
            {". "}
            Facts on {data.competitorName} verified {data.verified} from{" "}
            <a href={data.sourceUrl} target="_blank" rel="nofollow noopener noreferrer" style={{ color: "rgba(0,0,0,0.55)" }}>
              their site
            </a>.
          </p>
        </article>

        <SiteFooter />
      </div>
    </>
  );
}
