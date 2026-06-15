"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type DemoVideoId =
  | "appel-manque"
  | "devis-auto"
  | "lead-immobilier"
  | "point-mensuel"
  | "immobilier"
  | "btp-appel"
  | "btp-devis";

type DemoMeta = { width: number; height: number; alt: string };

/** Dimensions intrinsèques (px) des compositions Remotion — voir remotion/src/theme.ts. */
const DEMOS: Record<DemoVideoId, DemoMeta> = {
  "appel-manque": { width: 1280, height: 840, alt: "Appel manqué traité par une réponse en moins de 2 minutes" },
  "devis-auto": { width: 1280, height: 840, alt: "Dictée vocale transformée en devis PDF envoyé au client" },
  "lead-immobilier": { width: 1280, height: 840, alt: "Demande immobilière traitée pendant une mission DPE" },
  "point-mensuel": { width: 1280, height: 840, alt: "Point mensuel avec Nolan et rapport Telegram" },
  immobilier: { width: 1120, height: 1500, alt: "Déroulé d'une demande client reçue à 22 h, traitée automatiquement" },
  "btp-appel": { width: 1120, height: 1500, alt: "Appel manqué sur chantier : SMS automatique puis résumé du soir" },
  "btp-devis": { width: 1120, height: 1500, alt: "De la note vocale au devis PDF envoyé puis accepté" },
};

type DemoVideoProps = {
  id: DemoVideoId;
  className?: string;
  caption?: string;
  cta?: { href: string; label: string };
};

const VIDEO_BASE = "/assets/demos/video";

export function DemoVideo({ id, className = "", caption, cta }: DemoVideoProps) {
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

  // Lecture uniquement quand la vidéo est visible (économie CPU, comme l'ancien déclencheur).
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
    <figure className={`w-full ${className}`.trim()}>
      <div
        className="surface-dark overflow-hidden rounded-xl border border-border"
        style={{ aspectRatio: `${meta.width} / ${meta.height}` }}
      >
        {reduced ? (
          // eslint-disable-next-line @next/next/no-img-element -- export statique, poster déjà dimensionné
          <img src={poster} alt={meta.alt} width={meta.width} height={meta.height} className="h-full w-full object-cover" />
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
      {caption ? <figcaption className="mt-2 text-center text-xs text-muted">{caption}</figcaption> : null}
      {cta ? (
        <p className="mt-3">
          <Link
            href={cta.href}
            className="font-mono text-[11px] uppercase tracking-wide text-primary hover:underline"
          >
            {cta.label} →
          </Link>
        </p>
      ) : null}
    </figure>
  );
}
