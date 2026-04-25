import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

/**
 * Georgia state landing page — captures statewide search intent that the
 * Atlanta city page can't address (Savannah, Athens, Augusta, etc).
 *
 * Targets: "wheat pasting georgia", "wheatpasting georgia", "georgia poster
 * campaigns", "wheat paste georgia", and the descriptive long-tail
 * "wild posting georgia" (term mentioned in body prose, not in H1/title/
 * schema — trademark-safe per docs/seo/WILD_POSTING_PURGE_EXECUTION_SPEC.md).
 *
 * Distinct from /locations/atlanta: state page covers Atlanta + 5 secondary
 * Georgia markets, frames Georgia as a multi-city campaign region rather
 * than a single-metro deployment.
 */

export const metadata: Metadata = {
  title: "Wheat Pasting Georgia",
  description:
    "Wheat pasting and poster campaigns across Georgia — Atlanta, Savannah, Athens, Augusta, Macon, and Columbus. Statewide street postering. Get a quote.",
  keywords: [
    "wheat pasting Georgia",
    "wheatpasting Georgia",
    "Georgia poster campaigns",
    "wheat paste Georgia",
    "Georgia street postering",
    "Georgia guerrilla marketing",
    "Atlanta wheat pasting",
    "Savannah poster campaigns",
    "Georgia street media",
    "Georgia street marketing agency",
    "Georgia flyposting",
    "Georgia OOH advertising",
    "Athens wheat pasting",
    "Augusta poster campaigns",
    "Macon street advertising",
    "Columbus GA guerrilla marketing",
    "statewide Georgia OOH",
    ...cityBuyerIntent("Georgia"),
    ...cityBuyerIntent("Atlanta"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/georgia" },
  openGraph: {
    title: "Wheat Pasting Georgia",
    description:
      "Statewide wheat paste poster campaigns across Georgia — Atlanta, Savannah, Athens, Augusta, Macon, and Columbus.",
    url: "https://www.phantompasting.com/locations/georgia",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/fifa-world-cup-atlanta-wall-installation.webp",
        width: 1200,
        height: 630,
        alt: "Wheat paste poster wall installation in Atlanta — Phantom Pasting Georgia campaigns",
      },
    ],
  },
};

const data: CityPageData = {
  city: "Georgia",
  state: "GA",
  slug: "georgia",
  heroWord: "GEORGIA",
  intro:
    "Georgia is one of the most active street-marketing markets in the Southeast. Atlanta drives the volume, but Savannah, Athens, Augusta, Macon, and Columbus each carry their own walkable corridors, college foot traffic, and event-driven calendars. We deploy wheat paste poster campaigns and chalk stencils across all six markets — single-city activations or full statewide rollouts.",
  whyTitle: "GEORGIA\nLIVES ON THE STREET.",
  whyText:
    "Georgia's growth has compounded across multiple cities. Atlanta is the cultural and commercial anchor — fashion, music, film, and sports converge here — but the secondary markets have caught up. Savannah's tourism corridor, Athens' UGA-driven nightlife, and Augusta's Masters-week density all create high-traffic windows where street-level placements outperform digital. Statewide campaigns let brands hit the ATL volume without leaving the long-tail markets on the table.",
  neighborhoods: [
    {
      name: "Atlanta",
      desc: "Midtown, Little Five Points, Buckhead, East Atlanta Village, Old Fourth Ward, Decatur. State-leading volume, fastest install windows.",
    },
    {
      name: "Savannah",
      desc: "Historic District foot traffic plus the Starland District arts corridor. Tourism + locals year-round; SCAD student density adds shoulder-season volume.",
    },
    {
      name: "Athens",
      desc: "UGA campus zone, downtown Athens bar district, and Five Points. College-town walkability creates dense, repeat-exposure poster placements.",
    },
    {
      name: "Augusta",
      desc: "Downtown Broad Street corridor and Summerville. Masters Week creates a high-density tourism spike every April — premium placement window.",
    },
    {
      name: "Macon",
      desc: "Downtown Macon and Mercer Village. Smaller market, lower competition for wall space, strong returns on focused campaigns.",
    },
    {
      name: "Columbus",
      desc: "Uptown Columbus and the RiverWalk. College + military-base population gives the city an outsized foot-traffic profile.",
    },
  ],
  heroImage1: { src: "/gallery/fifa-world-cup-atlanta-wall-installation.webp", alt: "Wheat paste wall installation in Atlanta, Georgia" },
  heroImage2: { src: "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp", alt: "FIFA World Cup poster wall in Atlanta, Georgia" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "ONE QUOTE, EVERY GEORGIA MARKET",
    body:
      "Most agencies route Atlanta-only and outsource Savannah, Athens, Augusta, Macon, and Columbus to subcontractors. Phantom Pasting runs all six in-house, which means a single brief, a single price sheet, and unified photo documentation across the entire state. For descriptive context: this is the same medium often called wild posting, flyposting, or street postering — we use the term wheat pasting because it names the actual material. Atlanta-led campaigns can scale statewide on 48 hours' notice when the timing requires it.",
    links: [
      { label: "See an Atlanta Campaign", href: "/work/fifa-world-cup-atlanta" },
      { label: "Atlanta City Page", href: "/locations/atlanta" },
      { label: "Get a Georgia Quote", href: "/contact" },
    ],
  },
  // Service schema base — CityPageTemplate enriches with @type, provider,
  // areaServed (State), and offers.
  localBusiness: {
    name: "Phantom Pasting — Georgia",
    description:
      "Wheat pasting and poster campaign services across Georgia — Atlanta, Savannah, Athens, Augusta, Macon, and Columbus.",
    url: "https://www.phantompasting.com/locations/georgia",
  },
};

export default function GeorgiaPage() {
  return <CityPageTemplate data={data} />;
}
