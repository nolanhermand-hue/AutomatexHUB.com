import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { BOOKING_CTA_LABEL } from "@/lib/constants";
import { rendezVousHref } from "@/lib/hub-nav";
import { cn } from "@/lib/cn";

type SectionCtaProps = {
  analyticsId: string;
  className?: string;
  variant?: "primary" | "link";
};

export function SectionCta({
  analyticsId,
  className,
  variant = "primary",
}: SectionCtaProps) {
  const isPrimary = variant === "primary";
  return (
    <AnalyticsCta
      href={rendezVousHref()}
      analyticsId={analyticsId}
      className={cn(
        isPrimary ? "btn-bracket btn-bracket-primary" : "font-mono text-sm text-muted hover:text-text",
        className,
      )}
    >
      {BOOKING_CTA_LABEL}
    </AnalyticsCta>
  );
}
