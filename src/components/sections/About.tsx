import { useState } from "react";
import { Flag, Eye, TrendingUp, Rocket, CheckCircle2, Camera, X } from "lucide-react";
import { SectionHeading } from "@/components/nisc/SectionHeading";
import { ScrollReveal } from "@/components/nisc/ScrollReveal";
import { timeline } from "@/data/nisc";

const icons = [Flag, Eye, TrendingUp, Rocket];

export function About() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Official History"
        title={<>From foundation to a <span className="gradient-text">thriving cell</span></>}
        subtitle="The official timeline of North India Student Cell at KL University Hyderabad, founded by students of the Y24 and Y25 batches."
      />

      <div className="relative">
        <div className="bg-border absolute top-0 bottom-0 left-6 w-px sm:left-1/2" />
        <div className="space-y-10">
          {timeline.map((item, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <ScrollReveal key={item.title} variant={i % 2 ? "right" : "left"} delay={i * 0.05}>
                <div
                  className={`relative grid grid-cols-[auto_minmax(0,1fr)] gap-5 sm:grid-cols-2 sm:gap-10 ${
                    i % 2 ? "sm:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative sm:hidden">
                    <span className="gradient-brand grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[var(--shadow-glow)]">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <div className={i % 2 ? "sm:pl-10" : "sm:pr-10 sm:text-right"}>
                    <div className="glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                      <div className={`flex flex-wrap items-center gap-2 ${i % 2 ? "" : "sm:justify-end"}`}>
                        <span className="font-accent text-primary text-xs font-bold tracking-[0.18em] uppercase">
                          {item.year}
                        </span>
                        {item.tag && (
                          <span className="glass-strong text-muted-foreground rounded-full px-2.5 py-0.5 text-[10px] font-semibold">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.text}</p>

                      {/* Timeline Meeting Images Grid */}
                      {item.images && item.images.length > 0 && (
                        <div className="mt-5 pt-3 border-t border-white/20">
                          <p className={`text-xs font-semibold text-primary font-accent uppercase tracking-wider mb-2.5 flex items-center gap-1.5 ${i % 2 ? "" : "sm:justify-end"}`}>
                            <Camera className="size-3.5 text-primary" /> Event Photographs ({item.images.length})
                          </p>
                          <div className={`grid grid-cols-2 gap-3 ${i % 2 ? "" : "sm:justify-end"}`}>
                            {item.images.map((imgSrc, imgIdx) => (
                              <div
                                key={imgSrc}
                                onClick={() => setSelectedImg(imgSrc)}
                                className="group/img relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-white/30 glass-strong transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-glow)]"
                              >
                                <img
                                  src={imgSrc}
                                  alt={`${item.title} Photo ${imgIdx + 1}`}
                                  className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                  <span className="glass-strong text-[11px] font-bold text-white px-2.5 py-1 rounded-full">
                                    View Photo
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.established && (
                        <div className="mt-4 pt-3 border-t border-white/20">
                          <p className="text-xs font-semibold text-primary font-accent uppercase tracking-wider mb-2">
                            Established:
                          </p>
                          <div className={`flex flex-wrap gap-1.5 ${i % 2 ? "" : "sm:justify-end"}`}>
                            {item.established.map((est) => (
                              <span
                                key={est}
                                className="glass-strong text-xs font-medium px-3 py-1 rounded-xl inline-flex items-center gap-1.5"
                              >
                                <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                                {est}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.goals && (
                        <div className="mt-4 pt-3 border-t border-white/20">
                          <p className="text-xs font-semibold text-primary font-accent uppercase tracking-wider mb-2">
                            Future Focus:
                          </p>
                          <div className={`flex flex-wrap gap-1.5 ${i % 2 ? "" : "sm:justify-end"}`}>
                            {item.goals.map((goal) => (
                              <span
                                key={goal}
                                className="glass-strong text-xs font-medium px-3 py-1 rounded-xl inline-flex items-center gap-1.5 capitalize"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {goal}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hidden sm:block" />
                  <span className="gradient-brand absolute top-6 left-1/2 hidden h-12 w-12 -translate-x-1/2 place-items-center rounded-2xl text-white shadow-[var(--shadow-glow)] sm:grid">
                    <Icon className="size-5" />
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Timeline Photos */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass relative max-w-4xl w-full overflow-hidden rounded-3xl border border-white/30 p-4 sm:p-6"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="glass hover:bg-white/80 absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full transition-colors"
            >
              <X className="size-5" />
            </button>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={selectedImg}
                alt="First Official Meeting"
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-accent text-xs font-bold uppercase tracking-wider text-primary">
                First Official Meeting — 17 February 2025
              </p>
              <p className="text-muted-foreground text-xs mt-0.5">
                NISC Foundation meeting with founding members & University leadership at KL University Hyderabad.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


