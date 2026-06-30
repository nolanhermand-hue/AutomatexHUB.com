import { HOME_VOICE } from "@/lib/home-copy";

/** Texte de renfort — la démo vidéo est dans le hero. */
export function HomeVoiceDevis() {
  return (
    <section className="px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content animate-on-scroll section-reveal">
        <p className="label-micro text-[var(--terracotta)]">{HOME_VOICE.eyebrow}</p>
        <h2 className="mt-2 max-w-xl font-heading text-2xl font-bold text-text md:text-4xl">
          {HOME_VOICE.h2}
        </h2>
        <p className="mt-4 max-w-readable text-base leading-relaxed text-muted md:text-lg">
          {HOME_VOICE.body}
        </p>
      </div>
    </section>
  );
}
