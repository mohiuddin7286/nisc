import { useEffect, useState } from "react";
import { BookOpen, FileSignature, CheckCircle2, Megaphone, Vote, Trophy, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { MagneticButton } from "@/components/nisc/MagneticButton";
import { ELECTION_DATE } from "@/data/nisc";

const steps = [
  {
    icon: FileSignature,
    title: "Nomination",
    text: "Eligible members submit nominations according to the NISC Rulebook.",
  },
  {
    icon: CheckCircle2,
    title: "Verification",
    text: "Applications are reviewed to ensure eligibility.",
  },
  {
    icon: Megaphone,
    title: "Campaign",
    text: "Candidates present their vision, manifesto, and interact with members.",
  },
  {
    icon: Vote,
    title: "Voting",
    text: "Secret ballot conducted among eligible members.",
  },
  {
    icon: Trophy,
    title: "Results",
    text: "Votes are counted transparently and winners are officially announced.",
  },
];

function useCountdown(target: string) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const t = new Date(target).getTime();
    const tick = () => setLeft(Math.max(0, t - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  if (left === null) return null;
  const s = Math.floor(left / 1000);
  return {
    Days: Math.floor(s / 86400),
    Hours: Math.floor((s % 86400) / 3600),
    Minutes: Math.floor((s % 3600) / 60),
    Seconds: s % 60,
  };
}

export function Election() {
  const cd = useCountdown(ELECTION_DATE);

  return (
    <section id="election" className="relative px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem]">
        <div className="aurora-bg absolute inset-0" aria-hidden />
        <div className="glass relative rounded-[2.5rem] px-6 py-16 sm:px-12">
          {/* Header & Countdown */}
          <div className="text-center">
            <ScrollReveal variant="blur">
              <span className="glass-strong font-accent text-primary inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
                <Calendar className="size-3.5" /> 15 September 2026
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
                2026–27 Elections — <span className="gradient-text">15 Sept 2026</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base">
                The next council will be elected by the general body. Below is the countdown and official election process.
              </p>
            </ScrollReveal>
          </div>

          {/* Countdown Timer Display */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {(cd ? Object.entries(cd) : [["Days", 0], ["Hours", 0], ["Minutes", 0], ["Seconds", 0]]).map(
              ([label, value]) => (
                <div key={label} className="glass-strong rounded-3xl px-4 py-6 text-center shadow-lg border border-white/30">
                  <p className="font-display text-4xl font-extrabold tabular-nums sm:text-5xl">
                    {String(value).padStart(2, "0")}
                  </p>
                  <p className="text-muted-foreground font-accent mt-2 text-[11px] font-bold tracking-[0.18em] uppercase">
                    {label}
                  </p>
                </div>
              ),
            )}
          </div>

          {/* Election Steps Header & Grid */}
          <div className="mt-16 text-center">
            <h3 className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Election Process
            </h3>
            <p className="text-lg font-bold mt-1">5 Steps to Leadership Transition</p>
          </div>

          <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((s, i) => (
              <ScrollReveal key={s.title} variant="up" delay={i * 0.07}>
                <div className="glass-strong h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                  <span className="gradient-brand grid h-11 w-11 place-items-center rounded-2xl text-white">
                    <s.icon className="size-5" />
                  </span>
                  <p className="text-muted-foreground font-accent mt-5 text-[11px] font-bold tracking-[0.18em] uppercase">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <MagneticButton href="#rulebook">
              Read the Rulebook <BookOpen className="size-4" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}


