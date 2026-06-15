"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
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
  children?: ReactNode;
  loadAnimation?: () => Promise<{ default: ComponentType<DemoAnimationProps> }>;
  className?: string;
};

const DEMO_W = 640;
const DEMO_H = 420;

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
    const run = () => {
      void loadAnimation().then((mod) => setAnim(() => mod.default));
    };
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(run, { timeout: 2500 });
      return () => cancelIdleCallback(id);
    }
    const t = window.setTimeout(run, 400);
    return () => window.clearTimeout(t);
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
      <div
        className="relative mx-auto w-full max-w-[640px] overflow-hidden rounded-lg"
        style={{ aspectRatio: `${DEMO_W} / ${DEMO_H}` }}
      >
        <Image
          src={staticSrc}
          alt={staticAlt}
          width={DEMO_W}
          height={DEMO_H}
          sizes="(max-width: 768px) 100vw, 640px"
          loading="lazy"
          fetchPriority="low"
          className={cn(
            "h-full w-full object-contain",
            showStatic ? "block" : "hidden",
          )}
        />
        {loadingAnim ? (
          <div
            className="absolute inset-0 flex flex-col justify-center gap-3 bg-section/80 p-6"
            aria-hidden="true"
          >
            <div className="h-3 w-32 rounded bg-border opacity-60" />
            <div className="h-12 rounded-xl bg-border/80 opacity-60" />
            <div className="h-12 rounded-xl bg-border/60 opacity-60" />
          </div>
        ) : null}
        <div
          className={cn(
            "demo-animated absolute inset-0 flex items-center justify-center p-4",
            showAnimLayer ? "block" : "hidden",
          )}
          aria-hidden={!showAnimLayer}
        >
          {Anim ? <Anim active={active} /> : children}
        </div>
      </div>
      <figcaption className="sr-only">{staticAlt}</figcaption>
    </figure>
  );
}
