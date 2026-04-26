import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Texas",
  description:
    "Wheat pasting & street media across Texas — Houston, Dallas, Austin, San Antonio, Fort Worth, El Paso. Statewide TX rollouts.",
  keywords: [
    "wheat pasting Texas",
    "wheatpasting Texas",
    "Texas poster campaigns",
    "Texas guerrilla marketing",
    "Texas street media",
    "Texas street postering",
    "Texas flyposting",
    "Texas OOH advertising",
    "Houston wheat pasting",
    "Dallas wheat pasting",
    "Austin poster campaigns",
    "San Antonio street advertising",
    "Fort Worth guerrilla marketing",
    "El Paso OOH",
    "statewide Texas OOH",
    ...cityBuyerIntent("Texas"),
    ...cityBuyerIntent("Houston"),
    ...cityBuyerIntent("Austin"),
    ...cityBuyerIntent("Dallas"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/texas" },
  openGraph: {
    title: "Wheat Pasting Texas",
    description:
      "Statewide wheat paste poster campaigns across Texas — Houston, Dallas, Austin, San Antonio, Fort Worth, El Paso.",
    url: "https://www.phantompasting.com/locations/texas",
    images: [{
      url: "https://www.phantompasting.com/gallery/fifa-world-cup-poster-wall-gallery-wide.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Texas — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Texas",
  state: "TX",
  slug: "texas",
  heroWord: "TEXAS",
  intro:
    "Texas runs four major metros plus a string of fast-growing secondary markets. Houston's Montrose + Heights, Dallas's Deep Ellum + Bishop Arts, Austin's South Congress + East 6th, San Antonio's Pearl District, Fort Worth's West 7th — every Texas city has a walkable corridor where wheat paste lands hard. Statewide TX rollouts hit 4-6 metros on a single brief.",
  whyTitle: "TX IS A FOUR-METRO\nSTATE AT MINIMUM.",
  whyText:
    "Texas is the second-most-populous state but most agencies treat it as Houston-or-Dallas. The reality: Austin's SXSW + ACL drive a full year of festival-window campaigns, San Antonio's Pearl District is the South's fastest-growing arts corridor, Fort Worth's West 7th is its own creative class. Statewide briefs let brands hit Houston volume without abandoning the secondary markets where wall-space competition is dramatically lower.",
  neighborhoods: [
    { name: "Houston", slug: "houston", desc: "Montrose, Heights, Midtown, EaDo, Rice Village. Largest TX metro; energy + medical + arts overlay." },
    { name: "Dallas", slug: "dallas", desc: "Deep Ellum, Bishop Arts District, Lower Greenville, Uptown. Music + nightlife + creative-class density." },
    { name: "Austin", slug: "austin", desc: "South Congress, East 6th, Rainey Street, Domain. SXSW + ACL window drives festival-grade saturation campaigns." },
    { name: "San Antonio", desc: "Pearl District, Southtown, downtown Riverwalk corridor. Fast-growing arts scene + tourism foot traffic." },
    { name: "Fort Worth", desc: "West 7th Street, Sundance Square, Near Southside. DFW counterpart with its own creative-class density." },
    { name: "El Paso", desc: "Downtown Arts District, Mesa Street corridor. Border-region market often skipped by national agencies." },
  ],
  heroStats: [
    { stat: "6", label: "TX Metros" },
    { stat: "SXSW + ACL", label: "Festival Specialty" },
    { stat: "1 Brief", label: "Statewide Rollouts" },
  ],
  heroImage1: { src: "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp", alt: "Wheat paste poster campaign across Texas" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Texas street intersection" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "HOUSTON + DALLAS + AUSTIN + 3 SECONDARY",
    body:
      "Most agencies treat Texas as Houston OR Dallas OR Austin and pick one. We run all six TX metros from coordinated crew rotations — a brand can spec a SXSW-week Austin saturation with overflow into San Antonio + Houston on the same paperwork. The medium is also called wild posting, flyposting, or street postering depending on the audience; wheat pasting names the actual material we use. Austin's SXSW window and Dallas's Deep Ellum are the biggest under-served opportunities for brands deploying beyond a single metro.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Texas Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Texas?",
      a: "Yes on owner-authorized walls. Texas has no state-level prohibition on commercial wheat pasting; cities handle their own ordinances. Houston, Dallas, Austin, San Antonio, and Fort Worth are all permissive on private walls with property-owner consent. Historic districts (Bishop Arts, Pearl, etc.) need permits — we handle those.",
    },
    {
      q: "What Texas cities do you cover?",
      a: "All major TX metros: Houston, Dallas, Austin, San Antonio, Fort Worth, El Paso, plus secondary markets like Plano, Arlington, Corpus Christi, Lubbock, McAllen, Waco, College Station, and the Texas Triangle suburbs.",
    },
    {
      q: "How much does a Texas wheat pasting campaign cost?",
      a: "Single-city TX campaigns run $3,200-$6,800 (Austin during SXSW lands at the higher end). Statewide TX rollouts hitting 4-6 metros run $14K-$26K with the multi-city volume discount.",
    },
    {
      q: "When is the best time to run Austin campaigns?",
      a: "SXSW (March), ACL (October), and the F1 race weekend (October) drive the highest-attention windows. Wall space books out 4-6 weeks ahead during those windows; everything else is rolling availability with 7-10 day lead times.",
    },
    {
      q: "Can you handle festival-week deployments in Austin?",
      a: "Yes. SXSW + ACL campaigns are a specialty — high-density saturation across South Congress, East 6th, Rainey, and the Convention Center perimeter, timed to the official event windows with rolling refresh. Book 6 weeks ahead for festival weeks.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Texas",
    description:
      "Wheat pasting and poster campaign services across Texas — Houston, Dallas, Austin, San Antonio, Fort Worth, El Paso.",
    url: "https://www.phantompasting.com/locations/texas",
  },
};

export default function TexasPage() {
  return <CityPageTemplate data={data} />;
}
