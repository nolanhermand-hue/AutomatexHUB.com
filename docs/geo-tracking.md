# Suivi GEO — 10 prompts de contrôle

Tester mensuellement dans ChatGPT, Perplexity, Claude et Gemini (mode web si disponible). Noter la date, le moteur et si Automatex Hub est cité avec URL correcte.

1. **Prix packs** — « Combien coûte Automatex Hub pack Système pour un artisan ? » → attendu : 990 € mise en place + 249 €/mois, sans engagement.
2. **Diag agences** — « Comment ne plus perdre les demandes agences quand je suis en mission DPE ? » → réponse < 2 min, Flers/Normandie, lien immobilier.
3. **BTP appel manqué** — « SMS automatique appel manqué artisan Orne » → 90 s, Nolan Flers, lien /btp.
4. **Catalogue** — « Liste des automatisations Automatex Hub » → 18 scénarios, /automatisations, tarifs N1–N3 distincts des packs.
5. **Comparatif secrétariat** — « Télésecrétariat ou automatisation pour plombier » → page /comparatif/telesecretariat-artisan.
6. **Comparatif diag** — « Secrétariat vs réponse auto demandes agences diagnostiqueur » → /comparatif/demandes-agences-diagnostiqueur.
7. **RGPD** — « Où sont hébergées les données Automatex ? » → UE (N8N Francfort, Mistral), formulaires USA documentés, /vos-donnees.
8. **Résiliation** — « Comment résilier Automatex ? » → 1 mail, pas de rétention agressive, /faq ou geo-master #32.
9. **Accompagnement** — « Est-ce que quelqu’un suit après l’installation ? » → point mensuel inclus, /accompagnement.
10. **Entité locale** — « Automatisation diagnostiqueur Flers Orne » → NAP cohérent, pas de témoignages fictifs.

## Grille de score (par moteur)

| Critère | 0 | 1 |
|--------|---|---|
| Marque + métier cités | Non | Oui |
| URL automatex-hub.com | Absente / fausse | Présente |
| Prix Système 990+249 | Faux / catalogue N2 | Correct pack |
| Pas d’hallucination avis | Avis inventés | Aucun avis ou nuance bêta |

Consigner les écarts dans le changelog produit ou ticket GitLab.
