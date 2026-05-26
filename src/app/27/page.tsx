import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/5df70a7d-6c25-4530-b16d-aaedcfd9c6f0.png";
const ROW8 = "/figma/73e0fb2b-a1ab-4014-9e1f-a8100927a548.svg";
const CHECK_ICON = "/figma/3e6fee3c-8d8e-4079-9f88-7786a4a25579.svg";
const VECTOR_BG = "/figma/ff1c1c42-eb6e-4601-9544-d68578bff61a.svg";
const VECTOR_OUTLINE = "/figma/77ad1c1d-dcfd-459c-ad71-de79d1c87074.svg";
const QUESTION_ICON = "/figma/2244d36c-9a77-4ba9-b46c-fd595825de43.svg";

type Tag = {
  label: string;
  left: number;
  top: number;
  width: number;
  rotate: number;
  delay: number;
};

const TAGS: Tag[] = [
  { label: "Components", left: 1229, top: 448, width: 196, rotate: -10, delay: 0.7 },
  { label: "Tokens", left: 1454, top: 422, width: 128, rotate: 6.12, delay: 0.78 },
  { label: "IDE", left: 1308, top: 554, width: 85, rotate: 4.12, delay: 0.86 },
  { label: "skills", left: 1447, top: 533, width: 104, rotate: 4.12, delay: 0.94 },
  { label: "Figma MCP", left: 1415, top: 630, width: 174, rotate: -4.92, delay: 1.02 },
  { label: "Stitch", left: 1595, top: 524, width: 121, rotate: 24.74, delay: 1.1 },
  { label: "XXX.md", left: 1635, top: 439, width: 142, rotate: 36.05, delay: 1.18 },
  { label: "...", left: 1462, top: 718, width: 75, rotate: 9.56, delay: 1.26 },
];

const TagChip = ({ tag }: { tag: Tag }) => (
  <div
    className="absolute flex items-center justify-center anim-scale-in"
    style={{
      left: tag.left,
      top: tag.top,
      width: tag.width,
      height: 90,
      animationDelay: `${tag.delay}s`,
    }}
  >
    <div style={{ transform: `rotate(${tag.rotate}deg)` }}>
      <div
        className="inline-flex items-center justify-center px-[22px] rounded-[20px]"
        style={{
          height: 58,
          background: "rgba(255,255,255,0.02)",
          border: "0.919px solid rgba(255,255,255,0.2)",
        }}
      >
        <p className="text-[24px] leading-[38px] text-white whitespace-nowrap font-hei">
          {tag.label}
        </p>
      </div>
    </div>
  </div>
);

export default function Page27() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="AI编程时代，对设计系统的重新理解"
        right={
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: 36,
              height: 36,
              border: "2px solid rgba(255,255,255,0.5)",
            }}
          >
            <Img
              src={AVATAR}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Section tag */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 80, top: 173, animationDelay: "0.15s" }}
      >
        <div
          className="inline-flex items-center rounded-lg px-3 py-1 text-[16px] leading-6 text-white font-hei font-bold"
          style={{
            background: "#2d2d2d",
            boxShadow: "inset 0 1px 1px 0 #5b5a61",
          }}
        >
          设计系统 × AI
        </div>
      </div>

      {/* Big title — clipped reveal */}
      <h1
        className="absolute font-hei font-bold text-white whitespace-nowrap anim-reveal"
        style={{
          left: 80,
          top: 300,
          fontSize: 80,
          lineHeight: "120px",
          animationDelay: "0.3s",
        }}
      >
        当 AI 开始写界面，
      </h1>
      <h1
        className="absolute font-hei font-bold text-white whitespace-nowrap anim-reveal"
        style={{
          left: 80,
          top: 420,
          fontSize: 80,
          lineHeight: "120px",
          animationDelay: "0.5s",
        }}
      >
        我对“设计系统”的再思考
      </h1>

      {/* Accent line under title */}
      <Img
        src={ROW8}
        alt=""
        className="absolute anim-fade-right"
        style={{
          left: 80,
          top: 614,
          width: 960,
          height: 15,
          animationDelay: "0.75s",
        }}
      />

      {/* Bullet points */}
      <div
        className="absolute flex items-center gap-2 anim-fade-up"
        style={{ left: 80, top: 724, animationDelay: "0.9s" }}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <Img
            src={CHECK_ICON}
            alt=""
            className="w-full h-full"
          />
        </div>
        <p className="text-[20px] leading-9 text-white/80">
          前两个模块，更多是在讲了“我做了什么”
        </p>
      </div>
      <div
        className="absolute flex items-center gap-2 anim-fade-up"
        style={{ left: 80, top: 772, animationDelay: "1.0s" }}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <Img
            src={CHECK_ICON}
            alt=""
            className="w-full h-full"
          />
        </div>
        <p className="text-[20px] leading-9 text-white/80">
          这个模块，是基于自己的实践，一部分对设计系统的新想法，一部分梳理我做过的尝试。
        </p>
      </div>

      {/* Right side floating tags + question icon */}
      {/* Background vector decoration */}
      <Img
        src={VECTOR_BG}
        alt=""
        className="absolute anim-fade-in"
        style={{
          left: 952,
          top: 348,
          width: 1050,
          height: 542,
          animationDelay: "0.5s",
        }}
      />
      <Img
        src={VECTOR_OUTLINE}
        alt=""
        className="absolute anim-fade-in"
        style={{
          left: 1078,
          top: 451,
          width: 810,
          height: 387,
          animationDelay: "0.55s",
        }}
      />

      {/* The "?" emoji at top of tag cloud */}
      <p
        className="absolute font-hei font-bold text-[38px] text-white/90 text-center whitespace-nowrap anim-scale-in"
        style={{
          left: 1499,
          top: 328,
          transform: "translateX(-50%)",
          lineHeight: "29px",
          animationDelay: "0.4s",
        }}
      >
        🤔
      </p>

      {/* Floating tags */}
      {TAGS.map((t) => (
        <TagChip key={t.label} tag={t} />
      ))}

      {/* Bottom node circle with question icon — center at (1497, 855) per Figma */}
      <div
        className="absolute anim-scale-in"
        style={{
          left: 1457,
          top: 815,
          width: 80,
          height: 80,
          animationDelay: "1.3s",
        }}
      >
        <div
          className="w-full h-full rounded-full flex items-center justify-center"
          style={{
            background: "#2d2d2d",
            boxShadow:
              "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
          }}
        >
          <Img
            src={QUESTION_ICON}
            alt=""
            style={{ width: 38, height: 38 }}
          />
        </div>
      </div>
    </PageFrame>
  );
}
