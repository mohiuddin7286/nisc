import { Flag, Eye, TrendingUp, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { timeline } from "@/data/nisc";

const icons = [Flag, Eye, TrendingUp, Rocket];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Our Story"
        title={<>From homesickness to a <span className="gradient-text">home</span></>}
        subtitle="How a small group of students turned a shared accent into a campus-wide community."
      />

      <div className="relative">
        <div className="bg-border absolute top-0 bottom-0 left-6 w-px sm:left-1/2" />
        <div className="space-y-10">
          {timeline.map((item, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <ScrollReveal key={item.title} variant={i % 2 ? "right" : "left"} delay={i * 0.05}>
                <div
                  className={`relative grid grid-cols-[auto_minmax(0,1fr)] gap-5 sm:grid-cols-2 sm:gap-10 ${
                    i % 2 ? "sm:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative sm:hidden">
                    <span className="gradient-brand grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[var(--shadow-glow)]">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <div className={i % 2 ? "sm:pl-10" : "sm:pr-10 sm:text-right"}>
                    <div className="glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                      <span className="font-accent text-primary text-xs font-bold tracking-[0.18em] uppercase">
                        {item.year}
                      </span>
                      <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block" />
                  <span className="gradient-brand absolute top-6 left-1/2 hidden h-12 w-12 -translate-x-1/2 place-items-center rounded-2xl text-white shadow-[var(--shadow-glow)] sm:grid">
                    <Icon className="size-5" />
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
