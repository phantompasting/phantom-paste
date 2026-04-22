"use client";

import { useEffect, useState } from "react";

const ACCENT = "#D4A010";
const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";

type TocItem = { id: string; text: string };

/**
 * BlogTableOfContents — on-brand sidebar TOC for long-form posts.
 *
 * Visual language (matches the site's design system):
 *   • Numbered items (01, 02…) — same convention used on /services and /work
 *   • Glass-morph card shell — rgba white + backdrop-blur, gold 1-px border accent
 *   • Vertical progress rail — hairline gold line on the left whose fill
 *     advances with the reader's current section index (past / active / future)
 *   • Counter "03 / 07" in the header — quick wayfinding without expanding layout
 *   • EXPO cubic-bezier transitions (0.16, 1, 0.3, 1) site-wide
 *
 * Behaviour (unchanged from the prior version):
 *   1. On mount, scan the nearest `article.blog-prose` for h2 headings
 *   2. Slugify the text, assign it as the heading id, set scroll-margin-top
 *   3. Observe each heading via IntersectionObserver to track `activeIndex`
 *   4. If there are fewer than 2 headings, render nothing (a TOC needs options)
 */
export default function BlogTableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>("article.blog-prose");
    if (!article) return;

    const headings = Array.from(
      article.querySelectorAll<HTMLHeadingElement>("h2")
    );
    const list: TocItem[] = headings.map((h) => {
      const text = h.textContent?.trim() ?? "";
      const id =
        h.id ||
        text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "");
      if (!h.id) h.id = id;
      // scroll-margin-top so anchor jumps don't hide under the sticky nav
      h.style.scrollMarginTop = "96px";
      return { id, text };
    });
    setItems(list);

    if (list.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = headings.findIndex((h) => h === entry.target);
            if (idx >= 0) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  // Fewer than 2 sections → nothing to navigate between; omit the widget.
  if (items.length < 2) return null;

  const total = items.length;
  const progressPct = ((activeIndex + 1) / total) * 100;
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.45)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.7)",
        padding: "1.2rem 1.35rem 1.35rem",
        boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
      }}
    >
      {/* Header: label + section counter */}
      <div className="flex items-baseline justify-between mb-4">
        <div
          className="font-mono uppercase inline-flex items-center gap-2"
          style={{
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "rgba(0,0,0,0.55)",
            fontWeight: 700,
          }}
        >
          <span
            className="block w-1.5 h-1.5 rounded-full"
            style={{ background: ACCENT }}
          />
          In This Guide
        </div>
        <div
          className="font-mono tabular-nums"
          style={{
            fontSize: "10px",
            letterSpacing: "0.18em",
            color: "rgba(0,0,0,0.40)",
            fontWeight: 500,
          }}
          aria-hidden
        >
          <span style={{ color: ACCENT, fontWeight: 700 }}>
            {pad(activeIndex + 1)}
          </span>
          <span style={{ margin: "0 4px" }}>/</span>
          <span>{pad(total)}</span>
        </div>
      </div>

      {/* Track with progress rail + items */}
      <div className="relative">
        {/* Full-height hairline track */}
        <span
          aria-hidden
          className="absolute left-[10px] top-1 bottom-1 w-px"
          style={{ background: "rgba(0,0,0,0.08)" }}
        />
        {/* Gold progress fill — grows with active index */}
        <span
          aria-hidden
          className="absolute left-[10px] top-1 w-px"
          style={{
            background: `linear-gradient(180deg, ${ACCENT} 0%, rgba(212,160,16,0.25) 100%)`,
            height: `calc(${progressPct}% - 4px)`,
            transition: `height 0.6s ${EXPO}`,
            boxShadow: `0 0 6px rgba(212,160,16,0.35)`,
          }}
        />

        <ul className="list-none m-0 p-0 flex flex-col gap-0.5 pl-0">
          {items.map(({ id, text }, i) => {
            const isActive = activeIndex === i;
            const isPast = i < activeIndex;
            return (
              <li key={id} className="m-0 p-0">
                <a
                  href={`#${id}`}
                  className="toc-item group flex items-start gap-3 no-underline rounded-lg"
                  data-active={isActive || undefined}
                  style={{
                    padding: "6px 8px 6px 0",
                    paddingLeft: "2px",
                    transition: `transform 0.45s ${EXPO}, background 0.25s ease`,
                  }}
                >
                  {/* Numbered index — gold if active/past, muted if future */}
                  <span
                    className="font-mono tabular-nums flex-shrink-0 inline-flex items-center justify-center"
                    style={{
                      width: 22,
                      fontSize: "10px",
                      letterSpacing: "0.05em",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive
                        ? ACCENT
                        : isPast
                          ? "rgba(212,160,16,0.55)"
                          : "rgba(0,0,0,0.32)",
                      transition: `color 0.35s ${EXPO}`,
                      paddingTop: 2,
                    }}
                    aria-hidden
                  >
                    {pad(i + 1)}
                  </span>

                  {/* Heading text */}
                  <span
                    className="flex-1"
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.45,
                      fontWeight: isActive ? 700 : 400,
                      color: isActive
                        ? "#1A1A1A"
                        : isPast
                          ? "rgba(0,0,0,0.75)"
                          : "rgba(0,0,0,0.58)",
                      transition: `color 0.35s ${EXPO}, font-weight 0.35s ${EXPO}`,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {text}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Component-scoped hover + active styles. Declared once here so the JSX
          doesn't juggle onMouseEnter/Leave handlers per item. */}
      <style>{`
        .toc-item:hover {
          background: rgba(212,160,16,0.06);
          transform: translateX(2px);
        }
        .toc-item[data-active] {
          background: linear-gradient(
            90deg,
            rgba(212,160,16,0.10) 0%,
            rgba(212,160,16,0.02) 100%
          );
        }
      `}</style>
    </nav>
  );
}
