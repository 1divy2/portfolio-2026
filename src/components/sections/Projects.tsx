import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { PROJECTS, SKILL_COLORS } from "@/constants/portfolio";
import { SectionLabel } from "./About";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section 
      id="work" 
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <SectionLabel index="03" label="Cartridges" />
      <div className="mt-8 flex items-end justify-between gap-4">
        <h2 className="font-display text-3xl sm:text-4xl">Featured work.</h2>
        <span className="hidden font-mono text-xs uppercase text-muted-foreground sm:block">
          {PROJECTS.length} save slots
        </span>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onMouseEnter={() => setHoveredProject(p.slug)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-transform hover:-translate-y-1"
          >
            {/* Cartridge top */}
            <div
              className="absolute inset-x-0 top-0 h-1.5"
              style={{ background: SKILL_COLORS[p.color] }}
            />
            <div className="flex items-start justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Slot 0{i + 1} · {p.year}
                </div>
                <h3 className="mt-2 font-display text-xl text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              </div>
              <div
                className="grid h-10 w-10 place-items-center rounded-md font-display text-xs text-primary-foreground"
                style={{ background: SKILL_COLORS[p.color] }}
              >
                {p.title.charAt(0)}
              </div>
            </div>

            <div className="mt-5 grid gap-3 rounded-xl border border-border bg-background/60 p-4 text-sm">
              <Row k="Problem" v={p.problem} />
              <Row k="Impact" v={p.impact} />
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {p.placeholder ? (
                <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Live link · coming soon
                </span>
              ) : (
                <>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-foreground px-3 py-1.5 font-display text-[10px] uppercase text-background"
                    >
                      Live <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-display text-[10px] uppercase text-foreground"
                    >
                      Repo <Github className="h-3 w-3" />
                    </a>
                  )}
                </>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {hoveredProject && PROJECTS.find((p) => p.slug === hoveredProject)?.previewMedia && (
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            src={PROJECTS.find((p) => p.slug === hoveredProject)!.previewMedia}
            alt="Project Preview"
            className="pointer-events-none fixed z-50 hidden h-48 w-80 rounded-xl border border-border object-cover shadow-2xl md:block"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y + 20,
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="w-16 shrink-0 font-mono text-[10px] uppercase text-muted-foreground">
        {k}
      </span>
      <span className="text-foreground">{v}</span>
    </div>
  );
}
