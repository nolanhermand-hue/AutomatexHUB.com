"use client";

import { useState } from "react";

type FounderAvatarProps = {
  size?: number;
  className?: string;
  /** Hero LCP — charge la photo en priorité */
  priority?: boolean;
};

/**
 * Photo Nolan si disponible, sinon placeholder NH (C02 / C10).
 * `<img>` natif + dimensions fixes (export statique, images unoptimized).
 */
export function FounderAvatar({ size = 48, className = "", priority = false }: FounderAvatarProps) {
  const [photoOk, setPhotoOk] = useState(true);

  if (!photoOk) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ring-2 ring-primary/30 ring-offset-2 ring-offset-night ${className}`}
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #ff6b2b 0%, #c44a12 100%)",
          fontSize: size * 0.32,
        }}
        role="img"
        aria-label="Nolan Hermand, fondateur Automatex Hub, Flers Orne"
      >
        <span className="select-none" aria-hidden>
          NH
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- export statique : LCP + dimensions explicites
    <img
      src="/assets/brand/nolan-photo.webp"
      alt="Nolan Hermand, fondateur Automatex Hub — Flers, Orne"
      width={size}
      height={size}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={`shrink-0 rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
      onError={() => setPhotoOk(false)}
    />
  );
}
