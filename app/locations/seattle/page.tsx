import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Seattle",
  description:
    "Wheat pasting in Seattle — poster campaigns across Capitol Hill, Ballard, Fremont, Pioneer Square, Belltown, U District. PVA-reinforced for rain.",
  keywords: [
    "wheat pasting Seattle",
    "Seattle poster campaigns",
    "Seattle guerrilla marketing",
    "Seattle street media",
    "Seattle street postering",
    "Seattle flyposting",
    "Seattle OOH advertising",
    "Capitol Hill wheat pasting",
    "Ballard poster campaigns",
    "Fremont street advertising",
    "Pioneer Square guerrilla marketing",
    "Belltown OOH",
    ...cityBuyerIntent("Seattle"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/seattle" },
  openGraph: {
    title: "Wheat Pasting Seattle",
    description: "Large-format wheat paste campaigns across Seattle. Capitol Hill, Ballard, Fremont, Pioneer Square.",
    url: "https://www.phantompasting.com/locations/seattle",
    images: [{ url: "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", width: 1200, height: 630, alt: "Wheat paste campaign in Seattle" }],
  },
};

const data: CityPageData = {
  city: "Seattle",
  state: "WA",
  slug: "seattle",
  heroWord: "SEATTLE",
  intro:
    "Seattle's Capitol Hill arts density, Ballard's young-professional walkability, Fremont's quirky cultural identity, and Pioneer Square's tourism foot traffic make for one of the country's strongest Pacific Northwest street markets. We use PVA-reinforced paste for rain durability and route campaigns around the wettest weeks.",
  whyTitle: "SEATTLE LIVES\nON ITS STREETS.",
  whyText:
    "Seattle is the Pacific Northwest's anchor — Capitol Hill is one of the densest creative-class neighborhoods on the West Coast, Ballard's foot traffic peaks year-round, Fremont's cultural identity is built on quirky public art that wheat paste fits inside. Pioneer Square's tourism + sports-game foot traffic adds downtown volume. UW's 50K+ undergrad density anchors the U District. Seattle campaigns deliver tech-audience reach unlike any other US market.",
  neighborhoods: [
    { name: "Capitol Hill", desc: "Pike-Pine corridor, 12th Avenue. Densest creative-class neighborhood in the Pacific Northwest." },
    { name: "Ballard", desc: "Ballard Avenue NW, Old Ballard. Walkable retail strip + young-professional density." },
    { name: "Fremont", desc: "Fremont Center, 36th Street. Quirky cultural identity + walkable creative core." },
    { name: "Pioneer Square", desc: "1st Ave South, downtown core. Tourism + sports-game-day foot traffic + arts-gallery density." },
    { name: "Belltown", desc: "1st + 2nd Avenue corridor. Downtown nightlife district + Space Needle-adjacent foot traffic." },
    { name: "U District", desc: "University Way, The Ave, UW campus zone. 50K+ UW undergrad density during academic year." },
  ],
  heroImage1: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Wheat paste pole wrap in Seattle at night" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Seattle street intersection" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Pacific Northwest Spotlight",
    title: "PVA-REINFORCED FOR THE WET WINTERS",
    body:
      "Seattle's rain is the operational variable. We use a PVA-reinforced paste formula for all PNW installs that holds 6-8 weeks even through wet seasons — vs 3-4 weeks for standard paste in the same conditions. Driest months are July-September; we time critical campaigns to those windows when possible. The medium is also called wild posting, flyposting, or street postering depending on the audience; wheat pasting names the actual material we use.",
    links: [
      { label: "Washington State Page", href: "/locations/washington" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Seattle Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Seattle?", a: "Yes on owner-authorized walls. Seattle is highly permissive on private walls with property-owner consent — the city's tolerance for street art makes wheat paste land naturally. Pioneer Square historic district needs permits; we handle them." },
    { q: "How does Seattle rain affect campaigns?", a: "We use PVA-reinforced paste that holds 6-8 weeks even through wet seasons. Driest months (July-September) are the safest windows; budget-priced campaigns time to those months when possible. Standard paste wash-off risk is real — we don't use it for Seattle." },
    { q: "How much does a Seattle wheat pasting campaign cost?", a: "Single-neighborhood test: $3,200-$4,800 for 60-90 posters. Full-city activation across 4-5 districts: $11K-$18K. Combined Seattle + Portland Pacific Northwest briefs run $18K-$32K." },
    { q: "What Seattle neighborhoods work best?", a: "Capitol Hill (Pike-Pine), Ballard (Ballard Ave), Fremont, Pioneer Square, Belltown, and U District during academic year. South Lake Union for tech-corporate audience reach." },
    { q: "Can you handle Pacific Northwest corridor deployments?", a: "Yes. Seattle + Portland + Vancouver WA is a natural PNW brand corridor — same crew rotation handles all three metros on coordinated rollouts. Common configuration: Seattle + Portland over a single launch week." },
  ],
  localBusiness: {
    name: "Phantom Pasting — Seattle",
    description: "Wheat pasting and poster campaign services in Seattle, WA. Street postering across Capitol Hill, Ballard, Fremont, Pioneer Square.",
    url: "https://www.phantompasting.com/locations/seattle",
  },
};

export default function SeattlePage() {
  return <CityPageTemplate data={data} />;
}
