import { DarkPanel } from "@/components/DarkPanel";
import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import {
  PortfolioHeader,
  Screenshot,
  SectionTitle,
} from "@/components/CaseStudySlide";

const PLUGIN_SCREEN = "/figma/figma-page25-plugin.png";
const DASHBOARD_SCREEN = "/figma/figma-page25-dashboard.png";

const lines = [
  {
    src: "/figma/figma-page25-line-1.png",
    left: 365,
    top: 394,
    width: 148,
    height: 92,
  },
  {
    src: "/figma/figma-page25-line-2.png",
    left: 365,
    top: 598,
    width: 148,
    height: 105,
  },
  {
    src: "/figma/figma-page25-line-4.png",
    left: 863,
    top: 478,
    width: 113,
    height: 118,
  },
  {
    src: "/figma/figma-page25-line-3.png",
    left: 859,
    top: 697,
    width: 117,
    height: 84,
  },
];

const cards = [
  {
    n: "01",
    left: 80,
    top: 443,
    title: "通过尺寸与栅格配置，确定看板布局",
    desc: "同一组图表可根据不同终端场景，在插件内直接完成调整",
  },
  {
    n: "02",
    left: 80,
    top: 662,
    title: "通过标题占位，先完成整页内容概览",
    desc: "考虑到插件内实时渲染的性能压力，先用“骨架”预览",
  },
  {
    n: "03",
    left: 960,
    top: 443,
    title: "通过拖拽排序，调整图表优先级",
    desc: "按业务指标重点，调整图表顺序与版式占比",
  },
  {
    n: "04",
    left: 959,
    top: 662,
    title: "补充整页配置，完成看板导出",
    desc: "统一整页标题、间距后，直接导出看板画布",
  },
];

function LocalBadge({ n, delay }: { n: string; delay: number }) {
  return (
    <div
      className="absolute flex items-center justify-center anim-fade-in"
      style={{
        left: -4,
        top: -4,
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
            "inset 0 -2px 2px 0 rgba(0,0,0,0.25), inset 0 2px 2.5px 0 #3f3e44",
        }}
      >
        <span className="font-display text-[12.2px] font-bold italic leading-none text-[#f7f8fa]">
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
  top,
  delay,
}: {
  n: string;
  title: string;
  desc: string;
  left: number;
  top: number;
  delay: number;
}) {
  return (
    <div
      className="absolute anim-fade-up"
      style={{
        left,
        top,
        width: 312,
        minHeight: 139,
        padding: 24,
        zIndex: 2,
        background: "rgba(255,255,255,0.02)",
        border: "0.919px solid rgba(255,255,255,0.2)",
        borderRadius: 16,
        animationDelay: `${delay}s`,
      }}
    >
      <LocalBadge n={n} delay={delay + 0.08} />
      <div className="flex flex-col gap-1">
        <p className="font-hei text-[16px] font-bold leading-[29px] text-white/90">
          {title}
        </p>
        <p className="text-[16px] leading-[29px] text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export default function Page25() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />
      <PortfolioHeader />
      <SectionTitle
        section="02-7"
        title="v7：加入看板功能，让输出从单个图表走向完整业务页面"
      />

      {lines.map((line, index) => (
        <Screenshot
          key={line.src}
          src={line.src}
          left={line.left}
          top={line.top}
          width={line.width}
          height={line.height}
          delay={0.32 + index * 0.04}
          radius={0}
          objectFit="fill"
          className="pointer-events-none z-[4]"
        />
      ))}

      {cards.map((card, index) => (
        <InfoCard key={card.n} {...card} delay={0.38 + index * 0.08} />
      ))}

      <Screenshot
        src={PLUGIN_SCREEN}
        left={456}
        top={260}
        width={440}
        height={741}
        delay={0.55}
        radius={12}
        objectFit="fill"
        className="z-[3]"
      />
      <Screenshot
        src={DASHBOARD_SCREEN}
        left={1329}
        top={189}
        width={591}
        height={820}
        delay={0.65}
        radius={0}
        objectFit="fill"
        className="z-[3]"
      />
    </PageFrame>
  );
}
