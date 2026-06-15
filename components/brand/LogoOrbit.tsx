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
  theme = "light",
  className,
  href = "/",
  height = 40,
  priority = false,
  onClick,
}: LogoOrbitProps) {
  const size = height;

  const symbol = (
    <Image
      src={BRAND.symbolTransparentSvg}
      alt="AutomateX"
      width={100}
      height={100}
      sizes={`${size}px`}
      className="block shrink-0 object-contain"
      style={{ height: size, width: size, maxHeight: size, maxWidth: size }}
      priority={priority}
    />
  );

  // Wordmark rendu en HTML pour garantir la police Inter (next/font) + le thème.
  // theme="light" = texte clair (fonds sombres : nav/footer) · "dark" = texte sombre.
  const wordmarkColor = theme === "dark" ? "var(--color-bg)" : "var(--color-text)";

  const content =
    variant === "lockup" ? (
      <span className="inline-flex items-center gap-2.5">
        {symbol}
        <span
          className={cn("font-heading font-bold leading-none tracking-tight", className)}
          style={{ fontSize: Math.round(size * 0.62), color: wordmarkColor }}
        >
          Automate<span style={{ color: "var(--color-accent)" }}>X</span>
        </span>
      </span>
    ) : (
      <span className={cn("inline-flex", className)}>{symbol}</span>
    );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center overflow-visible"
      data-cursor="link"
      aria-label="AutomateX — accueil"
      onClick={onClick}
    >
      {content}
    </Link>
  );
}
