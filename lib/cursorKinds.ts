export type CursorKind =
  | "default"
  | "text"
  | "cta"
  | "link"
  | "nav"
  | "card"
  | "founder"
  | "slider";

const TEXT_SELECTORS =
  "p, h1, h2, h3, h4, h5, h6, li, span, blockquote, label, figcaption";

/** Priorité : slider → fondateur → CTA → nav → lien explicite → liens/boutons → carte → texte. */
export function resolveCursorKind(target: EventTarget | null): CursorKind {
  if (!(target instanceof Element)) return "default";

  if (target.closest('[data-cursor="slider"]')) return "slider";
  if (target.closest('[data-cursor="founder"]')) return "founder";
  if (target.closest('[data-cursor="cta"]')) return "cta";
  if (target.closest('[data-cursor="nav"]')) return "nav";
  if (target.closest('[data-cursor="link"]')) return "link";

  const interactive = target.closest(
    'a[href], button:not([data-cursor="nav"]), [role="button"]',
  );
  if (interactive) {
    if (interactive.matches("a[href]")) return "link";
    return "default";
  }

  if (target.closest('[data-cursor="card"]')) return "card";

  if (target.closest(TEXT_SELECTORS)) return "text";

  return "default";
}
