import { Battery, Signal, Wifi } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "../ThemeToggle";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-mint text-primary-foreground font-display text-[10px] shadow-[0_0_20px_-4px_var(--mint)]">
            D
          </span>
          <span className="font-display text-sm tracking-tight">
            divy<span className="text-mint">.dev</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-muted-foreground">
          <ThemeToggle />
          <span className="hidden items-center gap-1 sm:flex">
            <Signal className="h-3.5 w-3.5" /> 5
          </span>
          <span className="hidden items-center gap-1 sm:flex">
            <Wifi className="h-3.5 w-3.5" />
          </span>
          <span className="flex items-center gap-1">
            <Battery className="h-3.5 w-3.5 text-mint" /> 98%
          </span>
        </div>
      </div>
    </header>
  );
}
