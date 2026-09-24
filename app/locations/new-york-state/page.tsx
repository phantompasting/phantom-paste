import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

// URL is `/locations/new-york-state` to disambiguate from the existing
// `/locations/new-york` (which is the NYC city page). State-level search
// intent ("wheat pasting new york state") routes here.
//
// 9/24/2026: re-pointed at UPSTATE. The old title ("| NYC Wheatpasting") and
// NYC-heavy copy competed with /locations/new-york for "wheat pasting nyc";
// that page then dropped out of the index. NYC now lives on one page only;
// this page links to it and otherwise sells Buffalo, Rochester, Albany, etc.

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting New York State | Buffalo to Albany" },
  description:
    "Wheat pasting in upstate New York: Buffalo, Rochester, Syracuse, Albany, Yonkers. Poster campaigns on walkable cultural cores, solo or paired with an NYC run.",
  keywords: [
    "wheat pasting New York state",
    "wheatpasting New York state",
    "New York state poster campaigns",
    "New York state guerrilla marketing",
    "New York state street media",
    "New York state flyposting",
    "upstate New York OOH advertising",
    "upstate NY wheat pasting",
    "Buffalo wheat pasting",
    "Rochester poster campaigns",
    "Yonkers street advertising",
    "Syracuse guerrilla marketing",
    "Albany OOH",
    "statewide New York OOH",
    ...cityBuyerIntent("New York State"),
    ...cityBuyerIntent("Buffalo"),
    ...cityBuyerIntent("Rochester"),
    ...cityBuyerIntent("Albany"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/new-york-state" },
  openGraph: {
    title: "Wheat Pasting New York State",
    description:
      "Wheat paste poster campaigns across upstate New York: Buffalo, Rochester, Syracuse, Albany, Yonkers.",
    url: "https://www.phantompasting.com/locations/new-york-state",
    images: [{
      url: "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste campaign across New York State — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "New York State",
  state: "NY",
  slug: "new-york-state",
  heroWord: "NEW YORK",
  intro:
    "Upstate New York is where most agencies stop quoting. Buffalo's Elmwood Village and downtown corridor, Rochester's East End, Albany's Lark Street, Syracuse's Armory Square, Yonkers' Getty Square: every upstate metro has a walkable cultural core with far less wall competition than the five boroughs. We run upstate markets on their own or as an overlay on an NYC campaign. For the five boroughs, see our New York City page.",
  whyTitle: "UPSTATE IS\nUNDER-POSTED.",
  whyText:
    "Upstate markets carry their own audiences: Buffalo's Allentown arts scene, Rochester's Park Avenue creative class, Albany's state-government foot traffic, the Syracuse University corridor. Wall space that would be contested in Manhattan sits open here, so a campaign owns the corridor instead of sharing it. Tours, college launches, and regional retail rollouts get the most out of it.",
  neighborhoods: [
    { name: "New York City", slug: "new-york", desc: "The five boroughs have their own page: neighborhoods, pricing, and recent installs." },
    { name: "Buffalo", desc: "Elmwood Village, Allentown, downtown Buffalo, Larkin Square. Upstate cultural anchor with a dense walkable core." },
    { name: "Rochester", desc: "East End, Park Avenue corridor, Neighborhood of the Arts, downtown. Creative-class density + RIT/U-Roch student spillover." },
    { name: "Yonkers", desc: "Getty Square, downtown Yonkers, Hudson River corridor. NYC-adjacent foot traffic at lower wall-space cost." },
    { name: "Syracuse", desc: "Armory Square, Syracuse University Hill, Westcott. SU drives 22K+ undergrad density during academic year." },
    { name: "Albany", desc: "Lark Street, downtown Albany, Capital District corridor. State-government workforce + UAlbany students." },
  ],
  heroStats: [
    { stat: "5", label: "Upstate Metros" },
    { stat: "Solo", label: "Or NYC Overlay" },
    { stat: "100%", label: "Documented" },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-pedestrian-street-art.webp", alt: "Wheat paste street art pedestrian urban installation New York" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at New York street intersection" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-09-24",
  spotlight: {
    eyebrow: "Upstate Capability",
    title: "FIVE UPSTATE MARKETS, ONE BRIEF",
    body:
      "Most agencies route New York to NYC-only. We run Buffalo, Rochester, Yonkers, Syracuse, and Albany from coordinated crew rotations, so a brand can book one upstate market, all five, or add them to an NYC campaign on the same paperwork. Buffalo's Elmwood Village and Rochester's East End are the most under-served opportunities in the state.",
    links: [
      { label: "New York City Page", href: "/locations/new-york" },
      { label: "Get an Upstate Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in New York State?",
      a: "Yes on authorized private walls. Upstate cities (Buffalo, Rochester, Albany, Syracuse, Yonkers) are generally more permissive than NYC. We secure wall rights through property managers and BIDs. NYC rules are covered on our New York City page.",
    },
    {
      q: "What New York cities do you cover?",
      a: "Buffalo, Rochester, Yonkers, Syracuse, and Albany, plus secondary markets like Ithaca, Binghamton, Poughkeepsie, and the Hudson Valley creative corridor. NYC's five boroughs are covered on their own page.",
    },
    {
      q: "How much does an upstate New York campaign cost?",
      a: "Upstate markets are quoted per city based on poster count and travel. A statewide rollout pairing NYC with 3-4 upstate metros runs $18K-$38K with the multi-city volume discount.",
    },
    {
      q: "How quickly can an upstate campaign launch?",
      a: "Upstate markets: 7-10 business days. Multi-city briefs covering several upstate metros, or upstate plus NYC, need 12-15 days to coordinate crews across the regions.",
    },
    {
      q: "Which upstate markets work best for wheat pasting?",
      a: "Buffalo (Elmwood Village, Allentown) and Rochester (East End, Neighborhood of the Arts) carry the densest walkable foot traffic. Syracuse and Albany peak during the academic year around SU and UAlbany. Yonkers works as a lower-cost NYC-adjacent add-on.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — New York State",
    description:
      "Wheat pasting and poster campaign services across upstate New York: Buffalo, Rochester, Yonkers, Syracuse, Albany.",
    url: "https://www.phantompasting.com/locations/new-york-state",
  },
};

export default function NewYorkStatePage() {
  return <CityPageTemplate data={data} />;
}
