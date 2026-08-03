// src/components/sections/election.tsx

"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Megaphone,
  Vote,
  Trophy,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import GlassCard from "@/components/ui/glass-card";

const steps = [
  {
    title: "Nomination",
    description:
      "Eligible members submit nominations through the official election form.",
    icon: FileText,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Campaign",
    description:
      "Candidates present their vision while maintaining professionalism and respect.",
    icon: Megaphone,
    color: "from-violet-600 to-indigo-600",
  },
  {
    title: "Voting",
    description:
      "Every registered member casts one vote through the official voting portal.",
    icon: Vote,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Results",
    description:
      "Highest votes become President while the runner-up becomes Vice President.",
    icon: Trophy,
    color: "from-orange-500 to-amber-500",
  },
];

export default function Election() {
  return (
    <section
      id="election"
      className="relative py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-white/40 bg-white/70 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
            Elections
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
            Executive Council Election
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            A transparent and democratic process to
            elect the next leadership of the North
            India Student Cell.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <GlassCard className="relative h-full p-6 sm:p-8">
                  <span className="absolute right-6 top-6 text-4xl sm:text-5xl font-black text-slate-100 pointer-events-none">
                    0{index + 1}
                  </span>

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white`}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {step.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20"
        >
          <GlassCard className="overflow-hidden p-0">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] items-stretch">
              <div className="flex flex-col justify-center min-w-0 p-8 sm:p-10 lg:p-12">
                <h3 className="text-4xl font-black text-slate-900">
                  Election Process
                </h3>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  Elections are conducted every semester
                  to ensure transparency, equal
                  opportunity and democratic leadership
                  within the organization.
                </p>

                <button className="mt-10 flex w-fit items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
                  View Rulebook

                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="flex h-full w-full min-w-0 flex-col justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-10 text-white">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
                    <CheckCircle2 className="mt-1 text-green-300" />

                    <div>
                      <h4 className="font-bold">
                        One Member • One Vote
                      </h4>

                      <p className="mt-2 text-blue-100">
                        Every eligible member gets one
                        equal vote.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
                    <CheckCircle2 className="mt-1 text-green-300" />

                    <div>
                      <h4 className="font-bold">
                        Transparent Results
                      </h4>

                      <p className="mt-2 text-blue-100">
                        Results are announced after vote
                        verification.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
                    <CheckCircle2 className="mt-1 text-green-300" />

                    <div>
                      <h4 className="font-bold">
                        Semester Leadership
                      </h4>

                      <p className="mt-2 text-blue-100">
                        The elected council serves for one
                        academic semester.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}