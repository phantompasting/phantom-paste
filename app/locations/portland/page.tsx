import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Portland",
  description:
    "Wheat pasting in Portland — poster campaigns across Hawthorne, Mississippi, Alberta, Division, Pearl District. PVA-reinforced for PNW rain.",
  keywords: [
    "wheat pasting Portland",
    "Portland poster campaigns",
    "Portland guerrilla marketing",
    "Portland street media",
    "Portland street postering",
    "Portland flyposting",
    "Portland OOH advertising",
    "Hawthorne wheat pasting",
    "Mississippi Avenue poster campaigns",
    "Alberta street advertising",
    "Division Street guerrilla marketing",
    "Pearl District OOH",
    ...cityBuyerIntent("Portland"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/portland" },
  openGraph: {
    title: "Wheat Pasting Portland",
    description: "Large-format wheat paste campaigns across Portland. Hawthorne, Mississippi, Alberta, Division, Pearl District.",
    url: "https://www.phantompasting.com/locations/portland",
    images: [{ url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", width: 1200, height: 630, alt: "Wheat paste poster wall in Portland" }],
  },
};

const data: CityPageData = {
  city: "Portland",
  state: "OR",
  slug: "portland",
  heroWord: "PORTLAND",
  intro:
    "Portland has the most pedestrianized urban core in the Pacific Northwest. Hawthorne, Mississippi, Alberta, and Division corridors carry walkable retail + indie-music + craft-beer culture density. Pearl District + Old Town round out downtown. We use PVA-reinforced paste for OR's rainy winters.",
  whyTitle: "PDX LIVES\nON ITS STREETS.",
  whyText:
    "Portland's culture documents and reposts everything — the city's young-professional creative class is Instagram-native and treats walls as content. Hawthorne is the city's most-walkable retail corridor; Mississippi Avenue carries the densest mural foot traffic; Alberta's monthly Last Thursday arts walk anchors the city's street-art identity; Division's restaurant scene drives weekend volume. Portland campaigns generate organic social shares at rates rivaling Brooklyn.",
  neighborhoods: [
    { name: "Hawthorne", desc: "SE Hawthorne Boulevard 30th-50th. Most walkable retail strip in PDX; weekend foot-traffic anchor." },
    { name: "Mississippi Avenue", desc: "N Mississippi between Skidmore + Killingsworth. Mural-corridor density + restaurant scene." },
    { name: "Alberta Arts District", desc: "NE Alberta Street 14th-30th. Monthly Last Thursday arts walk anchors street-culture identity." },
    { name: "Division", desc: "SE Division between 30th + 50th. Restaurant + retail strip with weekend tourism foot traffic." },
    { name: "Pearl District", desc: "NW Pearl, downtown gallery district. Walkable retail + arts + warehouse-to-loft conversions." },
    { name: "Old Town / Chinatown", desc: "NW 3rd + 4th, Chinatown gateway. Downtown gateway + nightlife district." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Portland" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Portland street intersection" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "PDX Spotlight",
    title: "MISSISSIPPI + ALBERTA ARE THE MURAL HEARTLAND",
    body:
      "Mississippi Avenue + Alberta Arts District are Portland's two most-photographed mural corridors. Wheat paste lands as part of the visual context, not against it. Last Thursday on Alberta (last Thursday of every month, May-September) drives the city's biggest walkable-arts-event foot traffic — saturation campaigns timed to Last Thursday weeks consistently outperform other windows. The medium is also called wild posting, flyposting, or street postering depending on the audience.",
    links: [
      { label: "Oregon State Page", href: "/locations/oregon" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Portland Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Portland?", a: "Yes on owner-authorized walls. Portland is highly permissive on private walls with property-owner consent — the city's tolerance for street art makes wheat paste land naturally." },
    { q: "When is the best time to run Portland campaigns?", a: "May-September (driest months). Last Thursday on Alberta (last Thursday May-September) is the peak event-window. Outside specific events, standard 7-10 day lead times apply." },
    { q: "How much does a Portland wheat pasting campaign cost?", a: "Single-neighborhood test: $2,800-$4,200 for 60-90 posters. Full-city activation across 4-5 districts: $9K-$15K. Combined Portland + Seattle PNW briefs run $18K-$30K." },
    { q: "How does Portland rain affect campaigns?", a: "We use PVA-reinforced paste that holds 6-8 weeks even through wet seasons. Driest months (July-September) are the safest windows for budget-priced campaigns." },
    { q: "What Portland neighborhoods work best?", a: "Hawthorne, Mississippi Avenue, Alberta Arts District, Division, Pearl District. Each carries its own audience — Hawthorne for retail/lifestyle, Mississippi/Alberta for arts/culture, Division for restaurant/nightlife, Pearl for downtown affluent reach." },
  ],
  localBusiness: {
    name: "Phantom Pasting — Portland",
    description: "Wheat pasting and poster campaign services in Portland, OR. Street postering across Hawthorne, Mississippi, Alberta, Division, Pearl District.",
    url: "https://www.phantompasting.com/locations/portland",
  },
};

export default function PortlandPage() {
  return <CityPageTemplate data={data} />;
}
