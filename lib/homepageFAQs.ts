/**
 * HOMEPAGE_FAQS — emitted as FAQPage JSON-LD on the homepage.
 *
 * The first 6 entries are evergreen brand FAQs. The next 5 (added 2026-05-08)
 * are People-Also-Ask questions surfaced from intent.json — each pairs a
 * common buyer query with a 40-60 word answer formatted for AI Overview
 * pickup (Google SGE, Perplexity, ChatGPT search). PAA questions are
 * the highest-leverage source of FAQ content because Google explicitly
 * tracks them as "real questions real users ask," and concise answers
 * become candidates for both featured snippets AND AI Overview citations.
 */
export const HOMEPAGE_FAQS = [
  {
    q: "What makes guerrilla marketing more effective than traditional advertising?",
    a: "Traditional ads are scrolled past, muted, or ignored. Our campaigns live at street level — genuine surprise moments that get photographed, shared, and talked about. You can't DVR a poster on your block.",
  },
  {
    q: "How quickly can you launch a campaign?",
    a: "Rush campaigns in as little as 5–7 business days from artwork approval. Standard campaigns take 2–3 weeks. We'll always confirm the realistic timeline upfront.",
  },
  {
    q: "Do you cover cities outside of New York?",
    a: "Every city in the US. 50+ markets nationwide — New York to LA, Miami to Seattle, Austin to Chicago. Name a city, we can hit it. We also operate internationally.",
  },
  {
    q: "What poster and stencil sizes do you offer?",
    a: "Wheat paste from 24\"×36\" up to jumbo 48\"×72\" wall takeovers. Chalk spray stencils from 6\"×60\" strips to 48\"×48\" floor installations.",
  },
  {
    q: "How do I know exactly where my campaign ran?",
    a: "Full photo documentation from every hit — timestamped, geo-tagged, formatted into a clean campaign report. Doubles as ready-made social content.",
  },
  {
    q: "What kind of brands work with Phantom Pasting?",
    a: "Global names to indie streetwear labels, tech startups, event promoters, bars, restaurants, artists, nonprofits. Any scale, any budget.",
  },
  // ── People-Also-Ask additions (intent.json raw_paa, May 2026) ───────────
  {
    q: "Are posters a good way to advertise?",
    a: "Posters are highly effective in dense pedestrian neighborhoods — wheat paste posters generate $0.10–$0.30 in-person CPM versus $4–$15 for traditional out-of-home media. The format works best for streetwear, music, film, and culture-driven brands targeting walkable urban corridors.",
  },
  {
    q: "Are wheat paste posters illegal?",
    a: "Wheat paste posters are legal on owner-authorized private walls in every major US city. Cities have unlawful posting ordinances for unauthorized public placement, but commercial campaigns operating with property-owner consent fall outside enforcement. Phantom Pasting only installs on authorized walls.",
  },
  {
    q: "How long do wheat paste posters last?",
    a: "Wheat paste posters typically last 4–8 weeks outdoors depending on wall surface, weather, and sun exposure. LA and Phoenix can hold 6–10 weeks; Miami and NYC average 3–5 weeks due to humidity and rain. Shaded brick walls under overhangs can hold 12+ weeks.",
  },
  {
    q: "How much does wheat pasting cost?",
    a: "Wheat pasting campaigns run $3,500–$9,500 per city for a standard 150–250 poster rollout. Per-poster all-in cost lands at $12–$22 installed. Multi-city national rollouts run $45K–$90K with volume discounts. See our pricing page for full breakdown by tier and format.",
  },
  {
    q: "Do you need a permit to wheatpaste?",
    a: "Most wheat paste installations on owner-authorized private walls don't require permits — owner consent is the legal standard. Permits are needed for scaffold wraps in NYC (DOB), historic-district walls in Miami Wynwood, and some Pioneer Square locations in Seattle. We handle all required permits.",
  },
] as const;
