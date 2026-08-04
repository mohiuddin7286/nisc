import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { NiscAccordion } from "@/components/nisc/NiscAccordion";
import { faqs } from "@/data/nisc";

export function FAQ() {
  return (
    <section id="faq" className="relative mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="FAQ"
        title={<>Questions, <span className="gradient-text">answered</span></>}
        subtitle="Everything people usually ask before joining NISC."
      />
      <ScrollReveal>
        <NiscAccordion items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
      </ScrollReveal>
    </section>
  );
}
