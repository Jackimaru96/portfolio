import Link from "next/link";
import { education, experience } from "@/content/experience";
import { caseStudiesFor } from "@/content/caseStudies";

function formatDate(value: string) {
  if (value === "present") return "Present";
  if (value === "concurrent") return "Concurrent";
  const [year, month] = value.split("-");
  if (!month) return year;
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Timeline() {
  return (
    <div className="space-y-6">
      {experience.map((entry) => {
        const linked = caseStudiesFor(entry.id);
        return (
          <div
            key={entry.id}
            className="rounded border border-border bg-card p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold">
                {entry.role} · {entry.org}
              </h3>
              <p className="font-mono text-xs text-muted">
                {formatDate(entry.start)} – {formatDate(entry.end)}
              </p>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {entry.impact.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            {linked.length > 0 && (
              <p className="mt-3 font-mono text-xs">
                {linked.map((cs, i) => (
                  <span key={cs.slug}>
                    {i > 0 && " · "}
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="text-accent hover:underline"
                    >
                      {cs.title} →
                    </Link>
                  </span>
                ))}
              </p>
            )}
          </div>
        );
      })}
      {education.map((entry) => (
        <div
          key={entry.id}
          className="rounded border border-dashed border-border p-5"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold">{entry.institution}</h3>
            <p className="font-mono text-xs text-muted">
              {entry.start} – {entry.end}
            </p>
          </div>
          <p className="mt-2 text-sm text-muted">{entry.credential}</p>
        </div>
      ))}
    </div>
  );
}
