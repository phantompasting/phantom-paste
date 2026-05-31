export const MARQUEE_ITEMS = [
  "WHEAT PASTING", "✦", "CHALK SPRAY STENCILS", "✦", "GUERRILLA MARKETING", "✦", "STREET ACTIVATIONS", "✦",
  "50+ US CITIES", "✦", "FULL DOCUMENTATION", "✦", "24HR RESPONSE", "✦", "CAMPAIGN STRATEGY", "✦",
];

export function TickerMarquee({ items, speed = 28 }: { items: string[]; speed?: number }) {
  const doubled = [...items, ...items];
  return (
    // aria-hidden — the marquee is a purely decorative, continuously-scrolling
    // restatement of service keywords that already exist as real, crawlable
    // copy in StaticSEOSections. Hiding it from the accessibility tree (a) stops
    // screen readers announcing a duplicated, motion-driven word soup and (b)
    // exempts its intentionally-faint type from the color-contrast audit (axe
    // skips aria-hidden subtrees) without forcing the design to abandon the
    // subtle low-contrast ticker aesthetic.
    <div className="relative overflow-hidden py-2" aria-hidden="true"
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        // Isolates the marquee track's paints from the rest of the page —
        // the ambient canvas + scroll-reveal transforms elsewhere won't
        // invalidate this layer and force the ticker to re-rasterize.
        contain: "paint",
      }}>
      <div className="ticker-track flex whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}>
        {doubled.map((item, i) => (
          <span key={i} className="font-bold uppercase text-[12px] tracking-[0.32em] px-5"
            style={{ color: item === "✦" ? "rgba(184,150,15,0.5)" : "rgba(0,0,0,0.22)" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
