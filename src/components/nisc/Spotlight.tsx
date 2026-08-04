import { useEffect, useState } from "react";

export function Spotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--primary) 9%, transparent), transparent 70%)`,
      }}
    />
  );
}
