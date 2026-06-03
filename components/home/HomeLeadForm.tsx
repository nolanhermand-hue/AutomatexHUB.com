"use client";

import { trackFormSubmitted } from "@/lib/analytics";
import { FORM_NAME } from "@/lib/constants";
import { HOME_LEAD_FORM } from "@/lib/home-copy";
import { submitProspectFromFormData } from "@/lib/prospect-webhook";
import { ProspectHoneypotField } from "@/components/ui/ProspectHoneypotField";
import { readUtm } from "@/lib/utm";
import { useEffect, useState } from "react";

function fieldClass(touched: boolean, value: string) {
  const hasError = touched && value.trim() === "";
  return [
    "mt-2 min-h-12 w-full rounded-md border bg-surface px-4 py-3 text-base text-text outline-none transition",
    "placeholder:text-faint focus:border-primary focus:outline-none",
    hasError ? "border-danger ring-1 ring-danger/30" : "border-border",
  ].join(" ");
}

export function HomeLeadForm() {
  const [pending, setPending] = useState(false);
  const [touched, setTouched] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [fields, setFields] = useState({ prenom: "", telephone: "", metier: "" });
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    setUtm(readUtm());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pending) return;
    setTouched(true);
    setFeedback("");

    if (!fields.prenom.trim() || !fields.telephone.trim() || !fields.metier.trim()) {
      return;
    }

    setPending(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const result = await submitProspectFromFormData({
      formData,
      formName: FORM_NAME,
      variant: "home",
    });

    if (!result.ok) {
      setFeedback(result.error);
      setPending(false);
      return;
    }

    if (!result.honeypot) trackFormSubmitted();
    window.location.assign("/merci");
  };

  return (
    <form
      name={FORM_NAME}
      method="POST"
      action="/merci"
      data-netlify="true"
      data-netlify-honeypot="company_website"
      className="mx-auto mt-8 max-w-xl space-y-5 rounded-xl border border-border bg-surface p-6 md:p-8"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="segment" value="home" />
      {Object.entries(utm).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      <ProspectHoneypotField />

      <div>
        <label htmlFor="home-prenom" className="text-xs font-semibold uppercase tracking-wide text-muted">
          {HOME_LEAD_FORM.prenom}
        </label>
        <input
          id="home-prenom"
          name="prenom"
          required
          autoComplete="given-name"
          value={fields.prenom}
          onChange={(e) => setFields((f) => ({ ...f, prenom: e.target.value }))}
          className={fieldClass(touched, fields.prenom)}
        />
      </div>

      <div>
        <label htmlFor="home-telephone" className="text-xs font-semibold uppercase tracking-wide text-muted">
          {HOME_LEAD_FORM.telephone}
        </label>
        <input
          id="home-telephone"
          name="telephone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          value={fields.telephone}
          onChange={(e) => setFields((f) => ({ ...f, telephone: e.target.value }))}
          className={fieldClass(touched, fields.telephone)}
        />
        <p className="mt-1 text-xs text-faint">{HOME_LEAD_FORM.phoneHint}</p>
      </div>

      <div>
        <label htmlFor="home-metier" className="text-xs font-semibold uppercase tracking-wide text-muted">
          {HOME_LEAD_FORM.metier}
        </label>
        <input
          id="home-metier"
          name="metier"
          required
          value={fields.metier}
          placeholder={HOME_LEAD_FORM.metierPlaceholder}
          onChange={(e) => setFields((f) => ({ ...f, metier: e.target.value }))}
          className={fieldClass(touched, fields.metier)}
        />
      </div>

      {feedback ? (
        <p role="alert" className="text-sm font-medium text-danger">
          {feedback}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="btn-bracket btn-bracket-primary w-full justify-center disabled:opacity-60"
        data-analytics-cta="home_contact_submit"
      >
        {pending ? "Envoi…" : HOME_LEAD_FORM.submit}
      </button>
    </form>
  );
}
