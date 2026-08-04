import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass rounded-3xl p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

const palettes = [
  "linear-gradient(135deg, oklch(0.82 0.13 60), oklch(0.7 0.19 35))",
  "linear-gradient(135deg, oklch(0.78 0.12 258), oklch(0.66 0.16 275))",
  "linear-gradient(135deg, oklch(0.82 0.12 150), oklch(0.68 0.15 190))",
  "linear-gradient(135deg, oklch(0.84 0.1 90), oklch(0.72 0.16 55))",
  "linear-gradient(135deg, oklch(0.8 0.12 350), oklch(0.68 0.16 20))",
];

export function Avatar({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  const bg = palettes[name.length % palettes.length];
  return (
    <div
      className={cn(
        "font-display grid shrink-0 place-items-center rounded-2xl font-extrabold text-white",
        size === "lg" ? "h-24 w-24 text-3xl" : "h-14 w-14 text-lg",
      )}
      style={{ background: bg }}
      aria-hidden
    >
      {initials}
    </div>
  );
}
