#!/usr/bin/env bash
MAX_SIZE=81920
DEMOS_DIR="public/assets/demos"
FAIL=0

for file in "$DEMOS_DIR"/*.svg "$DEMOS_DIR"/*.json; do
  [ -f "$file" ] || continue
  SIZE=$(wc -c < "$file" | tr -d ' ')
  NAME=$(basename "$file")
  if [ "$SIZE" -gt "$MAX_SIZE" ]; then
    echo "FAIL TROP LOURD: $NAME — ${SIZE} octets (max: ${MAX_SIZE})"
    FAIL=1
  else
    echo "OK: $NAME — ${SIZE} octets"
  fi
done

for file in "$DEMOS_DIR"/*-static.png; do
  [ -f "$file" ] || continue
  SIZE=$(wc -c < "$file" | tr -d ' ')
  NAME=$(basename "$file")
  if [ "$SIZE" -gt "$MAX_SIZE" ]; then
    echo "WARN PNG: $NAME — ${SIZE} octets (cible < ${MAX_SIZE})"
  else
    echo "OK PNG: $NAME — ${SIZE} octets"
  fi
done

exit $FAIL
