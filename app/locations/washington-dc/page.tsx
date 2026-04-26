import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Washington DC",
  description:
    "Wheat pasting in Washington DC — poster campaigns across U Street, Adams Morgan, Shaw, H Street NE, Georgetown, Dupont. Federal-city density.",
  keywords: [
    "wheat pasting Washington DC",
    "DC poster campaigns",
    "DC guerrilla marketing",
    "DC street media",
    "Washington DC street postering",
    "DC flyposting",
    "DC OOH advertising",
    "U Street wheat pasting",
    "Adams Morgan poster campaigns",
    "H Street NE street advertising",
    "Georgetown guerrilla marketing",
    "Dupont Circle OOH",
    ...cityBuyerIntent("Washington DC"),
    ...cityBuyerIntent("DC"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/washington-dc" },
  openGraph: {
    title: "Wheat Pasting Washington DC",
    description: "Large-format wheat paste campaigns across DC. U Street, Adams Morgan, Shaw, H Street, Georgetown.",
    url: "https://www.phantompasting.com/locations/washington-dc",
    images: [{ url: "https://www.phantompasting.com/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", width: 1200, height: 630, alt: "Wheat paste campaign in Washington DC" }],
  },
};

const data: CityPageData = {
  city: "Washington DC",
  state: "DC",
  slug: "washington-dc",
  heroWord: "WASHINGTON DC",
  intro:
    "Washington DC's walkable corridors stretch across U Street's nightlife density, Adams Morgan's young-professional retail strip, Shaw's emerging arts scene, H Street NE's restaurant district, Georgetown's historic shopping core, and Dupont Circle's downtown affluence. Federal-city density + university + tourism overlap creates year-round foot traffic.",
  whyTitle: "DC IS FEDERAL CITY\nSTREET MEDIA.",
  whyText:
    "DC is the country's most internationally-traveled city — federal workforce + diplomats + tourism overlap creates year-round foot traffic in walkable corridors most agencies underestimate. U Street is one of the most-photographed walkable retail strips on the East Coast; H Street NE has emerged as DC's strongest restaurant + nightlife corridor; Georgetown carries tourism-driven volume year-round. Georgetown University + GW + American + Howard + Catholic add 60K+ undergrad density.",
  neighborhoods: [
    { name: "U Street Corridor", desc: "U Street + 14th Street NW. Dense nightlife + restaurant strip; year-round foot traffic." },
    { name: "Adams Morgan", desc: "18th Street NW between Florida + Columbia. Walkable retail + nightlife district." },
    { name: "Shaw", desc: "9th + 11th Street NW corridor. Emerging arts + restaurant district." },
    { name: "H Street NE", desc: "H Street between 4th + 14th. DC's strongest restaurant + nightlife corridor." },
    { name: "Georgetown", desc: "M Street + Wisconsin Avenue. Historic shopping core + tourism foot traffic anchor." },
    { name: "Dupont Circle", desc: "Connecticut Avenue NW corridor. Downtown affluent retail + diplomatic-corps density." },
  ],
  heroImage1: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Wheat paste campaign in Washington DC at night" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at DC street intersection" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Federal City Spotlight",
    title: "U STREET + H STREET NE OUTPERFORM",
    body:
      "U Street + H Street NE are DC's two strongest wheat-paste corridors. Both carry dense restaurant + nightlife foot traffic year-round, both have property-owner cultures friendly to wall-based creative work, and both index high for the young-professional demographic that documents and reposts street art. Federal workforce + tourism + university overlap means weekday + weekend volume both hold up. The medium is also called wild posting, flyposting, or street postering depending on the audience.",
    links: [
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a DC Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Washington DC?", a: "Yes on owner-authorized walls. DC is permissive on private walls with property-owner consent. Federal-property and historic-district walls (Georgetown historic, Capitol Hill historic) need permits; we handle them." },
    { q: "What DC neighborhoods work best for wheat pasting?", a: "U Street Corridor + H Street NE are the two highest-signal corridors. Adams Morgan, Shaw, Georgetown, Dupont Circle round out the primary deployment map." },
    { q: "How much does a DC wheat pasting campaign cost?", a: "Single-neighborhood test: $3,000-$4,500 for 60-90 posters. Full-city activation across 4-5 districts: $11K-$18K. Inauguration-week or major-event saturation runs $18K-$35K depending on creative + permit complexity." },
    { q: "When is the best time to run DC campaigns?", a: "Spring (March-May) and fall (September-November) drive the most foot traffic — DC's mild seasons. Inauguration week (every 4 years), Cherry Blossom Festival (late March-April), and Howard + Georgetown commencement weekends are the highest-attention event windows." },
    { q: "Can you handle DC + Baltimore corridor deployments?", a: "Yes. DC + Baltimore is a natural Mid-Atlantic corridor — same crew rotation handles both metros on coordinated rollouts. Common configuration: DC + Baltimore + Northern Virginia (Arlington, Alexandria) on a single launch week." },
  ],
  localBusiness: {
    name: "Phantom Pasting — Washington DC",
    description: "Wheat pasting and poster campaign services in Washington DC. Street postering across U Street, Adams Morgan, Shaw, H Street NE, Georgetown, Dupont.",
    url: "https://www.phantompasting.com/locations/washington-dc",
  },
};

export default function WashingtonDCPage() {
  return <CityPageTemplate data={data} />;
}
