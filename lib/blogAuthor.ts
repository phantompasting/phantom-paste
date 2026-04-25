/**
 * Author persona for the Phantom Pasting blog.
 *
 * We publish every post under a consistent "Field Operations Lead" byline
 * rather than the real CEO's name — partly for privacy, mostly for EEAT.
 * Google's EEAT framework rewards hands-on experience over corporate
 * authority; a Field Operations Lead (the person on the sidewalk) reads
 * as more credible for technical wheat-pasting content than a CEO byline.
 *
 * The bio + role are real; the name is a brand-safe persona. Writing is
 * sourced from actual installer field notes and attributed here.
 */
import { BUSINESS } from "./business";

const ORG_ID = `${BUSINESS.url}/#org`;

export const MATEO_VARGAS = {
  name: "Mateo Vargas",
  jobTitle: "Field Operations Lead",
  slug: "mateo-vargas",
  url: `${BUSINESS.url}/authors/mateo-vargas`,
  bio:
    "Mateo Vargas leads field operations at Phantom Pasting — wheat paste, snipes, and chalk stencils across LA, NYC, Miami, Chicago, Atlanta, and beyond. A decade on active install crews, from Melrose walls to Broadway scaffolding. He writes about the craft from the sidewalk up.",
  bioShort: "Field Operations Lead at Phantom Pasting. 10+ years on active install crews.",
} as const;

/**
 * Person schema for JSON-LD `author` fields.
 *
 * Enriched with `knowsAbout`, `image`, `address`, `sameAs`, and `nationality`
 * — these fields lift EEAT signals on AI Overview and ChatGPT citation
 * ranking. `knowsAbout` is the most consequential: it tells AI engines
 * *why* this byline is authoritative on the topic of the article.
 *
 * `image` references the same crew photo used as the author avatar in
 * BlogPostLayout — currently the "MV" gradient tile, but pointing at a
 * canonical URL means swapping in a real photo later only requires updating
 * the file, not every Person emission.
 *
 * `sameAs` lists the public-facing accounts that prove this is the real
 * person doing the work — the Phantom Pasting Instagram is the on-the-job
 * portfolio, which is the strongest signal we can publish without doxxing
 * the actual installer.
 */
export function mateoVargasPerson() {
  return {
    "@type": "Person",
    name: MATEO_VARGAS.name,
    jobTitle: MATEO_VARGAS.jobTitle,
    description: MATEO_VARGAS.bioShort,
    url: MATEO_VARGAS.url,
    worksFor: { "@id": ORG_ID },
    image: `${BUSINESS.url}/authors/mateo-vargas-avatar.webp`,
    knowsAbout: [
      "Wheat Pasting",
      "Street Postering",
      "Poster Campaigns",
      "Guerrilla Marketing",
      "Outdoor Advertising",
      "Out-of-Home Advertising",
      "Chalk Spray Stencils",
      "Snipe Posters",
      "Flyposting",
      "Street Marketing",
    ],
    knowsLanguage: ["English", "Spanish"],
    nationality: { "@type": "Country", name: "United States" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [BUSINESS.instagramUrl],
  };
}
