import Image from "next/image";

const CAPTION = "Capture du système — données de test";

type SystemCapturePlaceholderProps = {
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
};

/** Conteneur ratio fixe pour captures produit (swap WebP sans reflow). */
export function SystemCapturePlaceholder({
  src = "/assets/demos/point-mensuel-static.webp",
  alt = "Aperçu du tableau de bord AutomateX — données de démonstration",
  priority = false,
  className = "",
}: SystemCapturePlaceholderProps) {
  return (
    <figure className={`w-full ${className}`.trim()}>
      <div
        className="surface-dark relative w-full overflow-hidden rounded-xl border border-border bg-surface"
        style={{ aspectRatio: "640 / 420" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover object-top"
          priority={priority}
        />
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">{CAPTION}</figcaption>
    </figure>
  );
}
