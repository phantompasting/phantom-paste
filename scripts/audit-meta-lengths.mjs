#!/usr/bin/env node
/**
 * Audit metadata.title + metadata.description length on every page.
 *
 * Google SERP truncates titles at ~60 chars and descriptions at ~155 chars
 * (mobile shows even less, ~120). Anything over those thresholds gets
 * silently cropped — wasting the keyword budget you paid for.
 *
 * Two ways pages declare title:
 *   1. `title: { absolute: "..." }`        — used as-is, no template suffix
 *   2. `title: PAGE_TITLE`                 — template appends " | Phantom Pasting" (18c)
 *      where PAGE_TITLE is `const PAGE_TITLE = "..."`
 *
 * Description always comes from `description: PAGE_DESC` where PAGE_DESC is
 * a top-level const with the actual string.
 *
 * Output is a TSV-style table flagging anything over the safe limits.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const SUFFIX = " | Phantom Pasting";
const SUFFIX_LEN = SUFFIX.length; // 18

const TITLE_MAX = 60;
const DESC_MAX = 160;

function findPages(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) findPages(path, out);
    else if (name === "page.tsx") out.push(path);
  }
  return out;
}

// Resolve a constant reference like `PAGE_TITLE` to its string value
// inside the file source.
function resolveConst(src, name) {
  // Match: const NAME = "value";  OR  const NAME =\n  "value";
  // Also handles backtick template literals.
  const re = new RegExp(`const\\s+${name}\\s*=\\s*\\n?\\s*[\`"]([\\s\\S]*?)[\`"]\\s*;`, "m");
  const m = src.match(re);
  return m ? m[1].replace(/\s+/g, " ").trim() : null;
}

// Pull the metadata.title value from the file.
// Handles four forms: `title: { absolute: "..." }`, `title: { absolute: PAGE_TITLE }`,
// `title: "..."`, `title: PAGE_TITLE`.
//
// Critical: scope the search to ONLY the top-level `export const metadata = {`
// block — `openGraph.title` and `twitter.title` are nested inside that same
// block and would be mis-matched by greedy regexes.
function getMetaTitle(src) {
  const metaMatch = src.match(/export\s+const\s+metadata[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!metaMatch) return { value: null, kind: "missing" };
  const block = metaMatch[1];

  // Walk the block line-by-line, only looking at top-level keys (no nesting).
  // Top-level keys are at one indent (2 spaces); nested keys are at 4+.
  const lines = block.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Match top-level "  title:" only (exactly 2 leading spaces).
    if (!/^ {2}title:/.test(line)) continue;

    // 1. title: { absolute: "..." }
    let m = line.match(/title:\s*\{\s*absolute:\s*"([^"]+)"/);
    if (m) return { value: m[1], kind: "absolute" };

    // 2. title: { absolute: PAGE_TITLE }
    m = line.match(/title:\s*\{\s*absolute:\s*([A-Z_]+)/);
    if (m) return { value: resolveConst(src, m[1]), kind: "absolute" };

    // 3. title: { default: PAGE_TITLE, template: "..." }
    m = line.match(/title:\s*\{\s*default:\s*([A-Z_]+|"[^"]+")/);
    if (m) {
      const v = m[1].startsWith('"') ? m[1].slice(1, -1) : resolveConst(src, m[1]);
      return { value: v, kind: "absolute" };
    }

    // 4. title: "..."
    m = line.match(/title:\s*"([^"]+)"/);
    if (m) return { value: m[1], kind: "template" };

    // 5. title: PAGE_TITLE,
    m = line.match(/title:\s*([A-Z_]+),/);
    if (m) return { value: resolveConst(src, m[1]), kind: "template" };

    return { value: null, kind: "unknown" };
  }
  return { value: null, kind: "missing" };
}

// Top-level metadata.openGraph.title — the social-card title. Has its own
// limits (~70 chars for clean rendering across Facebook/Twitter/LinkedIn).
function getOgTitle(src) {
  const ogMatch = src.match(/openGraph:\s*\{([\s\S]*?)\n\s{2}\}/);
  if (!ogMatch) return null;
  const m = ogMatch[1].match(/title:\s*"([^"]+)"/);
  return m ? m[1] : null;
}

function getOgDesc(src) {
  const ogMatch = src.match(/openGraph:\s*\{([\s\S]*?)\n\s{2}\}/);
  if (!ogMatch) return null;
  const m = ogMatch[1].match(/description:\s*\n?\s*"([^"]+)"/);
  return m ? m[1] : null;
}

function getMetaDesc(src) {
  const metaMatch = src.match(/export\s+const\s+metadata[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!metaMatch) return null;
  const block = metaMatch[1];

  // Walk top-level keys only (2-space indent), same approach as title.
  const lines = block.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!/^ {2}description:/.test(line)) continue;

    // 1. description: "..." on same line
    let m = line.match(/description:\s*"([^"]+)"/);
    if (m) return m[1];

    // 2. description: PAGE_DESC,
    m = line.match(/description:\s*([A-Z_]+),/);
    if (m) return resolveConst(src, m[1]);

    // 3. description:\n    "..."
    if (/description:\s*$/.test(line)) {
      const next = lines[i + 1];
      if (next) {
        const sm = next.match(/"([^"]+)"/);
        if (sm) return sm[1];
      }
    }
    return null;
  }
  return null;
}

function effectiveTitleLen({ value, kind }) {
  if (!value) return 0;
  return kind === "absolute" ? value.length : value.length + SUFFIX_LEN;
}

const pages = findPages("app").sort();
const OG_TITLE_MAX = 70;

console.log("Page".padEnd(58) + " T:len D:len  OG-T OG-D  Status");
console.log("-".repeat(115));

let problems = 0;
for (const f of pages) {
  const src = readFileSync(f, "utf-8");
  const title = getMetaTitle(src);
  const desc = getMetaDesc(src);
  const ogT = getOgTitle(src);
  const ogD = getOgDesc(src);
  const tLen = effectiveTitleLen(title);
  const dLen = desc ? desc.length : 0;
  const ogTLen = ogT ? ogT.length : 0;
  const ogDLen = ogD ? ogD.length : 0;
  const titleOver = tLen > TITLE_MAX;
  const descOver = dLen > DESC_MAX;
  const ogTOver = ogTLen > OG_TITLE_MAX;
  const ogDOver = ogDLen > DESC_MAX;
  const status =
    [
      titleOver && `T+${tLen - TITLE_MAX}`,
      descOver && `D+${dLen - DESC_MAX}`,
      ogTOver && `OGT+${ogTLen - OG_TITLE_MAX}`,
      ogDOver && `OGD+${ogDLen - DESC_MAX}`,
    ]
      .filter(Boolean)
      .join(" / ") || "OK";
  if (titleOver || descOver || ogTOver || ogDOver) problems++;
  process.stdout.write(
    `${f.padEnd(58)} T:${String(tLen).padStart(3)} D:${String(dLen).padStart(3)}  ${String(ogTLen).padStart(3)} ${String(ogDLen).padStart(3)}  ${status}\n`
  );
}

console.log("-".repeat(115));
console.log(`${problems} of ${pages.length} pages over limit`);
