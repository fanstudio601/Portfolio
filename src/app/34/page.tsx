import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/c015ea72-7022-49f7-b46b-f5a3e42fcf7d.png";
const SCREENSHOT = "/figma/c82b8247-1419-4fa0-8be3-5cfde967d66c.png";
const DIVIDER = "/figma/f215c21b-f5a5-4bec-860b-98e86442b690.svg";
const ARROW = "/figma/5f4e6b50-aa20-42cb-9f67-bcdf8014e373.svg";

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

export default function Page34() {
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

      {/* Section title with 02-3 chip */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div className="anim-scale-in" style={{ animationDelay: "0.1s" }}>
          <SectionChip id="02-3" />
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          其他外延尝试二：组件库引用 + Figma Make
        </p>
      </div>

      {/* Card 1: 主要干嘛？ */}
      <div
        className="absolute flex flex-col gap-4 items-start p-6 rounded-2xl anim-fade-up"
        style={{
          left: 80,
          top: 386,
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
          在 Figma 内基于设计稿或组件库快速生成页面结果，更偏原型和页面草稿的探索。
        </p>
      </div>

      {/* Card 2: 总结 */}
      <div
        className="absolute flex flex-col gap-4 items-start p-6 rounded-2xl anim-fade-up"
        style={{
          left: 80,
          top: 580,
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
          适合在设计侧快速试方向、试页面、试视觉结果。
        </p>
        <Img src={DIVIDER} alt="" style={{ width: "100%", height: 1 }} />
        <p className="text-[16px] leading-[29px] text-white/70 whitespace-nowrap">
          不过即使引用了组件库，也还是需要人补很多规则
        </p>
        <Img src={DIVIDER} alt="" style={{ width: "100%", height: 1 }} />
        <p className="text-[16px] leading-[29px] text-white/70 whitespace-nowrap">
          Figma Make 停在设计侧，MCP → IDE 会进入实现侧
        </p>
      </div>

      {/* Big screenshot (right) */}
      <div
        className="absolute anim-fade-left"
        style={{
          left: 656,
          top: 292,
          width: 1183.839,
          height: 677.362,
          animationDelay: "0.45s",
        }}
      >
        <div
          className="w-full h-full rounded-2xl overflow-hidden"
          style={{ border: "3px solid #2d2d2d" }}
        >
          <Img
            src={SCREENSHOT}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Hand-drawn arrow */}
      <div
        className="absolute anim-fade-in"
        style={{
          left: 567,
          top: 458.04,
          width: 130,
          height: 473.419,
          animationDelay: "0.7s",
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div style={{ transform: "scaleY(-1) rotate(173deg)" }}>
            <Img
              src={ARROW}
              alt=""
              style={{ width: 73.52, height: 467.948 }}
            />
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
