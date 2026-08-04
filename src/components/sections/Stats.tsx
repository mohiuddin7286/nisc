import { Users, Landmark, MapPin, GraduationCap, Vote } from "lucide-react";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { AnimatedCounter } from "@/components/nisc/AnimatedCounter";
import { members, council, stateData, departmentsCount } from "@/data/nisc";

const stats = [
  { icon: Users, value: members.length, suffix: "", label: "Active Members" },
  { icon: Landmark, value: council.length, suffix: "", label: "Council Members" },
  { icon: MapPin, value: stateData.length, suffix: "", label: "States Represented" },
  { icon: GraduationCap, value: departmentsCount, suffix: "", label: "Departments" },
  { icon: Vote, value: 2027, suffix: "", label: "Next Election" },
];

export function Stats() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} variant="up" delay={i * 0.06}>
            <div className="glass relative h-full overflow-hidden rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]">
              <div className="gradient-brand absolute inset-x-0 top-0 h-1" />
              <s.icon className="text-primary mx-auto size-6" />
              <p className="font-display mt-4 text-3xl font-extrabold tabular-nums sm:text-4xl">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-muted-foreground font-accent mt-2 text-xs font-medium">{s.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
