import { CalendarDays } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { activities } from "@/data/nisc";

export function Activities() {
  return (
    <section id="activities" className="relative mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="Activities"
        title={<>What we <span className="gradient-text">actually do</span></>}
        subtitle="A snapshot of the events NISC has run this academic year."
      />

      <div className="relative pl-10 sm:pl-16">
        <div className="gradient-brand absolute top-2 bottom-2 left-3 w-[3px] rounded-full opacity-40 sm:left-6" />
        <div className="space-y-6">
          {activities.map((a, i) => (
            <ScrollReveal key={a.title} variant="right" delay={i * 0.06}>
              <div className="relative">
                <span className="gradient-brand absolute top-7 -left-[30px] grid h-4 w-4 place-items-center rounded-full ring-4 ring-white sm:-left-[46px]" />
                <div className="glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                  <div className="text-primary font-accent flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase">
                    <CalendarDays className="size-4" /> {a.date}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{a.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{a.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
