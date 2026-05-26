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

  # Page 14 full screenshot (used as the chart-grid visual layer)
  "7c43113e-3e9f-47f3-9876-e190b3ae6cca:png"
  # Page 14 chart-grid only (no chrome)
  "3e5d8f1b-be63-4a3f-bc26-659d040b9bc9:png"

  # Page 15 (line chart variants — overlapping tilted thumbnails)
  "0b009810-fd00-4464-a632-e427eaf65002:png"
  "7db6eb0a-08df-4a86-8741-4ed3e06d1e6d:png"
  "ac6526b7-8139-4e45-9eee-b61f5715845d:png"
  "8497009f-624e-4316-a3b4-e39185ed8484:png"
  "400c5dbd-9fa5-43ae-b33b-4ccf583283ea:png"
  "e4998cd6-5abb-41ec-af7f-1296c0c81e46:png"
  "b74e26d1-3f36-4ad9-add3-851ca6c9c366:png"
  "4c47496b-8f50-45bf-ab61-f26c3b8f9e82:png"
  "d97ddcf4-af11-4a26-ad3f-7a6685809638:png"
  "7a813db9-7aa6-4169-8980-ef0ec4059948:png"
  "b19bd5c9-d19b-4bad-883a-9f54e21b7c5f:png"
  "50972a82-3972-4f7d-882f-658211e22084:png"

  # Page 16 — assets identified
  "2468a531-bb3c-44de-972f-21bf75aec01b:png"
  "30dac3e0-a018-416b-a9de-62c2a2925589:png"
  "34bc6b23-ee14-4a8a-8963-4772d731a90f:png"
  "34e24e6d-9a19-4658-9630-6143fc2da81c:png"
  "3d94ba83-e50d-47e0-a107-ef769ce23670:png"
  "3de833b7-a54c-4060-8308-bef449a6c5c0:png"
  "5381877f-4203-44df-8b4d-179945f84b8c:png"
  "621a7211-19fa-4d24-b8ff-eff5b97f8e00:png"
  "63905153-c528-4547-9bd3-826b9b6824ad:png"
  "67fc7e38-357d-45e3-9feb-3a87204b6416:png"
  "8235eaa5-99c5-4df3-8b95-7d99957f8215:png"
  "8416b96b-61fc-4776-938f-f66de9fbb3ba:png"
  "89544020-ee61-406e-97bd-353c61c78825:png"
  "8a3ee866-d66c-4241-ae21-2a8decfba224:png"
  "8cbbc16b-584b-447e-b318-18f09c57c7b3:png"
  "91ac7036-0d42-41c0-9ac1-ad7f24cc7ae1:png"
  "94a65d26-6d37-4017-b7f5-0664638f3c77:png"
  "9da7bfaa-8883-45c4-8e25-9d6da947f759:png"
  "a8e65f3d-75f3-4352-b0cc-03fcc7538418:png"
  "b55bb23a-85d5-4ddb-a905-b1881c9a561d:png"
  "b5708b09-b613-4424-8a44-e9e5c598e05c:png"
  "ba3bf277-3ade-460c-976e-5c1cfb4ec03d:png"
  "c02bc30c-84a4-4c88-8d05-e5e8b934800b:png"
  "c43b32d7-6fe0-4e25-a766-a6ef67bee9c6:png"
  "c8bcde43-0614-423b-ae2a-63535a2c83e4:png"
  "d02e11de-d49b-4468-a5d5-5d9ab87b6bef:png"
  "f50974c6-939f-4ad3-8278-f0b073b3cbb4:png"
  "f66d601d-8a84-4995-b806-a510724867f5:png"
  "fc918455-852e-4b65-b411-b49da21a68fa:png"

  # Page 17 — Auto-layout & constraints
  "0014172d-2c11-4224-96fc-96f75d5c02b1:png"
  "09f2e00d-f0fb-43ed-9cda-73df10c7867f:png"
  "10f75ca8-504a-4b62-a8bb-ec35ca0b7366:png"
  "11195c2c-09b2-4129-8d95-1060b90671ce:svg"
  "121f93ec-50f3-43c5-906e-e72da83313c1:svg"
  "164da5ef-d515-4011-b575-3c8b4ba5ed0b:svg"
  "244fcceb-d7dd-46cd-955a-18775669f6b6:png"
  "268352ab-30ea-40c1-8196-b6b08edeca54:png"
  "2ca7e030-818d-4ec3-9416-02150d49f404:png"
  "3550456c-435a-4fe6-8249-32f057187c6c:png"
  "40c64b56-1a64-4a8c-9cef-555683835c38:svg"
  "4e080bc2-0ead-4b1f-b890-0444a536ca92:svg"
  "503ae08a-57ea-4905-8a36-37800584ee79:png"
  "6a6e7ade-961f-43ff-881f-c3669db466e6:svg"
  "723e0f9c-315b-46c6-9a72-514793fb7ebc:svg"
  "747c8327-51d0-4e70-9f17-99f64b5e9edd:png"
  "899f4bd1-fa4d-4f54-a742-d4d430126363:svg"
  "8ad836eb-21bf-4b55-ba7c-307be558313f:png"
  "9bfc9c06-52a9-4a1e-91ed-83d3e65ea2b0:png"
  "a4ccc7d0-36f5-4373-a40d-24088df69645:png"
  "aa050384-29cd-4146-be8c-f91f7d84922f:png"
  "b4fa64bd-ab4b-4e4f-8298-e4e1f3e294f4:svg"
  "dbdaf572-d138-4abb-9402-f72f6520557c:svg"
  "edba4409-7b19-4be8-a126-0fc41634b6bb:png"
  "f9f9b29a-20d6-4752-9747-322c75d94099:png"

  # Page 18 — overview cards & history timeline
  "d9e270f9-45e9-44f4-a73f-ac6f134eaab1:png"
  "d3809ae8-c0d4-4c84-8685-a5fe31ecb40d:png"
  "7915f531-73f4-40dc-a46c-a0ea8c9cf000:png"
  "e19eb0a1-d678-41c3-95d7-ff7d626c2065:png"
  "00579cbd-969a-4ab1-bb5d-4028cca7339f:png"
  "edc1b8ef-2fa5-44e4-b767-b200b9cb7356:png"
  "db78c199-d7f9-4128-8060-41e484cc28b9:png"
  "9f209692-e371-4453-a915-cbf6d95d3b78:svg"
  "e4421cbc-17b3-462d-b394-531320c7a494:svg"
  "41b6eb72-f768-4f4e-a263-f7a8be7e7806:svg"
  "f3a2c197-8eca-4fc1-910c-a1ca0585836f:svg"
  "9297cc9f-167c-4da5-9184-cb890640dcde:svg"
  "f2999173-6c17-4e77-a3d3-d03cd344d90d:svg"
  "b2d6864c-eeba-4224-a13b-1c69c983af4c:svg"
  "162955d5-254d-4115-9466-912f0a491714:svg"
  "ee481a6d-9136-42ca-9f6b-35bf7c25885c:svg"
  "1e289d80-adb5-400c-a7fb-3dc3001193dc:svg"
  "19597792-eea4-4076-ac8e-d95267e37285:png"
  "89679287-1fec-4ba2-9e18-65127326166c:png"
  "82bd9e9d-9c43-4cc9-a514-1a5e3aced0fd:png"
  "44634243-5772-4bb8-84d0-66af9e6277ad:png"

  # Page 19 assets
  "0a1d329d-68d2-425e-bdfd-5262a1a2bc48:png"
  "0f42e9ae-ed19-4785-8aea-42fa96b46b31:png"
  "11c756c6-cb46-44cc-83c7-6e1770615383:png"
  "19350a41-a57f-4ae7-913d-c364f3f36897:png"
  "2048f992-d19e-40b7-b1a7-8cfc575a7a44:png"
  "25104399-3398-4170-b62d-bc7cd0ecff4e:png"
  "31067cbc-ce6e-4b6e-bf3b-1107fe490d8e:png"
  "4f4f719d-0f32-457f-b03c-c94b89a49825:png"
  "536fc088-07c9-4b44-9aff-eec9c07ce96f:png"
  "718b6638-57c2-495a-804d-4ddd5d19de6a:png"
  "7a1d75b2-442b-44c9-9542-51dedabf4f87:png"
  "8273a3d6-fe46-4855-818a-238e167063d7:png"
  "adffca91-6a9d-419d-8117-b4a32ce1dbce:png"
  "afb195fe-fe1f-40e4-93aa-8068f44ca734:png"
  "bd903d86-fdd2-4a8a-b5cd-fdd468511919:png"
  "c10ba43a-97c0-47ff-9067-ad19bc310120:png"
  "c1ce02ed-f43d-46fc-94b8-649d3ac30310:png"
  "c7318684-303f-440b-85c0-56c426137e9f:png"
  "c812424a-6384-4dc9-a298-3e3f9ae20bae:png"
  "f79c2f7a-8da4-41a8-ba0e-e38729f3afea:png"
  "fb995092-4529-47d9-b5eb-6f0656274d48:png"

  # Page 20
  "fe662933-c26e-42f0-a3dc-7d5277447943:png"
  "26af39b9-8998-4a2f-b8fa-94174685eb79:png"
  "9b7a2ede-379e-492f-9e46-85573666a6f6:png"
  "2290b997-3329-4e4f-acb5-dae3e93de858:png"
  "4cb56bce-fcfa-427e-b13f-36c118df894f:png"
  "f7e0459b-1f84-4708-b57a-c53be50fef93:png"
  "be79796b-8ef5-4464-be6b-56716f1e5a98:png"
  "fe5071dc-a066-4ad7-b0a9-297e8bb67848:png"
  "f85fc9d1-5373-413e-acb8-5cea03f94305:svg"
  "5e85251c-7965-45b7-8f26-859e1141ed5a:svg"
  "d785ee74-69f0-46d3-88e4-21c83dac7d31:svg"
  "c4c9c956-d2e6-41cd-9f5e-d23c5e3fab7b:svg"

  # Page 21
  "00593850-76d0-4d9a-b6fd-5b844d2adabe:png"
  "0aae59c8-538d-4c88-81c8-85bf8f012d59:png"
  "21adea0c-b662-4421-a139-ecd8b1450ff0:png"
  "2d66db3b-a2b5-48fa-888e-12396a7ed8c8:png"
  "3b2f6a30-546d-43f2-b666-8c5a140ee6b0:png"
  "4316b271-6ee2-4355-b55c-0ed59104931d:png"
  "663c5a0e-e078-49bc-8564-456da6860654:png"
  "69bf0649-7357-4389-900d-6975ddc4ef4e:png"
  "70fc6927-cd03-4ecd-9084-b35030772aa0:png"
  "77eb5e54-00ad-4026-831e-ea55c65ec6b8:png"
  "7890ac0f-785b-402a-b528-9ad843956155:png"
  "8116635b-89ab-4529-9021-b4b84ae79ea3:png"
  "ba224eda-d41b-47bc-b255-04ea4053f036:png"
  "d17cd123-4d97-4cf4-95c5-4bcd47c0ce17:png"
  "d7f83fee-9c7b-411e-a8b2-71e5945d7728:png"
  "dc380bbf-47c8-49a3-a29a-fb8554475fb1:png"
  "defddadb-9abe-4baa-8ffb-94fdb059da72:png"
  "e3f1ec6a-37ae-4b73-83b2-f73674fda22c:png"
  "e92d89a0-03b4-4697-80f3-67dc61c66249:png"

  # Page 22
  "8b814a49-9d85-4d81-914b-40bc7e759ce1:png"
  "bc13dd79-d643-4bea-8a37-a6eb88a101e7:png"
  "2113f3b0-ba44-45d2-ae17-7e36fa7b19df:png"
  "f5f59ce5-af3f-42bb-8430-e1ed4259e565:png"
  "573971df-9f5b-40b7-9501-6875568524ac:png"
  "5aed77e4-47f5-40c7-9cec-637b64d81345:png"
  "c0aec573-9eef-405e-8223-b745dfd96a6c:png"
  "a701cf47-313d-4e29-a1d3-c35de3329c0a:png"
  "cf84311d-6ab8-4cbc-8dbf-401aa4ce458f:svg"

  # Page 23
  "4cc05977-d622-43d1-8429-5a73b0104670:png"
  "d12739be-5ca5-4d01-a371-1ee2203f1e2c:png"
  "aa5d3ee7-2e98-4186-a314-e5e0252c8637:png"
  "a05a9454-4eb4-4ec5-b43d-fea92ec6aaee:png"
  "607bf4ae-c6ff-4a87-971e-7ad4f0bf3da6:png"
  "05b9bfce-8387-47b0-b6c3-d513d3ebca3f:png"
  "eae87863-13b7-4aeb-95e4-becc04d8dbc3:png"
  "24669db8-fb7f-4294-898f-6592e615d6f6:png"
  "32b5012d-b567-4695-ae64-6c02d7354994:svg"
  "612ec1c8-5494-4634-80c3-9aa1be36c6ae:svg"
  "0856236c-b2ae-4639-a87d-564cab780bfb:svg"
  "8c2e891f-f860-4b39-8df2-1c21151cb836:svg"
  "7f900ef0-8186-4bba-a8f7-a94ee1793ef4:svg"

  # Page 24
  "f918f9e6-6237-4bab-950d-df1097d2aeac:png"
  "5fc3acf9-4c76-41a6-a143-deb0203e2828:png"
  "40446001-05e5-4c19-a876-0e08ce4655c3:png"
  "a9c63352-b1a3-48a6-9a14-bdfaaf8afa60:png"
  "0ebbf449-5000-4139-bab6-e0bcb60b10ce:png"
  "be947a2b-5f48-45af-ac7b-da3d34636489:png"
  "b985d4e3-087c-4f5c-a892-4a87f83161c9:png"
  "3849ae18-20de-4cc7-bc88-ac3a0f523df6:svg"
  "4ddd0d57-07fb-4a37-be50-a6f2f48d4f67:svg"
  "afe12c14-1fee-4e0a-afc6-62b3afdb2213:svg"

  # Page 25 — using full screenshot since page is too complex
  "99efbd5d-5cbb-49d7-bd7b-d14479f47465:png"

  # Page 26
  "47ca4289-e7d1-48e6-b2ff-7d4b6c4245e2:png"
  "26ce8afa-033f-4327-b7c0-7353a2e384a9:png"
  "a46f2644-b834-43df-8389-dc4a133771db:png"
  "7fb068a0-ee93-4ab9-97e6-8d7c9a73aab2:png"
  "4788c46b-a862-4092-b6b5-59261520d643:png"
  "d3f6f5ea-6bf7-49c2-aec7-286690fb8f49:png"
  "657f41f7-7ff8-414b-bcf3-644f2a44eb43:png"
  "6328143d-429c-40f6-8313-73a014b22282:svg"
  "2776fdfa-0670-4afe-a233-bc772077b953:svg"
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
  # Conversely: if .png was guessed but file IS SVG, rename to svg
  if [ "$ext" = "png" ] && head -c 256 "$out" | grep -q "<svg\|<?xml"; then
    mv "$out" "public/figma/${id}.svg"
    echo "  (was actually svg, renamed)"
  fi
}

export -f download_one
printf '%s\n' "${ASSETS[@]}" | xargs -P 12 -I {} bash -c 'download_one "$@"' _ {}

# Cleanup pass: any .png file that's actually an SVG gets renamed.
for f in public/figma/*.png; do
  if head -c 256 "$f" 2>/dev/null | grep -q "<svg\|<?xml"; then
    new="${f%.png}.svg"
    mv "$f" "$new"
    echo "rename $f -> $new"
  fi
done

echo "done"
