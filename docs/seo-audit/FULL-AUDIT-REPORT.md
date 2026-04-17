# Phantom Pasting — Full SEO Audit Report
**Site:** https://www.phantompasting.com
**Business:** Guerrilla marketing agency — wheat pasting, wild posting, chalk spray stencils
**Audit Date:** 2026-04-15
**Framework:** Next.js 14 App Router | Hosting: Netlify

---

## SEO Health Score: 65 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 78 | 19.5 |
| Content Quality | 25% | 52 | 13.0 |
| On-Page SEO | 20% | 65 | 13.0 |
| Schema / Structured Data | 10% | 62 | 6.2 |
| Performance (CWV) | 10% | 72 | 7.2 |
| Images | 5% | 70 | 3.5 |
| AI Search Readiness | 5% | 45 | 2.25 |
| **TOTAL** | | | **64.65 → 65** |

---

## Top 5 Critical Issues

1. **All three case studies are thin content (&lt;300 words, no metrics)** — primary E-E-A-T proof pages have no numbers, no outcomes, no client quotes
2. **No LocalBusiness schema on homepage** — highest-value schema type for a service business; completely absent
3. **FAQPage schema on service and location pages returns zero rich results** — Google restricted FAQPage to health/gov sites in Aug 2023; 8 pages carry dead markup
4. **No `/services` or `/work` hub pages** — breadcrumb middle positions point to 404s; no internal linking hub for crawl authority
5. **Zero pricing or cost content anywhere** — "how much does wheat pasting cost" is unaddressed on a site selling premium campaigns

## Top 5 Quick Wins

1. Remove FAQPage schema from all service + location pages (one template change, zero content work)
2. Add `priority` prop to hero image on all 3 case study pages (3-line code fix, immediate LCP improvement)
3. Fix breadcrumb schema position 2 on service + location pages (corrects structured data errors across 8 pages)
4. Trim title tags on homepage (77 chars) and wheat pasting page (71 chars) to under 65 chars
5. Add `og:image` to `/about` and `/contact` pages — currently inheriting a 512×460 logo declared as 1200×630

---

## 1. Technical SEO — Score: 78/100

### 1.1 robots.txt — PASS
```
User-Agent: *
Allow: /
Sitemap: https://www.phantompasting.com/sitemap.xml
```
Correct domain (www), no blocking rules. Clean.

### 1.2 Sitemap — PASS (minor hygiene)
- All 15 pages present, no redirect/404 URLs
- Static `lastModified` dates correctly used (no crawl budget waste)
- Gallery entry uses inline `new Date("2026-04-11")` instead of a named constant — **Low** hygiene
- `priority` and `changeFrequency` are ignored by Google but harmless

### 1.3 Canonical Tags — PASS
All pages have explicit `alternates: { canonical: "..." }` pointing to `https://www.phantompasting.com/...`. metadataBase correctly set. No canonical mismatches.

### 1.4 Redirect Chain — HIGH ISSUE
**Double redirect for `http://` non-www visitors:**
```
http://phantompasting.com → 301 (Netlify auto-HTTPS) → https://phantompasting.com → 301 (netlify.toml) → https://www.phantompasting.com
```
The `https://` non-www → www is a clean single hop. The HTTP version adds an extra hop. Add to `netlify.toml`:
```toml
[[redirects]]
  from   = "http://phantompasting.com/*"
  to     = "https://www.phantompasting.com/:splat"
  status = 301
  force  = true
```

### 1.5 Security Headers — MEDIUM
| Header | Status | Note |
|---|---|---|
| X-Content-Type-Options | PASS | nosniff |
| X-Frame-Options | PASS | SAMEORIGIN |
| X-XSS-Protection | LOW | Deprecated since Chrome 78 — remove |
| Referrer-Policy | PASS | strict-origin-when-cross-origin |
| Permissions-Policy | PASS | camera/mic/geo blocked |
| HSTS | LOW | Missing `includeSubDomains; preload` |
| Content-Security-Policy | MEDIUM | Missing entirely |

### 1.6 Core Web Vitals — MEDIUM
**Positive signals found:**
- HeroSection is a pure CSS animation server component — excellent for LCP
- ClientShell defers below-fold content via `requestIdleCallback` (2s timeout)
- ScrollSections uses `dynamic(..., { ssr: false })` — no SSR weight below fold
- Critical keyframes inlined in `<head>` — eliminates render-blocking CSS
- framer-motion in `optimizePackageImports`

**Issues:**
- **Case study hero images missing `priority` prop [Medium]** — all 3 `/work/` pages have the first image lazy-loaded, causing delayed LCP. Add `priority={i === 0}` to the image loop.
- Service pages correctly set `priority` on hero images ✓
- No horizontal scroll detected on any page ✓
- Hero images on homepage/service/location pages all fully rendered (`complete: true`) ✓

### 1.7 OG Image — HIGH ISSUE
`layout.tsx` declares `width: 1200, height: 630` for the logo at `/phantom-pasting-logo.png` — actual file is **512×460**. This wrong metadata causes malformed social card previews on any page that doesn't override OG image. Currently `/about` and `/contact` have no OG image override and will inherit the broken fallback.

**Fix:** Create a proper 1200×630 social card, OR add individual OG images to `/about` and `/contact`.

### 1.8 `og:locale:alternate` — LOW
Set to the same value as `og:locale` (`en_US`). Meaningless — remove it.

---

## 2. Content Quality — Score: 52/100

### Homepage (`/`)
- Title: 77 chars (OVER) — **Medium**
- Meta: 149 chars, no CTA — **Low**
- H1 "WE OWN THE STREETS" renders in viewport — confirmed via Playwright ✓
- All body content is inside client components — SSR rendering unverified beyond H1 — **Medium**
- Zero priced content, no conversion content in indexable HTML

### About (`/about`)
- Title: 51 chars ✓, Meta: 170 chars (over by 10) — **Low**
- H1 "WHO WE ARE." — no keyword — **Medium**
- ~480 words, above threshold ✓
- Strong E-E-A-T: 2014 founding, 500+ campaigns, named clients (FashionPass, FIFA, Incrediwear, Calvin Priice)
- No links to case studies from body text — **Medium**

### Contact (`/contact`)
- Title + meta: both excellent ✓
- H1 "LET'S HIT THE STREETS." — no keyword — **Medium**
- No H2/H3 structure — **Medium**
- ~200 words (acceptable for lead-gen page)
- No OG image override — inherits broken 512×460 logo — **High**

### Gallery (`/gallery`)
- Title: "Campaign Gallery | Our Work" — not a searched phrase — **Medium**
- H1 and all content inside `<GalleryPageClient>` — cannot confirm server rendering — **High**
- No CTA in meta description — **Low**

### Service Pages

| Page | Title Chars | Meta Chars | H1 Keyword | Content Words | Notes |
|---|---|---|---|---|---|
| Wheat Pasting | 71 (over) | 156 ✓ | Yes ✓ | ~650 ✓ | Best service page |
| Chalk Stencils | 51 ✓ | 161 (1 over) | Yes ✓ | ~420 | No named clients |
| Full Impact | 53 ✓ | 154 ✓ | No — **Medium** | ~580 ✓ | H1 "TOTAL STREET OWNERSHIP" has no keyword |

All three service pages share identical H2 labels: "HOW IT WORKS.", "MORE SERVICES.", "LET'S BUILD YOUR CAMPAIGN." — duplicate structural pattern — **Medium**.

### Case Studies — CRITICAL CONTENT GAP

| Page | Word Count | Has Metrics | Has Client Quote | Has Campaign Dates | Cities Named |
|---|---|---|---|---|---|
| FashionPass LA | ~280 | No | No | No | Yes |
| FIFA Atlanta | ~280 | No | No | No | Yes |
| Incrediwear | ~265 | No | No | No | No |

All three are below the 300-word thin-content threshold. None contain poster counts, impressions, campaign duration, or outcome data. These are the site's primary E-E-A-T proof — they should be the deepest content on the site, not the shallowest.

### Location Pages — Score: Medium

**What's good:**
- H1 pattern "WHEAT PASTING & WILD POSTING IN [CITY]." — strong keyword coverage ✓
- Meta descriptions all have "Get a quote" CTA ✓
- 6 neighborhood blocks per city with specific neighborhood names ✓
- ~400–500 words per page ✓

**Issues:**
- FAQ answers are pure `${data.city}` string substitution — effectively identical across all 5 cities — **Medium**
- NYC, Miami, Chicago have no case study proof supporting the "we work here" claim — **Medium**
- Title on NYC (65 chars) and LA (62 chars) slightly over — **Low**

---

## 3. Schema / Structured Data — Score: 62/100

### What Exists
| Page | Schema Types |
|---|---|
| Homepage | WebSite + SearchAction, BreadcrumbList (1 item), Organization + ProfessionalService |
| About | BreadcrumbList, Organization + ProfessionalService |
| Contact | ContactPage + nested Organization + ContactPoint |
| Service pages (×3) | BreadcrumbList, Service + Offer, FAQPage |
| Case studies (×3) | BreadcrumbList, Article with publisher + image array |
| Location pages (×5) | BreadcrumbList, LocalBusiness, FAQPage |

### Critical Gaps & Errors

**1. No `LocalBusiness` on homepage [Critical]**
The homepage has `Organization + ProfessionalService` but not `LocalBusiness`. For a service business this is the highest-value schema type. Needed for Knowledge Panel eligibility, local pack signals, and `areaServed` geo targeting.

**2. FAQPage on non-compliant pages [Critical — remove immediately]**
Google restricted FAQPage rich results to health and government sites in August 2023. All 3 service pages and all 5 location pages carry `FAQPage` schema that will never produce a rich result. The markup is generating false expectations and adding weight with zero return. Remove from `CityPageTemplate` and all three service page files.

**3. Article `image` uses raw strings, not `ImageObject` [High]**
Case study schema has `image: [url1, url2, url3]` as raw strings. Google requires `ImageObject` with `url`, `width`, `height`, and `caption` for image-enriched article previews.

**4. No `AggregateRating` [High]**
No review or rating schema anywhere. Star ratings in SERPs are the single most impactful rich result for a service business. Add when real verifiable reviews exist.

**5. Breadcrumb position 2 points to non-existent parent [Medium]**
All service pages: position 2 "Services" → `phantompasting.com/services/wheat-pasting` (same as position 3)
All work pages: position 2 "Work" → `phantompasting.com/work/fashionpass-...` (same as position 3)
No `/services` or `/work` parent page exists. Fix by creating those pages or collapsing to 2-item breadcrumbs.

**6. `WebSite` SearchAction points to non-existent search [Low]**
`urlTemplate: "/?q={search_term_string}"` — no search function exists. Remove this block.

**7. Single-item BreadcrumbList on homepage [Low]**
One-item breadcrumbs produce no rich result. Remove the homepage BreadcrumbList.

**8. `LocalBusiness` on city pages missing `telephone` and `email` [Medium]**
City pages have `LocalBusiness` but no `telephone`, `email`, or `priceRange`. Add to `CityPageTemplate`.

---

## 4. Sitemap — Score: 92/100

All 15 pages present. Correct www domain throughout. Static dates correctly implemented. Sitemap URL in robots.txt matches canonical domain. No issues except:
- Gallery `lastModified` uses inline date vs. named constant (Low hygiene)
- `priority` and `changeFrequency` ignored by Google (informational, harmless)

**Location page content differentiation note:** At 5 cities, within safe range. Must audit uniqueness before adding more cities — Google's doorway page algorithm targets templated city pages with only the name swapped.

---

## 5. Performance — Score: 72/100

### Visual Audit (Playwright — desktop 1440px, mobile 390px)

**Homepage Desktop:**
- H1 "WE OWN THE STREETS" — in viewport ✓
- Nav in viewport ✓
- 18 CTAs visible above fold (59 total) — nav links counted as CTAs; first visible CTA is 6×20px (too small, likely a scrollbar element)
- 27 total images, 26 lazy-loaded, first image is the logo (64×58px) — no hero image, text-only hero ✓
- No horizontal scroll ✓

**Homepage Mobile:**
- H1 in viewport ✓, Nav in viewport ✓
- First CTA is 40×40px (hamburger) — borderline on the 44px minimum tap target
- No horizontal scroll ✓

**Location New York:**
- H1 in viewport ✓
- "GET A QUOTE" CTA visible at 35px height — **below the 44px tap target minimum on mobile**
- Only 1 image total, 0 lazy — the single image is the logo (likely footer); no content images on location pages

**Service Wheat Pasting Desktop:**
- H1 in viewport ✓
- "GET A QUOTE" in nav visible ✓ (35px height — same tap target issue on mobile)
- 3 images total, 1 lazy — hero images eager-loaded ✓

**Case Study FIFA Desktop:**
- H1 in viewport ✓
- 7 images, 6 lazy (first eager) — LCP image is eager ✓
- Only 1 CTA visible above fold (the nav "GET A QUOTE")

**Key Performance Issues:**
| Issue | Severity | Affected Pages |
|---|---|---|
| Nav CTA "GET A QUOTE" at 35px height — below 44px tap target | Medium | All inner pages mobile |
| Case study hero images missing `priority` (confirmed: FIFA shows only 1 eager image) | Medium | All 3 case studies |
| Mobile first CTA has empty text (hamburger icon only) | Low | All pages |

---

## 6. Images — Score: 70/100

- Next.js Image component used throughout ✓
- AVIF + WebP formats configured ✓
- 1-year cache TTL set ✓
- Lazy loading on all non-hero images ✓
- Hero images on service pages are eager ✓
- Location pages have only 1 image (the logo) — **no campaign photography on location pages** — **Medium** (missed E-E-A-T visual proof)
- Case study `Article` schema uses raw image URLs instead of `ImageObject` — **High** (schema issue, not image issue per se)
- Alt text quality cannot be confirmed from source without a live scrape

---

## 7. AI Search Readiness — Score: 45/100

AI search (Perplexity, ChatGPT, Gemini) surfaces content that is:
- **Authoritative:** Named entity + verifiable credentials
- **Citable:** Specific facts, numbers, named clients
- **Structured:** Clear Q&A format, definitions, comparisons

**What works:**
- Named clients (FashionPass, FIFA World Cup, Incrediwear) provide citability
- Specific specs (poster sizes, paper weights, lead times) are citable
- Service definitions ("wheat pasting is...") are present in FAQ

**What's missing:**
- No dedicated "What is wheat pasting?" or "What is wild posting?" informational page
- No comparison content ("wheat pasting vs. wild posting vs. vinyl")
- No campaign results data — AI engines favor sources with verifiable outcomes
- No blog or editorial content — only commercial pages

---

## Screenshot Reference

All screenshots saved to `docs/seo-audit/screenshots/`:
- `homepage_desktop.png` — 1440×900
- `homepage_mobile.png` — 390×844
- `location_new_york_desktop.png` — 1440×900
- `location_new_york_mobile.png` — 390×844
- `service_wheat_pasting_desktop.png` — 1440×900
- `service_wheat_pasting_mobile.png` — 390×844
- `case_study_fifa_desktop.png` — 1440×900
- `case_study_fifa_mobile.png` — 390×844
