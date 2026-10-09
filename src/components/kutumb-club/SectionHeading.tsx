import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn("mb-14", align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow && (
        <ScrollReveal variant="blur">
          <span className="glass font-accent inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.08}>
        <h2 className="mt-5 text-4xl leading-[1.1] font-extrabold sm:text-5xl">{title}</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.14}>
        <div
          className={cn(
            "gradient-brand mt-5 h-1 w-20 rounded-full",
            align === "center" && "mx-auto",
          )}
        />
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className={cn(
              "text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
