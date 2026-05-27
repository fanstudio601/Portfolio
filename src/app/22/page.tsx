import { DarkPanel } from "@/components/DarkPanel";
import { Img } from "@/components/Img";
import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import {
  PortfolioHeader,
  Screenshot,
  SectionTitle,
} from "@/components/CaseStudySlide";

const MANUAL_SCREEN = "/figma/figma-page22-chat-left.png";
const PLUGIN_SCREEN_1 = "/figma/figma-page22-plugin-1.png";
const PLUGIN_SCREEN_2 = "/figma/figma-page22-plugin-2.png";
const PROMPT_ROW = "/figma/figma-page22-prompt-row.png";
const GENERATED_ROW = "/figma/figma-page22-generated-row.png";
const DIVIDER = "/figma/figma-page22-divider.svg";

const CARDS = [
  {
    n: "01",
    left: 80,
    title: "从手工配置，变为自然语言生成",
    desc: "接入 AI 后，通过描述需求直接生成图表初稿",
  },
  {
    n: "02",
    left: 603,
    title: "从人工计算，变为自动生成数值",
    desc: "避免手动整理和填写部分数据关系",
  },
];

function LocalBadge({ n, delay }: { n: string; delay: number }) {
  return (
    <div
      className="absolute anim-fade-in"
      style={{
        left: -3.72,
        top: 6,
        width: 36.45,
        height: 36.45,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="flex items-center justify-center rounded-full bg-[#2d2d2d]"
        style={{
          width: 28.44,
          height: 28.44,
          transform: "rotate(-20deg)",
          boxShadow:
            "inset 0 -2.031px 2.031px 0 rgba(0,0,0,0.25), inset 0 2.031px 2.539px 0 #3f3e44",
        }}
      >
        <span className="font-display text-[12.188px] font-bold italic leading-none text-[#f7f8fa]">
          {n}
        </span>
      </div>
    </div>
  );
}

function InfoCard({
  n,
  title,
  desc,
  left,
  delay,
}: {
  n: string;
  title: string;
  desc: string;
  left: number;
  delay: number;
}) {
  return (
    <div
      className="absolute anim-fade-up"
      style={{
        left,
        top: 249,
        width: 445,
        minHeight: 110,
        padding: 24,
        background: "rgba(255,255,255,0.02)",
        border: "0.919px solid rgba(255,255,255,0.2)",
        borderRadius: 16,
        animationDelay: `${delay}s`,
      }}
    >
      <LocalBadge n={n} delay={delay + 0.05} />
      <div className="flex flex-col gap-1">
        <p className="font-hei text-[16px] font-bold leading-[29px] text-white/90">
          {title}
        </p>
        <p className="text-[16px] leading-[29px] text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export default function Page22() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />
      <PortfolioHeader />
      <SectionTitle
        section="02-4"
        title="v4：加入 AI 生成，让图表基于真实数值更快生成"
      />

      {CARDS.map((card, index) => (
        <InfoCard key={card.n} {...card} delay={0.32 + index * 0.08} />
      ))}

      <Img
        src={DIVIDER}
        alt=""
        className="absolute block anim-fade-in"
        style={{
          left: 564,
          top: 238,
          width: 1,
          height: 839,
          animationDelay: "0.5s",
        }}
      />

      <Screenshot
        src={MANUAL_SCREEN}
        left={104}
        top={379}
        width={396}
        height={667}
        delay={0.52}
        radius={12}
        border="2px solid #2d2d2d"
      />
      <Screenshot
        src={PROMPT_ROW}
        left={603}
        top={458}
        width={508}
        height={98}
        delay={0.56}
        radius={0}
        objectFit="fill"
      />
      <Screenshot
        src={GENERATED_ROW}
        left={603}
        top={594}
        width={508}
        height={326}
        delay={0.64}
        radius={0}
        objectFit="fill"
      />
      <Screenshot
        src={PLUGIN_SCREEN_1}
        left={1181}
        top={304}
        width={396}
        height={667}
        delay={0.68}
        radius={12}
        border="2px solid #2d2d2d"
      />
      <Screenshot
        src={PLUGIN_SCREEN_2}
        left={1548}
        top={304}
        width={396}
        height={667}
        delay={0.76}
        radius={12}
        border="2px solid #2d2d2d"
        shadow="-4px 0 4px rgba(0,0,0,0.08)"
      />
    </PageFrame>
  );
}
