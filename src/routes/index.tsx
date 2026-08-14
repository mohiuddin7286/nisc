import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Spotlight } from "@/components/nisc/Spotlight";
import { CustomCursor } from "@/components/nisc/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Mission } from "@/components/sections/Mission";
import { IndiaMap } from "@/components/sections/IndiaMap";
import { Stats } from "@/components/sections/Stats";
import { Council } from "@/components/sections/Council";
import { Members } from "@/components/sections/Members";
import { Activities } from "@/components/sections/Activities";
import { Election } from "@/components/sections/Election";
import { Archive } from "@/components/sections/Archive";
import { Rulebook } from "@/components/sections/Rulebook";
import { Gallery } from "@/components/sections/Gallery";
import { Join } from "@/components/sections/Join";
import { FAQ } from "@/components/sections/FAQ";

const TITLE = "NISC — North India Student Cell | KL University Hyderabad";
const DESC =
  "The North India Student Cell at KL University Hyderabad: community, mentorship and culture for students from 11 northern states. Meet the council, members and events.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "North India Student Cell",
          alternateName: "NISC",
          description: DESC,
          parentOrganization: { "@type": "CollegeOrUniversity", name: "KL University Hyderabad" },
        }),
      },
    ],
  }),
});

function useLenis() {
  useEffect(() => {
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      import("lenis").then(({ default: Lenis }) => {
        if (cancelled) return;
        const instance = new Lenis({ duration: 1.1, smoothWheel: true });
        lenis = instance;
        const loop = (time: number) => {
          instance.raf(time);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      });
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
}

function Index() {
  useLenis();

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Spotlight />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <IndiaMap />
        <Stats />
        <Council />
        <Members />
        <Activities />
        <Archive />
        <Election />
        <Rulebook />
        <Gallery />
        <Join />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
