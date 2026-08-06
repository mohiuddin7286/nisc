import { useState } from "react";
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
  const active = stateData.find((s) => s.state === hover);

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
          <div className="glass relative rounded-[2rem] p-4 sm:p-6 overflow-hidden border border-amber-500/20 shadow-xl bg-amber-500/5">
            {/* Map Image */}
            <div className="relative mx-auto w-full max-w-lg select-none aspect-[1000/900]">
              <img
                src="/india-nepal-map.jpg"
                alt="Official Map of India & Nepal"
                className="h-full w-full object-contain rounded-xl"
              />

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
                    onClick={() => setHover(hover === pin.name ? null : pin.name)}
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
                        isHovered
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
            <div className="glass-strong pointer-events-none absolute right-6 bottom-6 left-6 rounded-2xl px-5 py-4 sm:left-auto sm:w-64 border border-amber-500/30 bg-background/80 backdrop-blur-md">
              {active ? (
                <>
                  <p className="font-accent text-sm font-bold flex items-center gap-2 text-foreground">
                    <span>{active.state}</span>
                    {active.state === "Nepal" && (
                      <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-300">
                        International
                      </span>
                    )}
                  </p>
                  <p className="text-primary mt-1 text-sm font-semibold">
                    <AnimatedCounter to={active.members} /> member{active.members > 1 ? "s" : ""}
                  </p>
                  <p className="text-muted-foreground mt-0.5 text-xs font-medium">NISC Active Members</p>
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
          <div className="grid grid-cols-2 gap-3">
            {stateData.map((s) => (
              <button
                key={s.state}
                onMouseEnter={() => setHover(s.state)}
                onMouseLeave={() => setHover(null)}
                className={`glass rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                  hover === s.state
                    ? "-translate-y-1 border-primary/50 bg-primary/10 shadow-[var(--shadow-glow)]"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <p className="font-accent truncate text-sm font-semibold">{s.state}</p>
                  {s.state === "Nepal" && (
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">🇳🇵</span>
                  )}
                </div>
                <p className="text-muted-foreground mt-0.5 text-xs">
                  <AnimatedCounter to={s.members} /> member{s.members > 1 ? "s" : ""}
                </p>
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
