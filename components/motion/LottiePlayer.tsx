"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, useState, type ReactNode } from "react";

type LottiePlayerProps = {
  src: string;
  className?: string;
  loop?: boolean;
  active: boolean;
  fallback: ReactNode;
};

/**
 * Lottie lazy — si le JSON est absent ou trop lourd, fallback GSAP/CSS.
 * Pipeline AE : exporter vers public/assets/demos/lottie/*.json
 */
export function LottiePlayer({ src, className, loop = true, active, fallback }: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    if (!active || useFallback || !containerRef.current) return;

    let anim: { destroy: () => void; pause: () => void; play: () => void } | null = null;
    let cancelled = false;

    void (async () => {
      try {
        const res = await fetch(src);
        if (!res.ok) throw new Error("lottie missing");
        const data = await res.json();
        const lottie = (await import("lottie-web")).default;
        if (cancelled || !containerRef.current) return;
        anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop,
          autoplay: true,
          animationData: data,
        });
      } catch {
        setUseFallback(true);
      }
    })();

    const onVis = () => {
      if (!anim) return;
      if (document.hidden) anim.pause();
      else anim.play();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVis);
      anim?.destroy();
    };
  }, [active, loop, src, useFallback]);

  if (useFallback) return <>{fallback}</>;

  return (
    <div
      ref={containerRef}
      className={cn("mx-auto min-h-[280px] w-full max-w-[640px]", className)}
      aria-hidden
    />
  );
}
