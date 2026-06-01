import { Github, Linkedin, Twitter } from "lucide-react";
import { PROFILE } from "@/constants/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 font-display text-xs">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-mint text-primary-foreground text-[10px]">
            D
          </span>
          divy<span className="text-mint">.dev</span>
          <span className="ml-3 text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Social href={PROFILE.github} label="GitHub">
            <Github className="h-4 w-4" />
          </Social>
          <Social href={PROFILE.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </Social>
          <Social href={PROFILE.twitter} label="Twitter">
            <Twitter className="h-4 w-4" />
          </Social>
        </div>
        <div
          title="↑ ↑ ↓ ↓ ← → ← → B A"
          className="cursor-help font-mono text-[10px] uppercase text-muted-foreground"
        >
          made with ♥ &amp; pixels
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </a>
  );
}
