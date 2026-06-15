/** Bandeau BTP — bénéfices qualitatifs (pas de promesse de gain chiffré). */
export function BtpRoiStats() {
  const items = [
    {
      title: "Réponse visible",
      body: "Quand vous ne pouvez pas décrocher, le client sait que son message est pris en compte.",
    },
    {
      title: "Moins le soir",
      body: "Devis et relances avancent sans vous coller au téléphone après le chantier.",
    },
    {
      title: "Sur votre cas",
      body: "La démo de 30 min montre ce qui tournerait chez vous — sans chiffre garanti.",
    },
  ] as const;

  return (
    <section className="border-y border-border bg-night px-gutter py-10 md:py-12">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-xs uppercase tracking-widest text-faint">Ce que ça change</p>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="rounded-xl border border-border bg-bg-card p-5">
              <p className="font-heading text-lg font-bold text-text">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[11px] italic text-faint">
          Aucune promesse de gain chiffré — phase de lancement, preuves sur votre propre cas en démo.
        </p>
      </div>
    </section>
  );
}
