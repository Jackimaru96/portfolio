import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { CircuitPortrait } from "@/components/CircuitPortrait";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { TerminalPanel } from "@/components/TerminalPanel";
import { Timeline } from "@/components/Timeline";
import { ContactFooter } from "@/components/ContactFooter";
import { positioning } from "@/content/positioning";
import { caseStudies } from "@/content/caseStudies";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteNav />

      <section className="blueprint-grid border-b border-border px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-mono text-sm text-accent">
              {`// ${positioning.eyebrow}`}
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              {positioning.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {positioning.subhead}
            </p>

            <div className="mt-8 inline-flex flex-col gap-2 rounded border border-border bg-card px-4 py-3 font-mono text-sm">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                OPEN TO
              </span>
              <span className="text-muted">
                {positioning.openTo.map((role, i) => (
                  <span key={role}>
                    {i > 0 && " · "}
                    {role}
                  </span>
                ))}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#work"
                className="rounded bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
              >
                View case studies →
              </Link>
              <Link
                href="/resume"
                className="rounded border border-border px-5 py-3 text-sm font-medium hover:border-foreground"
              >
                Download résumé (PDF)
              </Link>
            </div>
          </div>
          <CircuitPortrait />
        </div>
      </section>

      <section id="work" className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs tracking-wide text-accent">
                02 / selected work
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Case studies</h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Each one covers the problem, the trade-offs, and what shipped.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.map((caseStudy, i) => (
              <CaseStudyCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-t border-border px-6 py-20 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-wide text-accent">
            03 / experience
          </p>
          <h2 className="mt-2 text-3xl font-semibold">Career timeline</h2>
          <div className="mt-10 max-w-3xl">
            <Timeline />
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border px-6 py-20 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-mono text-xs tracking-wide text-accent">
              04 / about
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              {positioning.aboutHeadline}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {positioning.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/resume"
                className="rounded border border-border px-5 py-3 text-sm font-medium hover:border-foreground"
              >
                Full résumé →
              </Link>
              <a
                href={`mailto:${positioning.contact.email}`}
                className="text-sm font-medium text-accent hover:underline"
              >
                Get in touch
              </a>
            </div>
          </div>
          <TerminalPanel />
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}
