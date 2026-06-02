import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BootScreen } from "@/components/retro/BootScreen";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divy.dev" },
      {
        name: "description",
        content:
          "Portfolio of Divy, a full stack developer building fast, beautiful, production-grade software. Type-safe, animated with intent, shipped on time.",
      },
      { property: "og:title", content: "Divy.dev" },
      {
        property: "og:description",
        content: "Premium full stack engineering. Game Boy DNA. Modern craft.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Press+Start+2P&display=swap",
      },
    ],
  }),
  component: Index,
});

let hasBooted = false;

function Index() {
  const [booted, setBooted] = useState(hasBooted);

  function finishBoot() {
    hasBooted = true;
    setBooted(true);
  }

  return (
    <>
      {!booted && <BootScreen onComplete={finishBoot} />}
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
