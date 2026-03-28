# PhantomPasting — SEO Implementation Roadmap

> Phased plan for taking a new domain from zero to dominant in the wheat pasting / wild posting niche.

---

## Phase 1 — Foundation (Weeks 1–4)

**Goal:** Google can find, crawl, and understand the site. Core pages indexed. Analytics live.

### Technical Setup
- [ ] Verify domain in Google Search Console
- [ ] Submit sitemap (`/sitemap.xml`) to GSC
- [ ] Verify Bing Webmaster Tools (free, ~10% of US search volume)
- [ ] Install GA4 or Plausible for analytics (privacy-friendly alternative)
- [ ] Add `app/robots.ts` → allow all, point to sitemap
- [ ] Add `app/sitemap.ts` → dynamic, includes all pages
- [ ] Test Core Web Vitals: `npx next build && npx lighthouse http://localhost:3000`
- [ ] Ensure `next/image` on all hero images with `priority` prop
- [ ] Test site on mobile (scroll-snap, tap targets, font sizes)

### Core Pages Live
- [ ] `/` — homepage with Organization schema
- [ ] `/services/wheat-pasting` — with Service schema
- [ ] `/services/chalk-spray-stencils` — with Service schema
- [ ] `/services/full-impact-campaigns` — with Service schema
- [ ] `/contact` — with ContactPage schema
- [ ] `/about` — with Person/Organization schema
- [ ] `/faq` — with FAQPage schema (10+ Q&As about process, pricing, cities)

### Citations & Profiles
- [ ] Google Business Profile (mark as Service Area Business covering US)
- [ ] Bing Places — mirror GBP setup
- [ ] Yelp Business — full profile with photos
- [ ] Clutch.co agency profile
- [ ] LinkedIn Company Page → link to site
- [ ] Instagram bio → link to site

### Analytics Events to Track
- Contact form submission (`form_submit`)
- Quote request button clicks (`quote_click`)
- City page views (custom dimension: city)
- Case study views
- Gallery image views

---

## Phase 2 — Expansion (Weeks 5–12)

**Goal:** First organic rankings appear. Case studies indexed. 5 city pages live.

### Week 5–6: Case Studies
- [ ] `/work/fashionpass-los-angeles` — live + indexed
- [ ] `/work/fifa-world-cup-atlanta` — live + indexed
- [ ] `/work/incrediwear-street-campaign` — live + indexed
- [ ] Add `ImageObject` schema to all campaign photos in case studies
- [ ] Submit URLs to GSC for expedited indexing (`URL Inspection → Request Indexing`)

### Week 5–8: City Pages Tier 1
- [ ] `/locations/los-angeles` — with LocalBusiness schema
- [ ] `/locations/new-york` — with LocalBusiness schema
- [ ] `/locations/chicago` — with LocalBusiness schema
- [ ] `/locations/miami` — with LocalBusiness schema
- [ ] `/locations/atlanta` — with LocalBusiness schema

Each page unique, minimum 600 words, with:
- Specific neighborhood mentions
- 2-3 embedded campaign photos from that market (or nearest)
- Local wall/district names
- Internal links to service pages

### Week 9–10: First Blog Posts
- [ ] `/blog/what-is-wheat-pasting` — pillar post
- [ ] `/blog/wheat-pasting-cost-guide` — commercial intent post
- [ ] Set up blog index page `/blog` with proper pagination
- [ ] Add `BlogPosting` schema to both posts
- [ ] Internal link from `/services/wheat-pasting` to both blog posts

### Week 11–12: Link Building Sprint
- [ ] Email FashionPass marketing team → ask for mention/link on their "partnerships" or "campaigns" page
- [ ] Email Incrediwear → same ask
- [ ] Submit to 10 marketing agency directories (Agency Spotter, Sortlist, UpCity, GoodFirms, Manifest)
- [ ] Set up Google Alerts: "wheat pasting", "wild posting", "guerrilla marketing agency" → catch mentions for link reclamation

---

## Phase 3 — Scale (Months 3–6)

**Goal:** Top 10 rankings for head terms. City pages returning organic leads. 12 city pages live.

### Month 3
- [ ] City pages: `/locations/austin`, `/locations/houston`, `/locations/dallas`
- [ ] Blog: "Wild Posting vs Billboards" + "Guerrilla Marketing for Music Artists"
- [ ] Add `BreadcrumbList` schema to all pages
- [ ] Conduct internal link audit — ensure every blog post links to a service page
- [ ] Monitor GSC for impressions on target keywords (act on anything showing >100 impressions with CTR <2%)

### Month 4
- [ ] City pages: `/locations/san-francisco`, `/locations/nashville`, `/locations/denver`
- [ ] Blog: "How to Design a Poster for Wheat Pasting" + "Wheat Pasting Laws by City"
- [ ] Create OG images for all service and case study pages (1200×630px)
- [ ] Outreach: identify 5 marketing blogs that accept guest posts → pitch "What brands need to know before running a wheat paste campaign"

### Month 5
- [ ] City pages: `/locations/phoenix`, `/locations/seattle`, `/locations/portland`
- [ ] Industry vertical pages: `/industries/music-artists`, `/industries/fashion-brands`
- [ ] Start building "2026 State of Street Marketing" survey/report
- [ ] Reddit strategy: Begin posting genuinely helpful answers in r/marketing, r/guerrillamarketing (no spam — only add value)

### Month 6
- [ ] City pages: `/locations/las-vegas`, `/locations/new-orleans`, `/locations/boston`
- [ ] Publish "2026 State of Street Marketing" report → pitch to AdWeek, Marketing Week, Campaign
- [ ] Blog: "Guerrilla Marketing for Fashion Brands" + "Street Marketing for Sports Events"
- [ ] Check GSC: review which city pages are getting impressions → prioritize those for optimization
- [ ] Review and update Month 1–2 blog posts with new data, internal links to newer content

---

## Phase 4 — Authority (Months 7–12)

**Goal:** Domain authority 30+, ranking #1–3 for primary head terms, consistent organic lead flow.

### Month 7–8
- [ ] City pages: `/locations/philadelphia`, `/locations/detroit`, `/locations/minneapolis`
- [ ] Industry pages: `/industries/sports-events`, `/industries/entertainment`
- [ ] Podcast outreach: pitch to 5 marketing/advertising podcasts for guest appearances
- [ ] Begin capturing client testimonials systematically — add to homepage and case studies

### Month 9–10
- [ ] Finalize `/locations/` hub — 20 cities live
- [ ] Add `/about/our-process` deep-dive page (500+ words on scouting, paste prep, overnight install, photo-doc system)
- [ ] Add team/crew photos to `/about` — faces = E-E-A-T
- [ ] Review and refresh all Tier 1 city pages — add new campaign photos from recent work

### Month 11–12
- [ ] Publish "2026 Year in Review" blog post (linkable, shareable)
- [ ] Conduct full content audit: which pages have impressions but low CTR? Update titles/descriptions.
- [ ] Build comparison content: "Phantom Pasting vs [Competitor]" pages (if named competitors exist)
- [ ] Consider `/blog/[city]-wheat-pasting-guide` posts for Tier 1 cities (city-specific long-form)
- [ ] Review analytics: identify top-converting pages → increase internal links flowing to them

---

## Competitive Monitoring

Check monthly:
1. **Google Search Console** → Performance → Which queries are you appearing for?
2. **Google "site:phantompasting.com"** → How many pages indexed?
3. **Search "wheat pasting company" incognito** → Where do you rank vs competitors?
4. **Ahrefs or Semrush free tier** → Track DA growth and new backlinks
5. **Google Alerts** for brand name → Catch unlinked mentions

---

## Quick Wins (Do in Week 1)

These take < 1 hour each and have outsized impact:

| Action | Impact |
|--------|--------|
| Add title tags to all existing pages | Critical |
| Add meta descriptions to all existing pages | High |
| Add `alt` text to all gallery images | High |
| Submit sitemap to GSC | Critical |
| Create GBP profile | High |
| Add FAQ section to homepage | Medium |
| Add client logos (FashionPass, FIFA) to homepage | High E-E-A-T |
| Add phone number to header and footer | Trust signal |

---

## Red Flags to Avoid

| ❌ Don't | ✅ Do Instead |
|---------|-------------|
| Create 50 city pages at once (thin content) | Build 5 quality pages, grow slowly |
| Duplicate city page content | Each city gets unique neighborhood/culture copy |
| Use keyword-stuffed titles ("Wheat Pasting Wheat Paste Wheat Poster Advertising") | Natural titles: "Wheat Pasting Los Angeles \| Phantom Pasting" |
| Buy links | Earn links through case studies and original research |
| Ignore Google Search Console | Check weekly for indexing issues and keyword opportunities |
| Launch blog then abandon it | Consistent 2×/month minimum |
