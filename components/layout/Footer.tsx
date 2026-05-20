import { FooterTrustBadges } from "@/components/layout/FooterTrustBadges";
import { LogoOrbit } from "@/components/brand/LogoOrbit";
import { FOOTER_COPY, FOOTER_LOCAL_LINKS, NAP } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-[10] border-t border-[rgb(255_255_255/0.07)] bg-footer py-12">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-gutter text-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <LogoOrbit variant="lockup" theme="dark" height={44} href="/" className="max-w-[14rem]" />
          <p className="max-w-md text-sm leading-[1.6] text-[#b5b3ad]">
            L&apos;automatisation française pour mandataires immobiliers indépendants — hébergée en France.
          </p>
        </div>

        <FooterTrustBadges />

        <address
          className="not-italic leading-[1.7] text-[#b5b3ad]"
          itemScope
          itemType="https://schema.org/ProfessionalService"
        >
          <span itemProp="name" className="font-semibold text-[#d4d2cc]">
            {NAP.brand}
          </span>
          <br />
          <span itemProp="founder">{NAP.founder}</span>
          {", "}
          <span itemProp="addressLocality">{NAP.city}</span>
          {", "}
          <span itemProp="addressRegion">{NAP.department}</span>
          {" ("}
          <span itemProp="postalCode">{NAP.postalCode}</span>
          {")"}
          <br />
          <span itemProp="streetAddress">{NAP.streetAddress}</span>
          <br />
          <a
            href={`mailto:${NAP.email}`}
            itemProp="email"
            data-cursor="link"
            data-analytics-cta="footer_email"
            className="font-semibold text-[#d4d2cc] transition-colors hover:text-[#faf9f6]"
          >
            {NAP.email}
          </a>
          {" · "}
          <a
            href={`tel:${NAP.phoneE164}`}
            itemProp="telephone"
            data-cursor="link"
            data-analytics-cta="footer_phone"
            className="font-semibold text-[#d4d2cc] transition-colors hover:text-[#faf9f6]"
          >
            {NAP.phoneDisplay}
          </a>
        </address>

        <nav aria-label="Pages locales mandataires">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#9e9c96]">
            {FOOTER_COPY.localHeading}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LOCAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-semibold text-[#c4c2bc] transition hover:text-[#faf9f6]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link
            href="/mentions-legales"
            data-cursor="link"
            className="font-semibold text-[#c4c2bc] transition hover:text-[#faf9f6]"
          >
            {FOOTER_COPY.legalMentions}
          </Link>
          <Link
            href="/politique-confidentialite"
            data-cursor="link"
            className="font-semibold text-[#c4c2bc] transition hover:text-[#faf9f6]"
          >
            {FOOTER_COPY.privacy}
          </Link>
          <Link
            href="/cgv"
            data-cursor="link"
            className="font-semibold text-[#c4c2bc] transition hover:text-[#faf9f6]"
          >
            {FOOTER_COPY.cgv}
          </Link>
          <Link
            href="/securite"
            data-cursor="link"
            className="font-semibold text-[#c4c2bc] transition hover:text-[#faf9f6]"
          >
            {FOOTER_COPY.security}
          </Link>
        </div>

        <div className="space-y-1 border-t border-[rgb(255_255_255/0.07)] pt-5 text-xs text-[#9e9c96]">
          <p>
            <span className="font-semibold">Hébergement :</span> {NAP.hostingProvider}
          </p>
          <p className="pt-1">{FOOTER_COPY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
