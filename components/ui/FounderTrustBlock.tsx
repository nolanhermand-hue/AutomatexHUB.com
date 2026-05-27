import { FounderAvatar } from "@/components/ui/FounderAvatar";
import { NAP } from "@/lib/constants";
import { RESPONSE_DELAYS } from "@/lib/trust-copy";
type FounderTrustBlockProps = {
  compact?: boolean;
  className?: string;
};

/** Visage + téléphone + délais unifiés — crédibilité locale. */
export function FounderTrustBlock({ compact = false, className = "" }: FounderTrustBlockProps) {
  const size = compact ? 56 : 72;
  return (
    <div
      className={`flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left ${className}`}
    >
      <FounderAvatar size={size} priority={compact} />
      <div className="min-w-0">
        <p className="font-semibold text-text">
          {NAP.founder} · {NAP.localityLabel}
        </p>
        <p className="mt-1 text-sm text-muted">{RESPONSE_DELAYS.line}</p>
        <a
          href={`tel:${NAP.phoneE164}`}
          className="mt-2 inline-flex min-h-[44px] items-center justify-center text-base font-semibold text-primary underline underline-offset-4"
        >
          {NAP.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
