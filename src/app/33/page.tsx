import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/63d73ab4-d688-423b-9715-c2d2af694fad.png";
const SCREENSHOT_BIG = "/figma/df8cb814-7fd7-448a-9671-f8cc47cdb1b7.png";
const SCREENSHOT_SMALL = "/figma/2a2bccf1-fae8-4ad8-a3e8-9076fb15bfa5.png";
const PHONE_MOCK = "/figma/9fe52227-ad40-4f12-b8f4-6304a67c15af.png";
const DIVIDER = "/figma/18ddbe84-f963-450d-9cc2-8128f2930b4c.svg";
const ARROW = "/figma/ba59a2d4-9c9f-4b35-93be-e57ab3c26ee8.svg";

const SectionChip = ({ id }: { id: string }) => (
  <div
    className="inline-flex items-center justify-center px-4 py-1.5 rounded-full"
    style={{
      background: "#2d2d2d",
      height: 56,
      boxShadow:
        "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
    }}
  >
    <span className="font-display italic font-bold text-[24px] text-white/50">
      {id}
    </span>
  </div>
);

const EmojiPill = ({ emoji }: { emoji: string }) => (
  <div
    className="flex items-center justify-center rounded-full shrink-0"
    style={{
      width: 23.485,
      height: 23.485,
      background: "#2d2d2d",
      boxShadow:
        "inset 0 -1.678px 1.678px 0 rgba(0,0,0,0.25), inset 0 1.678px 2.097px 0 #3f3e44",
    }}
  >
    <span className="font-display italic font-bold text-[12px] leading-none text-[#f7f8fa]">
      {emoji}
    </span>
  </div>
);

export default function Page33() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="AI编程时代，对设计系统的重新理解"
        right={
          <div
            className="rounded-full overflow-hidden anim-fade-down"
            style={{
              width: 36,
              height: 36,
              border: "2px solid rgba(255,255,255,0.5)",
              animationDelay: "0.1s",
            }}
          >
            <Img src={AVATAR} alt="" className="w-full h-full object-cover" />
          </div>
        }
      />

      {/* Section title with 02-2 chip */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div className="anim-scale-in" style={{ animationDelay: "0.1s" }}>
          <SectionChip id="02-2" />
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          其他外延尝试一：Figma → MCP → IDE
        </p>
      </div>

      {/* Card 1: 主要干嘛？ */}
      <div
        className="absolute flex flex-col gap-4 items-start p-6 rounded-2xl anim-fade-up"
        style={{
          left: 80,
          top: 292,
          width: 484,
          background: "rgba(255,255,255,0.02)",
          border: "0.919px solid rgba(255,255,255,0.2)",
          animationDelay: "0.3s",
        }}
      >
        <div className="flex gap-3 items-center">
          <EmojiPill emoji="🤔" />
          <p className="font-hei font-bold text-[18px] leading-8 text-white/90 whitespace-nowrap">
            主要干嘛？
          </p>
        </div>
        <p className="text-[16px] leading-[29px] text-white/70 w-full">
          把设计稿的变量和页面结构带进 IDE，让 AI
          在实现环境里读取这些设计信息，再继续做页面还原和功能开发。
        </p>
      </div>

      {/* Card 2: 总结 */}
      <div
        className="absolute flex flex-col gap-4 items-start p-6 rounded-2xl anim-fade-up"
        style={{
          left: 80,
          top: 486,
          width: 484,
          background: "rgba(255,255,255,0.02)",
          border: "0.919px solid rgba(255,255,255,0.2)",
          animationDelay: "0.4s",
        }}
      >
        <div className="flex gap-3 items-center">
          <EmojiPill emoji="🎯" />
          <p className="font-hei font-bold text-[18px] leading-8 text-white/90 whitespace-nowrap">
            总结
          </p>
        </div>
        <p className="text-[16px] leading-[29px] text-white/70 w-full">
          适合已经有现成设计资产，希望缩短“设计稿 → 前端实现”
        </p>
        <Img src={DIVIDER} alt="" style={{ width: "100%", height: 1 }} />
        <p className="text-[16px] leading-[29px] text-white/70 w-full">
          它解决的是把设计带进开发
        </p>
      </div>

      {/* Big screenshot (top-right) */}
      <div
        className="absolute anim-fade-left"
        style={{
          left: 653,
          top: 261,
          width: 851,
          height: 505,
          animationDelay: "0.45s",
        }}
      >
        <div
          className="w-full h-full rounded-2xl overflow-hidden"
          style={{ border: "3px solid #2d2d2d" }}
        >
          <Img
            src={SCREENSHOT_BIG}
            alt=""
            className="w-full h-full"
            style={{
              height: "109.28%",
              width: "103.76%",
              marginLeft: "-2%",
              marginTop: "-4.64%",
              maxWidth: "none",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Smaller screenshot (bottom-right) */}
      <div
        className="absolute anim-fade-left"
        style={{
          left: 1122,
          top: 612,
          width: 686,
          height: 375,
          animationDelay: "0.55s",
        }}
      >
        <div
          className="w-full h-full rounded-2xl overflow-hidden"
          style={{ border: "3px solid #2d2d2d" }}
        >
          <Img
            src={SCREENSHOT_SMALL}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Phone mock (bottom-left) */}
      <div
        className="absolute anim-fade-up"
        style={{
          left: 80,
          top: 723,
          width: 183.941,
          height: 245.254,
          animationDelay: "0.6s",
        }}
      >
        <div
          className="w-full h-full rounded-lg overflow-hidden"
          style={{ border: "2px solid #2d2d2d" }}
        >
          <Img
            src={PHONE_MOCK}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Hand-drawn arrow */}
      <div
        className="absolute anim-fade-in"
        style={{
          left: 1514.98,
          top: 436.52,
          width: 164.983,
          height: 180.95,
          animationDelay: "0.7s",
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div style={{ transform: "scaleY(-1) rotate(173deg)" }}>
            <Img
              src={ARROW}
              alt=""
              style={{ width: 146.039, height: 164.378 }}
            />
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
