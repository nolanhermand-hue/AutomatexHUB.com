"use client";

import { FAQ_HEADING, FAQ_ITEMS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="border-t border-white/[0.05] bg-section px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">
          {FAQ_HEADING.h2}
        </h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.07] shadow-[0_0_0_0.5px_rgb(255_255_255/0.04),0_8px_32px_rgb(0_0_0/0.3)]">
          {FAQ_ITEMS.map((item, index) => {
            const expanded = openIndex === index;
            const contentId = `${baseId}-faq-${index}`;
            return (
              <div key={item.question} className={`border-b border-white/[0.05] bg-white/[0.02] px-5 py-2 last:border-0 md:px-7`}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-text md:text-lg"
                    aria-expanded={expanded}
                    aria-controls={contentId}
                    id={`${contentId}-button`}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                  >
                    <span>{item.question}</span>
                    <span className="text-primary" aria-hidden>
                      <motion.span
                        animate={{ rotate: expanded ? 45 : 0 }}
                        transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-lg font-light leading-none"
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
