import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

// URL is `/locations/new-york-state` to disambiguate from the existing
// `/locations/new-york` (which is the NYC city page). State-level search
// intent ("wheat pasting new york state") routes here.

export const metadata: Metadata = {
  title: "Wheat Pasting New York State",
  description:
    "Wheat pasting & street media across New York State — NYC, Buffalo, Rochester, Yonkers, Syracuse, Albany. Statewide NY rollouts.",
  keywords: [
    "wheat pasting New York state",
    "wheatpasting New York state",
    "New York state poster campaigns",
    "New York state guerrilla marketing",
    "New York state street media",
    "New York state flyposting",
    "New York OOH advertising",
    "NYC wheat pasting",
    "Buffalo wheat pasting",
    "Rochester poster campaigns",
    "Yonkers street advertising",
    "Syracuse guerrilla marketing",
    "Albany OOH",
    "statewide New York OOH",
    ...cityBuyerIntent("New York State"),
    ...cityBuyerIntent("NYC"),
    ...cityBuyerIntent("Buffalo"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/new-york-state" },
  openGraph: {
    title: "Wheat Pasting New York State",
    description:
      "Statewide wheat paste poster campaigns across New York — NYC, Buffalo, Rochester, Yonkers, Syracuse, Albany.",
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
    "New York State is more than NYC. Buffalo's Elmwood Village + downtown corridor, Rochester's East End, Albany's Lark Street, Syracuse's Armory Square, Yonkers' Getty Square — every upstate metro has a walkable cultural core most agencies ignore. We handle NYC plus all five major upstate markets on coordinated rollouts.",
  whyTitle: "NY IS BIGGER\nTHAN MANHATTAN.",
  whyText:
    "NYC drives the volume — Lower East Side density, Williamsburg foot traffic, SoHo retail. But upstate markets carry their own audiences: Buffalo's Allentown arts scene, Rochester's Park Avenue creative class, Albany's state-government foot traffic, Syracuse's Syracuse University corridor. Statewide NY rollouts capture both NYC weight and the secondary-market markets where wall-space competition is dramatically lower.",
  neighborhoods: [
    { name: "New York City", slug: "new-york", desc: "LES, Williamsburg, SoHo, Bushwick, East Village, Chelsea, Greenpoint, DUMBO. State + national volume leader; full breakdown on the NYC page." },
    { name: "Buffalo", desc: "Elmwood Village, Allentown, downtown Buffalo, Larkin Square. Upstate cultural anchor with a dense walkable core." },
    { name: "Rochester", desc: "East End, Park Avenue corridor, Neighborhood of the Arts, downtown. Creative-class density + RIT/U-Roch student spillover." },
    { name: "Yonkers", desc: "Getty Square, downtown Yonkers, Hudson River corridor. NYC-adjacent foot traffic at lower wall-space cost." },
    { name: "Syracuse", desc: "Armory Square, Syracuse University Hill, Westcott. SU drives 22K+ undergrad density during academic year." },
    { name: "Albany", desc: "Lark Street, downtown Albany, Capital District corridor. State-government workforce + UAlbany students." },
  ],
  heroStats: [
    { stat: "6", label: "NY Metros" },
    { stat: "NYC Anchor", label: "+ 5 Upstate" },
    { stat: "DOB", label: "Scaffold Wraps" },
  ],
  heroImage1: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Wheat paste campaign across New York State" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at New York street intersection" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "NYC + 5 UPSTATE MARKETS, ONE BRIEF",
    body:
      "Most agencies route New York to NYC-only. We run NYC plus Buffalo, Rochester, Yonkers, Syracuse, and Albany from coordinated crew rotations — a brand can spec a Manhattan-led campaign with upstate overlay on the same paperwork. Buffalo's Elmwood Village and Rochester's East End are particularly under-served opportunities for brands willing to deploy beyond the five boroughs.",
    links: [
      { label: "NYC City Page", href: "/locations/new-york" },
      { label: "Incrediwear NYC Case Study", href: "/work/incrediwear-street-campaign" },
      { label: "Get a New York Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in New York State?",
      a: "Yes on authorized private walls. NYC Administrative Code §10-117 covers public-property unlawful posting but is rarely enforced on clean commercial campaigns with property-owner consent. Upstate cities (Buffalo, Rochester, Albany, Syracuse, Yonkers) are even more permissive — we secure wall rights through property managers and BIDs.",
    },
    {
      q: "What New York cities do you cover?",
      a: "NYC (all five boroughs) plus Buffalo, Rochester, Yonkers, Syracuse, Albany, plus secondary markets like Ithaca, Binghamton, Poughkeepsie, and the Hudson Valley creative corridor.",
    },
    {
      q: "How much does a New York campaign cost?",
      a: "NYC-only: $4,200-$7,800 for 80-120 posters. Statewide NY rollout (NYC + 3-4 upstate metros): $16K-$32K with the multi-city volume discount. Scaffold wraps in NYC run $2K-$8K each on top — Manhattan-specific.",
    },
    {
      q: "How quickly can a New York campaign launch?",
      a: "NYC: 7-10 business days for paste-only; scaffold wraps need 3-4 weeks for DOB permits. Upstate markets: 7-10 days. Statewide multi-city briefs need 12-15 days to coordinate crews across the regions.",
    },
    {
      q: "Do you handle scaffold wraps in NYC?",
      a: "Yes. Scaffold wraps are a Manhattan-specific premium format — $2K-$8K per wrap, DOB permit required, 3-4 week lead time. Different production path than paste; we manage permits + install + photo documentation.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — New York State",
    description:
      "Wheat pasting and poster campaign services across New York State — NYC, Buffalo, Rochester, Yonkers, Syracuse, Albany.",
    url: "https://www.phantompasting.com/locations/new-york-state",
  },
};

export default function NewYorkStatePage() {
  return <CityPageTemplate data={data} />;
}
