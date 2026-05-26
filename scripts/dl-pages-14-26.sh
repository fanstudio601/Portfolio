#!/usr/bin/env bash
# Download Figma MCP assets used by pages 14-26 (chart library + plugin)
set -e
cd "$(dirname "$0")/.."
mkdir -p public/figma

ASSETS=(
  # Page 14 grid screenshot (just the chart grid body)
  "8974e13a-e667-4f70-8385-fdd03ed7c2c7"
)

download_one() {
  local id="$1"
  local png="public/figma/${id}.png"
  local svg="public/figma/${id}.svg"
  if [ -f "$png" ] || [ -f "$svg" ]; then
    echo "skip $id"
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

export -f download_one
printf '%s\n' "${ASSETS[@]}" | xargs -P 8 -I {} bash -c 'download_one "$@"' _ {}
echo "done"
