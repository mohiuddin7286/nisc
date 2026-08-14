import { BookOpen, FileSignature, CheckCircle2, Megaphone, Vote, Trophy, ShieldCheck, UserCheck, Clock, AlertTriangle, Sparkles, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { MagneticButton } from "@/components/nisc/MagneticButton";
import { candidates2026, election2026Status, electionSteps } from "@/data/nisc";
import { cn } from "@/lib/utils";

const stepIcons = [FileSignature, CheckCircle2, Megaphone, Vote, Trophy];

const getGreekTheme = (alias: string) => {
  switch (alias.toLowerCase()) {
    case "zeus":
      return {
        symbol: "⚡",
        title: "Zeus",
        gradient: "from-amber-500/20 via-yellow-500/10 to-orange-500/20 border-amber-500/40 text-amber-600 dark:text-amber-400",
        badgeBg: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
        glow: "shadow-amber-500/10",
      };
    case "athena":
      return {
        symbol: "🛡️",
        title: "Athena",
        gradient: "from-purple-500/20 via-indigo-500/10 to-blue-500/20 border-purple-500/40 text-purple-600 dark:text-purple-400",
        badgeBg: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
        glow: "shadow-purple-500/10",
      };
    case "poseidon":
      return {
        symbol: "🔱",
        title: "Poseidon",
        gradient: "from-cyan-500/20 via-teal-500/10 to-blue-500/20 border-cyan-500/40 text-cyan-600 dark:text-cyan-400",
        badgeBg: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
        glow: "shadow-cyan-500/10",
      };
    default:
      return {
        symbol: "🏛️",
        title: alias,
        gradient: "from-orange-500/20 to-pink-500/20 border-orange-500/30 text-primary",
        badgeBg: "bg-primary/10 text-primary border-primary/20",
        glow: "",
      };
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Closed":
      return "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30";
    case "Completed":
      return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30";
    case "Active":
      return "bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40 animate-pulse";
    case "Upcoming":
      return "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30";
    default:
      return "bg-accent text-accent-foreground border-border";
  }
};

export function Election() {
  return (
    <section id="election" className="relative px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem]">
        <div className="aurora-bg absolute inset-0" aria-hidden />
        <div className="glass relative rounded-[2.5rem] px-6 py-16 sm:px-12">
          
          {/* Section Header */}
          <div className="text-center">
            <ScrollReveal variant="blur">
              <span className="glass-strong font-accent text-primary inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase border border-primary/30">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-amber-500"></span>
                </span>
                2026–27 Leadership Elections
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
                2026–27 Elections Portal — <span className="gradient-text">Active Campaign</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed">
                Official announcement of candidate nominations, campaign guidelines, election observers, and upcoming voting procedures.
              </p>
            </ScrollReveal>
          </div>

          {/* Nomination Update Card */}
          <ScrollReveal delay={0.18}>
            <div className="glass-strong mt-10 rounded-3xl p-6 sm:p-8 border border-amber-500/30 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-rose-500/5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400">
                    <ShieldCheck className="size-6" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold">Nomination Status</h3>
                      <span className="rounded-full bg-rose-500/15 px-3 py-0.5 text-xs font-bold text-rose-700 dark:text-rose-300 border border-rose-500/30 uppercase tracking-wider">
                        {election2026Status.nominationStatus}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {election2026Status.nominationNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white/60 dark:bg-slate-900/60 rounded-2xl px-4 py-2.5 border border-white/40 text-xs font-semibold text-foreground">
                  <Clock className="size-4 text-primary" />
                  <span>Campaigning until: <strong className="text-primary">{election2026Status.campaignDeadline}</strong></span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Candidates Section */}
          <div className="mt-14">
            <div className="text-center">
              <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Contesting Candidates
              </span>
              <h3 className="text-2xl font-extrabold sm:text-3xl mt-1">
                2026–27 Leadership Contenders
              </h3>
              <p className="text-muted-foreground mt-2 text-sm max-w-xl mx-auto font-medium">
                {election2026Status.contestNote}
              </p>
            </div>

            <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
              {candidates2026.map((c, i) => {
                const theme = getGreekTheme(c.electionName);
                return (
                  <ScrollReveal key={c.name} variant="up" delay={i * 0.1}>
                    <div
                      className={cn(
                        "glass-strong relative h-full flex flex-col justify-between rounded-3xl p-6 border-2 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
                        theme.gradient,
                      )}
                    >
                      <div>
                        {/* Header Badge & Alias */}
                        <div className="flex items-center justify-between">
                          <span
                            className={cn(
                              "font-accent inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold tracking-wider uppercase border",
                              theme.badgeBg,
                            )}
                          >
                            <span>{theme.symbol}</span>
                            <span>{theme.title}</span>
                          </span>
                          <span className="text-xs font-bold text-muted-foreground">
                            {c.batch} • {c.department}
                          </span>
                        </div>

                        {/* Candidate Name */}
                        <h4 className="mt-5 text-2xl font-extrabold text-foreground tracking-tight">
                          {c.name}
                        </h4>

                        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Sparkles className="size-3.5 text-primary" />
                          <span>State: <strong className="text-foreground">{c.state}</strong></span>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/20 dark:border-white/10">
                          <p className="text-xs font-bold text-primary uppercase tracking-wider font-accent">
                            Contesting Position
                          </p>
                          <p className="text-sm font-bold text-foreground mt-0.5">
                            {c.contestingFor}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-3 border-t border-white/20 text-center">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
                          Theme Alias: <strong className="text-foreground">{c.electionName}</strong>
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Grid of Notice Cards: In-Charges, Manifesto & Schedule */}
          <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2">
            
            {/* Election In-Charges Card */}
            <ScrollReveal variant="left">
              <div className="glass-strong h-full rounded-3xl p-6 sm:p-7 border border-indigo-500/20 bg-indigo-500/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <UserCheck className="size-5 text-indigo-600 dark:text-indigo-400" />
                      <h4 className="text-lg font-bold">Election In-Charges</h4>
                    </div>
                    <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                      {election2026Status.electionInCharges}
                    </span>
                  </div>

                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    {election2026Status.inChargesDescription}
                  </p>
                </div>

                <div className="mt-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 p-3.5 border border-white/30 text-xs text-muted-foreground">
                  Observers maintain strict impartiality and oversee candidate conduct until polling completes.
                </div>
              </div>
            </ScrollReveal>

            {/* Manifesto Requirements Card */}
            <ScrollReveal variant="right">
              <div className="glass-strong h-full rounded-3xl p-6 sm:p-7 border border-emerald-500/20 bg-emerald-500/5">
                <div className="flex items-center gap-2.5 mb-4">
                  <CheckCircle className="size-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-lg font-bold">Candidate Manifesto Guidelines</h4>
                </div>

                <ul className="space-y-2.5">
                  {election2026Status.manifestoRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                      <span className="grid size-4 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mt-0.5">
                        ✓
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>

          {/* Schedule & Procedures Card */}
          <ScrollReveal delay={0.2}>
            <div className="glass-strong mt-6 rounded-3xl p-6 sm:p-7 border border-amber-500/20 bg-amber-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="size-6 text-amber-600 dark:text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-base font-bold">Voting Procedure & Rules Announcement</h4>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    Official voting regulations and procedure will be published on campus channels.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-amber-500/15 px-4 py-2 text-xs font-bold text-amber-700 dark:text-amber-300 border border-amber-500/30 shrink-0">
                {election2026Status.votingRulesAnnouncement}
              </div>
            </div>
          </ScrollReveal>

          {/* Election Confidentiality Notice Card */}
          <ScrollReveal delay={0.24}>
            <div className="glass-strong mt-6 rounded-3xl p-6 sm:p-8 border border-rose-500/30 bg-gradient-to-r from-rose-500/10 via-pink-500/5 to-amber-500/10 text-center">
              <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-rose-500/20 text-rose-600 dark:text-rose-400 mb-3">
                <AlertTriangle className="size-6" />
              </div>
              <h4 className="text-xl font-bold text-rose-700 dark:text-rose-300">
                {election2026Status.confidentialityNotice.title}
              </h4>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm leading-relaxed">
                {election2026Status.confidentialityNotice.text}
              </p>
              <div className="mt-5 pt-4 border-t border-rose-500/20">
                <p className="font-accent text-sm font-extrabold text-foreground tracking-wide uppercase">
                  “{election2026Status.confidentialityNotice.footer}”
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Election Steps Header & Grid */}
          <div className="mt-16 text-center">
            <h3 className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Election Process Status
            </h3>
            <p className="text-xl font-bold mt-1 sm:text-2xl">5 Steps to Democratic Transition</p>
          </div>

          <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {electionSteps.map((s, i) => {
              const Icon = stepIcons[i] || FileSignature;
              return (
                <ScrollReveal key={s.title} variant="up" delay={i * 0.07}>
                  <div className="glass-strong h-full flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="gradient-brand grid h-10 w-10 place-items-center rounded-2xl text-white">
                          <Icon className="size-5" />
                        </span>
                        <span
                          className={cn(
                            "rounded-full px-2.5 py-0.5 text-[10px] font-extrabold border uppercase tracking-wider",
                            getStatusBadge(s.status),
                          )}
                        >
                          {s.status}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground font-accent mt-4 text-[11px] font-bold tracking-[0.18em] uppercase">
                        Step {s.step}
                      </p>
                      <h4 className="mt-1 text-lg font-bold">{s.title}</h4>
                      <p className="text-muted-foreground mt-2 text-xs leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <MagneticButton href="#rulebook">
              Read the NISC Rulebook <BookOpen className="size-4" />
            </MagneticButton>
          </div>

        </div>
      </div>
    </section>
  );
}



