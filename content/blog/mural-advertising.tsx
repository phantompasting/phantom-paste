import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      Mural advertising is the oldest format on the street making the loudest
      comeback in it: brand messaging as hand-painted wall art. It costs more
      per wall than paper and earns more per wall than anything else — months
      of dwell time, a photo backdrop the neighborhood adopts, and an install
      that is itself content. Here&apos;s the honest breakdown of what a painted
      wall does that paper can&apos;t, what it costs, and when the answer is
      actually both.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        Written from the crew that runs both paint and paper. Murals are our
        managed service — <a href="/services/art-murals">art murals for
        business</a>, with a vetted artist, one contract, one point of contact —
        led by our featured artist,{" "}
        <a href="/artists/steven-sued">Steven Sued</a>. This is how we help
        brands decide when a wall should be painted instead of pasted.
      </p>

      <h2>The Oldest Ad Format on the Street</h2>
      <p>
        Before vinyl printing existed, every billboard in America was painted by
        hand — sign painters on scaffolds, working letter by letter above the
        street. Vinyl nearly killed the trade in the eighties because it was
        cheaper and faster, which is exactly why its return is interesting:
        brands are now paying a premium to go back to paint. Not out of
        nostalgia. Because a hand-painted wall does things a printed surface
        cannot, and in a feed-saturated market those things got valuable again.
      </p>
      <p>
        The industry has a few names for it — mural advertising, wallscapes,
        hand-painted billboards. The craft underneath is the same: an artist, a
        wall, and paint that becomes part of the building instead of a layer on
        top of it.
      </p>

      <figure style={{ margin: "2em auto", maxWidth: "720px" }}>
        <img
          src="/artists/steven-sued/steven-sued-mural-amarena-bakery.webp"
          alt="Hand-painted interior brand mural by Steven Sued anchoring the dining room at Amarena Bakery"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          Steven Sued&apos;s interior mural for Amarena Bakery — a commissioned wall that turned a dining room into the most-photographed corner of the business.
        </figcaption>
      </figure>

      <h2>What Paint Does That Paper Can&apos;t</h2>
      <p>
        We built this company on wheat paste, so take this as an honest
        comparison, not a pitch against ourselves. Paper is reach: many walls,
        fast, across a city, priced for launches. Paint is depth. A mural works
        one location for months or years instead of weeks. It earns the longest
        dwell time of any street format — people stop, photograph it, and pose
        with it, which no printed poster reliably gets. And neighborhoods defend
        murals. Paper gets pasted over by the next crew; a painted wall gets
        adopted, tagged on maps, used as a meeting point.
      </p>
      <p>
        The other asymmetry is the install itself. A paste run happens overnight
        and the reveal is the point. A mural takes days in public view, and the
        painting is the point — passersby watch the wall come alive, and the
        time-lapse, progress shots, and artist story feed a content calendar for
        weeks. You&apos;re not buying a finished image. You&apos;re buying a
        performance that leaves a permanent set behind.
      </p>

      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        Paper is a campaign. Paint is a landmark. The brands that get it right
        stop asking which one is better and start asking which job each wall is
        supposed to do.
      </PullQuote>

      <h2>The Honest Economics</h2>
      <p>
        A commissioned interior accent wall starts in the low four figures;
        large exterior walls and high-detail work scale from there. Compare that
        to a single-neighborhood paste campaign and the mural costs more per
        wall — but the math flips on time. A mural amortizes over months or
        years of continuous presence at your own location; there&apos;s no media
        renewal, no reprint, no re-install. For a business with a physical
        space, it&apos;s the rare marketing spend that behaves like a capital
        improvement — closer to a renovation than an ad buy, and it appreciates
        as the neighborhood photographs it. For the full paper-side math, our{" "}
        <BlogLink slug="wheat-pasting-vs-billboards">
          wheat paste vs. billboards breakdown
        </BlogLink>{" "}
        covers what paste buys per dollar.
      </p>

      <figure style={{ margin: "2em auto", maxWidth: "720px" }}>
        <img
          src="/artists/steven-sued/steven-sued-mural-avocado-man.webp"
          alt="Bold blue exterior portrait mural by Steven Sued on a building wall"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          Exterior work reads at street scale — one wall, working every hour the street is awake.
        </figcaption>
      </figure>

      <h2>How the Managed Service Works</h2>
      <p>
        The reason most businesses never commission a mural isn&apos;t taste —
        it&apos;s logistics. Finding an artist, negotiating scope, contracts,
        wall prep, scheduling, insurance, payment: it&apos;s a project, and
        nobody at the business owns it. That&apos;s the part we productized.
        You bring the space and the brand; we match you to an artist from our
        vetted roster, you approve the concept before anything touches the
        wall, and Phantom handles the contract, prep, scheduling, and payment
        end to end. Our first featured artist is Steven Sued — creative
        director, ten-plus years of brand and illustration work, and the hand
        behind every wall pictured in this post.
      </p>
      <p>
        And because we run both crafts, we&apos;ll tell you when a mural is the
        wrong tool. Launching something next month across a whole city?
        That&apos;s a <BlogLink slug="wheat-pasting-campaign">paste
        campaign</BlogLink>. Anchoring a flagship, a restaurant, an office
        people should remember? That&apos;s paint. The strongest play we see
        combines them — a mural at the location, paste in the neighborhoods
        around it, one story told at two speeds.
      </p>
    </>
  );
}
