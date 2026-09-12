import { ArrowDown, GraduationCap, Landmark, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/nisc/MagneticButton";
import { AnimatedCounter } from "@/components/nisc/AnimatedCounter";
import { members, council, departmentsCount } from "@/data/nisc";

const title = "North India Student Cell";

export function Hero() {
  const badges = [
    { icon: Users, isLive: true, value: members.length, label: "Active Members" },
    { icon: Landmark, isLive: false, value: council.length, label: "Council Members" },
    { icon: GraduationCap, isLive: false, value: departmentsCount, label: "Departments" },
    { icon: Sparkles, isLive: false, text: "2026–27 Council", label: "2026–27 Council" },
  ];

  return (
    <section id="top" className="relative flex min-h-[760px] items-center overflow-hidden pt-28 pb-16 lg:min-h-screen">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <img src="/gallery/klu.png" alt="" className="h-full w-full object-cover opacity-20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,242,0.98)_0%,rgba(255,250,242,0.84)_42%,rgba(255,250,242,0.35)_100%)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--foreground) 22%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-7 flex max-w-sm justify-center"
        >
          <div className="relative grid size-40 place-items-center rounded-[2.5rem] border border-white/80 bg-white/55 p-3 shadow-[var(--shadow-glow)] backdrop-blur-xl sm:size-48">
            <div className="absolute -inset-5 rounded-[3rem] border border-primary/20" />
            <div className="absolute -inset-10 rounded-[3.5rem] border border-secondary/15" />
            <img src="/gallery/nisc-logo.png" alt="NISC logo" className="relative size-full rounded-[2rem] object-cover" />
            <span className="absolute -right-12 bottom-3 hidden font-accent text-[10px] font-bold tracking-[0.28em] text-primary uppercase sm:block">KLH Aziznagar</span>
          </div>
        </motion.div>

        <p className="font-script text-primary/80 -mt-2 text-3xl font-semibold sm:text-4xl">More than a club, a family</p>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass font-accent mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide"
          >
            <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
            KL University Hyderabad · Est. August 2024
          </motion.div>

          <h1 className="font-display mx-auto mt-8 max-w-5xl text-[clamp(3.4rem,8vw,7rem)] leading-[0.88] font-extrabold tracking-[-0.06em]">
            {title.split(" ").map((word, wi) => (
              <span key={wi} className="mr-[0.25em] inline-block whitespace-nowrap">
                {word.split("").map((c, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.15 + wi * 0.09 + ci * 0.028, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={wi === 2 ? "gradient-text inline-block" : "inline-block"}
                  >
                    {c}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-muted-foreground mx-auto mt-7 max-w-2xl text-base leading-relaxed sm:text-lg"
          >
            Many states, one campus, one family. We build community, mentorship and culture for students from North India at KLH — and everyone who wants in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton href="#join">Join NISC <Sparkles className="size-4" /></MagneticButton>
            <MagneticButton href="#about" variant="ghost">Explore <ArrowDown className="size-4" /></MagneticButton>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center">
            {badges.map((b, i) => (
              <motion.div key={b.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 + i * 0.1, duration: 0.6 }} className="glass font-accent flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold">
                {b.isLive && <span className="relative mr-0.5 flex size-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-emerald-500" /></span>}
                <b.icon className="text-primary size-4 shrink-0" />
                <span className="truncate">{b.value !== undefined ? <><AnimatedCounter to={b.value} /> {b.label}</> : b.text}</span>
              </motion.div>
            ))}
            </div>
          </div>

      <div className="pointer-events-none absolute top-28 left-6 hidden max-w-28 text-left lg:block">
        <div className="h-16 w-px bg-primary/70" />
        <p className="font-script mt-4 text-2xl font-semibold leading-[1.05] text-primary">Students<br />Ideas<br />Community</p>
      </div>
      <div className="pointer-events-none absolute top-24 right-8 hidden size-44 rounded-full border border-primary/20 lg:block" aria-hidden>
        <div className="absolute inset-3 rounded-full border border-secondary/20" />
        <div className="absolute top-1/2 -right-7 h-px w-14 bg-primary/50" />
        <div className="absolute -bottom-2 left-1/2 size-2 -translate-x-1/2 rounded-full bg-primary" />
      </div>
      </div>
    </section>
  );
}
