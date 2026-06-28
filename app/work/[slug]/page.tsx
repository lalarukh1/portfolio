import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PasswordGate from "@/components/PasswordGate";
import { getCaseStudyBySlug, caseStudies } from "@/lib/caseStudies";
import EdurioSurveyContent from "./content/EdurioSurveyContent";
import TAPContent from "./content/TAPContent";
import GCSEPodContent from "./content/GCSEPodContent";

type Props = {
  params: Promise<{ slug: string }>;
};

const contentBySlug: Record<string, React.ReactNode> = {
  "edurio-survey-redesign": <EdurioSurveyContent />,
  "tap": <TAPContent />,
  "gcsepod": <GCSEPodContent />,
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Not Found" };
  }

  return {
    title: `${study.title} | Lala Rukh`,
    description: study.context,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const content = contentBySlug[slug];

  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav />
      <main className="flex-1 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/work"
            className="inline-block mt-8 text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors duration-200"
          >
            ← Work
          </Link>
          <PasswordGate storageKey={`case-study-${slug}`}>
            {content}
          </PasswordGate>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
