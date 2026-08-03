// src/components/layout/footer.tsx

"use client";

import Link from "next/link";
import {
  ArrowUp,
  Heart,
  MapPin,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

import GlassCard from "@/components/ui/glass-card";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <GlassCard className="overflow-hidden p-0">
          <div className="grid gap-8 sm:gap-12 p-6 sm:p-10 lg:p-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}

            <div>
              <img
                src="/logo.png"
                alt="NISC"
                className="h-20 w-20 rounded-full object-cover"
              />

              <h2 className="mt-6 text-3xl font-black text-slate-900">
                North India
                <br />
                Student Cell
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Connecting North Indian students at KL University Hyderabad
                through leadership, academics and culture.
              </p>

              <div className="mt-8 flex gap-3">
                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition hover:bg-pink-100 hover:text-pink-600"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition hover:bg-slate-200"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition hover:bg-blue-100 hover:text-blue-600"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition hover:bg-sky-100 hover:text-sky-600"
                >
                  <FaTelegramPlane size={18} />
                </a>
              </div>
            </div>

            {/* Navigation */}

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Navigation
              </h3>

              <div className="mt-8 flex flex-col gap-4 text-slate-600">
                <Link href="#home">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#council">Council</Link>
                <Link href="#members">Members</Link>
                <Link href="#activities">Activities</Link>
                <Link href="#join">Join</Link>
              </div>
            </div>

            {/* Organization */}

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Organization
              </h3>

              <div className="mt-8 space-y-4 text-slate-600">
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>KL University Hyderabad</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>Coming Soon</span>
                </div>

                <p>Founded in 2025</p>
                <p>Student-led Community</p>
                <p>Academic • Cultural • Leadership</p>
              </div>
            </div>

            {/* CTA */}

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Stay Connected
              </h3>

              <p className="mt-8 leading-8 text-slate-600">
                Follow NISC for updates about workshops, cultural programs,
                elections and student activities.
              </p>

              <button
                onClick={scrollTop}
                className="mt-10 flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:scale-105"
              >
                Back to Top
                <ArrowUp size={18} />
              </button>
            </div>
          </div>

          {/* Bottom */}

          <div className="border-t border-slate-200 px-6 sm:px-10 lg:px-14 py-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-sm text-slate-500">
                © 2025 North India Student Cell. All Rights Reserved.
              </p>

              <p className="flex items-center gap-2 text-sm text-slate-500">
                Built with
                <Heart
                  size={16}
                  className="fill-red-500 text-red-500"
                />
                by NISC Web Team
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
}