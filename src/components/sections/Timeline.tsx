import { motion } from "framer-motion";
import { TIMELINE } from "@/constants/portfolio";
import { SectionLabel } from "./About";

export function Timeline() {
  return (
    <section id="timeline" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionLabel index="04" label="Build Log" />
      <h2 className="mt-8 font-display text-3xl sm:text-4xl">The journey so far.</h2>

      <ol className="relative mt-12 space-y-10 border-l border-dashed border-border pl-8">
        {TIMELINE.map((t, i) => (
          <motion.li
            key={t.year}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative"
          >
            <span className="absolute -left-[41px] grid h-6 w-6 place-items-center rounded-full border-2 border-mint bg-background font-display text-[9px] text-mint">
              ★
            </span>
            <div className="font-mono text-[11px] uppercase text-muted-foreground">{t.year}</div>
            <div className="mt-1 font-display text-lg text-foreground">{t.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
