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
  /** Réservé aux zones LCP explicites — nav : false par défaut */
  priority?: boolean;
  onClick?: () => void;
};

export function LogoOrbit({
  variant = "lockup",
  theme: _theme = "light",
  className,
  href = "/",
  height = 40,
  priority = false,
  onClick,
}: LogoOrbitProps) {
  void _theme;
  void variant;
  const size = height;

  const img = (
    <Image
      src={BRAND.symbolTransparentSvg}
      alt="AutomateX"
      width={100}
      height={100}
      sizes={`${size}px`}
      className={cn("block shrink-0 object-contain", className)}
      style={{ height: size, width: size, maxHeight: size, maxWidth: size }}
      priority={priority}
    />
  );

  if (!href) return img;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center overflow-visible"
      data-cursor="link"
      aria-label="AutomateX — accueil"
      onClick={onClick}
    >
      {img}
    </Link>
  );
}
