# Phantom Pasting Blog — Voice Spec

> Mateo Vargas · Field Operations Lead · 10+ years on active install crews
> across LA, NYC, Miami, Chicago, Atlanta, Phoenix, Denver, and beyond.

This is the canonical voice spec for every post on `/blog`. Use it before
drafting, during editing, and as the final check before flipping a post's
`status: "draft"` → `"published"` in `lib/blogRegistry.ts`.

The spec exists because Mateo's voice was getting trapped inside `<PullQuote>`
boxes — the quotes sounded like a Field Ops Lead, the body prose sounded like
a magazine editorial. Every post should sound like Mateo wrote it, not like
Mateo was interviewed and someone else summarized.

---

## Who Mateo Is (the persona)

- Field Operations Lead. 10+ years on active install crews.
- He's been on the wall, not behind a desk. The byline is a working installer
  who happens to write.
- Bilingual (English/Spanish). U.S.-based. Works nights.
- Talks like someone who's pasted in 50+ cities and has stories from each.
- Honest about failures. Doesn't oversell. Doesn't undersell.
- Dry humor, not jokes. Deadpan, not setup-punchline.

---

## The Voice — Five Rules

### 1. First-person voice runs through the body, not just the PullQuote

The PullQuote is for the punchline anecdote. The body should also use "we"
and "I" — every 3-4 paragraphs minimum. Real installer writing constantly
references the work being done.

**❌ Editorial third-person (current default):**
> "LA has four structural advantages no other market matches. Pedestrianized
> corridors inside a driving city create dense attention zones."

**✅ Mateo voice:**
> "We work LA harder than any other market because four things line up here
> that don't line up anywhere else. Walkable corridors inside a driving city
> means our walls catch concentrated attention — Melrose between Fairfax and
> La Brea is 0.7 miles where everyone's on foot, and that's where we pile
> the heaviest grids."

### 2. Specifics over generalities — always

Every claim should anchor to a real wall, a real campaign, a real night, a
real cost, or a real number. Never "many brands" — name two. Never "in some
cities" — name them.

**❌ Generic:**
> "Many fashion brands have used wheat paste to launch streetwear drops."

**✅ Specific:**
> "Supreme built its brand on Fairfax. Aimé Leon Dore ran a Mott Street
> takeover in 2023 that we scouted. Fear of God did Melrose for the SS24
> collection — 60 walls, two install nights."

### 3. Admit small failures casually

The reader trusts a writer who's been wrong before. Drop "ask us how we
know" or "we lost a wall on this once" or "the time a brand insisted on X
and we charged extra because we knew" naturally into the prose. These
moments are EEAT signals — they prove first-hand experience in a way no
amount of expertise claims can.

**Examples that work in the existing posts:**
- "An open bucket tips into the truck bed at the first pothole — ask us how we know."
- "I've been stopped by police maybe 20 times in 10 years of installs. Every single time, the conversation ended with 'okay, have a good night.'"
- "You don't think about water until you're in a parking lot at 2 a.m. with a bag of paste and no way to mix it."

### 4. Humor is dry, not loud

The personality budget is small but high-impact. Don't try to be funny.
Be matter-of-fact about absurd situations. Drop a "lol" once a post.
Mock the typical brand-side mistake without being mean.

**✅ Working examples:**
- "People look at the floor anyway, lol. We might as well put something there."
- "Now it's a standing joke on the crew — we post to fly walls."
- "30-second conversation buys you 5 gallons of clean water."

**❌ Wrong tone (don't write):**
- "Boy do I have a story for you!" (too performative)
- "Get this..." (too setup-y)
- Anything resembling a stand-up bit

### 5. Vary sentence rhythm

Mateo's PullQuotes alternate short punchy declaratives with longer specific
sentences. The body should match. Watch for paragraphs where every sentence
is the same length and shape — that's where the AI tells start showing.

**✅ Good rhythm:**
> "We don't paste walls without authorization. Period. That's the whole
> compliance model."

> "The recipe has to match the wall. A smooth brick wall in Brooklyn
> absorbs paste differently than a textured stucco wall in Phoenix.
> A shaded plywood construction barrier holds paste for 10 weeks; a
> sun-baked cinder block wall peels in 8 days."

---

## Words to Avoid (AI/Corporate Slop List)

These phrases auto-flag a post as AI-generated or corporate. Cut them on
sight. If the meaning is real, restate it in installer language.

| Banned | Why | Replacement |
|---|---|---|
| "leverage" | Consultant tell | "use" |
| "unlock potential" | AI tell | (just describe what happens) |
| "elevate your brand" | LinkedIn cliche | (cut entirely) |
| "navigate the landscape" | Filler | "work in [specific market]" |
| "best-in-class" | Empty superlative | name the actual benchmark |
| "robust solution" | Tech-bro tell | (rewrite — be specific) |
| "seamless" | AI tell | "doesn't break", "no handoff drops" |
| "holistic" | Wellness-MBA cliche | "across [the actual scope]" |
| "paradigm" | Academic filler | "approach" or just delete |
| "transformative" | LinkedIn | name what changed |
| "in today's world" | Padding | (cut) |
| "when it comes to" | Padding | "for" |
| "it's worth noting" | Filler | (just say the thing) |
| "delve into" | AI signature | "look at" or "go through" |
| "moreover" / "furthermore" | Stiff transition | "and" or "also" |
| "structural advantage" | MBA-speak | "what works here" / "why it works" |
| "cutting-edge" | Tech-marketing | (almost never accurate) |
| "synergies" | Don't | Don't |

---

## Mandatory Voice Elements — Every Post

Every post (≥800 words) must include:

- [ ] **3 PullQuotes** attributed to Mateo Vargas (existing standard, keep it)
- [ ] **At least 2 first-person paragraphs in the BODY** (not in PullQuotes)
- [ ] **At least 1 specific failure / "ask us how we know" moment** outside PullQuotes
- [ ] **At least 3 specific anchors** — real city + neighborhood + wall, real
      brand client name, real cost, real install timing
- [ ] **At least 1 dry humor moment** — could be a single "lol", a dry aside,
      or a deadpan understatement
- [ ] **Zero phrases from the AI/Corporate Slop list above**
- [ ] **Sentence-rhythm variation** — no paragraph where every sentence is the
      same length

---

## Structural Patterns to Avoid

Repeating the SAME post-skeleton across multiple posts creates a "template
feel" that AI detection now flags. Vary the structure.

**The current overused skeleton** (do not repeat 5+ times):
```
Why X Works
  → 4 numbered reasons
Side-by-side Table
When X Wins
  → 3 sub-headers
When X Loses
  → 3 sub-headers
FAQ
```

**Alternative structures to mix in:**

- **Diary structure** — "Last Tuesday in Phoenix at 11 p.m. ..." chronological install story
- **Counter-argument first** — open with what brands get wrong, then the right way
- **Scene → analysis → scene → analysis** — alternate concrete moments and broader takeaways
- **One question, three answers** — a specific real client question, three different ways to answer it depending on context
- **Inverse listicle** — "The five most common mistakes I see"; lead with the painful ones

---

## Schema + Linking — Don't Break What Already Works

Voice rewrites must preserve:

- All `<BlogLink slug="...">` cross-references (deleting them breaks the
  internal-link graph and the dead-link auto-bolding logic)
- The `tldr()` function and its first-paragraph summary (used in schema)
- All `<PullQuote attribution="Mateo Vargas, Field Operations Lead">` tags
  (Person schema reads them)
- All H2 / H3 heading structure (HowTo + FAQPage schema relies on it)
- All FAQ pairs in `lib/blogRegistry.ts` for that post

Voice rewrites should ADD first-person body paragraphs and SWAP
editorial-third-person sentences for installer-voice equivalents. Don't
restructure — re-tone.

---

## Pre-Publish Checklist

Before flipping `status: "draft"` → `"published"` in `lib/blogRegistry.ts`,
the editor (or future Claude) runs through:

1. [ ] Read the post end-to-end OUT LOUD. Does it sound like Mateo?
2. [ ] Run the AI/Corporate Slop scan: `grep -ciE "(leverage|seamless|holistic|paradigm|in today|when it comes to|delve|moreover|furthermore)" content/blog/<slug>.tsx` → must be 0
3. [ ] Count first-person occurrences in the BODY (excluding PullQuotes):
       `grep -E "\\b(I|we|my|our)\\b" | grep -v "PullQuote"` → at least 6 in a 1000-word post
4. [ ] Check that all `<BlogLink>` slugs exist in `BLOG_POSTS` (so they
       render as either real links or graceful `<strong>` fallback, never 404)
5. [ ] Run `npm run build` and confirm post URL appears in `/sitemap.xml`
6. [ ] Spot-check: pick any random paragraph and ask "would Mateo say this on
       a job site at 2 a.m. or does this sound like a magazine editor?"

---

## Reference: PullQuotes That Are Doing It Right

Use these as the calibration set. New PullQuotes should match this energy:

> "You don't think about water until you're in a parking lot at 2 a.m. with
> a bag of paste and no way to mix it." — `how-to-make-wheat-paste`

> "I've been stopped by police maybe 20 times in 10 years of installs. Every
> single time, the conversation ended with 'okay, have a good night.'"
> — `is-wheat-pasting-legal`

> "People look at the floor anyway, lol. We might as well put something
> there." — `snipe-posters-vs-wheat-paste-vs-floor-decals`

> "Now it's a standing joke on the crew — we post to fly walls."
> — `flyposting-explained`

> "The best album paste campaign I've ever worked ran for a major hip-hop
> artist whose team wouldn't even tell us who the artist was until the day
> before install. We got the files, printed 300 posters of a black-and-white
> profile shot with just a date on it, and pasted them across five LA
> neighborhoods in one night..." — `guerrilla-marketing-for-music`

The bar is: a working installer would read these and recognize the work.

---

*This spec is canon. Update it (don't replace it) when new patterns emerge.*
