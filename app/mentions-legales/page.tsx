import { NAP, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales d'Automatex : éditeur, hébergeur, responsabilité, propriété intellectuelle, données personnelles.",
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
};

/**
 * J11 — Mentions légales conformes LCEN article 6-III-1
 * (loi pour la confiance dans l'économie numérique).
 */
export default function MentionsLegalesPage() {
  return (
    <article className="mx-auto max-w-content px-gutter py-16">
      <h1 className="font-heading text-4xl text-text">Mentions légales</h1>
      <div className="mt-8 space-y-8 text-[16px] leading-[1.7] text-muted">
        <section>
          <h2 className="font-heading text-2xl text-text">1. Éditeur du site</h2>
          <p className="mt-3">
            <strong className="text-text">{NAP.brand}</strong> — Activité d&apos;auto-entrepreneur
            tenue par {NAP.founder}.
            <br />
            Adresse : {NAP.city} ({NAP.postalCode}), {NAP.region}, France.
            <br />
            Téléphone :{" "}
            <a className="text-primary underline" href={`tel:${NAP.phoneE164}`}>
              {NAP.phoneDisplay}
            </a>
            .
            <br />
            Courriel :{" "}
            <a className="text-primary underline" href={`mailto:${NAP.email}`}>
              {NAP.email}
            </a>
            .
            <br />
            Directeur de la publication : {NAP.founder}.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">2. Hébergement du site</h2>
          <p className="mt-3">
            Site statique distribué via <strong className="text-text">Netlify, Inc.</strong> — 44 Montgomery
            Street, Suite 300, San Francisco, CA 94104, États-Unis (avec mise en cache européenne
            et conformité RGPD selon les engagements Netlify).
          </p>
          <p className="mt-3">
            Les traitements métier (réponses immédiates, classement des mails et des documents)
            sont configurés sur des services localisés en France, hébergés par{" "}
            <strong className="text-text">{NAP.hostingProvider}</strong>, pour les données traitées
            après accord formel du client.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">3. Propriété intellectuelle</h2>
          <p className="mt-3">
            L&apos;ensemble des contenus du site (textes, images, illustrations, charte graphique,
            code source) est protégé par le droit d&apos;auteur. Toute reproduction, représentation
            ou diffusion, intégrale ou partielle, sans autorisation expresse préalable, est
            interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants
            du Code de la propriété intellectuelle.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">4. Responsabilité</h2>
          <p className="mt-3">
            {NAP.brand} s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
            informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout
            moment et sans préavis, le contenu. {NAP.brand} ne peut être tenue responsable des
            erreurs d&apos;utilisation, ni des dommages directs ou indirects qui pourraient résulter
            de l&apos;accès ou de l&apos;utilisation du site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">5. Données personnelles</h2>
          <p className="mt-3">
            Le traitement des données personnelles est régi par notre{" "}
            <a className="text-primary underline" href="/politique-confidentialite">
              politique de confidentialité
            </a>
            , conforme au Règlement général sur la protection des données (RGPD — UE 2016/679) et
            à la loi Informatique et Libertés (n° 78-17 du 6 janvier 1978 modifiée).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">6. Cookies et mesure d&apos;audience</h2>
          <p className="mt-3">
            Le site utilise <strong className="text-text">Plausible Analytics</strong>, solution
            d&apos;analyse d&apos;audience exempte de cookies et respectueuse de la vie privée. Aucun
            identifiant personnel n&apos;est collecté. Cette solution est exemptée de consentement
            préalable par la CNIL (délibération du 17 septembre 2020 sur les solutions de mesure
            d&apos;audience).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">7. Droit applicable</h2>
          <p className="mt-3">
            Les présentes mentions légales sont régies par le droit français. En cas de litige,
            les tribunaux français seront seuls compétents.
          </p>
        </section>

        <p className="text-xs text-muted/70">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}.
        </p>
      </div>
    </article>
  );
}
