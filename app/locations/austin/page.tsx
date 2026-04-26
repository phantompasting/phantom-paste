import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Austin",
  description:
    "Wheat pasting in Austin — poster campaigns across South Congress, East 6th, Rainey, Domain. SXSW & ACL festival saturation.",
  keywords: [
    "wheat pasting Austin",
    "Austin poster campaigns",
    "Austin guerrilla marketing",
    "Austin street media",
    "Austin street postering",
    "Austin flyposting",
    "Austin OOH advertising",
    "South Congress wheat pasting",
    "East 6th poster campaigns",
    "Rainey Street guerrilla marketing",
    "SXSW street campaigns",
    "ACL festival OOH",
    "Austin Domain street advertising",
    ...cityBuyerIntent("Austin"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/austin" },
  openGraph: {
    title: "Wheat Pasting Austin",
    description:
      "Large-format wheat paste poster campaigns across Austin. South Congress, East 6th, Rainey, Domain.",
    url: "https://www.phantompasting.com/locations/austin",
    images: [{
      url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign in Austin",
    }],
  },
};

const data: CityPageData = {
  city: "Austin",
  state: "TX",
  slug: "austin",
  heroWord: "AUSTIN",
  intro:
    "Austin is one of the country's most festival-driven street markets — SXSW (March), ACL (October), F1 weekend (October), Austin City Limits Music Festival drive 5-10x baseline foot traffic across South Congress, East 6th, Rainey, and the Convention Center perimeter. We deploy large-format wheat paste, snipes, and chalk stencils on owner-authorized walls timed to Austin's event calendar.",
  whyTitle: "AUSTIN IS\nFESTIVAL-DRIVEN.",
  whyText:
    "Austin's street-marketing economy is anchored to its event calendar. SXSW alone draws 280K+ attendees over 10 days; ACL pulls 450K+ across two festival weekends. The Domain + South Congress retail districts carry year-round volume; East 6th and Rainey Street drive nightlife saturation. UT's 50K+ undergraduate density adds academic-year volume. Austin briefs anchored to event windows are uniquely powerful.",
  neighborhoods: [
    { name: "South Congress (SoCo)", desc: "South Congress Avenue retail strip + Continental Club corridor. Year-round walkable; SXSW + ACL spillover audience." },
    { name: "East 6th", desc: "East 6th Street nightlife corridor. SXSW industry showcases live here; year-round bar district volume." },
    { name: "Rainey Street", desc: "Rainey + downtown bar district. Walkable nightlife pocket with high tourism density." },
    { name: "The Domain", desc: "Domain NORTHSIDE + Rock Rose. Mixed-use retail/restaurant/office; affluent audience + tech-corporate workforce." },
    { name: "East Austin", desc: "East Cesar Chavez, Holly, Cherrywood. Creative-class density + emerging arts scene." },
    { name: "South Lamar / Zilker", desc: "South Lamar + Barton Springs corridor. Walkable retail strip + ACL-adjacent foot traffic." },
  ],
  heroStats: [
    { stat: "SXSW", label: "March Specialty" },
    { stat: "ACL", label: "October Anchor" },
    { stat: "6", label: "Neighborhoods" },
  ],
  heroImage1: { src: "/gallery/vaura-pilates-chalk-spray-stencil-sidewalk-street-view-austin.webp", alt: "Vaura Pilates chalk spray stencil sidewalk campaign Austin Texas" },
  heroImage2: { src: "/gallery/vaura-pilates-chalk-stencil-sidewalk-austin-texas.webp", alt: "Chalk stencil guerrilla marketing on sidewalk Austin Texas" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Festival Window Spotlight",
    title: "SXSW + ACL ARE WHAT AUSTIN DOES",
    body:
      "SXSW (mid-March) and ACL (early + mid-October) drive Austin's biggest street-marketing windows. Wall space books out 6-8 weeks ahead; saturation campaigns across South Congress + East 6th + Rainey + Convention Center perimeter are standard. Music + tech + film are the three vertical use cases — album launches, app launches, and movie premieres routinely deploy 200+ posters across the festival catchment area. The medium is also called wild posting, flyposting, or street postering depending on the audience.",
    links: [
      { label: "Guerrilla Marketing for Music", href: "/blog/guerrilla-marketing-for-music" },
      { label: "Texas State Page", href: "/locations/texas" },
      { label: "Get an Austin Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Austin?",
      a: "Yes on owner-authorized walls. Austin is permissive on private walls with property-owner consent — the city's arts-friendly culture (East Austin in particular) makes wheat paste land naturally. Downtown historic districts need permits; we handle them.",
    },
    {
      q: "When should I book Austin festival campaigns?",
      a: "SXSW (mid-March): book 6-8 weeks ahead. ACL (early + mid-October): book 6-8 weeks ahead. F1 weekend (mid-October): book 4 weeks ahead. Outside event windows, standard 7-10 day lead times apply.",
    },
    {
      q: "How much does an Austin wheat pasting campaign cost?",
      a: "Single-neighborhood test: $2,800-$4,500 for 60-100 posters. Full-city activation: $10K-$16K. SXSW or ACL festival-window saturation: $18K-$45K depending on poster count + creative complexity + multi-week refresh requirements.",
    },
    {
      q: "What Austin neighborhoods work best for wheat pasting?",
      a: "South Congress (SoCo), East 6th, Rainey Street, East Austin (Cesar Chavez + Holly), and the Convention Center perimeter during SXSW/ACL. The Domain works for affluent-audience campaigns; UT campus zone for student-audience launches.",
    },
    {
      q: "Can you handle Texas-wide rollouts from Austin?",
      a: "Yes. Austin + Houston + Dallas + San Antonio is a common Texas-wide configuration; we handle all four metros from coordinated crew rotations on a single brief. Often combined with SXSW or ACL anchor weeks.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Austin",
    description:
      "Wheat pasting and poster campaign services in Austin, TX. Street postering across South Congress, East 6th, Rainey, Domain, East Austin.",
    url: "https://www.phantompasting.com/locations/austin",
  },
};

export default function AustinPage() {
  return <CityPageTemplate data={data} />;
}
