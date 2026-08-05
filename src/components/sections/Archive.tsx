import { useState } from "react";
import { Archive as ArchiveIcon, Vote, Trophy, Users, Award, MessageSquare, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { Avatar } from "@/components/nisc/GlassCard";
import { AnimatedCounter } from "@/components/nisc/AnimatedCounter";
import { pastCouncils, election2025 } from "@/data/nisc";
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
        <div className="space-y-8">
          {pastCouncils.map((c) => (
            <ScrollReveal key={c.year} variant="up">
              <div className="glass relative overflow-hidden rounded-3xl p-7 sm:p-10">
                <div className="gradient-brand absolute inset-x-0 top-0 h-1.5 opacity-80" />
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/20 pb-6">
                  <div>
                    <span className="font-accent text-primary text-xs font-bold tracking-[0.18em] uppercase">
                      Year: {c.year}
                    </span>
                    <h3 className="font-display mt-1 text-3xl font-extrabold">{c.title}</h3>
                  </div>
                  <span className="glass-strong font-accent inline-flex rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase">
                    Inaugural Council
                  </span>
                </div>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-3xl sm:text-base">
                  {c.description}
                </p>

                <div className="mt-8">
                  <h4 className="font-accent text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground mb-4">
                    Founding Council Members
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {c.members.map((m) => (
                      <div
                        key={m.id}
                        className="glass-strong flex items-center gap-3.5 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                      >
                        <Avatar name={m.name} size="md" />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold">{m.name}</p>
                          <p className="text-primary font-accent truncate text-xs font-medium">
                            {m.position}
                          </p>
                          <p className="text-muted-foreground truncate text-[11px]">
                            {m.department !== "—" ? `${m.department} · ` : ""}{m.batch}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          {/* Header section */}
          <ScrollReveal variant="up">
            <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10 text-center">
              <div className="gradient-brand absolute inset-x-0 top-0 h-1.5 opacity-80" />
              <span className="glass-strong font-accent text-primary inline-flex rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase mb-3">
                {election2025.year} Term
              </span>
              <h3 className="font-display text-3xl font-extrabold sm:text-4xl">
                {election2025.title}
              </h3>
              <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
                {election2025.subtitle}
              </p>

              {/* Stat Cards */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
                <div className="glass-strong rounded-2xl p-5 text-center">
                  <Users className="text-primary mx-auto size-5 mb-2" />
                  <p className="font-display text-3xl font-extrabold tabular-nums">
                    <AnimatedCounter to={election2025.stats.totalVotes} />
                  </p>
                  <p className="text-muted-foreground font-accent mt-1 text-xs font-semibold uppercase tracking-wider">
                    Total Votes Cast
                  </p>
                </div>
                <div className="glass-strong rounded-2xl p-5 text-center">
                  <Trophy className="text-amber-500 mx-auto size-5 mb-2" />
                  <p className="font-display text-3xl font-extrabold tabular-nums">
                    <AnimatedCounter to={election2025.stats.highestPresidentialVote} />
                  </p>
                  <p className="text-muted-foreground font-accent mt-1 text-xs font-semibold uppercase tracking-wider">
                    Highest Presidential Vote
                  </p>
                </div>
                <div className="glass-strong rounded-2xl p-5 text-center">
                  <Award className="text-indigo-500 mx-auto size-5 mb-2" />
                  <p className="font-display text-3xl font-extrabold tabular-nums">
                    <AnimatedCounter to={election2025.stats.highestVicePresidentialVote} />
                  </p>
                  <p className="text-muted-foreground font-accent mt-1 text-xs font-semibold uppercase tracking-wider">
                    Highest Vice Presidential Vote
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Presidential & Vice Presidential breakdown cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Presidential Election */}
            <ScrollReveal variant="left" delay={0.05}>
              <div className="glass relative h-full flex flex-col overflow-hidden rounded-3xl p-7">
                <div className="gradient-brand absolute inset-x-0 top-0 h-1" />
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <h4 className="font-display text-xl font-bold">Presidential Election</h4>
                  <span className="glass-strong font-accent text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Official Winner
                  </span>
                </div>

                {/* Winner Highlight */}
                <div className="mt-5 glass-strong rounded-2xl p-4 flex items-center justify-between border border-emerald-500/30">
                  <div className="flex items-center gap-3">
                    <Avatar name={election2025.presidential.winner} size="md" />
                    <div>
                      <span className="font-accent text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                        Elected President
                      </span>
                      <p className="text-lg font-extrabold">{election2025.presidential.winner}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-black text-primary">
                      {election2025.presidential.votes}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-accent uppercase">Votes</p>
                  </div>
                </div>

                {/* Other candidates breakdown */}
                <div className="mt-6 flex-1">
                  <h5 className="font-accent text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">
                    Other Candidates
                  </h5>
                  <div className="space-y-2.5">
                    {election2025.presidential.otherCandidates.map((c) => (
                      <div
                        key={c.name}
                        className="glass-strong rounded-xl px-4 py-2.5 flex items-center justify-between"
                      >
                        <span className="text-sm font-medium">{c.name}</span>
                        <span className="text-sm font-bold text-muted-foreground">
                          {c.votes} {c.votes === 1 ? "vote" : "votes"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Vice Presidential Election */}
            <ScrollReveal variant="right" delay={0.1}>
              <div className="glass relative h-full flex flex-col overflow-hidden rounded-3xl p-7">
                <div className="gradient-brand absolute inset-x-0 top-0 h-1" />
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <h4 className="font-display text-xl font-bold">Vice Presidential Election</h4>
                  <span className="glass-strong font-accent text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Official Winner
                  </span>
                </div>

                {/* Winner Highlight */}
                <div className="mt-5 glass-strong rounded-2xl p-4 flex items-center justify-between border border-emerald-500/30">
                  <div className="flex items-center gap-3">
                    <Avatar name={election2025.vicePresidential.winner} size="md" />
                    <div>
                      <span className="font-accent text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                        Elected Vice President
                      </span>
                      <p className="text-lg font-extrabold">{election2025.vicePresidential.winner}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-black text-primary">
                      {election2025.vicePresidential.votes}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-accent uppercase">Votes</p>
                  </div>
                </div>

                {/* Other candidates breakdown */}
                <div className="mt-6 flex-1">
                  <h5 className="font-accent text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">
                    Other Candidates
                  </h5>
                  <div className="space-y-2.5">
                    {election2025.vicePresidential.otherCandidates.map((c) => (
                      <div
                        key={c.name}
                        className="glass-strong rounded-xl px-4 py-2.5 flex items-center justify-between"
                      >
                        <span className="text-sm font-medium">{c.name}</span>
                        <span className="text-sm font-bold text-muted-foreground">
                          {c.votes} {c.votes === 1 ? "vote" : "votes"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Election Summary & Overview Details */}
          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal variant="up" delay={0.12} className="md:col-span-3">
              <div className="glass rounded-3xl p-7 border-l-4 border-l-primary">
                <h4 className="font-accent text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2">
                  Election Summary
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {election2025.summary}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={0.15} className="md:col-span-2">
              <div className="glass h-full rounded-3xl p-7">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="size-4 text-primary" />
                  <h4 className="font-accent text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Participation Overview
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {election2025.participationOverview}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={0.18}>
              <div className="glass h-full rounded-3xl p-7">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="size-4 text-primary" />
                  <h4 className="font-accent text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Student Feedback
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {election2025.studentFeedback}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      )}
    </section>
  );
}

