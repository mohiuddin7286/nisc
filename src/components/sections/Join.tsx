import { Send, FileText, MessageCircle } from "lucide-react";
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
              Fill the official membership form, join our Telegram & WhatsApp groups and say hi. You'll get event invites, a
              mentor from your home state and a community that has your back.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton
                href="https://forms.gle/muurnrz133tkgLTq7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Form <FileText className="size-4" />
              </MagneticButton>
              <MagneticButton
                href="https://t.me/+DLsCLiYhBiBlMjM1"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                Join Telegram <Send className="size-4" />
              </MagneticButton>
              <MagneticButton
                href="https://chat.whatsapp.com/CPPDb6EnXXzJgX3lWryWGh"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                WhatsApp Group <MessageCircle className="size-4 text-emerald-500" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

