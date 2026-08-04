import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";

const tiles = [
  { caption: "Hindi Diwas 2025", span: "sm:row-span-2", grad: "linear-gradient(135deg, oklch(0.85 0.12 65), oklch(0.7 0.19 35))" },
  { caption: "Debate Night", span: "", grad: "linear-gradient(135deg, oklch(0.8 0.12 258), oklch(0.66 0.16 275))" },
  { caption: "Placement Prep", span: "", grad: "linear-gradient(135deg, oklch(0.84 0.11 150), oklch(0.68 0.15 190))" },
  { caption: "Mentorship Drive", span: "sm:col-span-2", grad: "linear-gradient(135deg, oklch(0.86 0.1 90), oklch(0.72 0.16 55))" },
  { caption: "Cultural Night", span: "", grad: "linear-gradient(135deg, oklch(0.82 0.11 350), oklch(0.68 0.16 20))" },
  { caption: "Council Handover", span: "", grad: "linear-gradient(135deg, oklch(0.83 0.1 200), oklch(0.66 0.15 240))" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Gallery"
        title={<>Moments from the <span className="gradient-text">year</span></>}
        subtitle="Placeholder tiles for now — drop in event photos and they slot straight in."
      />

      <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-3">
        {tiles.map((t, i) => (
          <ScrollReveal key={t.caption} variant="scale" delay={i * 0.06} className={t.span}>
            <div className="group glass relative h-full overflow-hidden rounded-3xl p-0">
              <div
                className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                style={{ background: t.grad }}
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="glass-strong font-accent inline-flex rounded-full px-4 py-2 text-xs font-semibold">
                  {t.caption}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
