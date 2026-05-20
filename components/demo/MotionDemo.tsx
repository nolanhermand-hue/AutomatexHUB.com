"use client";

import { cn } from "@/lib/cn";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";

export type DemoAnimationProps = {
  active: boolean;
};

type MotionDemoProps = {
  demoId: string;
  staticSrc: string;
  ariaLabel: string;
  staticAlt: string;
  /** Legacy inline fallback before dynamic import resolves */
  children?: ReactNode;
  loadAnimation?: () => Promise<{ default: ComponentType<DemoAnimationProps> }>;
  className?: string;
};

export function MotionDemo({
  demoId,
  staticSrc,
  ariaLabel,
  staticAlt,
  children,
  loadAnimation,
  className,
}: MotionDemoProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [Anim, setAnim] = useState<ComponentType<DemoAnimationProps> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || !rootRef.current) return;
    const el = rootRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(true);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (!active || reduced || !loadAnimation || Anim) return;
    void loadAnimation().then((mod) => setAnim(() => mod.default));
  }, [active, reduced, loadAnimation, Anim]);

  const showAnimation = active && !reduced && (Anim || children);

  return (
    <figure
      ref={rootRef}
      data-demo={demoId}
      data-motion={demoId}
      role="img"
      aria-label={ariaLabel}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-[#0d0d0d] p-4 md:p-6",
        className,
      )}
    >
      <img
        src={staticSrc}
        alt={staticAlt}
        className={cn(
          "mx-auto h-auto w-full max-w-[640px] rounded-lg object-contain",
          showAnimation ? "hidden" : "block",
        )}
        loading="lazy"
        decoding="async"
        width={640}
        height={420}
      />
      <div
        className={cn(
          "demo-animated min-h-[280px] md:min-h-[320px]",
          showAnimation ? "block" : "hidden",
        )}
        aria-hidden={!showAnimation}
      >
        {Anim ? <Anim active={active} /> : children}
      </div>
      <figcaption className="sr-only">{staticAlt}</figcaption>
    </figure>
  );
}
