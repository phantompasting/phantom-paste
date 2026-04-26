import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Boston",
  description:
    "Wheat pasting in Boston — poster campaigns across Allston, Mission Hill, Fenway-Kenmore, Back Bay, North End, Seaport. College-market saturation.",
  keywords: [
    "wheat pasting Boston",
    "Boston poster campaigns",
    "Boston guerrilla marketing",
    "Boston street media",
    "Boston street postering",
    "Boston flyposting",
    "Boston OOH advertising",
    "Allston wheat pasting",
    "Mission Hill poster campaigns",
    "Fenway street advertising",
    "Back Bay guerrilla marketing",
    "Seaport OOH",
    ...cityBuyerIntent("Boston"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/boston" },
  openGraph: {
    title: "Wheat Pasting Boston",
    description: "Large-format wheat paste campaigns across Boston. Allston, Mission Hill, Fenway-Kenmore, Back Bay.",
    url: "https://www.phantompasting.com/locations/boston",
    images: [{ url: "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", width: 1200, height: 630, alt: "Wheat paste campaign in Boston" }],
  },
};

const data: CityPageData = {
  city: "Boston",
  state: "MA",
  slug: "boston",
  heroWord: "BOSTON",
  intro:
    "Boston is one of the country's most college-dense cities — Harvard, MIT, BU, BC, Northeastern, Tufts, Berklee, Suffolk, Emerson concentrate 250K+ undergrads inside 5 miles. Allston-Brighton drives student density, Mission Hill carries Northeastern + medical campus foot traffic, Fenway-Kenmore peaks during Red Sox + concerts, Back Bay + Seaport handle the affluent + tech audiences.",
  whyTitle: "BOSTON IS\nCOLLEGE-MARKET CAPITAL.",
  whyText:
    "No US city concentrates this much student density inside this small a footprint. Allston is BU + BC student-housing central; Mission Hill draws Northeastern + Wentworth + Mass College of Pharmacy; Fenway-Kenmore peaks year-round on game days and concert nights; Cambridge across the river adds Harvard + MIT density. Move-in week (early September) drives 5x baseline foot traffic; spring semester start (mid-January), finals (December + May), and graduation weekends (May) round out the academic-calendar peaks.",
  neighborhoods: [
    { name: "Allston", desc: "Brighton Avenue, Harvard Avenue. BU + BC student-housing density; turnover-week foot traffic peaks." },
    { name: "Mission Hill", desc: "Tremont Street, Huntington Avenue. Northeastern + Wentworth + medical campus density." },
    { name: "Fenway-Kenmore", desc: "Lansdowne, Boylston Street. Red Sox + concert-night foot traffic anchor." },
    { name: "Back Bay", desc: "Newbury Street, Boylston, Comm Ave. Affluent retail corridor + Public Library + Copley Square density." },
    { name: "North End", desc: "Hanover Street, Salem Street. Tourism + restaurant-district foot traffic anchor." },
    { name: "Seaport", desc: "Seaport Boulevard, Fan Pier. Tech-corporate workforce + new-build density." },
  ],
  heroImage1: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Wheat paste pole wrap in Boston at night" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at Boston street intersection" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "College-Market Spotlight",
    title: "ANCHOR TO THE ACADEMIC CALENDAR",
    body:
      "Boston's biggest street-marketing windows are academic. Move-in week (early September) drives 5x baseline foot traffic in Allston, Mission Hill, and the BC + BU + Northeastern + Harvard catchment areas. Spring semester start (mid-January), finals weeks (December + May), and graduation weekends (May, especially Harvard's late May) carry the next-highest density. The medium is also called wild posting, flyposting, or street postering depending on the audience.",
    links: [
      { label: "Massachusetts State Page", href: "/locations/massachusetts" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Boston Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Boston?", a: "Yes on owner-authorized walls. Boston is permissive on private walls with property-owner consent. Beacon Hill + Back Bay historic districts need permits; we handle them." },
    { q: "When is the best time to run Boston campaigns?", a: "Move-in week (first week September) drives the year's highest student-density foot traffic. Other peak windows: spring semester start (mid-January), finals (December + May), graduations (May), Red Sox home stand, and major Boston Garden concert nights." },
    { q: "How much does a Boston wheat pasting campaign cost?", a: "Single-neighborhood test: $3,000-$4,500 for 60-90 posters. Full-city activation across 4-5 districts: $11K-$18K. Move-in week saturation: $14K-$22K." },
    { q: "What Boston neighborhoods work best?", a: "Allston for student reach, Mission Hill for Northeastern + medical campus, Fenway-Kenmore for game-day + concert traffic, Back Bay for affluent shopping audience, Seaport for tech-corporate workforce, North End for tourism." },
    { q: "Can you handle the Greater Boston college tour?", a: "Yes. Boston + Cambridge + Worcester + Providence is a natural college-market corridor — same crew rotation handles all four metros on coordinated rollouts during move-in + graduation seasons." },
  ],
  localBusiness: {
    name: "Phantom Pasting — Boston",
    description: "Wheat pasting and poster campaign services in Boston, MA. Street postering across Allston, Mission Hill, Fenway-Kenmore, Back Bay, North End, Seaport.",
    url: "https://www.phantompasting.com/locations/boston",
  },
};

export default function BostonPage() {
  return <CityPageTemplate data={data} />;
}
