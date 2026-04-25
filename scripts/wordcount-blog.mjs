#!/usr/bin/env node
/**
 * One-off word-count helper for blog posts.
 *
 * Reads every /content/blog/*.tsx file and estimates the prose word count by:
 *   - Stripping import/export lines, JSX tags, and prop expressions
 *   - Keeping the textual content between tags + inside template literals
 *   - Counting whitespace-separated tokens
 *
 * Output: a JSON object { slug: count } printed to stdout. Pipe into a
 * follow-up edit of /lib/blogRegistry.ts to populate the wordCount field.
 *
 * Word-count is consumed by the Article JSON-LD schema (`wordCount` field) —
 * Google reads this as a substantive-content signal, and AI-Overview engines
 * use it as one factor in passage-citation ranking. Currently every post
 * emits Article without wordCount, dropping us ~5-10 points on GEO scorers.
 */

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BLOG_DIR = "content/blog";

function stripJSX(src) {
  // Remove single-line comments
  let s = src.replace(/\/\/.*$/gm, "");
  // Remove block comments (incl. JSX comments)
  s = s.replace(/\/\*[\s\S]*?\*\//g, "");
  s = s.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");
  // Strip imports/exports
  s = s.replace(/^import .*?;?$/gm, "");
  s = s.replace(/^export .*?{/gm, "");
  // Remove tag attributes — JSX props don't count as prose
  s = s.replace(/\s+\w+=\{[^}]*\}/g, "");
  s = s.replace(/\s+\w+="[^"]*"/g, "");
  // Strip the tags themselves but keep their text content
  s = s.replace(/<\/?[A-Za-z][^>]*>/g, " ");
  // Strip remaining curly-brace expressions ({foo}, {variables}, {!expr})
  // — but leave string-literal content inside them.
  s = s.replace(/\{[^{}\n"']*\}/g, " ");
  // Collapse template literal backticks but keep content
  s = s.replace(/`/g, " ");
  return s;
}

function countWords(src) {
  const stripped = stripJSX(src);
  const words = stripped
    .split(/\s+/)
    .filter((w) => w.length > 1 && /[a-zA-Z]/.test(w));
  return words.length;
}

const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".tsx"));
const out = {};
for (const f of files) {
  const slug = f.replace(/\.tsx$/, "");
  const src = readFileSync(join(BLOG_DIR, f), "utf-8");
  out[slug] = countWords(src);
}

console.log(JSON.stringify(out, null, 2));
