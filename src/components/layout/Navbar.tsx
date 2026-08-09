import { useEffect, useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Send,
  Info,
  Target,
  MapPin,
  Shield,
  Users,
  Briefcase,
  Sparkles,
  Archive,
  BookOpen,
  Vote,
  HelpCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About", icon: Info },
  { id: "mission", label: "Mission", icon: Target },
  { id: "map", label: "Reach", icon: MapPin },
  { id: "council", label: "Council", icon: Shield },
  { id: "members", label: "Members", icon: Users },
  { id: "placements", label: "Placements", icon: Briefcase },
  { id: "activities", label: "Activities", icon: Sparkles },
  { id: "archive", label: "Archive", icon: Archive },
  { id: "rulebook", label: "Rulebook", href: "/rulebook", icon: BookOpen },
  { id: "election", label: "Election", icon: Vote },
  { id: "faq", label: "FAQ", icon: HelpCircle },
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
              className="h-9 w-9 shrink-0 rounded-full border border-white/60 bg-white object-cover shadow-xs p-0.5"
            />
            <span className="font-display truncate text-base font-extrabold tracking-tight">NISC</span>
          </a>

          {/* Desktop Icon Navigation Bar */}
          <div className="ml-auto hidden items-center gap-1.5 lg:flex">
            {links.map((l) => {
              const linkTarget = l.href || (location.pathname === "/" ? `#${l.id}` : `/#${l.id}`);
              const Icon = l.icon;
              const isActive = active === l.id || (l.href && location.pathname === l.href);

              return (
                <a
                  key={l.id}
                  href={linkTarget}
                  aria-label={l.label}
                  className={cn(
                    "group relative flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-primary font-bold bg-primary/10 shadow-xs"
                      : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
                  )}
                >
                  <Icon className="size-4.5 transition-transform duration-200 group-hover:scale-110" />

                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="bg-primary/15 border-primary/25 absolute inset-0 -z-10 rounded-full border"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Sleek Hover Tooltip */}
                  <span className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 z-50">
                    <span className="glass-strong border-border/80 text-foreground relative block rounded-xl border px-2.5 py-1 text-[11px] font-semibold tracking-wide shadow-lg whitespace-nowrap">
                      {l.label}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="ml-auto flex items-center gap-1 lg:ml-2">
            <a
              href="https://forms.gle/muurnrz133tkgLTq7"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-brand font-accent hidden rounded-full px-5 py-2 text-sm font-semibold text-white shadow-xs transition-transform hover:scale-105 sm:inline-flex"
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
            className="glass-strong fixed inset-0 z-[60] flex flex-col p-6 lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/nisc-logo.png"
                  alt="NISC Logo"
                  className="h-8 w-8 rounded-full border border-white/60 bg-white object-cover"
                />
                <span className="font-display text-lg font-extrabold">Navigation</span>
              </div>
              <button
                className="glass grid h-10 w-10 place-items-center rounded-full"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-1">
              {links.map((l, i) => {
                const linkTarget = l.href || (location.pathname === "/" ? `#${l.id}` : `/#${l.id}`);
                const Icon = l.icon;
                return (
                  <motion.a
                    key={l.id}
                    href={linkTarget}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                    className="font-display border-border/40 hover:bg-secondary/40 flex items-center gap-3.5 border-b py-3 px-2 text-xl font-semibold transition-colors rounded-xl"
                  >
                    <div className="glass text-primary grid h-9 w-9 shrink-0 place-items-center rounded-lg">
                      <Icon className="size-5" />
                    </div>
                    <span>{l.label}</span>
                  </motion.a>
                );
              })}
            </div>
            <div className="mt-8 flex items-center gap-3 pt-4">
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

