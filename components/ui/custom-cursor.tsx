// src/components/ui/custom-cursor.tsx

"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.2,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!mounted) return;
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "button,a,input,select,textarea,.cursor-hover"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mounted, mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Glow */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          scale: hovering ? 2.2 : 1,
          opacity: hovering ? 0.22 : 0.14,
        }}
        transition={{
          duration: 0.18,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full bg-blue-500 blur-xl"
      />

      {/* Ring */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          scale: hovering ? 1.8 : 1,
        }}
        transition={{
          duration: 0.18,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-blue-600"
      />

      {/* Dot */}

      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] flex h-8 w-8 items-center justify-center"
      >
        <div className="h-2 w-2 rounded-full bg-blue-600" />
      </motion.div>
    </>
  );
}