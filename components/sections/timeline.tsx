// src/components/sections/timeline.tsx

"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Flag,
  Users,
  Crown,
  Vote,
  ArrowRight,
} from "lucide-react";

import GlassCard from "@/components/ui/glass-card";

const timeline = [
  {
    year: "2025",
    title: "Foundation",
    description:
      "North India Student Cell was established to unite students from North Indian states at KL University Hyderabad.",
    icon: Flag,
    color: "from-blue-600 to-cyan-500",
  },
  {
    year: "2025",
    title: "Community Launch",
    description:
      "Membership registrations opened and students from different departments joined the community.",
    icon: Users,
    color: "from-emerald-500 to-teal-500",
  },
  {
    year: "2025–26",
    title: "First Executive Council",
    description:
      "The first council was formed consisting of the President, Vice President, Department Admins and Year Admins.",
    icon: Crown,
    color: "from-orange-500 to-amber-500",
  },
  {
    year: "2026",
    title: "Next Elections",
    description:
      "A transparent election process will appoint the next Executive Council for the upcoming academic session.",
    icon: Vote,
    color: "from-violet-600 to-indigo-600",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-white/40 bg-white/70 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
            Journey
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
            Our Timeline
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            A quick look at the milestones that shaped
            the North India Student Cell.
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-600 via-indigo-600 to-orange-500 lg:block" />

          <div className="space-y-10">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
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
                  className={`flex ${
                    isEven
                      ? "lg:justify-start"
                      : "lg:justify-end"
                  }`}
                >
                  <div
                    className={`relative w-full lg:w-1/2 ${
                      isEven ? "lg:pr-10" : "lg:pl-10"
                    }`}
                  >
                    <GlassCard className="p-8">
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white`}
                        >
                          <Icon size={28} />
                        </div>

                        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="mt-8 text-3xl font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-5 leading-8 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-blue-600">
                        <span className="font-semibold">
                          Learn More
                        </span>

                        <ArrowRight size={18} />
                      </div>
                    </GlassCard>

                    <div
                      className={`pointer-events-none absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full border-4 border-white bg-blue-600 shadow-xl lg:block ${
                        isEven
                          ? "right-0 translate-x-1/2"
                          : "left-0 -translate-x-1/2"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
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
          className="mt-24"
        >
          <GlassCard className="overflow-hidden p-0">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] items-stretch">
              <div className="flex flex-col justify-center min-w-0 p-8 sm:p-10 lg:p-12">
                <h3 className="text-4xl font-black text-slate-900">
                  Looking Ahead
                </h3>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  NISC continues to expand its
                  community, organize impactful events,
                  strengthen student leadership and
                  create opportunities for every member
                  to contribute.
                </p>
              </div>

              <div className="flex h-full w-full min-w-0 items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-10 lg:p-12 text-white">
                <div className="text-center">
                  <CalendarDays
                    size={64}
                    className="mx-auto"
                  />

                  <h3 className="mt-6 text-5xl font-black">
                    2026–27
                  </h3>

                  <p className="mt-3 text-blue-100">
                    Upcoming Executive Elections
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}