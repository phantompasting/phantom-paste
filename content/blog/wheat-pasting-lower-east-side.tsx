import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      The Lower East Side is the most poster-literate neighborhood in America —
      walls that have carried show flyers, gallery cards, and brand campaigns in
      unbroken layers since the punk era. Ludlow, Orchard, Rivington, Stanton: a
      compact grid where nightlife foot traffic reads walls at point-blank range
      every single night. Here&apos;s where the walls are, what they cost, and why
      the LES is the first neighborhood we quote for Manhattan.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        Written from the crew that installs it — a neighborhood-level look at wild
        posting on the Lower East Side of Manhattan. For the full five-borough view,
        start with our <BlogLink slug="wheat-pasting-new-york">NYC field guide</BlogLink>.
      </p>

      <h2>The Most Poster-Literate Walls in America</h2>
      <p>
        Some neighborhoods tolerate posters. The Lower East Side archives them.
        Pull a corner of paper off a wall on Ludlow and you&apos;re looking at
        strata — last month&apos;s album drop over last year&apos;s gallery
        opening over a decade of show flyers, all the way down to brick. This
        neighborhood has been reading walls since CBGB was printing gig flyers,
        and it never stopped. When we tell brands the LES audience is
        poster-literate, that&apos;s not a metaphor. People here stop, read,
        photograph, and post walls as a reflex.
      </p>
      <p>
        The brands know it, too. Walk the neighborhood on any given week and the
        walls read like a media plan — we shot Burberry running a full grid on a
        Bowery lot fence at dusk, KIKO Milano owning a Stanton Street stretch,
        and indie album art layered between them. Luxury, beauty, music, and DTC
        all pasting the same ten blocks is not a coincidence. It&apos;s the
        strongest signal in the city that this is where paste works.
      </p>

      <figure style={{ margin: "2em auto", maxWidth: "760px" }}>
        <img
          src="/gallery/lower-east-side-wheat-paste-posters-stanton-essex-nyc.webp"
          alt="KIKO Milano and Schutz wheat paste posters running down a Stanton Street wall on the Lower East Side, Manhattan"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          Stanton near Essex — beauty campaigns and snipes sharing one wall, read at sidewalk range all night long.
        </figcaption>
      </figure>

      <h2>Ludlow to the Bowery</h2>
      <p>
        The working core is compact: Ludlow, Orchard, and Essex running
        north–south, Rivington and Stanton crossing them. That grid holds the bars,
        the venues, the galleries, and the late-night food — which means it holds
        the foot traffic from happy hour until 4 a.m., moving at reading pace.
        Delancey adds volume near the Essex Market and the bridge approach, and the
        Bowery edge is where the bigger-format walls live, the ones that carry a
        luxury campaign without cropping it.
      </p>
      <p>
        Two audiences share these blocks. Nights belong to the music and nightlife
        crowd that has defined the LES for fifty years. Days belong to the gallery
        circuit — the neighborhood quietly absorbed much of the downtown art scene,
        and openings put a second, art-buying audience on the same sidewalks. One
        wall works both shifts.
      </p>

      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        The LES is the only neighborhood where I&apos;ve watched someone photograph
        a wall we finished pasting at 4 a.m. — at 4:15. The feedback loop here
        isn&apos;t weeks. It&apos;s minutes.
      </PullQuote>

      <figure style={{ margin: "2em auto", maxWidth: "760px" }}>
        <img
          src="/gallery/lower-east-side-wheat-paste-layered-wall-ludlow-nyc.webp"
          alt="Layered wheat paste posters over graffiti on a Lower East Side wall near Ludlow Street, Manhattan"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          Poster archaeology near Ludlow — decades of layers, still working. New paper joins this wall; it doesn&apos;t interrupt it.
        </figcaption>
      </figure>

      <h2>How an LES Run Goes</h2>
      <p>
        Same Phantom operating system as every install: scout pass, overnight
        install between midnight and 5 a.m., daylight documentation pass with every
        wall GPS-logged and photographed. We work owner-authorized walls and
        coordinated barricades — the citywide legal reality is covered in our{" "}
        <BlogLink slug="is-wheat-pasting-legal">legality guide</BlogLink> — and the
        LES&apos;s wall culture means property owners here understand the medium
        better than anywhere in Manhattan. Walls under overhangs on the side
        streets hold eight to ten weeks; high-turnover corridors like Ludlow are a
        louder, faster play where being freshly pasted matters more than lasting.
      </p>
      <p>
        Where Brooklyn campaigns start in{" "}
        <BlogLink slug="wheat-pasting-williamsburg">Williamsburg</BlogLink>,
        Manhattan campaigns start here. LES plus Williamsburg is the most-booked
        configuration in our NYC book — one crew night covers both sides of the
        river, and the two neighborhoods&apos; audiences repost each other&apos;s
        walls. If your brand is launching in New York and it has anything to do
        with music, fashion, beauty, art, or nightlife, this is the neighborhood
        the campaign should touch first.
      </p>
    </>
  );
}
