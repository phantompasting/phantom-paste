import { HOMEPAGE_FAQS } from "@/lib/homepageFAQs";

/**
 * Server-rendered, visually-hidden mirror of the homepage's static text content.
 * Purpose: crawlers (Arvow, Bing, non-JS scanners, AI retrievers) read the full
 * content in the initial HTML rather than only the hero. Client ScrollSections
 * still owns visual rendering + interactions; this block is `position: absolute;
 * opacity: 0; pointer-events: none` so users never see duplicate text, but
 * screen readers and crawlers parse it normally.
 */
export default function StaticSEOSections() {
  return (
    <div
      aria-hidden={false}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "1px",
        height: "1px",
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
        clip: "rect(0,0,0,0)",
      }}
    >
      <section>
        <h2>Real Numbers. Real Streets.</h2>
        <p>
          A decade of guerrilla marketing campaigns across every major US
          market. Every wheat paste placement photographed, every wild posting
          campaign documented.
        </p>
        <ul>
          <li>50+ US Cities covered nationwide</li>
          <li>500+ Wheat pasting and wild posting campaigns delivered</li>
          <li>200+ Hits per campaign run</li>
          <li>24-hour response on every new brief</li>
          <li>100% Photo-documented at install</li>
          <li>10 years of street credibility</li>
        </ul>
      </section>

      <section>
        <h2>How It Works — Our Wheat Pasting &amp; Wild Posting Process</h2>
        <h3>01 — Brief Us</h3>
        <p>
          Tell us your brand, target city, campaign goals, and timeline. We
          respond within 24 hours with a custom guerrilla marketing strategy
          tailored to your market, audience, and budget.
        </p>
        <h3>02 — We Plan</h3>
        <p>
          You bring the artwork — we handle everything else. We review your
          existing designs, print all posters or cut your stencils, source
          materials, and map out strategic high-traffic placement zones in your
          city.
        </p>
        <h3>03 — We Deploy</h3>
        <p>
          Our crew hits the streets. Walls wheat-pasted, sidewalks chalk-spray
          stenciled. 25–200+ precision placements per campaign run, executed at
          the exact locations agreed in your strategy brief.
        </p>
        <h3>04 — You See It</h3>
        <p>
          Full photo documentation from every single hit — timestamped,
          geo-tagged, and packaged into a clean campaign report. Proof of every
          placement, ready to share as social content.
        </p>
      </section>

      <section>
        <h2>Our Services — Wheat Pasting, Chalk Spray Stencils &amp; Full Impact Campaigns</h2>

        <article>
          <h3>Wheat Pasting — Large Format Wall Takeovers</h3>
          <p>Large format walls. Impossible to miss.</p>
          <p>
            Wheat paste posters from 24″×36″ to 48″×72″ on prime urban walls —
            high-foot-traffic intersections, construction hoardings, late-night
            districts. We find the walls your audience already lives around.
          </p>
          <ul>
            <li>Print-ready file to finished wheat paste poster</li>
            <li>Strategic wall mapping across 50+ US cities</li>
            <li>Photo-documented every hit</li>
            <li>Sizes up to 48″×72″ jumbo wheat paste wall takeovers</li>
          </ul>
        </article>

        <article>
          <h3>Chalk Spray Stencils — Ground Level Impact</h3>
          <p>Beneath every footstep. Before every door.</p>
          <p>
            Eco-friendly, temporary chalk spray paint stencils on sidewalks,
            plazas, subway exits. 25–200+ placements per campaign. We create a
            breadcrumb trail leading foot traffic directly to your event or
            store.
          </p>
          <ul>
            <li>Your design, we cut the stencil</li>
            <li>25–200+ chalk spray stencil placements per campaign</li>
            <li>Eco-friendly, temporary chalk paint</li>
            <li>Geo-tagged documentation of every placement</li>
          </ul>
        </article>

        <article>
          <h3>Full Impact — Total Street Ownership</h3>
          <p>Above eye level. Below every footstep.</p>
          <p>
            The complete guerrilla marketing takeover. Large-format wheat paste
            wall posters combined with precision chalk spray stencils. Your
            brand woven into the daily rhythm of the city from every angle.
          </p>
          <ul>
            <li>Full wheat pasting campaign</li>
            <li>Chalk spray stencil activations (25–200+)</li>
            <li>Strategic placement mapping</li>
            <li>Nationwide wild posting deployment</li>
          </ul>
        </article>
      </section>

      <section>
        <h2>Why Guerrilla Marketing — Digital Ads Fade. Streets Don&apos;t.</h2>
        <article>
          <h3>Impossible to Ignore</h3>
          <p>
            Traditional ads are scrolled past, muted, or blocked. Our wheat
            pasting and wild posting campaigns live at street level — where
            people walk, gather, and exist. You can&apos;t close a popup on a
            brick wall.
          </p>
        </article>
        <article>
          <h3>Earned Media Machine</h3>
          <p>
            Every wheat paste and chalk spray stencil becomes a photo opp.
            People stop, post, tag. Your campaign generates organic social
            content for free — and the buzz outlasts the poster.
          </p>
        </article>
        <article>
          <h3>Raw Cultural Credibility</h3>
          <p>
            Street-level presence signals authenticity. The brands people talk
            about are the ones they see in real life — woven into the urban
            experience.
          </p>
        </article>
        <article>
          <h3>Hyper-Local Targeting</h3>
          <p>
            Every wild posting placement is mapped to your audience&apos;s exact
            neighborhoods — their commutes, lunch spots, music venues, and
            midnight routes home.
          </p>
        </article>
      </section>

      <section>
        <h2>Why Guerrilla Marketing Works</h2>
        <article>
          <h3>Street ads can&apos;t be muted.</h3>
          <p>
            Wheat paste and chalk stencils live in the real world. No algorithm
            decides who sees them — if you walk past, you see it.
          </p>
        </article>
        <article>
          <h3>Every campaign is proven.</h3>
          <p>
            100% photo documentation at every wheat pasting install —
            timestamped, geo-tagged, report-ready. No impression estimates, just
            proof.
          </p>
        </article>
        <article>
          <h3>50+ cities, any scale.</h3>
          <p>
            Single-market drops or simultaneous national wild posting
            saturation. Local crews in every city. Rush timelines from 5
            business days.
          </p>
        </article>
      </section>

      <section>
        <h2>Frequently Asked Questions — Wheat Pasting &amp; Wild Posting</h2>
        {HOMEPAGE_FAQS.map((faq, i) => (
          <article key={i}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
