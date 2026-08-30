import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Ohio | Columbus, Cleveland & Cincinnati Campaigns" },
  description:
    "Wheat pasting across Ohio — Columbus Short North, Cleveland Ohio City, Cincinnati Over-the-Rhine. Three-C statewide rollouts on one brief with photo proof.",
  keywords: [
    "wheat pasting Ohio",
    "wheatpasting Ohio",
    "Ohio poster campaigns",
    "Ohio guerrilla marketing",
    "Ohio street media",
    "Ohio flyposting",
    "Columbus wheat pasting",
    "Cleveland wheat pasting",
    "Cincinnati wheat pasting",
    "Over-the-Rhine street advertising",
    "Short North poster campaigns",
    "statewide Ohio OOH",
    ...cityBuyerIntent("Ohio"),
    ...cityBuyerIntent("Columbus"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/ohio" },
  openGraph: {
    title: "Wheat Pasting Ohio",
    description:
      "Statewide wheat paste poster campaigns across Ohio — Columbus, Cleveland, Cincinnati, Dayton, Akron.",
    url: "https://www.phantompasting.com/locations/ohio",
    images: [{
      url: "https://www.phantompasting.com/gallery/fifa-world-cup-poster-wall-gallery-wide.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Ohio — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Ohio",
  state: "OH",
  slug: "ohio",
  heroWord: "OHIO",
  intro:
    "Ohio is a three-anchor state — Columbus, Cleveland, and Cincinnati each carry a real street culture of their own. Columbus' Short North Arts District, Cleveland's Ohio City + Tremont, and Cincinnati's Over-the-Rhine are three of the Midwest's best wheat paste corridors, and a single Three-C brief covers 5M+ metro residents.",
  whyTitle: "THREE ANCHOR CITIES.\nONE THREE-C BRIEF.",
  whyText:
    "Most national vendors treat Ohio as a drive-through. It isn't. Columbus is a top-15 US city with OSU's 60K+ students feeding the Short North and High Street. Cleveland's Ohio City, Tremont, and Waterloo arts corridors have gallery-district wall culture. Cincinnati's Over-the-Rhine is one of America's densest historic streetscapes — Findlay Market foot traffic alone rivals coastal corridors. We run all three from one coordinated rotation.",
  neighborhoods: [
    { name: "Columbus", desc: "Short North Arts District, High Street, OSU campus zone, Franklinton. State's volume leader — 60K+ student density plus gallery-hop foot traffic." },
    { name: "Cleveland", desc: "Ohio City, Tremont, Waterloo Arts District, Detroit-Shoreway, downtown/E. 4th. Mural-friendly wall stock across the near-west side." },
    { name: "Cincinnati", desc: "Over-the-Rhine, Findlay Market corridor, Northside, Clifton/UC campus. OTR's historic Italianate blocks are a photographer's dream for reports." },
    { name: "Dayton", desc: "Oregon District, downtown Dayton. Compact walkable entertainment strip, often skipped by national buys." },
    { name: "Akron", desc: "Highland Square, downtown Akron, University of Akron zone. Northeast Ohio add-on to Cleveland rotations." },
  ],
  heroImage1: { src: "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp", alt: "FIFA World Cup wheat paste poster wall wide view" },
  heroImage2: { src: "/gallery/dont-fall-off-wheat-paste-street-view-la.webp", alt: "Wheat paste poster wall street view" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-08-29",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "COLUMBUS + CLEVELAND + CINCINNATI, SAME PAPERWORK",
    body:
      "A Three-C rollout hits all three anchor metros on one brief, one price sheet, one photo report — Short North saturation, Ohio City gallery walls, and OTR historic blocks in a single coordinated week. OSU football Saturdays and OTR's festival calendar (BLINK Cincinnati is one of the largest light-art festivals in the US) are the state's highest-density windows.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get an Ohio Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Ohio?",
      a: "Yes on owner-authorized walls. Columbus, Cleveland, and Cincinnati all permit posters on private property with owner consent — OTR and the Short North have long-standing poster cultures. We work from our own database of authorized walls in each metro.",
    },
    {
      q: "What Ohio cities do you cover?",
      a: "Columbus, Cleveland, Cincinnati, Dayton, and Akron as standing markets, plus Toledo, Youngstown, and college towns like Athens (OU) and Oxford (Miami) on a per-campaign basis.",
    },
    {
      q: "How much does an Ohio campaign cost?",
      a: "Single-city Ohio campaigns run $2,800–$5,500 depending on poster count. A Three-C statewide rollout covering Columbus + Cleveland + Cincinnati runs $10K–$18K with multi-city volume pricing on one brief.",
    },
    {
      q: "How long do posters last in Ohio weather?",
      a: "4–6 weeks typical. Ohio's humidity and lake-effect precipitation are average for the Midwest; we schedule installs around rain windows and every placement is photo-documented within 48 hours, so your proof exists regardless of weather.",
    },
    {
      q: "Can you time campaigns to OSU game weekends or BLINK Cincinnati?",
      a: "Yes — OSU home Saturdays put 100K+ people around High Street, and BLINK weekend floods OTR with 2M+ visitors. Event-window saturation books 4–6 weeks ahead for those dates.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Ohio",
    description:
      "Wheat pasting and poster campaign services across Ohio — Columbus, Cleveland, Cincinnati, Dayton, Akron.",
    url: "https://www.phantompasting.com/locations/ohio",
  },
};

export default function OhioPage() {
  return <CityPageTemplate data={data} />;
}
