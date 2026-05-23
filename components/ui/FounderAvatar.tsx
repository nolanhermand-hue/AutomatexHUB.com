"use client";

import { useState } from "react";

type FounderAvatarProps = {
  size?: number;
  className?: string;
};

/**
 * Photo Nolan si disponible, sinon placeholder NH (C02 / C10).
 * Remplacer par public/assets/brand/nolan-photo.webp (400×400, WebP) quand disponible :
 * npx sharp-cli resize 400 400 -i nolan-photo.jpg -o public/assets/brand/nolan-photo.webp
 */
export function FounderAvatar({ size = 48, className = "" }: FounderAvatarProps) {
  const [photoOk, setPhotoOk] = useState(true);

  if (!photoOk) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ring-2 ring-primary/30 ring-offset-2 ring-offset-night ${className}`}
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #0f6e56 0%, #0a5542 100%)",
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
    <img
      src="/assets/brand/nolan-photo.webp"
      alt="Nolan Hermand, fondateur Automatex Hub — Flers, Orne"
      width={size}
      height={size}
      className={`shrink-0 rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
      loading="lazy"
      decoding="async"
      onError={() => setPhotoOk(false)}
    />
  );
}
