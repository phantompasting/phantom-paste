import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

/**
 * Illinois state landing page — captures statewide search intent that the
 * Chicago city page can't fully address (Naperville, Champaign-Urbana,
 * Rockford, Peoria, Springfield).
 *
 * Targets: "wheat pasting illinois", "wheatpasting illinois", "illinois
 * poster campaigns", "wheat paste illinois", and the descriptive long-tail
 * "wild posting illinois" (term used in body prose only — never in H1/title/
 * schema, per docs/seo/WILD_POSTING_PURGE_EXECUTION_SPEC.md).
 *
 * GSC data shows /locations/chicago underperforming at position 19.6 with
 * 36 impressions; the state-level page captures intent that's filtering past
 * Chicago and lifts overall Illinois SERP coverage without bloating the
 * Chicago page itself.
 */

export const metadata: Metadata = {
  title: "Wheat Pasting Illinois",
  description:
    "Wheat pasting and poster campaigns across Illinois — Chicago, Naperville, Champaign-Urbana, Rockford, Peoria, and Springfield. Statewide street postering. Get a quote.",
  keywords: [
    "wheat pasting Illinois",
    "wheatpasting Illinois",
    "Illinois poster campaigns",
    "wheat paste Illinois",
    "Illinois street postering",
    "Illinois guerrilla marketing",
    "Chicago wheat pasting",
    "Champaign Urbana poster campaigns",
    "Illinois street media",
    "Illinois street marketing agency",
    "Illinois flyposting",
    "Illinois OOH advertising",
    "Naperville wheat pasting",
    "Rockford poster campaigns",
    "Peoria street advertising",
    "Springfield IL guerrilla marketing",
    "statewide Illinois OOH",
    ...cityBuyerIntent("Illinois"),
    ...cityBuyerIntent("Chicago"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/illinois" },
  openGraph: {
    title: "Wheat Pasting Illinois",
    description:
      "Statewide wheat paste poster campaigns across Illinois — Chicago, Naperville, Champaign-Urbana, Rockford, Peoria, and Springfield.",
    url: "https://www.phantompasting.com/locations/illinois",
    images: [
      {
        url: "https://www.phantompasting.com/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp",
        width: 1200,
        height: 630,
        alt: "Wheat paste poster wall campaign in Illinois — Phantom Pasting statewide rollouts",
      },
    ],
  },
};

const data: CityPageData = {
  city: "Illinois",
  state: "IL",
  slug: "illinois",
  heroWord: "ILLINOIS",
  intro:
    "Illinois campaigns split two ways: Chicago-led metro saturation, and statewide rollouts that hit the secondary markets where competition for wall space is dramatically lower. Chicago's neighborhoods drive the volume, but Naperville's downtown, Champaign-Urbana's UIUC corridor, Rockford, Peoria, and Springfield each carry walkable retail strips and event windows that reward focused street campaigns.",
  whyTitle: "ILLINOIS\nIS MORE THAN CHICAGO.",
  whyText:
    "Most agencies ladder Illinois to Chicago and stop. The reality on the ground: Naperville's downtown shopping district draws affluent suburb-north traffic, Champaign-Urbana's UIUC zone delivers semester-locked density (35,000+ undergrads), and Rockford, Peoria, and Springfield each have walkable cores that go underserved precisely because the agency market ignores them. Statewide campaigns capture both the Chicago volume and the lower-competition secondary markets in a single brief.",
  neighborhoods: [
    {
      name: "Chicago",
      desc: "Wicker Park, Logan Square, Wrigleyville, the Loop, Pilsen, Lincoln Park. State-leading volume; full neighborhood breakdown on the Chicago page.",
    },
    {
      name: "Naperville",
      desc: "Downtown Naperville Riverwalk and 5th Avenue corridor. Affluent north-suburban foot traffic with walkable retail density.",
    },
    {
      name: "Champaign-Urbana",
      desc: "UIUC campus zone, Green Street, downtown Champaign. 35,000+ student population, dense semester-driven foot traffic.",
    },
    {
      name: "Rockford",
      desc: "Downtown Rockford and East State Street. Lower wall-space competition than Chicago — focused campaigns hit hard here.",
    },
    {
      name: "Peoria",
      desc: "Downtown Peoria and the Warehouse District. Bradley University foot traffic plus a revitalized retail/dining corridor.",
    },
    {
      name: "Springfield",
      desc: "Downtown Springfield and Old State Capitol Plaza. State-government foot traffic plus tourism around Lincoln historic sites.",
    },
  ],
  heroImage1: { src: "/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp", alt: "Wheat paste poster wall campaign in Illinois" },
  heroImage2: { src: "/gallery/sticker-campaign-street-intersection-urban.webp", alt: "Sticker campaign at urban Illinois street intersection" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "CHICAGO + 5 SECONDARY MARKETS, ONE BRIEF",
    body:
      "Most agencies treat Illinois as Chicago-only. We run Chicago plus Naperville, Champaign-Urbana, Rockford, Peoria, and Springfield from the same crew rotation, which means a brand can spec a Chicago-led campaign with secondary-market overlay on the same paperwork. The medium is also called wild posting, flyposting, or street postering depending on the audience — wheat pasting names the actual material we use. UIUC semester windows in Champaign and Naperville's holiday-shopping window are particularly under-served opportunities for brands willing to deploy beyond the Loop.",
    links: [
      { label: "Chicago City Page", href: "/locations/chicago" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get an Illinois Quote", href: "/contact" },
    ],
  },
  // Service schema base — CityPageTemplate enriches with @type, provider,
  // areaServed (State), and offers.
  localBusiness: {
    name: "Phantom Pasting — Illinois",
    description:
      "Wheat pasting and poster campaign services across Illinois — Chicago, Naperville, Champaign-Urbana, Rockford, Peoria, and Springfield.",
    url: "https://www.phantompasting.com/locations/illinois",
  },
};

export default function IllinoisPage() {
  return <CityPageTemplate data={data} />;
}
