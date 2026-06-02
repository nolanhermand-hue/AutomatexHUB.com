"use client";

import { trackFormSubmitted } from "@/lib/analytics";
import { submitProspectFromFormData } from "@/lib/prospect-webhook";
import { ProspectHoneypotField } from "@/components/ui/ProspectHoneypotField";
import { useState } from "react";

/** C07 — formulaire direct sur /accompagnement. */
export function AccompagnementContactForm() {
  const [pending, setPending] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    setSubmitFeedback("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const result = await submitProspectFromFormData({
      formData,
      formName: "contact-accompagnement",
      variant: "accompagnement",
    });

    if (!result.ok) {
      setSubmitFeedback(result.error);
      setPending(false);
      return;
    }

    if (!result.honeypot) trackFormSubmitted();
    setSubmitFeedback("Merci, vos informations sont bien envoyées.");
    window.location.assign("/merci");
  };

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
        data-netlify-honeypot="company_website"
        className="relative mx-auto mt-8 max-w-xl space-y-4"
        action="/merci"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact-accompagnement" />
        <ProspectHoneypotField />

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
          disabled={pending}
          className="btn-bracket btn-bracket-primary mt-2 w-full justify-center"
        >
          {pending ? "Envoi en cours…" : "Nolan me rappelle sous 24 h →"}
        </button>
        {submitFeedback ? (
          <p role="status" className="text-center text-xs text-muted">
            {submitFeedback}
          </p>
        ) : null}

        <p className="text-center text-xs text-faint">
          Démo gratuite · Sans engagement · Basé à Flers, Orne
        </p>
        <p className="mt-1.5 text-center text-xs text-muted">Résiliable en un mail, sans engagement</p>
      </form>
    </section>
  );
}
