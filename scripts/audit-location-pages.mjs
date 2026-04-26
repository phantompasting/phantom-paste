#!/usr/bin/env node
/**
 * Audit every /locations/<slug>/page.tsx for content thickness + schema
 * completeness. Strips JSX/imports/exports and counts words inside string
 * literals — same approach as scripts/wordcount-blog.mjs but for location
 * page data files.
 *
 * Flags any page that's missing FAQs, lastUpdated, neighborhoods, or has
 * a thin word count (<500 words is the cutoff for SAB landing pages —
 * Google's threshold for "substantive content" sits around 400-500).
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const LOCATIONS_DIR = "app/locations";
const THIN_THRESHOLD = 500;

function stripCode(src) {
  let s = src;
  s = s.replace(/\/\/.*$/gm, "");
  s = s.replace(/\/\*[\s\S]*?\*\//g, "");
  s = s.replace(/^import .*?;?$/gm, "");
  s = s.replace(/^export .*?$/gm, "");
  // Remove JSX-like attribute strings (e.g. className="...", style={...})
  s = s.replace(/className=("[^"]*"|\{[^}]*\})/g, "");
  // Strip identifier-only tokens that aren't string content (object keys
  // followed by colons, etc.). Conservative: just keep string literals.
  return s;
}

function countWords(src) {
  // Pull all double-quoted string literals (the bulk of editorial content
  // lives in metadata.description, intro, whyText, neighborhood descs,
  // spotlight body, FAQ Q & A).
  const stringLiterals = src.match(/"[^"\\]*(\\.[^"\\]*)*"/g) || [];
  const wordsInStrings = stringLiterals
    .map((s) => s.slice(1, -1).trim())
    .filter((s) => s.length > 0)
    .join(" ");
  return wordsInStrings.split(/\s+/).filter((w) => /[a-zA-Z]/.test(w) && w.length > 1).length;
}

const dirs = readdirSync(LOCATIONS_DIR)
  .filter((d) => {
    const p = join(LOCATIONS_DIR, d);
    return statSync(p).isDirectory();
  })
  .sort();

const rows = [];
for (const slug of dirs) {
  const file = join(LOCATIONS_DIR, slug, "page.tsx");
  const src = readFileSync(file, "utf-8");

  const has_faqs = /^\s*faqs:\s*\[/m.test(src);
  const has_lastupdated = /lastUpdated:\s*"/m.test(src);
  const has_spotlight = /^\s*spotlight:\s*\{/m.test(src);
  const has_herostats = /heroStats:\s*\[/m.test(src);
  const hero1 = /heroImage1:/.test(src);
  const hero2 = /heroImage2:/.test(src);

  // Count neighborhood entries — both single-line `{ name:` and multi-line
  // `{\n      name:` forms.
  const nbhd_match = src.match(/^\s*neighborhoods:\s*\[([\s\S]*?)\n\s*\],/m);
  const nbhd_count = nbhd_match
    ? (nbhd_match[1].match(/(?:^\s*\{\s*$|^\s*\{\s*name:|\{\s*name:)/gm) || []).length
    : 0;

  const words = countWords(stripCode(src));

  const flags = [];
  if (!has_faqs) flags.push("NO_FAQS");
  if (!has_lastupdated) flags.push("NO_DATE");
  if (nbhd_count < 4) flags.push(`THIN_NBHD(${nbhd_count})`);
  if (words < THIN_THRESHOLD) flags.push(`THIN(${words})`);

  rows.push({ slug, has_faqs, has_lastupdated, has_spotlight, has_herostats, hero1, hero2, nbhd_count, words, flags });
}

console.log("slug".padEnd(22) + "FAQ DATE SPOT STATS H1/H2 NBHD WORDS  STATUS");
console.log("-".repeat(90));
for (const r of rows) {
  console.log(
    r.slug.padEnd(22) +
      ` ${r.has_faqs ? "✓" : "·"}  ` +
      ` ${r.has_lastupdated ? "✓" : "·"}   ` +
      ` ${r.has_spotlight ? "✓" : "·"}   ` +
      ` ${r.has_herostats ? "✓" : "·"}   ` +
      ` ${r.hero1 ? "Y" : "n"}/${r.hero2 ? "Y" : "n"}   ` +
      String(r.nbhd_count).padStart(3) +
      " " +
      String(r.words).padStart(5) +
      "  " +
      (r.flags.length === 0 ? "OK" : r.flags.join(" "))
  );
}
console.log("-".repeat(90));
const thin = rows.filter((r) => r.flags.length > 0).length;
console.log(`${thin} of ${rows.length} pages flagged. THIN cutoff: <${THIN_THRESHOLD} words.`);
