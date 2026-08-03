// src/components/ui/mouse-spotlight.tsx

"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

interface MouseSpotlightProps {
  children: React.ReactNode;
}

export default function MouseSpotlight({
  children,
}: MouseSpotlightProps) {
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(37,99,235,.12),
      transparent 45%
    )
  `;

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background,
        }}
      />

      {children}
    </div>
  );
}