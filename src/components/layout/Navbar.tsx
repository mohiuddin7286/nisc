import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { id: "about", label: "About" },
  { id: "mission", label: "Mission" },
  { id: "map", label: "Reach" },
  { id: "council", label: "Council" },
  { id: "members", label: "Members" },
  { id: "activities", label: "Activities" },
  { id: "archive", label: "Archive" },
  { id: "rulebook", label: "Rulebook", href: "/rulebook" },
  { id: "election", label: "Election" },
  { id: "faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center gap-4 rounded-full px-4 transition-all duration-300 sm:px-6",
            scrolled ? "glass-strong h-14 w-[94%]" : "h-16 w-[96%] bg-transparent",
          )}
        >
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <img
              src="/nisc-logo.png"
              alt="NISC Logo"
              className="h-9 w-9 shrink-0 rounded-full border border-white/60 bg-white object-cover shadow-sm p-0.5"
            />
            <span className="font-display truncate text-base font-extrabold">NISC</span>
          </a>

          <div className="ml-auto hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const linkTarget = l.href || (location.pathname === "/" ? `#${l.id}` : `/#${l.id}`);
              return (
                <a
                  key={l.id}
                  href={linkTarget}
                  className={cn(
                    "font-accent relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active === l.id || (l.href && location.pathname === l.href)
                      ? "text-primary font-bold"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                  {(active === l.id || (l.href && location.pathname === l.href)) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="bg-primary/10 absolute inset-0 -z-10 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="ml-auto flex items-center gap-1 lg:ml-2">
            <a
              href="https://forms.gle/muurnrz133tkgLTq7"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-brand font-accent hidden rounded-full px-5 py-2 text-sm font-semibold text-white sm:inline-flex"
            >
              Join NISC
            </a>
            <button
              className="glass grid h-10 w-10 place-items-center rounded-full lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-strong fixed inset-0 z-[60] flex flex-col p-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-extrabold">Menu</span>
              <button
                className="glass grid h-10 w-10 place-items-center rounded-full"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-1">
              {links.map((l, i) => {
                const linkTarget = l.href || (location.pathname === "/" ? `#${l.id}` : `/#${l.id}`);
                return (
                  <motion.a
                    key={l.id}
                    href={linkTarget}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className="font-display border-border/60 border-b py-4 text-2xl font-bold"
                  >
                    {l.label}
                  </motion.a>
                );
              })}
            </div>
            <div className="mt-auto flex items-center gap-3">
              <a
                href="https://chat.whatsapp.com/CPPDb6EnXXzJgX3lWryWGh"
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover:text-emerald-500 grid h-11 w-11 place-items-center rounded-full transition-colors"
                title="WhatsApp Group"
              >
                <MessageCircle className="size-5" />
              </a>
              <a
                href="https://t.me/+DLsCLiYhBiBlMjM1"
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover:text-sky-500 grid h-11 w-11 place-items-center rounded-full transition-colors"
                title="Telegram Group"
              >
                <Send className="size-5" />
              </a>
              <a
                href="https://forms.gle/muurnrz133tkgLTq7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="gradient-brand font-accent ml-auto rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Join NISC
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

