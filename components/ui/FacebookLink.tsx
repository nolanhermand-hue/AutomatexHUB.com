import { FACEBOOK_PROFILE_ARIA, NAP } from "@/lib/constants";
import { cn } from "@/lib/cn";

type FacebookLinkProps = {
  className?: string;
  size?: number;
};

const FACEBOOK_ICON = "/assets/integrations/facebook.svg";

/** Logo cliquable → page Facebook AutomateX (nouvel onglet). */
export function FacebookLink({ className, size = 24 }: FacebookLinkProps) {
  return (
    <a
      href={NAP.facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={FACEBOOK_PROFILE_ARIA}
      title="Facebook — AutomateX"
      className={cn(
        "relative z-10 inline-flex shrink-0 cursor-pointer items-center justify-center",
        "transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={FACEBOOK_ICON}
        alt=""
        width={size}
        height={size}
        decoding="async"
        className="block"
      />
    </a>
  );
}
