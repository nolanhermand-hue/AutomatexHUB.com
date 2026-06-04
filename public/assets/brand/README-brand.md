# Automatex — Guide d'utilisation du logo

## Fichiers disponibles

| Fichier | Usage |
|---------|-------|
| logo-orbit-symbol.svg | Symbole seul, fond transparent |
| logo-orbit-symbol-on-bg.svg | Symbole avec fond vert (UI legacy) |
| logo-orbit-symbol-on-bg-slate.svg | Symbole fond ardoise #2D3A4A (repli favicon) |
| logo-orbit-horizontal-dark.svg | Logotype complet, fond sombre |
| logo-orbit-horizontal-light.svg | Logotype complet, fond clair |
| favicons/ | Tous les PNG générés par le script |
| og-image.svg | Image de partage réseaux sociaux |
| logo-tokens.css | Variables CSS |

## Règles d'utilisation

### ✅ Autorisé
- Utiliser sur fond #04342C (vert profond)
- Utiliser sur fond #FAF9F6 (crème)
- Utiliser sur fond #FFFFFF (blanc)
- Utiliser sur fond #0D0D0B (quasi-noir — footer)
- Réduire proportionnellement jusqu'à 16px

### ❌ Interdit
- Déformer les proportions
- Changer les couleurs du satellite (c'est l'élément signature)
- Utiliser sur un fond qui crée moins de 4.5:1 de contraste
- Ajouter des effets (ombre, glow, gradient)
- Tourner ou incliner le symbole
- Écrire "AAutotex" ou "Autotex" — le nom est "Automatex"

## Tailles minimales
- Print : 15mm de côté pour le symbole seul
- Écran : 16×16px pour le favicon, 24px minimum en usage UI

## Espace de protection
Autour du logo, laisser un espace vide égal à la hauteur du satellite (≈ R/9).

## Régénérer les PNG

```bash
npm run brand:favicons
```
