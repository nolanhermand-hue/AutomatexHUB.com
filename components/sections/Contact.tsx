"use client";

import { trackFormSubmitted } from "@/lib/analytics";
import { BTP_CONTACT, BTP_METIERS } from "@/lib/btp-copy";
import { CONTACT_COPY, FORM_NAME, SUR_MESURE_BOOKING_CTA } from "@/lib/constants";
import { readUtm } from "@/lib/utm";
import { useEffect, useState } from "react";

export type ContactVariant = "immobilier" | "btp" | "hub";

type ContactProps = {
  variant?: ContactVariant;
};

function fieldClass(touched: boolean, value: string, required: boolean) {
  const hasError = touched && required && value.trim() === "";
  return [
    "mt-2 w-full rounded-lg border bg-night px-4 py-3 text-base text-text outline-none ring-0 transition",
    "placeholder:text-faint/60 focus:border-primary focus:ring-1 focus:ring-primary/20",
    hasError
      ? "border-text/50 ring-1 ring-text/20 focus:border-text/70"
      : "border-border focus:border-primary/50",
  ].join(" ");
}

export function Contact({ variant = "immobilier" }: ContactProps) {
  const isBtp = variant === "btp";
  const [pending, setPending] = useState(false);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setTouched(true);

    if (!fields.prenom || !fields.telephone) {
      e.preventDefault();
      return;
    }

    setPending(true);
    trackFormSubmitted();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    void fetch("/.netlify/functions/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});

    setTimeout(() => setPending(false), 10000);
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
          data-netlify-honeypot="hp-field"
          className="relative mx-auto mt-10 max-w-xl space-y-6 rounded-xl border border-border bg-bg-card p-6 md:p-8"
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
          <p className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label>
              <input name="hp-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {CONTACT_COPY.formTitle}
            </p>
              {offerHint ? (
                <p className="inline-flex items-center gap-1.5 rounded-full bg-cta/15 px-3 py-1 text-xs font-semibold text-cta">
                  <span aria-hidden>✓</span> Offre : {offerHint}
                </p>
              ) : null}
              {sujetHint && !offerHint ? (
                <p className="inline-flex items-center gap-1.5 rounded-full bg-cta/15 px-3 py-1 text-xs font-semibold text-cta">
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

          <div>
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wide text-muted"
            >
              {CONTACT_COPY.emailLabel}
              {isBtp ? " (optionnel)" : null}
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

          {isBtp ? (
            <div>
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Votre plus grande perte de temps (optionnel)
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
          ) : null}

          {/* removed duplicate phone block */}

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
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md bg-cta px-4 py-[18px] text-[15px] font-semibold text-cta-fg shadow-[0_2px_12px_rgb(26_26_24/0.12)] transition-all duration-200 hover:brightness-110 active:brightness-95 active:scale-[0.98] disabled:opacity-70"
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

          <p className="text-center text-xs text-muted">
            {isBtp ? BTP_CONTACT.foot : CONTACT_COPY.formFooter}
          </p>

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
