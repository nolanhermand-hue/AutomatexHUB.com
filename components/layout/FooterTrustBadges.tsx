import { TRUST_BADGES_FOOTER } from "@/lib/constants";

export function FooterTrustBadges() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {TRUST_BADGES_FOOTER.map((badge) => (
        <li key={badge.title} className="rounded-lg border border-[rgb(255_255_255/0.08)] p-4">
          <p className="font-semibold text-[rgb(250_249_246/0.55)]">{badge.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-[#b5b3ad]">{badge.subtitle}</p>
        </li>
      ))}
    </ul>
  );
}
