import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting NYC",
  description:
    "Wheat pasting in NYC — poster campaigns across the Lower East Side, Williamsburg, SoHo, Bushwick, East Village. Large-format street posters.",
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
    "NYC flyposting",
    "NYC OOH advertising",
    "Williamsburg wheat pasting",
    "SoHo poster campaigns",
    "Bushwick street advertising",
    "DUMBO guerrilla marketing",
    "Manhattan scaffold wraps",
    ...cityBuyerIntent("New York"),
    ...cityBuyerIntent("NYC"),
    ...cityBuyerIntent("Brooklyn"),
    ...KW_CITY_BASE,
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
  intro: "New York City is the birthplace of wheat pasting culture. More foot traffic per block than anywhere in the country. We hit the Lower East Side, Brooklyn, SoHo, Williamsburg, and every high-density neighborhood in between. Phantom Pasting has executed wheat paste and guerrilla campaigns for national brands across New York's streets.",
  whyTitle: "NYC IS WHERE\nIT STARTED.",
  whyText: "New York has the highest pedestrian density in the US — millions of daily commuters, tourists, and residents who experience the city on foot. A wheat paste poster in Williamsburg or SoHo isn't just advertising — it's part of the visual fabric of the street. NYC campaigns generate organic social shares at a rate no other city can match.",
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
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at NYC street intersection" },
  lastUpdated: "2026-04-25",
  pricingTiers: [
    { tier: "Single-Neighborhood Test", range: "$4,200 – $6,800", includes: "80–120 posters · 1 NYC neighborhood · Photo doc + GPS-logged install" },
    { tier: "Manhattan + Brooklyn", range: "$14K – $22K", includes: "Two-crew split · LES + Williamsburg most common · Multi-design rotation" },
    { tier: "Scaffold Wraps (per wrap)", range: "$2K – $8K", includes: "DOB permit + install · 3–4 week lead time · Manhattan-specific premium format" },
  ],
  faqs: [
    { q: "Is wheat pasting legal in NYC?", a: "On owner-authorized private walls, yes — with zero enforcement concern. Scaffold wraps require DOB permits and owner consent. NYC Administrative Code §10-117 covers public-property unlawful posting but is rarely enforced on clean commercial campaigns with property-owner consent." },
    { q: "Which NYC neighborhoods work best for wheat pasting?", a: "Lower East Side, Williamsburg (Bedford Ave), SoHo (Lafayette + Mercer), Bushwick, East Village, Chelsea/Meatpacking, Greenpoint, DUMBO. Midtown is a scaffold-wrap market, not a standard paste play." },
    { q: "How much does a NYC wheat pasting campaign cost?", a: "Single-neighborhood test: $4,200-$6,800 for 80-120 posters. Full Manhattan + Brooklyn activation with two crews: $14K-$22K. Scaffold wraps run $2K-$8K each on top. LES + Williamsburg combinations are the most common configuration." },
    { q: "Can you handle scaffold wraps in NYC?", a: "Yes. Scaffold wraps are a Manhattan-specific premium format — $2K-$8K per wrap, DOB permit required, 3-4 week lead time. Different production path than paste; we manage permits + install + photo documentation." },
    { q: "What's different about NYC installs?", a: "We split crews by borough — one Manhattan, one Brooklyn. Documentation windows are tight (7-9 a.m. Sunday for SoHo walls). Summer humidity shortens poster life to 3-4 weeks; we use PVA-reinforced paste for May-September installs." },
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
