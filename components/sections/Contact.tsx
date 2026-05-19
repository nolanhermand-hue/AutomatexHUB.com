"use client";

import { trackFormSubmitted } from "@/lib/analytics";
import { Badge } from "@/components/ui/Badge";
import { CONTACT_COPY, FORM_NAME } from "@/lib/constants";
import { readUtm } from "@/lib/utm";
import Image from "next/image";
import { useEffect, useState } from "react";

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

function FounderAvatar() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-accent-light text-3xl font-bold text-primary ring-2 ring-border md:mx-0 md:h-44 md:w-44"
        aria-label="Portrait de Nolan Hermand, fondateur d'Automatex"
      >
        NH
      </div>
    );
  }

  return (
    <div className="mx-auto overflow-hidden rounded-full ring-2 ring-primary/50 md:mx-0 md:inline-flex">
      <Image
        src="/assets/images/nolan-placeholder.png"
        alt="Portrait de Nolan Hermand, fondateur d'Automatex à Flers dans l'Orne"
        width={176}
        height={176}
        className="h-36 w-36 object-cover md:h-44 md:w-44"
        priority={false}
        onError={() => setImgError(true)}
      />
    </div>
  );
}

export function Contact() {
  const [pending, setPending] = useState(false);
  const [touched, setTouched] = useState(false);
  const [fields, setFields] = useState({
    prenom: "",
    email: "",
    telephone: "",
  });
  /** D7 — Pré-remplissage offre depuis le hash `#contact?offre=pro` */
  const [offerHint, setOfferHint] = useState<string>("");
  /** I14 — UTM persistés en session, ré-injectés dans le formulaire */
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const parseHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/offre=([\w-]+)/);
      if (match) setOfferHint(match[1]);
    };
    parseHash();
    window.addEventListener("hashchange", parseHash);
    setUtm(readUtm());
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setTouched(true);

    // Check required fields before letting Netlify handle it
    if (!fields.prenom || !fields.email || !fields.telephone) {
      e.preventDefault();
      return;
    }

    setPending(true);
    trackFormSubmitted();

    // H25 — appel parallèle à la Netlify Function pour notifier N8N
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    void fetch("/.netlify/functions/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {
      // Silently ignore — Netlify Forms reste la source de vérité
    });

    // P1 — reset si la redirection /merci échoue après 10s
    setTimeout(() => setPending(false), 10000);
  };

  return (
    <section
      id="contact"
      className="border-t border-border bg-night px-gutter py-12 md:py-16"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">
          {CONTACT_COPY.h2}
        </h2>
        <p className="mt-3 max-w-readable text-sm text-muted md:text-lg">
          {CONTACT_COPY.subtitle}
        </p>

        {/* P1-contact-order : fondateur en order-first sur mobile → visible avant le formulaire */}
        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <form
            name={FORM_NAME}
            method="POST"
            action="/merci"
            data-netlify="true"
            data-netlify-honeypot="hp-field"
            className="order-last space-y-6 rounded-2xl border border-border bg-bg-card p-6 shadow-[0_0_0_0.5px_rgb(255_255_255/0.05),0_12px_40px_rgb(0_0_0/0.4)] backdrop-blur-sm md:order-first md:p-8"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            {/* D7 — Offre choisie (pré-remplissage depuis le pricing) */}
            <input type="hidden" name="offre" value={offerHint} />
            <input type="hidden" name="reseau" value="" />
            {/* I14 — UTM persistés en session : attribution source */}
            {Object.entries(utm).map(([k, v]) => (
              <input key={k} type="hidden" name={k} value={v} />
            ))}
            <p className="hidden">
              <label>
                Ne pas remplir si vous êtes humain :{" "}
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
                value={fields.prenom}
                onChange={(e) => setFields((f) => ({ ...f, prenom: e.target.value }))}
                className={fieldClass(touched, fields.prenom, true)}
              />
              {touched && !fields.prenom && (
                <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-text">
                  <span aria-hidden>⚠</span> Ce champ est requis.
                </p>
              )}
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
                value={fields.email}
                onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
                className={fieldClass(touched, fields.email, true)}
              />
              {touched && !fields.email && (
                <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-text">
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
                value={fields.telephone}
                onChange={(e) => setFields((f) => ({ ...f, telephone: e.target.value }))}
                className={fieldClass(touched, fields.telephone, true)}
              />
              {touched && !fields.telephone && (
                <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-text">
                  <span aria-hidden>⚠</span> Ce champ est requis.
                </p>
              )}
            </div>

            <p className="flex items-center gap-2 text-xs font-semibold text-accent">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
              {CONTACT_COPY.urgencyLine}
            </p>

            <button
              type="submit"
              disabled={pending}
              data-analytics-cta="contact_submit"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-cta px-4 py-[18px] text-[15px] font-semibold text-[var(--color-cta-fg,#fff)] shadow-[0_4px_24px_rgb(0_0_0/0.35)] transition-all duration-200 hover:brightness-110 active:brightness-95 active:scale-[0.98] disabled:opacity-70"
              data-cursor="cta"
            >
              {pending ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
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
              ) : (
                CONTACT_COPY.submitLabel
              )}
            </button>
          </form>

          {/* P1-contact-order : order-first sur mobile = preuve sociale visible AVANT le formulaire */}
          <div
            className="order-first space-y-5 rounded-2xl border border-border bg-bg-card p-6 shadow-[0_0_0_0.5px_rgb(255_255_255/0.04),0_8px_24px_rgb(0_0_0/0.25)] backdrop-blur-sm md:order-last md:p-8"
            data-cursor="founder"
          >
            <FounderAvatar />
            <p className="text-base font-semibold leading-relaxed text-text">
              {CONTACT_COPY.identityLine}
            </p>
            <p className="text-sm text-muted">{CONTACT_COPY.identitySub}</p>
            <div className="flex flex-wrap gap-2">
              {CONTACT_COPY.badges.map((b) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
