import { useState } from "react";
import { Instagram, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { TiltCard } from "@/components/nisc/TiltCard";
import { Avatar } from "@/components/nisc/GlassCard";
import { council, pastCouncils } from "@/data/nisc";

export function Council() {
  const [selectedYear, setSelectedYear] = useState<"2026–27" | "2025–26">("2026–27");
  const isCurrentCouncil = selectedYear === "2026–27";
  const displayedCouncil = isCurrentCouncil ? council : (pastCouncils[0]?.members ?? []);

  return (
    <section id="council" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow={`Council ${selectedYear}`}
        title={<>The people who <span className="gradient-text">run it</span></>}
        subtitle={
          isCurrentCouncil
            ? "The 2026–27 executive council — students volunteering their time to keep the cell moving."
            : "The 2025–26 founding council — the members who established NISC's structure and community."
        }
      />

      <div className="mb-8 flex justify-center">
        <div className="glass flex gap-1 rounded-full p-1" role="tablist" aria-label="Select council year">
          {(["2026–27", "2025–26"] as const).map((year) => (
            <button
              key={year}
              type="button"
              role="tab"
              aria-selected={selectedYear === year}
              onClick={() => setSelectedYear(year)}
              className={`font-accent rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                selectedYear === year
                  ? "gradient-brand text-white shadow-[var(--shadow-glow)]"
                  : "text-muted-foreground hover:bg-white/60"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {displayedCouncil.map((c, i) => {
          const featured = i === 0;
          return (
            <ScrollReveal
              key={c.id}
              variant="scale"
              delay={Math.min(i, 6) * 0.05}
              className={featured ? "sm:col-span-2" : ""}
            >
              <TiltCard className="h-full" max={featured ? 6 : 8}>
                <article className="graphic-card glass-transparent flex h-full flex-col rounded-3xl p-5">
                  <div className="gradient-brand absolute inset-x-0 top-0 h-1 rounded-t-3xl opacity-70" />
                <div className="flex items-start justify-between gap-4">
                  <span className="gradient-brand-subtle text-primary font-accent max-w-[85%] rounded-full border border-primary/20 px-2.5 py-0.5 text-xs font-bold">
                    {c.position}
                  </span>
                  <div className="flex gap-2">
                    {c.instagram && <Social href={c.instagram} Icon={Instagram} />}
                    {c.github && <Social href={c.github} Icon={Github} />}
                    {c.linkedin && <Social href={c.linkedin} Icon={Linkedin} />}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <Avatar name={c.name} size="md" />
                  <div className="min-w-0">
                    <h3 className={featured ? "text-xl font-bold text-foreground" : "text-lg font-bold text-foreground"}>
                      {c.name}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {c.department} <span aria-hidden>•</span> {c.batch}
                    </p>
                    <p className="text-muted-foreground text-sm">{c.state}</p>
                  </div>
                </div>
                </article>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

function Social({ href, Icon }: { href: string; Icon: typeof Instagram }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${Icon.displayName ?? "social"} profile for council member`}
      className="glass grid h-7 w-7 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
    >
      <Icon className="size-3.5" />
    </a>
  );
}
