"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-gutter text-center">
      <h2 className="font-heading text-3xl text-text">
        Une erreur est survenue.
      </h2>
      <p className="max-w-sm text-sm text-muted">
        Quelque chose s&apos;est mal passé. Rechargez la page ou revenez plus
        tard.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-cta px-6 py-3 text-base font-semibold text-white transition hover:bg-primary"
      >
        Réessayer
      </button>
    </div>
  );
}
