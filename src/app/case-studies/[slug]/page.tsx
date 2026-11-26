import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { ContactFooter } from "@/components/ContactFooter";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.title} — Jack Chen`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <SiteNav />

      <article className="flex-1 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#work"
            className="font-mono text-sm text-muted hover:text-foreground"
          >
            ← back to case studies
          </Link>

          <p className="mt-8 font-mono text-xs tracking-wide text-accent">
            {caseStudy.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {caseStudy.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {caseStudy.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <p className="rounded border border-border bg-card px-3 py-2 font-mono text-xs text-muted">
              result: {caseStudy.result}
            </p>
            {caseStudy.repoUrl && (
              <a
                href={caseStudy.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-accent hover:underline"
              >
                View repo ↗
              </a>
            )}
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-5 text-base leading-relaxed">
            {caseStudy.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded border border-border bg-card p-6">
            <p className="font-mono text-xs tracking-wide text-accent">
              engineering highlights
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {caseStudy.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent" aria-hidden>
                    →
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
            >
              Get in touch →
            </Link>
            <Link
              href="/#work"
              className="rounded border border-border px-5 py-3 text-sm font-medium hover:border-foreground"
            >
              More case studies
            </Link>
          </div>
        </div>
      </article>

      <ContactFooter />
    </div>
  );
}
