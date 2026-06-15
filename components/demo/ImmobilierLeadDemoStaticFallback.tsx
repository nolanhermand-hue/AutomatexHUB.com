import Image from "next/image";
import { DEMO_STATIC } from "@/lib/demo-loaders";

/** Fallback SSR — visible sans JS ni animation. */
export function ImmobilierLeadDemoStaticFallback() {
  return (
    <figure className="relative w-full overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative w-full" style={{ aspectRatio: "640 / 420" }}>
        <Image
          src={DEMO_STATIC.leadImmobilier.src}
          alt={DEMO_STATIC.leadImmobilier.alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 960px"
          priority
        />
      </div>
      <figcaption className="px-4 py-2 text-center text-xs text-muted">
        Capture du système — données de test
      </figcaption>
    </figure>
  );
}
