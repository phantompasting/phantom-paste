import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Denver",
  description:
    "Wheat pasting in Denver — poster campaigns across RiNo, Highland, LoHi, South Broadway, LoDo, Cap Hill. High-altitude dry climate.",
  keywords: [
    "wheat pasting Denver",
    "Denver poster campaigns",
    "Denver guerrilla marketing",
    "Denver street media",
    "Denver street postering",
    "Denver flyposting",
    "Denver OOH advertising",
    "RiNo wheat pasting",
    "Highland Denver poster campaigns",
    "South Broadway street advertising",
    "LoDo guerrilla marketing",
    "Cap Hill OOH",
    ...cityBuyerIntent("Denver"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/denver" },
  openGraph: {
    title: "Wheat Pasting Denver",
    description:
      "Large-format wheat paste campaigns across Denver. RiNo, Highland, LoHi, South Broadway, LoDo, Cap Hill.",
    url: "https://www.phantompasting.com/locations/denver",
    images: [{ url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", width: 1200, height: 630, alt: "Wheat paste poster campaign in Denver" }],
  },
};

const data: CityPageData = {
  city: "Denver",
  state: "CO",
  slug: "denver",
  heroWord: "DENVER",
  intro:
    "Denver's RiNo Art District is one of the country's most concentrated mural corridors — wheat paste lands as part of the visual culture, not against it. Highland + LoHi drive restaurant-scene foot traffic, South Broadway anchors indie music, LoDo + Cap Hill carry downtown density. CO's dry climate keeps posters sharp 8-10 weeks vs 4-6 in humid markets.",
  whyTitle: "DENVER LIVES\nON ITS WALLS.",
  whyText:
    "RiNo (River North Art District) is Denver's anchor for street-level creative — Larimer + Walnut + Brighton corridor was built around large-format wall art. The city's Mural Festival every September draws international street artists; wheat paste fits the visual context. Highland + LoHi carry restaurant-scene density; South Broadway is the indie-music + DIY space anchor. Denver's dry climate is friendly to wheat paste — 8-10 week durability is normal.",
  neighborhoods: [
    { name: "RiNo (River North)", desc: "Larimer + Walnut + Brighton corridor. Mural-district density; the city's most-photographed wall corridor." },
    { name: "Highland", desc: "32nd Avenue, Tennyson. Walkable restaurant + retail district with creative-class density." },
    { name: "LoHi", desc: "Lower Highland, 17th Avenue corridor. Restaurant-scene anchor + young-professional foot traffic." },
    { name: "South Broadway (SoBo)", desc: "South Broadway between Mississippi and Alameda. Indie music + DIY arts space density." },
    { name: "LoDo", desc: "Downtown Denver, 16th Street Mall, Larimer Square. Tourism + sports-game-day foot traffic." },
    { name: "Cap Hill / City Park", desc: "Capitol Hill, City Park West. Walkable historic neighborhood with arts + nightlife overlap." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Denver" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Denver street intersection" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Mile-High Spotlight",
    title: "RINO IS DENVER'S MURAL HEARTLAND",
    body:
      "RiNo Art District (Larimer + Walnut + Brighton) is the densest mural corridor west of the Mississippi. Wheat paste lands as part of the visual context, not against it — neighborhood foot traffic photographs and reposts every wall. Mural Festival week (early September) is the highest-attention window. The medium is also called wild posting, flyposting, or street postering depending on the audience; wheat pasting names the actual material.",
    links: [
      { label: "Colorado State Page", href: "/locations/colorado" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Denver Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Denver?", a: "Yes on owner-authorized walls. Denver is highly permissive on private walls with property-owner consent — the city's mural-friendly culture makes wheat paste land naturally. RiNo + Highland + LoHi are particularly receptive to wall-based creative work." },
    { q: "When is the best time to run Denver campaigns?", a: "RiNo Mural Festival (early September) is the highest-attention window. Avalanche/Nuggets playoff windows (April-June) drive sports-fan foot traffic in LoDo. Outside specific event windows, standard 7-10 day lead times apply." },
    { q: "How much does a Denver wheat pasting campaign cost?", a: "Single-neighborhood test: $2,800-$4,200 for 60-90 posters. Full-city activation across 4-5 districts: $9K-$15K. Mural Festival week saturation: $14K-$24K." },
    { q: "How long do posters last in Denver?", a: "8-10 weeks under typical conditions — Colorado's dry climate is friendly to wheat paste. Direct-sun walls fade colors faster (UV at altitude); we use UV-stable inks for premium campaigns. Indoor/covered walls hold 12+ weeks." },
    { q: "Can you handle Denver + Boulder Front Range deployments?", a: "Yes. Denver + Boulder is a natural Front Range corridor — same crew rotation handles both metros plus Fort Collins on coordinated rollouts. Common configuration: Denver + Boulder + Fort Collins on a single launch week." },
  ],
  localBusiness: {
    name: "Phantom Pasting — Denver",
    description: "Wheat pasting and poster campaign services in Denver, CO. Street postering across RiNo, Highland, LoHi, South Broadway, LoDo, Cap Hill.",
    url: "https://www.phantompasting.com/locations/denver",
  },
};

export default function DenverPage() {
  return <CityPageTemplate data={data} />;
}
