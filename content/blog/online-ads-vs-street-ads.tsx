import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      Roughly half of internet traffic isn&apos;t human, advertisers lose tens
      of billions a year to fake impressions, and a display ad counts as
      &quot;viewed&quot; if half its pixels touch the screen for one second. A
      pasted poster, by contrast, physically exists on a real wall in front of
      real people — it can&apos;t be blocked, botted, or scrolled past. Neither
      channel is a silver bullet: here&apos;s the honest pro-and-con of online
      ads versus real-world ads, from a crew that sells one of them.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        Up front: we sell street advertising, so read us with that in mind. But
        the case below is built on the digital ad industry&apos;s own numbers,
        and we&apos;ll give online ads credit where it&apos;s due — the honest
        answer, like our{" "}
        <BlogLink slug="wheat-pasting-vs-billboards">billboard comparison</BlogLink>,
        is that the channels do different jobs.
      </p>

      <h2>The Problem Nobody Puts in the Pitch Deck: Bots</h2>
      <p>
        A meaningful share of internet traffic — by most industry measurements,
        somewhere around half — is not human. Scrapers, click farms, and fraud
        bots don&apos;t just inflate analytics; they consume ad budgets.
        Industry estimates put global ad fraud losses in the tens of billions
        of dollars per year and climbing. When a brand buys a million
        impressions, some real fraction of that million was never a person, and
        no refund is coming, because the fraud is priced into the system.
      </p>
      <p>
        Even the human impressions are thinner than they sound. The standard
        that makes a display ad officially &quot;viewable&quot; is half the
        ad&apos;s pixels on screen for one second. Average display
        click-through rates sit around a tenth of a percent, roughly a third of
        internet users run ad blockers, and the rest have trained themselves
        not to look — the industry calls it banner blindness. None of this is
        controversial; it&apos;s the water digital marketers swim in.
      </p>

      <h2>What Online Ads Are Genuinely Good At</h2>
      <p>
        Here&apos;s the credit-where-due part. Online ads can target a
        specific person in a specific zip code who searched a specific phrase
        an hour ago — street media can&apos;t. They launch in hours, scale to
        any budget, A/B test themselves, and hand you a dashboard of clicks
        and conversions. For direct response — &quot;click this, buy now&quot;
        — digital is the right tool, and any honest street crew will tell you
        so. The problem isn&apos;t that online ads don&apos;t work. It&apos;s
        that a growing share of what you pay for was never seen by a human,
        and the humans who do see it have learned to look away.
      </p>

      <h2>What a Wall Does That a Banner Can&apos;t</h2>
      <p>
        A wheat-pasted poster is a physical object in a real neighborhood.
        Every impression is a person who walked past it — there is no bot
        traffic on a sidewalk. It can&apos;t be ad-blocked, muted, or closed.
        It doesn&apos;t disappear when the algorithm moves on; it stays up
        through <BlogLink slug="wheat-pasting-campaign">the whole flight</BlogLink>,
        working day and night shifts for one print cost. And because posters
        read as part of the street&apos;s culture rather than an interruption,
        people photograph them and repost them — the wall buys you digital
        reach it never charged for. We&apos;ve watched that second life drive{" "}
        <BlogLink slug="guerrilla-marketing-for-business">guerrilla campaigns</BlogLink>{" "}
        for brands that had already maxed out their paid social.
      </p>

      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        Nobody has ever ad-blocked a wall. The worst a poster gets is rained
        on, and even then it&apos;s still working — a weathered paste wall
        reads as more real, not less.
      </PullQuote>

      <h2>The Honest Cons of Street Advertising</h2>
      <p>
        Fair is fair. Street media measures indirectly — you track it with QR
        codes, promo codes, foot-traffic lift, and branded search spikes, not a
        click path. It&apos;s geographically bounded: a poster works its
        neighborhood, not the whole country. Production has lead time, because
        paper has to be printed and crews have to be scheduled. And lifespan is
        real weather and real streets — professional crews plan flights and{" "}
        <BlogLink slug="wheat-pasting-cost">price campaigns</BlogLink>{" "}
        around refresh cycles rather than pretending posters are permanent.
        If your goal is a same-week national retargeting funnel, street media
        is the wrong tool, the same way a banner ad is the wrong tool for
        owning a neighborhood.
      </p>

      <h2>How Smart Brands Actually Split It</h2>
      <p>
        The brands we install for — labels, streetwear, film, DTC — don&apos;t
        choose one channel. They use street media to build the real-world
        presence that makes people trust the brand, then let digital retarget
        the demand the walls created. The practical split: put paper up in the
        two or three neighborhoods where your audience physically lives, and
        spend digital dollars against the searches and social traffic the
        posters generate. Every impression on the wall side of that budget is
        guaranteed human.
      </p>
      <p>
        If you want to see what the physical half costs, our{" "}
        <a href="/pricing">pricing page</a> has campaign tiers, and our{" "}
        <a href="/services/wheat-pasting">wheat pasting service</a> covers
        formats and documentation. Running a launch in a specific market? Start
        with <a href="/locations/los-angeles">Los Angeles</a> or{" "}
        <a href="/locations/new-york">New York</a> — the two markets where the
        contrast with digital noise is loudest.
      </p>
    </>
  );
}
