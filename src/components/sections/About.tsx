import { motion } from "framer-motion";
import { ABOUT } from "@/constants/portfolio";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionLabel index="01" label="About" />
      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl leading-tight sm:text-4xl"
        >
          {ABOUT.heading}
        </motion.h2>
        <div>
          <div className="space-y-4 text-muted-foreground sm:text-lg">
            {ABOUT.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {ABOUT.pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card/60 p-4">
                <div className="font-display text-xs uppercase text-mint">{p.title}</div>
                <div className="mt-2 text-sm text-foreground">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase text-muted-foreground">
      <span className="rounded-sm bg-secondary px-1.5 py-0.5 text-foreground">{index}</span>
      <span className="h-px w-8 bg-border" />
      <span className="tracking-widest">{label}</span>
    </div>
  );
}
