// src/components/sections/join.tsx

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Users,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import GlassCard from "@/components/ui/glass-card";

export default function Join() {
  return (
    <section
      id="join"
      className="relative py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
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
        >
          <GlassCard className="overflow-hidden p-0">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] items-stretch">
              {/* LEFT */}

              <div className="flex flex-col justify-center min-w-0 p-6 sm:p-10 lg:p-14">
                <span className="rounded-full border border-white/40 bg-white/70 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
                  Join NISC
                </span>

                <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
                  Become Part of Our
                  <br />

                  <span className="gradient-text">
                    Student Community
                  </span>
                </h2>

                <p className="mt-8 text-lg leading-9 text-slate-600">
                  Join a growing network of students
                  who believe in leadership, academic
                  excellence, cultural unity and
                  lifelong friendships.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    {
                      icon: Users,
                      text: "Student Community",
                    },
                    {
                      icon: GraduationCap,
                      text: "Academic Mentorship",
                    },
                    {
                      icon: HeartHandshake,
                      text: "Leadership Opportunities",
                    },
                    {
                      icon: ShieldCheck,
                      text: "Cultural Activities",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.text}
                        className="flex items-center gap-4"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                          <Icon size={20} />
                        </div>

                        <p className="font-medium text-slate-700">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 flex flex-wrap gap-5">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg"
                  >
                    Join Community

                    <ArrowRight size={20} />
                  </motion.button>

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold"
                  >
                    View Rulebook
                  </motion.button>
                </div>
              </div>

              {/* RIGHT */}

              <div className="flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-6 sm:p-10 lg:p-14 text-white">
                <div className="w-full max-w-md">
                  <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">
                    <Sparkles
                      size={40}
                      className="mb-6"
                    />

                    <h3 className="text-4xl font-black">
                      Why Join?
                    </h3>

                    <p className="mt-5 leading-8 text-blue-100">
                      Build meaningful connections,
                      celebrate your culture, improve
                      your academic journey and become
                      part of one of the most active
                      student communities on campus.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-5">
                      <div className="rounded-2xl bg-white/10 p-5 text-center">
                        <h4 className="text-4xl font-black">
                          28+
                        </h4>

                        <p className="mt-2 text-sm text-blue-100">
                          Members
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/10 p-5 text-center">
                        <h4 className="text-4xl font-black">
                          4+
                        </h4>

                        <p className="mt-2 text-sm text-blue-100">
                          Departments
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/10 p-5 text-center">
                        <h4 className="text-4xl font-black">
                          12
                        </h4>

                        <p className="mt-2 text-sm text-blue-100">
                          Council
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/10 p-5 text-center">
                        <h4 className="text-4xl font-black">
                          2025
                        </h4>

                        <p className="mt-2 text-sm text-blue-100">
                          Founded
                        </p>
                      </div>
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