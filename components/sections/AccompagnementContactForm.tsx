"use client";

import { trackFormSubmitted } from "@/lib/analytics";
import { formatFrenchPhoneDisplay } from "@/lib/phone-fr";
import { submitProspectFromFormData } from "@/lib/prospect-webhook";
import { ProspectHoneypotField } from "@/components/ui/ProspectHoneypotField";
import { useState } from "react";

/** C07 — formulaire direct sur /accompagnement. */
export function AccompagnementContactForm() {
  const [pending, setPending] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState("");
  const [telephone, setTelephone] = useState("");

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
            Prénom *
          </label>
          <input
            id="acc-prenom"
            name="prenom"
            type="text"
            required
            autoComplete="given-name"
            className="mt-2 w-full rounded-lg border border-border bg-night px-4 py-3 text-base text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="acc-nom" className="block text-sm font-medium text-text">
            Nom *
          </label>
          <input
            id="acc-nom"
            name="nom"
            type="text"
            required
            autoComplete="family-name"
            className="mt-2 w-full rounded-lg border border-border bg-night px-4 py-3 text-base text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="acc-telephone" className="block text-sm font-medium text-text">
            Téléphone *
          </label>
          <input
            id="acc-telephone"
            name="telephone"
            type="tel"
            required
            inputMode="numeric"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            value={telephone}
            onChange={(e) => setTelephone(formatFrenchPhoneDisplay(e.target.value))}
            onBlur={(e) => setTelephone(formatFrenchPhoneDisplay(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-night px-4 py-3 text-base text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
          <p className="mt-1 text-xs text-faint">
            10 chiffres — un seul appel pour planifier la démo, pas de relance.
          </p>
        </div>

        <div>
          <label htmlFor="acc-email" className="block text-sm font-medium text-text">
            Email *
          </label>
          <input
            id="acc-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-border bg-night px-4 py-3 text-base text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="acc-precisions" className="block text-sm font-medium text-text">
            Précisions (optionnel)
          </label>
          <textarea
            id="acc-precisions"
            name="precisions"
            rows={3}
            className="mt-2 w-full rounded-lg border border-border bg-night px-4 py-3 text-base text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
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
