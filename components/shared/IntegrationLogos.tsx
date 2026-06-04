import type { IntegrationLogo } from "@/lib/automation-flow-logos";
import { cn } from "@/lib/cn";

type IntegrationLogosProps = {
  logos: IntegrationLogo[];
  size?: number;
  className?: string;
  /** Accessible name when multiple tools (defaults to joined alts). */
  label?: string;
};

export function IntegrationLogos({ logos, size = 28, className, label }: IntegrationLogosProps) {
  if (logos.length === 0) return null;

  const aria =
    label ?? (logos.length === 1 ? logos[0].alt : `Outils : ${logos.map((l) => l.alt).join(", ")}`);

  return (
    <ul
      className={cn("flex flex-wrap items-center gap-2", className)}
      aria-label={aria}
    >
      {logos.map((logo) => (
        <li key={`${logo.src}-${logo.alt}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={logo.alt}
            width={size}
            height={size}
            loading="lazy"
            decoding="async"
            className="h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8"
          />
        </li>
      ))}
    </ul>
  );
}
