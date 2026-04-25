/**
 * Blog post registry — single source of truth for every blog post's metadata,
 * consumed by:
 *   - `/app/blog/page.tsx` (hub page, CollectionPage + ItemList schema)
 *   - `/app/blog/[slug]/page.tsx` (dynamic post route, generateStaticParams)
 *   - `/app/sitemap.ts` (auto-registered; drafts filtered out of sitemap)
 *   - `/components/BlogLink.tsx` (smart cross-post links; drafts render as
 *     <strong> instead of a broken <Link>)
 *   - `/components/BlogPostLayout.tsx` related-posts rail (drafts skipped)
 *
 * Each post's long-form body component lives at
 *   `/content/blog/<slug>.tsx`
 * and is dynamically imported by the [slug] route at render time.
 *
 * ═════════════════════════════════════════════════════════════════════════════
 *                     BLOG-PUBLISH RUNBOOK  (2-step)
 * ═════════════════════════════════════════════════════════════════════════════
 * Goal: ship a new post without triggering Semrush "4xx errors",
 * "broken internal links", or "orphan page" warnings.
 *
 * STEP 1 — Draft the post
 *   a. Create `/content/blog/<slug>.tsx` exporting `tldr()` + default body
 *      component. Use <BlogLink slug="..."> instead of <Link href="/blog/...">
 *      for every cross-post reference. Draft slugs referenced from published
 *      prose auto-render as <strong> — no 4xx.
 *   b. Add a BlogPostMeta entry here with status: "draft". Post is invisible
 *      to sitemap, /blog hub, and related rails.
 *
 * STEP 2 — Publish the post
 *   a. Flip its status: "draft" → "published" in this file.
 *   b. Add one bullet to `/public/llms.txt` under "## Blog".
 *   c. Add one entry to `/app/sitemap-images.xml/route.ts` if the hero image
 *      isn't already in the sitemap.
 *   d. `npm run build` and confirm: new URL appears in /sitemap.xml, old
 *      BlogLink references in already-published posts now render as anchors.
 *
 * That's it. No other files need edits. The footer "Wheat Pasting Guide" link,
 * the /blog hub featured card, the sitemap generator, and the related-posts
 * rails all pull from PUBLISHED_POSTS automatically.
 *
 * MAINTENANCE RULE: Every cross-post reference in a blog body MUST use
 * <BlogLink slug="..."> — never a raw <Link href="/blog/...">. That rule is
 * what makes draft-before-publish safe.
 * ═════════════════════════════════════════════════════════════════════════════
 */
import { MATEO_VARGAS } from "./blogAuthor";

export type BlogSilo = "the-craft" | "strategy-roi" | "local-legal";

export const SILO_LABELS: Record<BlogSilo, { label: string; tagline: string }> = {
  "the-craft": { label: "The Craft", tagline: "How we do it" },
  "strategy-roi": { label: "Strategy & ROI", tagline: "Why brands choose it" },
  "local-legal": { label: "Local & Legal", tagline: "City by city, law by law" },
};

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPostMeta {
  /** URL slug — matches the file name in `/content/blog/` */
  slug: string;
  title: string;
  /** 50–60 characters, primary keyword in first 40 */
  metaTitle: string;
  /** 140–155 characters, primary keyword once */
  metaDescription: string;
  /** 1–2 sentence card excerpt shown on hub + related strips */
  excerpt: string;
  silo: BlogSilo;
  /** ISO date of first publish */
  publishedAt: string;
  /** ISO date of last meaningful content edit */
  updatedAt: string;
  /** Relative path under `/public`, used for og:image + hero */
  heroImage: string;
  /** Alt text for the hero image */
  heroAlt: string;
  /** Author — currently always Mateo Vargas, scaffolded for future contributors */
  authorSlug: string;
  /** Tags for future topic pages + emitted as `keywords` in Article JSON-LD. */
  tags: string[];
  /**
   * Word count of the prose body — emitted in Article schema's `wordCount`
   * field. Google reads this as a substantive-content signal; AI Overview
   * engines use it as one factor in passage-citation ranking. Computed by
   * `scripts/wordcount-blog.mjs` once at content-edit time, not at render.
   */
  wordCount?: number;
  /**
   * Optional schema kind. Defaults to `"article"`. Set to `"howto"` for
   * step-by-step guides ("how to make wheat paste", "wheat paste recipes")
   * so BlogPostLayout emits HowTo JSON-LD alongside Article — Google rewards
   * HowTo with rich-result eligibility on those queries.
   */
  schemaKind?: "article" | "howto";
  /** FAQs rendered at bottom of post + emitted as FAQPage JSON-LD */
  faqs: BlogFaq[];
  /** Related-post slugs rendered at end of post body */
  relatedSlugs: string[];
  /** Controls whether the post ships (sitemap + hub + [slug] route) */
  status: "published" | "draft";
  /**
   * Optional substring of `title` to render with the shiny-gold shimmer in the
   * H1. Matched case-insensitively against the title; first match wins. Leave
   * undefined to render the title plain.
   *
   * Kept optional so posts can opt in selectively — the effect is a brand
   * signature, not default chrome. Overuse flattens the impact.
   */
  titleHighlight?: string;
}

/**
 * Registry — ordered by publish date, newest first.
 * Drafts stay in this list with `status: "draft"` so they're visible in code
 * but invisible to the public route + sitemap.
 */
export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "wheat-pasting-phoenix",
    title: "Wheat Pasting in Phoenix: What Desert Heat Does to Paste",
    metaTitle: "Wheat Pasting in Phoenix: Desert Install Guide",
    metaDescription:
      "110°F paste behavior, popcorn cement walls, water sourcing, night install timing. Phoenix-specific wheat pasting install logic from a Field Operations Lead.",
    excerpt:
      "110°F summer heat, popcorn-cement walls, dry-air paste behavior, and water sourcing at 2 a.m. make Phoenix a market that rewards installers who've adapted their recipe and routing to the desert.",
    silo: "local-legal",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/fifa-world-cup-atlanta-wall-installation.webp",
    heroAlt: "Wheat paste wall installation in a Sun Belt commercial corridor",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["phoenix", "arizona", "desert", "popcorn-cement", "city-guide"],
    wordCount: 1112,
    faqs: [
      {
        q: "Does wheat paste work in Phoenix summer heat?",
        a: "Yes, but only with adjustments. Install windows shift to 9 p.m.–2 a.m., buckets stay lidded, paste recipe runs slightly wetter, and walls get a pre-install spray-bottle mist to cool the surface.",
      },
      {
        q: "What's different about Phoenix walls?",
        a: "Most Phoenix commercial buildings use popcorn cement — a textured stucco that eats thin paste. Recipes need 10–15% more flour, or switch to a heavy-tack commercial formula that fills the wall's high points.",
      },
      {
        q: "Is wheat pasting legal in Phoenix?",
        a: "Yes on authorized private walls. Phoenix Code §23-52 covers unlawful posting but is almost never enforced on clean commercial campaigns. Scottsdale public right-of-way is stricter than Phoenix proper.",
      },
      {
        q: "What Phoenix neighborhoods work for paste?",
        a: "Roosevelt Row is the highest-signal corridor, followed by Grand Avenue, the Melrose District on 7th Ave, and downtown Tempe for ASU reach. Scottsdale Old Town for luxury activations.",
      },
      {
        q: "When should you avoid Phoenix paste campaigns?",
        a: "July and August daytime installs fail — 105°F+ heat flash-sets paste. Monsoon season (July–September) can wash posters off walls within 48 hours of install if storms hit. October–April is the reliable window.",
      },
    ],
    relatedSlugs: ["wheat-paste-recipes", "how-to-make-wheat-paste", "wheat-pasting-los-angeles"],
    status: "draft",
  },
  {
    slug: "wheat-pasting-new-york",
    title: "Wheat Pasting in New York City: NYC Wall Culture Explained",
    metaTitle: "Wheat Pasting in New York: NYC Wall Culture",
    metaDescription:
      "Lower East Side, Williamsburg, SoHo, Chinatown — NYC wheat pasting wall map from a crew that works all five boroughs. Pricing, permits, timing.",
    excerpt:
      "New York is the second major US paste market — denser than LA, more regulated, and the only US city where scaffold wraps are a primary format. NYC's wall economy concentrates in four neighborhoods.",
    silo: "local-legal",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/fifa-world-cup-street-gallery-pedestrian-viewing.webp",
    heroAlt: "Wheat paste wall on an NYC street corridor with pedestrian foot traffic",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["new-york", "nyc", "manhattan", "brooklyn", "city-guide"],
    wordCount: 954,
    faqs: [
      {
        q: "Is wheat pasting legal in NYC?",
        a: "On authorized private-property walls, yes — with zero enforcement concern. Scaffold wraps require DOB permits and owner consent. NYC Administrative Code §10-117 covers public-property unlawful posting.",
      },
      {
        q: "Which NYC neighborhoods work best for wheat pasting?",
        a: "Lower East Side, SoHo (Lafayette + Mercer), Williamsburg (Bedford Avenue), and Chinatown/Dimes Square. Midtown is a scaffold-wrap market, not a standard paste play.",
      },
      {
        q: "How much does a NYC wheat pasting campaign cost?",
        a: "Single-neighborhood test: $4,200–$6,800 for 80–120 posters. Full Manhattan + Brooklyn activation with two crews: $14K–$22K. Scaffold wraps run $2K–$8K each on top.",
      },
      {
        q: "What's different about NYC installs?",
        a: "We split crews by borough — one on Manhattan, one on Brooklyn. Documentation windows are tight (7–9 a.m. Sunday for SoHo walls). Summer humidity shortens poster life to 3–4 weeks.",
      },
      {
        q: "Can you run scaffold wraps in NYC?",
        a: "Yes. Scaffold wraps are a premium Midtown format — $2K–$8K per wrap, DOB permit required, 3–4 week lead time. Different production path than paste: poster is printed directly on scaffold mesh.",
      },
    ],
    relatedSlugs: ["wheat-pasting-los-angeles", "is-wheat-pasting-legal", "wheat-pasting-cost"],
    status: "draft",
  },
  {
    slug: "wheat-pasting-los-angeles",
    title: "Wheat Pasting in Los Angeles: Neighborhoods, Walls, and Why LA Works",
    metaTitle: "Wheat Pasting in Los Angeles: LA Neighborhood Guide",
    metaDescription:
      "Melrose, Silver Lake, Fairfax, DTLA — where LA wheat pasting walls live, how we pick them, why LA outperforms most US markets for street media.",
    excerpt:
      "Los Angeles is the single most important wheat pasting market in the United States. Dense creative-class neighborhoods, industry HQ, and 300+ sunny days a year built LA into a paste capital before anywhere else caught on.",
    silo: "local-legal",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/dont-fall-off-wheat-paste-urban-wall-pink.webp",
    heroAlt: "Wheat paste wall on a Los Angeles street in a creative-class neighborhood",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["los-angeles", "la", "melrose", "fairfax", "city-guide"],
    wordCount: 977,
    faqs: [
      {
        q: "Which LA neighborhoods are best for wheat pasting?",
        a: "Melrose Avenue between Fairfax and La Brea is the highest-signal corridor in the US. Fairfax Avenue, Silver Lake, Echo Park, DTLA Arts District, and Abbot Kinney round out the primary LA paste map.",
      },
      {
        q: "How much does a LA wheat pasting campaign cost?",
        a: "Single-neighborhood test: $3,500–$5,500 for 80–120 posters. Four-neighborhood LA-only activation: $6,500–$9,500. LA flagship with paste + snipes: $11K–$16K. Scaffold + wall combos: $18K–$40K.",
      },
      {
        q: "Is wheat pasting legal in Los Angeles?",
        a: "Yes on authorized private-property walls. LAPD does not enforce unlawful posting on clean commercial campaigns. Historic preservation zones and government-adjacent blocks are the exceptions — scaffold wraps need DBS permits.",
      },
      {
        q: "Why does LA outperform other US markets for paste?",
        a: "Four reasons — pedestrianized corridors inside a driving city, music/fashion/film industry headquarters, paparazzi and influencer density, and weather that holds posters 6–10 weeks versus 3–5 elsewhere.",
      },
      {
        q: "What LA walls should a brand run first?",
        a: "A first-time LA test should run 80 posters on Melrose between Fairfax and Spaulding, 40 on Fairfax between Melrose and Rosewood, and 40 in Silver Lake on Sunset. $5,500 budget, highest-signal audience in the US.",
      },
    ],
    relatedSlugs: ["wheat-pasting-new-york", "wheat-pasting-campaign", "wheat-pasting-for-fashion-brands"],
    status: "draft",
  },
  {
    slug: "guerrilla-marketing-for-music",
    title: "Guerrilla Marketing for Music Festivals and Album Launches",
    metaTitle: "Guerrilla Marketing for Music: Album & Festival Plays",
    metaDescription:
      "From album drops to festival promo — how music brands use wheat paste, snipes, and stencils to build pre-launch heat. Real campaign economics for 2026.",
    excerpt:
      "Guerrilla marketing runs the music industry more than any other vertical. Album launches, tour announcements, festival lineups, and single drops all live or die on pre-release street heat.",
    silo: "strategy-roi",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/incrediwear-pole-wrap-guerrilla-advertising-night.webp",
    heroAlt: "Guerrilla marketing pole wrap for a music-industry campaign",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["music", "album-launch", "festivals", "guerrilla-marketing", "strategy"],
    wordCount: 1157,
    faqs: [
      {
        q: "Why do music brands use wheat pasting more than other verticals?",
        a: "Music fans are a subculture before they're an audience — they photograph album posters, drive across cities to see them, and amplify through social at rates no other vertical matches. Wheat paste rewards that obsession with a physical artifact.",
      },
      {
        q: "How much does a music wheat pasting campaign cost?",
        a: "Indie single drops start at $2,200–$4,000 for one city. Major-label album campaigns across 5–7 cities run $45K–$85K. Festival lineup campaigns across 8–15 cities run $65K–$200K+.",
      },
      {
        q: "Which cities matter most for music OOH?",
        a: "Six carry most music OOH spend: Los Angeles, New York, Atlanta, Nashville, Austin, and Miami. Major-label activations hit all six; indie campaigns usually pick 2–3.",
      },
      {
        q: "How does a typical album paste campaign sequence?",
        a: "Week -4 typography-only teaser, week -2 imagery reveal on the same walls, release week full-city activation, week +2 single-art rotation. Four waves across 6 weeks.",
      },
      {
        q: "Should music campaigns use snipes and stencils alongside paste walls?",
        a: "Yes — paste walls carry the hero image, snipes carry impression count, stencils add authenticity signal. Campaigns that skip snipes leave 40–60% of the format's value unused.",
      },
    ],
    relatedSlugs: ["wheat-pasting-for-fashion-brands", "snipe-posters-vs-wheat-paste-vs-floor-decals", "wheat-pasting-cost"],
    status: "draft",
  },
  {
    slug: "wheat-pasting-for-fashion-brands",
    title: "Wheat Pasting for Fashion Brands: Why Streetwear Lives on Walls",
    metaTitle: "Wheat Pasting for Fashion Brands: Why It Works",
    metaDescription:
      "Supreme, Fear of God, FashionPass — fashion lives on walls. How wheat pasting converts street attention into cultural weight for streetwear and luxury.",
    excerpt:
      "Fashion brands live on walls for a reason — the format converts attention into cultural weight faster than any other media buy. Supreme built its brand on paste walls. Here's the streetwear playbook.",
    silo: "strategy-roi",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/fashionpass-wheat-paste-street-art-wall-la.webp",
    heroAlt: "Fashion brand wheat paste campaign wall in Los Angeles",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["fashion", "streetwear", "supreme", "brand-strategy"],
    wordCount: 898,
    faqs: [
      {
        q: "Why do fashion brands use wheat pasting over digital ads?",
        a: "Fashion photography is already built for the format. A lookbook image at 24×36 on brick reads as an art print, not a promotion. Audiences photograph it, repost it, and the wall becomes social-feed content for weeks.",
      },
      {
        q: "What's the typical fashion wheat pasting playbook?",
        a: "Two waves — teaser wave with typography-only posters 7–10 days pre-drop, then reveal wave with full campaign imagery on the same walls on drop day. Content capture happens morning of drop.",
      },
      {
        q: "Which cities matter for fashion wheat pasting?",
        a: "Los Angeles (Melrose, Fairfax, Venice, DTLA), New York (SoHo, LES, Williamsburg, Chinatown), and Miami (Wynwood, Design District) are the anchor markets.",
      },
      {
        q: "What's a typical fashion wheat pasting budget?",
        a: "Indie capsule labels: $2,500–$4,500 for one city. Established streetwear: $10K–$18K for 2 cities with teaser + reveal. Global flagships: $45K–$90K across 5–7 cities. Luxury fashion-week tie-ins: $60K–$150K.",
      },
      {
        q: "What kills a fashion wheat paste campaign?",
        a: "Using the ecommerce hero image instead of a lookbook crop, running without a content capture plan, picking walls by price not neighborhood signal, and reusing lookbook typography without testing at 36-inch print size.",
      },
    ],
    relatedSlugs: ["guerrilla-marketing-for-music", "wheat-pasting-vs-billboards", "wheat-pasting-cost"],
    status: "draft",
  },
  {
    slug: "wheat-pasting-vs-billboards",
    title: "Wheat Pasting vs Billboards: ROI Breakdown for Marketers",
    metaTitle: "Wheat Pasting vs Billboards: Real ROI Breakdown",
    metaDescription:
      "Side-by-side: cost per impression, attention, permit friction, install speed. Which OOH format wins for your goal — wheat pasting or billboards.",
    excerpt:
      "Billboards deliver scale and measurability; wheat pasting delivers cultural credibility and dramatically cheaper CPMs in the neighborhoods that matter. Neither is universally better — here's the honest side-by-side.",
    silo: "strategy-roi",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/fifa-world-cup-poster-installation-closeup.webp",
    heroAlt: "Wheat paste poster installation close-up contrasted with traditional OOH media",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["billboards", "ooh", "comparison", "roi"],
    wordCount: 841,
    faqs: [
      {
        q: "Is wheat pasting cheaper than billboards?",
        a: "Per city, yes — $3,500–$7,500 for a full paste campaign versus $8,000–$40,000 for a comparable billboard flight. On CPM, wheat paste runs $0.10–$0.30 in-person versus $4–$15 for billboards.",
      },
      {
        q: "When do billboards beat wheat pasting?",
        a: "Mass-market products, car-commute audiences, measurement-heavy media planning, and markets with weak pedestrian density. Billboards scale to 100K+ daily impressions on a single placement; wheat paste doesn't.",
      },
      {
        q: "When does wheat pasting beat billboards?",
        a: "Streetwear, music, film, premium alcohol, and culture-driven DTC. Any brand whose audience is under 35 and concentrated in specific urban neighborhoods. Compressed timelines (7–10 days vs 4–8 weeks for OOH).",
      },
      {
        q: "Can a brand use both formats?",
        a: "Yes — most sophisticated programs do. Billboards for scale and awareness, wheat paste for cultural credibility and social moments. A typical quarterly buy: $120K national billboard + $20K wheat paste across 4 cities.",
      },
      {
        q: "Does wheat pasting deliver measurable impressions?",
        a: "Not in the Geopath DMP sense that billboards do. Wheat paste delivers photo-documented installs and social amplification data — harder to reconcile into media-mix models but stronger signal for social-era brands.",
      },
    ],
    relatedSlugs: ["wheat-pasting-cost", "snipe-posters-vs-wheat-paste-vs-floor-decals", "what-is-wheat-pasting"],
    status: "draft",
  },
  {
    slug: "wheat-pasting-cost",
    title: "How Much Does Wheat Pasting Cost in 2026?",
    metaTitle: "Wheat Pasting Cost 2026: Real Campaign Pricing",
    metaDescription:
      "Real wheat pasting pricing from 500+ campaigns. Per-poster cost, full-city rollout cost, variables that move the number. No guesswork, just field data.",
    excerpt:
      "Wheat pasting campaigns run $3,000–$8,000 per city for a standard 150–250 poster rollout, with per-poster costs settling at $12–$22 installed. Real pricing from 500+ campaigns, what moves the number, what doesn't.",
    silo: "strategy-roi",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/fashionpass-wheat-paste-campaign-poster-wall.webp",
    heroAlt: "Completed wheat paste campaign wall showing scale of a standard commercial install",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["pricing", "budget", "cost", "media-planning"],
    wordCount: 794,
    faqs: [
      {
        q: "How much does a wheat pasting campaign cost?",
        a: "A standard single-city campaign with 150–250 posters across 12–15 walls runs $3,500–$7,500 all-in. Per-poster cost lands at $12–$22 installed depending on market, print quality, and documentation tier.",
      },
      {
        q: "What drives wheat pasting cost the most?",
        a: "Five variables: city (LA and NYC are premium), poster count (economic floor is ~100), wall mix (premium walls cost real money), print quality (commercial vs pro-grade), and documentation tier (standard vs premium).",
      },
      {
        q: "Do multi-city campaigns get discounts?",
        a: "Yes — 2 cities unlock ~8% discount, 3 cities ~14%, 5+ cities ~22%. The savings come from print run economics and shared project management across the rollout.",
      },
      {
        q: "What should a wheat pasting quote include?",
        a: "Total poster count + size, number of walls + neighborhoods, number of unique creatives, print specs, install window + crew size, documentation scope, and permit/insurance coverage. Opaque lump-sum quotes signal cut corners.",
      },
      {
        q: "How does wheat pasting compare to digital OOH on cost?",
        a: "Wheat paste runs $0.10–$0.30 CPM in-person, roughly 25–80× cheaper than DOOH in the same market. Effective CPM drops further when you count organic social amplification.",
      },
    ],
    relatedSlugs: ["wheat-pasting-vs-billboards", "wheat-pasting-campaign", "what-is-wheat-pasting"],
    status: "draft",
  },
  {
    slug: "what-is-wheat-pasting",
    title: "What Is Wheat Pasting? A Brand's Guide",
    metaTitle: "What Is Wheat Pasting? A Brand's Guide",
    metaDescription:
      "Wheat pasting for brands — what it is, why it works, how it beats digital OOH on attention and cost. Field notes from an active install crew.",
    excerpt:
      "Wheat pasting is a 140-year-old street advertising format where large-format posters are adhered to urban walls with a flour-and-water paste. Here's what it is, why it works, and how it stacks up in 2026.",
    silo: "strategy-roi",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/fifa-world-cup-poster-wall-gallery-wide.webp",
    heroAlt: "Large-format wheat paste wall takeover on an urban brick building",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["definition", "guide", "brand-101", "overview"],
    wordCount: 2145,
    faqs: [
      {
        q: "What is wheat pasting?",
        a: "Wheat pasting is the practice of adhering paper posters to urban walls using a paste made from wheat flour and water. The technique has been in continuous use since the late 1800s, now commonly used for commercial brand campaigns.",
      },
      {
        q: "Is wheat pasting the same as wild posting?",
        a: "Wild posting is a US-trademarked term for commercial wheat pasting on authorized private walls. Wheat pasting is the broader technique; wild posting is one trade name for its commercial form. Flyposting is the British equivalent.",
      },
      {
        q: "How long does a wheat paste poster stay up?",
        a: "4–8 weeks under typical outdoor conditions. Shaded wood or smooth brick under an overhang can hold 12+ weeks. Direct sun, rain, and humidity all shorten poster lifespan.",
      },
      {
        q: "Why do brands use wheat pasting in 2026?",
        a: "Three reasons — audiences photograph and repost paste walls unprompted (social amplification digital can't match), the format reads as cultural rather than commercial, and CPM runs $0.10–$0.30 versus $8–$20 for digital OOH in the same market.",
      },
      {
        q: "What industries use wheat pasting most?",
        a: "Three dominant verticals: fashion and streetwear (Supreme, Fear of God, Kith), music and entertainment (album drops, tour promo, festivals), and culture-adjacent DTC brands (Liquid Death, Oatly, Tushy).",
      },
    ],
    relatedSlugs: ["flyposting-explained", "wheat-pasting-cost", "wheat-pasting-vs-billboards"],
    status: "published",
  },
  {
    slug: "flyposting-explained",
    title: "Flyposting Explained: What It Is, How It Works, What It Costs",
    metaTitle: "Flyposting Explained: What It Is and How It Works",
    metaDescription:
      "Flyposting defined — history, technique, and how it compares to wheat pasting and wild posting. Written from an active street-postering crew.",
    excerpt:
      "Flyposting is the British term for what Americans call wheat pasting or wild posting — the practice of adhering posters to urban walls with paste. The technique is identical; the word changed crossing the Atlantic.",
    silo: "the-craft",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/fifa-world-cup-poster-wall-angle-view.webp",
    heroAlt: "Flyposting wall on a dense urban street",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["flyposting", "definition", "uk", "terminology"],
    wordCount: 861,
    faqs: [
      {
        q: "What is flyposting?",
        a: "Flyposting is the British term for pasting posters onto urban surfaces — the same practice Americans call wheat pasting or wild posting. The technique is identical; the word changed crossing the Atlantic.",
      },
      {
        q: "Is flyposting legal?",
        a: "Authorized flyposting on private walls with owner permission is legal. Unauthorized flyposting on public property is treated as an illegal-posting offense in most jurisdictions — in the UK, councils pursue civil action under the Anti-social Behaviour Act 2003.",
      },
      {
        q: "What's the difference between flyposting and wild posting?",
        a: "Flyposting is the British term used across the UK, Ireland, Australia, and most of the Commonwealth. Wild posting is a US trademarked trade term for commercial flyposting on authorized private walls. Same technique, different geographies.",
      },
      {
        q: "How long has flyposting existed?",
        a: "Since the mid-1800s. The term emerged during the Victorian music-hall boom, when bill-stickers were hired to paste posters onto any available wall. By the 1890s, London regulated flyposting through designated hoardings — the direct ancestor of today's authorized wall-rights model.",
      },
      {
        q: "Why do brands still use flyposting in 2026?",
        a: "It delivers physical cultural weight digital surfaces can't replicate. Audiences photograph pasted posters on brick walls as neighborhood artifacts, not as ads. Streetwear, indie music, festivals, and DTC brands lean hardest into the format.",
      },
    ],
    relatedSlugs: ["what-is-wheat-pasting", "how-to-make-wheat-paste", "street-postering-tools"],
    status: "draft",
  },
  {
    slug: "street-postering-tools",
    title: "Street Postering Tools: The Install Kit We Actually Carry",
    metaTitle: "Street Postering Tools: The Real Install Kit",
    metaDescription:
      "Broom type, bucket count, paste prep, locked lids. Exactly what a 12-location overnight street postering campaign requires. No filler — field-tested only.",
    excerpt:
      "The install kit for a real street postering campaign — broom type, bucket count, paste prep, locked lids, documentation rig. Everything a 2-person crew carries for a 12-location overnight run.",
    silo: "the-craft",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/dont-fall-off-wheat-paste-building-bike-rack.webp",
    heroAlt: "Street postering crew install on a commercial wall",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["tools", "install-kit", "equipment", "how-to"],
    wordCount: 843,
    faqs: [
      {
        q: "What's the single most important tool in a wheat paste kit?",
        a: "The soft-brush car-wash broom. Stiff-bristle janitorial brooms tear posters on first application. The car-wash broom holds paste in its bristles, spreads smoothly, and doesn't mark the poster surface.",
      },
      {
        q: "Why do wheat paste buckets need locking lids?",
        a: "One pothole can tip an open 10-gallon paste bucket into the truck bed, ruining 4 hours of rework and $400+ in print. Locked lids are non-negotiable after the first spill — every experienced crew learns this the hard way.",
      },
      {
        q: "How much paste does a 12-location campaign need?",
        a: "A 2-person, 12-wall, ~200-poster overnight campaign runs through 3 buckets of water, 1 full bag of commercial paste powder, and 1 pre-mixed bucket prepared at the warehouse for the first stop.",
      },
      {
        q: "What's the documentation rig for a campaign?",
        a: "Phone with shotgun mic for walk-through video, and a second camera or second phone shooting wall photos at daylight the morning after install. GPS tagging on every shot so location pins match the client deliverable.",
      },
      {
        q: "Do you need a permit or specialized truck?",
        a: "No permit for private-property wall installs in most US cities. A pickup or cargo van is standard — any vehicle that accepts 3 locked-lid buckets in the bed works.",
      },
    ],
    relatedSlugs: ["how-to-make-wheat-paste", "wheat-pasting-campaign", "wheat-paste-recipes"],
    status: "draft",
  },
  {
    slug: "snipe-posters-vs-wheat-paste-vs-floor-decals",
    title: "Snipe Posters vs Wheat Paste vs Floor Decals: Which Format Wins",
    metaTitle: "Snipes vs Wheat Paste vs Floor Decals: Field Guide",
    metaDescription:
      "Three street formats, three use cases. When to snipe, when to paste, when to drop floor decals. Installer-grade comparison from 500+ campaigns.",
    excerpt:
      "Wheat paste, snipes, and floor decals aren't interchangeable. Each wins a different use case: walls for cultural weight, snipes for frequency, floor decals for attention at dwell points. Here's the installer-grade comparison.",
    silo: "the-craft",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/street-pole-sticker-campaign-urban-advertising.webp",
    heroAlt: "Snipe poster campaign on urban street poles",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["snipes", "floor-decals", "formats", "comparison"],
    wordCount: 831,
    faqs: [
      {
        q: "What's the difference between wheat paste and snipe posters?",
        a: "Wheat paste is large-format (24×36+) posters on walls using flour-and-water paste. Snipes are smaller-format posters (11×17 typically) stapled or pasted to poles, signal boxes, and scaffolding. Wheat paste delivers cultural weight; snipes deliver frequency.",
      },
      {
        q: "When should a campaign use floor decals?",
        a: "At dwell points — crosswalks, transit stops, bar entrances, retail storefront thresholds. Pedestrians look at the floor while waiting. Floor decals capture attention where walls and snipes can't reach.",
      },
      {
        q: "Can you combine all three formats in one campaign?",
        a: "Yes, and most sophisticated campaigns do. Wheat paste on walls + snipes on nearby poles + floor decals at crosswalks delivers a 360° coverage pattern that any single format misses.",
      },
      {
        q: "Which format has the longest lifespan?",
        a: "Floor decals on smooth indoor concrete can hold 3–4 months. Wheat paste walls hold 4–8 weeks outdoors. Snipes vary — stapled snipes hold 2–4 weeks before city crews remove; pasted snipes hold 3–6 weeks.",
      },
      {
        q: "Which format is cheapest per impression?",
        a: "Snipes, on raw CPM — $0.05–$0.15 per in-person impression at scale. Wheat paste runs $0.10–$0.30. Floor decals run higher ($0.40–$0.80) but deliver longer dwell time per impression.",
      },
    ],
    relatedSlugs: ["street-postering-tools", "wheat-pasting-vs-billboards", "guerrilla-marketing-for-music"],
    status: "draft",
  },
  {
    slug: "wheat-paste-recipes",
    title: "Wheat Paste Recipes: Why One Formula Doesn't Work on Every Wall",
    metaTitle: "Wheat Paste Recipes: Wall-Type Specific Formulas",
    metaDescription:
      "Different walls need different wheat paste recipes. Brick, popcorn cement, stucco — a Field Operations Lead breaks down the formula per surface.",
    excerpt:
      "One wheat paste recipe doesn't work on every wall. Brick takes the base recipe; popcorn cement needs thicker paste; stucco needs a pre-wet. The wall-type-specific breakdown from 500+ campaigns.",
    silo: "the-craft",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/dont-fall-off-wheat-paste-wall-closeup.webp",
    heroAlt: "Close-up of wheat paste bonding to a textured wall surface",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["recipe", "wall-types", "technique", "how-to"],
    wordCount: 846,
    schemaKind: "howto",
    faqs: [
      {
        q: "Does wheat paste work on every wall type?",
        a: "No. The base 1:4 flour-to-water recipe works on brick and smooth concrete. Popcorn cement needs thicker paste (10–15% more flour). Stucco needs a pre-wet. Painted metal and glass don't hold wheat paste long-term — use decals instead.",
      },
      {
        q: "What wheat paste recipe works for Phoenix popcorn cement?",
        a: "Add 2–3 extra tablespoons of flour per cup of water, or switch to a heavy-tack commercial paste formula. The thicker paste fills the valleys between the wall's high points so the poster bonds flush rather than bridging over the texture.",
      },
      {
        q: "Can you use wheat paste in cold weather?",
        a: "Yes with adjustments. Paste sets slower below 45°F. Installers use warmer mixing water (not hot — hot water wrinkles posters), shorter open-paste intervals, and sometimes add a small amount of methylcellulose for cold-weather tack.",
      },
      {
        q: "What happens if the paste is too thin?",
        a: "Posters slide off before the paste sets. You'll find them 10 feet below the install point the next morning. The fix is always to add flour, not to reapply thin paste multiple times.",
      },
      {
        q: "How long does homemade wheat paste keep?",
        a: "3–4 days sealed in a cool place. A few hours once a bucket is opened in summer heat. Paste that smells sour or develops grey film should be scrapped.",
      },
    ],
    relatedSlugs: ["how-to-make-wheat-paste", "wheat-pasting-phoenix", "street-postering-tools"],
    status: "draft",
  },
  {
    slug: "how-to-make-wheat-paste",
    title: "How to Make Wheat Paste: Field Installer Guide",
    metaTitle: "How to Make Wheat Paste: Installer's Recipe Guide",
    metaDescription:
      "Real wheat paste recipe from 10+ years on active crews. Flour-to-water ratios, wall-type adjustments, storage. No fluff, just field notes.",
    excerpt:
      "The base recipe is 1 part flour to 4 parts water — but what changes per campaign is everything else. Wall surface, temperature, water source, application tool. The installer's guide to paste that actually holds.",
    silo: "the-craft",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/fashionpass-wheat-paste-street-postering-wall-los-angeles.webp",
    heroAlt: "Wheat paste poster installation on an urban wall",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["wheat-paste", "how-to", "recipe", "installation"],
    wordCount: 797,
    schemaKind: "howto",
    faqs: [
      {
        q: "Can I make wheat paste with just flour and water?",
        a: "Yes. The base recipe is 1 part flour to 4 parts water, cooked to pancake-batter consistency. Sugar and PVA glue are optional add-ons for tack and weather resistance.",
      },
      {
        q: "How long does wheat paste last on a wall?",
        a: "4–8 weeks outdoors depending on wall surface, weather, and sun exposure. Shaded wood or smooth brick under an overhang can hold 12+ weeks.",
      },
      {
        q: "Is wheat paste waterproof?",
        a: "Not by default. A small amount of PVA wood glue (about 1 tablespoon per cup of paste) adds water resistance. Our commercial formulations include built-in weatherproofing.",
      },
      {
        q: "Can wheat paste be removed cleanly?",
        a: "Yes. Warm water and a scraper pull it off most surfaces without damaging paint or brick. That's part of why cities tolerate wheat paste in ways they don't tolerate spray paint.",
      },
      {
        q: "How much paste do I need for a 24×36 poster?",
        a: "Roughly 2–3 fluid ounces. A gallon of prepared paste covers 40–60 posters at that size.",
      },
    ],
    relatedSlugs: ["is-wheat-pasting-legal", "wheat-pasting-campaign"],
    status: "draft",
  },
  {
    slug: "is-wheat-pasting-legal",
    title: "Is Wheat Pasting Legal? What Installers Actually Experience",
    metaTitle: "Is Wheat Pasting Legal? What Really Happens",
    metaDescription:
      "Laws vary by city. Here's what actually happens on LA and NYC streets, from a crew with 500+ clean campaigns. Written by a Field Operations Lead.",
    excerpt:
      "Wheat pasting sits in a legal gray zone in most US cities. Here's what actually happens on the street — from 500+ campaigns across LA, NYC, Miami, Chicago, Atlanta, Phoenix, and Denver. Not what city code says in theory.",
    silo: "local-legal",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/fifa-world-cup-poster-wall-street-perspective.webp",
    heroAlt: "Wheat paste poster wall in a dense urban street corridor",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["legal", "compliance", "permits", "city-laws"],
    wordCount: 797,
    faqs: [
      {
        q: "Is wheat pasting considered graffiti?",
        a: "Legally, no. Graffiti statutes cover permanent or semi-permanent marking. Wheat paste washes off with warm water. Most municipal codes classify it separately as 'unlawful posting,' a lesser offense.",
      },
      {
        q: "Can you go to jail for wheat pasting?",
        a: "Extremely unlikely for a single campaign. Repeat offenders in strict jurisdictions (parts of NYC) can face misdemeanor charges. On authorized private walls with property owner consent, there's no criminal liability.",
      },
      {
        q: "Do you need a permit for wheat pasting?",
        a: "On private walls with owner permission: usually no. On scaffolding wraps, historic districts, or public property: yes — reputable agencies handle the paperwork.",
      },
      {
        q: "Who is liable if a campaign violates city code — the brand or the installer?",
        a: "The installer, in practice. The brand hires the agency; the agency is responsible for compliance. Reputable agencies carry insurance and absorb that risk.",
      },
      {
        q: "How do cities respond to wheat paste differently than graffiti?",
        a: "Faster cleanup, lower priority enforcement, lighter penalties. Paste is removable; spray paint isn't. Cities respond proportionally.",
      },
    ],
    relatedSlugs: ["wheat-pasting-campaign", "how-to-make-wheat-paste"],
    status: "draft",
  },
  {
    slug: "wheat-pasting-campaign",
    title: "How a Wheat Pasting Campaign Actually Works: 12 Locations, One Night",
    metaTitle: "How Wheat Pasting Campaigns Work: Night-of Breakdown",
    metaDescription:
      "Behind a real 12-location wheat pasting campaign install. Prep, route, tools, timing, documentation. Nothing left to imagination.",
    excerpt:
      "A typical client campaign: 12–15 locations, 6–16 posters per wall, 4–8 designs, finished overnight. The math behind it — prep, route, paste, document — is what separates a campaign that holds 6 weeks from one that peels in 3 days.",
    silo: "local-legal",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    heroImage: "/gallery/dont-fall-off-wheat-paste-street-view-la.webp",
    heroAlt: "Overnight wheat paste installation crew at work on an urban wall",
    authorSlug: MATEO_VARGAS.slug,
    tags: ["campaign", "installation", "logistics", "tools"],
    wordCount: 798,
    faqs: [
      {
        q: "How long does a wheat pasting campaign take to install?",
        a: "A 12-location, ~200-poster campaign in one city takes 6–8 hours of active install time overnight, typically 10 p.m. to 4 a.m., with a 2–3 person crew per vehicle.",
      },
      {
        q: "Can one installer handle a full campaign?",
        a: "Possible on a small campaign (3–4 walls, under 50 posters). Most client campaigns scale beyond what a single installer can complete in one night without rushing — two-person crews are the minimum.",
      },
      {
        q: "How do you pick wall locations?",
        a: "Foot and vehicle traffic, neighborhood fit for the brand (fashion on Melrose, streetwear on Fairfax), wall surface quality, and owner consent. We maintain databases of walls we've worked before in each major city.",
      },
      {
        q: "What's the most common mistake in DIY wheat paste campaigns?",
        a: "Using the wrong broom. Stiff bristles tear posters. The soft-brush car-wash broom is the specific tool; everything else causes damage or slows the install.",
      },
      {
        q: "How long will the posters stay up?",
        a: "4–8 weeks under typical conditions. Direct sun and heavy rain shorten life; shaded wood or brick walls hold longer. We can refresh weekly for long-run campaigns.",
      },
    ],
    relatedSlugs: ["how-to-make-wheat-paste", "is-wheat-pasting-legal"],
    status: "draft",
  },
];

/** Filtered view — posts that ship publicly (sitemap, hub, [slug] route). */
export const PUBLISHED_POSTS: BlogPostMeta[] = BLOG_POSTS.filter(
  (p) => p.status === "published"
);

/** Lookup by slug. Returns undefined for drafts + unknown slugs. */
export function getPublishedPost(slug: string): BlogPostMeta | undefined {
  return PUBLISHED_POSTS.find((p) => p.slug === slug);
}

/** Posts grouped by silo — used by the hub page. */
export function postsBySilo(silo: BlogSilo): BlogPostMeta[] {
  return PUBLISHED_POSTS.filter((p) => p.silo === silo);
}
