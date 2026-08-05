import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { NiscAccordion } from "@/components/nisc/NiscAccordion";
import { rulebook } from "@/data/nisc";

export function Rulebook() {
  return (
    <section id="rulebook" className="relative mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="Rulebook & Constitution"
        title={<>How the cell <span className="gradient-text">works</span></>}
        subtitle="12 constitutional clauses and Appendix A covering history, membership, hierarchy, elections, and conduct."
      />
      <ScrollReveal>
        <NiscAccordion
          numbered
          items={rulebook.map((r) => ({ title: r.title, content: r.text }))}
        />
      </ScrollReveal>
      <div className="mt-8 flex justify-center">
        <Link
          to="/rulebook"
          className="gradient-brand font-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]"
        >
          Open Full Interactive Rulebook & Reader <BookOpen className="size-4" />
        </Link>
      </div>
    </section>
  );
}
