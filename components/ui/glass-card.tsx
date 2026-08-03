// src/components/ui/glass-card.tsx

"use client";

import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import { MouseEvent } from "react";

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
  ...props
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove(
    e: MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const spotlight = useMotionTemplate`
    radial-gradient(
      220px circle at ${mouseX}px ${mouseY}px,
      rgba(255,255,255,.45),
      transparent 70%
    )
  `;

  return (
    <motion.div
      onMouseMove={onMouseMove}
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 28,
      }}
      className={cn(
        "group relative w-full min-w-0 overflow-hidden rounded-[32px]",
        "border border-white/40",
        "bg-white/[0.68] backdrop-blur-3xl",
        "shadow-[0_8px_32px_rgba(15,23,42,.06)]",
        className
      )}
      {...props}
    >
      {/* Mouse Spotlight */}

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: spotlight,
        }}
      />

      {/* Reflection */}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-24 top-0 h-full w-24 rotate-12 bg-white/30 blur-2xl transition-all duration-700 group-hover:left-[120%]" />
      </div>

      {/* Glow */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 w-full min-w-0">
        {children}
      </div>
    </motion.div>
  );
}