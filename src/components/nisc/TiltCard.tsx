import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<{ transform: string }>({ transform: "" });
  const [glare, setGlare] = useState({ x: 50, y: 50, on: false });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        setStyle({
          transform: `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateY(-6px)`,
        });
        setGlare({ x: px * 100, y: py * 100, on: true });
      }}
      onMouseLeave={() => {
        setStyle({ transform: "" });
        setGlare((g) => ({ ...g, on: false }));
      }}
      style={style}
      className={cn(
        "relative rounded-3xl transition-transform duration-300 ease-out will-change-transform",
        className,
      )}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: glare.on ? 1 : 0,
          background: `radial-gradient(300px circle at ${glare.x}% ${glare.y}%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 65%)`,
        }}
      />
    </div>
  );
}
