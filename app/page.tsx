// src/app/page.tsx
import CustomCursor from "@/components/ui/custom-cursor";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AuroraBackground from "@/components/ui/aurora-background";
import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import About from "@/components/sections/about";
import Mission from "@/components/sections/mission";
import Council from "@/components/sections/council";
import Members from "@/components/sections/members";
import Activities from "@/components/sections/activities";
import Timeline from "@/components/sections/timeline";
import Election from "@/components/sections/election";
import FAQ from "@/components/sections/faq";
import Join from "@/components/sections/join";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <CustomCursor />
      <Navbar />

      <main className="overflow-x-hidden bg-[#FAFBFC]">
        <Hero />

        <Stats />

        <About />

        <Mission />

        <Council />

        <Members />

        <Activities />

        <Timeline />

        <Election />

        <FAQ />

        <Join />
      </main>

      <Footer />
    </>
  );
}