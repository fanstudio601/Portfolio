#!/usr/bin/env bash
# Download all Figma MCP assets used by pages 27-36
set -e
cd "$(dirname "$0")/.."
mkdir -p public/figma

ASSETS=(
  # Page 27
  "226f3d84-b6ea-4e62-b973-4eac07535297"
  "ed06887a-7092-4b13-bece-1be4ea8ad0b1"
  "5df70a7d-6c25-4530-b16d-aaedcfd9c6f0"
  "73e0fb2b-a1ab-4014-9e1f-a8100927a548"
  "3e6fee3c-8d8e-4079-9f88-7786a4a25579"
  "ff1c1c42-eb6e-4601-9544-d68578bff61a"
  "77ad1c1d-dcfd-459c-ad71-de79d1c87074"
  "2244d36c-9a77-4ba9-b46c-fd595825de43"
)

download_one() {
  local id="$1"
  local png="public/figma/${id}.png"
  local svg="public/figma/${id}.svg"
  if [ -f "$png" ] || [ -f "$svg" ]; then
    return
  fi
  local tmp="/tmp/figma_${id}"
  curl -s -o "$tmp" "https://www.figma.com/api/mcp/asset/${id}"
  if head -c 256 "$tmp" | grep -q "<svg\|<?xml"; then
    mv "$tmp" "$svg"
    echo "svg: $id"
  else
    mv "$tmp" "$png"
    echo "png: $id"
  fi
}

for a in "${ASSETS[@]}"; do
  download_one "$a"
done
echo "done"
