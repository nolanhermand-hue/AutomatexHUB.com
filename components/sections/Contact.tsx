"use client";

import { trackFormSubmitted } from "@/lib/analytics";
import { BTP_CONTACT } from "@/lib/btp-copy";
import {
  CONTACT_COPY,
  FORM_NAME,
  HUB_CONTACT_REASSURANCE,
  NAP,
  ORNE_ZONE_OPTIONS,
  PROSPECT_SECTEUR_OPTIONS,
  SUR_MESURE_BOOKING_CTA,
} from "@/lib/constants";
import { formatFrenchPhoneDisplay } from "@/lib/phone-fr";
import { submitProspectFromFormData } from "@/lib/prospect-webhook";
import { ProspectHoneypotField } from "@/components/ui/ProspectHoneypotField";
import { FounderAvatar } from "@/components/ui/FounderAvatar";
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
  const isHub = variant === "hub";
  const [pending, setPending] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState("");
  const [touched, setTouched] = useState(false);
  const [fields, setFields] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    precisions: "",
    secteur: "",
    zoneOrne: "",
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

    const nomOk = fields.nom.trim() !== "";
    const prenomOk = isHub || fields.prenom.trim() !== "";
    const phoneOk = fields.telephone.replace(/\D/g, "").length >= 10;
    const emailTrim = fields.email.trim();
    const emailOk = isHub
      ? emailTrim === "" || isValidEmail(emailTrim)
      : isValidEmail(fields.email);
    const secteurOk = !isHub || fields.secteur !== "";

    if (!prenomOk || !nomOk || !phoneOk || !emailOk || !secteurOk) {
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

  const formClassName = [
    "contact-form relative space-y-6 rounded-xl border border-border bg-bg-card p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] md:p-8",
    isHub ? "w-full max-w-none" : "mx-auto mt-10 max-w-xl",
  ].join(" ");

  const hubFounderAside = isHub ? (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <FounderAvatar size={88} priority className="ring-2 ring-primary/25 ring-offset-2 ring-offset-night" />
      <p className="mt-4 font-semibold text-text">{NAP.founder}</p>
      <p className="mt-1 text-sm text-muted">{CONTACT_COPY.hubFounderLine}</p>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{CONTACT_COPY.hubFounderSub}</p>
      <ul className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start" aria-label="Réassurance">
        {HUB_CONTACT_REASSURANCE.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border bg-surface px-2.5 py-1 text-[11px] font-medium leading-snug text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  ) : null;

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

        {isHub ? (
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start md:gap-10">
            {hubFounderAside}
            <div className="min-w-0">
              <ContactForm
                segment={variant}
                isBtp={isBtp}
                isHub={isHub}
                isResiliation={isResiliation}
                formClassName={formClassName}
                pending={pending}
                touched={touched}
                fields={fields}
                setFields={setFields}
                offerHint={offerHint}
                sujetHint={sujetHint}
                utm={utm}
                submitFeedback={submitFeedback}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        ) : (
          <ContactForm
            segment={variant}
            isBtp={isBtp}
            isHub={isHub}
            isResiliation={isResiliation}
            formClassName={formClassName}
            pending={pending}
            touched={touched}
            fields={fields}
            setFields={setFields}
            offerHint={offerHint}
            sujetHint={sujetHint}
            utm={utm}
            submitFeedback={submitFeedback}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </section>
  );
}

type ContactFields = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  precisions: string;
  secteur: string;
  zoneOrne: string;
};

type ContactFormProps = {
  segment: ContactVariant;
  isBtp: boolean;
  isHub: boolean;
  isResiliation: boolean;
  formClassName: string;
  pending: boolean;
  touched: boolean;
  fields: ContactFields;
  setFields: React.Dispatch<React.SetStateAction<ContactFields>>;
  offerHint: string;
  sujetHint: string;
  utm: Record<string, string>;
  submitFeedback: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

function ContactForm({
  segment,
  isBtp,
  isHub,
  isResiliation,
  formClassName,
  pending,
  touched,
  fields,
  setFields,
  offerHint,
  sujetHint,
  utm,
  submitFeedback,
  handleSubmit,
}: ContactFormProps) {
  return (
        <form
          name={FORM_NAME}
          method="POST"
          action="/merci"
          data-netlify="true"
          data-netlify-honeypot="company_website"
          className={formClassName}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <input type="hidden" name="segment" value={segment} />
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

          {isHub ? (
            <input type="hidden" name="prenom" value="" />
          ) : (
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
          )}

          <div>
            <label
              htmlFor={isHub ? "fullName" : "lastName"}
              className="text-xs font-semibold uppercase tracking-wide text-muted"
            >
              {isHub ? CONTACT_COPY.hubFullNameLabel : CONTACT_COPY.lastNameLabel}
            </label>
            <input
              id={isHub ? "fullName" : "lastName"}
              name="nom"
              required
              autoComplete={isHub ? "name" : "family-name"}
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

          {isHub ? (
            <>
              <div>
                <label
                  htmlFor="secteur"
                  className="text-xs font-semibold uppercase tracking-wide text-muted"
                >
                  {CONTACT_COPY.hubMetierLabel}
                </label>
                <select
                  id="secteur"
                  name="secteur"
                  required
                  aria-required="true"
                  aria-describedby="secteur-error"
                  value={fields.secteur}
                  onChange={(e) => setFields((f) => ({ ...f, secteur: e.target.value }))}
                  className={fieldClass(touched, fields.secteur, true)}
                >
                  <option value="">{CONTACT_COPY.hubMetierPlaceholder}</option>
                  {PROSPECT_SECTEUR_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {touched && !fields.secteur && (
                  <p id="secteur-error" role="alert" className="mt-1 flex items-center gap-1 text-xs font-semibold text-text">
                    <span aria-hidden>⚠</span> Choisissez votre métier.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="zone_orne"
                  className="text-xs font-semibold uppercase tracking-wide text-muted"
                >
                  {CONTACT_COPY.zoneOrneLabel}
                </label>
                <select
                  id="zone_orne"
                  name="zone_orne"
                  aria-describedby="zone-orne-hint"
                  value={fields.zoneOrne}
                  onChange={(e) => setFields((f) => ({ ...f, zoneOrne: e.target.value }))}
                  className={fieldClass(false, fields.zoneOrne, false)}
                >
                  <option value="">{CONTACT_COPY.zoneOrnePlaceholder}</option>
                  {ORNE_ZONE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <p id="zone-orne-hint" className="mt-1 text-xs text-faint">
                  Utile si vous êtes dans l&apos;Orne — pas obligatoire.
                </p>
              </div>
            </>
          ) : null}

          <div>
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wide text-muted"
            >
              {isHub ? CONTACT_COPY.hubEmailLabel : CONTACT_COPY.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required={!isHub}
              inputMode="email"
              autoComplete="email"
              placeholder="vous@exemple.com"
              aria-required={isHub ? undefined : true}
              aria-describedby="email-error"
              value={fields.email}
              onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
              className={fieldClass(touched, fields.email, !isHub)}
            />
            {touched &&
              (isHub
                ? fields.email.trim() !== "" && !isValidEmail(fields.email)
                : !isValidEmail(fields.email)) && (
              <p id="email-error" role="alert" className="mt-1 flex items-center gap-1 text-xs font-semibold text-text">
                <span aria-hidden>⚠</span> Indiquez une adresse email valide.
              </p>
            )}
            <p className="mt-1 text-xs text-faint">
              {isHub ? CONTACT_COPY.hubEmailHint : CONTACT_COPY.emailHint}
            </p>
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
              {isHub
                ? CONTACT_COPY.formFooter
                : isBtp
                  ? BTP_CONTACT.foot
                  : CONTACT_COPY.formReassurance}
            </p>
          ) : (
            <p className="text-center text-xs text-muted">
              {isBtp ? BTP_CONTACT.foot : CONTACT_COPY.formFooter}
            </p>
          )}
        </form>
  );
}
