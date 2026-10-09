import { SectionHeading } from "@/components/kutumb-club/SectionHeading";
import { ScrollReveal } from "@/components/kutumb-club/ScrollReveal";
import { KutumbAccordion } from "@/components/kutumb-club/KutumbAccordion";
import { faqs } from "@/data/kutumb-club";

export function FAQ() {
  return (
    <section id="faq" className="relative mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="FAQ"
        title={<>Questions, <span className="gradient-text">answered</span></>}
        subtitle="Everything people usually ask before joining KUTUMB CLUB."
      />
      <ScrollReveal>
        <KutumbAccordion items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
      </ScrollReveal>
    </section>
  );
}
