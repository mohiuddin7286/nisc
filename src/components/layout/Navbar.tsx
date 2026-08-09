import { useEffect, useState } from "react";
import {
  Info,
  Target,
  Globe,
  Award,
  Users,
  Briefcase,
  Sparkles,
  Archive,
  BookOpen,
  Vote,
  HelpCircle,
  Menu,
  X,
  MessageCircle,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const links = [
  { id: "about", label: "About", icon: Info },
  { id: "mission", label: "Mission", icon: Target },
  { id: "map", label: "Reach", icon: Globe },
  { id: "council", label: "Council", icon: Award },
  { id: "members", label: "Members", icon: Users },
  { id: "placements", label: "Placements", icon: Briefcase },
  { id: "activities", label: "Activities", icon: Sparkles },
  { id: "archive", label: "Archive", icon: Archive },
  { id: "rulebook", label: "Rulebook", icon: BookOpen, href: "/rulebook" },
  { id: "election", label: "Election", icon: Vote },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("mission");

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
    <TooltipProvider delayDuration={100}>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-300 sm:px-6",
            scrolled
              ? "backdrop-blur-xl bg-white/20 dark:bg-black/30 border border-white/30 dark:border-white/10 shadow-xl h-14 w-[94%]"
              : "backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-lg h-16 w-[96%]",
          )}
        >
          {/* Left Column: Brand Logo */}
          <a href="#top" className="flex min-w-0 items-center gap-2.5 group">
            <img
              src="/nisc-logo.png"
              alt="NISC Logo"
              className="h-9 w-9 shrink-0 rounded-full border border-white/60 bg-white object-cover shadow-sm p-0.5 transition-transform group-hover:scale-105"
            />
            <span className="font-display truncate text-base font-extrabold tracking-tight">NISC</span>
          </a>

          {/* Center Column: Icon Navigation Grid */}
          <div className="hidden lg:grid grid-flow-col auto-cols-max items-center gap-1.5 p-1 rounded-full bg-white/10 dark:bg-white/5 border border-white/15 dark:border-white/10 backdrop-blur-md shadow-inner">
            {links.map((l) => {
              const Icon = l.icon;
              const isCurrent = active === l.id || (l.href && location.pathname === l.href);
              const linkTarget = l.href || (location.pathname === "/" ? `#${l.id}` : `/#${l.id}`);

              return (
                <Tooltip key={l.id}>
                  <TooltipTrigger asChild>
                    <a
                      href={linkTarget}
                      aria-label={l.label}
                      className={cn(
                        "relative grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/10 hover:text-foreground",
                        isCurrent && "text-primary font-bold",
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.75} />
                      {isCurrent && (
                        <motion.span
                          layoutId="nav-icon-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 shadow-[0_0_12px_rgba(var(--primary-rgb),0.3)]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" sideOffset={8} className="font-accent glass-strong border border-white/20 px-3 py-1 text-xs font-semibold text-foreground shadow-md">
                    {l.label}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>

          {/* Right Column: CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="https://forms.gle/muurnrz133tkgLTq7"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-brand font-accent hidden rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all sm:inline-flex"
            >
              Join NISC
            </a>
            <button
              className="glass grid h-10 w-10 place-items-center rounded-full lg:hidden hover:bg-white/20 transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-strong fixed inset-0 z-[60] flex flex-col p-6 lg:hidden backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div className="flex items-center gap-2.5">
                <img
                  src="/nisc-logo.png"
                  alt="NISC Logo"
                  className="h-8 w-8 rounded-full border border-white/60 bg-white object-cover shadow-sm p-0.5"
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

            <div className="mt-6 flex flex-1 flex-col overflow-y-auto pr-1">
              <div className="grid grid-cols-1 gap-1.5">
                {links.map((l, i) => {
                  const Icon = l.icon;
                  const isCurrent = active === l.id || (l.href && location.pathname === l.href);
                  const linkTarget = l.href || (location.pathname === "/" ? `#${l.id}` : `/#${l.id}`);

                  return (
                    <motion.a
                      key={l.id}
                      href={linkTarget}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * i }}
                      className={cn(
                        "flex items-center gap-3.5 rounded-2xl px-4 py-3.5 text-base font-semibold transition-all",
                        isCurrent
                          ? "bg-primary/15 text-primary border border-primary/20 font-bold"
                          : "text-muted-foreground hover:bg-white/10 hover:text-foreground",
                      )}
                    >
                      <div className={cn(
                        "grid h-9 w-9 place-items-center rounded-xl transition-colors",
                        isCurrent ? "bg-primary/20 text-primary" : "bg-secondary/60 text-muted-foreground"
                      )}>
                        <Icon className="size-5" strokeWidth={1.75} />
                      </div>
                      <span>{l.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto flex items-center gap-3 border-t border-border/40 pt-4">
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
                className="gradient-brand font-accent ml-auto rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md"
              >
                Join NISC
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TooltipProvider>
  );
}

