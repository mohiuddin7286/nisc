import { useMemo, useState } from "react";
import { Search, Instagram, Github, Linkedin, X, ArrowUpDown, Users, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { TiltCard } from "@/components/nisc/TiltCard";
import { Avatar } from "@/components/nisc/GlassCard";
import { AnimatedCounter } from "@/components/nisc/AnimatedCounter";
import { members, type Member } from "@/data/nisc";
import { cn } from "@/lib/utils";

const uniq = (arr: string[]) => Array.from(new Set(arr)).filter((x) => x && x !== "—").sort();

const SORTS = {
  "name-asc": { label: "Sort: Name A–Z", fn: (a: Member, b: Member) => a.name.localeCompare(b.name) },
  "name-desc": { label: "Sort: Name Z–A", fn: (a: Member, b: Member) => b.name.localeCompare(a.name) },
  roll: { label: "Sort: Roll No", fn: (a: Member, b: Member) => a.rollNo.localeCompare(b.rollNo) },
  year: {
    label: "Sort: Year",
    fn: (a: Member, b: Member) => a.year.localeCompare(b.year) || a.name.localeCompare(b.name),
  },
  state: {
    label: "Sort: State",
    fn: (a: Member, b: Member) => a.state.localeCompare(b.state) || a.name.localeCompare(a.name),
  },
} as const;

type SortKey = keyof typeof SORTS;

const matchesQuery = (m: Member, q: string) =>
  !q ||
  m.name.toLowerCase().includes(q) ||
  m.rollNo.includes(q) ||
  m.state.toLowerCase().includes(q) ||
  m.department.toLowerCase().includes(q) ||
  m.year.toLowerCase().includes(q);

export function Members() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("name-asc");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  const options = useMemo(
    () => ({
      department: uniq(members.map((m) => m.department)),
      year: uniq(members.map((m) => m.year)),
      state: uniq(members.map((m) => m.state)),
    }),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members
      .filter((m) => {
        if (!matchesQuery(m, q)) return false;
        if (department && m.department !== department) return false;
        if (year && m.year !== year) return false;
        if (stateFilter && m.state !== stateFilter) return false;
        return true;
      })
      .sort(SORTS[sort].fn);
  }, [query, department, year, stateFilter, sort]);

  const hasActiveFilter = Boolean(query || department || year || stateFilter);

  const clearAll = () => {
    setQuery("");
    setDepartment("");
    setYear("");
    setStateFilter("");
  };

  return (
    <section id="members" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Members"
        title={<>Meet the <span className="gradient-text">cell</span></>}
        subtitle="Search by name, roll number, department or state — or use the filters below."
      />

      <ScrollReveal>
        <div className="glass rounded-2xl p-4 sm:p-5">
          {/* Live Member Counter Badge */}
          <div className="mb-4 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Live Count: <span className="font-bold"><AnimatedCounter to={members.length} /></span> Active Members</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name, roll no, department, state…"
                aria-label="Search members"
                className="focus:ring-primary/40 h-10 w-full rounded-xl border border-white/60 bg-white/70 pr-9 pl-10 text-sm outline-none transition-all focus:ring-2"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            {/* Minimal Filter & Sort Dropdowns */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Department */}
              <div className="relative">
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  aria-label="Filter by department"
                  className={cn(
                    "font-accent h-10 cursor-pointer appearance-none rounded-xl border px-3 pr-8 text-xs font-semibold outline-none transition-all",
                    department
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-white/60 bg-white/70 text-foreground hover:bg-white",
                  )}
                >
                  <option value="">Dept: All</option>
                  {options.department.map((d) => (
                    <option key={d} value={d}>
                      Dept: {d}
                    </option>
                  ))}
                </select>
                <ChevronDown className="text-muted-foreground pointer-events-none absolute top-1/2 right-2.5 size-3.5 -translate-y-1/2" />
              </div>

              {/* Year */}
              <div className="relative">
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  aria-label="Filter by year"
                  className={cn(
                    "font-accent h-10 cursor-pointer appearance-none rounded-xl border px-3 pr-8 text-xs font-semibold outline-none transition-all",
                    year
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-white/60 bg-white/70 text-foreground hover:bg-white",
                  )}
                >
                  <option value="">Year: All</option>
                  {options.year.map((y) => (
                    <option key={y} value={y}>
                      Year: {y}
                    </option>
                  ))}
                </select>
                <ChevronDown className="text-muted-foreground pointer-events-none absolute top-1/2 right-2.5 size-3.5 -translate-y-1/2" />
              </div>

              {/* State */}
              <div className="relative">
                <select
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                  aria-label="Filter by state"
                  className={cn(
                    "font-accent h-10 cursor-pointer appearance-none rounded-xl border px-3 pr-8 text-xs font-semibold outline-none transition-all",
                    stateFilter
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-white/60 bg-white/70 text-foreground hover:bg-white",
                  )}
                >
                  <option value="">State: All</option>
                  {options.state.map((s) => (
                    <option key={s} value={s}>
                      State: {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="text-muted-foreground pointer-events-none absolute top-1/2 right-2.5 size-3.5 -translate-y-1/2" />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  aria-label="Sort members"
                  className="font-accent h-10 cursor-pointer appearance-none rounded-xl border border-white/60 bg-white/70 px-3 pr-8 text-xs font-semibold text-foreground outline-none transition-all hover:bg-white"
                >
                  {Object.entries(SORTS).map(([k, s]) => (
                    <option key={k} value={k}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ArrowUpDown className="text-muted-foreground pointer-events-none absolute top-1/2 right-2.5 size-3.5 -translate-y-1/2" />
              </div>

              {/* Clear All */}
              {hasActiveFilter && (
                <button
                  onClick={clearAll}
                  aria-label="Clear all filters"
                  className="font-accent hover:bg-destructive/10 text-destructive inline-flex h-10 items-center gap-1 rounded-xl px-3 text-xs font-semibold transition-colors"
                >
                  <X className="size-3.5" /> Clear
                </button>
              )}
            </div>
          </div>

          {/* Minimal Stats Row */}
          <div className="mt-3 flex items-center justify-between border-t border-white/40 pt-3 text-xs text-muted-foreground">
            <p className="inline-flex items-center gap-1.5">
              <Users className="size-3.5" />
              Showing <span className="font-semibold text-foreground"><AnimatedCounter to={filtered.length} /></span> of{" "}
              <span className="font-semibold text-foreground"><AnimatedCounter to={members.length} /></span> members
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((m, i) => (
          <ScrollReveal key={m.id} variant="up" delay={Math.min(i, 8) * 0.04}>
            <TiltCard className="h-full">
              <div className="glass flex h-full flex-col justify-between rounded-3xl p-5">
                <div>
                  <div className="flex min-w-0 items-center gap-3">
                    <Avatar name={m.name} />
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-bold">{m.name}</h3>
                      <p className="text-muted-foreground truncate text-xs">
                        {m.rollNo}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-3 text-xs">
                    {m.state !== "—" ? m.state : "North India"}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="bg-accent text-accent-foreground font-accent rounded-full px-2.5 py-1 text-[11px] font-medium">
                      {m.department}
                    </span>
                    <span className="bg-accent text-accent-foreground font-accent rounded-full px-2.5 py-1 text-[11px] font-medium">
                      {m.year}
                    </span>
                  </div>
                </div>
                {(m.instagram || m.github || m.linkedin) && (
                  <div className="mt-5 flex gap-2 pt-1">
                    {m.instagram && (
                      <a
                        href={m.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass hover:text-primary grid h-8 w-8 place-items-center rounded-full transition-colors"
                        aria-label={`${m.name}'s Instagram`}
                      >
                        <Instagram className="size-[14px]" />
                      </a>
                    )}
                    {m.github && (
                      <a
                        href={m.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass hover:text-primary grid h-8 w-8 place-items-center rounded-full transition-colors"
                        aria-label={`${m.name}'s GitHub`}
                      >
                        <Github className="size-[14px]" />
                      </a>
                    )}
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass hover:text-primary grid h-8 w-8 place-items-center rounded-full transition-colors"
                        aria-label={`${m.name}'s LinkedIn`}
                      >
                        <Linkedin className="size-[14px]" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">No members match those filters yet.</p>
          <button
            onClick={clearAll}
            className="font-accent text-primary mt-3 text-sm font-semibold hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}

