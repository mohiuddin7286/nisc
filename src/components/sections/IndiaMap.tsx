import { useState } from "react";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { AnimatedCounter } from "@/components/nisc/AnimatedCounter";
import { stateData, members } from "@/data/nisc";

type StatePin = {
  id: string;
  name: string;
  left: number; // percentage left
  top: number;  // percentage top
};

const STATE_PINS: StatePin[] = [
  { id: "JK", name: "Jammu & Kashmir / Ladakh", left: 35, top: 11 },
  { id: "HP", name: "Himachal Pradesh", left: 37, top: 20 },
  { id: "PB", name: "Punjab", left: 33, top: 23 },
  { id: "UK", name: "Uttarakhand", left: 41, top: 25 },
  { id: "DL", name: "Delhi", left: 37, top: 27 },
  { id: "RJ", name: "Rajasthan", left: 28, top: 38 },
  { id: "UP", name: "Uttar Pradesh", left: 45, top: 37 },
  { id: "NP", name: "Nepal", left: 58, top: 28 },
  { id: "BR", name: "Bihar", left: 61, top: 39 },
  { id: "JH", name: "Jharkhand", left: 61, top: 48 },
  { id: "WB", name: "West Bengal", left: 68, top: 48 },
  { id: "MP", name: "Madhya Pradesh", left: 38, top: 48 },
  { id: "CG", name: "Chhattisgarh", left: 49, top: 54 },
  { id: "OR", name: "Odisha", left: 59, top: 56 },
  { id: "GJ", name: "Gujarat", left: 22, top: 48 },
  { id: "MH", name: "Maharashtra", left: 33, top: 60 },
  { id: "TS", name: "Telangana", left: 41, top: 65 },
  { id: "AP", name: "Andhra Pradesh", left: 43, top: 74 },
  { id: "KA", name: "Karnataka & Goa", left: 32, top: 76 },
  { id: "KL_TN", name: "Kerala & Tamil Nadu", left: 39, top: 86 },
  { id: "NE", name: "North East States", left: 81, top: 39 },
  { id: "AN", name: "Andaman & Nicobar", left: 81, top: 82 },
];

export function IndiaMap() {
  const [hover, setHover] = useState<string | null>(null);
  const [selected, setSelected] = useState(stateData[0]?.state ?? null);
  const active = stateData.find((s) => s.state === (hover ?? selected));
  const highestMemberCount = stateData[0]?.members ?? 1;

  const selectState = (state: string) => {
    setSelected((current) => (current === state ? null : state));
    setHover(state);
  };

  return (
    <section id="map" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-4 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>
            Live Reach: <span className="font-bold"><AnimatedCounter to={members.length} /></span> Active Members across <span className="font-bold"><AnimatedCounter to={stateData.length} /></span> Regions (India & Nepal)
          </span>
        </div>
      </div>

      <SectionHeading
        eyebrow="Our Reach"
        title={<>Many states, <span className="gradient-text">one campus</span></>}
        subtitle="Hover any state on the map (including Nepal) or click below to explore member representation."
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
        <ScrollReveal variant="left">
          <div className="graphic-card glass relative overflow-hidden rounded-[2rem] border border-amber-500/20 bg-amber-500/5 p-4 shadow-xl sm:p-6">
            <div className="relative z-10 mb-4 flex items-center justify-between gap-4 border-b border-white/30 pb-4">
              <div className="flex items-center gap-2">
                <span className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="font-accent text-xs font-bold uppercase tracking-[0.16em] text-primary">Live network</p>
                  <p className="text-xs font-semibold text-muted-foreground">India & Nepal footprint</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-500" /> Active
              </span>
            </div>

            {/* Map Image */}
            <div className="relative mx-auto aspect-[1000/900] w-full max-w-lg select-none">
              <img
                src="/gallery/map-light.png"
                alt="Official Map of India & Nepal"
                className="h-full w-full rounded-xl object-contain dark:hidden"
              />
              <img
                src="/gallery/map-dark.png"
                alt="Official Map of India & Nepal in dark mode"
                className="hidden h-full w-full rounded-xl object-contain dark:block"
              />
              <div className="pointer-events-none absolute inset-5 rounded-[2rem] border border-white/40" />
              <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-white/50 bg-slate-950/55 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                <Sparkles className="size-3 text-amber-300" /> Tap a region
              </div>

              {/* Interactive Hotspot Pin Overlay */}
              {STATE_PINS.map((pin) => {
                const stateMatch = stateData.find((s) => s.state === pin.name);
                const hasMembers = Boolean(stateMatch && stateMatch.members > 0);
                const isHovered = hover === pin.name;

                return (
                  <button
                    key={pin.id}
                    onMouseEnter={() => setHover(pin.name)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => stateMatch && selectState(pin.name)}
                    style={{ left: `${pin.left}%`, top: `${pin.top}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 focus:outline-none ${
                      hasMembers ? "z-20 cursor-pointer" : "z-10 cursor-default"
                    }`}
                    aria-label={pin.name}
                  >
                    {/* Glowing outer pulse for active states */}
                    {hasMembers && (
                      <span className="absolute -inset-2 rounded-full bg-amber-500/30 animate-ping opacity-75 group-hover:bg-orange-500/50" />
                    )}

                    {/* Member Count Pin Circle */}
                    <div
                      className={`relative flex items-center justify-center rounded-full font-bold transition-all duration-300 ${
                        hover === pin.name || selected === pin.name
                          ? "h-8 w-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white text-xs shadow-lg scale-125 border-2 border-white"
                          : hasMembers
                          ? "h-6 w-6 bg-amber-500 text-white text-[11px] border border-white shadow-md"
                          : "h-3 w-3 bg-amber-700/40 border border-white/60"
                      }`}
                    >
                      {hasMembers && stateMatch?.members}
                    </div>

                    {/* Floating Tooltip Label */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-1 whitespace-nowrap rounded-lg px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg pointer-events-none transition-all duration-200 ${
                        isHovered
                          ? "opacity-100 scale-100 bg-slate-900/95 dark:bg-slate-100 dark:text-slate-900 border border-amber-500/30"
                          : "opacity-0 scale-95"
                      }`}
                    >
                      {pin.name} {hasMembers ? `(${stateMatch?.members})` : ""}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Hover Details Floating Info Badge */}
            <div className="graphic-card glass-transparent pointer-events-none absolute right-6 bottom-6 left-6 rounded-2xl border border-amber-500/30 px-5 py-4 sm:left-auto sm:w-64">
              {active ? (
                <>
                  <p className="font-accent flex items-center gap-2 text-sm font-bold text-foreground">
                    <span>{active.state}</span>
                    {active.state === "Nepal" && (
                      <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-300">
                        International
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    <AnimatedCounter to={active.members} /> member{active.members > 1 ? "s" : ""}
                  </p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-primary/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${Math.max(12, (active.members / highestMemberCount) * 100)}%` }} />
                  </div>
                </>
              ) : (
                <p className="text-muted-foreground text-xs">
                  Hover any highlighted pin marker or Nepal on the map to see details.
                </p>
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={0.1}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {stateData.map((s, index) => (
              <button
                key={s.state}
                onMouseEnter={() => setHover(s.state)}
                onMouseLeave={() => setHover(null)}
                onClick={() => selectState(s.state)}
                className={`graphic-card glass-transparent rounded-2xl p-4 text-left ${hover === s.state || selected === s.state ? "border-primary/60 bg-primary/10" : ""}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-2.5">
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-primary/10 font-mono text-[10px] font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <p className="font-accent truncate text-sm font-semibold">{s.state}</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">{s.members} active member{s.members === 1 ? "" : "s"}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-primary/60" />
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-primary/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 transition-all duration-500" style={{ width: `${Math.max(8, (s.members / highestMemberCount) * 100)}%` }} />
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
