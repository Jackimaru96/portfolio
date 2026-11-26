import Link from "next/link";
import type { CaseStudy } from "@/content/types";

export function CaseStudyCard({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  return (
    <div className="flex flex-col justify-between rounded border border-border bg-card p-6">
      <div>
        <p className="font-mono text-xs tracking-wide text-accent">
          {String(index).padStart(2, "0")} · {caseStudy.category}
        </p>
        <h3 className="mt-3 text-xl font-semibold">{caseStudy.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {caseStudy.summary}
        </p>
        <p className="mt-4 rounded border border-border bg-background px-3 py-2 font-mono text-xs text-muted">
          result: {caseStudy.result}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium hover:text-accent"
      >
        Read case study <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
