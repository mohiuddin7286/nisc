import { Send, FileText, Instagram } from "lucide-react";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { MagneticButton } from "@/components/nisc/MagneticButton";
import { FloatingShapes } from "@/components/nisc/FloatingShapes";

export function Join() {
  return (
    <section id="join" className="relative px-6 py-24">
      <ScrollReveal variant="scale">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem]">
          <div className="aurora-bg absolute inset-0" aria-hidden />
          <FloatingShapes />
          <div className="glass relative rounded-[2.5rem] px-6 py-16 text-center sm:px-14">
            <span className="glass-strong font-accent text-primary inline-flex rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
              Membership is free
            </span>
            <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
              Become a member — <span className="gradient-text">join our community</span>
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-base leading-relaxed">
              Fill the form, hop into the Telegram group and say hi. You'll get event invites, a
              mentor from your home state and a group of people who get it.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton href="#">
                Join Telegram <Send className="size-4" />
              </MagneticButton>
              <MagneticButton href="#" variant="ghost">
                Google Form <FileText className="size-4" />
              </MagneticButton>
              <MagneticButton href="#" variant="ghost">
                Instagram <Instagram className="size-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
