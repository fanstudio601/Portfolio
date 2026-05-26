import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/8de32961-2017-4a6f-ad47-554181a2b54e.png";
const PHONE_1 = "/figma/828c4235-6748-4c0a-923b-827b89d092c4.png";
const PHONE_2 = "/figma/db19a2cb-509f-4a0d-bebf-db0e328b6380.png";
const PHONE_3 = "/figma/a1efa846-ebf5-4a5d-ac4d-e1202357dcf5.png";
const BIG_PHONE = "/figma/f4eb8969-811c-4327-a021-48e4b7fc3fdc.png";
const SCREENSHOT = "/figma/e58470aa-f99a-441f-98c4-38f582706c4e.png";
const DIVIDER = "/figma/e8b722bb-4487-4ec3-9bd6-f3112644725a.svg";

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

export default function Page32() {
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

      {/* Section title with 02-1 chip */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div className="anim-scale-in" style={{ animationDelay: "0.1s" }}>
          <SectionChip id="02-1" />
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          我的主要尝试：在IDE内，直接生成与迭代
        </p>
      </div>

      {/* Card 1: 主要干嘛？ */}
      <div
        className="absolute flex flex-col gap-4 items-start p-6 rounded-2xl anim-fade-up"
        style={{
          left: 80,
          top: 292,
          width: 564,
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
          直接在 IDE 里，基于开源组件库、截图参考和 PRD
          生成页面，再通过不断沟通和迭代，继续调整结构、视觉和交互。
        </p>
      </div>

      {/* Card 2: 总结 */}
      <div
        className="absolute flex flex-col gap-4 items-start p-6 rounded-2xl anim-fade-up"
        style={{
          left: 80,
          top: 473,
          width: 564,
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
          适合 0-1 产品设计，快速验证方案等
        </p>
        <Img src={DIVIDER} alt="" style={{ width: "100%", height: 1 }} />
        <p className="text-[16px] leading-[29px] text-white/70 w-full">
          它不是先停在设计稿里，而是直接进入实现环境，最接近真实落地的一种方式。但也因此需要时间和AI对话来优化界面。
        </p>
      </div>

      {/* Phone screenshots row (bottom-left) */}
      {[
        { src: PHONE_1, left: 83, delay: 0.55 },
        { src: PHONE_2, left: 229, delay: 0.65 },
        { src: PHONE_3, left: 375, delay: 0.75 },
      ].map((p) => (
        <div
          key={p.left}
          className="absolute anim-fade-up"
          style={{
            left: p.left,
            top: 735,
            width: 183.941,
            height: 245.254,
            animationDelay: `${p.delay}s`,
          }}
        >
          <div
            className="w-full h-full rounded-lg overflow-hidden"
            style={{
              border: "2px solid #2d2d2d",
              boxShadow: p.left > 100 ? "-4px 0 54px 0 rgba(0,0,0,0.24)" : undefined,
            }}
          >
            <Img src={p.src} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      ))}

      {/* Big screenshot (center-right) */}
      <div
        className="absolute anim-fade-left"
        style={{
          left: 718,
          top: 246,
          width: 918,
          height: 780,
          animationDelay: "0.45s",
        }}
      >
        <div
          className="w-full h-full rounded-[18.4px] overflow-hidden"
          style={{ border: "3.452px solid #2d2d2d" }}
        >
          <Img
            src={SCREENSHOT}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Vertical phone mock (far right) */}
      <div
        className="absolute opacity-80 anim-fade-left"
        style={{
          left: 1663,
          top: 290,
          width: 318.92,
          height: 690,
          animationDelay: "0.55s",
        }}
      >
        <div
          className="w-full h-full rounded-[19.7px] overflow-hidden"
          style={{ border: "0.822px solid #cfc1ad" }}
        >
          <Img
            src={BIG_PHONE}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </PageFrame>
  );
}
