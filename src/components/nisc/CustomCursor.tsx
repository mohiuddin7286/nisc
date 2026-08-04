import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let mx = rx;
    let my = ry;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      const target = e.target as HTMLElement | null;
      const hovering = !!target?.closest("a, button, [data-cursor-hover]");
      if (ring.current) ring.current.dataset["hover"] = hovering ? "true" : "false";
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 rounded-full bg-primary"
      />
      <div
        ref={ring}
        aria-hidden
        data-hover="false"
        className="pointer-events-none fixed top-0 left-0 z-[100] h-9 w-9 rounded-full border border-primary/50 transition-[width,height,background-color,opacity] duration-200 data-[hover=true]:scale-150 data-[hover=true]:bg-primary/10"
      />
    </>
  );
}
