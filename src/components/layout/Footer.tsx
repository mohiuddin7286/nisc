import { ArrowUp, MessageCircle, Send, FileText, Globe, Sparkles, ChevronRight, Heart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const footerNavigation = {
  explore: [
    { label: "About NISC", href: "#about" },
    { label: "Mission & Vision", href: "#mission" },
    { label: "Geographical Reach", href: "#map" },
    { label: "Photo & Event Gallery", href: "#gallery" },
  ],
  community: [
    { label: "Executive Council", href: "#council" },
    { label: "Election Results", href: "#archive" },
    { label: "Members Directory", href: "#members" },
    { label: "Activities & Events", href: "#activities" },
  ],
  governance: [
    { label: "Official Rulebook", href: "/rulebook" },
    { label: "FAQ & Support", href: "#faq" },
    { label: "Join NISC", href: "https://forms.gle/muurnrz133tkgLTq7", external: true, badge: "Open" },
  ],
};

const socialLinks = [
  {
    name: "WhatsApp Community",
    href: "https://chat.whatsapp.com/CPPDb6EnXXzJgX3lWryWGh",
    icon: MessageCircle,
    hoverClass: "hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/10",
  },
  {
    name: "Telegram Channel",
    href: "https://t.me/+DLsCLiYhBiBlMjM1",
    icon: Send,
    hoverClass: "hover:text-sky-500 hover:border-sky-500/40 hover:bg-sky-500/10",
  },
  {
    name: "Membership Registration",
    href: "https://forms.gle/muurnrz133tkgLTq7",
    icon: FileText,
    hoverClass: "hover:text-primary hover:border-primary/40 hover:bg-primary/10",
  },
  {
    name: "KL University Portal",
    href: "https://klh.edu.in",
    icon: Globe,
    hoverClass: "hover:text-purple-500 hover:border-purple-500/40 hover:bg-purple-500/10",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-28 overflow-hidden border-t border-border/80 dark:border-white/10">
      {/* Top Gradient Border Line */}
      <div className="gradient-brand h-1 w-full opacity-80" />

      {/* Main Glassmorphic Container */}
      <div className="graphic-card glass-strong rounded-none border-x-0 border-b-0 bg-background/60 backdrop-blur-2xl">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* Column 1: Brand Column (Width ~35%) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Brand Identity */}
                <a href="#top" className="inline-flex items-center gap-3 group">
                  <img
                    src="/gallery/nisc-logo.png"
                    alt="NISC Logo"
                    className="h-12 w-12 shrink-0 rounded-full border border-white/60 bg-white object-cover shadow-md p-0.5 transition-transform group-hover:scale-105"
                  />
                  <div className="min-w-0">
                    <h2 className="font-display text-xl font-black tracking-tight group-hover:text-primary transition-colors">
                      North India Student's Club
                    </h2>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      KL University Hyderabad
                    </p>
                  </div>
                </a>

                {/* Mission Tagline */}
                <p className="text-muted-foreground mt-4 max-w-md text-sm leading-relaxed">
                  A student-run community for North Indian students at KLH — fostering culture, academic mentorship, leadership, and a warm home away from home.
                </p>

                {/* Status Badge */}
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span>Active Student Club • 2026–27</span>
                </div>
              </div>

              {/* Social & Community Buttons with Tooltips */}
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 mb-3">
                  Connect With Us
                </p>
                <TooltipProvider delayDuration={100}>
                  <div className="flex items-center gap-2.5">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Tooltip key={social.name}>
                          <TooltipTrigger asChild>
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={social.name}
                              className={cn(
                                "glass grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm",
                                social.hoverClass,
                              )}
                            >
                              <Icon className="size-[18px]" strokeWidth={1.75} />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent side="top" sideOffset={6} className="font-accent glass-strong border border-white/20 px-3 py-1 text-xs font-semibold text-foreground shadow-md">
                            {social.name}
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </TooltipProvider>
              </div>
            </div>

            {/* Column 2: Explore Navigation */}
            <nav aria-label="Explore Links" className="lg:col-span-2">
              <h3 className="font-accent text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground/90">
                Explore
              </h3>
              <ul className="mt-5 space-y-3">
                {footerNavigation.explore.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                    >
                      <ChevronRight className="size-3 text-primary/40 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 3: Community & People Links */}
            <nav aria-label="Community Links" className="lg:col-span-2">
              <h3 className="font-accent text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground/90">
                Community
              </h3>
              <ul className="mt-5 space-y-3">
                {footerNavigation.community.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                    >
                      <ChevronRight className="size-3 text-primary/40 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 4: Governance & Resources Links */}
            <nav aria-label="Governance Links" className="lg:col-span-3">
              <h3 className="font-accent text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground/90">
                Governance & Join
              </h3>
              <ul className="mt-5 space-y-3">
                {footerNavigation.governance.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                    >
                      <ChevronRight className="size-3 text-primary/40 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                      <span>{item.label}</span>
                      {item.badge && (
                          <span className={cn(
                            "ml-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold",
                            item.badge === "Closed"
                              ? "border border-slate-300 bg-slate-100 text-slate-600"
                              : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                          )}>
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom Bar & Meta Layer */}
          <div className="mt-14 border-t border-border/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright & Tech Team Attribution */}
            <p className="text-xs font-medium text-muted-foreground text-center md:text-left leading-relaxed">
              © {currentYear} North India Student's Club, KL University Hyderabad. Built with{" "}
              <Heart className="inline-block size-3.5 text-rose-500 fill-rose-500 animate-pulse mx-0.5" /> by the{" "}
              <span className="font-semibold text-foreground">NISC Tech Team</span>.
            </p>

            {/* Back to Top Pill Button */}
            <button
              onClick={handleScrollTop}
              className="glass font-accent group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-foreground border border-white/20 transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:text-primary hover:shadow-md active:scale-95 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

