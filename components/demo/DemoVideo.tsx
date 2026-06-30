"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";

export type DemoVideoId = "voix-devis" | "accompagnement";

type DemoMeta = { width: number; height: number; alt: string };

/** Dimensions intrinsèques des compositions Remotion — voir remotion/src/theme.ts. */
const DEMOS: Record<DemoVideoId, DemoMeta> = {
  "voix-devis": {
    width: 1280,
    height: 800,
    alt: "Démo : un devis dicté à la voix, mis en forme puis envoyé en PDF",
  },
  accompagnement: {
    width: 1280,
    height: 800,
    alt: "Démo : installation, point mensuel 20 min, ajustements et ligne directe Nolan à Flers",
  },
};

const VIDEO_BASE = "/assets/demos/video";

type DemoVideoProps = {
  id: DemoVideoId;
  className?: string;
  caption?: string;
};

/**
 * Lecteur de démo vidéo : poster d'abord, lecture seulement quand visible,
 * boucle muette, repli sur le poster si prefers-reduced-motion.
 * Si le .webm n'est pas encore rendu, le poster reste affiché (aucune erreur visible).
 */
export function DemoVideo({ id, className, caption }: DemoVideoProps) {
  const meta = DEMOS[id];
  const poster = `${VIDEO_BASE}/${id}.webp`;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = videoRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <figure className={cn("w-full", className)}>
      <div
        className="overflow-hidden rounded-xl border border-border bg-surface"
        style={{ aspectRatio: `${meta.width} / ${meta.height}` }}
      >
        {reduced ? (
          // eslint-disable-next-line @next/next/no-img-element -- export statique, poster déjà dimensionné
          <img
            src={poster}
            alt={meta.alt}
            width={meta.width}
            height={meta.height}
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            poster={poster}
            width={meta.width}
            height={meta.height}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            aria-label={meta.alt}
          >
            <source src={`${VIDEO_BASE}/${id}.webm`} type="video/webm" />
          </video>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-xs text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
