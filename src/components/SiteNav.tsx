import Link from "next/link";
import { positioning } from "@/content/positioning";

const links = [
  { href: "/#work", label: "/work" },
  { href: "/#about", label: "/about" },
  { href: "/resume", label: "/resume" },
  { href: "/#contact", label: "/contact" },
];

export function SiteNav() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-medium"
        >
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          {positioning.wordmark}
        </Link>
        <ul className="hidden items-center gap-6 font-mono text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <details className="sm:hidden">
          <summary className="list-none cursor-pointer text-xl leading-none">
            ☰
          </summary>
          <ul className="absolute right-6 mt-3 flex flex-col gap-3 rounded border border-border bg-card p-4 font-mono text-sm text-muted shadow-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
