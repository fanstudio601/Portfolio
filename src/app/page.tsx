import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { Signature } from "@/components/Signature";
import { Img } from "@/components/Img";

type IconItem = {
  icon: string;
  label: string;
  bright?: boolean;
  extraRight?: string;
};

const CONTACT_ITEMS: IconItem[] = [
  {
    icon: "/figma/f43fdbc9-ee1c-4ca9-ae0b-99e169fbf0b3.svg",
    label: "6年 UI/UX Designer",
  },
  {
    icon: "/figma/c916b7fc-2696-434f-aa0e-ea1bbb44e32a.svg",
    label: "18660557495",
  },
  {
    icon: "/figma/e7b9a8bf-3ef8-4b0b-bf64-4a3c3ba3f43a.svg",
    label: "vanvan_0422 (范米花儿)",
    extraRight: "/figma/9ddf4fef-c817-4c7f-805d-b2dc8ac2debb.png",
  },
  {
    icon: "/figma/bb54b995-04e0-42d0-931c-970337246ae6.svg",
    label: "fan422601@gmail.com",
  },
  {
    icon: "/figma/765cc204-ffbc-4606-b9ab-91058cc1ae2d.svg",
    label: "北京",
    bright: true,
  },
];

export default function Home() {
  return (
    <PageFrame>
      <Stripes coverage="full" />

      <Signature x={787} y={297} />

      <h1
        className="absolute left-1/2 -translate-x-1/2 text-white font-display font-bold text-center whitespace-nowrap select-none"
        style={{
          top: 429,
          fontSize: 200,
          lineHeight: "200px",
          letterSpacing: "-0.02em",
        }}
      >
        Portfolio
      </h1>

      {/* Bottom contact bar */}
      <div
        className="absolute left-0 w-[1920px] flex items-center"
        style={{
          top: 949,
          height: 132,
          background: "#101012",
          borderTop: "1px solid rgba(255,255,255,0.5)",
          borderBottom: "1px solid rgba(255,255,255,0.5)",
          boxShadow: "inset 0px 2px 2px 0px #3f3e44",
        }}
      >
        {/* Left: UI/UX Designer */}
        <div className="absolute left-[72px] top-[55px] flex items-center gap-2">
          <Img src={CONTACT_ITEMS[0].icon} alt="" className="w-[18px] h-[18px]" />
          <span className="text-[16px] leading-[20px] text-white/80">
            {CONTACT_ITEMS[0].label}
          </span>
        </div>

        {/* Center group: phone, wechat, email */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[56px] flex items-center justify-between w-[1005px]">
          <div className="flex items-center gap-2">
            <Img
              src={CONTACT_ITEMS[1].icon}
              alt=""
              className="w-[18px] h-[18px]"
            />
            <span className="text-[16px] leading-[20px] text-white/80">
              {CONTACT_ITEMS[1].label}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Img
              src={CONTACT_ITEMS[2].icon}
              alt=""
              className="w-[18px] h-[18px]"
            />
            <span className="text-[16px] leading-[20px] text-white/80">
              {CONTACT_ITEMS[2].label}
            </span>
            {CONTACT_ITEMS[2].extraRight && (
              <Img
                src={CONTACT_ITEMS[2].extraRight}
                alt=""
                className="w-5 h-5 rounded-full object-cover"
              />
            )}
          </div>
          <div className="flex items-center gap-2 justify-end">
            <Img
              src={CONTACT_ITEMS[3].icon}
              alt=""
              className="w-[18px] h-[18px]"
            />
            <span className="text-[16px] leading-[20px] text-white/80">
              {CONTACT_ITEMS[3].label}
            </span>
          </div>
        </div>

        {/* Right: 北京 */}
        <div className="absolute left-[1709px] top-[55px] flex items-center gap-2">
          <Img
            src={CONTACT_ITEMS[4].icon}
            alt=""
            className="w-[18px] h-[18px]"
          />
          <span className="text-[16px] leading-[20px] text-white">
            {CONTACT_ITEMS[4].label}
          </span>
        </div>

        {/* Vertical divider lines */}
        <div
          className="absolute"
          style={{
            left: 382,
            top: 23,
            width: 1,
            height: 85,
            background: "rgba(255,255,255,0.2)",
          }}
        />
        <div
          className="absolute"
          style={{
            left: 1551,
            top: 23,
            width: 1,
            height: 85,
            background: "rgba(255,255,255,0.2)",
          }}
        />
      </div>
    </PageFrame>
  );
}
