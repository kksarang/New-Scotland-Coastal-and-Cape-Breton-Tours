#!/usr/bin/env bash
# Regenerates the optimised images in public/images from the originals in assets/images.
# Requires ImageMagick 7 (`magick`). Run after replacing or adding a source image.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=assets/images
OUT=public/images
rm -rf "$OUT/scenes" "$OUT/gallery" "$OUT/og"
mkdir -p "$OUT/scenes" "$OUT/gallery" "$OUT/og" "$OUT/icons"

# Scene crops remove the poster lettering. Keep in sync with src/data/images.js.
# source | crop (WxH+X+Y) | output name
scenes=(
  "cabot-trail-coastal-road-illustration|1536x755+0+0|cabot-trail-coastal-highway-cape-breton"
  "fortress-of-louisbourg-illustration|1254x800+0+265|fortress-of-louisbourg-nova-scotia"
  "cape-breton-lighthouse-illustration|1254x585+0+490|cape-breton-lighthouse-atlantic-coast"
  "cape-breton-autumn-coast-illustration|1254x635+0+460|cape-breton-fall-colours-coastline"
  "cape-breton-harbour-autumn-illustration|1254x605+0+485|cape-breton-fishing-harbour-autumn"
  "tour-and-taxi-vehicle-promo|830x510+680+290|private-tour-vehicle-cape-breton"
)
for entry in "${scenes[@]}"; do
  IFS='|' read -r src crop name <<<"$entry"
  for width in 480 800 1280; do
    magick "$SRC/$src.webp" -crop "$crop" +repage -resize "${width}x>" -strip -quality 72 "$OUT/scenes/$name-$width.webp"
  done
  magick "$SRC/$src.webp" -crop "$crop" +repage -resize 1200x630^ -gravity center -extent 1200x630 -strip -quality 80 "$OUT/og/$name.jpg"
done

# Gallery: a lazy-loaded grid size and a lightbox size.
for file in "$SRC"/*.webp; do
  name=$(basename "$file" .webp)
  [ "$name" = new-scotland-cape-tours-logo ] && continue
  magick "$file" -resize '640x>' -strip -quality 72 "$OUT/gallery/$name-640.webp"
  magick "$file" -resize '1600x>' -strip -quality 78 "$OUT/gallery/$name-1600.webp"
done

# Logo and icons.
LOGO="$SRC/new-scotland-cape-tours-logo.webp"
magick "$LOGO" -resize 400x400 -strip -quality 85 "$OUT/new-scotland-cape-tours-logo.webp"
magick "$LOGO" -resize 512x512 -strip "$OUT/icons/icon-512.png"
magick "$LOGO" -resize 192x192 -strip "$OUT/icons/icon-192.png"
magick "$LOGO" -resize 180x180 -strip "$OUT/icons/apple-touch-icon.png"
magick "$LOGO" -resize 48x48 -strip "$OUT/icons/favicon-48.png"
magick "$LOGO" -define icon:auto-resize=48,32,16 public/favicon.ico

# Homepage hero (owner photo: home-hero-autumn-coastal-road.jpg).
HERO_SRC="$SRC/home-hero-autumn-coastal-road.jpg"
HERO_OUT="$OUT/hero"
HERO_BASE="home-hero-autumn-coastal"
mkdir -p "$HERO_OUT"
if [ -f "$HERO_SRC" ]; then
  cp "$HERO_SRC" "$HERO_OUT/${HERO_BASE}-full.jpg"
  for width in 768 1024 2048; do
    height=$((width * 10 / 21))
    magick "$HERO_SRC" -auto-orient -filter Lanczos -resize "${width}x${height}^" -gravity center -extent "${width}x${height}" \
      -unsharp 0x0.65+0.65+0.006 -strip -define webp:method=6 -quality 96 "$HERO_OUT/${HERO_BASE}-${width}.webp"
  done
  magick "$HERO_SRC" -auto-orient -filter Lanczos -resize 2048x -unsharp 0x0.65+0.65+0.006 -strip -quality 94 "$HERO_OUT/${HERO_BASE}-2048.jpg"
  magick "$HERO_SRC" -auto-orient -filter Lanczos -resize 1200x630^ -gravity center -extent 1200x630 -strip -quality 94 "$OUT/og/${HERO_BASE}.jpg"
fi

echo "Images written to $OUT"
