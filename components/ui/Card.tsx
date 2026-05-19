"use client";

import { cn } from "@/lib/cn";
import gsap from "gsap";
import type { ReactNode } from "react";
import { useRef } from "react";

export function Card({
  children,
  className,
  featured,
  dimmed,
  tilt = true,
}: {
  children: ReactNode;
  className?: string;
  featured?: boolean;
  dimmed?: boolean;
  tilt?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = root.current;
    if (!tilt || !el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -5;
    const rotateY = ((x - cx) / cx) * 5;
    el.style.setProperty("--tilt-x", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--tilt-y", `${(y / rect.height) * 100}%`);
    gsap.to(el, {
      rotateX,
      rotateY,
      transformPerspective: 900,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    const el = root.current;
    if (!tilt || !el) return;
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.55)",
    });
  };

  return (
    <div
      ref={root}
      data-cursor="card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "group/card relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 shadow-[0_0_0_0.5px_rgb(255_255_255/0.05),0_8px_32px_rgb(0_0_0/0.35)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_0_0_0.5px_rgb(93_202_165/0.25),0_12px_40px_rgb(0_0_0/0.45)]",
        featured && "border-cta/40 shadow-[0_0_0_1px_rgb(29_158_117/0.4),0_8px_32px_rgb(0_0_0/0.35)]",
        dimmed && "opacity-50",
        className,
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {tilt ? (
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
          style={{
            background:
              "radial-gradient(200px circle at var(--tilt-x, 50%) var(--tilt-y, 50%), rgba(93, 202, 165, 0.07), transparent 70%)",
          }}
          aria-hidden
        />
      ) : null}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
