"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useReducedMotionPreference } from "@/providers/AppProviders";

export function SplitHeroTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotionPreference();
  const words = text.split(" ");

  useGSAP(
    () => {
      if (reduced || !containerRef.current) return;
      const inners = containerRef.current.querySelectorAll("[data-word-inner]");
      gsap.fromTo(
        inners,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.12,
        },
      );
    },
    { scope: containerRef, dependencies: [reduced, text] },
  );

  return (
    <h1 ref={containerRef} className={className}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="mr-[0.12em] inline-block overflow-hidden align-top"
        >
          <span data-word-inner className="inline-block will-change-transform">
            {w}
          </span>
        </span>
      ))}
    </h1>
  );
}
