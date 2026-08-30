import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting New Jersey | Jersey City & Hoboken Campaigns" },
  description:
    "Wheat pasting across New Jersey — Jersey City, Hoboken, Newark, Asbury Park. NYC-adjacent poster campaigns at NJ pricing, with GPS photo proof.",
  keywords: [
    "wheat pasting New Jersey",
    "wheatpasting New Jersey",
    "New Jersey poster campaigns",
    "New Jersey guerrilla marketing",
    "NJ street media",
    "Jersey City wheat pasting",
    "Hoboken wheat pasting",
    "Newark poster campaigns",
    "Asbury Park street advertising",
    "statewide New Jersey OOH",
    ...cityBuyerIntent("New Jersey"),
    ...cityBuyerIntent("Jersey City"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/new-jersey" },
  openGraph: {
    title: "Wheat Pasting New Jersey",
    description:
      "Statewide wheat paste poster campaigns across New Jersey — Jersey City, Hoboken, Newark, Atlantic City, Asbury Park.",
    url: "https://www.phantompasting.com/locations/new-jersey",
    images: [{
      url: "https://www.phantompasting.com/gallery/biodance-making-a-splash-wheat-paste-scaffold-wall-los-angeles.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across New Jersey — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "New Jersey",
  state: "NJ",
  slug: "new-jersey",
  heroWord: "NEW JERSEY",
  intro:
    "New Jersey is the smart way to reach the New York audience — Jersey City and Hoboken sit one PATH stop from Manhattan, with the same commuter demographic at a fraction of NYC wall pricing. Jersey City's mural program has made it one of the most paste-literate cities on the East Coast.",
  whyTitle: "THE NYC AUDIENCE.\nWITHOUT NYC PRICING.",
  whyText:
    "Jersey City runs one of the largest municipal mural programs in the US — 300+ walls — so street art reads as civic identity, not vandalism. Grove Street and Newark Avenue's pedestrian plaza carry dense commuter + nightlife traffic, and Hoboken's Washington Street adds a compact retail spine. Newark's downtown and Ironbound bring scale, and Asbury Park's boardwalk-plus-music scene (The Stone Pony) is the Shore's culture anchor. Every one of these audiences overlaps heavily with Manhattan and Brooklyn commuters.",
  neighborhoods: [
    { name: "Jersey City", desc: "Grove Street, Newark Ave pedestrian plaza, Journal Square, Bergen-Lafayette. Mural-program city; PATH-commuter density." },
    { name: "Hoboken", desc: "Washington Street spine, PATH terminal zone, waterfront. One square mile of walkable retail — saturation-friendly." },
    { name: "Newark", desc: "Downtown/Military Park, Ironbound (Ferry Street), NJPAC + Prudential Center event zone, Halsey Street." },
    { name: "Atlantic City", desc: "Boardwalk corridor, Tennessee Ave beer hall zone. Event- and casino-driven bursts." },
    { name: "Asbury Park", desc: "Cookman Ave, boardwalk, Stone Pony zone. The Shore's music + arts anchor; summer weekends peak." },
  ],
  heroImage1: { src: "/gallery/biodance-making-a-splash-wheat-paste-scaffold-wall-los-angeles.webp", alt: "Wheat paste posters on scaffold wall" },
  heroImage2: { src: "/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp", alt: "Wheat paste street postering wall" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-08-29",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "THE PATH-CORRIDOR PLAY",
    body:
      "Brands briefing NYC campaigns increasingly add — or substitute — the PATH corridor: Jersey City + Hoboken reach hundreds of thousands of Manhattan commuters daily, on walls that cost a fraction of Lower East Side rates and photograph just as well. Pair it with a Newark event-zone run (Prudential Center show nights) and you have the metro area covered from the Jersey side.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get an NJ Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in New Jersey?",
      a: "Yes on owner-authorized walls. Jersey City's mural-program culture makes authorized wall access unusually straightforward; Hoboken, Newark, and the Shore towns follow standard private-property consent rules. We use our own database of authorized walls.",
    },
    {
      q: "What New Jersey cities do you cover?",
      a: "Jersey City, Hoboken, Newark, Atlantic City, and Asbury Park as standing markets, plus Montclair, New Brunswick (Rutgers), and Princeton on a per-campaign basis.",
    },
    {
      q: "How much does a New Jersey campaign cost?",
      a: "Single-city NJ campaigns run $2,800–$5,500. A PATH-corridor brief (Jersey City + Hoboken) runs $5K–$8K; statewide with Newark and the Shore runs $10K–$16K.",
    },
    {
      q: "Can NJ substitute for an NYC campaign?",
      a: "For commuter reach, largely yes — Jersey City and Hoboken PATH riders are Manhattan's workforce. For in-borough presence (LES, Williamsburg walls) you'd still brief NYC proper; many brands run both sides of the river on one report.",
    },
    {
      q: "When is the best window for Shore campaigns?",
      a: "Memorial Day through Labor Day for Asbury Park and Atlantic City — boardwalk traffic multiplies 10x. Asbury Park's summer concert calendar makes Thursday installs ahead of weekend shows the standing play.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — New Jersey",
    description:
      "Wheat pasting and poster campaign services across New Jersey — Jersey City, Hoboken, Newark, Atlantic City, Asbury Park.",
    url: "https://www.phantompasting.com/locations/new-jersey",
  },
};

export default function NewJerseyPage() {
  return <CityPageTemplate data={data} />;
}
