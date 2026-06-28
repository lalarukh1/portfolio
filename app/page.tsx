import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Lala Rukh — UX Designer",
  description: "UX designer with 8 years across design and frontend, specialising in EdTech product experiences. Interaction design, information architecture, Figma, and dev handoff.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav />
      <main className="flex-1 flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto w-full">
          <section className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-medium leading-tight mb-8">
              Lala Rukh
            </h1>
            <p className="text-muted text-lg mb-10 tracking-wide">
              UX Designer · EdTech · 8 years across design and frontend
            </p>
            <p className="text-foreground text-xl leading-relaxed mb-12">
              I help EdTech teams ship better product experiences, from research and information architecture through to dev handoff-ready UI. I've worked embedded in teams building GCSE learning platforms and school and trust evaluation tools used across Europe, with results including a 2x increase in survey usage after launch.
            </p>
            <Link
              href="/work"
              className="text-sm uppercase tracking-widest text-foreground border-b border-foreground pb-px hover:text-muted hover:border-muted transition-colors duration-200"
            >
              View Work
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
