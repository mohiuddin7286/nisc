// src/components/ui/aurora-background.tsx

"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full bg-blue-400/8 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-250px] top-[20%] h-[700px] w-[700px] rounded-full bg-violet-400/8 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -100, 0],
          y: [0, -80, 120, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] left-[20%] h-[650px] w-[650px] rounded-full bg-cyan-300/8 blur-[170px]"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 140,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/10"
      />
    </div>
  );
}