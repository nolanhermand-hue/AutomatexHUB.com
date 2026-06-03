import { Contact } from "@/components/sections/Contact";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prendre rendez-vous · Démo 20 min · Automatex Hub",
  description:
    "Réservez un appel avec Nolan (Flers, Orne) : audit 20 minutes, sans engagement. Artisan, immobilier ou TPE.",
  alternates: { canonical: `${SITE_URL}/rendez-vous` },
  openGraph: {
    title: "Prendre rendez-vous · Automatex Hub",
    description:
      "Démo gratuite 20 min · Nolan vous rappelle sous 24 h · Sans engagement.",
    url: `${SITE_URL}/rendez-vous`,
  },
};

export default function RendezVousPage() {
  return (
    <div className="funnel-surface pb-16 pt-[88px] md:pt-[100px]">
      <Contact variant="hub" />
    </div>
  );
}
