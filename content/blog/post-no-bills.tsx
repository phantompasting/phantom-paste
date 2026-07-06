import BlogLink from "@/components/BlogLink";
import PullQuote from "@/components/PullQuote";

export function tldr() {
  return (
    <p>
      &quot;Post No Bills&quot; means exactly what it says: the owner of that
      barricade has not authorized posters, and pasting it anyway is illegal —
      the fine lands on whoever&apos;s name is on the paper, which means the
      brand, not the crew. Here&apos;s where the 150-year-old sign comes from,
      what it means legally, how a professional operation reads it, and why the
      brands you see on paste all over New York never touch a wall that carries it.
    </p>
  );
}

export default function Post() {
  return (
    <>
      <p style={{ fontStyle: "italic", color: "rgba(0,0,0,0.6)", marginBottom: "1.5em" }}>
        Written from the crew that installs it — the legal reality behind the most
        famous stencil in New York. For the full picture on where pasting is and
        isn&apos;t legal, start with our{" "}
        <BlogLink slug="is-wheat-pasting-legal">legality guide</BlogLink>.
      </p>

      <h2>The Oldest Sign on the Street</h2>
      <p>
        &quot;Bills&quot; is the nineteenth-century word for posters — bill
        posters, handbills, playbills. When New York&apos;s walls filled up with
        circus ads and theater bills in the 1800s, property owners started
        stenciling the refusal directly onto the wood: Post No Bills. The sign is
        so old it predates the advertising industry it polices, and it&apos;s
        still stenciled onto fresh plywood barricades today, usually within days
        of the fence going up.
      </p>
      <p>
        It is also, famously, the most-ignored sign in the city — you&apos;ll
        find it peeking out between the very posters it prohibits. That
        gap between what the sign says and what the wall looks like confuses
        brands constantly, so let&apos;s be precise about what it actually means.
      </p>

      <h2>What It Means Legally</h2>
      <p>
        A construction barricade is private property. The contractor or building
        owner controls it, and &quot;Post No Bills&quot; is that owner stating on
        the record that no one has permission to post. NYC Administrative Code
        §10-119 makes unauthorized posting unlawful, and it carries a detail most
        brands have never heard of: a <strong>rebuttable presumption</strong> that
        whoever&apos;s name, brand, or phone number appears on the poster is the
        violator. Not the installer who pasted it at 3 a.m. — the brand printed on
        the paper. Fines run per poster and stack fast on a fifty-poster grid.
      </p>

      <PullQuote attribution="Mateo Vargas, Field Operations Lead">
        A Post No Bills barricade isn&apos;t a gray area. It&apos;s the owner
        answering the permission question before you asked. The professional
        response is simple: you don&apos;t paste it — you find the wall two blocks
        over whose owner said yes.
      </PullQuote>

      <h2>How a Professional Crew Reads a Barricade</h2>
      <p>
        Barricades are the best poster real estate in New York — we&apos;ve
        written about how they drive{" "}
        <BlogLink slug="wheat-pasting-williamsburg">Williamsburg</BlogLink> and
        the <BlogLink slug="wheat-pasting-lower-east-side">Lower East Side</BlogLink> —
        but not all plywood is equal, and reading it is the job. A stenciled Post
        No Bills, a &quot;no trespassing&quot; placard, fresh anti-graffiti paint:
        that barricade is off the map, no exceptions. What we work instead are
        authorized surfaces — barricades where the contractor or owner has said
        yes, walls under standing wall-rights agreements, and DOB-permitted
        scaffold wraps in Midtown. The distinction is invisible in a photo and
        absolute in practice.
      </p>
      <p>
        And to say it plainly, as policy: <strong>Phantom Pasting does not post
        on unpermitted walls or surfaces. Ever.</strong> No exceptions for a
        tight deadline, a perfect corner, or a client who says they&apos;ll take
        the risk. If a surface doesn&apos;t have the owner&apos;s permission, it
        isn&apos;t inventory — it&apos;s someone else&apos;s property, and we
        treat it that way. That policy is why our clients&apos; campaigns stay
        up, stay documented, and never come with a summons attached.
      </p>
      <p>
        This is also the honest answer to why professionally run campaigns
        don&apos;t get brands fined while renegade runs do. It isn&apos;t luck or
        speed. It&apos;s that the permission question got answered before the
        paste bucket left the van. Every wall in our NYC rotation has an owner who
        knows we&apos;re coming, which is why our installs get documented in
        daylight with GPS pins instead of torn down by a super at 7 a.m.
      </p>

      <h2>What Brands Should Take From the Sign</h2>
      <p>
        If an agency pitches you &quot;guerrilla&quot; placement and can&apos;t
        tell you who authorized each wall, the sign is telling you how that story
        ends: your logo, photographed on a prohibited barricade, attached to a
        summons with your name on it. Ask for the wall list. Ask who said yes.
        A real operator answers in writing.
      </p>
      <p>
        The irony of Post No Bills is that it made wheat pasting better. Scarcity
        of authorized walls is what gives a pasted campaign its value — when your
        brand shows up on paper in the LES or on a Williamsburg barricade,
        the neighborhood reads it as belonging there precisely because not
        everything gets to. The sign isn&apos;t the enemy of the medium.
        It&apos;s the reason the medium works.
      </p>
    </>
  );
}
