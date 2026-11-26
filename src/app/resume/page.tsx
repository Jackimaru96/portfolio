import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { PrintButton } from "@/components/PrintButton";
import { positioning } from "@/content/positioning";
import { experience, education } from "@/content/experience";
import { resume } from "@/content/resume";

export const metadata: Metadata = {
  title: "Résumé — Jack Chen",
  description: resume.summary,
};

function formatDate(value: string) {
  if (value === "present") return "Present";
  if (value === "concurrent") return "Concurrent";
  const [year, month] = value.split("-");
  if (!month) return year;
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function ResumePage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="no-print">
        <SiteNav />
      </div>

      <main className="flex-1 px-6 py-16 sm:px-10 print:px-0 print:py-0">
        <div className="mx-auto max-w-3xl">
          <div className="no-print mb-10 flex flex-wrap gap-4">
            <PrintButton />
            <a
              href="/resume.pdf"
              className="rounded border border-border px-5 py-3 text-sm font-medium hover:border-foreground"
            >
              Download résumé (PDF) →
            </a>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            {positioning.name}
          </h1>
          <p className="mt-1 font-mono text-sm text-muted">
            Product Engineering · AI-Enabled Product Development · Technical
            Pre-Sales
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            {positioning.contact.email} · {positioning.contact.linkedin} ·{" "}
            {positioning.contact.github}
          </p>

          <p className="mt-6 text-base leading-relaxed">{resume.summary}</p>

          <h2 className="mt-10 font-mono text-xs tracking-wide text-accent">
            EXPERIENCE
          </h2>
          <div className="mt-4 space-y-6">
            {experience.map((entry) => (
              <div key={entry.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">
                    {entry.role} — {entry.org}
                  </h3>
                  <p className="font-mono text-xs text-muted">
                    {formatDate(entry.start)} – {formatDate(entry.end)}
                  </p>
                </div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
                  {entry.impact.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-mono text-xs tracking-wide text-accent">
            EDUCATION
          </h2>
          <div className="mt-4 space-y-2">
            {education.map((entry) => (
              <div key={entry.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">
                    {entry.institution}
                  </h3>
                  <p className="font-mono text-xs text-muted">
                    {entry.start} – {entry.end}
                  </p>
                </div>
                <p className="text-sm text-muted">{entry.credential}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-mono text-xs tracking-wide text-accent">
            SKILLS
          </h2>
          <div className="mt-4 space-y-4">
            {resume.skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold">{group.category}</h3>
                <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-mono text-xs tracking-wide text-accent">
            LANGUAGES
          </h2>
          <p className="mt-2 text-sm text-muted">
            {resume.languages.join(", ")}
          </p>
        </div>
      </main>
    </div>
  );
}
