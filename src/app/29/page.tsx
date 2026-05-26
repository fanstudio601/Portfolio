import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/113b3f61-231f-4c4c-969a-a38c44b515f3.png";
const ARROW_FLAT = "/figma/2287acbb-88f4-4161-be22-bbaa4378b71a.svg";
const DASH_VERT = "/figma/d234828c-aae2-4af2-9b06-aecaa7d6f08d.svg";

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

const SmallNumberChip = ({ n }: { n: string }) => (
  <div
    className="absolute flex items-center justify-center"
    style={{
      left: -27.72,
      top: -27.72,
      width: 36.451,
      height: 36.451,
    }}
  >
    <div style={{ transform: "rotate(-20deg)" }}>
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: 28.439,
          height: 28.439,
          background: "#2d2d2d",
          boxShadow:
            "inset 0 -2.031px 2.031px 0 rgba(0,0,0,0.25), inset 0 2.031px 2.539px 0 #3f3e44",
        }}
      >
        <span className="font-display italic font-bold text-[12.188px] leading-none text-[#f7f8fa]">
          {n}
        </span>
      </div>
    </div>
  </div>
);

type Card = {
  n: string;
  title: string;
  body: string;
  delay: number;
};

const Card = ({ card }: { card: Card }) => (
  <div
    className="relative w-full p-6 rounded-2xl anim-fade-up"
    style={{
      background: "rgba(255,255,255,0.02)",
      border: "0.919px solid rgba(255,255,255,0.2)",
      animationDelay: `${card.delay}s`,
    }}
  >
    <div className="flex flex-col gap-1 items-start">
      <p className="font-hei font-bold text-[18px] leading-9 text-white/90">
        {card.title}
      </p>
      <p className="text-[16px] leading-[29px] text-white/70">{card.body}</p>
    </div>
    <SmallNumberChip n={card.n} />
  </div>
);

const POSITIVE: Card[] = [
  {
    n: "01",
    title: "更快的结果产出",
    body: "很多想法可以先快速做出结果，再围绕需求、内容和方向继续迭代",
    delay: 0.5,
  },
  {
    n: "02",
    title: "更近的设计与实现",
    body: "设计不再只停留在交付稿里，可以通过MCP等形式，更早进入真实页面和真实流程",
    delay: 0.6,
  },
  {
    n: "03",
    title: "更直接的资产利用",
    body: "停留在软件里的组件、样式和结构信息，可以成为 AI 直接调用的资源",
    delay: 0.7,
  },
];

const NEGATIVE: Card[] = [
  {
    n: "01",
    title: "AI 自由发挥，带来的一致性失控",
    body: "即使有一定的规范，但在多轮对话和有限的上下文内，会出现结果的漂移",
    delay: 0.55,
  },
  {
    n: "02",
    title: "缺少设计判断，带来的结构偏差",
    body: "可以基于组件快速拼页面，但对于模块关系、信息主次等未必合理",
    delay: 0.65,
  },
  {
    n: "03",
    title: "面向单页生成，带来的流程断裂",
    body: "对完整流程的设计、跨页面的衔接和整体体验的处理不够细腻",
    delay: 0.75,
  },
];

const Bubble = ({ label, delay }: { label: string; delay: number }) => (
  <div
    className="flex items-center justify-center rounded-full"
    style={{
      width: 200,
      height: 200,
      background: "rgba(255,255,255,0.02)",
      border: "0.919px solid rgba(255,255,255,0.2)",
      animationDelay: `${delay}s`,
    }}
  >
    <p className="font-hei font-bold text-[36px] leading-10 text-white">
      {label}
    </p>
  </div>
);

export default function Page29() {
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

      {/* Section title with 01-2 chip */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div className="anim-scale-in" style={{ animationDelay: "0.1s" }}>
          <SectionChip id="01-2" />
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          思考：当 AI 开始参与之后呢？
        </p>
      </div>

      {/* Left venn-style three circles */}
      <div
        className="absolute flex flex-col items-center"
        style={{ left: 89, top: 420, width: 360 }}
      >
        <div
          className="anim-scale-in"
          style={{ marginBottom: -57, animationDelay: "0.35s" }}
        >
          <Bubble label="设计" delay={0.35} />
        </div>
        <div className="flex items-center w-full">
          <div
            className="anim-scale-in"
            style={{ marginRight: -40, animationDelay: "0.45s" }}
          >
            <Bubble label="开发" delay={0.45} />
          </div>
          <div className="anim-scale-in" style={{ animationDelay: "0.55s" }}>
            <Bubble label="AI" delay={0.55} />
          </div>
        </div>
      </div>

      {/* Caption underneath circles */}
      <div
        className="absolute flex flex-col items-center gap-6 anim-fade-up"
        style={{ left: 479, top: 552, width: 269, animationDelay: "0.7s" }}
      >
        <p className="text-[16px] leading-none text-[#f7f8fa] text-center w-full">
          问题开始从“统一结果”
        </p>
        <Img
          src={ARROW_FLAT}
          alt=""
          style={{ width: 269, height: 12 }}
        />
        <p className="text-[16px] leading-none text-[#f7f8fa] text-center w-full">
          走向“影响生成过程”
        </p>
      </div>

      {/* Vertical dashed separator */}
      <Img
        src={DASH_VERT}
        alt=""
        className="absolute anim-fade-in"
        style={{
          left: 1294,
          top: 297,
          width: 1,
          height: 589,
          animationDelay: "0.4s",
        }}
      />

      {/* Column 1: 👍 带来了什么好变化？ */}
      <div
        className="absolute flex flex-col items-center gap-8"
        style={{ left: 829, top: 305, width: 375 }}
      >
        <p
          className="font-hei font-bold text-[24px] leading-[29px] text-white/90 text-center w-full anim-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          👍 带来了什么好变化？
        </p>
        {POSITIVE.map((c) => (
          <Card key={c.n} card={c} />
        ))}
      </div>

      {/* Column 2: 🤔 引发了什么新问题？ */}
      <div
        className="absolute flex flex-col items-center gap-8"
        style={{ left: 1385, top: 305, width: 375 }}
      >
        <p
          className="font-hei font-bold text-[24px] leading-[29px] text-white/90 text-center w-full anim-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          🤔 引发了什么新问题？
        </p>
        {NEGATIVE.map((c) => (
          <Card key={c.n} card={c} />
        ))}
      </div>
    </PageFrame>
  );
}
