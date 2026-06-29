"use client";

import { useEffect, useRef, useState } from "react";

type CatalogDemoVideoProps = {
  id: string;
  title: string;
};

const BASE = "/assets/demos/video/catalog";

/**
 * Vignette de démo pour une carte du catalogue : poster lazy par défaut,
 * la vidéo (.webm) ne se charge QUE quand l'utilisateur clique « Lire ».
 * Perf-safe : aucune autolecture, aucune vidéo chargée au scroll.
 */
export function CatalogDemoVideo({ id, title }: CatalogDemoVideoProps) {
  const poster = `${BASE}/${id}.webp`;
  const src = `${BASE}/${id}.webm`;
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (playing) void videoRef.current?.play().catch(() => {});
  }, [playing]);

  return (
    <div
      className="relative w-full overflow-hidden bg-bg"
      style={{ aspectRatio: "1280 / 720" }}
    >
      {playing && !reduced ? (
        <video
          ref={videoRef}
          poster={poster}
          className="h-full w-full object-cover"
          width={1280}
          height={720}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-label={`Démo animée : ${title}`}
        >
          <source src={src} type="video/webm" />
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group/btn absolute inset-0 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          aria-label={`Lire la démo : ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- export statique, poster dimensionné */}
          <img
            src={poster}
            alt=""
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <span
            className="absolute inset-0 bg-night/30 transition-colors group-hover/btn:bg-night/10"
            aria-hidden="true"
          />
          <span
            className="relative flex h-14 w-14 items-center justify-center rounded-full border border-border bg-navbar/80 text-title backdrop-blur-sm transition-transform group-hover/btn:scale-110"
            aria-hidden="true"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-2 right-2 rounded border border-border bg-navbar/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-faint">
            démo
          </span>
        </button>
      )}
    </div>
  );
}
