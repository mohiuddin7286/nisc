import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { NiscAccordion } from "@/components/nisc/NiscAccordion";
import { rulebook } from "@/data/nisc";

export function Rulebook() {
  return (
    <section id="rulebook" className="relative mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="Rulebook"
        title={<>How the cell <span className="gradient-text">works</span></>}
        subtitle="Nine sections covering membership, council structure, elections and conduct."
      />
      <ScrollReveal>
        <NiscAccordion
          numbered
          items={rulebook.map((r) => ({ title: r.title, content: r.text }))}
        />
      </ScrollReveal>
    </section>
  );
}
