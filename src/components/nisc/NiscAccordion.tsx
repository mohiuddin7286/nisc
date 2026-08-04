import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItemData = { title: string; content: ReactNode };

export function NiscAccordion({
  items,
  numbered = false,
}: {
  items: AccordionItemData[];
  numbered?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className={cn(
              "glass overflow-hidden rounded-2xl transition-shadow duration-300",
              isOpen && "shadow-[var(--shadow-glow)]",
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-4 px-6 py-5 text-left"
            >
              {numbered && (
                <span className="gradient-text font-display shrink-0 text-lg font-extrabold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <span className="font-accent min-w-0 flex-1 text-base font-semibold sm:text-lg">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "text-primary size-5 shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-muted-foreground px-6 pb-6 text-sm leading-relaxed sm:text-base">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
