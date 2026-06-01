import { motion } from "framer-motion";
import { Heart, Mic, Star, Trophy } from "lucide-react";
import { BADGES, SKILL_COLORS, SKILL_GROUPS } from "@/constants/portfolio";
import { SectionLabel } from "./About";

const ICONS = { Trophy, Star, Mic, Heart } as const;

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionLabel index="02" label="Skill Tree" />
      <h2 className="mt-8 font-display text-3xl sm:text-4xl">Stats &amp; abilities.</h2>
      <p className="mt-3 max-w-xl text-muted-foreground">
        An honest XP map. Numbers grow with the work.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {SKILL_GROUPS.map((g) => (
          <div key={g.label} className="rounded-2xl border border-border bg-card/60 p-5">
            <div className="flex items-center justify-between">
              <span className="font-display text-xs uppercase text-foreground">{g.label}</span>
              <span className="font-mono text-[10px] uppercase text-muted-foreground">
                {g.skills.length} skills
              </span>
            </div>
            <div className="mt-5 space-y-4">
              {g.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{s.name}</span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {s.xp}/{s.cap}
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.xp}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: SKILL_COLORS[s.color] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {BADGES.map((b) => {
          const Icon = ICONS[b.icon as keyof typeof ICONS];
          return (
            <div
              key={b.label}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm transition-transform hover:-translate-y-0.5"
            >
              <Icon className="h-3.5 w-3.5 text-sun" />
              <span className="font-mono text-xs uppercase tracking-wide">{b.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
