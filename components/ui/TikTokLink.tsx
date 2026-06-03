import { TIKTOK_PROFILE_ARIA, NAP } from "@/lib/constants";
import { cn } from "@/lib/cn";

type TikTokLinkProps = {
  className?: string;
  size?: number;
};

const TIKTOK_ICON = "/assets/integrations/tiktok.svg";

/** Logo cliquable → compte TikTok Automatex (nouvel onglet). */
export function TikTokLink({ className, size = 24 }: TikTokLinkProps) {
  return (
    <a
      href={NAP.tiktokUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={TIKTOK_PROFILE_ARIA}
      title="TikTok — Automatex"
      className={cn(
        "relative z-10 inline-flex shrink-0 cursor-pointer items-center justify-center text-text",
        "transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={TIKTOK_ICON}
        alt=""
        width={size}
        height={size}
        decoding="async"
        className="block"
      />
    </a>
  );
}
