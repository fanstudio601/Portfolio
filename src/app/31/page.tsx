import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/c5ece49a-1e20-4fda-a5b2-ec8026539078.png";
const SCREENSHOT = "/figma/2f4df0c4-b540-4156-8ae3-01e78934e950.png";
const ARROW_TL_BR = "/figma/96ef7961-d850-41c5-bb9e-1f94f11a8ca4.svg"; // bottom-left arrow
const ARROW_TL_BR_SMALL = "/figma/90e91ff8-963b-4de1-aa73-2ad244dc2845.svg"; // top-left arrow
const ARROW_TR_BL = "/figma/e0733ced-1af9-4dc2-b407-b56131514854.svg"; // bottom-right arrow
const ARROW_TR_BL_SMALL = "/figma/67c32670-f6e4-4520-8f9f-332dc2a3dcd9.svg"; // top-right arrow
const VERT_DECOR = "/figma/abd27b08-046c-4820-a5f1-44b8c83f54bd.svg";

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

type SkillCard = {
  n: string;
  title: string;
  tag: string;
  body: string;
  left: number;
  top: number;
  delay: number;
};

const SKILL_CARDS: SkillCard[] = [
  {
    n: "01",
    title: "使用CSV结构化存储",
    tag: "XXX.CSV",
    body: "把 style、color等知识拆到多个 CSV 中，避免全部写进 Markdown。",
    left: 80,
    top: 440,
    delay: 0.4,
  },
  {
    n: "02",
    title: "轻量 Skill 入口",
    tag: "skill-content.md",
    body: "Skill 文档本身不承载全部知识，而是告诉 AI：什么时候调用这个能力、先走哪条流程。",
    left: 80,
    top: 639,
    delay: 0.5,
  },
  {
    n: "03",
    title: "按需搜索（BM25）",
    tag: "search.py",
    body: "先根据任务描述去知识库里找到最相关的规则，而不是重新读完整规范。（可以把MB25理解为字典索引）",
    left: 1377,
    top: 440,
    delay: 0.45,
  },
  {
    n: "04",
    title: "结果压缩",
    tag: "design_system.py",
    body: "把搜索结果进一步组合，生成当前任务可直接使用的 design system 摘要。",
    left: 1377,
    top: 639,
    delay: 0.55,
  },
];

const SkillCard = ({ card }: { card: SkillCard }) => (
  <div
    className="absolute p-6 rounded-2xl anim-fade-up"
    style={{
      left: card.left,
      top: card.top,
      width: 463,
      background: "rgba(255,255,255,0.02)",
      border: "0.919px solid rgba(255,255,255,0.2)",
      animationDelay: `${card.delay}s`,
    }}
  >
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between w-full">
        <p className="flex-1 font-hei font-bold text-[16px] leading-[29px] text-white/90">
          {card.title}
        </p>
        <div
          className="inline-flex items-center justify-center px-1.5 rounded shrink-0"
          style={{ background: "#262626", height: 19.8 }}
        >
          <p
            className="text-[11.6px] leading-6 text-white/70 whitespace-nowrap"
            style={{ fontFamily: "ui-monospace, monospace" }}
          >
            {card.tag}
          </p>
        </div>
      </div>
      <p className="text-[16px] leading-[29px] text-white/70">{card.body}</p>
    </div>
    <SmallNumberChip n={card.n} />
  </div>
);

export default function Page31() {
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

      {/* Section title with 01-4 chip */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div className="anim-scale-in" style={{ animationDelay: "0.1s" }}>
          <SectionChip id="01-4" />
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          当信息过多时：Skill 如何处理？
        </p>
      </div>

      {/* Subtitle below */}
      <p
        className="absolute font-hei font-bold text-[24px] leading-8 text-white/90 whitespace-nowrap anim-fade-up"
        style={{ left: 80, top: 257, animationDelay: "0.3s" }}
      >
        以「 ui-ux-pro-max 架构」为灵感，如何把大量规范转成 AI
        可检索、可推理、可执行的系统？
      </p>

      {/* Center screenshot */}
      <div
        className="absolute anim-scale-in"
        style={{
          left: 960 - 165,
          top: 325,
          width: 330,
          height: 715,
          animationDelay: "0.6s",
        }}
      >
        <div
          className="w-full h-full rounded-xl overflow-hidden"
          style={{ border: "3px solid #2d2d2d" }}
        >
          <Img
            src={SCREENSHOT}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Decorative arrows pointing from cards to center */}
      <div
        className="absolute anim-fade-in"
        style={{
          left: 535.84,
          top: 507.2,
          width: 247.823,
          height: 116.74,
          animationDelay: "0.7s",
        }}
      >
        <div
          className="w-full h-full flex items-center justify-center"
        >
          <div style={{ transform: "rotate(7deg)" }}>
            <Img
              src={ARROW_TL_BR_SMALL}
              alt=""
              style={{ width: 238.843, height: 88.291 }}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute anim-fade-in"
        style={{
          left: 507.61,
          top: 676.07,
          width: 383.273,
          height: 351.422,
          animationDelay: "0.75s",
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div style={{ transform: "rotate(7deg)" }}>
            <Img
              src={ARROW_TL_BR}
              alt=""
              style={{ width: 347.923, height: 311.342 }}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute anim-fade-in"
        style={{
          left: 917.69,
          top: 509.98,
          width: 497.714,
          height: 410.264,
          animationDelay: "0.8s",
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div style={{ transform: "scaleY(-1) rotate(173deg)" }}>
            <Img
              src={ARROW_TR_BL}
              alt=""
              style={{ width: 457.598, height: 357.159 }}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute anim-fade-in"
        style={{
          left: 1008.14,
          top: 708.79,
          width: 382.854,
          height: 184.528,
          animationDelay: "0.85s",
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div style={{ transform: "scaleY(-1) rotate(173deg)" }}>
            <Img
              src={ARROW_TR_BL_SMALL}
              alt=""
              style={{ width: 368.457, height: 140.673 }}
            />
          </div>
        </div>
      </div>

      {/* Vertical decoration on screenshot edge */}
      <Img
        src={VERT_DECOR}
        alt=""
        className="absolute anim-fade-in"
        style={{
          left: 775,
          top: 440,
          width: 10,
          height: 365,
          animationDelay: "0.9s",
        }}
      />

      {/* Skill cards */}
      {SKILL_CARDS.map((c) => (
        <SkillCard key={c.n} card={c} />
      ))}
    </PageFrame>
  );
}
