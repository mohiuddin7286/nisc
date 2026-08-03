// src/components/layout/navbar.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

import GlassCard from "@/components/ui/glass-card";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((i) =>
        document.querySelector(i.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 py-5">
        <motion.nav
          initial={{
            y: -80,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className={`w-full max-w-7xl transition-all duration-300 ${
            scrolled ? "scale-[.98]" : ""
          }`}
        >
          <GlassCard className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}

              <Link
                href="#home"
                className="flex items-center gap-4"
              >
                <img
                  src="/logo.png"
                  alt="NISC"
                  width={40}
                  height={40}
                  className="rounded-full"
                  loading="lazy"
                />

                <div>
                  <h1 className="text-lg font-black text-slate-900">
                    NISC
                  </h1>

                  <p className="text-xs text-slate-500">
                    KL University Hyderabad
                  </p>
                </div>
              </Link>

              {/* Desktop */}
              <div className="hidden items-center gap-1 lg:flex lg:gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative rounded-xl px-2.5 py-1.5 text-xs font-semibold transition lg:px-3 lg:py-2 xl:text-sm"
                  >
                    {active === item.href.replace("#", "") ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-blue-600"
                      />
                    ) : null}

                    <span
                      className={`relative z-10 ${
                        active === item.href.replace("#", "")
                          ? "text-white"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden shrink-0 lg:block">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg lg:px-5 lg:py-2.5 lg:text-sm"
                >
                  Join Now
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              {/* Mobile */}
              <button
                onClick={() => setOpen(!open)}
                className="rounded-xl p-2 lg:hidden"
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </GlassCard>
        </motion.nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="fixed left-4 right-4 top-24 z-40 lg:hidden"
          >
            <GlassCard className="p-6">
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    {item.label}
                  </Link>
                ))}

                <button className="mt-4 rounded-2xl bg-blue-600 py-4 font-semibold text-white">
                  Join NISC
                </button>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}