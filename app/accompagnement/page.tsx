import { AccompagnementPointMensuelDemo } from "@/components/demo/AccompagnementPointMensuelDemo";
import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
import { NolanLiveDemo } from "@/components/motion/NolanLiveDemo";
import { ACCOMPANIMENT_PAGE } from "@/lib/btp-copy";
import { ACCOMPANIMENT_COPY, NAP, PRICING_HEADING } from "@/lib/constants";
import { rendezVousHref } from "@/lib/hub-nav";
import { ACCOMPANIMENT_CONTINUITY } from "@/lib/trust-copy";
import type { Metadata } from "next";
import Link from "next/link";

const ACCOMP_PILL =
  "inline-flex items-center font-mono text-xs uppercase tracking-wider border border-[#1A2540] bg-[#0D1526] px-3 py-1.5 text-muted";
const ACCOMP_PILL_ACTIVE =
  "inline-flex items-center font-mono text-xs uppercase tracking-wider border border-[#FF6B2B] bg-[#0D1526] px-3 py-1.5 text-[#FF6B2B]";

export const metadata: Metadata = {
  title: "Accompagnement humain inclus · Flers · Automatex Hub",
  description:
    "Point mensuel, ajustements continus, ligne directe Nolan à Flers. Inclus dans chaque formule — ou sur mesure (plus léger ou plus complet, prix sur devis). Mandataires et artisans Orne.",
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
    <div className="funnel-surface px-gutter pb-16 pt-[88px] md:pt-[100px]">
      <div className="mx-auto max-w-content">
        <h1 className="font-heading text-[clamp(2rem,5vw,3rem)] font-bold text-text">
          {ACCOMPANIMENT_PAGE.h1}
        </h1>
        <p className="mt-4 max-w-readable text-lg text-muted">{ACCOMPANIMENT_PAGE.sub}</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className={ACCOMP_PILL_ACTIVE}>Packs Déclic · Système · Pilote</span>
          <span className={ACCOMP_PILL}>Sur mesure · prix sur devis</span>
          <span className={ACCOMP_PILL}>Sans engagement · résiliable en 1 mail</span>
        </div>

        <div className="mt-8 card border-primary/30 p-6">
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

        <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/immobilier#pricing" className="btn-bracket btn-bracket-outline flex-1 justify-center">
            Voir les formules immobilier
          </Link>
          <Link href="/btp#pricing" className="btn-bracket btn-bracket-outline flex-1 justify-center">
            Voir les formules BTP
          </Link>
        </div>

        <section className="mt-16 border-t border-border pt-16">
          <h2 className="font-heading text-xl font-bold text-text">
            L&apos;accompagnement est inclus dans chaque formule
          </h2>
          <p className="mt-2 max-w-readable text-sm text-muted">
            Pas en option. Pas en supplément. Accompagnement Essentiel, Suivi ou Copilote selon le
            pack — voir les grilles sur les pages tarifs.
          </p>

          <div className="mt-8 card border-primary/40 bg-surface p-6 md:p-8">
            <p className="label-micro text-primary">Périmètre flexible</p>
            <h3 className="mt-2 font-heading text-2xl text-text">{ACCOMPANIMENT_COPY.surMesure.h2}</h3>
            <p className="mt-3 max-w-readable text-sm leading-relaxed text-muted md:text-base">
              {ACCOMPANIMENT_COPY.surMesure.body}
            </p>
            <p className="mt-3 text-sm text-muted">{PRICING_HEADING.customFitFootnote}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={rendezVousHref({ offre: "sur-mesure" })}
                className="btn-bracket btn-bracket-primary justify-center"
              >
                {ACCOMPANIMENT_COPY.surMesure.cta}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={rendezVousHref({ offre: "sur-mesure" })}
                className="btn-bracket btn-bracket-outline justify-center"
              >
                Sur mesure artisan BTP
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/automatisation-ia-tpe#tarifs"
              className="btn-bracket btn-bracket-primary flex-1 justify-center"
            >
              Offre complète TPE & PME
            </Link>
            <Link
              href="/immobilier#pricing"
              className="btn-bracket btn-bracket-outline flex-1 justify-center"
            >
              Tarifs mandataires
            </Link>
            <Link href="/btp#pricing" className="btn-bracket btn-bracket-outline flex-1 justify-center">
              Tarifs artisans BTP
            </Link>
          </div>
        </section>

        <section id="contact" className="mt-16 border-t border-border pt-16 text-center">
          <h2 className="font-heading text-2xl text-text">Prendre rendez-vous avec Nolan</h2>
          <p className="mx-auto mt-4 max-w-readable text-muted">
            Démo ou cadrage sur mesure : un seul formulaire, réponse sous 24 h. Sans engagement —
            résiliable en un mail.
          </p>
          <Link
            href={rendezVousHref()}
            className="btn-bracket btn-bracket-primary mt-8 justify-center"
          >
            Réserver mon créneau
            <span aria-hidden>→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
