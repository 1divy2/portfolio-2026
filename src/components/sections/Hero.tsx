import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { PROFILE } from "@/constants/portfolio";

const stats = [
  { label: "Status", value: "Open" },
  { label: "Focus", value: "Full Stack" },
  { label: "Mode", value: "Build" },
];

export function Hero() {
  const [downloading, setDownloading] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-pixel-grid opacity-30" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-mint/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-16 pb-24 sm:px-6 md:grid-cols-[1.2fr_1fr] md:pt-24 md:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-mint"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint animate-blink" />
            Available for new quests
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
          >
            {PROFILE.name}
            <span className="block text-mint text-shadow-pixel">Ready to build.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {PROFILE.role} crafting fast, beautiful, production-grade software. Type-safe by
            default. Animated with intent. Shipped on time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="press-shadow group inline-flex items-center gap-2 rounded-lg bg-mint px-5 py-3 font-display text-[11px] uppercase text-primary-foreground transition-transform"
            >
              Explore Work{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => {
                setDownloading(true);
                setTimeout(() => {
                  setDownloading(false);
                  window.open(PROFILE.resumeUrl, "_blank");
                }, 1200);
              }}
              disabled={downloading}
              className="press-shadow inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-display text-[11px] uppercase text-foreground disabled:opacity-70"
            >
              {downloading ? (
                <Sparkles className="h-4 w-4 animate-spin text-mint" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {downloading ? "Extracting..." : "Resume"}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-3 font-display text-[11px] uppercase text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </motion.div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card/60 px-4 py-3">
                <div className="font-display text-2xl text-foreground">{s.value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Console mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm md:rotate-2"
        >
          <div className="shell-surface rounded-[2rem] p-5 animate-float">
            <div className="flex items-center justify-between px-1 pb-3 font-display text-[9px] uppercase text-shell-deep">
              <span>● POWER</span>
              <span>DIVY · DEV</span>
            </div>
            <div className="screen-surface relative overflow-hidden rounded-2xl p-5">
              <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-40" />
              <div className="font-display text-[10px] uppercase text-screen-ink/70">
                Now Playing
              </div>
              <div className="mt-2 font-display text-lg text-screen-ink">
                Building
                <br />
                the future.
              </div>
              <div className="mt-5 space-y-2 font-mono text-[10px] text-screen-ink">
                <Bar label="HP" value={92} />
                <Bar label="MP" value={78} />
                <Bar label="XP" value={64} />
              </div>
              <div className="mt-5 inline-flex items-center gap-1 rounded-md bg-screen-ink px-2 py-1 font-display text-[9px] uppercase text-screen">
                <Sparkles className="h-3 w-3" /> Ready
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between px-2">
              <DPad />
              <div className="flex gap-2">
                <Btn label="B" tone="coral" />
                <Btn label="A" tone="mint" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-5">{label}</span>
      <div className="relative h-2 flex-1 overflow-hidden rounded-sm border border-screen-ink/40 bg-screen-ink/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-full bg-screen-ink"
        />
      </div>
    </div>
  );
}

function DPad() {
  return (
    <div className="relative h-14 w-14">
      <div className="absolute left-1/2 top-0 h-5 w-4 -translate-x-1/2 rounded-sm bg-shell-deep" />
      <div className="absolute bottom-0 left-1/2 h-5 w-4 -translate-x-1/2 rounded-sm bg-shell-deep" />
      <div className="absolute left-0 top-1/2 h-4 w-5 -translate-y-1/2 rounded-sm bg-shell-deep" />
      <div className="absolute right-0 top-1/2 h-4 w-5 -translate-y-1/2 rounded-sm bg-shell-deep" />
    </div>
  );
}

function Btn({ label, tone }: { label: string; tone: "mint" | "coral" }) {
  return (
    <div
      className="grid h-9 w-9 place-items-center rounded-full font-display text-[10px] text-primary-foreground"
      style={{
        backgroundColor: tone === "mint" ? "var(--mint)" : "var(--coral)",
        boxShadow: "0 3px 0 0 oklch(0 0 0 / 0.2)",
      }}
    >
      {label}
    </div>
  );
}
