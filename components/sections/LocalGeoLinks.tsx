import { FOOTER_LOCAL_LINKS } from "@/lib/constants";
import Link from "next/link";

/** Liens crawlables depuis l’accueil — indexation + pages locales (GSC maillage interne). */
export function LocalGeoLinks() {
  return (
    <section
      className="border-b border-border bg-bg px-gutter py-4"
      aria-labelledby="geo-nav-heading"
    >
      <h2 id="geo-nav-heading" className="sr-only">
        Mandataires immobiliers en Normandie — pages locales
      </h2>
      <p className="mx-auto max-w-content text-center text-xs leading-relaxed text-muted md:text-sm">
        <span className="font-medium text-text">Mandataires en Normandie : </span>
        {FOOTER_LOCAL_LINKS.map((link, index) => (
          <span key={link.href}>
            {index > 0 ? " · " : null}
            <Link
              href={link.href}
              className="underline underline-offset-2 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </span>
        ))}
        {" · "}
        <Link
          href="/securite"
          className="underline underline-offset-2 transition-colors hover:text-primary"
        >
          Sécurité & données
        </Link>
        {" · "}
        <Link
          href="#faq"
          className="underline underline-offset-2 transition-colors hover:text-primary"
        >
          FAQ
        </Link>
        {" · "}
        <Link
          href="/automatisation-ia-tpe"
          className="underline underline-offset-2 transition-colors hover:text-primary"
        >
          Solution pour toute TPE
        </Link>
      </p>
    </section>
  );
}
