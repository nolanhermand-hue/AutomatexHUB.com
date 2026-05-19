import { FOOTER_COPY, NAP } from "@/lib/constants";
import Link from "next/link";

/**
 * Footer — C13 / E10 / J14 / H11
 * - NAP visible avec microdata
 * - SIRET visible (J14 — signal de légitimité TPE en France)
 * - Téléphone cliquable (E10)
 * - Liens vers mentions légales + politique confidentialité (C14/J11/J12)
 * - Hébergeur nommé (E11)
 */
export function Footer() {
  return (
    <footer className="relative z-[10] border-t border-primary/35 bg-section py-12">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-gutter text-sm text-muted">
        {/* Top : logo + tagline */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="font-heading text-2xl text-text">
            <span className="font-semibold text-text">Auto</span>
            <span className="text-primary">tex</span>
          </div>
          <p className="max-w-md text-sm text-muted/80 leading-[1.6]">
            L&apos;automatisation française pour mandataires immobiliers indépendants.
            Conçue par Nolan Hermand à Flers, dans l&apos;Orne.
          </p>
        </div>

        {/* NAP avec microdata */}
        <address
          className="not-italic text-text leading-[1.7]"
          itemScope
          itemType="https://schema.org/ProfessionalService"
        >
          <span itemProp="name" className="font-semibold">{NAP.brand}</span>
          <br />
          <span itemProp="founder">{NAP.founder}</span>
          {", "}
          <span itemProp="addressLocality">{NAP.city}</span>
          {", "}
          <span itemProp="addressRegion">{NAP.region}</span>
          {" ("}
          <span itemProp="postalCode">{NAP.postalCode}</span>
          {")"}
          <br />
          <a
            href={`mailto:${NAP.email}`}
            itemProp="email"
            data-cursor="link"
            data-analytics-cta="footer_email"
            className="group relative font-semibold text-muted transition-colors hover:text-cta"
          >
            {NAP.email}
            <span
              className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-cta transition-transform duration-200 group-hover:scale-x-100"
              aria-hidden
            />
          </a>
          {" · "}
          <a
            href={`tel:${NAP.phoneE164}`}
            itemProp="telephone"
            data-cursor="link"
            data-analytics-cta="footer_phone"
            className="group relative font-semibold text-muted transition-colors hover:text-cta"
          >
            <span className="inline-block transition-transform group-hover:-translate-y-0.5">
              {NAP.phoneDisplay}
            </span>
            <span
              className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-cta transition-transform duration-200 group-hover:scale-x-100"
              aria-hidden
            />
          </a>
        </address>

        {/* Liens légaux + SIRET */}
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link
            href="/mentions-legales"
            data-cursor="link"
            className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition hover:text-cta hover:decoration-cta"
          >
            {FOOTER_COPY.legalMentions}
          </Link>
          <Link
            href="/politique-confidentialite"
            data-cursor="link"
            className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition hover:text-cta hover:decoration-cta"
          >
            {FOOTER_COPY.privacy}
          </Link>
        </div>

        {/* SIRET + hébergeur (J14 + E11) */}
        <div className="space-y-1 border-t border-white/[0.04] pt-5 text-xs text-muted/70">
          <p>
            <span className="font-semibold">Hébergement :</span> {NAP.hostingProvider}
          </p>
          <p className="pt-1">{FOOTER_COPY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
