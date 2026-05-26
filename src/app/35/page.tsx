import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/8c4f4efd-eae6-4012-a15d-205e6dd9d0e0.png";
const SCREENSHOT_TOP = "/figma/6b6132d0-1de3-4ff5-a112-8ff04c8f210f.png";
const SCREENSHOT_BOTTOM = "/figma/686ba8ab-7829-495f-b74f-4f17bc41b995.png";
const DIVIDER = "/figma/4a81b0ac-2d6e-4c21-af9d-c75432bbde68.svg";
const ARROW = "/figma/0bdaa6e5-bae0-4df7-9627-2ad2d95c68b3.svg";

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

export default function Page35() {
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

      {/* Section title with 02-4 chip */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div className="anim-scale-in" style={{ animationDelay: "0.1s" }}>
          <SectionChip id="02-4" />
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          其他外延尝试三：NPM组件包
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
          把自己的设计系统做成组件包，在开发中直接调用，再基于这套真实组件继续做页面。
        </p>
      </div>

      {/* Card 2: 总结 */}
      <div
        className="absolute flex flex-col gap-4 items-start p-6 rounded-2xl anim-fade-up"
        style={{
          left: 80,
          top: 580.5,
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
          适合已经有企业组件系统，希望结果尽量落在已有组件范围内的场景。
        </p>
        <Img src={DIVIDER} alt="" style={{ width: "100%", height: 1 }} />
        <p className="text-[16px] leading-[29px] text-white/70 whitespace-nowrap">
          它能解决“用哪些组件”，但解决不了“页面怎么排”。
        </p>
      </div>

      {/* Top screenshot */}
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
            src={SCREENSHOT_TOP}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom screenshot */}
      <div
        className="absolute anim-fade-left"
        style={{
          left: 1122,
          top: 630,
          width: 686,
          height: 357,
          animationDelay: "0.55s",
        }}
      >
        <div
          className="w-full h-full rounded-2xl overflow-hidden"
          style={{ border: "3px solid #2d2d2d" }}
        >
          <Img
            src={SCREENSHOT_BOTTOM}
            alt=""
            className="w-full h-full"
            style={{
              height: "114.36%",
              marginTop: "-14.29%",
              maxWidth: "none",
              objectFit: "cover",
            }}
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
