import { AutomatisationsCatalogSections } from "@/components/automatisations/AutomatisationsCatalogSections";
import {
  AUTOMATIONS_CATALOG,
  CATEGORIES,
  FEATURED_BTP,
  FEATURED_IMMO,
} from "@/lib/automations-catalog";
import { SETUP_48H_NUANCE, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import { rendezVousHref } from "@/lib/hub-nav";

export const metadata: Metadata = {
  title: "Tout ce qu'Automatex peut faire — Catalogue des automatisations · Orne",
  description:
    "Réponse aux demandes, tri mails, devis automatiques, classement Drive, résumé Telegram, note vocale, relances clients — catalogue complet pour diagnostiqueurs et artisans BTP en Orne.",
  openGraph: {
    title: "Ce qu'Automatex fait à votre place — Catalogue complet · Automatex Hub",
    description:
      "Toutes les automatisations pour diagnostiqueurs immobiliers et artisans BTP en Normandie. Chaque fonction expliquée avec un exemple réel.",
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
          Ce qu&apos;Automatex peut faire à votre place
        </h1>
        <p className="mx-auto mt-5 max-w-readable text-base leading-relaxed text-muted">
          Chaque automatisation ci-dessous est une configuration réelle, avec le message exact qui
          part et l&apos;impact sur votre activité. Pages par douleur métier (relances, SMS, demandes) :{" "}
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
            <p className="font-heading text-2xl font-bold text-accent">48 h</p>
            <p className="mt-0.5 text-xs text-muted">après validation</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-primary">
            TPE & PME — voir l&apos;offre →
          </Link>
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-outline">
            Diagnostiqueur immobilier →
          </Link>
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-outline">
            Artisan BTP →
          </Link>
        </div>
        <p className="mt-3 text-center text-xs text-faint">
          Démo 20 min · Gratuite · Nolan rappelle sous 24 h
        </p>
      </section>

      <AutomatisationsCatalogSections />

      <section className="mx-auto max-w-content border-t border-border py-16 text-center">
        <h2 className="font-heading text-2xl font-bold text-text">
          Mise en route selon votre périmètre
        </h2>
        <p className="mx-auto mt-4 max-w-readable text-sm leading-relaxed text-muted">
          {SETUP_48H_NUANCE}. Nolan vous appelle pour cadrer 2 à 4 priorités en 20 minutes.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-primary">
            TPE & PME — voir l&apos;offre →
          </Link>
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-outline">
            Diagnostiqueur immobilier →
          </Link>
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-outline">
            Artisan BTP →
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
