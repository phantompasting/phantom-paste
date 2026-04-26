import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Houston",
  description:
    "Wheat pasting in Houston — poster campaigns across Montrose, Heights, Midtown, EaDo, Rice Village, Museum District. Largest TX metro coverage.",
  keywords: [
    "wheat pasting Houston",
    "Houston poster campaigns",
    "Houston guerrilla marketing",
    "Houston street media",
    "Houston street postering",
    "Houston flyposting",
    "Houston OOH advertising",
    "Montrose wheat pasting",
    "Heights Houston poster campaigns",
    "Midtown Houston street advertising",
    "EaDo guerrilla marketing",
    "Rice Village OOH",
    ...cityBuyerIntent("Houston"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/houston" },
  openGraph: {
    title: "Wheat Pasting Houston",
    description: "Large-format wheat paste campaigns across Houston. Montrose, Heights, Midtown, EaDo, Rice Village.",
    url: "https://www.phantompasting.com/locations/houston",
    images: [{ url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", width: 1200, height: 630, alt: "Wheat paste campaign in Houston" }],
  },
};

const data: CityPageData = {
  city: "Houston",
  state: "TX",
  slug: "houston",
  heroWord: "HOUSTON",
  intro:
    "Houston is the largest TX metro and one of the most under-served by national OOH agencies. Montrose's arts + LGBTQ+ density, Heights' walkable retail revival, Midtown's nightlife, EaDo's emerging warehouse-district scene, Rice Village's affluent retail, and the Museum District anchor the deployment map. Energy-industry + medical-center workforce + Rice University density round out the audience.",
  whyTitle: "HOUSTON IS\nUNDER-SERVED OPPORTUNITY.",
  whyText:
    "Houston's footprint is huge but its walkable creative cores are concentrated. Montrose has been Houston's bohemian arts district for 50+ years; the Heights is the city's hottest walkable revival neighborhood; EaDo's warehouse-to-loft conversions are creating a new arts corridor. Most national agencies treat Houston as a billboard market and skip street-level entirely — that's the opportunity. Wall-space competition is dramatically lower than LA or NYC at comparable foot-traffic densities.",
  neighborhoods: [
    { name: "Montrose", desc: "Westheimer, Montrose Boulevard. Houston's bohemian arts + LGBTQ+ cultural anchor." },
    { name: "The Heights", desc: "19th Street, White Oak Drive, Yale Street. Walkable retail revival + restaurant scene." },
    { name: "Midtown", desc: "Bagby, Brazos, Travis corridor. Nightlife + young-professional density." },
    { name: "EaDo (East Downtown)", desc: "Walker Street, Polk Street warehouse district. Emerging arts + warehouse-loft conversion zone." },
    { name: "Rice Village", desc: "University Boulevard + Times Boulevard. Affluent retail + Rice University adjacent foot traffic." },
    { name: "Museum District", desc: "Main Street, Bissonnet. Museum + walkable arts corridor between Rice + downtown." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Houston" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Houston street intersection" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Largest TX Metro",
    title: "MONTROSE + HEIGHTS + EADO ARE THE TRIANGLE",
    body:
      "Most agencies treat Houston as a billboard market and skip street-level entirely. We don't — Montrose's 50-year arts identity, the Heights' walkable retail revival, and EaDo's warehouse-arts emergence form a triangle of dense walkable corridors with property-owner cultures friendly to wall-based creative work. Wall-space competition is dramatically lower than LA or NYC at comparable foot-traffic densities. The medium is also called wild posting, flyposting, or street postering depending on the audience.",
    links: [
      { label: "Texas State Page", href: "/locations/texas" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Houston Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Houston?", a: "Yes on owner-authorized walls. Houston is permissive on private walls with property-owner consent. Montrose + the Heights + EaDo are particularly receptive to wall-based creative work — the city's mural-friendly culture makes wheat paste land naturally." },
    { q: "What Houston neighborhoods work best for wheat pasting?", a: "Montrose for arts/cultural reach, The Heights for retail/lifestyle, Midtown for nightlife, EaDo for warehouse-arts audience, Rice Village for affluent retail, Museum District for cultural-credibility plays." },
    { q: "How much does a Houston wheat pasting campaign cost?", a: "Single-neighborhood test: $2,800-$4,200 for 60-90 posters. Full-city activation across 4-5 districts: $10K-$15K. Lower than LA + NYC at comparable foot-traffic densities — Houston's wall-space competition is dramatically lower." },
    { q: "How does Houston weather affect campaigns?", a: "Hurricane season (June-November) and high humidity year-round require risk planning. We use PVA-reinforced paste for Houston installs that holds 6-8 weeks even through summer humidity. Hurricane-window installs (August-October) carry wash-off risk we plan around." },
    { q: "Can you handle Texas-wide deployments from Houston?", a: "Yes. Houston + Dallas + Austin + San Antonio is a common Texas-wide configuration — same crew rotation handles all four metros on coordinated rollouts. Often combined with SXSW or ACL anchor weeks in Austin." },
  ],
  localBusiness: {
    name: "Phantom Pasting — Houston",
    description: "Wheat pasting and poster campaign services in Houston, TX. Street postering across Montrose, Heights, Midtown, EaDo, Rice Village, Museum District.",
    url: "https://www.phantompasting.com/locations/houston",
  },
};

export default function HoustonPage() {
  return <CityPageTemplate data={data} />;
}
