import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      If you make music or make art, the wall is the one channel where nobody
      between you and the listener takes a cut. A run of 25 to 50 posters in the
      right two or three neighborhoods, timed to a release or a show, gets seen by
      more of the right people than another boosted post, and it stays up for
      weeks. This is how we run Phantom Pasting for Musicians and Phantom Pasting
      for Artists, what it costs, what to put on the poster, and where it goes
      wrong when people do it themselves.
    </p>
  );
}

const VIDEO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Wheat pasting an artist's posters on a Harlem barricade",
  description:
    "Phantom Pasting installer brushing a four-poster set for independent artist Calvin Priice onto a green construction barricade in Harlem, New York.",
  thumbnailUrl: "https://www.phantompasting.com/gallery/calvin-priice-wheat-paste-install-harlem-nyc-poster.webp",
  contentUrl: "https://www.phantompasting.com/gallery/calvin-priice-wheat-paste-install-harlem-nyc.mp4",
  uploadDate: "2026-09-29",
  duration: "PT17S",
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(VIDEO_SCHEMA) }} />

      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        Written from the install side. Most of the artists we paste for aren&apos;t
        on a major. They are paying for the run themselves, and they want to know
        it worked. This is the version of the conversation we&apos;ve with them.
      </p>

      <h2>Why Musicians Still Paste</h2>
      <p>
        Every artist we talk to has the same problem. They put a single out, they
        post about it, and the post reaches whoever the app decides it reaches
        that day. Usually a fraction of the people who already follow them. The
        song is good and nobody new hears it.
      </p>
      <p>
        A poster on a wall doesn&apos;t have that problem. It reaches everyone who
        walks past it, every day, for as long as it holds. Nobody decides who
        sees it. In a neighborhood where your kind of listener actually lives, that
        is a better audience than any targeting menu will build for you, and it&apos;s
        yours for weeks instead of hours.
      </p>
      <p>
        That&apos;s the whole case. It&apos;s why labels never stopped doing it, and
        it&apos;s why it works even better for an independent, because an independent does
        not have the label&apos;s playlist pull to fall back on.
      </p>

      <h2>What a Run Looks Like</h2>
      <p>
        Here&apos;s a real one. Calvin Priice, an independent artist out of New York,
        with a new single, four poster designs, and the city for a week. We ran
        four-poster sets, one of each design pasted side by side, across Harlem,
        Chelsea, Union Square, the East Village and Williamsburg. Every poster carried a QR code that went to the
        song. Two nights of install, photos the morning after.
      </p>

      <figure style={{ margin: "2em auto", maxWidth: "620px" }}>
        <img
          src="/gallery/calvin-priice-wheat-paste-four-poster-set-green-barricade-harlem-nyc.webp"
          alt="Four Calvin Priice single-release posters wheat-pasted as a set on a green construction barricade in Harlem, New York"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          Calvin Priice in Harlem. Four designs, one set, QR on every sheet. The
          set reads as one piece from across the street and as four songs up close.
        </figcaption>
      </figure>

      <p>
        The set matters. One poster on a wall is a flyer. Four of them together
        take the wall, and people stop for a wall. That&apos;s the difference between
        someone noticing your name and someone pulling their phone out.
      </p>

      <figure style={{ margin: "2em auto", maxWidth: "520px" }}>
        <video
          src="/gallery/calvin-priice-wheat-paste-install-harlem-nyc.mp4"
          poster="/gallery/calvin-priice-wheat-paste-install-harlem-nyc-poster.webp"
          controls
          playsInline
          preload="metadata"
          aria-label="Phantom Pasting installer brushing a four-poster set for Calvin Priice onto a green barricade in Harlem"
          style={{ width: "100%", borderRadius: "12px", display: "block", aspectRatio: "1/1", background: "#1A1A1A" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          The Calvin Priice install. Paste on the board, sheet on the paste,
          brush from the center out. Seventeen seconds of a job that takes about four minutes a
          set.
        </figcaption>
      </figure>

      <h2>Phantom Pasting for Musicians: The Package</h2>
      <p>
        Most artists don&apos;t need a hundred posters. They need the right thirty.
        Here&apos;s how we scope it.
      </p>
      <ul>
        <li>
          <strong>25 posters, one neighborhood.</strong> A single release or a show
          at one venue. You paste the ten blocks around where your people go out.
        </li>
        <li>
          <strong>50 posters, two or three neighborhoods.</strong> The standard
          release run. This is what the Calvin Priice campaign above was. Enough to
          get seen more than once by the same person, which is when a name sticks.
        </li>
        <li>
          <strong>100 posters, whole city.</strong> Tour announcement, album,
          anything where you want the city to feel covered. Usually two install
          nights.
        </li>
      </ul>
      <p>
        We print, we install, we photograph every wall with a map pin, and you get
        the report the next morning so you can post it. For what each tier costs,
        the <BlogLink slug="wheat-pasting-cost">cost guide</BlogLink> has current
        numbers. The short version is that a 25-poster run in Los Angeles starts
        under two thousand dollars, printing included, and that&apos;s less than most
        artists spend on one music video.
      </p>

      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        <p>
          The artists who get the most out of a run are the ones who treat the
          install photos as content. Wall goes up Tuesday night, photos are on
          their story Wednesday morning, and now the poster is working twice. Once
          on the street and once on the phone.
        </p>
      </PullQuote>

      <h2>Phantom Pasting for Artists: Gallery Shows and Drops</h2>
      <p>
        Visual artists use the same format for a different reason. A show has a
        date and an address, and the wall is the cheapest way to put both in front
        of the neighborhood that will actually come. We&apos;ve pasted for gallery
        openings on Melrose and for print drops, and the runs that work are the
        ones that treat the poster like the invite, not like the art.
      </p>
      <p>
        The rule is the same. Put the posters where the audience already is.
        For a show in the Arts District, that means the{" "}
        <BlogLink slug="wheat-pasting-dtla-arts-district">Arts District</BlogLink>{" "}
        and Silver Lake, not Santa Monica. For an opening in Chelsea, it means
        the blocks between the galleries and the train, which is where the
        Chelsea set below went.
      </p>

      <figure style={{ margin: "2em auto", maxWidth: "620px" }}>
        <img
          src="/gallery/calvin-priice-wheat-paste-posters-scaffolding-pedestrians-chelsea-nyc.webp"
          alt="Calvin Priice wheat paste posters on a scaffolding wall in Chelsea, New York, with pedestrians walking past"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          Calvin Priice in Chelsea, under the scaffolding. Sidewalk sheds are some of the best
          real estate in Manhattan because everyone walks the same narrow lane
          past them.
        </figcaption>
      </figure>

      <h2>Wild Posting for Musicians: Same Thing, Different Word</h2>
      <p>
        You&apos;ll see this called wild posting, wheat pasting, flyposting, or
        postering depending on who you ask and what city they learned it in. It
        is one craft. Wild posting for musicians is what a New York agency calls
        it. Wheat pasting is what the crew calls it. We wrote up the{" "}
        <BlogLink slug="wild-posting-vs-wheat-pasting">whole naming thing</BlogLink>{" "}
        if you care. For booking purposes, ask for a poster run and say how many
        and where.
      </p>

      <h2>What to Put on the Poster</h2>
      <p>
        This is where most artist runs are won or lost, and it happens before we
        touch a wall. A poster is read from twelve feet away by someone walking,
        so it needs to work like a billboard, not like album art.
      </p>
      <ul>
        <li>
          <strong>Your name, big, at the top.</strong> Bigger than you think. If
          it isn&apos;t readable from across the street, it isn&apos;t a poster.
        </li>
        <li>
          <strong>One image.</strong> A face or a single strong graphic. Not a
          collage, not the full cover with liner-note type.
        </li>
        <li>
          <strong>One thing to do.</strong> A QR code to the song, or a date and a
          venue. Not both, not three links, not every social handle.
        </li>
        <li>
          <strong>Print at 24 by 36.</strong> It&apos;s the size that reads at street
          distance and pastes clean. We send full specs when you book, and the{" "}
          <BlogLink slug="wheat-pasting-campaign">campaign walkthrough</BlogLink>{" "}
          shows how the files turn into a night of installs.
        </li>
      </ul>

      <figure style={{ margin: "2em auto", maxWidth: "360px" }}>
        <img
          src="/gallery/calvin-priice-abff-pop-up-wheat-paste-posters-pedestrian-union-square-night-nyc.webp"
          alt="Pedestrian passing Calvin Priice posters beside a Union Square subway entrance in New York at night"
          loading="lazy"
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
        <figcaption style={{ fontSize: "13px", color: "rgba(0,0,0,0.55)", marginTop: "0.6em", fontStyle: "italic" }}>
          Calvin Priice at Union Square, next to the subway stairs. Name you can
          read at a walk, one image, one QR.
        </figcaption>
      </figure>

      <h2>Where It Goes Wrong</h2>
      <p>
        We get called in after a lot of do-it-yourself runs. The same three things
        every time.
      </p>
      <ul>
        <li>
          <strong>The wrong walls.</strong> Posters go up wherever there was space,
          which is usually where nobody walks. Location is most of the value.
          The <BlogLink slug="wheat-pasting-new-york">New York</BlogLink> and{" "}
          <BlogLink slug="wheat-pasting-los-angeles">Los Angeles</BlogLink> guides
          walk the neighborhoods block by block.
        </li>
        <li>
          <strong>The wrong paste.</strong> Store-bought glue, or paste mixed too
          thin, and the posters are on the sidewalk by Thursday. We covered the{" "}
          <BlogLink slug="how-to-make-wheat-paste">actual recipe</BlogLink> if you
          want to try it, but it&apos;s the one part of this that really is a skill.
        </li>
        <li>
          <strong>The wrong wall, legally.</strong> A barricade that says Post No
          Bills, or a private storefront, and the fine has your name on it because
          your name is on the poster. Read{" "}
          <BlogLink slug="is-wheat-pasting-legal">what installers actually run into</BlogLink>{" "}
          before you go out with a bucket.
        </li>
      </ul>

      <h2>Timing It to the Release</h2>
      <p>
        Two ways to time it. For a show or a tour date, paste goes up two to
        four days before, never the day of. You want the name in people&apos;s
        heads before the date, so the flyer in their feed is the second time
        they&apos;ve seen you, not the first. For a single that&apos;s already
        out, you do what Calvin Priice did: go up the weekend after release with
        a QR on every sheet, so the wall sends people straight to the song. We&apos;ve
        run both for artists routing through Nashville, Los Angeles, and New York
        in the same month. The{" "}
        <BlogLink slug="guerrilla-marketing-nashville">Nashville guide</BlogLink>{" "}
        covers what that city specifically rewards, and the{" "}
        <BlogLink slug="guerrilla-marketing-for-music">music marketing post</BlogLink>{" "}
        goes deeper on the label-side economics if you are working with one.
      </p>

      <h2>Put Your Name on a Wall</h2>
      <p>
        Send us the song, the date, and the city. We&apos;ll tell you how many
        posters it needs and which neighborhoods, and send pricing within 24
        hours. Everything on the{" "}
        <a href="/services/wheat-pasting">wheat pasting service page</a> applies to
        artists exactly as it does to brands, except that you get to see your own
        face on the wall. <a href="/contact">Get a quote</a>.
      </p>
    </>
  );
}
