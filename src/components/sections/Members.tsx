import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, Instagram, Github, X, SlidersHorizontal, ArrowUpDown, Users } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { TiltCard } from "@/components/nisc/TiltCard";
import { Avatar } from "@/components/nisc/GlassCard";
import { members, type Member } from "@/data/nisc";
import { cn } from "@/lib/utils";

const uniq = (arr: string[]) => Array.from(new Set(arr)).sort();

type Facet = "department" | "year" | "state";

const SORTS = {
  "name-asc": { label: "Name A–Z", fn: (a: Member, b: Member) => a.name.localeCompare(b.name) },
  "name-desc": { label: "Name Z–A", fn: (a: Member, b: Member) => b.name.localeCompare(a.name) },
  roll: { label: "Roll number", fn: (a: Member, b: Member) => a.rollNo.localeCompare(b.rollNo) },
  year: {
    label: "Year, then name",
    fn: (a: Member, b: Member) => a.year.localeCompare(b.year) || a.name.localeCompare(b.name),
  },
  state: {
    label: "State, then name",
    fn: (a: Member, b: Member) => a.state.localeCompare(b.state) || a.name.localeCompare(b.name),
  },
} as const;

type SortKey = keyof typeof SORTS;

const matchesQuery = (m: Member, q: string) =>
  !q ||
  m.name.toLowerCase().includes(q) ||
  m.rollNo.includes(q) ||
  m.city.toLowerCase().includes(q) ||
  m.state.toLowerCase().includes(q) ||
  m.department.toLowerCase().includes(q) ||
  m.year.toLowerCase().includes(q);

export function Members() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("name-asc");
  const [open, setOpen] = useState(true);
  const [sel, setSel] = useState<Record<Facet, string[]>>({
    department: [],
    year: [],
    state: [],
  });

  const options = useMemo(
    () => ({
      department: uniq(members.map((m) => m.department)),
      year: uniq(members.map((m) => m.year)),
      state: uniq(members.map((m) => m.state)),
    }),
    [],
  );

  const passes = (m: Member, ignore?: Facet) =>
    matchesQuery(m, query.trim().toLowerCase()) &&
    (ignore === "department" || !sel.department.length || sel.department.includes(m.department)) &&
    (ignore === "year" || !sel.year.length || sel.year.includes(m.year)) &&
    (ignore === "state" || !sel.state.length || sel.state.includes(m.state));

  const filtered = useMemo(
    () => members.filter((m) => passes(m)).sort(SORTS[sort].fn),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, sel, sort],
  );

  // Counts reflect what each option would yield with the other facets applied.
  const counts = useMemo(() => {
    const build = (facet: Facet) =>
      Object.fromEntries(
        options[facet].map((o) => [
          o,
          members.filter((m) => m[facet] === o && passes(m, facet)).length,
        ]),
      ) as Record<string, number>;
    return {
      department: build("department"),
      year: build("year"),
      state: build("state"),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, sel, options]);

  const toggle = (facet: Facet, value: string) =>
    setSel((s) => ({
      ...s,
      [facet]: s[facet].includes(value)
        ? s[facet].filter((v) => v !== value)
        : [...s[facet], value],
    }));

  const activePills = (["department", "year", "state"] as Facet[]).flatMap((f) =>
    sel[f].map((v) => ({ facet: f, value: v })),
  );
  const activeCount = activePills.length + (query ? 1 : 0);

  const clearAll = () => {
    setQuery("");
    setSel({ department: [], year: [], state: [] });
  };

  return (
    <section id="members" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Members"
        title={<>Meet the <span className="gradient-text">cell</span></>}
        subtitle="Search by name, roll number, city, state or department — then stack filters and sort the directory however you like."
      />

      <ScrollReveal>
        <div className="glass rounded-3xl p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name, roll no, city, state…"
                aria-label="Search members"
                className="focus:ring-primary/40 h-12 w-full rounded-2xl border border-white/60 bg-white/70 pr-10 pl-11 text-sm outline-none focus:ring-2"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <div className="relative">
              <ArrowUpDown className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                aria-label="Sort members"
                className="focus:ring-primary/40 font-accent h-12 w-full cursor-pointer appearance-none rounded-2xl border border-white/60 bg-white/70 pr-5 pl-11 text-sm font-semibold outline-none focus:ring-2 sm:w-56"
              >
                {Object.entries(SORTS).map(([k, s]) => (
                  <option key={k} value={k}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className={cn(
                "font-accent inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-semibold transition-all",
                activeCount
                  ? "gradient-brand text-white shadow-[var(--shadow-glow)]"
                  : "border border-white/60 bg-white/70 hover:bg-white",
              )}
            >
              <SlidersHorizontal className="size-4" />
              Filters
              {activeCount > 0 && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white/30 px-1.5 text-[11px]">
                  {activeCount}
                </span>
              )}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-5 space-y-3">
                  <ChipRow
                    label="Department"
                    options={options.department}
                    counts={counts.department}
                    selected={sel.department}
                    onToggle={(v) => toggle("department", v)}
                    onClear={() => setSel((s) => ({ ...s, department: [] }))}
                  />
                  <ChipRow
                    label="Year"
                    options={options.year}
                    counts={counts.year}
                    selected={sel.year}
                    onToggle={(v) => toggle("year", v)}
                    onClear={() => setSel((s) => ({ ...s, year: [] }))}
                  />
                  <ChipRow
                    label="State"
                    options={options.state}
                    counts={counts.state}
                    selected={sel.state}
                    onToggle={(v) => toggle("state", v)}
                    onClear={() => setSel((s) => ({ ...s, state: [] }))}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {activePills.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground font-accent text-xs font-bold tracking-[0.14em] uppercase">
                Active
              </span>
              {activePills.map((p) => (
                <button
                  key={p.facet + p.value}
                  onClick={() => toggle(p.facet, p.value)}
                  className="glass font-accent inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                >
                  {p.value}
                  <X className="size-3.5 opacity-60" />
                </button>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/50 pt-4">
            <p className="text-muted-foreground inline-flex items-center gap-2 text-sm">
              <Users className="size-4" />
              Showing <span className="text-foreground font-semibold">{filtered.length}</span> of{" "}
              {members.length} members
            </p>
            {activeCount > 0 && (
              <button
                onClick={clearAll}
                className="font-accent text-primary inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
              >
                <X className="size-4" /> Clear all
              </button>
            )}
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((m, i) => (
          <ScrollReveal key={m.id} variant="up" delay={Math.min(i, 8) * 0.04}>
            <TiltCard className="h-full">
              <div className="glass flex h-full flex-col rounded-3xl p-5">
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar name={m.name} />
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold">{m.name}</h3>
                    <p className="text-muted-foreground truncate text-xs">
                      {m.rollNo} · {m.department}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-xs">
                  {m.city}, {m.state} · {m.year}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="bg-accent text-accent-foreground font-accent rounded-full px-2.5 py-1 text-[11px] font-medium">
                    {m.department}
                  </span>
                  <span className="bg-accent text-accent-foreground font-accent rounded-full px-2.5 py-1 text-[11px] font-medium">
                    {m.year}
                  </span>
                </div>
                <div className="mt-5 flex gap-2 pt-1">
                  <a href="#" className="glass hover:text-primary grid h-8 w-8 place-items-center rounded-full transition-colors">
                    <Instagram className="size-[14px]" />
                  </a>
                  <a href="#" className="glass hover:text-primary grid h-8 w-8 place-items-center rounded-full transition-colors">
                    <Github className="size-[14px]" />
                  </a>
                </div>
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

function ChipRow({
  label,
  options,
  counts,
  selected,
  onToggle,
  onClear,
}: {
  label: string;
  options: string[];
  counts: Record<string, number>;
  selected: string[];
  onToggle: (v: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-2 sm:grid-cols-[96px_minmax(0,1fr)] sm:items-start">
      <div className="flex items-center gap-2 sm:pt-1.5">
        <span className="text-muted-foreground font-accent text-xs font-bold tracking-[0.14em] uppercase">
          {label}
        </span>
        {selected.length > 0 && (
          <button
            onClick={onClear}
            aria-label={`Clear ${label} filter`}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = selected.includes(o);
          const count = counts[o] ?? 0;
          const empty = count === 0 && !on;
          return (
            <button
              key={o}
              onClick={() => onToggle(o)}
              disabled={empty}
              aria-pressed={on}
              className={cn(
                "font-accent inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all",
                on
                  ? "gradient-brand text-white shadow-[var(--shadow-glow)]"
                  : "border border-white/60 bg-white/60 hover:bg-white",
                empty && "cursor-not-allowed opacity-35 hover:bg-white/60",
              )}
            >
              {o}
              <span className={cn("tabular-nums", on ? "opacity-80" : "text-muted-foreground")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
