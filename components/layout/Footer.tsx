import { LogoOrbit } from "@/components/brand/LogoOrbit";
import { FooterTrustBadges } from "@/components/layout/FooterTrustBadges";
import { ManageCookiesButton } from "@/components/seo/ManageCookiesButton";
import { FacebookLink } from "@/components/ui/FacebookLink";
import { LinkedInLink } from "@/components/ui/LinkedInLink";
import { TikTokLink } from "@/components/ui/TikTokLink";
import {
  FOOTER_COPY,
  FOOTER_LOCAL_LINKS,
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
            <div className="mb-4">
              <LogoOrbit variant="symbol" href="/" height={40} />
            </div>
            <p className="mb-6 max-w-sm text-[13px] leading-relaxed text-muted">
              Automatisations pour artisans BTP, diagnostiqueurs immobiliers, courtiers, gérants de
              TPE — installé à Flers, déployé en Orne et Normandie.{" "}
              {SOVEREIGNTY_TRUST_LINE}.
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
              <li>
                <ManageCookiesButton className="text-[13px] text-muted transition hover:text-text" />
              </li>
            </ul>
          </div>
        </div>

        <nav aria-label="Pages locales Normandie" className="mb-8">
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
          <br />
          <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="streetAddress">{NAP.streetAddress}</span>
            {", "}
            <span itemProp="postalCode">{NAP.postalCode}</span>{" "}
            <span itemProp="addressLocality">{NAP.city}</span>
            {", "}
            <span itemProp="addressRegion">{NAP.region}</span>
          </span>
          <br />
          <a href={`mailto:${NAP.email}`} itemProp="email" className="text-text hover:text-primary">
            {NAP.email}
          </a>
          {" · "}
          <a href={`tel:${NAP.phoneE164}`} itemProp="telephone" className="text-text hover:text-primary">
            {NAP.phoneDisplay}
          </a>
          {" · "}
          <LinkedInLink className="align-middle" size={22} />
          {" · "}
          <FacebookLink className="align-middle" size={22} />
          {" · "}
          <TikTokLink className="align-middle" size={22} />
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
