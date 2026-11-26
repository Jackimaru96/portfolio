import { positioning } from "@/content/positioning";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-dark-bg text-dark-fg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="font-mono text-xs tracking-wide text-accent">
            05 / contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            {positioning.contactHeadline}
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-6 font-mono text-sm">
          <a
            href={`mailto:${positioning.contact.email}`}
            className="hover:text-accent"
          >
            {positioning.contact.email}
          </a>
          <a
            href={positioning.contact.linkedin}
            className="hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href={positioning.contact.github}
            className="hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-8 font-mono text-xs text-dark-fg/50 sm:px-10">
        {positioning.wordmark}
      </div>
    </footer>
  );
}
