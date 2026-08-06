import { Instagram, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { TiltCard } from "@/components/nisc/TiltCard";
import { Avatar } from "@/components/nisc/GlassCard";
import { council } from "@/data/nisc";
import { cn } from "@/lib/utils";

export function Council() {
  return (
    <section id="council" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Council 2025–26"
        title={<>The people who <span className="gradient-text">run it</span></>}
        subtitle="The 2025–26 council — students volunteering their time to keep the cell moving. Next elections: 2026–27."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {council.map((c, i) => {
          const featured = i === 0;
          const large = i === 1;
          return (
            <ScrollReveal
              key={c.id}
              variant="scale"
              delay={Math.min(i, 6) * 0.05}
              className={cn(featured && "sm:col-span-2 lg:row-span-2", large && "sm:col-span-2")}
            >
              <TiltCard className="h-full" max={featured ? 6 : 9}>
                <div
                  className={cn(
                    "glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6",
                    featured && "justify-end p-8",
                  )}
                >
                  <div className="gradient-brand absolute inset-x-0 top-0 h-1 opacity-70" />
                  <div className={cn("flex items-center gap-4", featured && "flex-col items-start gap-6")}>
                    <Avatar name={c.name} size={featured ? "lg" : "md"} />
                    <div className="min-w-0">
                      <p className="text-primary font-accent text-xs font-bold tracking-[0.16em] uppercase">
                        {c.position}
                      </p>
                      <h3
                        className={cn(
                          "mt-1 truncate font-bold",
                          featured ? "text-3xl" : large ? "text-xl" : "text-lg",
                        )}
                      >
                        {c.name}
                      </h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {c.department} · {c.batch}
                      </p>
                      <p className="text-muted-foreground text-xs">{c.state}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    {c.instagram && <Social href={c.instagram} Icon={Instagram} />}
                    {c.github && <Social href={c.github} Icon={Github} />}
                    {c.linkedin && <Social href={c.linkedin} Icon={Linkedin} />}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

function Social({ href, Icon }: { href: string; Icon: typeof Instagram }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass hover:text-primary grid h-9 w-9 place-items-center rounded-full transition-colors"
    >
      <Icon className="size-4" />
    </a>
  );
}
