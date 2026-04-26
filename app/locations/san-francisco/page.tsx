import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting San Francisco",
  description:
    "Wheat pasting in San Francisco — poster campaigns across the Mission, Hayes Valley, SoMa, the Castro, North Beach, Lower Haight.",
  keywords: [
    "wheat pasting San Francisco",
    "SF poster campaigns",
    "San Francisco guerrilla marketing",
    "SF street media",
    "San Francisco street postering",
    "SF flyposting",
    "Bay Area OOH advertising",
    "Mission District wheat pasting",
    "Hayes Valley poster campaigns",
    "SoMa street advertising",
    "Castro guerrilla marketing",
    "Lower Haight OOH",
    ...cityBuyerIntent("San Francisco"),
    ...cityBuyerIntent("SF"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/san-francisco" },
  openGraph: {
    title: "Wheat Pasting San Francisco",
    description: "Large-format wheat paste campaigns across SF. Mission, Hayes Valley, SoMa, the Castro.",
    url: "https://www.phantompasting.com/locations/san-francisco",
    images: [{ url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", width: 1200, height: 630, alt: "Wheat paste campaign in San Francisco" }],
  },
};

const data: CityPageData = {
  city: "San Francisco",
  state: "CA",
  slug: "san-francisco",
  heroWord: "SAN FRANCISCO",
  intro:
    "San Francisco's Mission District is one of the country's densest mural corridors — wheat paste lands as part of the visual culture. Hayes Valley's walkable retail strip, SoMa's tech-corporate workforce reach, the Castro's nightlife district, North Beach's tourism corridor, and Lower Haight's indie scene complete the deployment map.",
  whyTitle: "SF LIVES\nIN ITS NEIGHBORHOODS.",
  whyText:
    "San Francisco is the West Coast's tech capital but its street culture is anchored in the Mission's mural-friendly walls, Hayes Valley's walkable retail, the Castro's nightlife density, and Lower Haight's indie identity. The city's compact footprint means a single-day campaign can hit 6 distinct neighborhood corridors. SF's tech workforce is uniquely brand-aware — DTC + B2B SaaS + crypto launches deploy here for credibility signal as much as foot traffic.",
  neighborhoods: [
    { name: "Mission District", desc: "Valencia, 24th Street, Mission Street. Densest mural corridor in SF; arts + restaurant + nightlife overlap." },
    { name: "Hayes Valley", desc: "Hayes Street, Octavia. Walkable retail strip with weekend tourism + young-professional foot traffic." },
    { name: "SoMa", desc: "South of Market, Folsom, Howard. Tech-corporate workforce + warehouse-to-office conversions." },
    { name: "The Castro", desc: "Castro Street, Market Street west. LGBTQ+ cultural anchor + nightlife district + tourism overlap." },
    { name: "North Beach", desc: "Columbus Avenue, Grant Avenue. Italian-heritage restaurant district + tourism foot traffic anchor." },
    { name: "Lower Haight", desc: "Haight Street between Pierce + Webster. Indie music + DIY arts scene density." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in San Francisco" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at SF street intersection" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Bay Area Spotlight",
    title: "MISSION + HAYES VALLEY ARE WHERE SF DOCUMENTS",
    body:
      "The Mission District is SF's most-photographed mural corridor — wheat paste lands as part of the visual culture, not against it. Hayes Valley's foot traffic is the most-Instagram-active in the city. SF tech-launch campaigns routinely deploy across both corridors plus SoMa for tech-corporate workforce reach. The medium is also called wild posting, flyposting, or street postering depending on the audience; wheat pasting names the actual material.",
    links: [
      { label: "California State Page", href: "/locations/california" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a San Francisco Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in San Francisco?", a: "Yes on owner-authorized walls. SF is highly permissive on private walls with property-owner consent — the city's mural-friendly culture (especially in the Mission) makes wheat paste land naturally. Historic-district walls need permits; we handle them." },
    { q: "What SF neighborhoods work best for wheat pasting?", a: "Mission District (Valencia + 24th Street), Hayes Valley, SoMa, the Castro, North Beach, Lower Haight. Each carries its own audience — Mission for arts/culture, Hayes Valley for retail/lifestyle, SoMa for tech-corporate reach." },
    { q: "How much does an SF wheat pasting campaign cost?", a: "Single-neighborhood test: $3,500-$5,000 for 60-90 posters. Full-city activation across 4-5 districts: $13K-$20K. Combined SF + LA California briefs run $25K-$45K depending on multi-week refresh requirements." },
    { q: "Can you handle Bay Area corridor deployments?", a: "Yes. SF + Oakland + San Jose is a natural Bay Area corridor — same crew rotation handles all three metros on coordinated rollouts. Common configuration: SF + Oakland + San Jose + Berkeley on a single launch week for tech-product launches." },
    { q: "When is the best time to run SF campaigns?", a: "April-October (driest months). Outside those windows, fog + occasional rain affect poster lifespan; we use PVA-reinforced paste for wet-season installs. Pride weekend (June), Folsom Street Fair (September), Fleet Week (October), and Outside Lands (August) are the highest-attention event windows." },
  ],
  localBusiness: {
    name: "Phantom Pasting — San Francisco",
    description: "Wheat pasting and poster campaign services in San Francisco, CA. Street postering across the Mission, Hayes Valley, SoMa, the Castro, North Beach, Lower Haight.",
    url: "https://www.phantompasting.com/locations/san-francisco",
  },
};

export default function SanFranciscoPage() {
  return <CityPageTemplate data={data} />;
}
