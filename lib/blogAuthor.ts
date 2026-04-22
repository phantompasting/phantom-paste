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

/** Person schema for JSON-LD `author` fields. */
export function mateoVargasPerson() {
  return {
    "@type": "Person",
    name: MATEO_VARGAS.name,
    jobTitle: MATEO_VARGAS.jobTitle,
    description: MATEO_VARGAS.bioShort,
    url: MATEO_VARGAS.url,
    worksFor: { "@id": ORG_ID },
  };
}
