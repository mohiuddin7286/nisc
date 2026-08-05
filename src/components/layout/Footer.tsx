import { ArrowUp, MessageCircle, Send, FileText } from "lucide-react";

const cols = [
  { title: "Explore", links: [["About", "#about"], ["Mission", "#mission"], ["Reach", "#map"], ["Gallery", "#gallery"]] },
  { title: "People", links: [["Council", "#council"], ["Members", "#members"], ["Activities", "#activities"]] },
  { title: "Governance", links: [["Election", "#election"], ["Rulebook", "#rulebook"], ["FAQ", "#faq"], ["Join", "#join"]] },
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
                <img
                  src="/nisc-logo.png"
                  alt="NISC Logo"
                  className="h-11 w-11 shrink-0 rounded-full border border-white/60 bg-white object-cover shadow-sm p-0.5"
                />
                <div className="min-w-0">
                  <p className="font-display text-lg font-extrabold">North India Student Cell</p>
                  <p className="text-muted-foreground text-sm">KL University Hyderabad</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-5 max-w-sm text-sm leading-relaxed">
                A student-run community for North Indian students at KLH — culture, mentorship and
                a home away from home.
              </p>
              <div className="mt-6 flex gap-2">
                <a
                  href="https://chat.whatsapp.com/CPPDb6EnXXzJgX3lWryWGh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass hover:text-emerald-500 grid h-11 w-11 place-items-center rounded-full transition-colors"
                  title="WhatsApp Group"
                >
                  <MessageCircle className="size-[18px]" />
                </a>
                <a
                  href="https://t.me/+DLsCLiYhBiBlMjM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass hover:text-sky-500 grid h-11 w-11 place-items-center rounded-full transition-colors"
                  title="Telegram Group"
                >
                  <Send className="size-[18px]" />
                </a>
                <a
                  href="https://forms.gle/muurnrz133tkgLTq7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass hover:text-primary grid h-11 w-11 place-items-center rounded-full transition-colors"
                  title="Google Form (Join NISC)"
                >
                  <FileText className="size-[18px]" />
                </a>
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

