import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      We pasted FIFA World Cup 26 posters onto a Pioneer Square barricade in
      March, in the rain, a few blocks from the stadium where the matches will
      actually be played. Nobody canceled anything, and the wall looked perfect
      the next morning. That install is the whole argument for wheat pasting in
      Seattle: the rain is a technique problem, not a reason to skip the
      best-value walls on the West Coast.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        Written from the crew that installs it — a Seattle field report built
        around a real World Cup campaign. For pricing and the full neighborhood
        map, the Seattle location page has the numbers; for how a campaign comes
        together end to end, start with{" "}
        <BlogLink slug="wheat-pasting-campaign">the anatomy of a campaign</BlogLink>.
      </p>

      <h2>A World Cup Wall, Three Blocks From the Matches</h2>
      <p>
        Seattle is one of the host cities for the 2026 FIFA World Cup, and the
        posters we installed in Pioneer Square this March were part of the
        host-city buildup — a series where every city in the tournament gets its
        own illustrated skyline. Our wall carried Seattle&apos;s neighbors in the
        series too: Dallas&apos;s red skyline with the ball sailing over it,
        Boston&apos;s lobster hauling a soccer ball out of the harbor. The
        barricade sat on 1st Avenue near Cherry Street — walking distance from
        the stadium district where the matches land this summer, on the exact
        route fans take from Pioneer Square bars to the gates.
      </p>
      <p>
        That placement is the point. Game-day foot traffic in Seattle compresses
        into a corridor — Occidental, 1st Ave South, the stadium approach — and a
        wall on that corridor gets read by tens of thousands of people moving at
        walking pace, full of anticipation, phones out. You cannot buy that
        context on a digital screen doing six-second rotations above the highway.
      </p>

      <figure style={{ margin: "2em auto", maxWidth: "620px" }}>
        <img
          src="/gallery/fifa-world-cup-poster-positioning-barricade-pioneer-square-seattle.webp"
          alt="Phantom Pasting installer in a WE ARE 26 Seattle hoodie positioning a FIFA World Cup poster on a prepped Pioneer Square barricade"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          Positioning before paste — the barricade is prepped with a base layer so the poster sits flat and square. The hoodie is the host-city merch: WE ARE 26, Seattle.
        </figcaption>
      </figure>

      <h2>Yes, It Was Raining. It Usually Is.</h2>
      <p>
        Halfway through the install the drizzle started, which in Seattle is
        less an event than a default setting. Here&apos;s the honest version of
        what rain means for wheat paste, because brands ask constantly: light
        rain is workable and a downpour is not. Seattle&apos;s rain is
        overwhelmingly the first kind — a fine, steady drizzle that a
        PVA-reinforced paste mix shrugs off. We run that mix on every
        October-through-May install here. The paste cures under the poster
        where the water doesn&apos;t reach, and by morning the wall is tight,
        flat, and dry-edged.
      </p>
      <p>
        What actually kills posters in the Pacific Northwest isn&apos;t the
        install-day weather — it&apos;s six weeks of saturation on an exposed
        wall. So wall selection does the real work: barricades under overhangs,
        south-facing walls that get the afternoon dry-out, covered arcades in
        Pioneer Square. Get those right and Seattle posters hold four to six
        weeks through the wet season, which is more than most campaigns need.
      </p>

      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        Brands hear &quot;Seattle&quot; and picture their posters dissolving.
        Meanwhile our crew is out there in the drizzle, in host-city hoodies,
        putting up World Cup paper that&apos;s still crisp a month later. The
        rain filters out amateurs. It doesn&apos;t filter out paste.
      </PullQuote>

      <figure style={{ margin: "2em auto", maxWidth: "620px" }}>
        <img
          src="/gallery/wheat-paste-install-rain-pioneer-square-seattle.webp"
          alt="Installer carrying FIFA World Cup posters through the rain during a Pioneer Square wheat paste install in Seattle"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          Mid-install, mid-drizzle. The posters ride in sleeves; the paste mix is already rated for this.
        </figcaption>
      </figure>

      <h2>Where Seattle Campaigns Land</h2>
      <p>
        Pioneer Square is the anchor for anything sports- or event-driven —
        game-day corridors, gallery-walk foot traffic, and the densest barricade
        turnover downtown. Capitol Hill&apos;s Pike-Pine corridor is the
        creative-class core, the closest thing the Pacific Northwest has to an
        LES: music posters have owned those walls for decades, and a brand on
        paste there reads as native. Ballard Avenue and Fremont carry the
        walkable-neighborhood audiences, and the U District puts fifty thousand
        students on a single avenue during the academic year.
      </p>
      <p>
        The under-appreciated fact about Seattle is how little competition there
        is for those walls. The same campaign that fights for attention in{" "}
        <BlogLink slug="wheat-pasting-new-york">New York</BlogLink> owns the
        conversation here — tech-money audience, festival-city summers, a World
        Cup about to put the city on every screen on earth, and wall rates well
        under the coastal-city average. If your brand has any reason to be in
        front of the Northwest this year, the window before the tournament is
        the moment. The walls are ready, and we already know they hold in the
        rain.
      </p>
    </>
  );
}
