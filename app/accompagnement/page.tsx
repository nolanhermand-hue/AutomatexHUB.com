import { AccompagnementPointMensuelDemo } from "@/components/demo/AccompagnementPointMensuelDemo";
import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
import { NolanLiveDemo } from "@/components/motion/NolanLiveDemo";
import { ACCOMPANIMENT_PAGE } from "@/lib/btp-copy";
import { AccompagnementContactForm } from "@/components/sections/AccompagnementContactForm";
import { NAP } from "@/lib/constants";
import { ACCOMPANIMENT_CONTINUITY } from "@/lib/trust-copy";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accompagnement humain inclus · Flers · Automatex Hub",
  description:
    "Point mensuel, ajustements continus, ligne directe Nolan à Flers. L'accompagnement Automatex est inclus dans chaque formule — pas en option. Mandataires et artisans Orne.",
  openGraph: {
    title: "Vous n'êtes jamais seul avec votre système — Automatex Hub",
    description:
      "Nolan vous appelle chaque mois. Il ajuste. Il répond. Basé à Flers, Orne. L'accompagnement est inclus — pas en option.",
    url: "https://automatex-hub.com/accompagnement",
  },
  alternates: { canonical: "https://automatex-hub.com/accompagnement" },
};

export default function AccompagnementPage() {
  return (
    <div className="bg-night px-gutter pb-16 pt-[88px] md:pt-[100px]">
      <div className="mx-auto max-w-content">
        <h1 className="font-heading text-[clamp(2rem,5vw,3rem)] font-bold text-text">
          {ACCOMPANIMENT_PAGE.h1}
        </h1>
        <p className="mt-4 max-w-readable text-lg text-muted">{ACCOMPANIMENT_PAGE.sub}</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            À partir de 99€/mois
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-4 py-2 text-sm text-muted">
            Setup unique · Sans engagement
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-4 py-2 text-sm text-muted">
            30j satisfait ou remboursé
          </span>
        </div>

        <div className="mt-8 rounded-xl border border-primary/20 bg-accent-light p-6">
          <FounderTrustBlock />
        </div>

        <div className="mt-14 space-y-16">
          <section>
            <h2 className="font-heading text-2xl text-text">Chaque mois, Nolan vous appelle.</h2>
            <p className="mt-4 max-w-readable text-muted">{ACCOMPANIMENT_PAGE.monthlyIntro}</p>
            <div className="mt-8">
              <AccompagnementPointMensuelDemo />
            </div>
            <ol className="mt-10 flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible">
              {ACCOMPANIMENT_PAGE.timelineHorizontal.map((step) => (
                <li
                  key={step.month}
                  className="min-w-[10rem] flex-1 rounded-lg border border-border bg-bg-card p-4 text-sm"
                >
                  <span className="font-semibold text-text">{step.month}</span>
                  <p className="mt-2 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-text">{ACCOMPANIMENT_PAGE.sections[1].h2}</h2>
            <p className="mt-4 max-w-readable text-muted">{ACCOMPANIMENT_PAGE.sections[1].body}</p>
            <p className="mt-4 text-sm italic text-muted">
              Exemple (simulation) : un couvreur commence la rénovation énergétique — le template de
              devis est adapté en 48 h, sans surcoût.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-text">{ACCOMPANIMENT_PAGE.sections[2].h2}</h2>
            <p className="mt-4 max-w-readable text-muted">{ACCOMPANIMENT_PAGE.sections[2].body}</p>
            <p className="mt-6 font-semibold text-text">
              <a href={`tel:${NAP.phoneE164}`} className="text-primary underline">
                {NAP.phoneDisplay}
              </a>{" "}
              — {NAP.founder}, {NAP.city}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-text">Nolan en action (simulation)</h2>
            <NolanLiveDemo />
          </section>

          <section>
            <h2 className="font-heading text-2xl text-text">{ACCOMPANIMENT_CONTINUITY.h2}</h2>
            <p className="mt-4 max-w-readable text-muted">{ACCOMPANIMENT_CONTINUITY.intro}</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-muted md:text-base">
              {ACCOMPANIMENT_CONTINUITY.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-text">{ACCOMPANIMENT_PAGE.roi.h2}</h2>
            <p className="mt-4 max-w-readable leading-relaxed text-muted">
              {ACCOMPANIMENT_PAGE.roi.body}
            </p>
          </section>
        </div>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/immobilier#pricing"
            className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-border px-6 font-semibold text-text"
          >
            Voir les formules immobilier
          </Link>
          <Link
            href="/btp#pricing"
            className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-border px-6 font-semibold text-text"
          >
            Voir les formules BTP
          </Link>
        </div>

        <section className="mt-16 border-t border-border pt-16">
          <h2 className="font-heading text-xl font-bold text-text">
            L&apos;accompagnement est inclus dans chaque formule
          </h2>
          <p className="mt-2 text-sm text-muted">Pas en option. Pas en supplément. Inclus.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-left font-medium text-text">Formule</th>
                  <th className="px-4 py-3 text-right font-medium text-text">Mensuel</th>
                  <th className="py-3 pl-4 text-left font-medium text-muted">Point mensuel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "Départ", price: "99€", note: "Sur demande", highlight: false },
                  { name: "Essentiel ⭐", price: "249€", note: "Inclus", highlight: true },
                  { name: "Pro", price: "349€", note: "Inclus", highlight: false },
                  { name: "Full", price: "449€", note: "Inclus + réponse 4h", highlight: false },
                ].map((row) => (
                  <tr key={row.name} className={row.highlight ? "bg-primary/5" : undefined}>
                    <td
                      className={`py-3 pr-4 font-medium ${row.highlight ? "text-primary" : "text-text"}`}
                    >
                      {row.name}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums text-text">{row.price}</td>
                    <td className="py-3 pl-4 text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted">
            + Setup unique au démarrage (199€–999€ selon formule).
            <Link href="/immobilier#pricing" className="ml-1 text-primary hover:underline">
              Voir le détail →
            </Link>
          </p>
        </section>

        <AccompagnementContactForm />
      </div>
    </div>
  );
}
