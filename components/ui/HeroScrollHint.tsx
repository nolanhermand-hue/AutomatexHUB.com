"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroScrollHint() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setHide(y > 100));
    return () => unsub();
  }, [scrollY]);

  if (reduce || hide) return null;

  return (
    <div
      className="pointer-events-none mt-10 flex flex-col items-center gap-1 pb-2 text-muted/60"
      aria-hidden
    >
      <motion.span
        className="text-lg leading-none"
        animate={{ y: [0, 6, 0], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ⌄
      </motion.span>
      <motion.span
        className="text-lg leading-none -mt-2"
        animate={{ y: [0, 6, 0], opacity: [0.35, 0.9, 0.35] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        ⌄
      </motion.span>
    </div>
  );
}
