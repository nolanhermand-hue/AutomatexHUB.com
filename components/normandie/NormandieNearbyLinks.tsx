import Link from "next/link";
import { NORMANDIE_PILIER_PATH } from "@/lib/normandie-shared";
import { getNormandieVilleBySlug } from "@/lib/villes-normandie";

type NormandieNearbyLinksProps = {
  currentSlug: string;
  neighborSlugs: ReadonlyArray<string>;
};

export function NormandieNearbyLinks({ currentSlug, neighborSlugs }: NormandieNearbyLinksProps) {
  const neighbors = neighborSlugs
    .filter((s) => s !== currentSlug)
    .map((s) => getNormandieVilleBySlug(s))
    .filter(Boolean);

  if (neighbors.length === 0) return null;

  return (
    <nav
      className="border-t border-border px-gutter py-10"
      aria-label="Autres villes en Normandie"
    >
      <div className="mx-auto max-w-content">
        <p className="font-mono text-[10px] uppercase tracking-widest text-faint">À proximité</p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link href={NORMANDIE_PILIER_PATH} className="text-sm font-semibold text-primary hover:underline">
              Toute la Normandie
            </Link>
          </li>
          {neighbors.map((v) =>
            v ? (
              <li key={v.slug}>
                <Link href={v.path} className="text-sm text-muted hover:text-text hover:underline">
                  {v.name}
                </Link>
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </nav>
  );
}
