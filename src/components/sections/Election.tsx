import { useEffect, useState } from "react";
import { BookOpen, FileSignature, Megaphone, Vote, Trophy } from "lucide-react";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { MagneticButton } from "@/components/nisc/MagneticButton";
import { ELECTION_DATE } from "@/data/nisc";

const steps = [
  { icon: FileSignature, title: "Nominations", text: "Two-week window for members to file candidature." },
  { icon: Megaphone, title: "Campaign", text: "Manifestos, open house and a moderated debate." },
  { icon: Vote, title: "Voting", text: "Secret ballot open to every registered member." },
  { icon: Trophy, title: "Results", text: "Same-day declaration and handover ceremony." },
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
          <div className="text-center">
            <ScrollReveal variant="blur">
              <span className="glass-strong font-accent text-primary inline-flex rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
                Governance
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
                2026–27 Elections — <span className="gradient-text">Coming Soon</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base">
                The next council will be elected by the full general body. Here's the countdown and
                how the process works.
              </p>
            </ScrollReveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {(cd ? Object.entries(cd) : [["Days", 0], ["Hours", 0], ["Minutes", 0], ["Seconds", 0]]).map(
              ([label, value]) => (
                <div key={label} className="glass-strong rounded-3xl px-4 py-6 text-center">
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

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <ScrollReveal key={s.title} variant="up" delay={i * 0.07}>
                <div className="glass-strong h-full rounded-3xl p-6">
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
