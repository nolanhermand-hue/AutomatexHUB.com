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

  const animReady = Boolean(Anim || children);
  const showAnimLayer = active && !reduced && animReady;
  const showStatic = !showAnimLayer;
  const loadingAnim = active && !reduced && loadAnimation && !animReady;

  return (
    <figure
      ref={rootRef}
      data-demo={demoId}
      data-motion={demoId}
      role="img"
      aria-label={ariaLabel}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-surface p-4 md:p-6",
        className,
      )}
    >
      <img
        src={staticSrc}
        alt={staticAlt}
        className={cn(
          "mx-auto h-auto w-full max-w-[640px] rounded-lg object-contain",
          showStatic ? "block" : "hidden",
        )}
        loading="lazy"
        decoding="async"
        width={640}
        height={420}
      />
      {loadingAnim ? (
        <div className="space-y-3 rounded-xl border border-border bg-section/80 p-6" aria-hidden="true">
          <div className="h-3 w-32 animate-pulse rounded bg-border" />
          <div className="h-12 animate-pulse rounded-xl bg-border/80" />
          <div className="h-12 animate-pulse rounded-xl bg-border/60" />
          <div className="h-12 animate-pulse rounded-xl bg-border/40" />
        </div>
      ) : null}
      <div
        className={cn(
          "demo-animated min-h-[240px] md:min-h-[280px]",
          showAnimLayer ? "block" : "hidden",
        )}
        aria-hidden={!showAnimLayer}
      >
        {Anim ? <Anim active={active} /> : children}
      </div>
      <figcaption className="sr-only">{staticAlt}</figcaption>
    </figure>
  );
}
