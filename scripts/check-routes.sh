#!/usr/bin/env bash
BASE_URL="${1:-http://127.0.0.1:3000}"
BASE_URL="${BASE_URL%/}"

ROUTES=(
  "/"
  "/immobilier"
  "/btp"
  "/accompagnement"
  "/rendez-vous"
  "/automatisations"
  "/automatisation-ia-tpe"
  "/a-propos"
  "/vos-donnees"
  "/merci"
  "/mentions-legales"
  "/politique-confidentialite"
  "/cgv"
  "/securite"
  "/normandie"
  "/normandie/flers"
  "/automatisation-btp-orne"
  "/automatisation-artisan-flers"
  "/automatisation-artisan-alencon"
  "/automatisation-artisan-argentan"
  "/devis-automatique-artisan"
  "/devis-automatique-artisan-orne"
  "/sitemap.xml"
  "/robots.txt"
  "/favicon.ico"
  "/icon.png"
  "/apple-icon.png"
  "/assets/brand/founder-avatar.svg"
  "/assets/brand/og-image.png"
  "/assets/brand/og-image-btp.png"
)

FAIL=0
for route in "${ROUTES[@]}"; do
  STATUS=$(curl -o /dev/null -s -w "%{http_code}" "$BASE_URL$route")
  if [ "$STATUS" != "200" ] && [ "$STATUS" != "301" ]; then
    echo "FAIL $STATUS — $route"
    FAIL=1
  else
    echo "OK $STATUS — $route"
  fi
done

exit $FAIL
