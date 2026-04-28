import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Atlanta",
  description:
    "Wheat pasting in Atlanta — poster campaigns across Midtown, Little Five Points, Buckhead, and East Atlanta. Large-format street posters. Get a quote.",
  keywords: [
    "wheat pasting Atlanta",
    "Atlanta poster campaigns",
    "Atlanta guerrilla marketing",
    "street postering Atlanta",
    "wheat paste posters GA",
    "Atlanta street media",
    "Atlanta street marketing agency",
    "Atlanta flyposting",
    "Atlanta OOH advertising",
    "Midtown Atlanta wheat pasting",
    "Little Five Points poster campaigns",
    "Buckhead street advertising",
    "East Atlanta Village guerrilla marketing",
    "Old Fourth Ward OOH",
    ...cityBuyerIntent("Atlanta"),
    ...cityBuyerIntent("ATL"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/atlanta" },
  openGraph: {
    title: "Wheat Pasting Atlanta",
    description: "Large-format wheat paste poster campaigns across Atlanta. Midtown, Little Five Points, Buckhead.",
    url: "https://www.phantompasting.com/locations/atlanta",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/fifa-world-cup-atlanta-wall-installation.webp",
        width: 1200,
        height: 630,
        alt: "Wheat paste wall installation in Atlanta — FIFA World Cup campaign",
      },
    ],
  },
};

const data: CityPageData = {
  city: "Atlanta",
  state: "GA",
  slug: "atlanta",
  heroWord: "ATLANTA",
  intro: "Atlanta is one of the fastest-growing cities in the US — and one of the best for street marketing. We deploy across Midtown, Little Five Points, Buckhead, and East Atlanta Village with large-format wheat paste posters and chalk stencils.",
  whyTitle: "ATLANTA\nIS GROWING.",
  whyText: "Atlanta is a hub for music, film, and culture — and it's growing fast. Little Five Points is the city's creative nerve center. Midtown draws young professionals and students. Buckhead has the spending power. Every major tour, album drop, and cultural event passes through ATL — and street marketing is how you make noise here.",
  neighborhoods: [
    { name: "Midtown", desc: "Arts and entertainment hub. Piedmont Park foot traffic, Georgia Tech students, and Peachtree Street density." },
    { name: "Little Five Points", desc: "Atlanta's creative district. Independent shops, music venues, and the most street-culture-native audience in the city." },
    { name: "Buckhead", desc: "Upscale shopping and nightlife. High spending power and dense foot traffic along Peachtree Rd." },
    { name: "East Atlanta Village", desc: "Emerging arts scene. Bars, music venues, and a tight community that engages with street-level content." },
    { name: "Old Fourth Ward", desc: "BeltLine adjacent. One of the most walkable corridors in the city with year-round foot traffic." },
    { name: "Decatur", desc: "Walkable downtown square. Festivals, restaurants, and a community that supports local and independent brands." },
  ],
  heroStats: [
    { stat: "FIFA", label: "World Cup Client" },
    { stat: "6", label: "Neighborhoods" },
    { stat: "Statewide", label: "GA Coverage" },
  ],
  heroImage1: { src: "/gallery/fifa-world-cup-atlanta-wall-installation.webp", alt: "FIFA World Cup wall installation in Atlanta" },
  heroImage2: { src: "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp", alt: "FIFA World Cup poster wall gallery in Atlanta" },
  lastUpdated: "2026-04-25",
  pricingTiers: [
    { tier: "Single-Neighborhood Test", range: "$2,800 – $4,200", includes: "60–90 posters · 1 ATL district · Photo doc + GPS-logged install" },
    { tier: "Full-City Activation", range: "$10K – $16K", includes: "Four to five Atlanta districts · Multi-design rotation · Daylight shots" },
    { tier: "Major-Event Saturation", range: "$18K – $35K", includes: "FIFA World Cup / Super Bowl / All-Star window · Multi-week refresh" },
  ],
  spotlight: {
    eyebrow: "ATL Spotlight",
    title: "FIFA WORLD CUP + STATEWIDE GA REACH",
    body:
      "Atlanta is the South's music + film + culture capital — every major tour, album drop, and sports moment passes through here. We've executed the FIFA World Cup wheat paste activation across Midtown, Little Five Points, and Old Fourth Ward, plus 100+ campaigns for music labels and DTC brands across L5P, East Atlanta Village, and the BeltLine corridor. The medium is also called wild posting, flyposting, or street postering depending on the audience; wheat pasting names the actual material we use. Atlanta-led campaigns can scale statewide on 48 hours' notice across Savannah, Athens, Augusta, Macon, and Columbus.",
    links: [
      { label: "FIFA World Cup Atlanta Case Study", href: "/work/fifa-world-cup-atlanta" },
      { label: "Georgia Statewide Page", href: "/locations/georgia" },
      { label: "Get an Atlanta Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Atlanta?", a: "Yes on owner-authorized walls. Atlanta is permissive on private walls with property-owner consent — the city's mural-friendly culture (especially Old Fourth Ward + Little Five Points) makes wheat paste land naturally. Historic-district walls need permits; we handle them." },
    { q: "What Atlanta neighborhoods work best for wheat pasting?", a: "Little Five Points for arts/cultural reach, Midtown for professional + Piedmont Park foot traffic, East Atlanta Village for indie-music audience, Buckhead for affluent retail, Old Fourth Ward for BeltLine-corridor density, Decatur for walkable retail." },
    { q: "How much does an Atlanta wheat pasting campaign cost?", a: "Single-neighborhood test: $2,800-$4,200 for 60-90 posters. Full-city activation across 4-5 districts: $10K-$16K. Major-event saturation (FIFA World Cup, Super Bowl, MLB All-Star) runs $18K-$35K depending on multi-week refresh." },
    { q: "When is the best time to run Atlanta campaigns?", a: "Year-round mild weather makes Atlanta consistently good for wheat paste. Music Midtown (September), AfroPunk, Atlanta Dogwood Festival (April), and major sports event windows (Falcons, Hawks, Braves) drive the highest event-window saturation." },
    { q: "Can you handle Georgia statewide rollouts from Atlanta?", a: "Yes. Atlanta + Savannah + Athens + Augusta + Macon + Columbus is a natural Georgia statewide configuration — same crew rotation handles all six markets on coordinated rollouts." },
  ],
  // Service schema base — CityPageTemplate enriches with @type, provider,
  // areaServed, and offers. Field stays named `localBusiness` for type
  // compat with the shared template interface.
  localBusiness: {
    name: "Phantom Pasting — Atlanta",
    description: "Wheat pasting and poster campaign services in Atlanta, GA. Street postering across Midtown, Little Five Points, Buckhead, and East Atlanta.",
    url: "https://www.phantompasting.com/locations/atlanta",
  },
};

export default function AtlantaPage() {
  return <CityPageTemplate data={data} />;
}
