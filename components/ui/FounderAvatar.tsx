"use client";

import { useState } from "react";

/** Source de vérité avatar fondateur (photo réelle) */
const FOUNDER_AVATAR_SRC = "/assets/brand/founder-avatar.webp";

type FounderAvatarProps = {
  size?: number;
  className?: string;
  /** Hero LCP — charge l’avatar en priorité */
  priority?: boolean;
};

function FounderAvatarPlaceholder({
  size,
  className,
}: {
  size: number;
  className: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ring-2 ring-primary/30 ring-offset-2 ring-offset-night ${className}`}
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #e07856 0%, #b85a3a 100%)",
        fontSize: size * 0.32,
      }}
      role="img"
      aria-label="Nolan Hermand, Automatex Hub, Flers Orne"
    >
      <span className="select-none" aria-hidden>
        NH
      </span>
    </div>
  );
}

/**
 * Avatar fondateur (photo WebP) avec fallback placeholder si échec de chargement.
 */
export function FounderAvatar({ size = 48, className = "", priority = false }: FounderAvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <FounderAvatarPlaceholder size={size} className={className} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- export statique : LCP + dimensions explicites
    <img
      src={FOUNDER_AVATAR_SRC}
      alt="Nolan Hermand, Automatex Hub — Flers, Orne"
      width={size}
      height={size}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={`shrink-0 rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}
