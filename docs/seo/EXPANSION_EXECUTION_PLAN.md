---
title: Phantom Pasting — Expansion Execution Plan
aliases: [Expansion Plan, Batch Plan, 14-Page Expansion]
tags: [seo, phantom-pasting, execution-plan, on-hold]
status: draft-on-hold
blocked-by: blog-indexation
related:
  - "[[COMPETITOR_BEAT_PLAN]]"
  - "[[COMPETITOR_COMPARISON_ANALYSIS]]"
  - "[[SEO_COMPETITOR_KEYWORDS]]"
  - "[[WILD_POSTING_PURGE_EXECUTION_SPEC]]"
created: 2026-04-22
review-before: 2026-05-15
---

# Phantom Pasting — Expansion Execution Plan

> [!info] Status
> **Plan written, execution ON HOLD.** Only 1 blog post is currently live in production despite 15 being drafted in `content/blog/*.tsx` and registered in `lib/blogRegistry.ts`. We must ship + index the remaining 14 blog posts first before adding 14 new pages on top. Full timing rationale in the [[#When To Execute]] section below.

## TL;DR

- **What this plan covers:** 1 service-page section edit · 8 new location pages · 1 gallery schema upgrade · 5 new adjacent service pages · 1 sitemap/nav consolidation. **14 new routes total.**
- **Why we can't ship yet:** Google crawl budget. A site with 1 indexed blog post cannot absorb 14 new URLs without crawl throttling and authority dilution. Blog first, then scale.
- **When to ship:** earliest start = **6 weeks after the remaining 14 blog posts go live and get indexed** (Tier 1). Full rollout = 3-month staged deployment. See [[#Execution Calendar]].
- **Skills ready:** `obsidian-markdown` · `brainstorming` · `seo-page` · `seo-content` · `seo-schema` (all already installed at `~/.claude/skills/`).
- **Deploy gate:** zero production deploys without your explicit approval per batch.

---

## When To Execute

> [!warning] Ship the blog first
> This is the single most important sequencing decision in this doc. Read it before you ask "can we start Batch 1 now."

### Why blogs must index first

1. **Crawl budget.** Google allocates a fixed number of crawl requests per domain per day based on perceived site authority. For a site with ~21 indexed pages, that allocation is small. Publishing 14 new pages on top of 14 unindexed blogs means Google sees 28 new URLs at once and indexes maybe 8-10 of them. The rest sit in "Discovered – currently not indexed" for months.
2. **Internal link equity.** Location pages and service pages are supposed to receive internal links *from* blog posts. If the blogs aren't live, the new pages ship orphaned and under-linked.
3. **Topical authority.** Google's Helpful Content system weights topical coverage. Shipping 15 deep blog posts on wheat pasting establishes topical authority. Only then do location/service pages ranking for "wheat pasting [city]" get a meaningful authority lift.
4. **E-E-A-T stacking.** The Mateo Vargas persona earns trust through the blog posts. Landing on `/locations/phoenix` from a SERP, the reader clicks through to `/blog/wheat-pasting-phoenix` to verify the crew is real. If the blog is missing, the trust loop breaks.

### The indexation timeline (realistic, 2026)

| Phase | Duration | What happens |
|---|---|---|
| Blog ship | Day 0 | Push the remaining 14 blog posts to production |
| Sitemap submission | Day 0-1 | Updated `sitemap.xml` picked up by GSC within 24h |
| Initial crawl | Day 1-7 | Googlebot crawls 8-12 of the 14 new URLs |
| First indexation | Day 3-14 | 60-80% of new posts in the index |
| Full indexation | Day 14-42 | Remaining long-tail posts indexed, stragglers may need manual URL inspection |
| First ranking signals | Day 21-56 | Posts appear in GSC Performance tab for long-tail queries |
| Topical authority lift | Day 45-90 | Service/location pages start to benefit from the blog cluster |

**Earliest safe start for Batch 1:** ~**Day 42** (6 weeks post-blog-ship), assuming blog indexation tracks the normal timeline.

### If indexation is slower than expected

> [!tip] Recovery levers if indexation stalls
> - Request indexing on every post individually via GSC URL Inspection
> - Add internal links from the homepage footer to new blog posts
> - Earn 2-3 backlinks to the strongest post (e.g., `/blog/how-to-make-wheat-paste`) from relevant blogs
> - Publish the blog posts on social (Instagram link-in-bio pointing to latest post)
> - Ensure `publishedAt` dates in `blogRegistry.ts` are real, recent, and past

---

## Pre-Flight Checklist (Before Starting Batch 1)

> [!check] Gate conditions — all must be true before Batch 1
> - [ ] All 14 drafted blog posts pushed to production (verify live at `/blog/[slug]`)
> - [ ] `sitemap.xml` includes all 15 blog post URLs
> - [ ] `/blog` hub page live and linking to all 15 posts
> - [ ] GSC shows at least 10 of 15 blog posts in "Valid" indexation status
> - [ ] Homepage internal link structure sends link equity to `/blog` hub
> - [ ] Trademark purge (see [[WILD_POSTING_PURGE_EXECUTION_SPEC]]) previewed + approved + deployed
> - [ ] `llms.txt` updated with all blog posts (verify at `/llms.txt`)
> - [ ] Core Web Vitals on current pages still green in GSC

---

## Brand & Standards I Will Follow

### Metadata format (verified in `app/layout.tsx`)

- Root `title.template` = `"%s | Phantom Pasting"` — every child page auto-appends " | Phantom Pasting" (19 chars including space and pipe)
- **Target child page title ≤ 41 chars** → final rendered ≤ 60 chars (Google 2026 truncation ≈ 580px ≈ 60 chars)
- Meta description: **140-158 chars** for SERP snippet
- OpenGraph uses absolute titles (no auto-suffix)

### Location page pattern (verified in `app/locations/los-angeles/page.tsx`)

- Uses `<CityPageTemplate />` + `CityPageData` — I reuse the template, do not re-implement
- `heroWord`, `whyTitle` (uppercase with `\n` break), `whyText` (70-100 words)
- 6 neighborhoods with 1-sentence honest descriptions
- 2 hero images pulled from `/public/gallery/`
- Inline `LocalBusiness` schema with `areaServed: City` + `parentOrganization`

### Service page pattern (verified in `app/services/chalk-spray-stencils/page.tsx`)

- Bespoke page design, 450-600 lines
- Flow: Breadcrumb → TrustBar → Hero → Process steps → Deep sections → Legal/Compliance → TL;DR → More Services → FAQ → JSON-LD
- `PAGE_TITLE` / `PAGE_DESC` constants at top
- Accent color: `ACCENT = "#D4A010"`
- Typography: `ShinyGoldText` headline accents, uppercase black weight, `clamp()` responsive sizing

### Anti-slop discipline (from `fluffy-imagining-ullman.md`)

**Banned phrases — zero tolerance:** "in today's world," "dive into," "delve into," "leverage," "unlock," "moreover," "furthermore," "it's important to note," "game-changer," "cutting-edge," "revolutionize," "seamless," "robust solution," "at the end of the day," "when it comes to."

**Required specificity:**
- Tools named by type: "soft-brush car-wash broom," not "a broom"
- Ratios as numbers: "3 buckets water, 1 bag paste"
- Locations at neighborhood level: "Melrose," not "LA"
- Times, temps, grams, prices — concrete everywhere they fit

---

## The 5 Batches

### Batch 1 — Biodegradable Section on `/services/wheat-pasting`

> [!summary]
> 1 file edited · 1 hour · zero schema changes · lowest-risk first ship

**Pattern source:** copy the structure from `app/services/chalk-spray-stencils/page.tsx` lines 342-370 (existing "LEGAL & BIODEGRADABLE" section).

**Content outline:**
- Eyebrow: `SUSTAINABILITY`
- Headline: `BIODEGRADABLE\n<ShinyGoldText>BY CHEMISTRY.</ShinyGoldText>`
- Intro paragraph: "Wheat paste is three ingredients — flour, water, heat. That's the entire bill of materials. When rain hits, when the campaign ends, when the wall cycles: it's gone, composted back into the sidewalk. No solvents. No VOCs. No spray paint liability."
- Three cards:
  1. **Flour + water + heat** — the original green OOH format. Predates PLA posters by 140 years.
  2. **Removable with warm water** — no permanent marking, no sandblasting, no chemical strippers. Municipalities tolerate wheat paste for exactly this reason.
  3. **Leave-no-trace install standard** — we remove old poster layers before installing new ones. We pick up residue from other crews too.

**Meta:** no changes — the existing `PAGE_TITLE` and `PAGE_DESC` already cover the page.

**Skills used:** `seo-content` to validate E-E-A-T prose · `brainstorming` only if the copy needs iteration.

**Ship gate:** you preview on localhost → approve → I commit → you approve → I push.

---

### Batch 2 — Location Pages (8 new cities, staggered)

> [!summary]
> 8 new files · uses existing `<CityPageTemplate />` · ships in 3 phases over ~6 weeks

#### Metadata table — all verified ≤ 60 chars final with " | Phantom Pasting" suffix

| City | Slug | Page Title | Chars | Meta Description | Chars |
|---|---|---|---:|---|---:|
| Phoenix | `/locations/phoenix` | `Wheat Pasting Phoenix` | 21 | Wheat pasting in Phoenix — poster campaigns across Roosevelt Row, Downtown, Tempe, Scottsdale. Heat-tested install. Photo documented. | 144 |
| Austin | `/locations/austin` | `Wheat Pasting Austin` | 20 | Wheat pasting in Austin — poster campaigns across South Congress, East Austin, Red River, Rainey. Music-city guerrilla marketing. Documented. | 149 |
| Dallas | `/locations/dallas` | `Wheat Pasting Dallas` | 20 | Wheat pasting in Dallas — poster campaigns across Deep Ellum, Bishop Arts, Lower Greenville, Design District. Photo-documented. | 136 |
| Seattle | `/locations/seattle` | `Wheat Pasting Seattle` | 21 | Wheat pasting in Seattle — poster campaigns across Capitol Hill, Ballard, Fremont, Pioneer Square. Rain-resistant install. Documented. | 141 |
| Portland | `/locations/portland` | `Wheat Pasting Portland` | 22 | Wheat pasting in Portland — poster campaigns across Pearl District, Alberta, Hawthorne, Mississippi Ave. Independent-brand city. Documented. | 146 |
| Nashville | `/locations/nashville` | `Wheat Pasting Nashville` | 23 | Wheat pasting in Nashville — poster campaigns across The Gulch, East Nashville, 12 South, Germantown. Music-city street marketing. Documented. | 151 |
| Houston | `/locations/houston` | `Wheat Pasting Houston` | 21 | Wheat pasting in Houston — poster campaigns across Midtown, Montrose, EaDo, Heights. Texas-scale guerrilla marketing. Photo documented. | 141 |
| San Diego | `/locations/san-diego` | `Wheat Pasting San Diego` | 23 | Wheat pasting in San Diego — poster campaigns across North Park, East Village, Hillcrest, Little Italy. Coastal guerrilla marketing. Documented. | 150 |

#### Per-page structure (reuses `CityPageTemplate`)

- Unique `intro` paragraph (60-90 words) naming the real character of the city
- `whyTitle` in 2-line uppercase format (`"PHOENIX IS A\nHEAT TEST."`)
- `whyText` 70-100 words
- 6 real, researched neighborhoods per city with 1-sentence honest descriptions
- 2 hero images (see [[#Open Questions]] for image sourcing decision)
- `LocalBusiness` schema inline with city + region + parentOrganization

#### Phoenix special treatment

Phoenix gets a cross-link from the existing `/blog/wheat-pasting-phoenix` (already written, ships with the 14-blog push). The location page should link *to* the blog post from its intro paragraph — "For the desert-install logistics, see our Phoenix field notes."

#### Ship phases

| Phase | When | Cities |
|---|---|---|
| 2A | Post-blog index + 4 weeks | Phoenix |
| 2B | Phase 2A + 2 weeks | Austin, Dallas |
| 2C | Phase 2B + 3 weeks | Seattle, Portland |
| 2D | Phase 2C + 3 weeks | Nashville, Houston, San Diego |

**Skills used:** `seo-page` (per-page SEO validation) · `seo-content` (E-E-A-T prose check) · `seo-schema` (LocalBusiness JSON-LD validation) · `brainstorming` (neighborhood selection per city).

---

### Batch 3 — Per-Image `ImageObject` JSON-LD on `/gallery`

> [!summary]
> `app/gallery/page.tsx` extended · `lib/gallery-data.ts` extended with `location` + `dateCreated` · ~1 day

#### What `ImageObject` is and why it matters in 2026

[Schema.org ImageObject](https://schema.org/ImageObject) is structured data that gives crawlers machine-readable metadata per image:

- `contentUrl` — the actual image file URL
- `caption` / `description` — what's in the image
- `creator` → Mateo Vargas (Person)
- `author` → Phantom Pasting (Organization)
- `contentLocation` → where the photo was shot ("Melrose, Los Angeles")
- `dateCreated` → when the install happened
- `copyrightHolder` → Phantom Pasting
- `license` → usage terms

**What this earns us in 2026:**

1. **Google Image search traffic** — ImageObject is the primary signal Google uses to rank images. Your image sitemap has captions but the gallery page itself has zero per-image JSON-LD right now.
2. **AI answer engine citations** — when someone asks ChatGPT / Perplexity "show me LA wheat paste wall examples," engines pull ImageObject data to select + credit images.
3. **Pinterest rich pin eligibility** — ImageObject drives rich pin rendering.
4. **E-E-A-T stacking** — an image with `creator: Mateo Vargas` + `contentLocation: Melrose` + `dateCreated: 2024-08-12` reads as verified first-party documentation.

#### Implementation

1. **Extend `lib/gallery-data.ts`** — add per-image fields: `location: { neighborhood, city, state }`, `dateCreated: ISO date`, optional `campaignSlug` cross-linking to a case study.
2. **Generate `ImageObject[]` JSON-LD** in `app/gallery/page.tsx` — one entry per image, emitted as a single `<script type="application/ld+json">` block.
3. **Schema shape per image:**

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://www.phantompasting.com/gallery/<filename>.webp",
  "caption": "FashionPass wheat paste poster campaign wall — Los Angeles",
  "description": "Multi-wall wheat paste campaign for FashionPass across Melrose corridor, Los Angeles",
  "creator": { "@id": "https://www.phantompasting.com/author/mateo-vargas#person" },
  "author": { "@id": "https://www.phantompasting.com/#organization" },
  "copyrightHolder": { "@id": "https://www.phantompasting.com/#organization" },
  "contentLocation": {
    "@type": "Place",
    "name": "Melrose, Los Angeles, CA",
    "address": { "@type": "PostalAddress", "addressLocality": "Los Angeles", "addressRegion": "CA" }
  },
  "dateCreated": "2024-08-12",
  "license": "https://www.phantompasting.com/terms"
}
```

**Skills used:** `seo-schema` (validate emitted JSON-LD against Schema.org).

**Blocker:** needs the Mateo Vargas author page live first (see Batch 4, part of earlier beat plan Tier 1.2). The `@id` reference requires that URL to exist.

---

### Batch 4 — Adjacent Service Pages (5 new)

> [!summary]
> 5 new files · matches `chalk-spray-stencils` shorter pattern (~450 lines each) · ships one at a time

#### Metadata table — all ≤ 60 chars final

| Service | Slug | Page Title | Chars | Meta Description | Chars |
|---|---|---|---:|---|---:|
| Snipe Posters | `/services/snipe-posters` | `Snipe Posters` | 13 | Snipe poster campaigns — small-format poster placement on utility poles, crosswalk buttons, lamp posts across 50+ US cities. Documented. | 140 |
| Floor Decals | `/services/floor-decals` | `Floor Decal Advertising` | 23 | Floor decal advertising at crosswalks, store entrances, event venues. Vinyl or removable paint. Nationwide street-level campaigns. Documented. | 150 |
| Sticker Campaigns | `/services/sticker-campaigns` | `Sticker Campaigns` | 17 | Sticker campaigns — vinyl sticker distribution across lamp posts, newspaper boxes, mailboxes in 50+ US cities. Photo-documented saturation. | 142 |
| Pole Wraps | `/services/pole-wraps` | `Pole Wrap Advertising` | 21 | Pole wrap campaigns — wraparound poster installations on utility and lamp poles across 50+ US cities. Eye-level impact. Photo documented. | 142 |
| Scaffold Wraps | `/services/scaffold-wraps` | `Scaffold Wrap Advertising` | 25 | Scaffold wrap campaigns — large-format mesh banners on construction scaffolding across NYC, LA, Chicago. Permit-compliant. Documented. | 139 |

#### Per-page structure

Each page matches the shorter `/services/chalk-spray-stencils` pattern:
- Breadcrumb + TrustBar + Hero with ShinyGoldText accent
- "What it is" section (field-specific detail — e.g., snipes on crosswalk button poles 2-4 per pole, per Mateo field notes)
- 4-step process (design/print → scout → install → document)
- Use-case cards (when to pick this format)
- Legal/compliance note
- "More Services" cross-link cards
- FAQ (5 Qs, FAQPage schema)
- Service + BreadcrumbList + FAQPage JSON-LD
- **600-900 words body copy** (not 2,000+ — these are format pages, not pillars)

#### Cross-linking map

| Page | Primary service link | Blog link | Case study link |
|---|---|---|---|
| Snipe Posters | `/services/wheat-pasting` | `/blog/snipe-posters-vs-wheat-paste-vs-floor-decals` | `/work/incrediwear-street-campaign` |
| Floor Decals | `/services/wheat-pasting` | `/blog/snipe-posters-vs-wheat-paste-vs-floor-decals` | `/work/incrediwear-street-campaign` |
| Sticker Campaigns | `/services/wheat-pasting` | `/blog/street-postering-tools` | `/work/incrediwear-street-campaign` |
| Pole Wraps | `/services/wheat-pasting` | `/blog/street-postering-tools` | `/work/incrediwear-street-campaign` |
| Scaffold Wraps | `/services/wheat-pasting` | `/blog/wheat-pasting-new-york` | — |

**Skills used:** `brainstorming` (distinct angle per page, no template clones) · `seo-content` (E-E-A-T prose check) · `seo-page` (per-page SEO) · `seo-schema` (Service JSON-LD).

**Ship order:** Snipe Posters first (richest field data available) → Floor Decals → Sticker Campaigns → Pole Wraps → Scaffold Wraps.

---

### Batch 5 — Sitemap + Nav + llms.txt Consolidation

> [!summary]
> Runs after Batches 1-4 ship · single clean sweep · no content writing

**Files to edit:**
- `app/sitemap.ts` — register 8 new location URLs + 5 new service URLs + `/author/mateo-vargas`
- `app/sitemap-images.xml/route.ts` — add hero images for all new pages with per-page attribution
- `components/NavCitiesMenu.tsx` — add 8 new cities to nav dropdown
- `components/NavServicesMenu.tsx` — add 5 new services to nav dropdown
- `components/SiteFooter.tsx` — new service + location links in footer columns
- `public/llms.txt` — add "Additional Services" + expand "Markets" sections

---

## Execution Calendar

> [!calendar] All dates are relative to "Day 0 = blog posts pushed to prod"

| Week | Day | Action | Gate |
|---:|---:|---|---|
| -1 | | User previews + approves trademark purge, deploys it | User approval |
| 0 | 0 | User pushes 14 drafted blog posts to production | Deploy confirmed |
| 0 | 1 | Submit updated sitemap in GSC, request indexing on 3 top posts | GSC confirms receipt |
| 1-2 | 7-14 | Monitor GSC Coverage — target 10+ of 15 posts in "Valid" status | Indexation rate |
| 3-4 | 21-28 | Monitor GSC Performance — first long-tail queries should appear | Ranking signals |
| 5 | 35 | Ship **Batch 1** (biodegradable section) — lowest-risk first | Preview + approve |
| 6 | 42 | Ship **Batch 2A** (Phoenix only — single-page test) | Preview + approve |
| 8 | 56 | Ship **Batch 2B** (Austin, Dallas) | Preview + approve |
| 10 | 70 | Ship **Batch 3** (gallery ImageObject schema) — needs author page live first | Preview + approve |
| 12 | 84 | Ship **Batch 4 part 1** (Snipe Posters + Floor Decals) | Preview + approve |
| 14 | 98 | Ship **Batch 2C** (Seattle, Portland) | Preview + approve |
| 16 | 112 | Ship **Batch 4 part 2** (Sticker Campaigns + Pole Wraps + Scaffold Wraps) | Preview + approve |
| 18 | 126 | Ship **Batch 2D** (Nashville, Houston, San Diego) | Preview + approve |
| 19 | 133 | Ship **Batch 5** (sitemap/nav/llms.txt consolidation) | Preview + approve |
| 20 | 140 | Post-deploy `seo-audit` across full site | Clean audit |

**Total calendar: ~20 weeks (5 months) from blog ship to full expansion complete.**

---

## What I Will NOT Do

> [!danger] Hard guardrails
> - No commits or pushes without explicit per-batch approval
> - No deploying more than one batch at a time
> - No inventing neighborhoods — only real, well-known districts per city
> - No inventing images — if a new page needs a hero that doesn't exist, I flag it and ask
> - No inventing prices — pricing tables are a separate future batch requiring your pricing data
> - No re-introducing "Wild Posting" into positioning copy
> - No banned-phrase slop
> - No touching the trademark purge files again
> - No stacking new work on top of an unapproved previous batch

---

## Skills Used — All Already Installed

| Skill | Path | Use case |
|---|---|---|
| `obsidian-markdown` | `~/.claude/skills/obsidian-markdown/` | This doc's formatting · future `.md` docs in `docs/seo/` |
| `brainstorming` | `~/.claude/skills/brainstorming/` | Neighborhood selection · adjacent service angles · content iterations |
| `seo-page` | `~/.claude/skills/seo-page/` | Per-page SEO validation before ship |
| `seo-content` | `~/.claude/skills/seo-content/` | E-E-A-T and anti-slop check on every new prose block |
| `seo-schema` | `~/.claude/skills/seo-schema/` | Validate every JSON-LD block before ship |
| `seo-audit` | `~/.claude/skills/seo-audit/` | Post-batch and post-full-deploy audits |

No GitHub downloads needed. Canonical sources documented for reference:
- `obsidian-markdown` → [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)
- `brainstorming` → [obra/superpowers](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md)

---

## Open Questions — Resolve Before Batch 1 Starts

> [!question] These answers change how I build
> 1. **Image sourcing for 8 new location pages** — pick one:
>    - (a) Reuse existing `/public/gallery/*.webp` with honest alt text ("stand-in image from LA campaign")
>    - (b) Wait for new per-city imagery before shipping that city's page
>    - (c) Ship with placeholder hero + a `TODO` flag for later image swap
> 2. **Mateo Vargas author page** — ship this before or during Batch 3? (Gallery ImageObject `creator.@id` depends on it existing.)
> 3. **Pricing tables** — confirm deferred to a separate batch (needs pricing data from you)
> 4. **Trademark purge deploy status** — still pending your preview approval. Block on this first before any other work?
> 5. **Adjacent services — all 5 or a subset?** Happy to ship Snipe Posters and Floor Decals only if the other 3 don't have enough active client demand to justify the pages

---

## Related Docs

- [[COMPETITOR_BEAT_PLAN]] — the v2 audit-revised plan this batch list was extracted from
- [[COMPETITOR_COMPARISON_ANALYSIS]] — head-to-head deep-dive on wildposting.com + sidewalktattoos.com + 5 secondary rivals
- [[SEO_COMPETITOR_KEYWORDS]] — finalized trademark-safe keyword hierarchy
- [[WILD_POSTING_PURGE_EXECUTION_SPEC]] — the 31-file purge that needs to deploy before this plan starts

---

*Document maintained by: Phantom Pasting SEO · Created 2026-04-22 · On hold pending blog indexation · Review by 2026-05-15*
