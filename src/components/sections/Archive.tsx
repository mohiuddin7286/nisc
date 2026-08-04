import { useState } from "react";
import { Archive as ArchiveIcon, Vote } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { Avatar } from "@/components/nisc/GlassCard";
import { pastCouncils, electionResults } from "@/data/nisc";
import { cn } from "@/lib/utils";

type Tab = "councils" | "results";

export function Archive() {
  const [tab, setTab] = useState<Tab>("councils");

  return (
    <section id="archive" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Archive"
        title={<>Past councils & <span className="gradient-text">election results</span></>}
        subtitle="A record of everyone who has led the cell, and how each term was decided."
      />

      <ScrollReveal>
        <div className="glass mx-auto mb-10 flex w-fit gap-1 rounded-full p-1">
          {(
            [
              { id: "councils", label: "Past Council", icon: ArchiveIcon },
              { id: "results", label: "Election Results", icon: Vote },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "font-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                tab === t.id
                  ? "gradient-brand text-white shadow-[var(--shadow-glow)]"
                  : "hover:bg-white/60",
              )}
            >
              <t.icon className="size-4" /> {t.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {tab === "councils" ? (
        <div className="grid gap-5 md:grid-cols-2">
          {pastCouncils.map((c, i) => (
            <ScrollReveal key={c.term} variant="up" delay={i * 0.06}>
              <div className="glass relative h-full overflow-hidden rounded-3xl p-7">
                <div className="gradient-brand absolute inset-x-0 top-0 h-1 opacity-70" />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-extrabold">{c.term}</h3>
                  <span className="font-accent text-primary text-xs font-bold tracking-[0.14em] uppercase">
                    {c.status}
                  </span>
                </div>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{c.note}</p>
                <div className="mt-6 space-y-3">
                  {c.members.map((m) => (
                    <div key={m.name + m.position} className="flex items-center gap-3">
                      <Avatar name={m.name} size="md" />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold">{m.name}</p>
                        <p className="text-muted-foreground truncate text-xs">{m.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {electionResults.map((e, i) => (
            <ScrollReveal key={e.year} variant="up" delay={i * 0.06}>
              <div className="glass relative h-full overflow-hidden rounded-3xl p-7">
                <div className="gradient-brand absolute inset-x-0 top-0 h-1 opacity-70" />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-extrabold">{e.year}</h3>
                  <span className="font-accent text-primary text-xs font-bold tracking-[0.14em] uppercase">
                    {e.turnout}
                  </span>
                </div>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{e.note}</p>
                <div className="mt-6 divide-y divide-white/50">
                  {e.results.map((r) => (
                    <div key={r.position} className="flex items-center justify-between gap-4 py-3">
                      <span className="text-muted-foreground font-accent text-xs font-bold tracking-[0.12em] uppercase">
                        {r.position}
                      </span>
                      <span className="text-sm font-bold">{r.winner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </section>
  );
}
