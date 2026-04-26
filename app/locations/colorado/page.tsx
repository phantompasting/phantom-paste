import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Colorado",
  description:
    "Wheat pasting & street media across Colorado — Denver, Colorado Springs, Aurora, Boulder, Fort Collins. Statewide CO rollouts.",
  keywords: [
    "wheat pasting Colorado",
    "wheatpasting Colorado",
    "Colorado poster campaigns",
    "Colorado guerrilla marketing",
    "Colorado street media",
    "Colorado flyposting",
    "Colorado OOH advertising",
    "Denver wheat pasting",
    "Colorado Springs wheat pasting",
    "Aurora poster campaigns",
    "Boulder street advertising",
    "Fort Collins guerrilla marketing",
    "statewide Colorado OOH",
    ...cityBuyerIntent("Colorado"),
    ...cityBuyerIntent("Denver"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/colorado" },
  openGraph: {
    title: "Wheat Pasting Colorado",
    description:
      "Statewide wheat paste poster campaigns across Colorado — Denver, Colorado Springs, Aurora, Boulder, Fort Collins.",
    url: "https://www.phantompasting.com/locations/colorado",
    images: [{
      url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Colorado — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Colorado",
  state: "CO",
  slug: "colorado",
  heroWord: "COLORADO",
  intro:
    "Colorado campaigns center on Denver's RiNo + Highland + South Broadway corridors but Boulder's Pearl Street, Colorado Springs' downtown, Fort Collins' Old Town, and Aurora's Stanley Marketplace each carry their own audiences. High-altitude dry climate keeps posters sharp 8-10 weeks — longer than most US markets.",
  whyTitle: "CO IS DENVER-LED\nWITH FOOTHILLS REACH.",
  whyText:
    "Denver is Colorado's anchor — RiNo's mural corridor + Highland's restaurant scene + South Broadway's indie-music density. But Boulder's Pearl Street is one of the country's best-pedestrianized retail corridors, Colorado Springs' downtown has a walkable creative core, and Fort Collins' Old Town drives CSU + craft-beer foot traffic. CO's dry climate is friendly to wheat paste — posters hold 8-10 weeks vs 4-6 in humid markets.",
  neighborhoods: [
    { name: "Denver", slug: "denver", desc: "RiNo (River North Art District), Highland, LoHi, South Broadway, LoDo, Cap Hill. Volume leader; mural + craft-beer culture overlap." },
    { name: "Colorado Springs", desc: "Downtown Colorado Springs, Old Colorado City, Manitou Springs corridor. Air Force Academy + Pikes Peak tourism foot traffic." },
    { name: "Aurora", desc: "Stanley Marketplace, Original Aurora downtown. Denver-adjacent metro with growing creative scene." },
    { name: "Boulder", desc: "Pearl Street, University Hill, downtown Boulder. CU Boulder's 35K+ student density + tech-startup creative class." },
    { name: "Fort Collins", desc: "Old Town Fort Collins, downtown CSU corridor. CSU drives 33K+ undergrad foot traffic during academic year." },
    { name: "Greeley", desc: "Downtown Greeley, UNC campus zone. Northern CO market often skipped by national agencies." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Colorado" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Colorado street intersection" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "DENVER + 5 SECONDARY CO MARKETS",
    body:
      "Most agencies route Colorado to Denver-only. We run Denver plus Colorado Springs, Aurora, Boulder, Fort Collins, and Greeley from coordinated crew rotations — a brand can spec a RiNo saturation with overflow into Boulder + Fort Collins on the same paperwork. Boulder during ski season + CU game weekends is one of CO's most under-served opportunities for brands deploying beyond Denver.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Colorado Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Colorado?",
      a: "Yes on owner-authorized walls. Denver is highly permissive on private walls with property-owner consent — the city's mural-friendly culture (RiNo Art District is built on it) makes wheat paste land naturally. Boulder, Colorado Springs, Fort Collins follow similar patterns.",
    },
    {
      q: "How does Colorado's altitude + dry climate affect campaigns?",
      a: "Friendly to wheat paste. Dry climate means no rain wash-off; posters routinely hold 8-10 weeks vs 4-6 in humid markets. UV exposure at altitude does fade colors faster — we use UV-stable inks for CO campaigns when budget allows.",
    },
    {
      q: "What Colorado cities do you cover?",
      a: "All major CO metros: Denver, Colorado Springs, Aurora, Boulder, Fort Collins, Greeley, plus secondary markets like Lakewood, Thornton, Westminster, Pueblo, Loveland, and the Front Range corridor.",
    },
    {
      q: "How much does a Colorado campaign cost?",
      a: "Single-city CO campaigns run $2,800-$5,000. Statewide CO rollouts hitting 4-5 metros run $11K-$19K with the multi-city volume discount. Combined Denver + Boulder Front Range briefs are common.",
    },
    {
      q: "Can you handle game-weekend saturation around CU + CSU + Air Force Academy?",
      a: "Yes. CU Boulder + CSU Fort Collins football weekends drive foot traffic 4x+ over baseline; saturation campaigns timed to game weekends are a specialty. Air Force Academy graduation week (May) is similarly high-density.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Colorado",
    description:
      "Wheat pasting and poster campaign services across Colorado — Denver, Colorado Springs, Aurora, Boulder, Fort Collins.",
    url: "https://www.phantompasting.com/locations/colorado",
  },
};

export default function ColoradoPage() {
  return <CityPageTemplate data={data} />;
}
