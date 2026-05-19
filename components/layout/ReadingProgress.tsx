"use client";

import { animate, motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const WATCH_IDS = [
  "calculator",
  "problem",
  "solution",
  "automations",
  "pricing",
  "faq",
  "contact",
];

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });
  const scaleY = useMotionValue(1);
  const lastPulseSection = useRef("");

  useEffect(() => {
    const els = WATCH_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting || e.intersectionRatio < 0.35) continue;
          const id = e.target.id;
          if (!id || id === lastPulseSection.current) continue;
          lastPulseSection.current = id;
          if (!reduceMotion) {
            animate(scaleY, [1, 1.35, 1], {
              duration: 0.22,
              ease: "easeOut",
            });
          }
          break;
        }
      },
      { threshold: [0.35, 0.5], rootMargin: "-15% 0px -15% 0px" },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [scaleY, reduceMotion]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[1000] h-0.5 origin-left bg-gradient-to-r from-accent to-cta"
      style={{ scaleX, scaleY }}
      aria-hidden
    />
  );
}
