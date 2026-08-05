import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Download,
  Printer,
  Search,
  ChevronRight,
  Shield,
  Calendar,
  FileText,
  Menu,
  X,
  ArrowUpRight,
  CheckCircle2,
  ListOrdered,
} from "lucide-react";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { MagneticButton } from "@/components/nisc/MagneticButton";
import { rulebookSections, RulebookSection } from "@/data/nisc";

export const Route = createFileRoute("/rulebook")({
  head: () => ({
    meta: [
      { title: "NISC Constitution & Rulebook | KL University Hyderabad" },
      {
        name: "description",
        content:
          "Official Constitution and Rulebook of the North India Student Cell (NISC), KL University Hyderabad.",
      },
      { property: "og:title", content: "NISC Constitution & Rulebook | KL University Hyderabad" },
      {
        property: "og:description",
        content:
          "Official Constitution and Rulebook of the North India Student Cell (NISC), KL University Hyderabad.",
      },
    ],
  }),
  component: RulebookPage,
});

function RulebookPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

  // Filter sections based on search query
  const filteredSections = rulebookSections.filter((section) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchTitle = section.title.toLowerCase().includes(q);
    const matchSummary = section.summary.toLowerCase().includes(q);
    const matchPoints = section.points?.some((p) => p.toLowerCase().includes(q)) ?? false;
    const matchSubsections =
      section.subsections?.some(
        (sub) => sub.title.toLowerCase().includes(q) || sub.text.toLowerCase().includes(q)
      ) ?? false;
    return matchTitle || matchSummary || matchPoints || matchSubsections;
  });

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const section of rulebookSections) {
        const el = document.getElementById(`section-${section.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 pt-20 pb-24">
      {/* Background Aurora glow */}
      <div className="aurora-bg fixed inset-0 opacity-40 pointer-events-none" aria-hidden />

      {/* Hero Section */}
      <section className="relative px-6 py-16 sm:py-24 max-w-6xl mx-auto">
        <ScrollReveal variant="blur">
          <div className="flex justify-center">
            <span className="glass-strong font-accent text-primary inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
              <Shield className="size-3.5" /> Official Governance Document
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="mt-6 text-center text-4xl font-extrabold sm:text-6xl tracking-tight">
            Constitution & <span className="gradient-text">Rulebook</span>
          </h1>
          <p className="font-accent mt-3 text-center text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            North India Student Cell (NISC) · KL University Hyderabad
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-center text-base sm:text-lg leading-relaxed">
            The guiding constitutional framework, organizational structure, election procedures, and code of conduct governing NISC.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#reader"
              className="gradient-brand font-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]"
            >
              <BookOpen className="size-4" /> Read Online
            </a>
            <button
              onClick={handlePrint}
              className="glass-strong font-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:border-primary/40"
            >
              <Download className="size-4" /> Download PDF / Print
            </button>
          </div>
        </ScrollReveal>

        {/* Document Metadata Cover Preview */}
        <ScrollReveal delay={0.25}>
          <div className="mt-12 mx-auto max-w-3xl glass-strong rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/50 pb-6">
              <div className="flex items-center gap-4">
                <div className="gradient-brand grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white shadow-md">
                  <FileText className="size-7" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Official Rulebook (2025–26)</h2>
                  <p className="text-xs text-muted-foreground font-accent">Ratified & Promulgated by Founding Council</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold glass rounded-full px-3 py-1.5 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="size-3.5" /> Active & Enforceable
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-muted-foreground block font-accent uppercase text-[10px] tracking-wider">Institution</span>
                <span className="font-semibold text-foreground">KL University Hyderabad</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-accent uppercase text-[10px] tracking-wider">Inaugurated</span>
                <span className="font-semibold text-foreground">17 February 2025</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-accent uppercase text-[10px] tracking-wider">Sections</span>
                <span className="font-semibold text-foreground">12 Clauses + Appendix A</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-accent uppercase text-[10px] tracking-wider">Governance</span>
                <span className="font-semibold text-foreground">Democratic Body</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Main Reader View with Sticky Sidebar TOC */}
      <section id="reader" className="relative px-6 py-12 max-w-7xl mx-auto">
        {/* Mobile TOC Drawer Button */}
        <div className="lg:hidden mb-6 flex items-center justify-between glass-strong rounded-2xl p-4">
          <span className="font-accent text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Table of Contents
          </span>
          <button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="glass rounded-xl p-2 text-foreground focus:outline-none"
          >
            {mobileTocOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile TOC Overlay */}
        {mobileTocOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-md p-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
              <h3 className="font-bold text-lg">Table of Contents</h3>
              <button onClick={() => setMobileTocOpen(false)} className="p-2">
                <X className="size-6" />
              </button>
            </div>
            <nav className="space-y-1">
              {rulebookSections.map((s) => (
                <a
                  key={s.id}
                  href={`#section-${s.id}`}
                  onClick={() => setMobileTocOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === s.id
                      ? "gradient-brand text-white font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.sectionNumber}. {s.title}
                </a>
              ))}
            </nav>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Sticky Sidebar TOC */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            <div className="glass-strong rounded-3xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-border/50">
                <h3 className="font-accent text-xs font-bold uppercase tracking-[0.18em] text-primary flex items-center gap-2">
                  <ListOrdered className="size-4" /> Table of Contents
                </h3>
                <span className="text-[11px] font-semibold text-muted-foreground">
                  {rulebookSections.length} Sections
                </span>
              </div>

              {/* Search Bar */}
              <div className="mt-4 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search constitution..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full glass rounded-2xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* TOC Nav List */}
              <nav className="mt-4 space-y-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1">
                {filteredSections.map((s) => (
                  <a
                    key={s.id}
                    href={`#section-${s.id}`}
                    onClick={() => setActiveSection(s.id)}
                    className={`group flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-medium transition-all ${
                      activeSection === s.id
                        ? "gradient-brand text-white font-bold shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="truncate">
                      {s.sectionNumber}. {s.title}
                    </span>
                    <ChevronRight
                      className={`size-3.5 transition-transform ${
                        activeSection === s.id ? "translate-x-0.5 text-white" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </a>
                ))}
              </nav>

              {/* Sidebar Toolbar */}
              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                <button
                  onClick={handlePrint}
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5"
                >
                  <Printer className="size-3.5" /> Print Copy
                </button>
                <Link
                  to="/"
                  hash="join"
                  className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  Join NISC <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Document Content View */}
          <main className="lg:col-span-8 space-y-8">
            <div className="glass-strong rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl print:shadow-none print:border-none">
              <div className="border-b border-border/60 pb-8 mb-8 text-center sm:text-left">
                <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Official Publication
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
                  Constitution & Rulebook of the North India Student Cell (NISC)
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  KL University Hyderabad Campus · Ratified 2025–26
                </p>
              </div>

              {filteredSections.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-base font-semibold">No sections matching "{searchQuery}"</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-3 text-xs text-primary font-bold hover:underline"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <div className="space-y-12">
                  {filteredSections.map((s) => (
                    <article
                      key={s.id}
                      id={`section-${s.id}`}
                      className="scroll-mt-32 border-b border-border/40 pb-10 last:border-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="gradient-brand grid h-8 w-8 place-items-center rounded-xl text-xs font-bold text-white shadow-sm">
                          {s.sectionNumber}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                          {s.title}
                        </h3>
                      </div>

                      <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {s.summary}
                      </p>

                      {/* Points list */}
                      {s.points && s.points.length > 0 && (
                        <ul className="mt-4 space-y-2.5 pl-2">
                          {s.points.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90 leading-relaxed">
                              <span className="gradient-brand mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Subsections list (for structure) */}
                      {s.subsections && s.subsections.length > 0 && (
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {s.subsections.map((sub, idx) => (
                            <div
                              key={idx}
                              className="glass rounded-2xl p-4 border border-white/10 hover:border-primary/30 transition-colors"
                            >
                              <h4 className="font-bold text-sm text-foreground">{sub.title}</h4>
                              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                                {sub.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              )}

              {/* End of Document Stamp */}
              <div className="mt-12 pt-8 border-t border-border/60 text-center">
                <div className="inline-flex flex-col items-center">
                  <div className="gradient-brand grid h-12 w-12 place-items-center rounded-full text-white shadow-lg mb-3">
                    <Shield className="size-6" />
                  </div>
                  <p className="font-accent text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    End of Constitution Document
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    North India Student Cell (NISC) · KL University Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
