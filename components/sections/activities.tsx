// src/components/sections/activities.tsx

"use client";

import { motion } from "framer-motion";
import {
  Languages,
  GraduationCap,
  Users,
  Trophy,
  Landmark,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

import GlassCard from "@/components/ui/glass-card";

const activities = [
  {
    title: "Hindi Diwas",
    description:
      "Annual celebrations promoting Hindi language through speeches, poetry and literary competitions.",
    icon: Languages,
    gradient: "from-blue-600 to-cyan-500",
    size: "large",
  },
  {
    title: "Technical Workshops",
    description:
      "Peer learning sessions, resume building, coding workshops and academic guidance.",
    icon: GraduationCap,
    gradient: "from-violet-600 to-indigo-500",
    size: "small",
  },
  {
    title: "Cultural Festivals",
    description:
      "Celebrating the traditions, heritage and diversity of North India.",
    icon: Landmark,
    gradient: "from-orange-500 to-amber-500",
    size: "small",
  },
  {
    title: "Networking",
    description:
      "Meetups, freshers interaction, alumni guidance and department collaboration.",
    icon: Users,
    gradient: "from-emerald-500 to-teal-500",
    size: "wide",
  },
  {
    title: "Leadership Programs",
    description:
      "Council management, event organization and leadership development.",
    icon: Trophy,
    gradient: "from-pink-500 to-rose-500",
    size: "small",
  },
  {
    title: "Mentorship",
    description:
      "Helping juniors academically through guidance and peer mentorship.",
    icon: BookOpen,
    gradient: "from-sky-500 to-blue-600",
    size: "small",
  },
];

export default function Activities() {
  return (
    <section
      id="activities"
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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-white/40 bg-white/70 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
            Activities
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
            What We Do
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            NISC conducts cultural, academic and
            leadership activities that help students
            connect, learn and grow together.
          </p>
        </motion.div>

        {/* Bento Grid */}

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.title}
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
                className={
                  activity.size === "large"
                    ? "xl:col-span-2"
                    : activity.size === "wide"
                    ? "xl:col-span-2"
                    : ""
                }
              >
                <GlassCard className="h-full p-6 sm:p-8">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${activity.gradient} text-white shadow-lg`}
                      >
                        <Icon size={30} />
                      </div>

                      <h3 className="mt-8 text-3xl font-black text-slate-900">
                        {activity.title}
                      </h3>

                      <p className="mt-5 max-w-md leading-8 text-slate-600">
                        {activity.description}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-500">
                        NISC Initiative
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition hover:bg-blue-600 hover:text-white">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] items-stretch">
              <div className="flex flex-col justify-center min-w-0 p-8 sm:p-10 lg:p-12">
                <h3 className="text-4xl font-black text-slate-900">
                  Beyond Events
                </h3>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  Every initiative organized by NISC
                  focuses on strengthening cultural
                  identity, academic excellence,
                  leadership skills and meaningful
                  friendships among students.
                </p>
              </div>

              <div className="flex h-full w-full min-w-0 items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-10 lg:p-12 text-center text-white">
                <div>
                  <h3 className="text-6xl font-black">
                    10+
                  </h3>

                  <p className="mt-4 text-xl text-blue-100">
                    Planned Activities Every Semester
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