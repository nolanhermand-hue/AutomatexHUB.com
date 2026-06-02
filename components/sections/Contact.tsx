"use client";

import { trackFormSubmitted } from "@/lib/analytics";
import { BTP_CONTACT, BTP_METIERS } from "@/lib/btp-copy";
import { CONTACT_COPY, FORM_NAME, SUR_MESURE_BOOKING_CTA } from "@/lib/constants";
import { submitProspectFromFormData } from "@/lib/prospect-webhook";
import { ProspectHoneypotField } from "@/components/ui/ProspectHoneypotField";
import { readUtm } from "@/lib/utm";
import { useEffect, useState } from "react";

export type ContactVariant = "immobilier" | "btp" | "hub";

const LEAD_SECTORS = [
  { value: "mandataire", label: "Mandataire" },
  { value: "artisan-btp", label: "Artisan BTP" },
  { value: "autre-tpe", label: "Autre TPE" },
] as const;

type ContactProps = {
  variant?: ContactVariant;
};

function fieldClass(touched: boolean, value: string, required: boolean) {
  const hasError = touched && required && value.trim() === "";
  return [
    "mt-2 min-h-12 w-full rounded-md border bg-surface px-4 py-3 font-mono text-base text-text outline-none transition",
    "placeholder:text-faint focus:border-primary focus:outline-none",
    hasError ? "border-danger ring-1 ring-danger/30" : "border-border",
  ].join(" ");
}

export function Contact({ variant = "immobilier" }: ContactProps) {
  const isBtp = variant === "btp";
  const [pending, setPending] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<string>("");
  const [touched, setTouched] = useState(false);
  const [fields, setFields] = useState({
    prenom: "",
    email: "",
    telephone: "",
    metier: "",
    message: "",
  });
  /** D7 — Pré-remplissage offre depuis le hash `#contact?offre=pro` */
  const [offerHint, setOfferHint] = useState<string>("");
  const [sujetHint, setSujetHint] = useState<string>("");
  const [showOptionalDetails, setShowOptionalDetails] = useState(false);
  /** I14 — UTM persistés en session, ré-injectés dans le formulaire */
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const parseHash = () => {
      const hash = window.location.hash;
      const offreMatch = hash.match(/offre=([\w-]+)/);
      if (offreMatch) setOfferHint(offreMatch[1]);
      const sujetMatch = hash.match(/sujet=([\w-]+)/);
      if (sujetMatch) setSujetHint(sujetMatch[1]);
    };
    parseHash();
    window.addEventListener("hashchange", parseHash);
    setUtm(readUtm());
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pending) return;
    setTouched(true);
    setSubmitFeedback("");

    if (!fields.prenom || !fields.telephone) {
      e.preventDefault();
      return;
    }

    if (!isBtp && !isResiliation && !fields.metier) {
      return;
    }

    setPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const result = await submitProspectFromFormData({ formData, formName: FORM_NAME, variant });

    if (!result.ok) {
      setSubmitFeedback(result.error);
      setPending(false);
      return;
    }

    if (!result.honeypot) trackFormSubmitted();
    setSubmitFeedback("Merci, vos informations sont bien envoyées.");
    window.location.assign("/merci");
  };

  const isResiliation = sujetHint === "resiliation";

  return (
    <section
      id="contact"
      className="border-t border-border bg-night px-gutter py-12 md:py-16"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">
          {isResiliation
            ? "Demande de résiliation"
            : isBtp
              ? BTP_CONTACT.h2
              : CONTACT_COPY.h2}
        </h2>
        <p className="mt-3 max-w-readable text-sm text-muted md:text-lg">
          {isResiliation
            ? "Indiquez vos coordonnées. Nous confirmons la prise en compte sous 48 h ouvrées. Effet en fin de mois en cours."
            : isBtp
              ? BTP_CONTACT.sub
              : CONTACT_COPY.subtitle}
        </p>

        <form
          name={FORM_NAME}
          method="POST"
          action="/merci"
          data-netlify="true"
          data-netlify-honeypot="company_website"
          className="contact-form relative mx-auto mt-10 max-w-xl space-y-6 rounded-xl border border-border bg-bg-card p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] md:p-8"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <input type="hidden" name="segment" value={variant} />
          <input type="hidden" name="offre" value={offerHint} />
          <input type="hidden" name="sujet" value={sujetHint} />
          <input type="hidden" name="reseau" value="" />
          {Object.entries(utm).map(([k, v]) => (
            <input key={k} type="hidden" name={k} value={v} />
          ))}
          <ProspectHoneypotField />
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {CONTACT_COPY.formTitle}
            </p>
              {offerHint ? (
                <p className="btn-bracket btn-bracket-primary w-full justify-center">
                  <span aria-hidden>✓</span> Offre : {offerHint}
                </p>
              ) : null}
              {sujetHint && !offerHint ? (
                <p className="btn-bracket btn-bracket-primary w-full justify-center">
                  <span aria-hidden>✓</span> Sujet : {sujetHint}
                </p>
              ) : null}
          </div>

          <div>
            <label
              htmlFor="firstName"
              className="text-xs font-semibold uppercase tracking-wide text-muted"
            >
              {CONTACT_COPY.firstNameLabel}
            </label>
            <input
              id="firstName"
              name="prenom"
              required
              autoComplete="given-name"
              aria-required="true"
              aria-describedby="prenom-error"
              value={fields.prenom}
              onChange={(e) => setFields((f) => ({ ...f, prenom: e.target.value }))}
              className={fieldClass(touched, fields.prenom, true)}
            />
            {touched && !fields.prenom && (
              <p id="prenom-error" role="alert" className="mt-1 flex items-center gap-1 text-xs font-semibold text-text">
                <span aria-hidden>⚠</span> Ce champ est requis.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-xs font-semibold uppercase tracking-wide text-muted"
            >
              {CONTACT_COPY.phoneLabel}
            </label>
            <input
              id="phone"
              name="telephone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              pattern={isBtp ? "0[67][0-9]{8}" : undefined}
              title={isBtp ? "Numéro mobile français (06 ou 07)" : undefined}
              aria-required="true"
              aria-describedby={isBtp ? "telephone-hint telephone-error" : "telephone-error"}
              value={fields.telephone}
              onChange={(e) => setFields((f) => ({ ...f, telephone: e.target.value }))}
              className={fieldClass(touched, fields.telephone, true)}
            />
            {touched && !fields.telephone && (
              <p
                id="telephone-error"
                role="alert"
                className="mt-1 flex items-center gap-1 text-xs font-semibold text-text"
              >
                <span aria-hidden>⚠</span> Ce champ est requis.
              </p>
            )}
            <p id="telephone-hint" className="mt-1 text-xs text-faint">
              {isBtp ? "Format : 06 ou 07 suivi de 8 chiffres" : CONTACT_COPY.phoneHint}
            </p>
          </div>

          {!isBtp && !isResiliation ? (
            <fieldset>
              <legend className="text-xs font-semibold uppercase tracking-wide text-muted">
                Métier / secteur d&apos;activité
              </legend>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {LEAD_SECTORS.map((sector) => (
                  <label
                    key={sector.value}
                    className={`flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md border px-4 py-2 text-sm transition ${
                      fields.metier === sector.value
                        ? "border-primary bg-primary/10 text-text"
                        : "border-border bg-surface text-muted hover:border-primary/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="metier"
                      value={sector.value}
                      required
                      checked={fields.metier === sector.value}
                      onChange={(e) => setFields((f) => ({ ...f, metier: e.target.value }))}
                      className="sr-only"
                    />
                    {sector.label}
                  </label>
                ))}
              </div>
              {touched && !fields.metier && (
                <p role="alert" className="mt-2 text-xs font-semibold text-text">
                  Choisissez un secteur pour que Nolan prépare la démo.
                </p>
              )}
            </fieldset>
          ) : null}

          {isBtp ? (
            <div>
              <label
                htmlFor="metier"
                className="text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Votre métier
              </label>
              <select
                id="metier"
                name="metier"
                required
                value={fields.metier}
                onChange={(e) => setFields((f) => ({ ...f, metier: e.target.value }))}
                className={fieldClass(touched, fields.metier, true)}
              >
                <option value="">Choisir…</option>
                {BTP_METIERS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          {isResiliation ? (
            <div>
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wide text-muted"
              >
                {CONTACT_COPY.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                inputMode="email"
                autoComplete="email"
                value={fields.email}
                onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
                className={fieldClass(touched, fields.email, true)}
              />
            </div>
          ) : null}

          {!isResiliation ? (
            <div>
              <button
                type="button"
                onClick={() => setShowOptionalDetails((v) => !v)}
                className="text-sm font-medium text-primary underline underline-offset-4 hover:text-text"
                aria-expanded={showOptionalDetails}
              >
                {showOptionalDetails ? "− Masquer les précisions" : "+ Ajouter une précision (optionnel)"}
              </button>
              {showOptionalDetails ? (
                <div className="mt-4 space-y-4 border-l-2 border-border pl-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wide text-muted"
                    >
                      {CONTACT_COPY.emailLabel}
                      {isBtp ? " (optionnel)" : " (optionnel)"}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="vous@exemple.com"
                      value={fields.email}
                      onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
                      className={fieldClass(false, fields.email, false)}
                    />
                    <p className="mt-1 text-xs text-faint">{CONTACT_COPY.emailHint}</p>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wide text-muted"
                    >
                      {isBtp ? "Votre plus grande perte de temps (optionnel)" : "Message / précisions (optionnel)"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={fields.message}
                      onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
                      className={fieldClass(false, fields.message, false)}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* legacy optional block removed — champs regroupés dans l'accordéon */}

          {!isResiliation ? (
            <p className="flex items-center gap-2 text-xs font-semibold text-accent">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
              {CONTACT_COPY.urgencyLine}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            data-analytics-cta="contact_submit"
            className="btn-bracket btn-bracket-primary w-full min-h-[52px] text-[17px] font-semibold"
            data-cursor="cta"
          >
            {pending ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Envoi en cours…
              </>
            ) : isResiliation ? (
              CONTACT_COPY.resiliationSubmitLabel
            ) : isBtp ? (
              BTP_CONTACT.cta
            ) : offerHint === "sur-mesure" ? (
              SUR_MESURE_BOOKING_CTA
            ) : (
              CONTACT_COPY.submitLabel
            )}
          </button>
          {submitFeedback ? (
            <p role="status" className="text-center text-xs text-muted">
              {submitFeedback}
            </p>
          ) : null}

          <p className="form-trust text-center text-sm text-muted">
            Un seul appel. Pas de relance. Nolan, Flers (61).
          </p>

          <p className="text-center text-xs text-muted">
            {isBtp ? BTP_CONTACT.foot : CONTACT_COPY.formFooter}
          </p>
          {!isResiliation ? (
            <p className="text-center text-xs text-muted">
              Sans engagement — résiliable en un mail
            </p>
          ) : null}

          <ul className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5 text-sm text-muted">
            {CONTACT_COPY.badges.map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5">
                <span className="text-primary" aria-hidden>
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </form>
      </div>
    </section>
  );
}
