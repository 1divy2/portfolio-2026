import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useNavigate } from "@tanstack/react-router";
import { useTheme } from "./theme-provider";
import { Moon, Sun, Download, FileText, Briefcase, Mail, User } from "lucide-react";
import { PROFILE } from "@/constants/portfolio";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh] bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={() => setOpen(false)} />
      <Command 
        className="relative z-50 w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card text-popover-foreground shadow-2xl"
        loop
      >
        <Command.Input 
          autoFocus 
          placeholder="Type a command or search..." 
          className="w-full border-b border-border bg-transparent px-4 py-4 text-sm outline-none placeholder:text-muted-foreground"
        />
        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>
          
          <Command.Group heading="Navigation" className="px-2 py-2 text-xs font-medium text-muted-foreground">
            <Command.Item onSelect={() => { navigate({ to: "/" }); setTimeout(() => { window.location.hash = "#about" }, 100); setOpen(false); }} className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
              <User className="h-4 w-4" /> Go to About
            </Command.Item>
            <Command.Item onSelect={() => { navigate({ to: "/" }); setTimeout(() => { window.location.hash = "#skills" }, 100); setOpen(false); }} className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
              <FileText className="h-4 w-4" /> Go to Skills
            </Command.Item>
            <Command.Item onSelect={() => { navigate({ to: "/" }); setTimeout(() => { window.location.hash = "#work" }, 100); setOpen(false); }} className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
              <Briefcase className="h-4 w-4" /> Go to Work
            </Command.Item>
            <Command.Item onSelect={() => { navigate({ to: "/" }); setTimeout(() => { window.location.hash = "#contact" }, 100); setOpen(false); }} className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
              <Mail className="h-4 w-4" /> Go to Contact
            </Command.Item>
            <Command.Item onSelect={() => { navigate({ to: "/blog" }); setOpen(false); }} className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
              <FileText className="h-4 w-4 text-mint" /> Read Blog
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions" className="px-2 py-2 text-xs font-medium text-muted-foreground">
            <Command.Item onSelect={() => { window.open(PROFILE.resumeUrl, "_blank"); setOpen(false); }} className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
              <Download className="h-4 w-4" /> Download Resume
            </Command.Item>
            <Command.Item onSelect={() => { setTheme(theme === "light" ? "dark" : "light"); setOpen(false); }} className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent hover:text-accent-foreground">
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />} 
              Toggle Theme
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
