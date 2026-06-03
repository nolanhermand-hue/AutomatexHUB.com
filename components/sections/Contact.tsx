"use client";

import { trackFormSubmitted } from "@/lib/analytics";
import { BTP_CONTACT } from "@/lib/btp-copy";
import { CONTACT_COPY, FORM_NAME, SUR_MESURE_BOOKING_CTA } from "@/lib/constants";
import { formatFrenchPhoneDisplay } from "@/lib/phone-fr";
import { submitProspectFromFormData } from "@/lib/prospect-webhook";
import { ProspectHoneypotField } from "@/components/ui/ProspectHoneypotField";
import { readUtm } from "@/lib/utm";
import { useEffect, useState } from "react";

export type ContactVariant = "immobilier" | "btp" | "hub";

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

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function Contact({ variant = "immobilier" }: ContactProps) {
  const isBtp = variant === "btp";
  const [pending, setPending] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState("");
  const [touched, setTouched] = useState(false);
  const [fields, setFields] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    precisions: "",
  });
  const [offerHint, setOfferHint] = useState<string>("");
  const [sujetHint, setSujetHint] = useState<string>("");
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const applyParams = () => {
      const search = new URLSearchParams(window.location.search);
      const offreSearch = search.get("offre");
      const sujetSearch = search.get("sujet");
      const hash = window.location.hash;
      const offreMatch = hash.match(/offre=([\w-]+)/);
      const sujetMatch = hash.match(/sujet=([\w-]+)/);
      setOfferHint(offreSearch ?? offreMatch?.[1] ?? "");
      setSujetHint(sujetSearch ?? sujetMatch?.[1] ?? "");
    };
    applyParams();
    window.addEventListener("hashchange", applyParams);
    setUtm(readUtm());
    return () => window.removeEventListener("hashchange", applyParams);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pending) return;
    setTouched(true);
    setSubmitFeedback("");

    const prenomOk = fields.prenom.trim() !== "";
    const nomOk = fields.nom.trim() !== "";
    const phoneOk = fields.telephone.replace(/\D/g, "").length >= 10;
    const emailOk = isValidEmail(fields.email);

    if (!prenomOk || !nomOk || !phoneOk || !emailOk) {
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
            {touched && !fields.prenom.trim() && (
              <p id="prenom-error" role="alert" className="mt-1 flex items-center gap-1 text-xs font-semibold text-text">
                <span aria-hidden>⚠</span> Ce champ est requis.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="text-xs font-semibold uppercase tracking-wide text-muted"
            >
              {CONTACT_COPY.lastNameLabel}
            </label>
            <input
              id="lastName"
              name="nom"
              required
              autoComplete="family-name"
              aria-required="true"
              aria-describedby="nom-error"
              value={fields.nom}
              onChange={(e) => setFields((f) => ({ ...f, nom: e.target.value }))}
              className={fieldClass(touched, fields.nom, true)}
            />
            {touched && !fields.nom.trim() && (
              <p id="nom-error" role="alert" className="mt-1 flex items-center gap-1 text-xs font-semibold text-text">
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
              inputMode="numeric"
              autoComplete="tel"
              placeholder="06 12 34 56 78"
              aria-required="true"
              aria-describedby="telephone-hint telephone-error"
              value={fields.telephone}
              onChange={(e) =>
                setFields((f) => ({ ...f, telephone: formatFrenchPhoneDisplay(e.target.value) }))
              }
              onBlur={(e) =>
                setFields((f) => ({ ...f, telephone: formatFrenchPhoneDisplay(e.target.value) }))
              }
              className={fieldClass(touched, fields.telephone, true)}
            />
            {touched && fields.telephone.replace(/\D/g, "").length < 10 && (
              <p
                id="telephone-error"
                role="alert"
                className="mt-1 flex items-center gap-1 text-xs font-semibold text-text"
              >
                <span aria-hidden>⚠</span> Indiquez un numéro à 10 chiffres.
              </p>
            )}
            <p id="telephone-hint" className="mt-1 text-xs text-faint">
              {CONTACT_COPY.phoneHint}
            </p>
          </div>

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
              placeholder="vous@exemple.com"
              aria-required="true"
              aria-describedby="email-error"
              value={fields.email}
              onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
              className={fieldClass(touched, fields.email, true)}
            />
            {touched && !isValidEmail(fields.email) && (
              <p id="email-error" role="alert" className="mt-1 flex items-center gap-1 text-xs font-semibold text-text">
                <span aria-hidden>⚠</span> Indiquez une adresse email valide.
              </p>
            )}
            <p className="mt-1 text-xs text-faint">{CONTACT_COPY.emailHint}</p>
          </div>

          <div>
            <label
              htmlFor="precisions"
              className="text-xs font-semibold uppercase tracking-wide text-muted"
            >
              Précisions (optionnel)
            </label>
            <textarea
              id="precisions"
              name="precisions"
              rows={3}
              placeholder="Ex. créneau préféré, type d’activité, question rapide…"
              value={fields.precisions}
              onChange={(e) => setFields((f) => ({ ...f, precisions: e.target.value }))}
              className={fieldClass(false, fields.precisions, false)}
            />
          </div>

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

          {!isResiliation ? (
            <p className="text-center text-xs text-muted border-t border-border pt-5">
              {isBtp ? BTP_CONTACT.foot : CONTACT_COPY.formReassurance}
            </p>
          ) : (
            <p className="text-center text-xs text-muted">
              {isBtp ? BTP_CONTACT.foot : CONTACT_COPY.formFooter}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
