# Artefacts d’audit locaux

Ce dossier est **ignoré par git** (Lighthouse JSON/HTML, captures).

Regénération :

```bash
npm run audit:routes          # routes-status.txt
npm run audit:lighthouse      # voir scripts/lighthouse-audit.mjs
AUDIT_BASE_URL=https://automatex-hub.com node scripts/audit-routes.mjs
```
