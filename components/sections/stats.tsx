// src/components/sections/stats.tsx

"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Trophy,
  Building2,
} from "lucide-react";

import AnimatedCounter from "@/components/ui/animated-counter";
import GlassCard from "@/components/ui/glass-card";

const stats = [
  {
    title: "Active Members",
    value: 28,
    suffix: "+",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Departments",
    value: 4,
    icon: Building2,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Council Members",
    value: 12,
    icon: Trophy,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Established",
    value: 2025,
    icon: GraduationCap,
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
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
                <GlassCard className="h-full p-6 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                    >
                      <Icon size={28} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      NISC
                    </span>
                  </div>

                  <div className="mt-8 sm:mt-10">
                    <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                      <AnimatedCounter
                        to={item.value}
                        suffix={item.suffix}
                      />
                    </h3>

                    <p className="mt-3 text-sm sm:text-base font-medium text-slate-500">
                      {item.title}
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8 h-1 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1,
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}