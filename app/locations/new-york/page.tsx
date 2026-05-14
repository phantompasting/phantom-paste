import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent, KW_CITY_PARENT_OVERLAY } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting NYC | LES + Brooklyn Poster Campaigns" },
  description:
    "Wheat pasting in NYC — LES, Williamsburg, SoHo, Bushwick, DUMBO, plus DOB-permitted Manhattan scaffold-wrap programs across all five boroughs since 2014.",
  keywords: [
    "wheat pasting NYC",
    "NYC poster campaigns",
    "NYC guerrilla marketing",
    "street postering New York",
    "wheat paste posters Brooklyn",
    "Lower East Side wheat pasting",
    "LES poster campaigns",
    "Lower East Side street advertising",
    "NYC street media",
    "NYC street marketing agency",
    "street marketing nyc",
    "street marketing new york",
    "nyc street marketing",
    "new york street marketing",
    "street marketing nyc cost",
    "street marketing agency nyc",
    "what is street marketing",
    "street marketing examples nyc",
    "NYC flyposting",
    "NYC OOH advertising",
    "Williamsburg wheat pasting",
    "SoHo poster campaigns",
    "Bushwick street advertising",
    "DUMBO guerrilla marketing",
    "Manhattan scaffold wraps",
    "NYC experiential marketing",
    "NYC ambient advertising",
    "NYC stunt marketing",
    "NYC viral marketing campaigns",
    "guerrilla marketing examples NYC",
    "NYC pop-up activation marketing",
    // Brooklyn-specific buyer-intent additions (May 8 — captures
    // "wild posting brooklyn cost" / "brooklyn outdoor company" /
    // "wheatpasting brooklyn near me" without creating a separate
    // /locations/brooklyn page that would cannibalize this URL).
    "wheat pasting Brooklyn",
    "Brooklyn poster campaigns",
    "Brooklyn outdoor advertising",
    "Brooklyn wheatpasting",
    "Brooklyn flyposting agency",
    "Brooklyn street media",
    "Williamsburg poster advertising",
    "Bushwick wheat pasting",
    "Brooklyn OOH advertising cost",
    "wild posting Brooklyn",
    "wheatpasting Brooklyn cost",
    ...cityBuyerIntent("New York"),
    ...cityBuyerIntent("NYC"),
    ...cityBuyerIntent("Brooklyn"),
    ...KW_CITY_BASE,
    ...KW_CITY_PARENT_OVERLAY,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/new-york" },
  openGraph: {
    title: "Wheat Pasting NYC",
    description: "Large-format wheat paste poster campaigns across NYC. LES, Brooklyn, SoHo, Williamsburg.",
    url: "https://www.phantompasting.com/locations/new-york",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",
        width: 1200,
        height: 630,
        alt: "Guerrilla marketing campaign in New York City — urban street advertising",
      },
    ],
  },
};

const data: CityPageData = {
  city: "New York",
  state: "NY",
  slug: "new-york",
  heroWord: "NEW YORK",
  intro: "New York City is the birthplace of wheat pasting culture — the original guerrilla marketing format that taught every other city how to do street media. More foot traffic per block than anywhere in the country. We hit the Lower East Side, Brooklyn, SoHo, Williamsburg, and every high-density neighborhood in between with wheat paste, scaffold wraps, snipes, and chalk stencils. Phantom Pasting runs the full street marketing NYC stack — paste walls, viral marketing campaigns, scaffold-wrap programs across Manhattan with full DOB permitting, and pop-up activation marketing for national brands across all five boroughs. If your brief uses 'street marketing,' 'street media,' or 'guerrilla advertising' interchangeably, the underlying execution is the same: large-format physical campaigns installed on the city's actual surfaces.",
  whyTitle: "NYC IS WHERE\nIT STARTED.",
  whyText: "New York has the highest pedestrian density in the US — millions of daily commuters, tourists, and residents who experience the city on foot. A wheat paste poster in Williamsburg or SoHo isn't just advertising — it's experiential marketing in its purest form, part of the visual fabric of the street. NYC campaigns generate organic social shares at a rate no other city can match: every one of our LES walls becomes its own viral marketing surface within 48 hours of install. Scaffold wraps are the Manhattan-specific premium format — $2K-$8K per wrap, 3–4 week DOB permit lead time, and the highest impression-density placement of any OOH format in the city.",
  neighborhoods: [
    {
      name: "Lower East Side",
      desc: "The LES is NYC's wheat-paste heartland — Bowery, Rivington, Ludlow, Stanton, and Orchard carry dense gallery foot traffic from afternoon through 2 a.m. Prime walls turn over fast; we lock placements 2 weeks ahead during peak season.",
    },
    { name: "Williamsburg", desc: "Brooklyn's creative hub. Bedford Ave to the waterfront — high engagement from a young, culture-forward audience." },
    { name: "SoHo", desc: "Luxury retail meets street culture. Tourist foot traffic + fashion-forward locals." },
    { name: "Bushwick", desc: "Street art capital of Brooklyn. Walls here are part of the culture — your poster belongs." },
    { name: "East Village", desc: "Music, food, and counterculture. Dense walkability and a legacy of street-level advertising." },
    { name: "Chelsea / Meatpacking", desc: "Gallery district meets nightlife. High foot traffic from the High Line and Hudson Yards." },
    { name: "Greenpoint", desc: "Industrial-chic Brooklyn. Manhattan Ave retail strip plus growing creative-class density along Franklin St." },
    { name: "DUMBO", desc: "Pebbled streets, gallery walls, and cinematic backgrounds. Tourist + local foot traffic with high social-share potential." },
  ],
  heroStats: [
    { stat: "8", label: "Neighborhoods" },
    { stat: "5", label: "Boroughs Active" },
    { stat: "DOB", label: "Permitted Wraps" },
  ],
  heroImage1: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Guerrilla advertising pole wrap campaign at night in New York" },
  heroImage2: { src: "/gallery/bedstuy-stencil.webp", alt: "Guerrilla marketing stencil campaign Bed-Stuy Brooklyn New York" },
  lastUpdated: "2026-05-14",
  pricingTiers: [
    { tier: "Single-Neighborhood Test", range: "$4,500 – $8,500", includes: "80–120 posters · 1 NYC neighborhood · Photo doc + GPS-logged install" },
    { tier: "Manhattan + Brooklyn", range: "$15K – $25K", includes: "Two-crew split · LES + Williamsburg most common · Multi-design rotation" },
    { tier: "Scaffold Wraps (per wrap)", range: "$2K – $8K", includes: "DOB permit + install · 3–4 week lead time · Manhattan-specific premium format" },
  ],
  faqs: [
    { q: "Is wheat pasting legal in NYC?", a: "On owner-authorized private walls, yes — with zero enforcement concern. Scaffold wraps require DOB permits and owner consent. NYC Administrative Code §10-119 covers public-property unlawful posting but is rarely enforced on clean commercial campaigns with property-owner consent." },
    { q: "Which NYC neighborhoods work best for wheat pasting?", a: "Lower East Side, Williamsburg (Bedford Ave), SoHo (Lafayette + Mercer), Bushwick, East Village, Chelsea/Meatpacking, Greenpoint, DUMBO. Midtown is a scaffold-wrap market, not a standard paste play." },
    { q: "How much does a NYC wheat pasting campaign cost?", a: "Single-neighborhood test: $4,500-$8,500 for 80-120 posters. Full Manhattan + Brooklyn activation with two crews: $15K-$25K. Scaffold wraps run $2K-$8K each on top. LES + Williamsburg combinations are the most common configuration." },
    { q: "How much does wheat pasting cost in Brooklyn?", a: "Brooklyn-only campaigns run $4,200-$7,500 for 80-150 posters across Williamsburg, Bushwick, Greenpoint, or DUMBO. Brooklyn wall rights average 15-20% lower than Manhattan equivalents. Combined Williamsburg + Bushwick activations are the most-booked Brooklyn configuration. Wild posting and flyposting in Brooklyn use the same pricing — the terminology changes but the per-poster math doesn't." },
    { q: "Do you serve Brooklyn outdoor advertising specifically?", a: "Yes. Brooklyn is one of our most-active boroughs — Williamsburg's Bedford Ave corridor, Bushwick's Flushing Ave, Greenpoint's Manhattan Ave, and DUMBO's gallery district all carry their own dense walkable foot-traffic profiles. We run Brooklyn-only campaigns or combined Manhattan + Brooklyn activations from the same crew rotation." },
    { q: "What is street marketing in NYC?", a: "Street marketing in NYC is brand advertising placed directly on the city's walls, sidewalks, scaffolding, and street furniture rather than billboards or digital screens — wheat-paste posters, snipes, pole wraps, chalk stencils, scaffold wraps, and sticker campaigns. It works in New York because pedestrian density turns every wall into an audience surface seen on foot, not from a car." },
    { q: "How much does street marketing cost in NYC?", a: "Single-neighborhood NYC street-marketing tests run $4,500-$8,500 for 80-120 paste posters. Combined Manhattan + Brooklyn campaigns run $15K-$25K for two-crew installs covering 4-6 neighborhoods. Scaffold wraps run $2K-$8K each on top of paste budgets, with a 3-4 week DOB permit lead time. Multi-format saturation campaigns (paste + snipes + stencils) start at $22K." },
    { q: "Where in NYC is street marketing most effective?", a: "Lower East Side, SoHo, Williamsburg, Bushwick, Greenpoint, DUMBO, East Village, and Chelsea/Meatpacking carry the highest pedestrian-density-to-wall ratios. LES + Williamsburg is the most-booked configuration. Midtown shifts from paste to scaffold wraps. Tourist-heavy zones (Times Square, SoHo retail strip) work for tourist-targeted brands; cultural zones (LES, Bushwick) work for streetwear, music, and DTC." },
    { q: "Can you handle scaffold wraps in NYC?", a: "Yes. Scaffold wraps are a Manhattan-specific premium format — $2K-$8K per wrap, DOB permit required, 3-4 week lead time. Different production path than paste; we manage permits + install + photo documentation." },
    { q: "How long do wheat paste posters last in NYC?", a: "3–4 weeks in summer (heat and humidity accelerate fade); 5–8 weeks in fall and spring. SoHo and LES walls under overhangs hold 8–10 weeks. We use PVA-reinforced paste for May–September installs to extend lifespan. Brooklyn and Williamsburg walls run 4–6 weeks average." },
  ],
  spotlight: {
    eyebrow: "Lower East Side · Spotlight",
    title: "WHY THE LES OUTPERFORMS EVERY OTHER NYC NEIGHBORHOOD",
    body:
      "The Lower East Side is NYC's densest concentration of culture-forward foot traffic — gallery openings on Orchard, music venues on Ludlow, fashion buyers on Bowery, and a 2 a.m. nightlife layer that recycles the same audience past your wall three times in one evening. Wall placements here generate 2–3× the social-share rate of comparable Williamsburg or SoHo placements because the LES audience is wired to document and post what they see. We hold long-standing relationships with property owners along Rivington, Stanton, and Ludlow that competitors can't replicate cold. For descriptive context: this medium is also called wild posting, flyposting, or street postering — wheat pasting names the actual material. LES placements typically book 2 weeks ahead of install during peak season (Sept–Nov, Mar–May).",
    links: [
      { label: "See an NYC Campaign", href: "/work/incrediwear-street-campaign" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get an LES Quote", href: "/contact" },
    ],
  },
  // Service schema base — CityPageTemplate enriches with @type, provider,
  // areaServed, and offers. Field stays named `localBusiness` for type
  // compat with the shared template interface.
  localBusiness: {
    name: "Phantom Pasting — New York City",
    description: "Wheat pasting and poster campaign services in New York City. Street postering across LES, Brooklyn, SoHo, and Williamsburg.",
    url: "https://www.phantompasting.com/locations/new-york",
  },
};

export default function NewYorkPage() {
  return <CityPageTemplate data={data} />;
}
