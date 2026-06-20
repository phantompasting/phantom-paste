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
    a: "Wheat pasting campaigns run $5,000–$13,500 per city for a standard 150–250 poster rollout. Per-poster all-in cost lands at $33–$55 installed. Multi-city national rollouts run $45K–$90K with volume discounts. See our pricing page for full breakdown by tier and format.",
  },
  {
    q: "Do you need a permit to wheatpaste?",
    a: "Most wheat paste installations on owner-authorized private walls don't require permits — owner consent is the legal standard. Permits are needed for scaffold wraps in NYC (DOB), historic-district walls in Miami Wynwood, and some Pioneer Square locations in Seattle. We handle all required permits.",
  },
  // ── "Wild posting" keyword coverage (added 2026-06-20) ──────────────────
  // "Wild posting" is a high-intent synonym for wheat pasting / flyposting
  // that the site ranks for almost nothing on (per GSC). These schema-only
  // FAQs answer the definitional, how-it-works, effectiveness, and
  // positioning queries people type for that exact term — the gaps not
  // already covered under the "wheat pasting" phrasing above.
  {
    q: "What is wild posting?",
    a: "Wild posting is a guerrilla advertising format where printed posters are installed across high-traffic urban surfaces — construction barricades, plywood hoarding, and authorized street-level walls — for maximum pedestrian visibility. Also called wheat pasting or flyposting, it's used by fashion, music, film, and culture brands to saturate walkable neighborhoods at a fraction of billboard cost.",
  },
  {
    q: "How does wild posting work?",
    a: "Phantom Pasting sources owner-authorized walls in your target neighborhoods, prints your artwork, and installs posters with wheat paste — a flour-based adhesive that bonds to brick, plywood, and concrete. Posters go up in clustered runs for saturation, then we deliver timestamped, geo-tagged photo documentation of every hit. Rush campaigns launch in 5–7 business days.",
  },
  {
    q: "How effective is wild posting?",
    a: "Wild posting delivers in-person CPMs of $0.10–$0.30 versus $4–$15 for traditional out-of-home media. Posters in dense pedestrian corridors get photographed and shared, extending reach onto social. It performs best for streetwear, music, film, and culture-driven brands targeting walkable urban neighborhoods where the audience is on foot, not behind a windshield.",
  },
  {
    q: "What brands use wild posting?",
    a: "Wild posting is used by streetwear and fashion labels, record labels and touring artists, film and TV studios, tech startups, event promoters, bars, restaurants, and nonprofits. Any brand wanting a credible street-level presence in culture-forward neighborhoods — from global names to indie launches — fits the format. Phantom Pasting runs campaigns at every budget.",
  },
  {
    q: "Is wild posting the same as a billboard?",
    a: "No. A billboard is a single large placement bought from a media owner at $4–$15 CPM; wild posting saturates a neighborhood with many street-level posters at $0.10–$0.30 CPM. Billboards reach drivers from a distance — wild posting reaches pedestrians up close, where posters get photographed and shared. The formats serve different goals and budgets.",
  },
  // ── "Wheat pasting" gap-fill (added 2026-06-20) ─────────────────────────
  // "Wheat pasting" is already saturated sitewide (~147 FAQs cover cost,
  // legality, duration, removal, DIY, etc.). These four answer the only
  // genuine, buyer/property-owner-relevant gaps no existing FAQ touched:
  // sustainability, wall-damage objection, drying time, and toxicity.
  {
    q: "Is wheat paste eco-friendly?",
    a: "Yes. Traditional wheat paste is just wheat flour, water, and sometimes sugar — biodegradable, non-toxic, and free of the solvents used in vinyl or plastic signage. Posters are printed on paper, so the whole installation breaks down naturally and washes off without permanent residue, making it one of the lower-impact out-of-home advertising formats.",
  },
  {
    q: "Does wheat pasting damage walls or buildings?",
    a: "No. Wheat paste is a water-soluble flour adhesive that sits on the surface — it doesn't penetrate or stain brick, concrete, or plywood. Posters weather off naturally or peel away with water, leaving the wall intact. Phantom Pasting installs only on owner-authorized surfaces and can remove posters cleanly on request.",
  },
  {
    q: "How long does wheat paste take to dry?",
    a: "A freshly pasted poster is touch-dry within 30–60 minutes and fully cured in 2–4 hours, depending on temperature and humidity. Once cured, the bond is weather-resistant and holds for weeks. Cold or damp conditions slow drying; dry, mild weather sets fastest, which is why installers favor daytime application.",
  },
  {
    q: "Is wheat paste toxic?",
    a: "No. Wheat paste is made from wheat flour and water — non-toxic, solvent-free, and safe to handle without protective gear. It's the same basic adhesive used in bookbinding and conservation for centuries, which makes it suitable for both exterior walls and interior installations where chemical adhesives or fumes would be a concern.",
  },
  // ── "Guerrilla marketing" general-term gap-fill (added 2026-06-20) ───────
  // Site already covers what-it-is / cost / effectiveness / vs-traditional.
  // These five answer the high-volume informational queries not yet covered:
  // types, examples, origin, pros-and-cons, and general-term legality.
  {
    q: "What are the types of guerrilla marketing?",
    a: "Guerrilla marketing spans several formats: ambient (brand messages in unexpected physical spots), experiential (live interactive activations), ambush (hijacking attention at an event you didn't sponsor), and stealth/buzz (seeding word-of-mouth) — plus street-level formats like wheat paste posters, stickers, and chalk stencils. Phantom Pasting specializes in the outdoor street-level category.",
  },
  {
    q: "What are some examples of guerrilla marketing?",
    a: "Classic guerrilla marketing includes street takeovers like wheat paste poster walls, sidewalk chalk stencils, projection bombing, flash mobs, and experiential pop-ups. In practice it's any high-impact, low-cost tactic that surprises people in public space — for Phantom Pasting, saturating a neighborhood's walls until a brand is unavoidable to foot traffic.",
  },
  {
    q: "Who invented guerrilla marketing, and why is it called that?",
    a: "The term was coined by Jay Conrad Levinson in his 1984 book Guerrilla Marketing. It borrows from guerrilla warfare — small, agile, unconventional tactics that win through surprise and creativity rather than brute spending. The idea: out-think bigger advertisers instead of trying to outspend them.",
  },
  {
    q: "What are the pros and cons of guerrilla marketing?",
    a: "Pros: low cost, high memorability, shareable moments, and outsized reach when a campaign catches on. Cons: outcomes are harder to predict than paid media, and poorly planned stunts can misfire or hit permit issues. Working with an experienced installer on owner-authorized walls keeps the upside without the risk.",
  },
  {
    q: "Is guerrilla marketing legal?",
    a: "Guerrilla marketing is legal when done on authorized surfaces with property-owner or permit consent. The tactics themselves — posters, stencils, activations — are lawful; issues only arise from unauthorized placement without permission. Phantom Pasting operates only on owner-authorized walls and handles any required permits.",
  },
] as const;
