"use client";

import { FAQ_HEADING, FAQ_ITEMS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

function initialOpenIndices(): Set<number> {
  return new Set([0, 1]);
}

export function FAQ() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => initialOpenIndices());
  const baseId = useId();

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="faq" className="border-t border-border bg-night px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">
          {FAQ_HEADING.h2}
        </h2>
        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          {FAQ_ITEMS.map((item, index) => {
            const expanded = openIndices.has(index);
            const contentId = `${baseId}-faq-${index}`;
            return (
              <div
                key={item.question}
                className="border-b border-border bg-bg-card px-5 py-2 last:border-0 md:px-7"
              >
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-text md:text-lg"
                    aria-expanded={expanded}
                    aria-controls={contentId}
                    id={`${contentId}-button`}
                    onClick={() => toggle(index)}
                  >
                    <span>{item.question}</span>
                    <span className="text-primary" aria-hidden>
                      <motion.span
                        animate={{ rotate: expanded ? 45 : 0 }}
                        transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-light text-lg font-light leading-none text-primary"
                      >
                        +
                      </motion.span>
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={`${contentId}-button`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-muted md:text-[16px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
