import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold font-accent transition-shadow duration-300";
  const styles =
    variant === "primary"
      ? "gradient-brand text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary)_35%,transparent),0_30px_70px_-20px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
      : "glass text-foreground hover:bg-white/80";

  const Tag = (href ? "a" : "button") as "a";

  return (
    <div
      ref={ref}
      className="inline-block"
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setT({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35 });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{ transform: `translate3d(${t.x}px, ${t.y}px, 0)`, transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }}
    >
      <Tag
        href={href}
        onClick={onClick}
        {...(href && href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
        className={cn(base, styles, className)}
      >
        {children}
      </Tag>
    </div>
  );
}
