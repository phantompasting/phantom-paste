import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Massachusetts",
  description:
    "Wheat pasting & street media across Massachusetts — Boston, Cambridge, Worcester, Springfield, Lowell. Statewide MA rollouts.",
  keywords: [
    "wheat pasting Massachusetts",
    "wheatpasting Massachusetts",
    "Massachusetts poster campaigns",
    "Massachusetts guerrilla marketing",
    "Massachusetts street media",
    "Massachusetts flyposting",
    "Massachusetts OOH advertising",
    "Boston wheat pasting",
    "Cambridge wheat pasting",
    "Worcester poster campaigns",
    "Springfield MA street advertising",
    "Lowell guerrilla marketing",
    "statewide Massachusetts OOH",
    ...cityBuyerIntent("Massachusetts"),
    ...cityBuyerIntent("Boston"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/massachusetts" },
  openGraph: {
    title: "Wheat Pasting Massachusetts",
    description:
      "Statewide wheat paste poster campaigns across Massachusetts — Boston, Cambridge, Worcester, Springfield, Lowell.",
    url: "https://www.phantompasting.com/locations/massachusetts",
    images: [{
      url: "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Massachusetts — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Massachusetts",
  state: "MA",
  slug: "massachusetts",
  heroWord: "MASSACHUSETTS",
  intro:
    "Massachusetts is one of the densest college-market states in the country. Boston + Cambridge concentrate Harvard, MIT, BU, BC, Northeastern, Tufts, Berklee, and a dozen more — 250K+ undergrad density inside a 5-mile radius. Worcester, Springfield, Lowell each carry their own university anchors. Statewide MA campaigns are uniquely aligned to academic-calendar windows.",
  whyTitle: "MA IS COLLEGE-MARKET\nSTREET MEDIA.",
  whyText:
    "No other state concentrates this much student density. Boston-Cambridge alone is 250K+ undergrads — Harvard Square, Allston, Mission Hill, Northeastern campus, BC's Chestnut Hill. Worcester adds Holy Cross + WPI. Springfield has UMass spillover. Statewide MA briefs anchored to the academic calendar (move-in week September, finals December, spring semester January, May graduations) drive 5-10x baseline foot traffic in campus corridors.",
  neighborhoods: [
    { name: "Boston", slug: "boston", desc: "Allston, Mission Hill, Fenway-Kenmore, Back Bay, North End, Seaport. State volume leader; college + biotech + sports overlay." },
    { name: "Cambridge", desc: "Harvard Square, Central Square, Kendall Square, Inman Square. MIT + Harvard creative-class density." },
    { name: "Worcester", desc: "Downtown Worcester, Canal District, Shrewsbury Street. Holy Cross + WPI + Clark + Worcester State (40K+ combined undergrads)." },
    { name: "Springfield", desc: "Downtown Springfield, Forest Park corridor. Western MA anchor + Springfield College + AIC." },
    { name: "Lowell", desc: "Downtown Lowell, UMass Lowell campus zone. North Shore market with growing arts scene." },
    { name: "New Bedford", desc: "Downtown New Bedford historic district. South Coast market often skipped by Boston-only briefs." },
  ],
  heroImage1: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Wheat paste pole wrap in Massachusetts at night" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Massachusetts street intersection" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "BOSTON + CAMBRIDGE + 4 SECONDARY MA",
    body:
      "Most agencies route Massachusetts to Boston-only. We run Boston + Cambridge plus Worcester, Springfield, Lowell, and New Bedford from coordinated crew rotations — a brand can spec a Harvard Square saturation with overflow into Worcester + Lowell on the same paperwork. MA's college-calendar windows (move-in week September, spring semester January, graduations May) drive the highest-attention deployments.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Massachusetts Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Massachusetts?",
      a: "Yes on owner-authorized walls. Boston is permissive on private walls with property-owner consent. Cambridge follows similar patterns. Historic districts (Beacon Hill, Back Bay) need permits — we handle them.",
    },
    {
      q: "When is the best time to run Massachusetts campaigns?",
      a: "Anchor to the academic calendar. Move-in week (early September) drives 5x+ baseline foot traffic in campus corridors. Spring semester start (mid-January), finals weeks (December + May), and graduation weekends (May) are the next-highest windows.",
    },
    {
      q: "What Massachusetts cities do you cover?",
      a: "All major MA metros: Boston, Cambridge, Worcester, Springfield, Lowell, New Bedford, plus Brockton, Quincy, Lynn, Newton, Somerville, Medford, and the Greater Boston suburb cluster.",
    },
    {
      q: "How much does a Massachusetts campaign cost?",
      a: "Boston-only: $3,800-$6,500 (Harvard Square + Back Bay land at the higher end). Statewide MA rollouts (Boston + 3-4 secondary cities) run $13K-$22K with the multi-city volume discount.",
    },
    {
      q: "Can you handle the New England college-tour circuit?",
      a: "Yes — MA + RI + NH + ME college markets share crew rotations during peak windows. Combined briefs hitting Boston, Providence, Hanover, Burlington VT, Portland ME on a single launch are common during fall move-in + spring graduation seasons.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Massachusetts",
    description:
      "Wheat pasting and poster campaign services across Massachusetts — Boston, Cambridge, Worcester, Springfield, Lowell.",
    url: "https://www.phantompasting.com/locations/massachusetts",
  },
};

export default function MassachusettsPage() {
  return <CityPageTemplate data={data} />;
}
