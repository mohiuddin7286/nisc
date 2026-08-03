// src/components/sections/council.tsx

"use client";

import { motion } from "framer-motion";
import {
  Crown,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import GlassCard from "@/components/ui/glass-card";
import { council } from "@/data/council";

const getIcon = (role: string) => {
  if (role.includes("President")) return Crown;
  if (role.includes("Vice")) return ShieldCheck;
  return GraduationCap;
};

export default function Council() {
  const president = council.find((m) =>
    m.role.includes("President")
  );

  const others = council.filter(
    (m) => !m.role.includes("President")
  );

  return (
    <section
      id="council"
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
            2025–26 Leadership
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
            Executive Council
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Meet the students leading the North India
            Student Cell at KL University Hyderabad.
          </p>
        </motion.div>

        {/* PRESIDENT */}

        {president && (
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-12"
          >
            <GlassCard className="overflow-hidden p-0">
              <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] items-stretch">
                <div className="flex h-full w-full min-w-0 items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-12">
                  <img
                    src={president.avatar}
                    alt={president.name}
                    className="h-40 w-40 sm:h-48 sm:w-48 rounded-full border-4 border-white object-cover shadow-2xl"
                  />
                </div>

                <div className="flex flex-col justify-center min-w-0 p-6 sm:p-8 lg:p-12">
                  <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                    <Crown size={16} />

                    PRESIDENT
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
                    {president.name}
                  </h3>

                  <p className="mt-2 text-base sm:text-lg lg:text-xl text-slate-500 font-medium">
                    {president.department} • {president.batch}
                  </p>

                  <p className="mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
                    Leading the organization with the
                    vision of creating an inclusive,
                    academically strong and culturally
                    vibrant North Indian student
                    community.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="rounded-2xl bg-blue-600 px-6 py-3.5 sm:px-7 sm:py-4 font-semibold text-white transition hover:scale-105">
                      View Profile
                    </button>

                    <button className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 sm:px-7 sm:py-4 font-semibold transition hover:border-blue-600">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* OTHER COUNCIL */}

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((member, index) => {
            const Icon = getIcon(member.role);

            return (
              <motion.div
                key={member.name}
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
                  delay: index * 0.06,
                }}
              >
                <GlassCard className="h-full p-8">
                  <div className="flex items-start justify-between">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
                    />

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>

                  <div className="mt-3 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                    {member.role}
                  </div>

                  <div className="mt-6 space-y-2 text-slate-600">
                    <p>{member.department}</p>
                    <p>{member.batch}</p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex gap-3">
                      <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                        <FaInstagram size={18} />
                      </button>

                      <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                        <FaGithub size={18} />
                      </button>

                      <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                        <FaLinkedin size={18} />
                      </button>
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-slate-400"
                    />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER */}

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
          <GlassCard className="p-10">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <h3 className="text-3xl font-black text-slate-900">
                  Thank You, Council 2025–26
                </h3>

                <p className="mt-3 max-w-2xl text-lg text-slate-600">
                  Thank you to every council member for
                  contributing towards building a stronger
                  and more connected North India Student
                  Cell.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-5 text-center text-white">
                <p className="text-sm uppercase tracking-widest">
                  Next Election
                </p>

                <h4 className="mt-2 text-4xl font-black">
                  2026–27
                </h4>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}