import CaseStudyImage from "@/components/CaseStudyImage";
import TableOfContents from "@/components/TableOfContents";

const tocItems = [
  { id: "context", label: "Context", level: 0 as const },
  { id: "the-audit", label: "The Audit", level: 0 as const },
  { id: "what-the-audit-found", label: "What the audit found", level: 1 as const },
  { id: "the-redesign", label: "The Redesign", level: 0 as const },
  { id: "job-to-be-done", label: "Redesigning for the job", level: 1 as const },
  { id: "reflection", label: "Reflection", level: 0 as const },
];

export default function TAPContent() {
  return (
    <div className="flex gap-16 items-start">
      <article className="max-w-3xl min-w-0 flex-1">
        <header className="pt-16 pb-20">
          <p className="text-xs uppercase tracking-widest text-muted mb-6">
            2025 to 2026 · Fractional UX Designer
          </p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-8">
            TAP: Bringing UX Thinking to a Vibe-Coded Product
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Auditing and redesigning a trust assessment platform that had been
            built without a UX designer, turning a prototype the team considered
            final into a product trust users could actually navigate.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-6 mb-20 border-t border-border pt-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Role</p>
            <p className="text-sm text-foreground">Fractional UX Designer</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Product</p>
            <p className="text-sm text-foreground">Trust Assessment Platform (TAP)</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Deliverables</p>
            <p className="text-sm text-foreground">
              UX Audit, Information Architecture, Interaction Design
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Context</p>
            <p className="text-sm text-foreground">
              New product built with AI assistance by a product team without UX input
            </p>
          </div>
        </div>

        <section className="mb-20 border-t border-border pt-10">
          <h2 className="text-2xl font-medium mb-6">At a glance</h2>
          <ul className="space-y-4">
            {[
              "Brought in to make screens look better, conducted a full UX audit instead and expanded the scope with team agreement after presenting the findings.",
              "Identified critical problems across information architecture, navigation anti-patterns, missing progress tracking, and unexplained data visualisation.",
              "Redesigned the evaluation overview, results view, school review page, and school information structure around the actual job trust users come to do.",
              "Moved persistent school information from a cluttered sidebar into a clean on-demand modal, reducing visual noise across the entire product.",
            ].map((item) => (
              <li key={item} className="text-foreground text-sm leading-relaxed flex gap-4">
                <span className="text-muted shrink-0 mt-0.5">-</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-medium mb-6">Overview</h2>
          <p className="text-foreground leading-relaxed">
            TAP was built by people who understood the problem deeply but had
            never designed a product before. Using AI-assisted tools, the team
            had moved fast and produced something functional — but the
            information architecture was unclear, user flows were broken in
            places, and when tested with trust users, they could not always
            figure out how to do the specific job they had come to do. My role
            was not to start over. It was to bring UX thinking to what already
            existed and redesign it into something users could actually navigate
            confidently.
          </p>
        </section>

        <section className="mb-20">
          <h2 id="context" className="text-2xl font-medium mb-6">Context</h2>
          <p className="text-foreground leading-relaxed">
            TAP is a new product being built as a collaboration between Edurio
            and a large multi-academy trust. It allows trusts to manage school
            self-evaluations at scale: trust users review submissions from
            individual schools, raise queries, provide support ratings, and
            submit their overall review. Managing evaluations across 35 or more
            schools in a single round is a complex task, and the product needed
            to make that complexity manageable.
          </p>
        </section>

        <section className="mb-20">
          <h2 id="the-audit" className="text-2xl font-medium mb-2">The Audit</h2>
          <p className="text-muted text-sm mb-10">Understanding what was broken before touching any design</p>

          <h3 id="what-the-audit-found" className="text-lg font-medium mb-6">What the audit found</h3>

          <CaseStudyImage
            src="/tap-audit-overview.png"
            alt="Annotated audit of the existing submissions and results overview"
            caption="Audit: annotated existing submissions and results overview, documenting navigation anti-patterns and data grouping problems."
          />

          <p className="text-foreground leading-relaxed mb-6">
            Before proposing any redesign, I conducted a thorough UX audit of
            the existing screens, documenting every problem with annotations.
            The product team considered the screens close to final and had
            brought me in to make them look better. After reviewing the screens
            properly, it became clear the issues went deeper than visual polish:
            the information architecture, navigation patterns, and user flows
            all needed rethinking. I presented the audit findings to the team
            before touching any design work, and they agreed the scope needed
            to expand.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            The issues fell into clear patterns.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Information was being grouped incorrectly. The Results Overview tab
            was mixing two completely different types of data: general school
            information that had nothing to do with the evaluation, and actual
            evaluation results. These needed to be separated entirely.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Navigation was creating anti-patterns. A school filter placed above
            the page title was changing the information displayed above it,
            which breaks the user's mental model of how the page works.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Critical actions were invisible. Trust users arriving to review a
            school's evaluation had no clear indication of what they were
            supposed to do or what action was expected of them. The purpose of
            the page was unclear on arrival.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Data visualisation was unexplained. Colour-coded dots were used
            throughout to represent evaluation grades but there was no key,
            leaving users to guess what each colour meant in context.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            School information was always visible in a persistent sidebar,
            taking up significant screen space even when it was irrelevant to
            the task at hand.
          </p>

          <CaseStudyImage
            src="/tap-audit-school-review.png"
            alt="Annotated audit of the school evaluation review screen"
            caption="Audit: annotated school evaluation review screen showing missing progress tracking and unclear purpose on arrival."
          />

          <p className="text-foreground leading-relaxed">
            A further problem on the school review screen was that trust users
            had no way to track their own progress. With 15 sections to review
            per school, there was no indication of which sections had been
            completed, which had queries raised, or where they had left off
            when returning to the task.
          </p>
        </section>

        <section className="mb-20">
          <h2 id="the-redesign" className="text-2xl font-medium mb-2">The Redesign</h2>
          <p className="text-muted text-sm mb-10">Redesigning around the actual job trust users come to do</p>

          <h3 id="job-to-be-done" className="text-lg font-medium mb-6">Redesigning for the actual job to be done</h3>

          <CaseStudyImage
            src="/trust-view-schools.png"
            alt="After: Evaluation Overview with summary stats bar, status table, and contextual actions per school"
            caption="After: Evaluation Overview with summary stats bar, status table, and contextual actions per school."
          />

          <p className="text-foreground leading-relaxed mb-6">
            The Evaluation Overview was redesigned around the trust user's
            primary job: understanding where each school is in the evaluation
            process at a glance, and knowing what action to take next. A
            summary bar at the top surfaces the four numbers that matter most:
            total schools, evaluations completed, needing trust review, and not
            started. The table below gives each school a clear evaluation
            status, trust review status, query count, and a contextual action
            that changes based on where that school is in the process. Start
            Review, Continue Review, Review Again, and View Submitted Review
            all appear only when relevant, so users are never looking at
            actions that do not apply to them.
          </p>

          <CaseStudyImage
            src="/at-a-glance-whats-answered.png"
            alt="After: Evaluation Results with dot matrix visualisation and colour legend added"
            caption="After: Evaluation Results with dot matrix visualisation and colour legend added."
          />

          <p className="text-foreground leading-relaxed mb-6">
            The Results tab was separated from the Overview and rebuilt as a
            dedicated results view. The dot matrix visualisation showing how
            each school performed across every evaluation section was retained
            as it is genuinely useful for trust leaders scanning across many
            schools, but a proper colour legend was added so the data could
            actually be read. The two completely different data types that had
            previously been mixed together were now in their correct separate
            tabs.
          </p>

          <CaseStudyImage
            src="/review-sections-overview.png"
            alt="After: School Overview Page showing section review cards with progress tracking, query counts, and Submit Review action"
            caption="After: School Overview Page showing section review cards with progress tracking, query counts, and Submit Review action."
          />

          <p className="text-foreground leading-relaxed mb-6">
            The individual school review page was redesigned around progress
            and clarity. Each of the 15 sections is now shown as a card with
            its review status, number of queries raised, and RAG rating visible
            at a glance. A progress indicator shows how many sections have been
            reviewed out of the total. The Submit Review action is prominent
            and accompanied by a clear explanation of what happens when it is
            submitted: sections not queried are accepted automatically, and
            queries are sent to the school. Trust users no longer arrive at
            this page uncertain about what they are doing or how far through
            they are.
          </p>

          <CaseStudyImage
            src="/separate-school-info-modal.png"
            alt="After: School information moved from persistent sidebar into an on-demand modal"
            caption="After: School information moved from persistent sidebar into an on-demand modal, accessible via an info icon next to the school name."
          />

          <p className="text-foreground leading-relaxed mb-6">
            The persistent school information sidebar was removed from the main
            view and moved into an on-demand modal, accessible via an info icon
            next to the school name. School information is still one tap away
            when needed, but it no longer competes for attention with the
            evaluation content that is the actual reason the trust user is on
            the page.
          </p>

          <CaseStudyImage
            src="/tap-section-detail-view.png"
            alt="After: Section detail view showing RAG scale, related evidence, actions taken, and trust review status"
            caption="After: Section detail view showing RAG scale, related evidence, actions taken, and trust review status."
          />

          <p className="text-foreground leading-relaxed">
            Clicking into any section opens a detailed review view. The full
            RAG scale is displayed with the school's selected grade highlighted,
            so the trust user can immediately see where the school has placed
            itself and whether they agree. Related evidence uploaded by the
            school is surfaced alongside the actions taken and impact measures
            they have reported. Each sub-section can be individually agreed or
            queried, and the trust user's decision is visible at a glance via
            the status badge in the top right. This level of detail gave trust
            users everything they needed to make an informed review decision
            without leaving the page or referring to external documents.
          </p>
        </section>

        <section className="mb-20">
          <h2 id="reflection" className="text-2xl font-medium mb-6">Reflection</h2>
          <p className="text-foreground leading-relaxed mb-6">
            Auditing a product built without UX input requires a different kind
            of sensitivity. The people who built TAP understood their users and
            their domain well. The product had real thought behind it. The gaps
            were not in the requirements, they were in the translation of those
            requirements into an interface that works for people.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            My job was to respect what had been built, identify specifically
            what was not working and why, and redesign it in a way that felt
            like a natural evolution rather than a rejection of the work that
            came before. Every point in the audit had to be grounded in clear
            reasoning because these were people who had designed and built the
            product themselves, and they needed to be convinced, not overruled.
          </p>
          <p className="text-foreground leading-relaxed">
            Having built several AI-assisted products myself gave me a
            particular perspective here. I understood the patterns that emerge
            when product thinking drives the build without a UX layer, and this
            helped me make informed decisions.
          </p>
        </section>
      </article>
      <TableOfContents items={tocItems} />
    </div>
  );
}
