import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Oregon",
  description:
    "Wheat pasting & street media across Oregon — Portland, Eugene, Salem, Bend. Statewide OR rollouts.",
  keywords: [
    "wheat pasting Oregon",
    "wheatpasting Oregon",
    "Oregon poster campaigns",
    "Oregon guerrilla marketing",
    "Oregon street media",
    "Oregon flyposting",
    "Oregon OOH advertising",
    "Portland wheat pasting",
    "Eugene wheat pasting",
    "Salem poster campaigns",
    "Bend street advertising",
    "statewide Oregon OOH",
    ...cityBuyerIntent("Oregon"),
    ...cityBuyerIntent("Portland"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/oregon" },
  openGraph: {
    title: "Wheat Pasting Oregon",
    description:
      "Statewide wheat paste poster campaigns across Oregon — Portland, Eugene, Salem, Bend.",
    url: "https://www.phantompasting.com/locations/oregon",
    images: [{
      url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Oregon — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Oregon",
  state: "OR",
  slug: "oregon",
  heroWord: "OREGON",
  intro:
    "Oregon campaigns center on Portland's dense walkable corridors — Hawthorne, Mississippi, Alberta, Division — but Eugene's UO campus zone, Salem's downtown core, and Bend's growing creative scene each carry their own audiences. Pacific Northwest rain requires PVA-reinforced paste; we've adapted recipes for OR's wettest months.",
  whyTitle: "OR IS PORTLAND-LED\nWITH STATEWIDE REACH.",
  whyText:
    "Portland is Oregon's anchor — Pacific Northwest's most pedestrianized urban core, dense indie-music + craft-beer creative culture, and a young-professional demographic that documents street art. Eugene's UO campus drives 24K+ undergrad foot traffic during the academic year. Bend's High Desert tourism + craft-beer scene is the fastest-growing OR market. Statewide OR rollouts let brands hit Portland weight + the secondary markets.",
  neighborhoods: [
    { name: "Portland", slug: "portland", desc: "Hawthorne, Mississippi, Alberta, Division, Pearl District, Old Town. Most pedestrianized urban core in the Pacific Northwest." },
    { name: "Eugene", desc: "UO campus zone, downtown Eugene, Whiteaker neighborhood. 24K+ undergrad density during academic year." },
    { name: "Salem", desc: "Downtown Salem, Capitol Mall corridor. State-government workforce + Willamette University spillover." },
    { name: "Bend", desc: "Downtown Bend, Old Mill District, NW Crossing. High-desert tourism + craft-beer scene; OR's fastest-growing market." },
    { name: "Beaverton", desc: "Downtown Beaverton, Cedar Hills crossroads. Tech-corporate workforce density (Nike HQ + suburban affluence)." },
    { name: "Hillsboro", desc: "Downtown Hillsboro, Orenco Station. Westside tech corridor + Intel campus spillover audience." },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Oregon" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Oregon street intersection" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "PORTLAND + 5 SECONDARY OR MARKETS",
    body:
      "Portland gets the volume but Oregon is bigger than Portland. We run Portland plus Eugene, Salem, Bend, Beaverton, and Hillsboro from coordinated crew rotations — a brand can spec a Hawthorne saturation with overflow into Eugene + Bend on the same paperwork. Eugene during football season is one of OR's most under-served opportunities for brands willing to deploy beyond Portland.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get an Oregon Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Oregon?",
      a: "Yes on owner-authorized walls. Portland is highly permissive on private walls with property-owner consent — the city's tolerance for street art makes wheat paste land naturally. Eugene, Salem, Bend follow similar patterns.",
    },
    {
      q: "How does Pacific Northwest rain affect Oregon campaigns?",
      a: "Rain is the operational variable. We use a PVA-reinforced paste formula for Portland + Eugene installs that holds 6-8 weeks even through wet seasons. Driest months are July-September; we time critical campaigns to those windows when possible.",
    },
    {
      q: "What Oregon cities do you cover?",
      a: "All major OR metros: Portland, Eugene, Salem, Bend, Beaverton, Hillsboro, plus secondary markets like Medford, Ashland, Corvallis, Gresham, Tigard, and the Willamette Valley corridor.",
    },
    {
      q: "How much does an Oregon campaign cost?",
      a: "Single-city OR campaigns run $2,800-$5,200 (Portland on the higher end). Statewide OR rollouts hitting 4-5 metros run $11K-$19K with the multi-city volume discount. Combined Portland + Seattle Pacific Northwest briefs are common.",
    },
    {
      q: "Can you handle UO football-weekend deployments in Eugene?",
      a: "Yes. UO home games drive Eugene foot traffic 4x+ over baseline; saturation campaigns timed to game weekends are a specialty. Book 4 weeks ahead for marquee games (Civil War, Pac-12 championships).",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Oregon",
    description:
      "Wheat pasting and poster campaign services across Oregon — Portland, Eugene, Salem, Bend.",
    url: "https://www.phantompasting.com/locations/oregon",
  },
};

export default function OregonPage() {
  return <CityPageTemplate data={data} />;
}
