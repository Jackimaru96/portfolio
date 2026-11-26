import { experience } from "@/content/experience";

const stack = [
  "TypeScript · React/Next.js · LLM APIs",
  "ESP32 · C++ · CAD · FDM printing",
];

export function TerminalPanel() {
  return (
    <div className="overflow-hidden rounded border border-border bg-dark-bg font-mono text-sm text-dark-fg">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-dark-fg/60">
        <span>~/bench-log.txt</span>
        <span aria-hidden>•••</span>
      </div>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-accent">$ whoami</p>
          <p>product engineer · ex-frontend · maker</p>
        </div>
        <div>
          <p className="text-accent">$ cat career.log</p>
          {experience.map((entry) => (
            <p key={entry.id}>
              [{entry.start === "concurrent" ? "concurrent" : entry.start.slice(0, 4)}]{" "}
              {entry.role.replace(" (Part-time)", "")} @ {entry.org}
            </p>
          ))}
        </div>
        <div>
          <p className="text-accent">$ cat stack.txt</p>
          {stack.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
