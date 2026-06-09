import { LogoOrbit } from "@/components/brand/LogoOrbit";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="funnel-surface flex min-h-[70vh] flex-col items-center justify-center px-gutter py-24 text-center">
      <LogoOrbit variant="symbol" height={56} href="/" theme="light" />
      <p className="label-micro mt-10 text-faint">Erreur 404</p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-text md:text-4xl">Cette page n&apos;existe pas</h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
        L&apos;adresse est incorrecte ou la page a été déplacée. Retourne à l&apos;accueil pour continuer.
      </p>
      <Link
        href="/"
        className="btn-bracket btn-bracket-primary mt-10 min-h-[48px] justify-center px-8"
      >
        Revenir à l&apos;accueil
      </Link>
    </main>
  );
}
