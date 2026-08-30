import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting North Carolina | Charlotte & Raleigh Campaigns" },
  description:
    "Wheat pasting across North Carolina — Charlotte NoDa, Raleigh, Durham, Asheville River Arts District. Statewide NC rollouts with GPS photo proof.",
  keywords: [
    "wheat pasting North Carolina",
    "wheatpasting North Carolina",
    "North Carolina poster campaigns",
    "North Carolina guerrilla marketing",
    "NC street media",
    "Charlotte wheat pasting",
    "Raleigh wheat pasting",
    "Durham poster campaigns",
    "Asheville street advertising",
    "NoDa guerrilla marketing",
    "Research Triangle OOH",
    "statewide North Carolina OOH",
    ...cityBuyerIntent("North Carolina"),
    ...cityBuyerIntent("Charlotte"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/north-carolina" },
  openGraph: {
    title: "Wheat Pasting North Carolina",
    description:
      "Statewide wheat paste poster campaigns across North Carolina — Charlotte, Raleigh, Durham, Asheville, Greensboro.",
    url: "https://www.phantompasting.com/locations/north-carolina",
    images: [{
      url: "https://www.phantompasting.com/gallery/zach-john-king-im-what-you-get-wheat-paste-poster-grid-storefront-nashville.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across North Carolina — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "North Carolina",
  state: "NC",
  slug: "north-carolina",
  heroWord: "NORTH CAROLINA",
  intro:
    "North Carolina splits into two campaign shapes: Charlotte's banking-city density (NoDa, South End, Plaza Midwood) and the Research Triangle's 3-city university cluster (Raleigh, Durham, Chapel Hill). Add Asheville's River Arts District and you have four distinct audiences reachable on one statewide brief.",
  whyTitle: "CHARLOTTE DENSITY.\nTRIANGLE BRAINPOWER.",
  whyText:
    "Charlotte's NoDa and South End corridors sit on the light-rail line — commuter foot traffic plus brewery-district nightlife in one run. The Triangle is 8 major universities inside a 25-mile radius: Duke, UNC, NC State pump 100K+ students past downtown Durham, Franklin Street, and Glenwood South. Asheville's River Arts District is one of the Southeast's most established street-art zones, where wheat paste reads as native, not intrusive.",
  neighborhoods: [
    { name: "Charlotte", desc: "NoDa (North Davidson arts district), South End rail trail, Plaza Midwood, Uptown. State volume leader on the Blue Line corridor." },
    { name: "Raleigh", desc: "Glenwood South, downtown Fayetteville Street, NC State's Hillsborough Street, Warehouse District. Triangle's nightlife anchor." },
    { name: "Durham", desc: "Downtown Durham loop, American Tobacco Campus, Ninth Street, Duke East Campus edge. Startup + research crowd." },
    { name: "Asheville", desc: "River Arts District, South Slope brewery zone, downtown Lexington Ave. Street-art native walls; tourism foot traffic year-round." },
    { name: "Greensboro", desc: "Downtown Elm Street, UNCG corridor. Piedmont Triad add-on market." },
  ],
  heroImage1: { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-poster-grid-storefront-nashville.webp", alt: "Wheat paste poster grid on storefront" },
  heroImage2: { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-posters-brick-wall-nashville.webp", alt: "Wheat paste posters on brick wall" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-08-29",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "CHARLOTTE + THE TRIANGLE + ASHEVILLE, ONE BRIEF",
    body:
      "A statewide NC rollout covers Charlotte's rail corridor, all three Triangle cities, and Asheville's arts district from one coordinated crew rotation. Album drops, tour announcements, and DTC launches targeting the 18–34 college demographic get unusual mileage here — the Triangle's student density per square mile is among the highest in the South.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get an NC Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in North Carolina?",
      a: "Yes on owner-authorized private walls. Charlotte's NoDa and Asheville's River Arts District have established poster-and-mural cultures; Raleigh and Durham follow standard private-property consent rules. We only use our own database of authorized walls.",
    },
    {
      q: "What North Carolina cities do you cover?",
      a: "Charlotte, Raleigh, Durham, Asheville, and Greensboro as standing markets, plus Chapel Hill, Winston-Salem, and Wilmington on a per-campaign basis.",
    },
    {
      q: "How much does a North Carolina campaign cost?",
      a: "Single-city NC campaigns run $2,800–$5,500. Statewide rollouts hitting Charlotte + the Triangle + Asheville run $10K–$18K on one brief with multi-city volume pricing.",
    },
    {
      q: "Can you saturate the Research Triangle universities?",
      a: "Yes — Duke, UNC, and NC State sit within 25 miles of each other, so a single install window can hit all three campus edges plus downtown Durham and Glenwood South. Move-in weeks (August) and basketball season are peak windows.",
    },
    {
      q: "How long do posters last in NC weather?",
      a: "4–6 weeks typical. Southeastern humidity is the main factor; Asheville's mountain climate runs slightly longer. Every install is photo-documented within 48 hours so proof exists regardless of weather.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — North Carolina",
    description:
      "Wheat pasting and poster campaign services across North Carolina — Charlotte, Raleigh, Durham, Asheville, Greensboro.",
    url: "https://www.phantompasting.com/locations/north-carolina",
  },
};

export default function NorthCarolinaPage() {
  return <CityPageTemplate data={data} />;
}
