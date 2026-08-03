// src/components/sections/members.tsx

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Building2,
  GraduationCap,
  Users,
  Filter,
} from "lucide-react";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import GlassCard from "@/components/ui/glass-card";
import { members } from "@/data/members";

export default function Members() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [batch, setBatch] = useState("All");

  const departments = [
    "All",
    ...new Set(members.map((m) => m.department)),
  ];

  const batches = [
    "All",
    ...new Set(members.map((m) => m.batch)),
  ];

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const searchMatch =
        member.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        member.state
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        member.city
          .toLowerCase()
          .includes(search.toLowerCase());

      const departmentMatch =
        department === "All" ||
        member.department === department;

      const batchMatch =
        batch === "All" ||
        member.batch === batch;

      return (
        searchMatch &&
        departmentMatch &&
        batchMatch
      );
    });
  }, [search, department, batch]);

  return (
    <section
      id="members"
      className="relative py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

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
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-white/40 bg-white/70 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
            Community
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
            Our Members
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Students from multiple departments and
            North Indian states working together as
            one community.
          </p>
        </motion.div>

        {/* Filters */}

        <GlassCard className="mb-14 p-6">
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search member..."
                autoComplete="off"
                data-1p-ignore
                data-lpignore="true"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-14 outline-none transition focus:border-blue-600"
              />
            </div>

            <select
              value={department}
              onChange={(e) =>
                setDepartment(e.target.value)
              }
              className="h-14 rounded-2xl border border-slate-200 bg-white px-5 outline-none"
            >
              {departments.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              value={batch}
              onChange={(e) =>
                setBatch(e.target.value)
              }
              className="h-14 rounded-2xl border border-slate-200 bg-white px-5 outline-none"
            >
              {batches.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

            <div className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white">
              <Filter size={18} />

              {filteredMembers.length} Members
            </div>
          </div>
        </GlassCard>

        {/* Members Grid */}

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredMembers.map((member, index) => (
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
                delay: index * 0.03,
              }}
            >
              <GlassCard className="h-full p-5 sm:p-6">
                <div className="flex h-full flex-col justify-between items-center text-center">
                  <img
                    src={
                      member.avatar ||
                      "/avatars/default.jpg"
                    }
                    alt={member.name}
                    className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
                  />

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>

                  {member.role && (
                    <span className="mt-3 rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700">
                      {member.role}
                    </span>
                  )}

                  <div className="mt-6 space-y-3 text-left text-sm text-slate-600">
                    <div className="flex items-center gap-3">
                      <GraduationCap size={16} />

                      {member.batch}
                    </div>

                    <div className="flex items-center gap-3">
                      <Building2 size={16} />

                      {member.department}
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin size={16} />

                      {member.city},{" "}
                      {member.state}
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition hover:bg-pink-100">
                      <FaInstagram size={18} />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition hover:bg-slate-200">
                      <FaGithub size={18} />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition hover:bg-blue-100">
                      <FaLinkedin size={18} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Card */}

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
                  Growing Together
                </h3>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  NISC represents students from
                  multiple departments and states,
                  creating an environment that
                  encourages friendship, leadership,
                  academic collaboration and cultural
                  unity.
                </p>
              </div>

              <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-center text-white">
                <Users size={34} className="mx-auto" />

                <h4 className="mt-4 text-4xl font-black">
                  {members.length}
                </h4>

                <p className="mt-2">
                  Registered Members
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}