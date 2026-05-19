"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { useEffect, useRef, useState } from "react";

/**
 * DEMO VIDEO — A14 / E4
 * Embed natif (pas YouTube), autoplay muted, contrôles visibles.
 * Le mp4 doit être placé dans /public/assets/video/automatex-demo.mp4
 * (à remplacer par la vraie vidéo dès qu'elle est tournée).
 *
 * Avant tournage : afficher un placeholder visuel + CTA "Réserver une démo en direct".
 */
export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    // Détection : si le mp4 existe (HEAD request léger). Sinon on bascule sur le placeholder.
    fetch("/assets/video/automatex-demo.mp4", { method: "HEAD" })
      .then((r) => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
  }, []);

  return (
    <section
      id="demo"
      className="bg-section px-gutter py-12 md:py-16"
      data-analytics-section="demo_video"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-accent">Démonstration</p>
        <h2 className="mt-2 font-heading text-3xl text-text md:text-4xl">
          Voici exactement ce que vous verrez en 60 secondes.
        </h2>
        <p className="mt-3 max-w-readable text-sm text-muted md:text-base">
          Un lead arrive sur SeLoger pendant une visite — la réponse part en 30 secondes.
          Sans vous, mais avec votre voix.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-night/60 shadow-[0_12px_48px_rgb(0_0_0/0.5)] backdrop-blur-sm">
          {hasVideo ? (
            <video
              ref={videoRef}
              src="/assets/video/automatex-demo.mp4"
              poster="/assets/video/demo-poster.webp"
              controls
              muted
              autoPlay
              playsInline
              preload="metadata"
              className="aspect-video w-full"
              aria-label="Démonstration vidéo : réponse automatique à un lead SeLoger"
            />
          ) : (
            <div className="relative flex aspect-video w-full items-center justify-center bg-gradient-to-br from-primary/20 via-night to-section">
              <div className="text-center">
                <svg
                  viewBox="0 0 80 80"
                  width="80"
                  height="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mx-auto text-accent/50"
                  aria-hidden
                >
                  <circle cx="40" cy="40" r="32" />
                  <path d="M34 28v24l20-12-20-12z" fill="currentColor" />
                </svg>
                <p className="mt-4 text-base font-semibold text-text">
                  Démo vidéo bientôt disponible
                </p>
                <p className="mt-2 text-sm text-muted">
                  En attendant, réservez une démonstration en direct avec Nolan (15 min).
                </p>
                <a
                  href="#contact"
                  data-analytics-cta="demo_video_fallback"
                  onClick={() => trackCtaClicked("demo_video_fallback")}
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full bg-cta px-6 py-3 text-sm font-semibold text-[var(--color-cta-fg,#fff)] shadow-[0_4px_20px_rgb(0_0_0/0.3)] transition-all hover:bg-primary"
                >
                  Réserver ma démo 15 min
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
