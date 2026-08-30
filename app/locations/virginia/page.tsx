import type { Metadata } from "next";
import CityPageTemplate, { type CityPageData } from "@/components/CityPageTemplate";
import { KW_CITY_BASE, KW_NATIONWIDE, cityBuyerIntent } from "@/lib/keywordSets";

export const metadata: Metadata = {
  title: { absolute: "Wheat Pasting Virginia | Richmond & Norfolk Campaigns" },
  description:
    "Wheat pasting across Virginia — Richmond's RVA mural city, Norfolk NEON District, Virginia Beach ViBe, Arlington. Statewide VA rollouts with photo proof.",
  keywords: [
    "wheat pasting Virginia",
    "wheatpasting Virginia",
    "Virginia poster campaigns",
    "Virginia guerrilla marketing",
    "VA street media",
    "Richmond wheat pasting",
    "RVA street art campaigns",
    "Norfolk poster campaigns",
    "Virginia Beach street advertising",
    "Arlington guerrilla marketing",
    "statewide Virginia OOH",
    ...cityBuyerIntent("Virginia"),
    ...cityBuyerIntent("Richmond"),
    ...KW_CITY_BASE,
    ...KW_NATIONWIDE.slice(0, 4),
  ],
  alternates: { canonical: "https://www.phantompasting.com/locations/virginia" },
  openGraph: {
    title: "Wheat Pasting Virginia",
    description:
      "Statewide wheat paste poster campaigns across Virginia — Richmond, Virginia Beach, Norfolk, Arlington, Charlottesville.",
    url: "https://www.phantompasting.com/locations/virginia",
    images: [{
      url: "https://www.phantompasting.com/gallery/zach-john-king-im-what-you-get-wheat-paste-posters-plywood-wall-nashville.webp",
      width: 1200,
      height: 630,
      alt: "Wheat paste poster campaign across Virginia — Phantom Pasting statewide rollouts",
    }],
  },
};

const data: CityPageData = {
  city: "Virginia",
  state: "VA",
  slug: "virginia",
  heroWord: "VIRGINIA",
  intro:
    "Richmond is quietly one of America's best street-art cities — the RVA Street Art Festival and VCU's art school have covered Carytown, The Fan, and Scott's Addition in murals, and wheat paste reads as part of the landscape. Norfolk's NEON District and Virginia Beach's ViBe Creative District extend the same energy to Hampton Roads, while Arlington taps the DC metro audience.",
  whyTitle: "RVA IS A MURAL CITY.\nPASTE FITS RIGHT IN.",
  whyText:
    "VCU is a top-ranked public art school and its 28K students set Richmond's visual culture — Broad Street's arts district, Carytown's indie retail mile, and Scott's Addition's brewery boom all read walls fluently. Norfolk built the NEON District specifically as an arts corridor, and Virginia Beach's ViBe district did the same a decade ago. Arlington and Alexandria give a DC-adjacent audience without District wall constraints, and Charlottesville adds UVA's corner-district density.",
  neighborhoods: [
    { name: "Richmond", desc: "Carytown, The Fan, Scott's Addition, Broad Street Arts District, VCU corridor, Shockoe Bottom. The state's anchor and one of the South's best paste markets." },
    { name: "Virginia Beach", desc: "ViBe Creative District, Oceanfront/Atlantic Ave, Town Center. Summer boardwalk multiplier." },
    { name: "Norfolk", desc: "NEON District, Ghent (Colley Ave), Granby Street, ODU zone. Hampton Roads' culture core." },
    { name: "Arlington", desc: "Clarendon corridor, Crystal City, Rosslyn. DC-metro commuter audience on the Orange/Blue lines." },
    { name: "Charlottesville", desc: "The Corner (UVA), Downtown Mall. One of the country's great pedestrian malls; college-town density." },
  ],
  heroImage1: { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-posters-plywood-wall-nashville.webp", alt: "Wheat paste posters on plywood wall" },
  heroImage2: { src: "/gallery/zach-john-king-im-what-you-get-wheat-paste-street-corner-pedestrians-nashville.webp", alt: "Pedestrians passing wheat paste posters on street corner" },
  areaLabel: "CITIES SERVED",
  serviceAreaType: "State",
  lastUpdated: "2026-08-29",
  spotlight: {
    eyebrow: "Statewide Capability",
    title: "RICHMOND + HAMPTON ROADS + NOVA, ONE BRIEF",
    body:
      "A statewide VA rollout covers three distinct audiences — RVA's art-school culture, Hampton Roads' beach-plus-Navy demographic, and Northern Virginia's DC commuters — on one price sheet. Music and festival campaigns anchor on Richmond; DTC and government-adjacent brands anchor on Arlington. Pairing VA with a Washington DC brief is a standing combination.",
    links: [
      { label: "Washington DC Campaigns", href: "/locations/washington-dc" },
      { label: "Get a Virginia Quote", href: "/contact" },
    ],
  },
  faqs: [
    {
      q: "Is wheat pasting legal in Virginia?",
      a: "Yes on owner-authorized walls. Richmond's mural-festival heritage makes authorized wall access straightforward; Norfolk's NEON District and Virginia Beach's ViBe District were purpose-built as arts corridors. Standard private-property consent applies statewide.",
    },
    {
      q: "What Virginia cities do you cover?",
      a: "Richmond, Virginia Beach, Norfolk, Arlington, and Charlottesville as standing markets, plus Alexandria, Roanoke, and Harrisonburg (JMU) on a per-campaign basis.",
    },
    {
      q: "How much does a Virginia campaign cost?",
      a: "Single-city VA campaigns run $2,800–$5,500. Richmond + Hampton Roads combined runs $6K–$10K; full statewide including Northern Virginia runs $10K–$18K.",
    },
    {
      q: "Can you combine Virginia with a Washington DC campaign?",
      a: "Yes — Arlington/Alexandria installs routinely ride along with DC briefs on one report. It's the standard way to extend a District campaign to the full metro audience.",
    },
    {
      q: "How long do posters last in Virginia weather?",
      a: "4–6 weeks typical. Coastal Hampton Roads humidity trims the top end; Richmond and Charlottesville run standard. Every placement is photo-documented within 48 hours.",
    },
  ],
  localBusiness: {
    name: "Phantom Pasting — Virginia",
    description:
      "Wheat pasting and poster campaign services across Virginia — Richmond, Virginia Beach, Norfolk, Arlington, Charlottesville.",
    url: "https://www.phantompasting.com/locations/virginia",
  },
};

export default function VirginiaPage() {
  return <CityPageTemplate data={data} />;
}
