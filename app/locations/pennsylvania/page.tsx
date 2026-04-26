import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Pennsylvania",
  description:
    "Wheat pasting & street media across Pennsylvania — Philadelphia, Pittsburgh, Allentown, Erie, Reading. Statewide PA rollouts.",
  keywords: [
    "wheat pasting Pennsylvania",
    "wheatpasting Pennsylvania",
    "Pennsylvania poster campaigns",
    "Pennsylvania guerrilla marketing",
    "Pennsylvania street media",
    "Pennsylvania flyposting",
    "Pennsylvania OOH advertising",
    "Philadelphia wheat pasting",
    "Pittsburgh wheat pasting",
    "Allentown poster campaigns",
    "Erie street advertising",
    "Reading guerrilla marketing",
    "statewide Pennsylvania OOH",
    ...cityBuyerIntent("Pennsylvania"),
    ...cityBuyerIntent("Philadelphia"),
    ...cityBuyerIntent("Pittsburgh"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/pennsylvania" },
  openGraph: {
    title: "Wheat Pasting Pennsylvania",
    description:
      "Statewide wheat paste poster campaigns across Pennsylvania — Philadelphia, Pittsburgh, Allentown, Erie, Reading.",
    url: "https://www.phantompasting.com/locations/pennsylvania",
    images: [{
      url: "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Pennsylvania — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Pennsylvania",
  state: "PA",
  slug: "pennsylvania",
  heroWord: "PENNSYLVANIA",
  intro:
    "Pennsylvania is a two-anchor state — Philadelphia in the east, Pittsburgh in the west — connected by 280 miles of secondary markets. Philly's South Street + Northern Liberties + Fishtown corridors drive the volume; Pittsburgh's Strip District + East Liberty + South Side carry their own creative-class density. Allentown, Erie, Reading round out the Tier-2 markets we deploy on statewide rollouts.",
  whyTitle: "PA IS PHILLY +\nPITTSBURGH + 5 SECONDARY.",
  whyText:
    "Pennsylvania is the country's 5th-most-populous state with two world-class metros + a string of underrated secondary markets. Philadelphia is one of the East Coast's most pedestrianized urban cores — South Street's nightlife density, Fishtown's creative-class boom, Northern Liberties' walkability. Pittsburgh's Strip District is the country's most under-rated arts corridor; East Liberty + South Side carry their own cultural identity. Statewide PA briefs hit both anchors + the secondary metros where wall-space competition is dramatically lower.",
  neighborhoods: [
    { name: "Philadelphia", desc: "South Street, Fishtown, Northern Liberties, University City, Old City, Rittenhouse. East coast volume leader; Penn + Drexel + Temple student density." },
    { name: "Pittsburgh", desc: "Strip District, East Liberty, South Side, Lawrenceville, Squirrel Hill. Western PA anchor; CMU + Pitt creative-class density." },
    { name: "Allentown", desc: "Downtown Allentown, Hamilton Street corridor. Lehigh Valley anchor; growing arts scene + Lehigh + Lafayette spillover." },
    { name: "Erie", desc: "Downtown Erie, State Street corridor. Lake Erie tourism + Mercyhurst + Edinboro spillover." },
    { name: "Reading", desc: "Downtown Reading, Penn Street corridor. Eastern PA market often skipped by national agencies." },
    { name: "Lancaster", desc: "Downtown Lancaster Arts District, North Queen Street. Walkable cultural core + F&M student spillover." },
  ],
  heroImage1: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Wheat paste pole wrap in Pennsylvania at night" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Pennsylvania street intersection" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "PHILLY + PITTSBURGH + 4 SECONDARY",
    body:
      "Most agencies route Pennsylvania to Philly OR Pittsburgh and pick one. We run both anchors plus Allentown, Erie, Reading, Lancaster from coordinated crew rotations — a brand can spec a Fishtown-led Philly campaign with Pittsburgh Strip District overflow on the same paperwork. Lancaster's downtown Arts District + Allentown's Hamilton Street are particularly under-served opportunities for brands willing to deploy beyond the two anchors.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Pennsylvania Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Pennsylvania?",
      a: "Yes on owner-authorized walls. Philadelphia is highly permissive on private walls with property-owner consent — Mural Arts Philadelphia has built the city's tolerance for wall-based creative work. Pittsburgh follows similar patterns. Old City + historic districts need permits — we handle them.",
    },
    {
      q: "What Pennsylvania cities do you cover?",
      a: "All major PA metros: Philadelphia, Pittsburgh, Allentown, Erie, Reading, Lancaster, plus Bethlehem, Harrisburg, York, Scranton, Wilkes-Barre, and the Lehigh Valley + Susquehanna Valley corridors.",
    },
    {
      q: "How much does a Pennsylvania campaign cost?",
      a: "Single-city PA campaigns run $3,200-$6,200 (Philly + Pittsburgh on the higher end). Statewide PA rollouts hitting 4-6 metros run $14K-$24K with the multi-city volume discount. Combined Philly + NYC East Coast briefs are common.",
    },
    {
      q: "Can you handle Penn + Pitt + CMU game-weekend deployments?",
      a: "Yes. Penn + Drexel + Temple home games drive Philly campus corridor foot traffic 4x+ over baseline; Pitt + CMU football + basketball weekends do the same in Pittsburgh. Saturation campaigns timed to game weekends are a specialty.",
    },
    {
      q: "How does PA weather affect campaign timing?",
      a: "PA winters are wet and cold — paste sets slower below 45°F, and snow + ice can compromise wall adhesion. We use winter-formulated paste with methylcellulose for December-March installs. May-October is the reliable window for budget-priced campaigns.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Pennsylvania",
    description:
      "Wheat pasting and poster campaign services across Pennsylvania — Philadelphia, Pittsburgh, Allentown, Erie, Reading.",
    url: "https://www.phantompasting.com/locations/pennsylvania",
  },
};

export default function PennsylvaniaPage() {
  return <CityPageTemplate data={data} />;
}
