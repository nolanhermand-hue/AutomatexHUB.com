import { AutomatisationsCatalogSections } from "@/components/automatisations/AutomatisationsCatalogSections";
import {
  AUTOMATIONS_CATALOG,
  CATEGORIES,
  FEATURED_BTP,
  FEATURED_IMMO,
} from "@/lib/automations-catalog";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import { rendezVousHref } from "@/lib/hub-nav";

export const metadata: Metadata = {
  title: "Tout ce qu'Automatex peut faire — Catalogue des automatisations · Orne",
  description:
    "Réponse aux demandes, tri mails, devis automatiques, classement Drive, résumé Telegram, note vocale, relances clients — catalogue complet pour mandataires et artisans BTP en Orne.",
  openGraph: {
    title: "Ce qu'Automatex fait à votre place — Catalogue complet · Automatex Hub",
    description:
      "Toutes les automatisations pour mandataires immobiliers et artisans BTP en Normandie. Chaque fonction expliquée avec un exemple réel.",
    url: `${SITE_URL}/automatisations`,
  },
  alternates: { canonical: `${SITE_URL}/automatisations` },
};

export default function AutomatisationsPage() {
  return (
    <main className="funnel-surface min-h-screen px-gutter pb-20 pt-[88px] md:pt-[100px]">
      <section className="mx-auto max-w-content pb-16 text-center">
        <span className="label-micro text-faint">Catalogue complet</span>
        <h1 className="mt-4 font-heading text-3xl font-bold text-text md:text-4xl">
          Tout ce qu&apos;Automatex fait à votre place — chaque jour
        </h1>
        <p className="mx-auto mt-5 max-w-readable text-base clienting-relaxed text-muted">
          Chaque automatisation ci-dessous est une configuration réelle, avec le message exact qui
          part et l&apos;impact sur votre activité. Pages par douleur métier (relances, SMS, clients) :{" "}
          <Link href="/automatisation-pour-artisans" className="text-primary underline">
            hub automatisations pro
          </Link>
          .
        </p>

        <div className="glass-panel mt-10 inline-flex gap-8 px-8 py-4">
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-primary">{AUTOMATIONS_CATALOG.length}</p>
            <p className="mt-0.5 text-xs text-muted">automatisations</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-text">{CATEGORIES.length}</p>
            <p className="mt-0.5 text-xs text-muted">domaines</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-accent">48h</p>
            <p className="mt-0.5 text-xs text-muted">pour activer</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-primary">
            TPE & PME — voir l&apos;offre →
          </Link>
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-outline">
            Je suis mandataire →
          </Link>
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-outline">
            Je suis artisan BTP →
          </Link>
        </div>
        <p className="mt-3 text-center text-xs text-faint">
          Démo 20 min · Gratuite · Nolan rappelle sous 24 h
        </p>
      </section>

      <AutomatisationsCatalogSections />

      <section className="mx-auto max-w-content border-t border-border py-16 text-center">
        <h2 className="font-heading text-2xl font-bold text-text">
          Toutes ces automatisations actives chez vous en 48h
        </h2>
        <p className="mx-auto mt-4 max-w-readable text-sm clienting-relaxed text-muted">
          On configure ce qui est utile pour vous, dans votre façon de travailler. Nolan vous appelle
          pour cadrer ça en 20 minutes.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-primary">
            TPE & PME — voir l&apos;offre →
          </Link>
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-outline">
            Je suis mandataire immobilier →
          </Link>
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-outline">
            Je suis artisan BTP →
          </Link>
        </div>
        <p className="mt-6 text-xs text-faint">
          Démo gratuite · 20 min · Sans engagement · Basé à Flers, Orne
        </p>
        <p className="sr-only">
          Featured immobilier: {FEATURED_IMMO.join(", ")}. Featured BTP: {FEATURED_BTP.join(", ")}.
        </p>
      </section>
    </main>
  );
}
