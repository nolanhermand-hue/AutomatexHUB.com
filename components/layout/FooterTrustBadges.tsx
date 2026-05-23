import { TRUST_BADGES_FOOTER } from "@/lib/constants";

export function FooterTrustBadges() {
  return (
    <ul className="grid max-w-md grid-cols-2 gap-2">
      {TRUST_BADGES_FOOTER.map((badge) => (
        <li key={badge.title} className="card py-3">
          <p className="font-mono text-[10px] uppercase tracking-wide text-text">{badge.title}</p>
          <p className="mt-0.5 font-mono text-[10px] text-faint">{badge.subtitle}</p>
        </li>
      ))}
    </ul>
  );
}
