// src/components/sections/hero.tsx

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Users,
  GraduationCap,
  Trophy,
} from "lucide-react";

import GlassCard from "@/components/ui/glass-card";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[450px] w-[450px] rounded-full bg-blue-400/15 blur-[140px]" />

        <div className="absolute bottom-[-250px] right-[-250px] h-[500px] w-[500px] rounded-full bg-orange-300/15 blur-[140px]" />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/20"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/10"
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 py-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-5 py-2 backdrop-blur-2xl">
            <Sparkles
              size={16}
              className="text-blue-600"
            />
            <span className="text-sm font-semibold text-slate-700">
              KL University Hyderabad
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            North India
            <br />
            <span className="gradient-text">
              Student Cell
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            {SITE.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-xl sm:px-8 sm:py-4"
            >
              Join NISC
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="rounded-2xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-lg sm:px-8 sm:py-4"
            >
              Explore
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md py-6 lg:max-w-lg"
        >
          <GlassCard className="mx-auto max-w-xs p-6 sm:max-w-sm sm:p-8 md:p-10">
            <div className="flex flex-col items-center">
              <motion.img
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                src="/logo.png"
                alt="NISC"
                className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
              />

              <h2 className="mt-6 text-center text-xl font-black text-slate-900 sm:text-2xl lg:text-3xl">
                North India
                <br />
                Student Cell
              </h2>

              <p className="mt-4 text-center text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
                Connecting students through
                leadership, culture, mentorship
                and lifelong friendships.
              </p>
            </div>
          </GlassCard>

          {/* Floating Card 1 */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute top-0 left-0 sm:top-2 sm:left-0 z-20"
          >
            <GlassCard className="p-3 sm:p-4 shadow-xl">
              <div className="flex items-center gap-2.5">
                <Users className="text-blue-600" size={18} />
                <div>
                  <h4 className="text-xs font-bold">
                    Community
                  </h4>
                  <p className="text-[10px] text-slate-500 sm:text-xs">
                    Student Driven
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute right-0 top-28 sm:top-36 sm:right-0 z-20"
          >
            <GlassCard className="p-3 sm:p-4 shadow-xl">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="text-indigo-600" size={18} />
                <div>
                  <h4 className="text-xs font-bold">
                    Academics
                  </h4>
                  <p className="text-[10px] text-slate-500 sm:text-xs">
                    Workshops
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Floating Card 3 */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute bottom-0 left-2 sm:bottom-2 sm:left-4 z-20"
          >
            <GlassCard className="p-3 sm:p-4 shadow-xl">
              <div className="flex items-center gap-2.5">
                <Trophy className="text-orange-500" size={18} />
                <div>
                  <h4 className="text-xs font-bold">
                    Council
                  </h4>
                  <p className="text-[10px] text-slate-500 sm:text-xs">
                    2025–26
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}