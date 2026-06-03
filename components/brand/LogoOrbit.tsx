import Image from "next/image";
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
  href = "/",
  height = 40,
  onClick,
}: LogoOrbitProps) {
  const isLockup = variant === "lockup";
  const width = isLockup ? Math.round(height * LOCKUP_RATIO) : height;

  const img = isLockup ? (
    // eslint-disable-next-line @next/next/no-img-element -- lockup PNG raster
    <img
      src={theme === "light" ? BRAND.lockupLight : BRAND.lockupDark}
      srcSet={
        theme === "light"
          ? `${BRAND.lockupLight} 1x, ${BRAND.lockupLight2x} 2x`
          : `${BRAND.lockupDark} 1x, ${BRAND.lockupDark2x} 2x`
      }
      alt="Automatex"
      width={width}
      height={height}
      className={cn("block shrink-0 object-contain object-left", className)}
      style={{ height, width, maxHeight: height, maxWidth: width }}
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  ) : (
    <Image
      src={BRAND.symbolCircle}
      alt="Automatex"
      width={512}
      height={512}
      sizes={`${height}px`}
      className={cn("block shrink-0 object-contain", className)}
      style={{ height, width: height, maxHeight: height, maxWidth: height }}
      priority
    />
  );

  if (!href) return img;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center overflow-visible"
      data-cursor="link"
      aria-label="Automatex — accueil"
      onClick={onClick}
    >
      {img}
    </Link>
  );
}
