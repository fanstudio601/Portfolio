import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { Signature } from "@/components/Signature";
import { Img } from "@/components/Img";
import { MouseParallax } from "@/components/MouseParallax";

type IconItem = {
  icon: string;
  label: string;
  extraRight?: string;
};

const CENTER_ITEMS: IconItem[] = [
  {
    icon: "/figma/c916b7fc-2696-434f-aa0e-ea1bbb44e32a.svg",
    label: "18660557495",
  },
  {
    icon: "/figma/e7b9a8bf-3ef8-4b0b-bf64-4a3c3ba3f43a.svg",
    label: "vanvan_0422 (范米花儿)",
    extraRight: "/figma/contact-avatar.png",
  },
  {
    icon: "/figma/bb54b995-04e0-42d0-931c-970337246ae6.svg",
    label: "fan422601@gmail.com",
  },
];

const PORTFOLIO_LETTERS = "Portfolio".split("");

export default function Home() {
  return (
    <PageFrame>
      <MouseParallax>
        {/* Stripes follow the mouse horizontally for a slow 3D feel */}
        <div
          className="parallax-layer absolute inset-0"
          style={
            { "--ix": "1.4", "--iy": "0.5" } as React.CSSProperties
          }
        >
          <Stripes coverage="full" />
        </div>

        {/* Signature fades up then floats softly */}
        <div
          className="anim-fade-then-float"
          style={{ animationDelay: "0.4s" }}
        >
          <Signature x={787} y={297} />
        </div>

        {/* Big PORTFOLIO title — letter-by-letter clip-path reveal */}
        <h1
          className="absolute left-1/2 -translate-x-1/2 text-white font-display font-bold text-center whitespace-nowrap select-none flex"
          style={{
            top: 429,
            fontSize: 200,
            lineHeight: "200px",
            letterSpacing: "-0.02em",
          }}
        >
          {PORTFOLIO_LETTERS.map((char, i) => (
            <span
              key={i}
              className="inline-block anim-reveal"
              style={{
                animationDelay: `${0.7 + i * 0.08}s`,
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Bottom contact bar slides up after title finishes */}
        <div
          className="absolute left-0 w-[1920px] flex items-center anim-fade-up"
          style={{
            top: 949,
            height: 132,
            background: "#101012",
            borderTop: "1px solid rgba(255,255,255,0.5)",
            borderBottom: "1px solid rgba(255,255,255,0.5)",
            boxShadow: "inset 0px 2px 2px 0px #3f3e44",
            animationDelay: "1.4s",
          }}
        >
          {/* Left: UI/UX Designer */}
          <div
            className="absolute left-[72px] top-[55px] flex items-center gap-2 anim-fade-right"
            style={{ animationDelay: "1.7s" }}
          >
            <Img
              src="/figma/f43fdbc9-ee1c-4ca9-ae0b-99e169fbf0b3.svg"
              alt=""
              className="w-[18px] h-[18px]"
            />
            <span className="text-[16px] leading-[20px] text-white/80">
              6年 UI/UX Designer
            </span>
          </div>

          {/* Center group */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[56px] flex items-center justify-between w-[1005px]">
            {CENTER_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 anim-fade-up"
                style={{ animationDelay: `${1.8 + i * 0.1}s` }}
              >
                <Img
                  src={item.icon}
                  alt=""
                  className="w-[18px] h-[18px]"
                />
                <span className="text-[16px] leading-[20px] text-white/80">
                  {item.label}
                </span>
                {item.extraRight && (
                  <Img
                    src={item.extraRight}
                    alt=""
                    className="w-5 h-5 rounded-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right: 北京 */}
          <div
            className="absolute left-[1709px] top-[55px] flex items-center gap-2 anim-fade-left"
            style={{ animationDelay: "1.7s" }}
          >
            <Img
              src="/figma/765cc204-ffbc-4606-b9ab-91058cc1ae2d.svg"
              alt=""
              className="w-[18px] h-[18px]"
            />
            <span className="text-[16px] leading-[20px] text-white">北京</span>
          </div>

          {/* Vertical dashed gradient dividers */}
          <Img
            src="/figma/ea5c04f6-ce90-42cc-9ac6-f189ac5661eb.svg"
            alt=""
            className="absolute anim-fade-in"
            style={{
              left: 382,
              top: 23,
              width: 1,
              height: 85,
              animationDelay: "2.1s",
            }}
          />
          <Img
            src="/figma/ea5c04f6-ce90-42cc-9ac6-f189ac5661eb.svg"
            alt=""
            className="absolute anim-fade-in"
            style={{
              left: 1551,
              top: 23,
              width: 1,
              height: 85,
              animationDelay: "2.1s",
            }}
          />
        </div>
      </MouseParallax>
    </PageFrame>
  );
}
