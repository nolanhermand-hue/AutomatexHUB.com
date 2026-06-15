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
        Oups, ça a coincé.
      </h2>
      <p className="max-w-sm text-sm text-muted">
        Recharge la page. Si ça insiste, écris à Nolan :{" "}
        <a href="mailto:nolan.hermand@automatex-hub.com" className="text-primary underline">
          nolan.hermand@automatex-hub.com
        </a>
        .
      </p>
      <button
        type="button"
        onClick={reset}
        className="btn-bracket btn-bracket-primary"
      >
        Réessayer
      </button>
    </div>
  );
}
