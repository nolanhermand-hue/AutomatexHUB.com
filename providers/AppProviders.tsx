"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const ReducedMotionContext = createContext(false);

export function useReducedMotionPreference(): boolean {
  return useContext(ReducedMotionContext);
}

export function AppProviders({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const run = () => {
      void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
        ([{ default: gsap }, { ScrollTrigger }]) => {
          if (cancelled) return;
          gsap.registerPlugin(ScrollTrigger);
          const onScroll = () => ScrollTrigger.update();
          window.addEventListener("scroll", onScroll, { passive: true });
          cleanup = () => {
            window.removeEventListener("scroll", onScroll);
            ScrollTrigger.getAll().forEach((instance) => instance.kill());
          };
        },
      );
    };

    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(run, { timeout: 4000 });
      return () => {
        cancelled = true;
        cancelIdleCallback(id);
        cleanup?.();
      };
    }

    const t = window.setTimeout(run, 1500);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      cleanup?.();
    };
  }, [reduced]);

  const value = useMemo(() => reduced, [reduced]);

  return (
    <ReducedMotionContext.Provider value={value}>
      {children}
    </ReducedMotionContext.Provider>
  );
}
