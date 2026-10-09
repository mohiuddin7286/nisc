export function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="blob absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full opacity-60"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div
        className="blob absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full opacity-50"
        style={{ background: "linear-gradient(135deg, oklch(0.78 0.13 258), oklch(0.85 0.09 200))", animationDelay: "3s" }}
      />
      <div
        className="blob absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full opacity-45"
        style={{ background: "linear-gradient(135deg, oklch(0.84 0.12 70), oklch(0.8 0.11 30))", animationDelay: "6s" }}
      />
    </div>
  );
}
