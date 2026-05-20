import Link from "next/link";
import { cn } from "@/lib/cn";
import { BRAND } from "@/lib/brand";

type LogoOrbitProps = {
  variant?: "symbol" | "lockup";
  theme?: "light" | "dark";
  className?: string;
  href?: string;
  /** Hauteur d'affichage CSS (px) */
  height?: number;
  onClick?: () => void;
};

const LOCKUP_RATIO = 420 / 100;

export function LogoOrbit({
  variant = "lockup",
  theme = "light",
  className,
  href = "/#hero",
  height = 40,
  onClick,
}: LogoOrbitProps) {
  const isLockup = variant === "lockup";
  const src =
    isLockup
      ? theme === "light"
        ? BRAND.lockupLight
        : BRAND.lockupDark
      : BRAND.symbol128;
  const srcSet = isLockup
    ? theme === "light"
      ? `${BRAND.lockupLight} 1x, ${BRAND.lockupLight2x} 2x`
      : `${BRAND.lockupDark} 1x, ${BRAND.lockupDark2x} 2x`
    : undefined;

  const width = isLockup ? Math.round(height * LOCKUP_RATIO) : height;

  const img = (
    // eslint-disable-next-line @next/next/no-img-element -- PNG marque raster (Outfit baked-in)
    <img
      src={src}
      srcSet={srcSet}
      alt="Automatex"
      width={width}
      height={height}
      className={cn("h-auto max-w-full shrink-0 object-contain object-left", className)}
      style={{ height, width: "auto", maxHeight: height }}
      decoding="async"
      fetchPriority={isLockup ? "high" : "auto"}
    />
  );

  if (!href) return img;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center"
      data-cursor="link"
      aria-label="Automatex — accueil"
      onClick={onClick}
    >
      {img}
    </Link>
  );
}
