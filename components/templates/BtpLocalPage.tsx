import { BtpOrneSeoExtension } from "@/components/seo/BtpOrneSeoExtension";
import { BTP_GEO_FAQ } from "@/lib/btp-geo-faq";
import { buildBtpLocalSections } from "@/lib/btp-local-sections";
import type { BtpLocalPageDef } from "@/lib/btp-copy";
import { buildLocalBtpJsonLd } from "@/lib/json-ld";
import { NAP, SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";
import Link from "next/link";

export function BtpLocalPage({ page }: { page: BtpLocalPageDef }) {
  const sections = buildBtpLocalSections(page);
  const json = buildLocalBtpJsonLd({
    path: page.path,
    pageName: page.h1,
    city: page.city,
    description: page.metaDescription,
  });

  return (
    <article className="funnel-surface mx-auto max-w-content px-gutter py-16 pt-[88px] md:pt-[100px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
      <nav className="text-sm text-muted" aria-label="Fil d'Ariane">
        <Link href="/" className="text-primary underline">
          Accueil
        </Link>
        <span aria-hidden> / </span>
        <Link href="/btp" className="text-primary underline">
          Artisans BTP
        </Link>
        <span aria-hidden> / </span>
        <span className="text-text">{page.city}</span>
      </nav>
      <p className="label-micro mt-6 text-accent">Orne · Normandie · {SOVEREIGNTY_TRUST_LINE}</p>
      <h1 className="mt-3 font-heading text-3xl text-text md:text-4xl">{page.h1}</h1>
      <p className="mt-6 max-w-readable text-lg leading-relaxed text-muted">{page.localHook}</p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-heading text-2xl text-text">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="mt-4 max-w-readable text-base leading-relaxed text-muted"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      {page.path === "/automatisation-btp-orne" ? <BtpOrneSeoExtension /> : null}

      <section className="mt-14">
        <h2 className="font-heading text-xl text-text">Questions fréquentes</h2>
        <dl className="mt-6 space-y-6">
          {BTP_GEO_FAQ.map((item) => (
            <div key={item.q}>
              <dt className="font-semibold text-text">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-14 rounded-lg border border-primary/30 bg-surface p-8">
        <h2 className="font-heading text-xl text-text">Réserver une démo</h2>
        <p className="mt-3 text-muted">
          Artisans {page.city} : 20 minutes sur vos vrais chantiers.{" "}
          <a className="text-primary underline" href={`tel:${NAP.phoneE164}`}>
            {NAP.phoneDisplay}
          </a>
          .
        </p>
        <Link
          href="/rendez-vous"
          className="mt-6 btn-bracket btn-bracket-primary w-full justify-center"
        >
          Nolan me rappelle sous 24 h
        </Link>
      </div>
    </article>
  );
}
