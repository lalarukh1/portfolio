import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "About | Lala Rukh — UX Designer",
  description: "UX designer and frontend developer with 8 years of experience in EdTech. Specialising in interaction design, UX audits, information architecture, and Figma-to-code handoff.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav />
      <main className="flex-1 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="pt-16 pb-32">
            <Link
              href="/"
              className="inline-block mt-8 mb-10 text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors duration-200"
            >
              ← Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-medium mb-16">About</h1>

            <section className="mb-16">
              <div className="flex gap-12 items-start">
                <div className="flex-1">
                  <p className="text-foreground text-xl leading-relaxed mb-6">
                    I'm a UX designer and frontend developer with 8 years of
                    experience working at the intersection of design and engineering,
                    mostly in EdTech. I've spent that time designing products for
                    teachers, school leaders, and students: learning platforms,
                    survey tools, evaluation dashboards, and AI-powered features.
                  </p>
                  <p className="text-foreground text-xl leading-relaxed mb-6">
                    I work best when I'm embedded in a product team rather than
                    parachuted in. I care about the whole journey, from understanding
                    why something is broken to shipping something that holds up over
                    time. I can take work from research and flows all the way through
                    to production-ready UI, and I know how it gets built because I've
                    built it myself.
                  </p>
                  <p className="text-foreground text-xl leading-relaxed">
                    Currently open to embedded UX partnerships with EdTech teams. Get in touch at{" "}
                    <a
                      href="mailto:lalarukh.1992@outlook.com"
                      className="text-foreground border-b border-muted hover:border-foreground transition-colors duration-200"
                    >
                      lalarukh.1992@outlook.com
                    </a>
                    .
                  </p>
                </div>
                <div className="w-64 shrink-0 flex flex-col gap-4">
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src="/lala-rukh.jpg"
                      alt="Lala Rukh"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-medium mb-6">What I do</h2>
              <ul className="space-y-3">
                {[
                  "Heuristic evaluation and UX audits",
                  "Information architecture and user flows",
                  "Interaction and interface design",
                  "Responsive and mobile-first design",
                  "Figma prototyping and stakeholder presentation",
                  "User interviews and usability testing",
                ].map((item) => (
                  <li key={item} className="text-muted leading-relaxed flex gap-4">
                    <span className="text-border select-none" aria-hidden="true">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-6">Get in touch</h2>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:lalarukh.1992@outlook.com"
                  className="text-foreground text-sm uppercase tracking-widest border-b border-foreground pb-px hover:text-muted hover:border-muted transition-colors duration-200 w-fit"
                >
                  lalarukh.1992@outlook.com
                </a>
                <a
                  href="https://www.linkedin.com/in/lala-rukh-9019a6144/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground text-sm uppercase tracking-widest border-b border-foreground pb-px hover:text-muted hover:border-muted transition-colors duration-200 w-fit"
                >
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
