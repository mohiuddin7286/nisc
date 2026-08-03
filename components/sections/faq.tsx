// src/components/sections/faq.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can join NISC?",
    answer:
      "Students of KL University Hyderabad who belong to North Indian states or have ancestral roots in North India and are interested in culture, academics and community building.",
  },
  {
    question: "Is there any membership fee?",
    answer:
      "No. Membership is currently free and based on eligibility and interest in contributing to the community.",
  },
  {
    question: "How are council members selected?",
    answer:
      "Council members are selected through a transparent election process consisting of nominations, campaigning, voting and result declaration.",
  },
  {
    question: "What kind of events does NISC organize?",
    answer:
      "Cultural celebrations, Hindi Diwas, workshops, technical sessions, mentorship programs, networking events and leadership initiatives.",
  },
  {
    question: "Can first-year students join?",
    answer:
      "Yes. Students from every academic year are welcome to become members provided they satisfy the eligibility criteria.",
  },
  {
    question: "How can I participate in organizing events?",
    answer:
      "Active members can volunteer during events and may later become coordinators or contest for leadership positions in future elections.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Everything you need to know about the North India
            Student Cell.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                className="overflow-hidden rounded-[28px] border border-white/40 bg-white/60 shadow-xl backdrop-blur-3xl"
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-8 text-left"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <div className="border-t border-slate-200 px-8 py-6">
                        <p className="leading-8 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}