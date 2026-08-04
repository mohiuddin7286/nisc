import { useState } from "react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { stateData } from "@/data/nisc";

// Stylised India silhouette (decorative, not survey-accurate).
const INDIA_PATH =
  "M196 20 L214 34 L236 30 L250 44 L268 40 L276 56 L262 74 L272 92 L296 92 L318 104 L330 96 L344 108 L336 126 L352 140 L344 158 L322 156 L300 166 L292 186 L306 200 L300 218 L282 224 L272 244 L252 252 L244 274 L252 296 L240 318 L228 352 L214 392 L200 428 L186 396 L172 356 L160 316 L150 280 L138 252 L120 232 L104 210 L96 186 L80 168 L64 150 L58 128 L74 118 L92 122 L108 112 L118 92 L112 70 L128 56 L146 58 L160 44 L176 30 Z";

// Approximate marker positions on the stylised map (percentages of viewBox).
const markers: Record<string, { x: number; y: number }> = {
  "Himachal Pradesh": { x: 132, y: 74 },
  Punjab: { x: 112, y: 92 },
  Uttarakhand: { x: 162, y: 92 },
  Haryana: { x: 130, y: 104 },
  Delhi: { x: 140, y: 116 },
  Rajasthan: { x: 100, y: 140 },
  "Uttar Pradesh": { x: 176, y: 132 },
  Bihar: { x: 232, y: 142 },
  Jharkhand: { x: 232, y: 172 },
  "Madhya Pradesh": { x: 152, y: 176 },
  Chhattisgarh: { x: 198, y: 196 },
  Odisha: { x: 232, y: 210 },
  "Andaman & Nicobar": { x: 300, y: 300 },
};

export function IndiaMap() {
  const [hover, setHover] = useState<string | null>(null);
  const active = stateData.find((s) => s.state === hover);

  return (
    <section id="map" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Our Reach"
        title={<>Many states, <span className="gradient-text">one campus</span></>}
        subtitle="Hover a state to see how many NISC members call it home."
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
        <ScrollReveal variant="left">
          <div className="glass relative rounded-[2rem] p-6 sm:p-10">
            <svg viewBox="0 0 400 460" className="mx-auto h-auto w-full max-w-md">
              <defs>
                <linearGradient id="stateGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.82 0.13 60)" />
                  <stop offset="100%" stopColor="oklch(0.68 0.19 35)" />
                </linearGradient>
              </defs>
              <path
                d={INDIA_PATH}
                fill="color-mix(in oklab, var(--foreground) 7%, transparent)"
                stroke="color-mix(in oklab, var(--foreground) 16%, transparent)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {stateData.map((s) => {
                const m = markers[s.state];
                if (!m) return null;
                const on = hover === s.state;
                return (
                  <g
                    key={s.state}
                    onMouseEnter={() => setHover(s.state)}
                    onMouseLeave={() => setHover(null)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={m.x}
                      cy={m.y}
                      r={on ? 16 : 12}
                      fill="url(#stateGrad)"
                      opacity={on ? 0.28 : 0.16}
                      className="transition-all duration-300"
                    />
                    <circle
                      cx={m.x}
                      cy={m.y}
                      r={on ? 8 : 6}
                      fill="url(#stateGrad)"
                      className="transition-all duration-300"
                    />
                    <text
                      x={m.x}
                      y={m.y - 16}
                      textAnchor="middle"
                      className="fill-foreground text-[9px] font-semibold transition-opacity duration-200"
                      opacity={on ? 1 : 0}
                    >
                      {s.state}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="glass-strong pointer-events-none absolute right-6 bottom-6 left-6 rounded-2xl px-5 py-4 sm:left-auto sm:w-64">
              {active ? (
                <>
                  <p className="font-accent text-sm font-bold">{active.state}</p>
                  <p className="text-primary mt-1 text-sm font-semibold">
                    {active.members} member{active.members > 1 ? "s" : ""}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">{active.cities}</p>
                </>
              ) : (
                <p className="text-muted-foreground text-xs">
                  Hover any highlighted state to see details.
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
                  hover === s.state ? "-translate-y-1 shadow-[var(--shadow-glow)]" : ""
                }`}
              >
                <p className="font-accent truncate text-sm font-semibold">{s.state}</p>
                <p className="text-muted-foreground mt-0.5 text-xs">{s.members} member{s.members > 1 ? "s" : ""}</p>
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
