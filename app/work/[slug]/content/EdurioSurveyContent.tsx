import CaseStudyImage from "@/components/CaseStudyImage";
import TableOfContents from "@/components/TableOfContents";

const tocItems = [
  { id: "overview", label: "Overview", level: 0 as const },
  { id: "at-a-glance", label: "At a glance", level: 0 as const },
  { id: "section-01", label: "01. Survey Discovery & Management", level: 0 as const },
  { id: "survey-library", label: "1.1 Survey Library", level: 1 as const },
  { id: "my-surveys", label: "1.2 My Surveys", level: 1 as const },
  { id: "section-02", label: "02. Survey Design Experience", level: 0 as const },
  { id: "redesigned-editor", label: "2.1 Redesigned Editor", level: 1 as const },
  { id: "question-preview", label: "2.2 Question Preview", level: 1 as const },
  { id: "conversation-threads", label: "2.3 Conversation Threads", level: 1 as const },
  { id: "ai-survey-creation", label: "2.4 AI-assisted Creation", level: 1 as const },
  { id: "section-results", label: "2.5 Results", level: 1 as const },
  { id: "section-03", label: "03. Survey Respondent Experience", level: 0 as const },
  { id: "section-04", label: "04. Systems & Scale", level: 0 as const },
  { id: "section-05", label: "05. My Process", level: 0 as const },
  { id: "reflection", label: "Reflection", level: 0 as const },
];

export default function EdurioSurveyContent() {
  return (
    <div className="flex gap-16 items-start">
    <article className="max-w-3xl min-w-0 flex-1">
      <header className="pt-16 pb-20">
        <svg width="36" height="39" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
          <g clipPath="url(#clip0_12159_12805)">
            <path opacity="0.2" d="M9.70686 25.9998C13.0241 25.9998 15.7132 24.8324 15.7132 23.3922C15.7132 21.9521 13.0241 20.7847 9.70686 20.7847C6.38967 20.7847 3.70056 21.9521 3.70056 23.3922C3.70056 24.8324 6.38967 25.9998 9.70686 25.9998Z" fill="#1D1D1B"/>
            <path d="M0 4.30597V14.2564C0 15.5002 0.535714 16.6809 1.46849 17.4954L8.48319 23.645C9.23319 24.3016 10.355 24.2953 11.0987 23.626L17.9811 17.3944C18.8824 16.5799 19.3992 15.4182 19.3992 14.1996V4.30597C19.3866 1.92569 17.4643 0 15.0882 0H4.29832C1.92227 0 0 1.92569 0 4.30597Z" fill="url(#paint0_linear_12159_12805)"/>
            <path d="M20.1737 9.09777C19.8207 8.6937 19.764 8.11283 20.035 7.65193L21.2325 5.59996C21.5791 5.00015 22.3921 4.88651 22.8963 5.36635L23.5959 6.03561C24.1758 6.59122 24.1253 7.53197 23.4888 8.01812L21.8627 9.26193C21.3459 9.6597 20.6085 9.58393 20.18 9.09777H20.1737Z" fill="url(#paint1_linear_12159_12805)"/>
            <path d="M12.9878 7.81641C12.3512 7.81641 11.8281 8.33413 11.8281 8.97813H14.1475C14.1475 8.34045 13.6306 7.81641 12.9878 7.81641Z" fill="#0A5E38"/>
            <path d="M7.0581 7.81641C6.42155 7.81641 5.89844 8.33413 5.89844 8.97813H8.21777C8.21777 8.34045 7.70096 7.81641 7.0581 7.81641Z" fill="#0A5E38"/>
            <path d="M10.2348 13.6754C11.3378 13.6754 12.2327 12.5831 12.2327 11.2446H8.23694C8.23694 12.5895 9.1319 13.6754 10.2348 13.6754Z" fill="#0A5E38"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_12159_12805" x1="1.94118" y1="17.0219" x2="16.7027" y2="2.28027" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B57D"/>
              <stop offset="1" stopColor="#61EA61"/>
            </linearGradient>
            <linearGradient id="paint1_linear_12159_12805" x1="20.0917" y1="8.1002" x2="24.6455" y2="5.75178" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B57D"/>
              <stop offset="1" stopColor="#61EA61"/>
            </linearGradient>
            <clipPath id="clip0_12159_12805">
              <rect width="24" height="26" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <p className="text-xs uppercase tracking-widest text-muted mb-6">
          2025 to 2026 · Fractional UX Designer
        </p>
        <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-8">
          Edurio: Redesigning the Core Product Experience
        </h1>
        <p className="text-xl text-muted leading-relaxed">
          Redesigning the end-to-end survey experience for a school evaluation
          platform used by 3,000+ schools across Europe, resulting in a 2x
          increase in survey usage after launch.
        </p>

        <blockquote className="mt-10 pl-6 border-l-2 border-border">
          <p className="text-lg leading-relaxed text-foreground italic mb-4">
            "The end results were not just a beautiful UI but also a great UX.
            She asks great questions and ensures she really understands the user
            and business needs. Her work to improve the UX of one of our main
            features led to an increase in usage by 2x."
          </p>
          <p className="text-sm text-muted">
            Shanghai Samson, Product Manager at Edurio — now at Renaissance Learning
          </p>
        </blockquote>
      </header>

      <div className="grid grid-cols-2 gap-6 mb-20 border-t border-border pt-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted mb-2">Role</p>
          <p className="text-sm text-foreground">Fractional UX Designer</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted mb-2">Duration</p>
          <p className="text-sm text-foreground">18 months</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted mb-2">Deliverables</p>
          <p className="text-sm text-foreground">
            UX audit, Information architecture, Interaction design, Responsive UI, UI Kit and Design System
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted mb-2">Outcome</p>
          <p className="text-sm text-foreground">2x survey usage post-launch</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted mb-2">User Groups</p>
          <p className="text-sm text-foreground">Administrators, teachers, pupils, parents</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted mb-2">Engagement</p>
          <p className="text-sm text-foreground">10 to 14 hours per week depending on project phase</p>
        </div>
      </div>

      <section className="mb-20 border-t border-border pt-10">
        <h2 id="at-a-glance" className="text-2xl font-medium mb-6">At a glance</h2>
        <ul className="space-y-4">
          {[
            "Challenged a surface-level brief and changed the product direction, identifying an architectural problem that led to splitting one overloaded page into two distinct and purposeful spaces: Survey Library and My Surveys.",
            "Conducted a heuristic evaluation of the existing survey editor, used the findings to define the redesign scope, and shipped a collaborative editing tool that resulted in 2x survey usage after launch.",
            "Designed the full mobile-first respondent experience end to end, meeting WCAG accessibility standards including contrast ratios, touch targets, focus states, and text-to-voice.",
            "Established the UI kit, design system, and colour token library now used as the development standard across the entire product.",
          ].map((item) => (
            <li key={item} className="text-foreground text-sm leading-relaxed flex gap-4">
              <span className="text-muted shrink-0 mt-0.5">-</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-20">
        <h2 id="overview" className="text-2xl font-medium mb-6">Overview</h2>
        <p className="text-foreground leading-relaxed mb-6">
          Edurio is a school evaluation platform used by thousands of schools
          and multi-academy trusts across Europe. Schools use it to run staff,
          parent, and pupil surveys, then benchmark results against national
          data to improve.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          When I joined as a UX designer, the survey experience had
          grown organically without a dedicated designer. Features had been
          added on top of features and customers were requesting more. The
          result was a product that worked, but that internal teams and external
          users struggled to navigate confidently. Improving self-serve was also
          a priority, reducing reliance on the Edurio customer success team for
          tasks users should be able to complete independently.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          The brief was to rethink the system holistically, not just fix
          individual screens. That meant establishing consistency across the
          product, building a component library that aligned with the Vuetify
          framework already used by the development team, and solving the user
          problems that had accumulated over time without a designer in the room.
          Everything needed to feel like it belonged to the same product.
        </p>
        <p className="text-foreground leading-relaxed">
          Over 18 months I redesigned four interconnected parts of the platform:
          how schools and trusts discover and manage surveys, how they design and
          collaborate on them, how they launch surveys confidently to their
          users, and how respondents complete them on mobile. Each project built
          on the last.
        </p>
      </section>

      <section className="mb-20">
        <h2 id="section-01" className="text-2xl font-medium mb-2">01. Survey Discovery and Management</h2>
        <p className="text-muted text-sm mb-10">Untangling the survey library</p>

        <CaseStudyImage
          src="/edurio-before-surveys-page.png"
          alt="Before: Original Surveys page with Templates and My Surveys mixed together"
          caption="Before: Templates and My Surveys shared one page with no clear distinction between expert content and a school's own work."
        />

        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mb-6">Problem</p>
        <p className="text-foreground leading-relaxed mb-6">
          Edurio's survey experience started on a single page that tried to do
          everything at once. Edurio's expert-designed templates (the product's
          core value proposition) were mixed in with each school's own surveys,
          with no clear distinction between them. Users were struggling to
          discover the expert surveys available and to manage their surveys when
          live.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          The brief asked me to improve the existing page and make it look
          better. Instead, I mapped the full user journey and identified a
          bigger underlying problem, the architecture itself: two fundamentally
          different tasks (discovering expert content vs managing your own work)
          were competing for attention on the same screen.
        </p>
        <p className="text-foreground leading-relaxed mb-10">
          I proposed splitting the experience into two distinct areas: Survey
          Library for discovery, and My Surveys for management. This was a
          product decision, not just a design decision. I presented the
          reasoning to the Product Managerand Product Head with annotated flows showing how
          each user type would move through the product differently. Both agreed
          after discussions and the separation became the new direction. They
          encouraged me to continue bringing that same level of thinking to the
          work ahead.
        </p>

        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mt-12 mb-6">Solution</p>
        <h3 id="survey-library" className="text-lg font-medium mb-6">1.1 Survey Library</h3>
        <p className="text-foreground leading-relaxed mb-6">
          The Survey Library became a dedicated discovery space for Edurio's
          expert surveys. I introduced a persistent filter panel covering
          benchmark type, user type (staff, pupil, parent), survey type, theme,
          and length, making it possible to find the right survey in seconds
          rather than scrolling through a mixed list. A table view toggle was
          added for power users managing large numbers of surveys.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          Clicking any survey opens a preview panel showing the full question
          structure and how results will appear, so schools can make an informed
          decision before committing. Previously, previewing a survey required
          the system to create a full survey copy for the user first, which was
          causing unnecessary use of resources. This change removed that
          friction entirely and made the code performance better.
        </p>
        <CaseStudyImage
          src="/edurio-survey-library-filters.png"
          alt="Survey Library with persistent filter panel and grid view"
          caption="After: The Survey Library with a persistent filter panel covering benchmark type, user type, survey type, theme, and length."
        />
        <CaseStudyImage
          src="/edurio-survey-library-table.png"
          alt="Survey Library table view for power users"
          caption="After: Table view toggle for power users managing large numbers of surveys."
        />
        <CaseStudyImage
          src="/edurio-survey-library-preview.png"
          alt="Survey Library with survey preview panel open"
          caption="After: Clicking any survey opens a preview panel showing the full question structure and results visualisation before committing."
        />

        <h3 id="my-surveys" className="text-lg font-medium mt-12 mb-6">1.2 My Surveys</h3>
        <p className="text-foreground leading-relaxed mb-6">
          The My Surveys dashboard was rebuilt around the tasks a school needs
          throughout the year, both during active survey seasons and quieter
          planning periods. Checking live response rates, resuming drafts, and
          reviewing recently closed surveys are all surfaced on arrival. A
          summary bar at the top gives quick access to Closed surveys, Drafts,
          and Privacy folders.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          For schools in a multi-academy trust, a contextual reminder banner
          surfaces trust-assigned surveys that need action, a pattern that
          didn't exist before and one the team specifically wanted made
          prominent. Empty states were rewritten to direct users to the Survey
          Library so they can explore templates and plan ahead rather than
          hitting a dead end.
        </p>
        <CaseStudyImage
          src="/edurio-my-surveys-reminder-banner.png"
          alt="After: My Surveys dashboard with trust survey reminder banner"
          caption="After: The My Surveys dashboard, showing the trust reminder banner surfacing assigned surveys that need action."
        />
        <CaseStudyImage
          src="/edurio-my-surveys-empty-state.png"
          alt="After: My Surveys dashboard empty state with guided CTA"
          caption="After: The empty state for new schools, directing users to the Survey Library rather than leaving them at a dead end."
        />
      </section>

      <section className="mb-20">
        <h2 id="section-02" className="text-2xl font-medium mb-2">02. Survey Design Experience</h2>
        <p className="text-muted text-sm mb-10">From a form editor to a collaborative design tool</p>

        <CaseStudyImage
          src="/ux-audit.png"
          alt="Annotated heuristic evaluation of the existing survey editor"
          caption="Audit: Annotated heuristic evaluation of the existing survey editor, documenting every friction point before any design work began."
        />

        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mb-6">Problem</p>
        <p className="text-foreground leading-relaxed mb-6">
          Before designing anything, I conducted a heuristic evaluation of the
          existing survey editor and documented every friction point with
          annotations: from invisible step indicators and buried critical
          actions, to inconsistent icon sizing and hover-only interactions
          hiding important functionality. Full-width module blocks were causing
          excessive scrolling on longer surveys. The read-only state for Edurio
          template surveys was poorly communicated, meaning users attempted to
          edit surveys they had no permission to change. This was a complex
          system with too many competing signals, leaving users uncertain about
          what to do next.
        </p>
        <p className="text-foreground leading-relaxed mb-10">
          This audit became the brief. Rather than taking feature requests from
          the team, I used the findings to define the redesign scope and
          presented it to the Product Manager, grounding every decision in observed usability
          problems rather than opinion. Combined with her knowledge of users and
          the problems they were facing day to day, this became the foundation
          we designed from.
        </p>

        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mt-12 mb-6">Solution</p>
        <h3 id="redesigned-editor" className="text-lg font-medium mb-6">2.1 Redesigned Editor</h3>
        <p className="text-foreground leading-relaxed mb-6">
          The redesigned editor introduced a toggleable left sidebar showing the
          survey structure defined by modules and made the whole survey
          navigable through it, giving users orientation at every point in
          usually long surveys. The two primary actions (Prepare for launch and
          Make a copy) were elevated to prominent top-level buttons, resolving
          the discoverability problem for the most critical user tasks. Module
          blocks were made compact, reducing scrolling significantly on
          multi-module surveys.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          A dedicated question edit panel was added with clean, separated fields
          and subtle micro-interactions, keeping the editing flow distinct from
          the main survey canvas.
        </p>
        <CaseStudyImage
          src="/edurio-editor-redesign-new.png"
          alt="Redesigned survey editor with sidebar navigation and question edit panel open"
          caption="After: Redesigned survey editor showing the toggleable sidebar, elevated primary actions, and the question edit panel open alongside the canvas."
        />

        <h3 id="question-preview" className="text-lg font-medium mt-12 mb-6">2.2 Question Preview</h3>
        <p className="text-foreground leading-relaxed mb-6">
          Because questions are the core building blocks of every survey, each
          one includes a live preview showing exactly how it will appear to
          respondents, and how the results will be visualised once responses
          come in. This closed a significant gap: previously schools had no way
          to validate their survey design before launching it.
        </p>
        <CaseStudyImage
          src="/edurio-question-preview.png"
          alt="Question preview and edit panel"
          caption="After: The question edit panel with a live preview showing exactly how each question appears to respondents and how results will be visualised."
        />

        <h3 id="conversation-threads" className="text-lg font-medium mt-12 mb-6">2.3 Conversation Threads</h3>
        <p className="text-foreground leading-relaxed mb-6">
          I designed a new feature called Conversation threads allowing
          stakeholders to leave comments on specific questions and resolve them
          collaboratively, bringing a fully built review workflow system into
          the editor itself rather than requiring back-and-forth over email.
          This was particularly valuable for multi-academy trusts where survey
          sign-off often involves multiple people.
        </p>
        <CaseStudyImage
          src="/edurio-conversation-threads.png"
          alt="Conversation threads feature for collaborative survey review"
          caption="After: Conversation threads allow stakeholders to comment on specific questions and resolve feedback collaboratively inside the editor."
        />

        <h3 id="ai-survey-creation" className="text-lg font-medium mt-12 mb-6">2.4 AI-assisted Survey Creation</h3>
        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mb-6">Problem</p>
        <p className="text-foreground leading-relaxed mb-6">
          AI adoption in education is still developing, and trust is fragile.
          Schools are cautious about what gets sent to parents, staff, and pupils
          under their name, and an AI-generated survey that feels out of their
          control can do more harm than good. My task was to make AI feel less
          intrusive and keep schools in control at every step, so the feature
          would be used rather than avoided.
        </p>

        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mt-12 mb-6">Solution</p>
        <p className="text-foreground leading-relaxed mb-6">
          Rather than treating AI as a separate tool, the assistant was
          integrated at the point where schools make key decisions: who they are
          surveying, how they want to build, and what questions to include.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          Schools can choose to create a survey using the Edurio expert library,
          generate one with AI, or build manually. The assistant entry point was
          designed as a clear choice between three paths, so schools always
          understood what they were getting into before starting.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          When using AI, the system generates a full survey structure with
          modules and questions that can be reviewed and edited before
          committing. For schools adding questions manually, a smart suggestion
          detects when a typed question closely matches an expert benchmarked
          version and surfaces it inline, nudging schools toward higher quality
          data without interrupting the flow.
        </p>
        <CaseStudyImage
          src="/edurio-ai-entry-point.png"
          alt="Smart question suggestion surfacing an expert benchmarked version inline"
          caption="Smart suggestion: when a manually typed question matches an expert benchmarked version, it is surfaced inline without interrupting the flow."
        />
        <CaseStudyImage
          src="/edurio-ai-creation-paths.png"
          alt="Survey creation path selection screen"
          caption="The entry point presenting three clear paths: Edurio expert library, AI generation, or manual build."
        />
        <CaseStudyImage
          src="/edurio-ai-question-suggestion.png"
          alt="AI-generated survey structure with modules and questions ready to review"
          caption="AI generates a full survey structure with modules and questions that can be reviewed and edited before committing."
        />

        <h3 id="section-results" className="text-lg font-medium mt-12 mb-6">2.5 Results</h3>
        <p className="text-foreground leading-relaxed mb-6">
          After the redesigned survey editor launched, the Product Manager
          reported a 2x increase in survey usage. Schools were completing the
          survey design process independently, where previously they had dropped
          off mid-flow or needed support from the Edurio team to finish.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          Conversation threads were piloted with schools during testing and
          received positively. Teams that had previously coordinated survey
          sign-off over email were using the feature to review and resolve
          feedback directly inside the editor, reducing the back-and-forth
          involved in getting a survey approved and launched.
        </p>
        <p className="text-foreground leading-relaxed">
          The AI survey creation feature gave the product team a trusted
          foundation to build on. By designing the experience around school
          control and transparency from the start, it established a pattern the
          team could extend confidently as AI capabilities in the product
          continued to grow.
        </p>
      </section>

      <section className="mb-20">
        <h2 id="section-03" className="text-2xl font-medium mb-2">03. Respondent Experience</h2>
        <p className="text-muted text-sm mb-10">Designing for the respondent, mobile first</p>

        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mb-6">Problem</p>
        <p className="text-foreground leading-relaxed mb-6">
          While the admin experience serves school leaders and staff, the
          survey-taking experience serves a completely different audience:
          parents, pupils, and teaching staff completing surveys on their own
          devices, often on mobile. Respondents have no product context, no
          training, and no reason to stay if the experience feels confusing.
          No mobile experience existed at the time, and customer complaints were
          mounting: respondents were dropping off on small screens, and a
          mobile-first experience had become a clear product requirement.
        </p>

        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mt-12 mb-6">Solution</p>

        <CaseStudyImage
          src="/edurio-respondent-mobile-new.png"
          alt="Respondent survey mobile experience"
          caption="Mobile: The assigned survey cover screen, question flow, and completion screen designed for mobile-first use."
        />
        <CaseStudyImage
          src="/edurio-respondent-mobile.png"
          alt="Respondent survey experience on mobile"
          caption="Mobile: The survey cover screen, question flow, and completion screen designed for mobile-first use."
        />
        <p className="text-foreground leading-relaxed mb-6">
          I designed the full respondent journey as a mobile-first experience.
          The assigned survey cover screen establishes trust immediately,
          showing the school's branding, a clear survey title, estimated
          completion time, and a single prominent CTA. The question flow uses a
          clean single-question-per-screen pattern on mobile, reducing cognitive
          load and preventing the wall-of-questions experience common in survey
          tools. Progress is always visible. The completion screen closes the
          loop with a clear confirmation.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          Accessibility was a core requirement throughout. Colour combinations
          were tested against WCAG contrast ratios to ensure readability across
          all screen types. Font sizes were chosen for legibility on small
          screens without requiring users to zoom. Touch targets were sized
          generously to accommodate a range of devices and motor abilities.
          Focus states were designed to be clearly visible for keyboard and
          assistive technology users. A text-to-voice feature was also designed
          and embedded into the experience, ensuring the survey was usable for
          respondents with varying needs.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          Designing both the admin and respondent sides of the same product gave
          me full visibility of the end-to-end journey, a perspective that
          directly informed decisions on both sides.
        </p>
      </section>

      <section className="mb-20">
        <h2 id="section-04" className="text-2xl font-medium mb-2">04. Systems and Scale</h2>
        <p className="text-muted text-sm mb-10">Foundational work across the product</p>

        <p className="text-foreground leading-relaxed mb-6">
          Alongside the core product work, I designed and delivered several
          foundational pieces that now underpin how the entire Edurio product is
          built and maintained.
        </p>
        <CaseStudyImage
          src="/edurio-color-theme-new.png"
          alt="Edurio colour token library and theme system"
          caption="The colour token library and theme system, implemented directly into the codebase as the development standard."
        />
        <CaseStudyImage
          src="/edurio-fonts.png"
          alt="Edurio typography system and font decisions"
          caption="The typography system, defining font choices, sizing scale, and usage rules across the product."
        />
        <CaseStudyImage
          src="/edurio-ui-kit-components.png"
          alt="Edurio UI kit showing tables, modals, pills, buttons, and other components"
          caption="The UI kit component library covering tables, modals, pills, buttons, and other shared patterns used across the product."
        />
        <p className="text-foreground leading-relaxed mb-6">
          I established a full UI kit and design system with colour tokens and
          themes, which was implemented directly into the codebase. The
          development team now uses this as their standard reference for all new
          work, meaning design decisions made in Figma translate consistently
          into production without interpretation gaps.
        </p>
        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mt-12 mb-6">Beyond the core</p>
        <p className="text-foreground leading-relaxed mb-6">
          I also designed the user administration pages, giving school and trust
          administrators the controls they need to manage users, permissions,
          and access across their organisations. This included designing flows
          for importing users directly from MIS systems or manually via CSV
          upload, allowing schools to quickly build out their user base and
          assign surveys without depending on manual data entry or support from
          the Edurio team.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          I redesigned the survey launch experience, which varies significantly
          depending on whether a trust or school is launching, and whether
          surveys are assigned or link-based. A static screen was redesigned
          into a multi-step guided flow, so users always know where they are
          and what they are deciding, whether they are launching to one school
          or hundreds.
        </p>
        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mt-12 mb-6">Results</p>
        <p className="text-foreground leading-relaxed">
          These foundational pieces reduced inconsistencies between design and
          development and gave the team a shared language for building new
          features. Work that had previously required back-and-forth between
          designer and developer could now be resolved by referencing the system
          directly.
        </p>
      </section>

      <section className="mb-20">
        <h2 id="section-05" className="text-2xl font-medium mb-2">05. My Process</h2>

        <p className="text-muted text-sm mb-10">How I approach design work</p>

        <p className="text-foreground leading-relaxed mb-6">
          I started every project by understanding the problem fully before
          opening Figma. I asked questions, spoke to the right people in the
          team, and where needed audited what already existed, reviewing live
          screens, existing flows, and identifying what was broken and why. This
          became the foundation everything else was built on.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          Once the problem was clear I designed detailed journeys and flows for
          every interaction involved for the feature. I built the UI component
          library first so everything that followed was consistent by default.
          Screens were built from components, not the other way around.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          Each week I presented progress to stakeholders, walked through the
          reasoning behind my decisions, and took their feedback into the next
          iteration. Once we were aligned I produced a final design and a
          separate dev-ready version with full annotations, specs, and component
          documentation ready for build.
        </p>
        <p className="text-foreground leading-relaxed">
          Where it helped I created interactive prototypes for testing or
          stakeholder sign-off. Before handing anything to developers I
          documented everything clearly, annotated designs, interaction notes,
          and component specs.
        </p>
      </section>

      <section className="mb-20">
        <h2 id="reflection" className="text-2xl font-medium mb-6">Reflection</h2>
        <p className="text-foreground leading-relaxed mb-6">
          Working embedded in a product team as a fractional designer over 18
          months is a fundamentally different experience from project-based
          work. UX design needs both thinking space and doing space, and working
          consistently with the same team is where that accumulates. You build
          a deep understanding of the product, its users, and the reasoning
          behind decisions that would take months to explain to someone brought
          in fresh.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          Having seven years of frontend development experience alongside design
          also made a real difference. Understanding how things get built meant
          I could make design decisions that were not just user-centred but
          technically feasible, and have informed conversations with developers
          rather than handing over designs and later running into feasibility
          problems.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          I made it a habit to ask questions and understand problems fully
          before opening Figma, and to speak to the right people in the team to
          draw out knowledge that doesn't always surface in a brief. When I
          presented decisions with clear logic behind them, I earned the trust
          to push back on requirements that were not user friendly, and my
          reasoning was taken seriously.
        </p>
        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mt-12 mb-6">Navigating constraints</p>
        <p className="text-foreground leading-relaxed mb-6">
          Not every decision was straightforward. At one point a brand font was
          required across the product, but it had accessibility limitations that
          made it unsuitable for body text on screen. Rather than accepting the
          constraint fully or rejecting it outright, I raised the concern,
          explained the accessibility impact, and was successful in coming to a
          decision with the company head: the font would be used for headings
          only, where it worked well, and a more accessible typeface would be
          used for body text. That kind of negotiation allowed me to follow my
          principles and design for accessibility while also keeping the
          stakeholders happy.
        </p>
        <p className="text-foreground leading-relaxed mb-6">
          The biggest lesson was the value of the audit before the design. On
          all projects, spending time documenting what was wrong before opening
          Figma meant every subsequent decision had a clear rationale. It also
          meant I could present a direction to stakeholders with confidence
          rather than asking for permission.
        </p>
        <p className="text-[#7b8fa1] text-xs uppercase tracking-widest font-bold mt-12 mb-6">How we worked</p>
        <p className="text-foreground leading-relaxed mb-6">
          The engagement ran at 10 to 14 hours of design work per week depending
          on project phase, with an additional 1 to 2 hours reserved for
          discussions and reviews. This rhythm meant both sides were making
          informed decisions and balancing business priorities with user needs.
        </p>
      </section>
    </article>
    <TableOfContents items={tocItems} />
    </div>
  );
}
