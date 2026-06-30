"use client";

import { useEffect, useRef, useState } from "react";

type CatalogDemoVideoProps = {
  id: string;
  title: string;
};

const BASE = "/assets/demos/video/catalog";

/**
 * Vignette catalogue : poster par défaut, .webm chargé et lu en boucle
 * uniquement quand visible (IntersectionObserver). Pause hors viewport.
 * Repli poster si prefers-reduced-motion.
 */
export function CatalogDemoVideo({ id, title }: CatalogDemoVideoProps) {
  const poster = `${BASE}/${id}.webp`;
  const src = `${BASE}/${id}.webm`;
  const videoRef = useRef<HTMLVideoElement>(null);
  const srcAssignedRef = useRef(false);
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

    const tryPlay = () => {
      void el.play().catch(() => {});
    };

    const ensureSrcAndPlay = () => {
      if (!srcAssignedRef.current) {
        srcAssignedRef.current = true;
        el.src = src;
        el.load();
        const onCanPlay = () => tryPlay();
        if (el.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
          tryPlay();
        } else {
          el.addEventListener("canplay", onCanPlay, { once: true });
        }
      } else {
        tryPlay();
      }
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) ensureSrcAndPlay();
        else el.pause();
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced, src]);

  return (
    <div
      className="relative w-full overflow-hidden bg-bg"
      style={{ aspectRatio: "1280 / 720" }}
    >
      {reduced ? (
        // eslint-disable-next-line @next/next/no-img-element -- export statique, poster dimensionné
        <img
          src={poster}
          alt={`Démo animée : ${title}`}
          width={1280}
          height={720}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          poster={poster}
          className="h-full w-full object-cover"
          width={1280}
          height={720}
          muted
          loop
          playsInline
          preload="none"
          aria-label={`Démo animée : ${title}`}
        />
      )}
    </div>
  );
}
