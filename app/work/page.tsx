import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { caseStudies } from "@/lib/caseStudies";

export const metadata = {
  title: "Work | Lala Rukh — UX Designer",
  description: "Case studies in UX design, interaction design, and design systems for EdTech SaaS products used across the UK and Europe.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav />
      <main className="flex-1 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto pt-16 pb-32">
          <Link
            href="/"
            className="inline-block mt-8 mb-10 text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors duration-200"
          >
            ← Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Work</h1>
          <p className="text-muted text-lg leading-relaxed mb-16">
            Selected case studies from embedded EdTech product work. Each one is password protected due to confidentiality. Get in touch for access.{" "}
            <a
              href="mailto:lalarukh.1992@outlook.com"
              className="text-foreground border-b border-muted hover:border-foreground transition-colors duration-200"
            >
              lalarukh.1992@outlook.com
            </a>
          </p>
          <div className="flex flex-col gap-4">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="block bg-surface border border-border hover:border-muted transition-colors duration-200 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-stretch">
                  <div className="relative md:w-80 lg:w-[450px] shrink-0 h-48 md:h-auto">
                    {study.image ? (
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className={`object-cover object-${study.imagePosition ?? "left"}`}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-border" />
                    )}
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <p className="text-xs uppercase tracking-widest text-muted mb-3">
                      {study.context}
                    </p>
                    <h2 className="text-xl font-medium mb-4">{study.title}</h2>
                    <div className="flex flex-col gap-3">
                      {study.narrative.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-muted text-sm leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
