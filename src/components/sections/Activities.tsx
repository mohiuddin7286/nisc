import { CalendarDays, CheckCircle2, Clock } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { activities } from "@/data/nisc";

export function Activities() {
  return (
    <section id="activities" className="relative mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="Activities & Roadmap"
        title={<>Official events & <span className="gradient-text">upcoming calendar</span></>}
        subtitle="The official milestone meeting conducted by NISC, along with our planned event calendar for the academic term."
      />

      <div className="relative pl-10 sm:pl-16">
        <div className="gradient-brand absolute top-2 bottom-2 left-3 w-[3px] rounded-full opacity-40 sm:left-6" />
        <div className="space-y-6">
          {activities.map((a, i) => (
            <ScrollReveal key={a.title} variant="right" delay={i * 0.06}>
              <div className="relative">
                <span className="gradient-brand absolute top-7 -left-[30px] grid h-4 w-4 place-items-center rounded-full ring-4 ring-white sm:-left-[46px]" />
                <div className="glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-primary font-accent flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase">
                      <CalendarDays className="size-4" /> {a.date}
                    </div>
                    <span
                      className={`font-accent inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                        a.status === "Conducted"
                          ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                          : a.status === "Scheduled"
                          ? "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30"
                          : "glass-strong text-muted-foreground"
                      }`}
                    >
                      {a.status === "Conducted" ? (
                        <CheckCircle2 className="size-3 text-emerald-500" />
                      ) : (
                        <Clock className="size-3" />
                      )}
                      {a.status}
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-xl font-bold">{a.title}</h3>
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

