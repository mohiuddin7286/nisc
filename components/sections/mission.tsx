// src/components/sections/mission.tsx

"use client";

import { motion } from "framer-motion";
import {
  Languages,
  GraduationCap,
  Users,
  HeartHandshake,
  Target,
  Sparkles,
} from "lucide-react";

import GlassCard from "@/components/ui/glass-card";

const missions = [
  {
    title: "Promote Hindi & Culture",
    description:
      "Preserve and celebrate the richness of Hindi language, literature, traditions and the diverse cultural heritage of North India through meaningful student initiatives.",
    icon: Languages,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Academic Growth",
    description:
      "Encourage peer learning, mentorship, technical workshops, career guidance and collaborative learning across departments.",
    icon: GraduationCap,
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Community Building",
    description:
      "Create a welcoming environment where students build friendships, network professionally and support one another throughout university life.",
    icon: Users,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Leadership Development",
    description:
      "Provide opportunities to organize events, manage teams and develop leadership qualities through active participation.",
    icon: HeartHandshake,
    color: "from-orange-500 to-amber-500",
  },
];

export default function Mission() {
  return (
    <section
      id="mission"
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
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-5 py-2 backdrop-blur-xl">
            <Sparkles
              size={16}
              className="text-blue-600"
            />

            <span className="text-sm font-semibold text-slate-700">
              Mission & Vision
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900">
            Empowering Students
            <br />

            <span className="gradient-text">
              Beyond Academics
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Our mission is to create a vibrant student
            ecosystem where culture, education,
            leadership and collaboration come together
            to shape future leaders.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {missions.map((item, index) => {
            const Icon = item.icon;

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
              >
                <GlassCard className="h-full p-8">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white`}
                    >
                      <Icon size={30} />
                    </div>

                    <Target
                      className="text-slate-300"
                      size={22}
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20"
        >
          <GlassCard className="overflow-hidden p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-6 sm:p-8 lg:p-12">
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900">
                  Our Commitment
                </h3>

                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
                  NISC strives to create opportunities
                  for every member through cultural
                  engagement, academic collaboration,
                  leadership initiatives and community
                  service while maintaining an inclusive
                  and supportive environment.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-5 sm:gap-6 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 sm:p-8 lg:p-12 text-white">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 font-bold backdrop-blur-md">
                    01
                  </div>
                  <div>
                    <h4 className="text-base font-bold sm:text-lg">Inclusive Community</h4>
                    <p className="text-xs sm:text-sm text-blue-100 mt-1">Welcoming every student regardless of branch or year.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 font-bold backdrop-blur-md">
                    02
                  </div>
                  <div>
                    <h4 className="text-base font-bold sm:text-lg">Cultural Heritage</h4>
                    <p className="text-xs sm:text-sm text-blue-100 mt-1">Celebrating rich traditions and festivals on campus.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 font-bold backdrop-blur-md">
                    03
                  </div>
                  <div>
                    <h4 className="text-base font-bold sm:text-lg">Peer Mentorship</h4>
                    <p className="text-xs sm:text-sm text-blue-100 mt-1">Academic guidance and career growth initiatives.</p>
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