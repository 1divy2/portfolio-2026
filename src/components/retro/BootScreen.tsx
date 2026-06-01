import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LINES = ["DIVY.DEV BOOT", "loading ................. OK", "ready to build .......... ✓"];

export function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [pressed, setPressed] = useState(false);

  // Boot text animation only
  useEffect(() => {
    if (step >= LINES.length) return;

    const t = setTimeout(() => setStep((s) => s + 1), 110);
    return () => clearTimeout(t);
  }, [step]);

  // Allow keyboard start
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (step >= LINES.length && (e.key === "Enter" || e.key === " ")) {
        handlePress();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, pressed]);

  function handlePress() {
    if (pressed || step < LINES.length) return;

    setPressed(true);
    setTimeout(onComplete, 280);
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: pressed ? 0 : 1,
        scale: pressed ? 1.06 : 1,
      }}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="absolute inset-0 bg-pixel-grid opacity-40" />

      <div className="relative w-[min(560px,92vw)]">
        <div className="shell-surface rounded-3xl p-5 sm:p-7">
          <div className="flex items-center justify-between px-1 pb-3 text-[10px] font-display uppercase text-shell-deep">
            <span>● ● ●</span>
            <span>DIVY-CONSOLE</span>
            <span className="animate-blink">REC</span>
          </div>

          <div className="screen-surface relative overflow-hidden rounded-xl p-5 sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-50" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-white/40 to-transparent" />

            <pre className="font-mono text-[11px] leading-6 sm:text-xs text-screen-ink">
              {LINES.slice(0, step).map((l, i) => (
                <div key={i}>&gt; {l}</div>
              ))}

              {step < LINES.length && (
                <div>
                  &gt; <span className="animate-blink">█</span>
                </div>
              )}
            </pre>

            {step >= LINES.length && (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handlePress}
                className="mt-6 inline-flex items-center gap-2 rounded-md border-2 border-screen-ink bg-screen-ink px-4 py-2 font-display text-[10px] uppercase text-screen press-shadow animate-pulse"
              >
                ▶ Press Start
              </motion.button>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between px-1 text-[10px] font-display uppercase text-shell-deep">
            <span>◀ ▶ ▲ ▼</span>
            <span>A · B</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
