import { ArrowUp, Instagram, Github, Send } from "lucide-react";

const cols = [
  { title: "Explore", links: [["About", "#about"], ["Mission", "#mission"], ["Reach", "#map"], ["Gallery", "#gallery"]] },
  { title: "People", links: [["Council", "#council"], ["Members", "#members"], ["Activities", "#activities"]] },
  { title: "Governance", links: [["Election 2026", "#election"], ["Rulebook", "#rulebook"], ["FAQ", "#faq"], ["Join", "#join"]] },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      <div className="gradient-brand h-px w-full" />
      <div className="glass rounded-none border-x-0 border-b-0">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
            <div>
              <div className="flex items-center gap-3">
                <span className="gradient-brand font-display grid h-11 w-11 place-items-center rounded-2xl text-lg font-extrabold text-white">
                  N
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-extrabold">North India Student Cell</p>
                  <p className="text-muted-foreground text-sm">KL University Hyderabad</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-5 max-w-sm text-sm leading-relaxed">
                A student-run community for north-Indian students at KLH — culture, mentorship and
                a home away from home.
              </p>
              <div className="mt-6 flex gap-2">
                {[Instagram, Github, Send].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="glass hover:text-primary grid h-11 w-11 place-items-center rounded-full transition-colors"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            {cols.map((c) => (
              <div key={c.title}>
                <p className="font-accent text-xs font-bold tracking-[0.18em] uppercase">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-border/70 mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
            <p className="text-muted-foreground text-center text-sm sm:text-left">
              Made with <span className="text-primary">♥</span> — North India Student Cell, KL
              University Hyderabad
            </p>
            <a
              href="#top"
              className="glass font-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Back to top <ArrowUp className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
