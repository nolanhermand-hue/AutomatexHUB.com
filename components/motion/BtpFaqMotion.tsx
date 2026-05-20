"use client";

import { BTP_FAQ } from "@/lib/btp-copy";
import { useCallback, useState } from "react";

const TYPE_MS = 30;

/** Animation FAQ — réponse « tapée » à l'ouverture. */
export function BtpFaqMotion() {
  const [typed, setTyped] = useState<Record<string, string>>({});

  const typeAnswer = useCallback((key: string, full: string) => {
    if (typed[key]?.length === full.length) return;
    setTyped((prev) => ({ ...prev, [key]: "" }));
    let i = 0;
    const tick = () => {
      i += 1;
      setTyped((prev) => ({ ...prev, [key]: full.slice(0, i) }));
      if (i < full.length) window.setTimeout(tick, TYPE_MS);
    };
    tick();
  }, [typed]);

  return (
    <section id="faq" className="bg-bg-card px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text">{BTP_FAQ.h2}</h2>
        <div className="mt-8 space-y-4">
          {BTP_FAQ.items.map((item) => {
            const key = item.q;
            const shown = typed[key] ?? "";
            return (
              <details
                key={key}
                className="group rounded-xl border border-border bg-night px-5 py-4"
                onToggle={(e) => {
                  const el = e.currentTarget;
                  if (el.open) typeAnswer(key, item.a);
                }}
              >
                <summary className="cursor-pointer font-semibold text-text">{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {shown.length > 0 ? (
                    <>
                      {shown}
                      {shown.length < item.a.length ? (
                        <span className="ml-0.5 inline-block w-2 animate-pulse bg-primary" aria-hidden>
                          |
                        </span>
                      ) : null}
                    </>
                  ) : null}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
