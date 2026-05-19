# Baseline conversion (14 jours post-déploiement)

Mesurer **avant** tout test A/B (thème clair, copy hero, etc.).

## Période

- **Début** : jour J = premier déploiement Netlify avec la version mandataires (H1, tarifs 99/199/449, tel 06 45 38 42 33).
- **Fin** : J + 14 jours calendaires.

## Événements à suivre (Plausible / GA4)

| Événement | Définition |
|-----------|------------|
| `cta_demo_click` | Clic « Réserver ma démo 15 min » (hero + sticky) |
| `tel_click` | Clic `tel:+33645384233` |
| `form_submit` | POST formulaire contact réussi (page `/merci`) |
| `pricing_view` | Section `#pricing` visible ≥ 50 % viewport |

## KPIs

1. **Taux clic démo** = clics démo / sessions uniques.
2. **Taux contact** = (soumissions formulaire + clics tel) / sessions.
3. **Scroll depth** : % sessions atteignant `#pricing` et `#contact`.

## Segments

- Mobile vs desktop (objectif 4G : LCP &lt; 1,8 s).
- Source : organique, direct, réseaux.

## Actions après 14 jours

- Exporter un snapshot dans ce fichier (tableau des chiffres).
- Décider si le thème `confiance` mérite un A/B (50/50) ou reste désactivé dans le switcher.

## Checklist post-deploy (jour J)

- [ ] H1 mandataires visible sur le live
- [ ] Tarifs 99 / 199 / 449 €
- [ ] Téléphone 06 45 38 42 33
- [ ] Rich Results Test (FAQ, HowTo, Service)
- [ ] `sitemap.xml` soumis Search Console + IndexNow
