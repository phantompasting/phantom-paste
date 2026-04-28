import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Arizona",
  description:
    "Wheat pasting & street media across Arizona — Phoenix, Tucson, Mesa, Scottsdale, Tempe, Flagstaff. Desert-adapted AZ poster campaigns + ASU/UA windows.",
  keywords: [
    "wheat pasting Arizona",
    "wheatpasting Arizona",
    "Arizona poster campaigns",
    "Arizona guerrilla marketing",
    "Arizona street media",
    "Arizona street postering",
    "Arizona flyposting",
    "Arizona OOH advertising",
    "Phoenix wheat pasting",
    "Tucson wheat pasting",
    "Mesa poster campaigns",
    "Scottsdale street advertising",
    "Tempe guerrilla marketing",
    "statewide Arizona OOH",
    ...cityBuyerIntent("Arizona"),
    ...cityBuyerIntent("Phoenix"),
    ...cityBuyerIntent("Tucson"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/arizona" },
  openGraph: {
    title: "Wheat Pasting Arizona",
    description:
      "Statewide wheat paste poster campaigns across Arizona — Phoenix, Tucson, Mesa, Scottsdale, Tempe.",
    url: "https://www.phantompasting.com/locations/arizona",
    images: [{
      url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Arizona — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Arizona",
  state: "AZ",
  slug: "arizona",
  heroWord: "ARIZONA",
  intro:
    "Arizona is a five-metro state with desert-specific install logic. Phoenix's Roosevelt Row, Tucson's Fourth Avenue + downtown, Mesa's downtown core, Scottsdale's Old Town arts corridor, Tempe's Mill Avenue. We adjust the paste recipe for popcorn cement walls + plan installs around 110°F summer heat.",
  whyTitle: "AZ IS DESERT-MARKET\nWHEAT PASTING.",
  whyText:
    "Arizona campaigns require operational adjustments most agencies skip. Popcorn cement (the textured stucco common on AZ commercial walls) eats thin paste — recipes need 10-15% more flour or a heavy-tack commercial formula. Summer install windows shift to 9 p.m.-2 a.m. when surface temps drop. Monsoon season (July-September) requires risk planning. We've been pasting Phoenix and Tucson long enough to have it dialed in.",
  neighborhoods: [
    { name: "Phoenix", slug: "phoenix", desc: "Roosevelt Row, Grand Avenue, Melrose District (7th Ave), downtown Tempe spillover. State volume leader; full breakdown on the Phoenix page." },
    { name: "Tucson", desc: "Fourth Avenue, downtown Tucson, University Boulevard. UA student density + Sonoran arts community." },
    { name: "Mesa", desc: "Downtown Mesa Arts District, Main Street corridor. Light-rail-connected creative zone." },
    { name: "Scottsdale", desc: "Old Town Scottsdale, Marshall Way arts district. Premium tourism + luxury-brand activations." },
    { name: "Tempe", desc: "Mill Avenue, ASU campus zone, downtown Tempe. 70K+ ASU students drive year-round foot traffic." },
    { name: "Flagstaff", desc: "Downtown Flagstaff, NAU campus zone. Mountain-college creative scene; smaller market, lower competition." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Arizona desert market" },
  heroImage2: { src: "/gallery/chalk-spray-stencil-sidewalk-guerrilla-marketing.webp", alt: "Chalk spray stencil activation in Arizona" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "PHOENIX + TUCSON + 3 SECONDARY MARKETS",
    body:
      "Most agencies don't run Arizona at all — popcorn cement walls + 110°F summer heat scare crews off. We've adapted the recipe + the install windows for desert markets and run Phoenix, Tucson, Mesa, Scottsdale, and Tempe on coordinated rollouts. ASU + UA windows are the biggest under-served opportunities; statewide briefs anchored to the academic calendar are uniquely strong here.",
    links: [
      { label: "Phoenix Field Guide", href: "/blog/wheat-pasting-phoenix" },
      { label: "Get an Arizona Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Arizona?",
      a: "Yes on owner-authorized walls. Phoenix Code §23-52 covers unlawful posting but is almost never enforced on clean commercial campaigns. Scottsdale public right-of-way is stricter than Phoenix proper. Tucson + Mesa are highly permissive. We secure wall rights through property managers and BIDs.",
    },
    {
      q: "What's different about Arizona walls?",
      a: "Most AZ commercial buildings use popcorn cement — a textured stucco that eats thin paste. Recipes need 10-15% more flour or a heavy-tack commercial formula that fills the wall's high points. We adjust before deploying.",
    },
    {
      q: "When is the best time to run Arizona campaigns?",
      a: "October-April is the reliable window — temperatures cooperate, no monsoon risk. May-September installs shift to 9 p.m.-2 a.m. windows; July-August daytime installs fail because 105°F+ heat flash-sets the paste. Monsoon season (July-September) carries 48-hour wash-off risk.",
    },
    {
      q: "How much does an Arizona campaign cost?",
      a: "Single-city AZ campaigns run $3,000-$5,800 (Scottsdale luxury activations land higher). Statewide AZ rollouts hitting 4-5 metros run $13K-$22K with the multi-city volume discount.",
    },
    {
      q: "Can you do festival-week saturation around ASU + UA games?",
      a: "Yes. ASU football weekends drive Tempe foot traffic 5x+ over baseline; UA basketball season + March Madness windows do the same in Tucson. Saturation campaigns timed to game weekends are a specialty.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Arizona",
    description:
      "Wheat pasting and poster campaign services across Arizona — Phoenix, Tucson, Mesa, Scottsdale, Tempe.",
    url: "https://www.phantompasting.com/locations/arizona",
  },
};

export default function ArizonaPage() {
  return <CityPageTemplate data={data} />;
}
