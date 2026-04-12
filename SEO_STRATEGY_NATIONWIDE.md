# SEO Strategy — Nationwide Reach
**Phantom Pasting** | phantompasting.com | Last Updated: 2026-04-12 (Session 3)

---

## 1. Current State Assessment

### Session History

#### Session 1 — 2026-04-11
| Task | Status | Notes |
|------|--------|-------|
| Gallery cleanup — removed bedstuy-stencil | ✅ Done | File kept for home page form background |
| 7 new images imported & optimized to WebP | ✅ Done | Black Pearl LA + Don't Fall Off campaigns |
| Rich SEO alt text on all 22 gallery images | ✅ Done | Campaign-specific, keyword-rich alt attrs |
| Form placeholder contrast +25% darker | ✅ Done | `rgba(0,0,0,0.53)` via `.form-field ::placeholder` in globals.css |
| URL canonicalization to `https://www.phantompasting.com` | ✅ Done | All 14 pages + layout + robots + schemas |
| `/gallery` added to sitemap (17 URLs total) | ✅ Done | priority 0.7, monthly changefreq |
| Internal links: service pages → city pages | ✅ Done | "Markets We Serve" section on all 3 services |
| Internal links: city page hero → /gallery | ✅ Done | "See Our Work" CTA now points to /gallery |
| Internal links: Gallery added to footer | ✅ Done | CityPageTemplate, ScrollSections, all service/work footers |
| Internal links: work pages → city pages | ✅ Done | FashionPass→LA, FIFA→Atlanta, Incrediwear→NY+LA |
| Build verified: 19 pages, zero errors | ✅ Done | All static, all routes generate |

#### Session 2 — 2026-04-12
| Task | Status | Notes |
|------|--------|-------|
| Full canonical audit across all 16 pages | ✅ Done | Every page confirmed `https://www.` — zero exceptions |
| Homepage `metadata` export added | ✅ Done | Explicit canonical + full openGraph (title, description, url, image) |
| Gallery page schema added | ✅ Done | `BreadcrumbList` + `CollectionPage` JSON-LD added to `gallery/page.tsx` |
| Service image overlay reduced | ✅ Done | `brightness-75→90`, gradient `rgba(0,0,0,0.55→0.28)` in ScrollSections.tsx |
| Build verified: 19 pages, zero errors | ✅ Done | All static |

#### Session 3 — 2026-04-12
| Task | Status | Notes |
|------|--------|-------|
| Netlify www redirect rule | ✅ Done | Created root `netlify.toml` with `301` non-www → www redirect |
| About page BreadcrumbList | ✅ Done | Added `BreadcrumbList` JSON-LD to `app/about/page.tsx` |
| FAQPage schema — wheat pasting | ✅ Done | 5 questions added to `services/wheat-pasting/page.tsx` |
| FAQPage schema — chalk spray stencils | ✅ Done | 5 questions added to `services/chalk-spray-stencils/page.tsx` |
| FAQPage schema — full impact campaigns | ✅ Done | 5 questions added to `services/full-impact-campaigns/page.tsx` |
| FAQPage schema — all 5 city pages | ✅ Done | 5 dynamic city-specific questions added to `CityPageTemplate.tsx` |
| OG images — homepage | ✅ Done | FashionPass LA wild posting wall (real campaign photo) |
| OG images — service pages ×3 | ✅ Done | Wheat paste→FashionPass wall, Chalk→Black Pearl stencil, Full→FIFA wall |
| OG images — location pages ×5 | ✅ Done | LA→FashionPass, Atlanta→FIFA, NYC→Incrediwear, Chicago/Miami→campaign photos |
| Build verified: 19 pages, zero errors | ✅ Done | All static |

---

### Current Technical SEO Health

**Strengths:**
- All 19 sitemap URLs use `https://www.phantompasting.com` — consistent, no bare-domain leaks
- Every page has an **explicit** `alternates.canonical` in its own `metadata` export (not relying on layout inheritance)
- Every page's `openGraph.url` matches its canonical exactly
- Schema.org JSON-LD coverage:
  - Homepage: `WebSite` + `Organization/ProfessionalService` + `BreadcrumbList`
  - Gallery: `CollectionPage` + `BreadcrumbList` ✅ (added session 2)
  - Services ×3: `Service` + `BreadcrumbList`
  - Locations ×5: `LocalBusiness` + `BreadcrumbList`
  - Work ×3: `Article` + `BreadcrumbList`
  - Contact: `ContactPage` + `Organization`
  - About: `Organization`
- Twitter Card (`summary_large_image`) on all pages via layout
- `metadataBase: https://www.phantompasting.com` in `layout.tsx`
- Image optimization: WebP, `next/image` responsive sizing, `sizes` attrs on every image
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Static site generation (SSG) — every route `○ (Static)`, fastest possible TTFB
- robots.txt allows all crawlers, references sitemap with `www`

**Remaining Issues:**

| Issue | Severity | Fix |
|-------|----------|-----|
| About/Contact pages have no OG image | Low | Add campaign photo to openGraph in `about/page.tsx` and `contact/page.tsx` |
| No `hreflang` tags | Low | Not needed until launching regional variants |
| No Google Business Profile listings | Medium | Create GBP for each active city (see Phase 4) |
| No blog/content section | Medium | Required for Phase 3 keyword targets (see Phase 3) |

---

## 2. Crawlability & Indexability

### Google Search Console Checklist

Submit the following to GSC after deployment:

1. **Sitemap submission:** `https://www.phantompasting.com/sitemap.xml`
2. **URL Inspection** — priority pages to request indexing:
   - `https://www.phantompasting.com/`
   - `https://www.phantompasting.com/gallery`
   - `https://www.phantompasting.com/services/wheat-pasting`
   - `https://www.phantompasting.com/locations/los-angeles`
   - `https://www.phantompasting.com/locations/new-york`
   - `https://www.phantompasting.com/locations/atlanta`
3. **Coverage report** — verify no "Duplicate without user-selected canonical" warnings
4. **Core Web Vitals** — all pages are SSG so LCP should be fast; confirm no CLS from font loading

### Crawl Budget Notes

- Static dates in sitemap prevent unnecessary recrawls — good
- `changeFrequency: "never"` on case study pages tells Googlebot not to revisit — good
- All canonical URLs are unique, consistent, and 1:1 with sitemap entries
- No orphaned pages — all pages reachable via internal links

---

## 3. Completed Pre-Launch Items

### ✅ 3.1 www Redirect at Netlify Level — DONE

Root `netlify.toml` created with a `301` permanent redirect from `phantompasting.com/*` → `www.phantompasting.com/:splat`. Server-level enforcement means Googlebot is redirected before it can index the non-www variant, regardless of what canonical tags say.

### ✅ 3.2 Work Pages in Sitemap — CONFIRMED

All 3 `/work/*` case study pages are present in `app/sitemap.ts`. Total sitemap: **19 URLs**.

### ✅ 3.3 Campaign-Specific OG Images — DONE

All pages replaced generic logo with real campaign photos:

| Page | OG Image Used |
|------|--------------|
| Homepage | FashionPass LA wild posting wall |
| Wheat Pasting | FashionPass campaign poster wall |
| Chalk Stencils | Black Pearl LA chalk stencil sidewalk |
| Full Impact | FIFA World Cup poster wall |
| Los Angeles | FashionPass wild posting wall |
| Atlanta | FIFA World Cup wall installation |
| New York | Incrediwear pole wrap campaign |
| Chicago | FashionPass campaign poster wall |
| Miami | Don't Fall Off urban wall |

### ✅ 3.4 FAQPage Schema — DONE

5 FAQs added to each service page. 5 dynamic city-specific FAQs added to `CityPageTemplate.tsx` (auto-applies to all current + future city pages). Eligible for Google People Also Ask and AI Overviews.

### ✅ 3.5 About Page BreadcrumbList — DONE

`BreadcrumbList` JSON-LD added to `app/about/page.tsx`.

---

## 4. Nationwide Reach Roadmap

### Phase 1 — Tier 1 City Depth (Now → 3 months)

**Goal:** Own "wheat pasting [city]" and "wild posting [city]" for all 5 current markets.

| Action | Status | Impact |
|--------|--------|--------|
| FAQPage schema on all city pages | ✅ Done | AI Overviews + People Also Ask eligibility |
| Campaign-specific OG images per city | ✅ Done | Higher CTR from social shares |
| Add "Related Campaigns" section to each city page | ⬜ Next | Improves crawl depth, keeps users on site |
| Link city pages to relevant `/work/*` case studies in-page | ⬜ Next | Builds topical authority per city |

**City → Case Study in-page links (still to add in hero/body):**
- LA page → `/work/fashionpass-los-angeles`
- Atlanta page → `/work/fifa-world-cup-atlanta`
- New York page → `/work/incrediwear-street-campaign`

### Phase 2 — Tier 2 City Expansion (3–6 months)

Add 10 new city pages in priority order:

1. Houston, TX — `/locations/houston`
2. Phoenix, AZ — `/locations/phoenix`
3. Philadelphia, PA — `/locations/philadelphia`
4. San Francisco, CA — `/locations/san-francisco`
5. Seattle, WA — `/locations/seattle`
6. Dallas, TX — `/locations/dallas`
7. Austin, TX — `/locations/austin`
8. Boston, MA — `/locations/boston`
9. Nashville, TN — `/locations/nashville`
10. Denver, CO — `/locations/denver`

Each follows the `CityPageTemplate` pattern. Update `sitemap.ts` and `NavCitiesMenu` for each.

### Phase 3 — Content & Topical Authority (6–12 months)

Create `/blog` or `/resources` section targeting informational queries:

| Article Topic | Target Query | Intent |
|--------------|-------------|--------|
| "What is wheat pasting?" | wheat pasting definition, wild posting explained | Informational |
| "Wheat pasting vs. digital ads: ROI comparison" | wheat paste advertising cost | Commercial |
| "How to run a guerrilla marketing campaign" | guerrilla marketing campaign guide | Informational |
| "Best neighborhoods for street advertising in NYC" | street advertising nyc | Informational |
| "Wild posting cost: what to budget for 2026" | wild posting cost | Commercial |
| "Wheat pasting for music artists" | wheat pasting music promotion | Commercial |
| "Chalk spray stencil sidewalk advertising guide" | chalk stencil marketing | Informational |

**Format:** 1500–2500 words, photo-heavy (use existing campaign docs), internal links to service + city pages.

### Phase 4 — Backlink & Authority Building (Ongoing)

| Strategy | Target Sites | Notes |
|----------|-------------|-------|
| Music industry press | Pigeons & Planes, Complex, HipHopDX | Pitch Don't Fall Off + FashionPass case studies |
| Fashion marketing publications | Fashionista, WWD, BoF | FashionPass LA angle |
| Sports marketing coverage | Sports Business Journal, Front Office Sports | FIFA World Cup campaign |
| Guerrilla marketing directories | Clutch, UpCity, agency listing sites | Easy directory wins |
| Local business citations | Google Business Profile for each active city | Reinforces LocalBusiness schema |
| Instagram / UGC | Tag @phantompasting on every install | Social signals + brand mentions |

**Google Business Profile:**
Create GBP for each active market. Link directly to the matching `/locations/[city]` page. GBP + `LocalBusiness` schema = double city signal.

### Phase 5 — AI Search Optimization (Ongoing)

Target AI-powered results (Google AI Overviews, Perplexity, ChatGPT Search):

- Add `FAQPage` schema to service + city pages (Q&A format, 4–6 questions each)
- Open every key paragraph with a definition ("Wheat pasting is...")
- Keep `description` meta tags under 155 characters, entity-rich, factual
- Maintain `Organization.sameAs` with Instagram URL — keeps entity graph connected
- Every stat/claim should be supported by in-page copy (e.g., "500+ campaigns", "50+ cities")

---

## 5. Keyword Targets by Priority

### Primary (target now):
- `wheat pasting company` — commercial, high intent
- `wild posting company` — commercial, high intent
- `wheat paste advertising` — commercial
- `guerrilla marketing agency` — commercial
- `wheat pasting [city]` × 5 cities — local commercial

### Secondary (3–6 months):
- `chalk spray stencil marketing`
- `wild posting cost`
- `wheat paste posters`
- `street advertising agency`
- `wheat pasting [city]` × 10 new cities

### Long-tail (6–12 months):
- `wheat pasting for music artists`
- `wild posting for fashion brands`
- `guerrilla marketing campaign cost`
- `how much does wild posting cost`
- `best guerrilla marketing agency us`

---

## 6. Monitoring & Measurement

### KPIs to Track in Google Search Console:
- Total impressions for primary keyword targets (establish baseline at launch)
- Click-through rate on city pages (goal: >3%)
- Index coverage — all 22 sitemap URLs indexed within 2 weeks of launch
- Core Web Vitals — LCP < 2.5s, CLS < 0.1, INP < 200ms

### Monthly Review Checklist:
- [ ] Check GSC for new crawl errors or coverage drops
- [ ] Review top landing pages — any unexpected 404s?
- [ ] Confirm canonical tags honored (no "Duplicate, Google chose different canonical" reports)
- [ ] Update sitemap `lastModified` when page content changes significantly
- [ ] Add new case study to gallery + sitemap after each campaign
- [ ] Monitor rankings for primary keyword targets
- [ ] Check backlink profile for new referring domains

---

## 7. Schema Coverage Map (Current)

| Page | BreadcrumbList | Primary Schema | FAQPage | OG Image | Canonical |
|------|---------------|----------------|---------|----------|-----------|
| `/` | ✅ | WebSite + Organization | ✗ | ✅ Campaign | ✅ |
| `/about` | ✅ | Organization | ✗ | ✗ | ✅ |
| `/contact` | ✗ | ContactPage | ✗ | ✗ | ✅ |
| `/gallery` | ✅ | CollectionPage | ✗ | ✗ | ✅ |
| `/services/wheat-pasting` | ✅ | Service | ✅ | ✅ Campaign | ✅ |
| `/services/chalk-spray-stencils` | ✅ | Service | ✅ | ✅ Campaign | ✅ |
| `/services/full-impact-campaigns` | ✅ | Service | ✅ | ✅ Campaign | ✅ |
| `/locations/new-york` | ✅ | LocalBusiness | ✅ | ✅ Campaign | ✅ |
| `/locations/los-angeles` | ✅ | LocalBusiness | ✅ | ✅ Campaign | ✅ |
| `/locations/atlanta` | ✅ | LocalBusiness | ✅ | ✅ Campaign | ✅ |
| `/locations/chicago` | ✅ | LocalBusiness | ✅ | ✅ Campaign | ✅ |
| `/locations/miami` | ✅ | LocalBusiness | ✅ | ✅ Campaign | ✅ |
| `/work/fashionpass-los-angeles` | ✅ | Article | ✗ | ✅ Campaign | ✅ |
| `/work/fifa-world-cup-atlanta` | ✅ | Article | ✗ | ✅ Campaign | ✅ |
| `/work/incrediwear-street-campaign` | ✅ | Article | ✗ | ✅ Campaign | ✅ |

---

*Last updated: 2026-04-12 | Phantom Pasting SEO Optimization — Session 2*
