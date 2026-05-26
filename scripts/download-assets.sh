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

  # Page 27
  "226f3d84-b6ea-4e62-b973-4eac07535297:png"
  "ed06887a-7092-4b13-bece-1be4ea8ad0b1:png"
  "5df70a7d-6c25-4530-b16d-aaedcfd9c6f0:png"
  "73e0fb2b-a1ab-4014-9e1f-a8100927a548:svg"
  "3e6fee3c-8d8e-4079-9f88-7786a4a25579:svg"
  "ff1c1c42-eb6e-4601-9544-d68578bff61a:svg"
  "77ad1c1d-dcfd-459c-ad71-de79d1c87074:svg"
  "2244d36c-9a77-4ba9-b46c-fd595825de43:svg"

  # Page 6 (03 overview)
  "3d53d087-60d8-4ca5-9201-db968d9f89be:png"
  "0903addd-c6cd-46aa-b5a4-4ab01b1f9c90:png"
  "717e5766-0ea5-433f-8227-207d52f4a434:png"
  "f014181c-3e5d-446a-a0ab-be9fbee68192:png"
  "59aa2095-b010-41e0-a15e-80efaeb42309:png"
  "81a638e2-86b4-438f-bf1b-b24a95eb9b97:png"
  "fc110650-13b5-40bc-9dba-e2a03daf075e:png"
  "f729ca82-78d5-42aa-8d1d-1a8c80ce432e:png"
  "0d12e466-7307-4d86-a1ba-d5ceee382d7c:svg"

  # Page 7 (03-1 录入引导)
  "e55610e6-2be5-4a5e-b62a-dcdcdee3db25:png"
  "dc22c1c7-3bc9-4f23-96d5-e5eddb70913a:png"
  "ff120c3f-b2ba-46c9-9fed-c0168dce138c:png"
  "cef5a893-d0dd-498b-baea-9651a90ba868:png"
  "48202857-5cd6-4999-95fd-5f737872789f:png"

  # Page 8 (03-2 长按触发)
  "f09953d4-c4ec-4a77-8278-c4ce5f816cbb:png"
  "b2fe9938-30b6-4138-9738-203a76c1f527:png"
  "f42bdf18-3f7a-43f9-a355-74b499b26799:png"
  "2566287e-e986-4992-9bd2-379af179c60c:png"
  "b771fceb-4c83-4d7c-a7cc-47b534a81c68:png"
  "722c81df-c271-446d-9188-5d6f0d7a6377:svg"

  # Page 9 (03-3 录音反馈)
  "aa69bee7-b042-4128-b835-fa006a434170:png"
  "443ef29e-a0e0-40ef-8fd7-1a45a782895d:png"
  "ee69d44d-ceeb-4948-bf63-857dc04dbba1:png"
  "7e258904-b9ef-44a7-92b2-9816f583300e:png"
  "fac624d6-fe02-46a2-88ed-7f8315081992:png"

  # Page 10 (03-4 实时转写)
  "86108d29-ad96-4057-9b80-0926bd66efe5:png"
  "a8fabcb1-06b6-418a-8b00-63688da389e8:png"
  "c9a724f8-a4f2-417c-a605-c9dbdbd60b1e:png"
  "215986d0-729d-4166-bc48-c213d3ba210d:png"
  "955699c0-85a6-484d-9892-c886aaff36d6:png"
  "0809364f-9ac5-4a6b-b546-82bba447ead7:png"
  "9e8428f9-12e3-4881-a4ec-0d61ccdc7474:svg"

  # Page 11 (03-5-1 结构化解析)
  "79cbda92-657d-492d-a147-670de553a93b:png"
  "096f513e-847a-4f21-b5e5-2228c7300192:png"
  "4b048499-31d0-4a49-b50d-716a92752113:png"
  "7df7b43c-0950-43af-84b6-6008ebbcea63:png"
  "fca76b5b-a31a-40e6-bf8f-c4baa1b6aa20:png"
  "8b43f055-05b4-487b-86ea-1d2ddc8afce3:png"
  "1c5189b4-2cb2-408b-b127-7250a04f7bca:png"
  "20228374-8853-4680-a6ec-aa1a432ebab2:png"
  "77732a57-c738-486f-a853-c8e2d91e45e9:svg"
  "e4129824-d84a-447a-a2d8-070e5dbe95e0:svg"

  # Page 12 (03-5-2 全景链路)
  "86a3b6b2-7f45-4409-9295-f81e000648db:png"
  "4f7ae734-c310-41c1-b3d3-25658066c4e3:png"
  "fce91961-98cf-4125-8341-ff318e639c38:png"
  "d4a63d1f-7b46-4004-a297-cebb597aea29:svg"
  "542e5e8f-f42c-43d3-9621-d20232e555c6:svg"
  "06d70e7a-1f67-4109-83d5-9a6199a134d8:svg"
  "53f3b5a8-d4b8-461e-adde-dead908f8348:svg"
  "1afbcf86-899f-41c9-8d4b-4dd88eca6806:svg"
  "e0ded408-7f80-4ec8-9de7-3fe4a502860e:svg"

  # Page 28
  "b766a83f-e315-48b4-8110-b105edbd6798:png"
  "00e6f905-1f18-434e-95c9-6efd360dd7db:png"
  "eaf7cc0b-10d5-4e3f-9c61-1449a3abe42e:png"
  "a50b3f3d-b19c-4628-ba28-1040a5a0c535:svg"
  "627d877a-48f9-4d17-ab32-8a2412cf1666:svg"

  # Page 29
  "6395334c-c043-4906-87cd-d36fc2d035c3:png"
  "7420eae8-b06b-4f3d-8bdb-277832304ff5:png"
  "113b3f61-231f-4c4c-969a-a38c44b515f3:png"
  "2287acbb-88f4-4161-be22-bbaa4378b71a:svg"
  "d234828c-aae2-4af2-9b06-aecaa7d6f08d:svg"

  # Page 30
  "c9571b6a-b131-486f-917b-c74fc2977080:png"
  "bb944d8d-ed35-4ce9-9624-7603e04cba40:png"
  "6e9ca28d-fb5c-499b-a1ef-f45c4f5e84fe:png"
  "8fc06ba9-b2d1-482e-8f69-42999da91807:svg"
  "2657cc30-d823-4a1a-a1f3-8c1c1673895e:svg"
  "574a77d7-3a97-4cf0-8505-2a2fffcc0da2:svg"

  # Page 31
  "6b5a82c5-7710-4d7c-9537-a50990e89eca:png"
  "35fc3b2a-31f8-4fa4-a712-25ea3989f818:png"
  "c5ece49a-1e20-4fda-a5b2-ec8026539078:png"
  "2f4df0c4-b540-4156-8ae3-01e78934e950:png"
  "96ef7961-d850-41c5-bb9e-1f94f11a8ca4:svg"
  "90e91ff8-963b-4de1-aa73-2ad244dc2845:svg"
  "e0733ced-1af9-4dc2-b407-b56131514854:svg"
  "67c32670-f6e4-4520-8f9f-332dc2a3dcd9:svg"
  "abd27b08-046c-4820-a5f1-44b8c83f54bd:svg"

  # Page 32
  "77894e0f-ba53-49c3-97aa-91493612743d:png"
  "f4fb3773-50f5-46c7-8590-ef83c3333853:png"
  "8de32961-2017-4a6f-ad47-554181a2b54e:png"
  "828c4235-6748-4c0a-923b-827b89d092c4:png"
  "db19a2cb-509f-4a0d-bebf-db0e328b6380:png"
  "a1efa846-ebf5-4a5d-ac4d-e1202357dcf5:png"
  "f4eb8969-811c-4327-a021-48e4b7fc3fdc:png"
  "e58470aa-f99a-441f-98c4-38f582706c4e:png"
  "e8b722bb-4487-4ec3-9bd6-f3112644725a:svg"

  # Page 33
  "fd29e55b-204d-42ae-9945-a3c114d5d464:png"
  "5c918ea6-ace4-4977-8837-5ea0418b501e:png"
  "63d73ab4-d688-423b-9715-c2d2af694fad:png"
  "df8cb814-7fd7-448a-9671-f8cc47cdb1b7:png"
  "2a2bccf1-fae8-4ad8-a3e8-9076fb15bfa5:png"
  "9fe52227-ad40-4f12-b8f4-6304a67c15af:png"
  "18ddbe84-f963-450d-9cc2-8128f2930b4c:svg"
  "ba59a2d4-9c9f-4b35-93be-e57ab3c26ee8:svg"

  # Page 34
  "b5aefa81-95d4-4b51-8a96-51d4d90477bd:png"
  "dc73c38d-8171-482a-9ddd-f8af11b4d87e:png"
  "c015ea72-7022-49f7-b46b-f5a3e42fcf7d:png"
  "c82b8247-1419-4fa0-8be3-5cfde967d66c:png"
  "f215c21b-f5a5-4bec-860b-98e86442b690:svg"
  "5f4e6b50-aa20-42cb-9f67-bcdf8014e373:svg"

  # Page 35
  "80565dd0-4966-46f3-af17-5e5ebc8819b8:png"
  "4008087c-2951-4fe8-870a-04cad9ef3f72:png"
  "8c4f4efd-eae6-4012-a15d-205e6dd9d0e0:png"
  "6b6132d0-1de3-4ff5-a112-8ff04c8f210f:png"
  "686ba8ab-7829-495f-b74f-4f17bc41b995:png"
  "4a81b0ac-2d6e-4c21-af9d-c75432bbde68:svg"
  "0bdaa6e5-bae0-4df7-9627-2ad2d95c68b3:svg"

  # Page 36
  "ed0b7128-7a54-4119-9758-bf6d65ebd7d4:png"
  "dded50e0-e03d-4d79-b006-e6a0cff8cb21:png"
  "b30106d9-557a-4a4c-811e-4d20a09c69c7:png"
  "d2e43441-0810-484b-ac6b-26f02898f6b2:svg"
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
