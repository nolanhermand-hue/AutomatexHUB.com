import { LINKEDIN_PROFILE_ARIA, NAP } from "@/lib/constants";
import { cn } from "@/lib/cn";

type LinkedInLinkProps = {
  className?: string;
  size?: number;
};

const LINKEDIN_ICON = "/assets/integrations/linkedin.svg";

/** Logo cliquable → profil LinkedIn Nolan (nouvel onglet). */
export function LinkedInLink({ className, size = 24 }: LinkedInLinkProps) {
  return (
    <a
      href={NAP.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={LINKEDIN_PROFILE_ARIA}
      title="LinkedIn — Nolan Hermand"
      className={cn(
        "relative z-10 inline-flex shrink-0 cursor-pointer items-center justify-center",
        "transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LINKEDIN_ICON}
        alt=""
        width={size}
        height={size}
        decoding="async"
        className="block"
      />
    </a>
  );
}
