import { Users, GraduationCap, Music, HeartHandshake, Network } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { TiltCard } from "@/components/nisc/TiltCard";

const cards = [
  { icon: Users, title: "Community", text: "A place to land on day one — familiar faces, shared food and a group chat that never sleeps." },
  { icon: GraduationCap, title: "Academic Growth", text: "Notes, doubt sessions, DSA sprints and placement prep run by seniors who've been through it." },
  { icon: Music, title: "Culture", text: "Hindi Diwas, folk nights, kavi sammelan and festivals celebrated the way home does it." },
  { icon: HeartHandshake, title: "Mentorship", text: "Every junior paired with a senior from their state and branch. Real guidance, not formalities." },
  { icon: Network, title: "Collaboration", text: "Working with other regional cells and clubs so the campus feels like one country, not many." },
];

export function Mission() {
  return (
    <section id="mission" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Mission & Objectives"
        title={<>Five things we <span className="gradient-text">promise</span></>}
        subtitle="Everything NISC does rolls up into these five commitments to our members."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <ScrollReveal
            key={c.title}
            variant="scale"
            delay={i * 0.07}
            className={i === 3 ? "lg:col-start-1 lg:col-end-2" : ""}
          >
            <TiltCard className="h-full">
              <div className="glass flex h-full flex-col rounded-3xl p-7">
                <span className="gradient-brand grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[var(--shadow-glow)]">
                  <c.icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{c.text}</p>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
