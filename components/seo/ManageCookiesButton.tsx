"use client";

/** Lien « Gérer les cookies » — rouvre le bandeau de consentement (footer). */
import { useConsent } from "@/providers/ConsentProvider";

export function ManageCookiesButton({ className }: { className?: string }) {
  const { openPreferences } = useConsent();
  return (
    <button type="button" onClick={openPreferences} className={className}>
      Gérer les cookies
    </button>
  );
}
