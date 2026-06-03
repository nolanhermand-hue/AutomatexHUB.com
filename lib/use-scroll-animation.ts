"use client";

import { useEffect } from "react";

const DEFAULT_SELECTORS = ".animate-on-scroll, .mock-section";

/** IntersectionObserver natif — `.is-visible` au scroll (zéro lib, compatible contenu dynamic). */
export function useScrollAnimation(
  selector: string = DEFAULT_SELECTORS,
  threshold = 0.15,
) {
  useEffect(() => {
    let mutation: MutationObserver | null = null;
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const start = () => {
      if (cancelled) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const seen = new WeakSet<Element>();

      const revealAll = (nodes: NodeListOf<Element>) => {
        nodes.forEach((el) => {
          el.classList.add("is-visible");
          seen.add(el);
        });
      };

      observer = reduced
        ? null
        : new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer?.unobserve(entry.target);
              });
            },
            { threshold, rootMargin: "0px 0px -6% 0px" },
          );

      const attach = () => {
        const nodes = document.querySelectorAll(selector);
        if (reduced) {
          revealAll(nodes);
          return;
        }
        nodes.forEach((el) => {
          if (seen.has(el)) return;
          seen.add(el);
          observer?.observe(el);
        });
      };

      attach();
      mutation = new MutationObserver(() => attach());
      mutation.observe(document.body, { childList: true, subtree: true });
    };

    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(start, { timeout: 1500 });
      return () => {
        cancelled = true;
        cancelIdleCallback(id);
        mutation?.disconnect();
        observer?.disconnect();
      };
    }

    const t = window.setTimeout(start, 100);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      mutation?.disconnect();
      observer?.disconnect();
    };
  }, [selector, threshold]);
}
