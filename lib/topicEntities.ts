/**
 * Canonical topic entities for Article schema's `about` and `mentions` fields.
 *
 * Background — why this exists:
 *   AI Overview engines (Google AIO, ChatGPT search, Perplexity) rank passage
 *   citations partly by how well a page chains to known entities. A page that
 *   declares `about: { @type: "Thing", name: "Wheat Pasting", sameAs:
 *   "https://en.wikipedia.org/wiki/Wheatpaste" }` reads as topically anchored;
 *   a page with no `about` field is a passage in a vacuum.
 *
 *   `about` (singular concept the article centers on) and `mentions` (an array
 *   of related entities the article references) are both Schema.org Thing
 *   nodes with `sameAs` pointing at canonical URLs (Wikipedia, Wikidata, or
 *   the entity's official site). Wikipedia is the strongest signal because
 *   AI engines are pre-trained on Wikipedia entity descriptions.
 *
 * Usage:
 *   import { topic, topics } from "@/lib/topicEntities";
 *   articleSchema({
 *     ...,
 *     about: topic("wheat-pasting"),
 *     mentions: topics(["los-angeles", "new-york-city", "graffiti"]),
 *   });
 */

interface TopicEntity {
  /** Schema.org @type — usually "Thing", but can be more specific. */
  type: "Thing" | "Place" | "City" | "Country" | "Organization";
  /** Display name shown in JSON-LD. */
  name: string;
  /** Canonical URL — Wikipedia preferred, otherwise the entity's official site. */
  sameAs: string;
  /** Optional one-sentence description for AI extraction. */
  description?: string;
}

const ENTITIES = {
  // ── Concepts (the medium and adjacent practices) ─────────────────────────
  "wheat-pasting": {
    type: "Thing",
    name: "Wheatpaste",
    sameAs: "https://en.wikipedia.org/wiki/Wheatpaste",
    description:
      "A liquid adhesive made from wheat flour and water, used to attach posters to outdoor walls.",
  },
  "flyposting": {
    type: "Thing",
    name: "Flyposting",
    sameAs: "https://en.wikipedia.org/wiki/Flyposting",
    description:
      "The practice of placing advertising posters on buildings and walls without permission, used commercially in authorized form.",
  },
  "guerrilla-marketing": {
    type: "Thing",
    name: "Guerrilla Marketing",
    sameAs: "https://en.wikipedia.org/wiki/Guerrilla_marketing",
  },
  "outdoor-advertising": {
    type: "Thing",
    name: "Out-of-home Advertising",
    sameAs: "https://en.wikipedia.org/wiki/Out-of-home_advertising",
  },
  "street-art": {
    type: "Thing",
    name: "Street Art",
    sameAs: "https://en.wikipedia.org/wiki/Street_art",
  },
  "graffiti": {
    type: "Thing",
    name: "Graffiti",
    sameAs: "https://en.wikipedia.org/wiki/Graffiti",
  },
  "billboard": {
    type: "Thing",
    name: "Billboard",
    sameAs: "https://en.wikipedia.org/wiki/Billboard",
  },
  "stencil": {
    type: "Thing",
    name: "Stencil",
    sameAs: "https://en.wikipedia.org/wiki/Stencil",
  },

  // ── Cities (Tier 1 markets) ──────────────────────────────────────────────
  "los-angeles": {
    type: "City",
    name: "Los Angeles",
    sameAs: "https://en.wikipedia.org/wiki/Los_Angeles",
  },
  "new-york-city": {
    type: "City",
    name: "New York City",
    sameAs: "https://en.wikipedia.org/wiki/New_York_City",
  },
  "miami": {
    type: "City",
    name: "Miami",
    sameAs: "https://en.wikipedia.org/wiki/Miami",
  },
  "chicago": {
    type: "City",
    name: "Chicago",
    sameAs: "https://en.wikipedia.org/wiki/Chicago",
  },
  "atlanta": {
    type: "City",
    name: "Atlanta",
    sameAs: "https://en.wikipedia.org/wiki/Atlanta",
  },
  "phoenix": {
    type: "City",
    name: "Phoenix",
    sameAs: "https://en.wikipedia.org/wiki/Phoenix,_Arizona",
  },
  "denver": {
    type: "City",
    name: "Denver",
    sameAs: "https://en.wikipedia.org/wiki/Denver",
  },

  // ── States ───────────────────────────────────────────────────────────────
  "georgia": {
    type: "Place",
    name: "Georgia (U.S. state)",
    sameAs: "https://en.wikipedia.org/wiki/Georgia_(U.S._state)",
  },
  "illinois": {
    type: "Place",
    name: "Illinois",
    sameAs: "https://en.wikipedia.org/wiki/Illinois",
  },
} as const satisfies Record<string, TopicEntity>;

export type TopicKey = keyof typeof ENTITIES;

/**
 * Look up a single topic entity. Returns the Schema.org Thing object ready
 * to drop into an Article's `about` field, or undefined if the key is unknown
 * (don't break the build; just omit the field).
 */
export function topic(key: TopicKey) {
  const e = ENTITIES[key];
  return {
    "@type": e.type,
    name: e.name,
    sameAs: e.sameAs,
    ...("description" in e && e.description ? { description: e.description } : {}),
  };
}

/**
 * Map a list of topic keys to their entity objects, dropping any that are
 * unknown. Used for an Article's `mentions` array.
 */
export function topics(keys: ReadonlyArray<TopicKey>) {
  return keys.map((k) => topic(k));
}
