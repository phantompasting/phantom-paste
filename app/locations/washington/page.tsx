import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Washington",
  description:
    "Wheat pasting & street media across Washington — Seattle, Spokane, Tacoma, Vancouver, Bellevue, Olympia. Rain-adapted statewide WA poster campaigns.",
  keywords: [
    "wheat pasting Washington",
    "wheatpasting Washington state",
    "Washington poster campaigns",
    "Washington guerrilla marketing",
    "Washington street media",
    "Washington flyposting",
    "Washington OOH advertising",
    "Seattle wheat pasting",
    "Spokane wheat pasting",
    "Tacoma poster campaigns",
    "Vancouver WA street advertising",
    "Bellevue guerrilla marketing",
    "statewide Washington OOH",
    ...cityBuyerIntent("Washington"),
    ...cityBuyerIntent("Seattle"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/washington" },
  openGraph: {
    title: "Wheat Pasting Washington",
    description:
      "Statewide wheat paste poster campaigns across Washington — Seattle, Spokane, Tacoma, Vancouver, Bellevue.",
    url: "https://www.phantompasting.com/locations/washington",
    images: [{
      url: "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Washington — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Washington",
  state: "WA",
  slug: "washington",
  heroWord: "WASHINGTON",
  intro:
    "Washington campaigns split between Seattle's dense walkable corridors (Capitol Hill, Ballard, Fremont, Pioneer Square) and the Spokane + Tacoma + Vancouver secondary markets. Pacific Northwest weather requires PVA-reinforced paste for rain durability — we've adapted the recipe and route campaigns around the wettest weeks.",
  whyTitle: "WA IS PACIFIC\nNORTHWEST STREET MEDIA.",
  whyText:
    "Seattle is the Northwest's anchor — Capitol Hill arts density, Ballard's young-professional walkability, Fremont's quirky cultural identity, Pioneer Square's tourism. But Spokane's Riverside corridor, Tacoma's Stadium District, Bellevue's downtown, and Vancouver's Esther Short Park area each carry their own audiences. Pacific Northwest brands often want both Seattle volume and Portland-Seattle-Vancouver corridor saturation — we handle both on coordinated briefs.",
  neighborhoods: [
    { name: "Seattle", slug: "seattle", desc: "Capitol Hill, Ballard, Fremont, Pioneer Square, Belltown, U District. Northwest volume leader; tech + indie-music scene density." },
    { name: "Spokane", desc: "Riverside, downtown Spokane, Browne's Addition. Eastern WA cultural anchor; lower wall-space competition than Seattle." },
    { name: "Tacoma", desc: "Stadium District, downtown Tacoma, Sixth Avenue. Walkable urban core 30 minutes south of Seattle." },
    { name: "Vancouver, WA", desc: "Esther Short Park, downtown Vancouver, Uptown Village. Portland-adjacent without OR taxes." },
    { name: "Bellevue", desc: "Downtown Bellevue, Bel-Red corridor. Tech-corporate workforce density + suburban affluence." },
    { name: "Olympia", desc: "Downtown Olympia, Capitol corridor. State-government workforce + Evergreen College spillover." },
  ],
  heroImage1: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Wheat paste pole wrap in Washington at night" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Washington street intersection" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "SEATTLE + 4 SECONDARY WA MARKETS",
    body:
      "Most agencies route Washington to Seattle-only. We run Seattle plus Spokane, Tacoma, Vancouver, Bellevue, and Olympia from coordinated crew rotations — a brand can spec a Capitol Hill saturation with overflow into Tacoma + Bellevue on the same paperwork. Our PVA-reinforced paste handles Pacific Northwest rain better than standard formulas — posters hold 6-8 weeks even through wet seasons.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Washington Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Washington?",
      a: "Yes on owner-authorized walls. Seattle is highly permissive on private walls with property-owner consent. Spokane, Tacoma, Bellevue follow similar patterns. Pioneer Square and historic districts need permits — we handle them.",
    },
    {
      q: "How does Pacific Northwest weather affect campaigns?",
      a: "Rain is the operational variable. We use a PVA-reinforced paste formula for Seattle + Olympia + Tacoma installs that holds 6-8 weeks even through wet seasons. Driest months are July-September; we time critical campaigns to those windows when possible.",
    },
    {
      q: "What Washington cities do you cover?",
      a: "All major WA metros: Seattle, Spokane, Tacoma, Vancouver, Bellevue, Olympia, plus secondary markets like Everett, Bellingham, Yakima, Tri-Cities, Renton, and the I-5 corridor cities.",
    },
    {
      q: "How much does a Washington campaign cost?",
      a: "Single-city WA campaigns run $3,200-$5,800 (Seattle on the higher end). Statewide WA rollouts hitting 4-5 metros run $13K-$22K with the multi-city volume discount. Combined Seattle + Portland Pacific Northwest briefs are common.",
    },
    {
      q: "Can you handle the I-5 corridor (Portland-Seattle-Vancouver)?",
      a: "Yes. Portland-Seattle is a natural Pacific Northwest brand corridor — same crew rotation handles both metros plus Vancouver WA on coordinated rollouts. Common configuration: Portland + Seattle + Tacoma over a single launch week.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Washington",
    description:
      "Wheat pasting and poster campaign services across Washington — Seattle, Spokane, Tacoma, Vancouver, Bellevue.",
    url: "https://www.phantompasting.com/locations/washington",
  },
};

export default function WashingtonPage() {
  return <CityPageTemplate data={data} />;
}
