export const MARQUEE_ITEMS = [
  "WHEAT PASTING", "✦", "CHALK SPRAY STENCILS", "✦", "GUERRILLA MARKETING", "✦", "STREET ACTIVATIONS", "✦",
  "50+ US CITIES", "✦", "FULL DOCUMENTATION", "✦", "24HR RESPONSE", "✦", "CAMPAIGN STRATEGY", "✦",
];

export function TickerMarquee({ items, speed = 28 }: { items: string[]; speed?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="ticker-track flex whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}>
        {doubled.map((item, i) => (
          <span key={i} className="font-bold uppercase text-[10.5px] tracking-[0.32em] px-5"
            style={{ color: item === "✦" ? "rgba(184,150,15,0.5)" : "rgba(0,0,0,0.22)" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
