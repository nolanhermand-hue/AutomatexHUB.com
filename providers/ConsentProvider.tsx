"use client";

import {
  CONSENT_STORAGE_KEY,
  readStoredConsent,
  writeStoredConsent,
  type ConsentDecision,
} from "@/lib/consent";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ConsentContextValue = {
  /** Choix en cours (null = pas encore décidé ou expiré). */
  decision: ConsentDecision | null;
  /** true uniquement si l'utilisateur a accepté la mesure Google Analytics. */
  analyticsAllowed: boolean;
  /** Bandeau visible. */
  bannerOpen: boolean;
  /** Lecture du stockage terminée (évite tout flash avant hydratation). */
  ready: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  /** Rouvre le bandeau (lien « Gérer les cookies »). */
  openPreferences: () => void;
  /** Ferme sans choisir (= refus par défaut, aucun dépôt). */
  closeBanner: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent doit être utilisé dans <ConsentProvider>.");
  }
  return ctx;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [decision, setDecision] = useState<ConsentDecision | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    setDecision(stored);
    // Aucun choix valide en mémoire → on demande le consentement.
    setBannerOpen(stored === null);
    setReady(true);
  }, []);

  // Synchronise les onglets ouverts (un choix fait ailleurs s'applique ici).
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== CONSENT_STORAGE_KEY) return;
      const stored = readStoredConsent();
      setDecision(stored);
      if (stored !== null) setBannerOpen(false);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const acceptAll = useCallback(() => {
    setDecision(writeStoredConsent(true));
    setBannerOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    setDecision(writeStoredConsent(false));
    setBannerOpen(false);
  }, []);

  const openPreferences = useCallback(() => setBannerOpen(true), []);
  const closeBanner = useCallback(() => setBannerOpen(false), []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      decision,
      analyticsAllowed: decision?.analytics === true,
      bannerOpen,
      ready,
      acceptAll,
      rejectAll,
      openPreferences,
      closeBanner,
    }),
    [decision, bannerOpen, ready, acceptAll, rejectAll, openPreferences, closeBanner],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}
