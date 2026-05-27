import Link from "next/link";
import type { ReactNode } from "react";
import {
  VOS_DONNEES_COLLECTION_ROWS,
  VOS_DONNEES_FAQ,
  VOS_DONNEES_HERO_BADGES,
  VOS_DONNEES_INFRA_STACK,
  VOS_DONNEES_NEVER,
  VOS_DONNEES_RIGHTS,
} from "@/lib/vos-donnees-content";

function ModuleHeader({ n, title }: { n: string; title?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-faint">MODULE {n}</p>
        <div className="h-px flex-1 bg-border" aria-hidden />
      </div>
      {title ? <h2 className="mt-6 text-2xl font-bold text-text">{title}</h2> : null}
    </div>
  );
}

function SectionBlock({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={className}>{children}</section>;
}

export function VosDonneesView() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-gutter pb-16 pt-24">
        <p className="label-micro mb-6 text-primary">SÉCURITÉ · RGPD · TRANSPARENCE</p>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-text">
          Vos données vous appartiennent.
          <br />
          On vous dit exactement ce qu&apos;on en fait.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Automatex manipule des données professionnelles sensibles — emails, devis, contacts clients.
          Vous avez le droit de savoir où elles vont, qui y accède, et comment les supprimer. Cette page
          répond à ces questions sans langue de bois.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Formulation honnête : IA française · automatisations en Europe · RGPD natif. Le site public est
          servi en statique (Netlify) ; les automatisations tournent en UE (N8N Cloud, Francfort).
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {VOS_DONNEES_HERO_BADGES.map((b) => (
            <span
              key={b.label}
              className="badge badge-default flex items-center gap-2 px-4 py-2 text-[11px] normal-case tracking-wide"
            >
              <span aria-hidden>{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-20 px-gutter pb-20">
        <SectionBlock>
          <ModuleHeader n="01" title="Ce qu'on ne fait jamais" />
          <div className="card overflow-hidden p-0">
            <div className="border-b border-border bg-night px-6 py-4">
              <p className="font-mono text-[11px] uppercase tracking-wide text-primary">
                ENGAGEMENTS FERMES — PAS DE CONDITIONS GÉNÉRALES CACHÉES
              </p>
            </div>
            <ul className="divide-y divide-border">
              {VOS_DONNEES_NEVER.map((item) => (
                <li key={item} className="flex items-center gap-4 px-6 py-4">
                  <svg
                    className="h-4 w-4 shrink-0 text-danger"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionBlock>

        <SectionBlock>
          <ModuleHeader n="02" />
          <h2 className="mb-3 text-2xl font-bold text-text">Où vont vos données — exactement</h2>
          <p className="mb-8 text-sm leading-relaxed text-muted">
            Chaque outil utilisé par Automatex, avec la localisation précise des serveurs et le type de
            données traitées.
          </p>
          <div className="space-y-4">
            {VOS_DONNEES_INFRA_STACK.map((item) => (
              <div key={item.id} className="card overflow-hidden p-0">
                <div className="border-b border-border px-5 py-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wide text-faint">
                        {item.id} — {item.role}
                      </p>
                      <p className="mt-1 text-[15px] font-semibold text-text">
                        {item.flag} {item.provider}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {item.rgpd ? (
                        <span className="badge badge-green text-[10px]">✓ RGPD</span>
                      ) : null}
                      <span className="badge badge-default text-[10px]">{item.location}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 px-5 py-4">
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-faint">
                      Données traitées
                    </p>
                    <p className="text-[13px] text-muted">{item.dataType}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-faint">
                      Ce qu&apos;il faut savoir
                    </p>
                    <p className="text-[13px] leading-relaxed text-muted">{item.note}</p>
                  </div>
                  {item.action ? (
                    <p className="rounded-md border border-warning/20 bg-warning/5 px-3 py-2 font-mono text-[11px] text-warning">
                      → {item.action}
                    </p>
                  ) : null}
                  {item.certifications ? (
                    <div className="flex flex-wrap gap-2">
                      {item.certifications.map((cert) => (
                        <span key={cert} className="badge badge-default text-[10px]">
                          {cert}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {item.docs ? (
                    <a
                      href={item.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-primary hover:underline"
                    >
                      Documentation officielle →
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock>
          <ModuleHeader n="03" title="Mistral et N8N — ce que ça veut dire concrètement" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  🇫🇷
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Mistral AI</p>
                  <p className="font-semibold text-text">Paris · France · UE</p>
                </div>
              </div>
              <div className="space-y-3 text-[13px] leading-relaxed text-muted">
                <p>
                  Mistral AI est une entreprise française fondée à Paris. C&apos;est le modèle qui
                  comprend vos emails, transcrit vos notes vocales et rédige les réponses automatiques.
                </p>
                <p>
                  Serveurs en France et en Allemagne. Vos données ne transitent pas vers les États-Unis via
                  cette prestation. Aucun risque lié au Cloud Act américain sur ce flux.
                </p>
                <p>
                  <strong className="text-text">Vos données n&apos;entraînent pas les modèles.</strong>{" "}
                  C&apos;est contractuellement garanti (DPA RGPD).
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                {["Fondé à Paris", "Serveurs EU", "RGPD natif", "AI Act conforme"].map((tag) => (
                  <span key={tag} className="badge badge-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  🇩🇪
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-faint">N8N Cloud</p>
                  <p className="font-semibold text-text">Francfort · Allemagne · UE</p>
                </div>
              </div>
              <div className="space-y-3 text-[13px] leading-relaxed text-muted">
                <p>
                  N8N orchestre les automatisations — Gmail, Telegram, Google Drive, Mistral. N8N Cloud
                  est hébergé à Francfort.
                </p>
                <p>
                  L&apos;Allemagne est dans l&apos;Union Européenne. Le RGPD s&apos;applique. N8N ne revend
                  pas vos données de workflow.
                </p>
                <p>
                  <strong className="text-text">Seul Nolan a accès aux workflows.</strong> Isolés par
                  client — jamais partagés entre artisans ou mandataires.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                {["Francfort · UE", "Open source", "SOC 2", "RGPD conforme"].map((tag) => (
                  <span key={tag} className="badge badge-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock>
          <ModuleHeader n="04" />
          <h2 className="mb-3 text-2xl font-bold text-text">Vos droits — exercez-les en un email</h2>
          <p className="mb-8 text-sm text-muted">
            Le RGPD vous donne 6 droits. Voici comment les exercer chez Automatex.
          </p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {VOS_DONNEES_RIGHTS.map((item) => (
              <div key={item.right} className="card p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <p className="text-[14px] font-semibold text-text">{item.right}</p>
                  <span className="badge badge-default shrink-0 text-[9px]">{item.article}</span>
                </div>
                <p className="mb-3 text-[12px] leading-relaxed text-muted">{item.what}</p>
                <p className="flex items-center gap-2 font-mono text-[11px] text-primary">
                  <span aria-hidden>→</span>
                  {item.how}
                </p>
              </div>
            ))}
          </div>
          <div className="card mt-6 border-primary/20 p-5">
            <p className="label-micro mb-2 text-primary">CONTACT DONNÉES PERSONNELLES</p>
            <p className="text-[13px] leading-relaxed text-muted">
              Pour exercer vos droits ou pour toute question sur le traitement de vos données :
            </p>
            <a
              href="mailto:nolan.hermand@automatex-hub.com"
              className="mt-2 block font-mono text-[14px] text-text transition-colors hover:text-primary"
            >
              nolan.hermand@automatex-hub.com
            </a>
            <p className="mt-2 font-mono text-[11px] text-faint">
              Nolan Hermand · 50 rue de l&apos;Equerre · 61100 Saint-Georges-des-Groseillers
            </p>
          </div>
        </SectionBlock>

        <SectionBlock>
          <ModuleHeader n="05" title="Ce qu'on collecte — et seulement ça" />
          <div className="card overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-[13px]">
                <thead>
                  <tr className="border-b border-border bg-night">
                    <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wide text-faint">
                      Donnée
                    </th>
                    <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wide text-faint">
                      Pourquoi
                    </th>
                    <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wide text-faint">
                      Conservation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {VOS_DONNEES_COLLECTION_ROWS.map((row) => (
                    <tr key={row.data} className="transition-colors hover:bg-surface-2">
                      <td className="px-5 py-3 font-medium text-text">{row.data}</td>
                      <td className="px-5 py-3 text-muted">{row.why}</td>
                      <td className="px-5 py-3 font-mono text-[11px] text-muted">{row.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock>
          <ModuleHeader n="06" title="Questions fréquentes — données & sécurité" />
          <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
            {VOS_DONNEES_FAQ.map((item) => (
              <details key={item.q} className="group bg-surface transition-colors hover:bg-surface-2">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-[14px] font-medium text-text marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg
                    className="ml-4 h-3 w-3 shrink-0 text-faint transition-transform group-open:rotate-180"
                    viewBox="0 0 10 6"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M0 0l5 6 5-6z" />
                  </svg>
                </summary>
                <div className="border-t border-border px-6 pb-5 pt-1">
                  <p className="text-[13px] leading-relaxed text-muted">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock>
          <ModuleHeader n="07" title="Registre des traitements & conformité" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="card p-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-wide text-faint">
                REGISTRE DES TRAITEMENTS
              </p>
              <p className="mb-4 text-[13px] leading-relaxed text-muted">
                Automatex Hub tient à jour un registre de ses traitements de données personnelles,
                conformément à l&apos;article 30 du RGPD. Il est disponible sur demande.
              </p>
              <a
                href="mailto:nolan.hermand@automatex-hub.com?subject=Demande registre des traitements RGPD"
                className="btn-bracket btn-bracket-outline text-[11px]"
              >
                [ Demander le registre ]
              </a>
            </div>
            <div className="card p-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-wide text-faint">
                BASE LÉGALE DES TRAITEMENTS
              </p>
              <ul className="space-y-2 text-[13px] text-muted">
                <li className="flex gap-3">
                  <span className="shrink-0 font-mono text-primary">→</span>
                  <span>
                    <strong className="text-text">Exécution du contrat</strong> — art. 6.1.b RGPD
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 font-mono text-primary">→</span>
                  <span>
                    <strong className="text-text">Intérêt légitime</strong> — logs, amélioration du service
                    (art. 6.1.f)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 font-mono text-primary">→</span>
                  <span>
                    <strong className="text-text">Consentement</strong> — témoignages, études de cas (art.
                    6.1.a)
                  </span>
                </li>
              </ul>
            </div>
            <div className="card p-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-wide text-faint">
                SOUS-TRAITANTS (art. 28 RGPD)
              </p>
              <ul className="space-y-1.5 font-mono text-[12px] text-muted">
                {[
                  { name: "N8N GmbH", role: "Automatisation", loc: "Allemagne (UE)" },
                  { name: "Mistral AI SAS", role: "Modèle de langage", loc: "France (UE)" },
                  { name: "Netlify Inc.", role: "Hébergement site", loc: "USA — données site uniquement" },
                  { name: "Google LLC", role: "Gmail / Drive client", loc: "USA — compte client" },
                ].map((s) => (
                  <li key={s.name}>
                    <span className="text-text">{s.name}</span>
                    <span className="block text-[10px] text-faint">
                      {s.role} · {s.loc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-wide text-faint">
                RÉCLAMATION CNIL
              </p>
              <p className="mb-4 text-[13px] leading-relaxed text-muted">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL.
              </p>
              <a
                href="https://www.cnil.fr/fr/plaintes"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-primary hover:underline"
              >
                cnil.fr/fr/plaintes →
              </a>
            </div>
          </div>
        </SectionBlock>

        <section className="border-t border-border pt-16 text-center">
          <p className="label-micro mb-4 text-faint">UNE QUESTION ?</p>
          <h2 className="mb-4 text-2xl font-bold text-text">
            Pas de politique de confidentialité à 40 pages.
            <br />
            Juste Nolan. Un email. Une réponse.
          </h2>
          <p className="mb-8 text-sm text-muted">
            Si quelque chose n&apos;est pas clair, ou pour exercer un de vos droits RGPD, écrivez
            directement.
          </p>
          <a href="mailto:nolan.hermand@automatex-hub.com" className="btn-bracket btn-bracket-primary">
            nolan.hermand@automatex-hub.com
          </a>
          <p className="mt-4 font-mono text-[11px] text-faint">
            Réponse sous 24h en semaine · SIRET 10320805400017
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4 border-t border-border pt-8">
            <Link
              href="/politique-confidentialite"
              className="font-mono text-[11px] text-faint transition-colors hover:text-muted"
            >
              Politique de confidentialité complète →
            </Link>
            <Link
              href="/mentions-legales"
              className="font-mono text-[11px] text-faint transition-colors hover:text-muted"
            >
              Mentions légales →
            </Link>
            <Link href="/cgv" className="font-mono text-[11px] text-faint transition-colors hover:text-muted">
              CGV →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
