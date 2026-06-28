export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  narrative: string[];
  year: string;
  role: string;
  image?: string;
  imagePosition?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "edurio-survey-redesign",
    title: "Edurio: Redesigning the Core Product Experience",
    context: "EdTech SaaS · UX Designer · 2025 to 2026",
    image: "/portfolio-mockup-laptop.jpg",
    narrative: [
      "Edurio is a school evaluation platform used by 3,000+ schools across Europe. Over 18 months I redesigned four interconnected parts of the platform: survey discovery and management, the survey design and collaboration experience, the respondent mobile journey, and the survey launch flow. The work resulted in a 2x increase in survey usage after launch.",
    ],
    year: "2025",
    role: "UX Designer",
  },
  {
    slug: "tap",
    title: "TAP: Bringing UX Thinking to a Vibe-Coded Product",
    context: "EdTech SaaS · UX Designer · 2026",
    image: "/tap-mockup-laptop.jpg",
    narrative: [
      "A trust assessment platform built by a product team using AI-assisted tools, without a UX designer. The team considered the screens close to final. I conducted a full UX audit, expanded the scope with team agreement, and redesigned the product around the actual job trust users come to do.",
    ],
    year: "2025",
    role: "UX Designer",
  },
  {
    slug: "gcsepod",
    title: "GCSEPod: Building a Design Language from the Ground Up",
    context: "EdTech · Frontend Developer and UX Designer · 2022",
    image: "/gcsepod-mockup-laptop.jpg",
    imagePosition: "center",
    narrative: [
      "A GCSE revision platform used by hundreds of thousands of students and teachers, built without a designer. I stepped into design work early in my time there, challenged a marketing-led colour direction with a Figma-built counter-proposal, designed a two-theme system that was adopted as the new product direction, and translated the entire design system into CSS tokens applied across the codebase.",
    ],
    year: "2022",
    role: "Frontend Developer and UX Designer",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
