import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

/**
 * Florida state landing page — captures statewide search intent that the
 * Miami city page can't address (Tampa, Orlando, Jacksonville, Ft. Lauderdale,
 * St. Petersburg).
 *
 * Targets: "wheat pasting florida", "wheatpasting florida", "florida poster
 * campaigns", "wheat paste florida", "florida street postering", and the
 * descriptive long-tail "wild posting florida" / "wild posting tampa" /
 * "wild posting orlando" (terms used in body prose only — never in H1 or
 * schema, per docs/seo/WILD_POSTING_PURGE_EXECUTION_SPEC.md).
 *
 * GSC weekly directive flagged Florida as one of the four striking-distance
 * states (alongside Georgia, Illinois, Atlanta) where state-level keywords
 * rank 9-20 with zero clicks. Building this page captures the statewide
 * intent that's currently bleeding to competitors.
 */

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Florida | Miami + Tampa Wheatpasting" },
  description:
    "Wheat pasting across Florida — Miami, Tampa Ybor City, Orlando Mills 50, Jacksonville, Ft. Lauderdale. Statewide FL, Art Basel + spring break peak windows.",
  keywords: [
    "wheat pasting Florida",
    "wheatpasting Florida",
    "Florida poster campaigns",
    "wheat paste Florida",
    "Florida street postering",
    "Florida guerrilla marketing",
    "Miami wheat pasting",
    "Tampa poster campaigns",
    "Florida street media",
    "Florida street marketing agency",
    "Florida flyposting",
    "Florida OOH advertising",
    "Orlando wheat pasting",
    "Jacksonville poster campaigns",
    "Ft Lauderdale street advertising",
    "St Petersburg guerrilla marketing",
    "statewide Florida OOH",
    ...cityBuyerIntent("Florida"),
    ...cityBuyerIntent("Miami"),
    ...cityBuyerIntent("Tampa"),
    ...cityBuyerIntent("Orlando"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/florida" },
  openGraph: {
    title: "Wheat Pasting Florida",
    description:
      "Statewide wheat paste poster campaigns across Florida — Miami, Tampa, Orlando, Jacksonville, Ft. Lauderdale, and St. Petersburg.",
    url: "https://www.phantompasting.com/locations/florida",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",
        width: 1200,
        height: 630,
        alt: "Wheat paste poster wall campaign in Florida — Phantom Pasting statewide rollouts",
      },
    ],
  },
};

const data: CityPageData = {
  city: "Florida",
  state: "FL",
  slug: "florida",
  heroWord: "FLORIDA",
  intro:
    "Florida is a six-market state when you treat it right — Miami's Wynwood + Design District drive year-round event density, Tampa's downtown + Ybor City carry the bay-area foot traffic, Orlando's Mills 50 + Thornton Park anchor central FL, Jacksonville's Five Points + Riverside hold the northeast, and Ft. Lauderdale + St. Petersburg fill the gaps. Statewide wheat pasting rollouts hit all of them on one brief.",
  whyTitle: "FLORIDA\nIS MORE THAN MIAMI.",
  whyText:
    "Most agencies route Florida to Miami and stop. The reality on the ground: Tampa's Ybor City has one of the most walkable arts corridors in the South, Orlando's Mills 50 is the indie-music + foodie zone that rewards street campaigns, Jacksonville's Riverside has a creative-class density Northeast Florida agencies completely miss, and St. Petersburg's downtown grid is Florida's most pedestrianized core. Statewide briefs let brands hit Miami volume without leaving the secondary FL markets on the table.",
  neighborhoods: [
    {
      name: "Miami",
      slug: "miami",
      desc: "Wynwood, South Beach, Brickell, Design District. State-leading volume, year-round event density, full neighborhood breakdown on the Miami page.",
    },
    {
      name: "Tampa",
      desc: "Ybor City, downtown Tampa, Hyde Park, Seminole Heights. Walkable arts corridor + bay-area foot traffic; under-served by major OOH agencies.",
    },
    {
      name: "Orlando",
      desc: "Mills 50, Thornton Park, downtown Orlando, College Park. Indie music + foodie scene, central-FL volume hub away from theme-park traffic.",
    },
    {
      name: "Jacksonville",
      desc: "Five Points, Riverside/Avondale, San Marco, downtown. Northeast Florida creative-class density; lower wall-space competition than peer markets.",
    },
    {
      name: "Ft. Lauderdale",
      desc: "Las Olas Boulevard, Wilton Manors, FAT Village. Walkable downtown + arts-district mix; tight overlap with Miami brand calendars.",
    },
    {
      name: "St. Petersburg",
      desc: "Central Avenue corridor, Grand Central District, downtown St. Pete. One of Florida's most pedestrianized urban cores; year-round mural-tourism foot traffic.",
    },
  ],
  heroStats: [
    { stat: "6", label: "FL Metros" },
    { stat: "Art Basel", label: "Miami Anchor" },
    { stat: "PVA", label: "Hurricane-Reinforced" },
  ],
  heroImage1: { src: "/gallery/wheat-paste-wall-location-los-angeles-wide.webp", alt: "Wheat paste wall location wide shot" },
  heroImage2: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Urban wheat paste poster wall pink background" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-04-25",
  pricingTiers: [
    { tier: "Single-City FL Campaign", range: "$3,500 – $6,800", includes: "Miami runs higher during Art Basel · 1 FL metro · Photo doc + install report" },
    { tier: "Statewide FL Rollout", range: "$15K – $28K", includes: "4–6 metros · Multi-city volume discount · PVA-reinforced for hurricane season" },
  ],
  faqs: [
    { q: "Is wheat pasting legal in Florida?", a: "Yes on owner-authorized walls. Florida has no state-level prohibition; cities handle their own ordinances. Miami's Wynwood is highly permissive (the world's largest outdoor mural complex is built on it). Tampa, Orlando, Jacksonville, Ft. Lauderdale, St. Petersburg all follow similar patterns." },
    { q: "What Florida cities do you cover?", a: "All major FL metros: Miami, Tampa, Orlando, Jacksonville, Ft. Lauderdale, St. Petersburg, plus secondary markets like Hialeah, Pembroke Pines, Tallahassee, Sarasota, Gainesville, and Pensacola." },
    { q: "How much does a Florida wheat pasting campaign cost?", a: "Single-city FL campaigns run $3,500-$6,800 (Miami during Art Basel runs higher). Statewide rollouts hitting 4-6 metros run $15K-$28K with the multi-city volume discount." },
    { q: "How does Florida hurricane season affect campaigns?", a: "Hurricane season (June-November) carries wash-off + damage risk. We use PVA-reinforced paste for FL installs that holds 6-8 weeks even through storm windows. October-May is the reliable window for budget-priced campaigns; Art Basel (early December) is the year's highest-volume event." },
    { q: "Can you handle Art Basel week saturation in Miami?", a: "Yes — it's a specialty. Art Basel (early December) drives Wynwood + Design District + South Beach foot traffic 8-10x over baseline. Saturation campaigns timed to Art Basel + Miami Music Week (March) book 8-10 weeks ahead." },
    { q: "Do you offer wheatpaste advertising in Florida?", a: "Yes — wheatpaste advertising, wheat paste posting, wild posting, and flyposting are all names for the same service: paper posters installed on owner-authorized walls. We run it across Miami, Tampa, and Orlando with the same crews and the same pricing, whichever term your brief uses." },
    { q: "Do you offer mural advertising in St. Petersburg?", a: "Yes — commissioned murals through our managed service, and St. Pete is one of the fastest-rising mural markets in the country: a decade of wall growth along Central Avenue, an annual mural festival, and commission costs still well below Miami's. Our featured artist roster is Florida-based, making St. Pete home-state service area." },
  ],
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "MIAMI + 5 SECONDARY MARKETS, ONE BRIEF",
    body:
      "Most agencies treat Florida as Miami-only. We run Miami plus Tampa, Orlando, Jacksonville, Ft. Lauderdale, and St. Petersburg from the same crew rotation, which means a brand can spec a Miami-led campaign with secondary-market overlay on the same paperwork. The medium is also called wild posting, flyposting, or street postering depending on the audience — wheat pasting names the actual material we use. Tampa's Ybor City corridor and Orlando's Mills 50 are particularly under-served opportunities for brands willing to deploy beyond the Miami beach core.",
    links: [
      { label: "Miami City Page", href: "/locations/miami" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Florida Quote", href: "/contact" },
    ],
  },
  // Service schema base — CityPageTemplate enriches with @type, provider,
  // areaServed (State), and offers.
  localBusiness: {
    name: "Phantom Pasting — Florida",
    description:
      "Wheat pasting and poster campaign services across Florida — Miami, Tampa, Orlando, Jacksonville, Ft. Lauderdale, and St. Petersburg.",
    url: "https://www.phantompasting.com/locations/florida",
  },
};

export default function FloridaPage() {
  return <CityPageTemplate data={data} />;
}
