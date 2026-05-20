/** C04 — chiffres ROI BTP (remplace le compteur « 0 € »). */
export function BtpRoiStats() {
  return (
    <section className="border-y border-border bg-night px-gutter py-10 md:py-12">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-xs uppercase tracking-widest text-faint">Ordre de grandeur</p>
        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
          <div>
            <p className="font-heading text-3xl font-bold text-primary">8 000 €</p>
            <p className="mt-1 text-xs text-muted">Chantier moyen artisan Orne (FFB 2023)</p>
          </div>
          <div>
            <p className="font-heading text-3xl font-bold text-text">2 à 3</p>
            <p className="mt-1 text-xs text-muted">
              Chantiers perdus par an à cause des réponses tardives
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-heading text-3xl font-bold text-accent">99 €/mois</p>
            <p className="mt-1 text-xs text-muted">
              Formule Départ — rentable dès le 1er chantier récupéré
            </p>
          </div>
        </div>
        <p className="mt-5 text-[11px] italic text-faint">
          Source : chantier moyen toutes spécialités confondues, Orne, FFB 2023. Calcul conservateur.
        </p>
      </div>
    </section>
  );
}
