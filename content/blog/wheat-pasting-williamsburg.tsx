import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      Williamsburg is where we paste NYC first. Bedford Avenue foot traffic, an
      audience that came to Brooklyn to be seen, and a neighborhood under permanent
      construction that turns plywood barricades into the best poster real estate in
      the city. Here&apos;s where the walls are, what actually works on them, and how a
      Williamsburg wheat pasting run really goes.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        Written from the crew that installs it — a neighborhood-level look at wheat
        pasting in Williamsburg, Brooklyn. For the full five-borough view, start with our{" "}
        <BlogLink slug="wheat-pasting-new-york">NYC field guide</BlogLink>.
      </p>

      <h2>Williamsburg Is Where We Paste NYC First</h2>
      <p>
        When a brand tells us they want New York and they&apos;re not sure where to start,
        the answer is almost always the same block: Bedford Avenue between the L train stop
        and Metropolitan. Williamsburg concentrates the exact audience a wheat paste campaign
        is built for — young, creative, phone out, walking slow because they came here to look
        around. Manhattan moves too fast and heads-down; Williamsburg strolls.
      </p>
      <p>
        We&apos;ve pasted this neighborhood for years, and it behaves differently than
        anywhere else in the city. The foot traffic peaks on weekends and stays high on
        weeknights. And the walls keep changing, which — as I&apos;ll get to — is the best
        thing about it.
      </p>

      <figure style={{ margin: "2em auto", maxWidth: "760px" }}>
        <img
          src="/gallery/williamsburg-wheat-paste-construction-barricade-brooklyn.webp"
          alt="Wheat paste posters layered on a green construction barricade in Williamsburg, Brooklyn"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          A construction barricade doing what Williamsburg barricades do — carrying a full grid of posters.
        </figcaption>
      </figure>

      <h2>The Barricades Are the Whole Game</h2>
      <p>
        Williamsburg is under permanent construction. There is always a new building going up,
        which means there is always a fresh plywood barricade going up around it — and a
        barricade is a blank wall the developer builds for you. Kent Avenue and the blocks
        running toward the East River waterfront turn over constantly. We scout them weekly
        because a barricade that wasn&apos;t there last month is prime real estate this month.
      </p>
      <p>
        The catch is that construction moves fast in both directions. We lost a full barricade
        run near Wythe once when the site wrapped early and the fence came down two weeks ahead
        of schedule — ask us how we know to check permit timelines before we grid a whole
        barricade. Now we cross-reference the construction calendar so we&apos;re not pasting a
        wall that&apos;s about to disappear.
      </p>

      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        Williamsburg builds our walls for us. Every new construction site is a barricade, and
        every barricade is a poster wall nobody has claimed yet. You just have to get there
        before the next crew does.
      </PullQuote>

      <h2>Bedford to the Waterfront</h2>
      <p>
        We split Williamsburg into two working zones. Bedford Avenue and the North 6th / North
        7th cross-streets are the retail-and-nightlife core — walkable, dense, the walls that
        get photographed and reposted before they weather. The stretch toward Kent and the
        Domino Park waterfront is the industrial-chic zone: bigger walls, more murals, the
        construction barricades, and the backdrop that reads as Brooklyn in every phone shot.
        A grid down there works as content, not just media.
      </p>

      <figure style={{ margin: "2em auto", maxWidth: "760px" }}>
        <img
          src="/gallery/williamsburg-wheat-paste-poster-wall-corner-brooklyn.webp"
          alt="Wheat paste poster wall and mural on a Williamsburg street corner in Brooklyn"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          Corner wall near the waterfront zone — posters sitting next to a mural, which is exactly the context that makes paste read as culture, not an ad.
        </figcaption>
      </figure>

      <p>
        The neighborhood&apos;s own history does the selling. Williamsburg has been a poster
        wall since long before it was a brand destination — show flyers, gallery cards, band
        promos have layered on these walls for two decades. A brand that shows up on paste here
        isn&apos;t interrupting the scene; it&apos;s joining a wall the neighborhood already reads.
      </p>

      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        A poster on Bedford gets read at walking pace by exactly the person a Brooklyn brand is
        chasing. That&apos;s a better impression than any billboard on the BQE — the billboard is
        doing 50, the sidewalk is doing zero.
      </PullQuote>

      <h2>How a Williamsburg Run Goes</h2>
      <p>
        A typical Williamsburg campaign is a scout pass, then an overnight install between
        midnight and 5 a.m., then a daylight documentation pass the next morning — every wall
        GPS-logged and photographed so you see exactly what ran where. Weather is the variable:
        Brooklyn winters are hard on paste and summer humidity off the East River can soften a
        wall, so the recipe and the timing change with the season. Shaded brick on a side street
        holds for weeks; a sun-and-salt-air waterfront barricade is a shorter, louder play.
      </p>
      <p>
        If you&apos;re launching anything in New York and you want it to land with the creative,
        fashion, and music crowd first, Williamsburg is where it starts. We&apos;ll be back on
        Bedford next week — there&apos;s a new barricade up, and it isn&apos;t going to paste itself.
      </p>
    </>
  );
}
