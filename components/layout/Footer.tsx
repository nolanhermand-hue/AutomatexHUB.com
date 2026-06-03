import { FooterTrustBadges } from "@/components/layout/FooterTrustBadges";
import {
  FOOTER_COPY,
  FOOTER_LOCAL_LINKS,
  LINKEDIN_PROFILE_ARIA,
  NAP,
  SOVEREIGNTY_TRUST_LINE,
} from "@/lib/constants";
import { FOOTER_BTP_LOCAL_LINKS, SITE_NAV } from "@/lib/hub-nav";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-[10] mt-20 border-t border-border bg-bg">
      <div className="mx-auto max-w-content px-gutter py-16">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-text">
                AUTOMATEX
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            </div>
            <p className="mb-6 max-w-sm text-[13px] leading-relaxed text-muted">
              Système automatique et accompagnement humain à Flers — mandataires immobiliers et
              artisans BTP en Orne et Normandie. {SOVEREIGNTY_TRUST_LINE}.
            </p>
            <FooterTrustBadges />
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-faint">LE SITE</p>
            <ul className="space-y-2">
              {SITE_NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-muted transition hover:text-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-faint">LÉGAL</p>
            <ul className="space-y-2">
              {[
                { label: FOOTER_COPY.legalMentions, href: "/mentions-legales" },
                { label: FOOTER_COPY.cgv, href: "/cgv" },
                { label: FOOTER_COPY.privacy, href: "/politique-confidentialite" },
                { label: FOOTER_COPY.security, href: "/securite" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-muted transition hover:text-text">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav aria-label="Pages locales mandataires" className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
            {FOOTER_COPY.localHeading}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LOCAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[13px] text-muted hover:text-text">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Pages locales artisans BTP" className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-faint">Artisans BTP · Orne</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_BTP_LOCAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[13px] text-muted hover:text-text">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address
          className="not-italic text-[13px] leading-relaxed text-muted"
          itemScope
          itemType="https://schema.org/ProfessionalService"
        >
          <span itemProp="name" className="font-semibold text-text">
            {NAP.brand}
          </span>
          {" · "}
          <span itemProp="founder">{NAP.founder}</span>
          {" · "}
          <span itemProp="streetAddress">{NAP.streetAddress}</span>
          {", "}
          <span itemProp="addressLocality">{NAP.city}</span>
          {" ("}
          <span itemProp="postalCode">{NAP.postalCode}</span>
          {")"}
          <br />
          <a href={`mailto:${NAP.email}`} itemProp="email" className="text-text hover:text-primary">
            {NAP.email}
          </a>
          {" · "}
          <a href={`tel:${NAP.phoneE164}`} itemProp="telephone" className="text-text hover:text-primary">
            {NAP.phoneDisplay}
          </a>
          {" · "}
          <a
            href={NAP.linkedinUrl}
            className="text-text hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={LINKEDIN_PROFILE_ARIA}
          >
            LinkedIn
          </a>
        </address>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-faint">
            {SOVEREIGNTY_TRUST_LINE} · Infra client : {NAP.hostingProvider}
          </p>
          <p className="font-mono text-[11px] text-faint">{FOOTER_COPY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
