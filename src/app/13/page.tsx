import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const NumberedStep = ({ n, text }: { n: number; text: string }) => (
  <div
    className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg"
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid #28282a",
    }}
  >
    <span className="font-display italic font-bold text-[16px] text-white/50">
      {n}.
    </span>
    <span className="text-[18px] leading-[26px] text-white/90">{text}</span>
  </div>
);

const Arrow = () => (
  <Img
    src="/figma/0bf6bb6d-3ea4-4247-a498-7b0f2c57677d.svg"
    alt=""
    className="block shrink-0"
    style={{ width: 40, height: 6 }}
  />
);

/* The three tilted overlapping dashboard previews on the right side. */
const TiltedCard = ({
  src,
  left,
  top,
  borderColor,
  opacity = 1,
  shadow,
}: {
  src: string;
  left: number;
  top: number;
  borderColor: string;
  opacity?: number;
  shadow?: string;
}) => (
  <div
    className="absolute flex items-center justify-center"
    style={{ left, top, width: 550, height: 789 }}
  >
    <div style={{ transform: "skewX(5deg) rotate(-3deg)" }}>
      <div
        className="overflow-hidden"
        style={{
          width: 443,
          height: 773,
          borderRadius: 20,
          border: `10px solid ${borderColor}`,
          opacity,
          boxShadow: shadow,
        }}
      >
        <Img src={src} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

export default function Page13() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="图表组件库与Figma看板插件"
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
            <Img
              src="/figma/4c6570a8-e7d7-4868-aa84-aa6a1abf046d.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Tilted dashboard previews on the right - slide in from right */}
      <div className="anim-fade-left" style={{ animationDelay: "0.3s" }}>
        <TiltedCard
          src="/figma/2086f803-67a3-4fd9-a596-920a93dadfea.png"
          left={918}
          top={434}
          borderColor="rgba(232,242,255,0.3)"
          opacity={0.3}
        />
      </div>
      <div className="anim-fade-left" style={{ animationDelay: "0.4s" }}>
        <TiltedCard
          src="/figma/b8231b5b-7bd7-4c81-81b0-9c6e80bbfedf.png"
          left={1603}
          top={346}
          borderColor="rgba(232,242,255,0.3)"
          opacity={0.3}
          shadow="-4px 0 4px rgba(0,0,0,0.08)"
        />
      </div>
      <div className="anim-fade-left" style={{ animationDelay: "0.5s" }}>
        <TiltedCard
          src="/figma/1f999119-f883-465a-9a90-29ba6865012b.png"
          left={1163}
          top={274}
          borderColor="#353a41"
          shadow="0 5px 42px rgba(0,0,0,0.35)"
        />
      </div>

      {/* Section tag */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 80, top: 157, animationDelay: "0.15s" }}
      >
        <div
          className="inline-flex items-center rounded-lg px-3 py-1 text-[16px] leading-6 text-white font-hei font-bold"
          style={{
            background: "#2d2d2d",
            boxShadow: "inset 0 1px 1px 0 #5b5a61",
          }}
        >
          可视化组件 × 插件工具
        </div>
      </div>

      {/* Project title with logo */}
      <div
        className="absolute flex items-center gap-3 anim-fade-up"
        style={{ left: 80, top: 278, animationDelay: "0.25s" }}
      >
        <div
          className="rounded-full overflow-hidden"
          style={{
            width: 36,
            height: 36,
            border: "1px solid rgba(255,255,255,0.58)",
          }}
        >
          <Img
            src="/figma/9b6bcc14-5547-431b-b760-92fa680f97ff.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-hei font-bold text-[32px] leading-[78px] text-white whitespace-pre">
          图表组件库 与 Figma看板插件
        </p>
      </div>

      {/* Big title — clipped-reveal effect */}
      <h1
        className="absolute font-hei font-bold text-white whitespace-nowrap anim-reveal"
        style={{
          left: 80,
          top: 372,
          fontSize: 73,
          lineHeight: "78px",
          animationDelay: "0.4s",
        }}
      >
        我会怎么讲？
      </h1>

      {/* Accent line under title */}
      <Img
        src="/figma/3f53df84-ee50-4c8d-acde-0ffc82775fb9.svg"
        alt=""
        className="absolute anim-fade-right"
        style={{
          left: 80,
          top: 502,
          width: 630,
          height: 15,
          animationDelay: "0.7s",
        }}
      />

      {/* Bullet points */}
      <div
        className="absolute flex items-center gap-2 anim-fade-up"
        style={{ left: 80, top: 569, animationDelay: "0.85s" }}
      >
        <div className="w-8 h-8 flex items-center justify-center text-white/70">
          ✕
        </div>
        <p className="text-[20px] leading-9 text-white/80">
          我不会按照上一个项目讲如何跟AI沟通的实现过程
        </p>
      </div>
      <div
        className="absolute flex items-center gap-2 anim-fade-up"
        style={{ left: 80, top: 617, animationDelay: "0.95s" }}
      >
        <div className="w-8 h-8 flex items-center justify-center text-white/70">
          ✓
        </div>
        <p className="text-[20px] leading-9 text-white/80">
          我更想记录的是，一种
          <span className="font-hei font-bold text-[24px] text-white anim-shimmer inline-block">
            “持续沉淀”
          </span>
        </p>
      </div>

      {/* Description */}
      <p
        className="absolute font-hei font-bold text-[30px] text-white whitespace-nowrap anim-fade-up"
        style={{
          left: 80,
          top: 683,
          lineHeight: "56px",
          animationDelay: "1.1s",
        }}
      >
        不再重复造轮子，把高频图表沉淀成可复用资产
      </p>

      {/* Roadmap — stagger steps */}
      <div
        className="absolute flex flex-col gap-5"
        style={{ left: 85, top: 905, width: 787 }}
      >
        <p
          className="text-[18px] leading-9 text-white/70 anim-fade-up"
          style={{ animationDelay: "1.3s" }}
        >
          所以，后面的内容，我会按照2大部分来展开：
        </p>
        <div className="flex gap-2 items-center">
          <div className="anim-fade-up" style={{ animationDelay: "1.45s" }}>
            <NumberedStep n={1} text="沉淀成图表组件库" />
          </div>
          <div className="anim-fade-in" style={{ animationDelay: "1.6s" }}>
            <Arrow />
          </div>
          <div className="anim-fade-up" style={{ animationDelay: "1.7s" }}>
            <NumberedStep n={2} text="扩展为工具化插件并不断迭代" />
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
