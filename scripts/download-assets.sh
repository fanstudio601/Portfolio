#!/usr/bin/env bash
# Download all Figma MCP assets used by pages 0-4 into public/figma/<id>.<ext>
set -e
cd "$(dirname "$0")/.."
mkdir -p public/figma

# Mapping: <id>:<extension>  ext defaults to png
ASSETS=(
  # Page 0
  "ed7d243a-253a-437c-8ba8-33132c4a91f8:png"   # bg texture
  "82a98a45-4fe6-4ef0-96e4-f7ca009d4a6e:png"   # signature
  "9ddf4fef-c817-4c7f-805d-b2dc8ac2debb:png"   # avatar
  "765cc204-ffbc-4606-b9ab-91058cc1ae2d:svg"   # location icon
  "f43fdbc9-ee1c-4ca9-ae0b-99e169fbf0b3:svg"   # person icon
  "c916b7fc-2696-434f-aa0e-ea1bbb44e32a:svg"   # phone icon
  "e7b9a8bf-3ef8-4b0b-bf64-4a3c3ba3f43a:svg"   # wechat icon
  "bb54b995-04e0-42d0-931c-970337246ae6:svg"   # email icon
  "ea5c04f6-ce90-42cc-9ac6-f189ac5661eb:svg"   # vertical line

  # Page 1
  "80fb1033-9f8e-4054-8cc9-ca69dc7b6fb7:png"
  "b0ecd11e-49db-47ed-8c5a-ad51373a5424:png"
  "0510c0d5-fb35-494e-a958-8de090ac24d9:png"
  "0a525389-fa02-4397-956e-3658c01ebdfd:png"
  "8aa167f6-c8fe-45a0-b7cc-9043e61367a2:svg"
  "8ce42eb4-a54f-41b3-8817-0fb75611f55c:svg"
  "8597fc40-a51b-4496-a71c-c3e2d28319a4:svg"
  "6a5ed92c-6e3e-4ac6-b6fe-7baa736258fd:svg"
  "f6c94229-9c85-4521-9031-a6acb133b596:svg"
  "115ad976-5157-4a09-b3d5-b3f71a5c9ce7:svg"
  "ed39812c-dc89-4364-afbd-5f3df34e3f54:svg"

  # Page 2
  "e28a0cd8-83a0-40fa-a590-dfa01e89fdcd:png"
  "ca3121c2-ce9f-463c-8b0a-c272901f02cb:png"
  "ce7fd096-1f67-41cc-82ad-c6816a1ce7d1:png"
  "3191a564-ee60-471b-938a-70007686238f:png"
  "c5ad1477-360d-42f4-900b-de4af5d3e73b:png"
  "12dc370f-cf17-453f-97e4-ebe16c82690a:png"
  "1f51cad9-4af3-4a49-84a7-a1f8938a7197:png"
  "af7df5f9-d265-40a5-bd39-b649d1d621d5:png"
  "4ac9200d-e1de-48d8-bbe8-7c47a2f4fc27:png"
  "3a786afc-3db9-42db-94d3-2e58c04cbda6:svg"
  "8b561e87-e8ba-477f-a073-d896c1753ad3:svg"
  "d91a9807-a6ec-4257-a0f8-712fdce89d94:svg"

  # Page 3
  "14293f56-dbb7-4d22-ab66-7602a3bfc8ad:png"
  "38a53995-0c07-4771-b0cb-5109b50c4191:png"
  "da1f3c63-583b-41b2-a8aa-0018f465caea:png"
  "21d808b1-16d3-4e01-bac0-db3f3fc13641:png"
  "ae1378fa-0f09-43c1-9006-97ce6bf88c57:png"
  "1b7b7b91-7d51-4310-ae98-41406323c3d0:png"
  "ad445eae-e6ff-4fad-b1c7-790e4693c51b:png"
  "ab205bd3-647d-4ff5-b092-be3d6ad294f2:png"
  "cc0a5630-0016-46ce-9989-6d4df2045777:png"
  "df4a012f-adf0-4b6a-b6e4-29d3b500f73b:png"
  "a0d6027d-821f-4b19-bcde-9485b99b787b:png"
  "1e485ff5-ac7e-48f0-9edb-b9c29397ef28:png"
  "318463b9-b3cf-4aca-851c-e2dbd9df9d3d:svg"
  "5314c752-4f99-47db-807b-95b8973eb5b0:svg"
  "d1ee2e68-b1aa-4a18-91be-d908a7ec20d8:svg"
  "8d202aa5-e8ee-4646-bec9-5d068e9d58b8:svg"

  # Page 4
  "9617493b-0fd5-40eb-a7c4-b0a899e0ee6b:png"
  "90771b95-67cc-4a77-9126-a3a323df3377:png"
  "b4a721d7-39be-4983-ad60-534162a2ec49:png"
  "9424410d-3ba1-4c9b-9f23-23ce76b3e0a0:svg"
  "fc8fb8f4-540b-4ef1-bbb3-060825ceb1d2:svg"
  "3af59714-1a4a-4a91-871d-d18bccaff517:svg"
  "bf74135c-256a-43eb-b127-9a544d1c28cf:svg"
  "84c4c1c4-bc29-4b54-9fe7-fee8ac2e2650:svg"
  "0367e29d-cf6a-4ae5-aae1-3bac8cf7268c:svg"
  "104e9dac-6fd2-4391-aea6-72db85338f2a:svg"
)

download_one() {
  local entry="$1"
  local id="${entry%%:*}"
  local ext="${entry##*:}"
  local out="public/figma/${id}.${ext}"
  if [ -f "$out" ]; then
    echo "skip $out"
    return
  fi
  echo "fetch $out"
  curl -s -o "$out" "https://www.figma.com/api/mcp/asset/${id}"
  # Detect actual content: if .svg was guessed but file isn't SVG, rename to png
  if [ "$ext" = "svg" ] && ! head -c 256 "$out" | grep -q "<svg\|<?xml"; then
    mv "$out" "public/figma/${id}.png"
    echo "  (was actually png, renamed)"
  fi
}

export -f download_one
printf '%s\n' "${ASSETS[@]}" | xargs -P 12 -I {} bash -c 'download_one "$@"' _ {}
echo "done"
