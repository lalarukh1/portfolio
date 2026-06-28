import ImagePlaceholder from "@/components/ImagePlaceholder";
import CaseStudyImage from "@/components/CaseStudyImage";
import TableOfContents from "@/components/TableOfContents";

const tocItems = [
  { id: "overview", label: "Overview", level: 0 as const },
  { id: "at-a-glance", label: "At a glance", level: 0 as const },
  { id: "the-rainbow", label: "The problem with the rainbow", level: 0 as const },
  { id: "marketing-conflict", label: "The marketing conflict", level: 0 as const },
  { id: "proposed-solution", label: "The proposed solution", level: 0 as const },
  { id: "design-system", label: "Building the design system", level: 0 as const },
  { id: "reflection", label: "Reflection", level: 0 as const },
];

export default function GCSEPodContent() {
  return (
    <div className="flex gap-16 items-start">
      <article className="max-w-3xl min-w-0 flex-1">
        <header className="pt-16 pb-20">
          <p className="text-xs uppercase tracking-widest text-muted mb-6">
            2022 · Frontend Developer and UX Designer
          </p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-8">
            GCSEPod: Building a Design Language from the Ground Up
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Establishing the visual language and component system for a GCSE
            learning platform used by hundreds of thousands of students and
            teachers across the UK, starting from a product with no design
            consistency and a colour palette that did not work.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-6 mb-20 border-t border-border pt-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Role</p>
            <p className="text-sm text-foreground">Frontend Developer and UX Designer</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Duration</p>
            <p className="text-sm text-foreground">3 months</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Deliverables</p>
            <p className="text-sm text-foreground">
              Design system, colour tokens, component library, UI redesign, CSS token implementation
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Year</p>
            <p className="text-sm text-foreground">2022</p>
          </div>
        </div>

        <section id="at-a-glance" className="mb-20 border-t border-border pt-10">
          <h2 className="text-2xl font-medium mb-6">At a glance</h2>
          <ul className="space-y-4">
            {[
              "Joined as a frontend developer and stepped into design work by translating visual ideas the team struggled to communicate, becoming the bridge between product thinking and visual execution.",
              "Challenged a marketing-led colour direction, built the case in Figma with annotated screens showing the problems, and proposed a two-theme solution that was adopted as the new product direction.",
              "Established a complete design language from scratch including colour tokens, typography rules, contrast ratios, button states, and background scales.",
              "Translated the entire design system into CSS tokens applied across the product codebase, bringing consistency to a product that had none.",
            ].map((item) => (
              <li key={item} className="text-foreground text-sm leading-relaxed flex gap-4">
                <span className="text-muted shrink-0 mt-0.5">-</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="overview" className="mb-20">
          <h2 className="text-2xl font-medium mb-6">Overview</h2>
          <p className="text-foreground leading-relaxed mb-6">
            GCSEPod is a GCSE revision platform used by hundreds of thousands
            of students and teachers across the UK. Schools subscribe to give
            students access to short video pods covering every GCSE subject and
            specification.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            I joined as a frontend developer. The product had been built by
            developers without a dedicated designer, and it showed. Every
            section used different colours, there was no visual hierarchy, and
            the interface had grown feature by feature without a unifying design
            language.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Early on I noticed the product manager was having difficulty
            visualising ideas and communicating them to the team. Having built
            websites from scratch before joining, I started translating those
            ideas into Figma screens and it worked well. I began
            working closely with the product manager and senior stakeholders as the person
            who could take a product requirement and turn it into something the
            whole team could see, discuss, and build from.
          </p>
          <p className="text-foreground leading-relaxed">
            Over three months in 2022 as my first project at GCSEPod I designed and built a complete visual
            language for the product, from the colour system through to CSS
            token implementation across the entire codebase.
          </p>
        </section>

        <section id="the-rainbow" className="mb-20">
          <h2 className="text-2xl font-medium mb-6">The problem with the rainbow</h2>

          <CaseStudyImage
            src="/gcsepod-before-home.png"
            alt="Before: GCSEPod home screen showing the original colour scheme with pink, purple, green, and orange competing across the interface"
            caption="Before: GCSEPod home screen showing the original colour scheme with pink, purple, green, and orange competing across the interface."
          />

          <CaseStudyImage
            src="/gcsepod-before-teach.png"
            alt="Before: GCSEPod Teach page showing the full extent of the colour problem with blue tiles, orange sections, purple headers, and pink CTAs with no connecting logic"
            caption="Before: GCSEPod Teach page showing the full extent of the colour problem with blue tiles, orange sections, purple headers, and pink CTAs with no connecting logic."
          />

          <p className="text-foreground leading-relaxed mb-6">
            The original product used a different colour for almost every
            section. The home screen had pink tiles, green tiles, and orange
            tiles. The Teach section had blue subject tiles and orange playlist
            sections. Headers were purple. CTAs were pink. Nothing connected.
          </p>
          <p className="text-foreground leading-relaxed">
            This was not a deliberate design choice. It had grown organically
            as features were added. But it created a product that felt visually
            chaotic and was tiring to use for long periods, which matters when
            your users are students revising for exams and teachers planning
            lessons.
          </p>
        </section>

        <section id="marketing-conflict" className="mb-20">
          <h2 className="text-2xl font-medium mb-6">The marketing conflict</h2>

          <CaseStudyImage
            src="/gcsepod-marketing-pink.png"
            alt="Marketing colours applied: all navigation tiles reduced to flat hot pink with no differentiation or hierarchy"
            caption="Marketing colours applied: all navigation tiles reduced to flat hot pink with no differentiation or hierarchy."
          />

          <p className="text-foreground leading-relaxed mb-6">
            When marketing defined a new brand direction, the brief came to
            apply those colours across the product. The palette was bold: a hot
            pink primary, deep purple, and gold highlight, designed for
            advertising and print materials where high saturation commands
            attention.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Applied to a product that teachers and students use for hours, the
            result was different. Every tile became the same flat hot pink.
            There was no visual hierarchy, no way to distinguish one section
            from another, and the intensity worked against the calm focused
            environment a learning tool needs.
          </p>
          <p className="text-foreground leading-relaxed">
            I disagreed with the direction. Rather than just saying so, I built
            the case in Figma, showing exactly how the marketing colours looked
            applied across every screen, and proposing an alternative that kept
            the brand intact while making the product usable. This was early in
            my time at GCSEPod, and presenting a counter-proposal to senior
            stakeholders was not a small thing.
          </p>
        </section>

        <section id="proposed-solution" className="mb-20">
          <h2 className="text-2xl font-medium mb-6">The proposed solution</h2>

          <CaseStudyImage
            src="/gcsepod-dark-theme.png"
            alt="Light theme: brand pink used as an active state accent with muted purple for inactive tiles and neutral grey headers"
            caption="Light theme: brand pink used as an active state accent with muted purple for inactive tiles and neutral grey headers."
          />

          <CaseStudyImage
            src="/gcsepod-light-theme.png"
            alt="Dark theme: deep charcoal background with pink tiles, brand colours used with purpose rather than applied everywhere"
            caption="Dark theme: deep charcoal background with pink tiles, brand colours used with purpose rather than applied everywhere."
          />

          <p className="text-foreground leading-relaxed mb-6">
            I proposed a two-theme system: a light theme for everyday use and a
            dark theme as an alternative. Both used the brand colours, but with
            purpose rather than as wallpaper.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            In the light theme, the marketing pink was reserved for the active
            or selected state, with inactive tiles using a muted complementary
            purple. Header bars were neutral grey. The brand colour appeared as
            an accent that drew the eye to what mattered rather than filling
            every surface.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            In the dark theme, the same pink was used consistently across tiles
            but had room to breathe against a deep charcoal background. The
            gold highlight worked as a secondary accent. The result felt premium
            and focused rather than overwhelming.
          </p>
          <p className="text-foreground leading-relaxed">
            The product managerand senior stakeholders reviewed both proposals and agreed to
            move forward with the two-theme approach.
          </p>
        </section>

        <section id="design-system" className="mb-20">
          <h2 className="text-2xl font-medium mb-6">Building the design system</h2>

          <CaseStudyImage
            src="/gcsepod-colour-tokens.png"
            alt="Colour tokens and typography system: hex values, font rules, and text and background combinations tested for contrast"
            caption="Colour tokens and typography system: hex values, font rules, and text and background combinations tested for contrast."
          />

          <CaseStudyImage
            src="/gcsepod-background-scale.png"
            alt="Background scale: all four brand colours across five opacity levels"
            caption="Background scale: all four brand colours across five opacity levels."
          />

          <p className="text-foreground leading-relaxed mb-6">
            With the direction agreed, I built a complete design system
            alongside the visual designs. The two happened together: as screens
            were designed, the system that underpinned them was being defined at
            the same time.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            The colour system defined four roles: Primary (#e6007e), Secondary
            (#37333d), Complementary Secondary (#533168), and Highlight
            (#fab437). Each colour was documented across five opacity levels
            from full saturation to 10%, giving a complete and consistent scale
            to work from.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Typography was defined using Geomanist, medium weight for headlines
            and standout information and regular for all other text. Usage rules
            were documented so the font was applied consistently rather than
            decided case by case.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Every text and background colour combination was contrast-checked.
            Only combinations that passed accessibility standards were included
            in the system, meaning developers could pick any combination knowing
            it would be accessible without checking it themselves.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Button states were documented for every colour variant: normal,
            hover, and disabled. Square and rounded corner variants were both
            included to give flexibility across different parts of the product.
          </p>
          <p className="text-foreground leading-relaxed">
            Once the system was designed I translated it entirely into CSS
            tokens and applied them across the product codebase. This was the
            part that made the design system real. Rather than leaving it as a
            Figma document, the tokens became the source of truth that the
            whole product was built from, ensuring that design decisions made in
            Figma translated consistently into production.
          </p>
        </section>

        <section id="reflection" className="mb-20">
          <h2 className="text-2xl font-medium mb-6">Reflection</h2>
          <p className="text-foreground leading-relaxed mb-6">
            This was one of my earliest experiences of design work in a
            professional product team, and it shaped how I have approached every
            project since.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            The product manager was struggling to visualise ideas and communicate them to the
            team. I stepped in because I could see both sides, the product
            requirement and the visual execution, and I could translate between
            them. That role, being the person who bridges product thinking and
            design execution, is something I have carried into every engagement
            since.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Building the case against the marketing direction in Figma rather
            than in words was the approach that worked. Showing the problem and
            the solution side by side made the argument without requiring anyone
            to take my word for it. A well-constructed visual makes the case
            better than any amount of discussion.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Translating the design system into CSS tokens myself also reinforced
            something important: a design system is only as valuable as its
            implementation. Having the development background to take the system
            all the way into code meant nothing was lost between design and
            build.
          </p>
          <p className="text-foreground leading-relaxed">
            Looking back now, I know I made some mistakes and there are things I
            would do differently if I were doing it today. I would simplify the
            themes further and make the colours truly interchangeable between
            light and dark, so switching between them is seamless rather than
            requiring separate decisions for each context. But that is part of
            learning and growing, and the instincts I built during this work
            became the foundation for everything that came after.
          </p>
        </section>
      </article>
      <TableOfContents items={tocItems} />
    </div>
  );
}
