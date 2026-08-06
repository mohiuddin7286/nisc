import { ArrowDown, Sparkles, Users, Landmark, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { FloatingShapes } from "@/components/nisc/FloatingShapes";
import { MagneticButton } from "@/components/nisc/MagneticButton";
import { AnimatedCounter } from "@/components/nisc/AnimatedCounter";
import { members, council, departmentsCount } from "@/data/nisc";

const title = "North India Student Cell";

export function Hero() {
  const badges = [
    { icon: Users, isLive: true, value: members.length, label: "Active Members" },
    { icon: Landmark, isLive: false, value: council.length, label: "Council Members" },
    { icon: GraduationCap, isLive: false, value: departmentsCount, label: "Departments" },
    { icon: Sparkles, isLive: false, text: "2025–26 Council", label: "2025–26 Council" },
  ];

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="aurora-bg absolute inset-0 -z-10" aria-hidden />
      <FloatingShapes />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--foreground) 22%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 flex justify-center"
        >
          <img
            src="/nisc-logo.png"
            alt="NISC Logo"
            className="size-24 rounded-full border-2 border-white/80 bg-white object-cover p-1 shadow-[var(--shadow-glow)] sm:size-28"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass font-accent mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide"
        >
          <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
          KL University Hyderabad · Est. August 2024
        </motion.div>

        <h1 className="font-display mt-8 text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.98] font-extrabold">
          {title.split(" ").map((word, wi) => (
            <span key={wi} className="mr-[0.25em] inline-block whitespace-nowrap">
              {word.split("").map((c, ci) => (
                <motion.span
                  key={ci}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.15 + wi * 0.09 + ci * 0.028,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
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
          className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-xl"
        >
          Many states, one campus, one family. We build community, mentorship and culture for
          students from North India at KLH — and everyone who wants in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#join">
            Join NISC <Sparkles className="size-4" />
          </MagneticButton>
          <MagneticButton href="#about" variant="ghost">
            Explore <ArrowDown className="size-4" />
          </MagneticButton>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1, duration: 0.6 }}
              className="glass font-accent flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold"
            >
              {b.isLive && (
                <span className="relative flex size-2 mr-0.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                </span>
              )}
              <b.icon className="text-primary size-4 shrink-0" />
              <span className="truncate">
                {b.value !== undefined ? (
                  <>
                    <AnimatedCounter to={b.value} /> {b.label}
                  </>
                ) : (
                  b.text
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
