import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoOrbitProps = {
  variant?: "symbol" | "lockup";
  theme?: "light" | "dark";
  className?: string;
  href?: string;
  /** Hauteur d'affichage en px (lockup 420×100, symbole carré) */
  height?: number;
  onClick?: () => void;
};

const LOCKUP = {
  light: "/assets/brand/logo-orbit-lockup-light.png",
  dark: "/assets/brand/logo-orbit-lockup-dark.png",
} as const;

const SYMBOL = {
  light: "/assets/brand/logo-orbit-symbol-128.png",
  dark: "/assets/brand/logo-orbit-symbol-128.png",
} as const;

const LOCKUP_RATIO = 420 / 100;

export function LogoOrbit({
  variant = "lockup",
  theme = "light",
  className,
  href = "/#hero",
  height = 40,
  onClick,
}: LogoOrbitProps) {
  const src = variant === "lockup" ? LOCKUP[theme] : SYMBOL[theme];
  const width =
    variant === "lockup" ? Math.round(height * LOCKUP_RATIO) : height;

  const img = (
    // eslint-disable-next-line @next/next/no-img-element -- PNG marque, dimensions fixes
    <img
      src={src}
      alt="Automatex"
      width={width}
      height={height}
      className={cn("h-auto max-w-full shrink-0 object-contain object-left", className)}
      style={{ height, width: "auto", maxHeight: height }}
      decoding="async"
      fetchPriority={variant === "lockup" ? "high" : "auto"}
    />
  );

  if (!href) return img;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center"
      data-cursor="link"
      onClick={onClick}
    >
      {img}
    </Link>
  );
}
