import { PrimaryDemoCta } from "@/components/shared/PrimaryDemoCta";
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
    <PrimaryDemoCta
      analyticsId={analyticsId}
      className={cn(
        isPrimary ? "btn-bracket btn-bracket-primary" : "font-mono text-sm text-muted hover:text-text",
        className,
      )}
    />
  );
}
