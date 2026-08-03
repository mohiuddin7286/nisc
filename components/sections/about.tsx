// src/components/sections/about.tsx

"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Sparkles,
  Users,
} from "lucide-react";

import GlassCard from "@/components/ui/glass-card";

const features = [
  {
    icon: Users,
    title: "Community",
    description:
      "Connecting North Indian students across departments and academic years.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Landmark,
    title: "Culture",
    description:
      "Celebrating festivals, traditions and the diversity of North India.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: GraduationCap,
    title: "Academics",
    description:
      "Peer learning, mentorship, workshops and career development.",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: HeartHandshake,
    title: "Leadership",
    description:
      "Providing opportunities to organize, lead and contribute to the student community.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-5 py-2 backdrop-blur-xl">
              <Sparkles
                size={16}
                className="text-blue-600"
              />

              <span className="text-sm font-semibold text-slate-700">
                About NISC
              </span>
            </div>

            <h2 className="mt-6 sm:mt-8 text-4xl sm:text-5xl font-black leading-tight tracking-tight text-slate-900">
              More Than A
              <br />

              <span className="gradient-text">
                Student Community
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              North India Student Cell (NISC) is a
              student-led organization at KL University
              Hyderabad that brings together students
              from North Indian states through culture,
              academics, leadership and collaboration.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              We create an environment where students
              build friendships, celebrate traditions,
              support one another academically and grow
              as future leaders.
            </p>

            <GlassCard className="mt-12 p-8">
              <div className="flex gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <BookOpen size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Our Vision
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    To build the strongest student
                    network that empowers North Indian
                    students academically, culturally
                    and professionally.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right */}

          <div className="grid gap-7 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
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
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white`}
                    >
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {feature.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}