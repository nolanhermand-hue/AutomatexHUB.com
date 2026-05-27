"use client";

import { useEffect } from "react";

const DEFAULT_SELECTORS = ".animate-on-scroll, .mock-section";

function parseSelectors(selector: string): string {
  return selector;
}

/** IntersectionObserver natif — `.is-visible` au scroll (zéro lib, compatible contenu dynamic). */
export function useScrollAnimation(
  selector: string = DEFAULT_SELECTORS,
  threshold = 0.15,
) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = new WeakSet<Element>();

    const revealAll = (nodes: NodeListOf<Element>) => {
      nodes.forEach((el) => {
        el.classList.add("is-visible");
        seen.add(el);
      });
    };

    const observer = reduced
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            });
          },
          { threshold, rootMargin: "0px 0px -40px 0px" },
        );

    const attach = () => {
      const nodes = document.querySelectorAll(parseSelectors(selector));
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

    const mutation = new MutationObserver(() => attach());
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutation.disconnect();
      observer?.disconnect();
    };
  }, [selector, threshold]);
}
