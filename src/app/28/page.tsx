import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/eaf7cc0b-10d5-4e3f-9c61-1449a3abe42e.png";
const ARROW_FLAT = "/figma/a50b3f3d-b19c-4628-ba28-1040a5a0c535.svg";
const DASH_VERT = "/figma/627d877a-48f9-4d17-ab32-8a2412cf1666.svg";

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
  tag?: string;
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
      {card.tag ? (
        <div className="flex items-center justify-between w-full">
          <p className="font-hei font-bold text-[18px] leading-9 text-white/90">
            {card.title}
          </p>
          <div
            className="inline-flex items-center justify-center px-1.5 rounded-md"
            style={{ background: "#262626", height: 24 }}
          >
            <p
              className="text-[14px] leading-[29px] text-white/70 whitespace-nowrap"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              {card.tag}
            </p>
          </div>
        </div>
      ) : (
        <p className="font-hei font-bold text-[18px] leading-9 text-white/90">
          {card.title}
        </p>
      )}
      <p className="text-[16px] leading-[29px] text-white/70">{card.body}</p>
    </div>
    <SmallNumberChip n={card.n} />
  </div>
);

const SOLVE_CARDS: Card[] = [
  {
    n: "01",
    title: "统一视觉表达",
    body: "收敛视觉语言和交互范式，确保不同模块、迭代下的界面尽可能一致",
    delay: 0.5,
  },
  {
    n: "02",
    title: "提高产研复用效率",
    body: "沉淀高质量的、可直接复用的设计资产和代码组件，减少“重复造轮子”",
    delay: 0.6,
  },
  {
    n: "03",
    title: "降低协作成本",
    body: "团队提供一套“通用语言”，把抽象的设计意图转成可执行的协作规则",
    delay: 0.7,
  },
];

const CONTAIN_CARDS: Card[] = [
  {
    n: "01",
    title: "视觉基础",
    body: "颜色、字体、间距、阴影等基础样式规则",
    tag: "Design Tokens",
    delay: 0.55,
  },
  {
    n: "02",
    title: "基础组件",
    body: "按钮、输入框、下拉、表格、弹窗等通用组件",
    tag: "Components",
    delay: 0.65,
  },
  {
    n: "03",
    title: "页面模式",
    body: "表单页、列表页、详情页等常见页面结构",
    tag: "Patterns",
    delay: 0.75,
  },
  {
    n: "04",
    title: "规范文档",
    body: "组件怎么用、什么时候用、有哪些注意事项等",
    tag: "Files",
    delay: 0.85,
  },
];

export default function Page28() {
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
            <Img
              src={AVATAR}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Section title with 01-1 chip */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div className="anim-scale-in" style={{ animationDelay: "0.1s" }}>
          <SectionChip id="01-1" />
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          回溯：传统设计系统
        </p>
      </div>

      {/* Left: 设计 / 开发 stacked circles */}
      <div
        className="absolute flex flex-col items-start anim-scale-in"
        style={{ left: 143, top: 408, width: 200, animationDelay: "0.4s" }}
      >
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 200,
            height: 200,
            marginBottom: -32,
            background: "rgba(255,255,255,0.02)",
            border: "0.919px solid rgba(255,255,255,0.2)",
          }}
        >
          <p className="font-hei font-bold text-[36px] leading-10 text-white">
            设计
          </p>
        </div>
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 200,
            height: 200,
            background: "rgba(255,255,255,0.02)",
            border: "0.919px solid rgba(255,255,255,0.2)",
          }}
        >
          <p className="font-hei font-bold text-[36px] leading-10 text-white">
            开发
          </p>
        </div>
      </div>

      {/* Arrow between left circles and column */}
      <Img
        src={ARROW_FLAT}
        alt=""
        className="absolute anim-fade-right"
        style={{
          left: 440,
          top: 585,
          width: 269,
          height: 12,
          animationDelay: "0.5s",
        }}
      />
      <p
        className="absolute text-[16px] leading-none text-[#f7f8fa] whitespace-nowrap anim-fade-up"
        style={{ left: 469, top: 551, animationDelay: "0.6s" }}
      >
        让“人”与“人”在协作中更一致
      </p>

      {/* Vertical dashed separator between two columns */}
      <Img
        src={DASH_VERT}
        alt=""
        className="absolute anim-fade-in"
        style={{
          left: 1294,
          top: 278,
          width: 1,
          height: 625,
          animationDelay: "0.4s",
        }}
      />

      {/* Column 1: 🤔 解决什么？ */}
      <div
        className="absolute flex flex-col items-center gap-8"
        style={{ left: 829, top: 278, width: 375 }}
      >
        <p
          className="font-hei font-bold text-[24px] leading-[29px] text-white/90 text-center w-full anim-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          🤔 解决什么？
        </p>
        {SOLVE_CARDS.map((c) => (
          <Card key={c.n} card={c} />
        ))}
      </div>

      {/* Column 2: 📁 包含什么？ */}
      <div
        className="absolute flex flex-col items-center gap-8"
        style={{ left: 1385, top: 278, width: 375 }}
      >
        <p
          className="font-hei font-bold text-[24px] leading-[29px] text-white/90 text-center w-full anim-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          📁 包含什么？
        </p>
        {CONTAIN_CARDS.map((c) => (
          <Card key={c.n} card={c} />
        ))}
      </div>
    </PageFrame>
  );
}
