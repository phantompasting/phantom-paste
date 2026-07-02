import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      The Bronx has been postering itself for fifty years — party flyers, club
      posters, show promos layered under every scaffold since before hip-hop had a
      name. Most brands never paste north of 96th Street, which is exactly why the
      ones that do own the wall. Here&apos;s where the foot traffic is, from The Hub
      to Fordham Road, and how a Bronx wheat pasting run really goes.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        Written from the crew that installs it — a borough-level look at wheat
        pasting in the Bronx. For the full five-borough view, start with our{" "}
        <BlogLink slug="wheat-pasting-new-york">NYC field guide</BlogLink>.
      </p>

      <h2>The Borough That Invented the Poster Wall</h2>
      <p>
        Before a single brand ever booked a wild posting campaign, the Bronx was
        already running them. Party flyers on lampposts and plywood announced the
        block parties that became hip-hop. Club posters have layered under the
        borough&apos;s scaffolding for five decades — look at any sidewalk shed near
        The Hub today and you&apos;ll see the same culture still working: show
        promos, night-club dates, album drops, pasted edge to edge. This is a
        borough that reads walls. It always has.
      </p>
      <p>
        That&apos;s the part most media plans miss. Brands paste Manhattan and
        Brooklyn and stop, as if the city ends at the Harlem River. Meanwhile 1.4
        million people — the youngest borough in New York by median age — walk past
        walls that almost no national brand has ever claimed. When one finally shows
        up on paste here, it doesn&apos;t fight for attention. It gets all of it.
      </p>

      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        In SoHo your poster is one of forty on the block. At The Hub it might be the
        only brand on the wall — sitting next to the club posters the neighborhood
        actually reads. That&apos;s not a compromise. That&apos;s the whole play.
      </PullQuote>

      <h2>The Hub to Fordham Road</h2>
      <p>
        We work the Bronx in three main zones. The Hub — 149th Street and Third
        Avenue — is the borough&apos;s Times Square: five streets colliding, the 2
        and 5 trains dumping foot traffic all day, and retail density that keeps
        sidewalks full into the evening. The scaffolding and sidewalk sheds around
        it are the most-read poster surfaces in the South Bronx.
      </p>
      <p>
        Fordham Road is the volume play — the borough&apos;s biggest shopping
        corridor, anchored by Fordham University on one end and one of the highest
        pedestrian counts in the city outside Manhattan. And 161st Street around
        Yankee Stadium is the surge play: eighty-plus home games a year, each one
        flooding River Avenue and the Grand Concourse with tens of thousands of
        people at walking pace. Time an install to a home stand and the wall works
        overtime.
      </p>

      <figure style={{ margin: "2em auto", maxWidth: "620px" }}>
        <img
          src="/gallery/university-heights-wheat-paste-barricade-posters-bronx.webp"
          alt="Event posters pasted on a green construction barricade off Jerome Avenue in University Heights, the Bronx"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          A barricade off Jerome Avenue in University Heights, one stop from Fordham Road — show posters working a wall the borough already reads.
        </figcaption>
      </figure>

      <p>
        Then there&apos;s Mott Haven, which is quietly doing what Williamsburg did
        twenty years ago — waterfront rezoning, new towers, galleries and coffee
        shops moving in below 149th. New construction means fresh plywood
        barricades, and if you read our{" "}
        <BlogLink slug="wheat-pasting-williamsburg">Williamsburg guide</BlogLink>,
        you know what we think of barricades: blank walls the developer builds for
        you. Mott Haven is where we&apos;d put a brand that wants to be early to
        something instead of late to everything.
      </p>

      <h2>How a Bronx Run Goes</h2>
      <p>
        Same operating system as every Phantom install: scout pass first, overnight
        install, daylight documentation the next morning with every wall GPS-logged
        and photographed. We work owner-authorized private walls and coordinated
        barricades — the legal reality is the same citywide, and our{" "}
        <BlogLink slug="is-wheat-pasting-legal">legality guide</BlogLink> covers it
        — but enforcement pressure up here is lower than Midtown, and wall rates run
        meaningfully below Manhattan and prime Brooklyn. Your budget simply buys
        more wall in the Bronx, in front of an audience that engages with posters as
        culture, not clutter.
      </p>
      <p>
        The creative matters, though. This borough has seen fifty years of paper —
        it knows the difference between a brand that showed up and a brand that
        understands where it is. Design like you&apos;re joining the wall, not
        renting it. If you&apos;re launching in New York and everyone else is
        fighting over the same ten blocks of SoHo, come north. The walls are ready,
        and they&apos;ve been ready since 1973.
      </p>
    </>
  );
}
