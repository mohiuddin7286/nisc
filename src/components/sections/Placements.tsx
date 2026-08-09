import { useMemo, useState } from "react";
import { Search, Briefcase, Building2, MapPin, Linkedin, Github, GraduationCap, Sparkles, Trophy, Award } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { TiltCard } from "@/components/nisc/TiltCard";
import { Avatar } from "@/components/nisc/GlassCard";
import { AnimatedCounter } from "@/components/nisc/AnimatedCounter";
import { placedSeniors, type PlacedSenior } from "@/data/nisc";
import { cn } from "@/lib/utils";

const uniq = (arr: string[]) => Array.from(new Set(arr)).filter(Boolean).sort();

export function Placements() {
  const [query, setQuery] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [batchFilter, setBatchFilter] = useState("");

  const options = useMemo(
    () => ({
      companies: uniq(placedSeniors.map((s) => s.company)),
      departments: uniq(placedSeniors.map((s) => s.department)),
      batches: uniq(placedSeniors.map((s) => s.batch)),
    }),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return placedSeniors.filter((s) => {
      if (
        q &&
        !s.name.toLowerCase().includes(q) &&
        !s.company.toLowerCase().includes(q) &&
        !s.role.toLowerCase().includes(q) &&
        !s.department.toLowerCase().includes(q) &&
        !s.batch.toLowerCase().includes(q) &&
        !(s.location && s.location.toLowerCase().includes(q)) &&
        !(s.state && s.state.toLowerCase().includes(q))
      ) {
        return false;
      }
      if (companyFilter && s.company !== companyFilter) return false;
      if (departmentFilter && s.department !== departmentFilter) return false;
      if (batchFilter && s.batch !== batchFilter) return false;
      return true;
    });
  }, [query, companyFilter, departmentFilter, batchFilter]);

  const hasActiveFilter = Boolean(query || companyFilter || departmentFilter || batchFilter);

  const clearAll = () => {
    setQuery("");
    setCompanyFilter("");
    setDepartmentFilter("");
    setBatchFilter("");
  };

  const topCompaniesCount = options.companies.length;

  return (
    <section id="placements" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Placements & Career"
        title={
          <>
            Our Placed <span className="gradient-text">Seniors</span>
          </>
        }
        subtitle="Celebrating the success of NISC seniors who secured prestigious offers across top tech companies, MNCs, and industry leaders."
      />

      {/* Top Highlights Banner */}
      <ScrollReveal>
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="glass flex items-center gap-4 rounded-3xl p-5">
            <div className="gradient-brand grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-md">
              <Trophy className="size-6" />
            </div>
            <div>
              <div className="font-display text-2xl font-black">
                <AnimatedCounter to={placedSeniors.length} />+
              </div>
              <p className="text-muted-foreground text-xs font-medium">Placed Seniors</p>
            </div>
          </div>

          <div className="glass flex items-center gap-4 rounded-3xl p-5">
            <div className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-md border border-emerald-500/30">
              <Building2 className="size-6" />
            </div>
            <div>
              <div className="font-display text-2xl font-black">
                <AnimatedCounter to={topCompaniesCount} />+
              </div>
              <p className="text-muted-foreground text-xs font-medium">Top Recruiting Companies</p>
            </div>
          </div>

          <div className="glass flex items-center gap-4 rounded-3xl p-5">
            <div className="bg-amber-500/20 text-amber-600 dark:text-amber-400 grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-md border border-amber-500/30">
              <Award className="size-6" />
            </div>
            <div>
              <div className="font-display text-2xl font-black">100%</div>
              <p className="text-muted-foreground text-xs font-medium">Mentorship & Peer Guidance</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Search & Filter Bar */}
      <ScrollReveal delay={0.05}>
        <div className="glass mb-10 rounded-3xl p-4 sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, company, role, department or batch..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-background/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 h-11 w-full rounded-2xl border pl-10 pr-4 text-sm font-medium transition-all outline-none focus:ring-2"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Company Filter */}
              <select
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
                className="bg-background/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 h-11 rounded-2xl border px-3 text-xs font-semibold outline-none focus:ring-2"
              >
                <option value="">All Companies ({options.companies.length})</option>
                {options.companies.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              {/* Department Filter */}
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="bg-background/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 h-11 rounded-2xl border px-3 text-xs font-semibold outline-none focus:ring-2"
              >
                <option value="">All Depts</option>
                {options.departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              {/* Batch Filter */}
              <select
                value={batchFilter}
                onChange={(e) => setBatchFilter(e.target.value)}
                className="bg-background/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 h-11 rounded-2xl border px-3 text-xs font-semibold outline-none focus:ring-2"
              >
                <option value="">All Batches</option>
                {options.batches.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>

              {hasActiveFilter && (
                <button
                  onClick={clearAll}
                  className="glass hover:bg-destructive/10 hover:text-destructive h-11 rounded-2xl px-4 text-xs font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of Placed Seniors */}
      {filtered.length === 0 ? (
        <div className="glass rounded-3xl p-12 text-center">
          <p className="font-display text-lg font-bold">No seniors found matching your search.</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Try adjusting your search criteria or clearing filters.
          </p>
          <button
            onClick={clearAll}
            className="gradient-brand font-accent mt-4 inline-flex items-center rounded-full px-5 py-2.5 text-xs font-semibold text-white shadow-md"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((senior, idx) => (
            <ScrollReveal key={senior.id} delay={0.04 * (idx % 6)}>
              <TiltCard className="glass group relative flex h-full flex-col justify-between overflow-hidden p-6 transition-all hover:shadow-[var(--shadow-glow)]">
                {/* Background decorative accent */}
                <div className="from-primary/5 pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gradient-to-br to-transparent blur-2xl transition-all group-hover:scale-125" />

                <div>
                  {/* Top Header Row: Company Pill & Package */}
                  <div className="mb-5 flex items-start justify-between gap-2">
                    <span className="glass border-primary/20 inline-flex items-center gap-1.5 rounded-full border bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary shadow-xs">
                      <Building2 className="size-3.5" />
                      {senior.company}
                    </span>

                    {senior.package && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                        <Sparkles className="size-3" />
                        {senior.package}
                      </span>
                    )}
                  </div>

                  {/* Senior Info Header */}
                  <div className="flex items-center gap-4">
                    <Avatar name={senior.name} size="md" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display truncate text-lg font-bold group-hover:text-primary transition-colors">
                        {senior.name}
                      </h3>
                      <div className="mt-0.5 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                        <span className="inline-flex items-center gap-1 rounded-md bg-secondary/60 px-2 py-0.5">
                          <GraduationCap className="size-3" />
                          {senior.batch}
                        </span>
                        <span>•</span>
                        <span>{senior.department}</span>
                      </div>
                    </div>
                  </div>

                  {/* Role & Location */}
                  <div className="mt-5 space-y-2 border-t border-border/50 pt-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                      <Briefcase className="size-3.5 text-primary shrink-0" />
                      <span className="truncate font-semibold">{senior.role}</span>
                    </div>

                    {(senior.location || senior.state) && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="size-3.5 text-muted-foreground shrink-0" />
                        <span>
                          {[senior.location, senior.state].filter(Boolean).join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Social / Connect Links */}
                {(senior.linkedin || senior.github) && (
                  <div className="mt-6 flex items-center justify-end gap-2 border-t border-border/40 pt-3">
                    {senior.linkedin && (
                      <a
                        href={senior.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass hover:text-sky-500 grid h-8 w-8 place-items-center rounded-full transition-colors"
                        title={`${senior.name} on LinkedIn`}
                      >
                        <Linkedin className="size-4" />
                      </a>
                    )}
                    {senior.github && (
                      <a
                        href={senior.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass hover:text-foreground grid h-8 w-8 place-items-center rounded-full transition-colors"
                        title={`${senior.name} on GitHub`}
                      >
                        <Github className="size-4" />
                      </a>
                    )}
                  </div>
                )}
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Senior Submission CTA Banner */}
      <ScrollReveal delay={0.1}>
        <div className="glass relative mt-14 overflow-hidden rounded-3xl p-8 text-center sm:p-10">
          <div className="gradient-brand/10 pointer-events-none absolute inset-0 bg-gradient-to-r via-transparent" />
          <h3 className="font-display relative text-2xl font-black sm:text-3xl">
            Are you a placed senior or got an offer?
          </h3>
          <p className="text-muted-foreground relative mx-auto mt-2 max-w-xl text-sm leading-relaxed sm:text-base">
            Share your placement journey and help guide junior students at KL University Hyderabad. Get featured on the official NISC Placements Wall.
          </p>
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://forms.gle/muurnrz133tkgLTq7"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-brand font-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              <Sparkles className="size-4" />
              Submit Placement Details
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
