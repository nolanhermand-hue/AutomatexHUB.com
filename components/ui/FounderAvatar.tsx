"use client";

import { useState } from "react";

type FounderAvatarProps = {
  size?: number;
  className?: string;
};

/** Photo Nolan si disponible, sinon placeholder NH (C02 / C10). */
export function FounderAvatar({ size = 48, className = "" }: FounderAvatarProps) {
  const [photoOk, setPhotoOk] = useState(true);

  if (!photoOk) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ${className}`}
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #FF8200, #E07000)",
          fontSize: size * 0.32,
        }}
        role="img"
        aria-label="Nolan Hermand, fondateur Automatex Hub"
      >
        NH
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
