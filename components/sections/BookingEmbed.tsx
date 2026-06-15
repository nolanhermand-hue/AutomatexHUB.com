import { BRAND } from "@/lib/brand";

/**
 * Lien Cal.com (booking self-serve, hébergé UE — RGPD-friendly).
 * Format attendu : "automatex/demo-30min" ou une URL complète https://cal.com/...
 * Tant que la variable n'est pas définie, le composant ne rend rien
 * et le formulaire de la page sert de chemin de prise de contact (fallback).
 */
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK;

function calEmbedUrl(link: string): string {
  const base = link.startsWith("http") ? link : `https://cal.com/${link}`;
  const sep = base.includes("?") ? "&" : "?";
  // theme sombre + couleur de marque pour rester cohérent avec le site
  return `${base}${sep}embed=true&theme=dark&brandColor=${encodeURIComponent(BRAND.themeColor)}`;
}

/** Renvoie true si le booking self-serve est configuré (pour adapter le copy du formulaire). */
export const hasBookingEmbed = Boolean(CAL_LINK);

export function BookingEmbed() {
  if (!CAL_LINK) return null;

  return (
    <section className="border-b border-border bg-night px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <div className="max-w-readable">
          <p className="label-micro text-accent">Réservation directe</p>
          <h2 className="mt-3 font-heading text-3xl text-text md:text-4xl">
            Choisis ton créneau maintenant
          </h2>
          <p className="mt-3 text-sm text-muted md:text-base">
            30 minutes avec Nolan, sur ton cas. Sans engagement. Tu reçois la
            confirmation par mail immédiatement.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-bg-card">
          <iframe
            src={calEmbedUrl(CAL_LINK)}
            title="Réserver une démo de 30 minutes avec Nolan"
            loading="lazy"
            className="h-[680px] w-full"
            style={{ border: "0" }}
          />
        </div>
      </div>
    </section>
  );
}
