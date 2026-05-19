# Automatex — site vitrine

Site statique Next.js 14 (App Router) + Framer Motion pour l’agence Automatex (Flers, Orne).

## Développement

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Production

```bash
npm run build
```

Le dossier de sortie est `out/`, prêt pour Netlify (publication statique).

## Vérifications

```bash
npm run lint
npm run check:words
```

Les textes du site évitent un lexique imposé (voir liste dans `lib/constants.ts`).
