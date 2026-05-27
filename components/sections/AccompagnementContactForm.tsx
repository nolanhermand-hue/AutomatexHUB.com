"use client";

import { trackFormSubmitted } from "@/lib/analytics";

/** C07 — formulaire direct sur /accompagnement. */
export function AccompagnementContactForm() {
  return (
    <section id="contact" className="mt-16 border-t border-border pt-16">
      <h2 className="font-heading text-2xl text-text">
        Vous voulez voir comment ça marche sur votre activité ?
      </h2>
      <p className="mt-3 max-w-readable text-sm text-muted">
        Nolan vous appelle sous 24 h. 20 minutes. Pas de PowerPoint — il regarde votre façon de
        travailler et vous dit ce qu&apos;on peut mettre en place.
      </p>

      <form
        name="contact-accompagnement"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="hp-field"
        className="relative mx-auto mt-8 max-w-xl space-y-4"
        action="/merci"
        onSubmit={() => trackFormSubmitted()}
      >
        <input type="hidden" name="form-name" value="contact-accompagnement" />
        <div aria-hidden="true" className="hidden">
          <input name="hp-field" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="acc-prenom" className="block text-sm font-medium text-text">
            Votre prénom *
          </label>
          <input
            id="acc-prenom"
            name="prenom"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Votre prénom"
            className="mt-2 w-full rounded-lg border border-border bg-night px-4 py-3 text-base text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="acc-telephone" className="block text-sm font-medium text-text">
            Votre téléphone *
          </label>
          <input
            id="acc-telephone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="06 XX XX XX XX"
            pattern="^(0[67][0-9]{8})$"
            className="mt-2 w-full rounded-lg border border-border bg-night px-4 py-3 text-base text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
          <p className="mt-1 text-xs text-faint">
            Utilisé uniquement pour planifier votre démo. Un seul appel, pas de relance.
          </p>
        </div>

        <div>
          <label htmlFor="acc-activite" className="block text-sm font-medium text-text">
            Votre activité
          </label>
          <select
            id="acc-activite"
            name="activite"
            className="mt-2 w-full appearance-none rounded-lg border border-border bg-night px-4 py-3 text-base text-text focus:border-primary focus:outline-none"
          >
            <option value="">Choisir…</option>
            <option value="mandataire-iad">Mandataire IAD</option>
            <option value="mandataire-safti">Mandataire SAFTI</option>
            <option value="mandataire-autre">Mandataire (autre réseau)</option>
            <option value="artisan-btp">Artisan BTP</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn-bracket btn-bracket-primary mt-2 w-full justify-center"
        >
          Nolan me rappelle sous 24 h →
        </button>

        <p className="text-center text-xs text-faint">
          Démo gratuite · Sans engagement · Basé à Flers, Orne
        </p>
        <p className="mt-1.5 text-center text-xs text-muted">
          30 jours satisfait ou remboursé — un seul mail suffit
        </p>
      </form>
    </section>
  );
}
