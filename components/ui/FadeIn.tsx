"use client";

import { useReducedMotionPreference } from "@/providers/AppProviders";
import { cn } from "@/lib/cn";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotionPreference();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setVisible(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce]);

  return (
    <div
      ref={ref}
      className={cn(
        "fade-in-up",
        visible && "fade-in-up--visible is-visible",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
