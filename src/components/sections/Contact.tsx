import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { PROFILE } from "@/constants/portfolio";
import { SectionLabel } from "./About";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "a5156665-f781-41eb-a1bc-7a83ab0f8e56");
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionLabel index="05" label="Transmit" />
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">Start a quest together.</h2>
          <p className="mt-4 text-muted-foreground">
            Got a product to ship, a system to untangle, or just want to nerd out about motion
            design? Drop a line.
          </p>
          <div className="mt-8 space-y-2 font-mono text-sm">
            <div>
              <span className="text-muted-foreground">email </span>
              {PROFILE.email}
            </div>
            <div>
              <span className="text-muted-foreground">where </span>
              {PROFILE.location}
            </div>
            <div>
              <span className="text-muted-foreground">status</span>{" "}
              <span className="text-mint">● {PROFILE.available ? "Open to work" : "Booked"}</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-1"
        >
          <div className="rounded-xl bg-background/70 p-5">
            <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[11px] uppercase text-muted-foreground">
              <span>~ /divy/contact</span>
              <span className="flex gap-1">
                <i className="h-2 w-2 rounded-full bg-coral" />
                <i className="h-2 w-2 rounded-full bg-sun" />
                <i className="h-2 w-2 rounded-full bg-mint" />
              </span>
            </div>
            {sent ? (
              <div className="py-10 text-center">
                <div className="font-display text-mint">✓ Message sent</div>
                <div className="mt-2 text-sm text-muted-foreground">I'll reply within 24h.</div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-5 space-y-4">
                <Field label="name" name="name" placeholder="Your name" />
                <Field label="email" name="email" type="email" placeholder="you@studio.com" />
                <div>
                  <label className="font-mono text-[10px] uppercase text-muted-foreground">
                    message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the build…"
                    className="mt-1 w-full resize-none rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground outline-none ring-mint/40 focus:ring-2"
                  />
                </div>
                <button 
                  disabled={loading}
                  className="press-shadow inline-flex w-full items-center justify-center gap-2 rounded-lg bg-mint py-2.5 font-display text-[11px] uppercase text-primary-foreground disabled:opacity-50"
                >
                  {loading ? "Transmitting..." : "Transmit"} <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase text-muted-foreground">{label}</label>
      <input
        required
        {...props}
        className="mt-1 w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground outline-none ring-mint/40 focus:ring-2"
      />
    </div>
  );
}
