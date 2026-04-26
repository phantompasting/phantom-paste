import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: "Wheat Pasting Las Vegas",
  description:
    "Wheat pasting in Las Vegas — poster campaigns across Strip, Fremont East, Arts District, Container Park, Chinatown. CES & conference saturation.",
  keywords: [
    "wheat pasting Las Vegas",
    "Vegas poster campaigns",
    "Las Vegas guerrilla marketing",
    "Vegas street media",
    "Las Vegas street postering",
    "Vegas flyposting",
    "Vegas OOH advertising",
    "Strip wheat pasting",
    "Fremont East poster campaigns",
    "Arts District 18b Vegas",
    "Container Park guerrilla marketing",
    "Vegas conference OOH",
    "CES street campaigns",
    ...cityBuyerIntent("Las Vegas"),
    ...cityBuyerIntent("Vegas"),
    ...KW_CITY_BASE,
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/las-vegas" },
  openGraph: {
    title: "Wheat Pasting Las Vegas",
    description: "Large-format wheat paste campaigns across Vegas. Strip, Fremont East, Arts District, Container Park.",
    url: "https://www.phantompasting.com/locations/las-vegas",
    images: [{ url: "https://www.phantompasting.com/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", width: 1200, height: 630, alt: "Wheat paste campaign in Las Vegas" }],
  },
};

const data: CityPageData = {
  city: "Las Vegas",
  state: "NV",
  slug: "las-vegas",
  heroWord: "LAS VEGAS",
  intro:
    "Vegas runs on conferences. CES (January), NAB (April), Magic Week (February + August), Defcon (August), EDC (May), and a rolling event calendar drive 5-10x baseline foot traffic in Strip-adjacent and Fremont East corridors. We deploy large-format wheat paste, snipes, and chalk stencils on owner-authorized walls timed to event windows.",
  whyTitle: "VEGAS RUNS\nON EVENTS.",
  whyText:
    "No US city has a more event-driven street economy. CES (180K+ attendees), NAB (90K+), Magic Week (90K+), Defcon (30K+), EDC (170K+), Comdex, AdTech, plus dozens of smaller conferences mean Vegas has a saturation window every 4-6 weeks. The Strip + Fremont East + Arts District (18b) are the three primary deployment corridors. Strip-adjacent foot traffic is 95% inbound (conference attendees + tourists), which is exactly the audience B2B and consumer-launch campaigns target.",
  neighborhoods: [
    { name: "The Strip", desc: "Las Vegas Boulevard South. World-leading conference + tourism foot traffic; 5-10x event-week multipliers." },
    { name: "Fremont East", desc: "Fremont Street between 6th + Las Vegas Boulevard. Walkable arts + nightlife district anchored by Container Park." },
    { name: "Arts District (18b)", desc: "Main Street + Charleston Boulevard corridor. Vegas's only walkable arts neighborhood with mural density." },
    { name: "Downtown Container Park", desc: "Fremont East gateway + Container Park amphitheater. Family + tourism foot traffic anchor." },
    { name: "Chinatown", desc: "Spring Mountain Road. Restaurant + retail strip with growing creative-class density." },
    { name: "Summerlin", desc: "Downtown Summerlin, Red Rock corridor. Affluent suburban audience + Las Vegas Ballpark foot traffic." },
  ],
  heroStats: [
    { stat: "CES + NAB", label: "Conference Specialty" },
    { stat: "EDC + Defcon", label: "Spring/Summer Anchors" },
    { stat: "6", label: "Districts" },
  ],
  heroImage1: { src: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp", alt: "Wheat paste poster wall in Las Vegas" },
  heroImage2: { src: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp", alt: "Pole wrap guerrilla advertising in Vegas at night" },
  lastUpdated: "2026-04-25",
  spotlight: {
    eyebrow: "Conference Window Spotlight",
    title: "CES + NAB + DEFCON + EDC ARE WHAT VEGAS DOES",
    body:
      "Vegas conference-week saturation campaigns are a specialty. CES (early January), NAB (April), Magic Week (February + August), Defcon (August), and EDC (May) drive 5-10x baseline foot traffic in Strip-adjacent + Fremont East + Convention Center perimeter corridors. Wall space books 6-8 weeks ahead of major events. The medium is also called wild posting, flyposting, or street postering depending on the audience; wheat pasting names the actual material.",
    links: [
      { label: "Nevada State Page", href: "/locations/nevada" },
      { label: "How a Campaign Works", href: "/blog/wheat-pasting-campaign" },
      { label: "Get a Vegas Quote", href: "/contact" },
    ],
  },
  faqs: [
    { q: "Is wheat pasting legal in Las Vegas?", a: "Yes on owner-authorized walls. Vegas is permissive on private walls with property-owner consent. Strip-adjacent properties + Fremont East + the Arts District are the highest-volume corridors." },
    { q: "Can you handle CES or other conference-week saturation?", a: "Yes — it's a specialty. CES (January), NAB (April), Magic Week (Feb + August), Defcon (August), EDC (May) all drive 5-10x baseline foot traffic. Saturation campaigns timed to event windows book 6-8 weeks ahead." },
    { q: "How does Vegas heat affect campaigns?", a: "Summer (June-September) install windows shift to 9 p.m.-2 a.m. when surface temps drop. July-August daytime installs fail — 110°F+ heat flash-sets paste. October-April is the reliable window." },
    { q: "How much does a Vegas wheat pasting campaign cost?", a: "Single-corridor test: $3,500-$5,500 for 60-90 posters. Full-Strip + Fremont East activation: $14K-$22K. CES or NAB conference-week saturation: $25K-$50K depending on multi-day refresh + creative complexity." },
    { q: "What Vegas neighborhoods work best for wheat pasting?", a: "The Strip (Las Vegas Blvd South) for conference + tourism reach, Fremont East for walkable arts + nightlife audience, Arts District (18b) for cultural credibility, Downtown Container Park for family + tourism." },
  ],
  localBusiness: {
    name: "Phantom Pasting — Las Vegas",
    description: "Wheat pasting and poster campaign services in Las Vegas, NV. Street postering across the Strip, Fremont East, Arts District, Container Park, Chinatown.",
    url: "https://www.phantompasting.com/locations/las-vegas",
  },
};

export default function LasVegasPage() {
  return <CityPageTemplate data={data} />;
}
