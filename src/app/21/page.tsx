import { DarkPanel } from "@/components/DarkPanel";
import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import {
  PortfolioHeader,
  Screenshot,
  SectionTitle,
  StepCard,
} from "@/components/CaseStudySlide";

const METRICS_SCREEN = "/figma/figma-page21-metrics.png";
const CUSTOM_SCREEN = "/figma/figma-page21-custom.png";
const SUMMARY_CARD = "/figma/figma-page21-summary-card.png";

export default function Page21() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />
      <PortfolioHeader />
      <SectionTitle
        section="02-3"
        title="v3：加入指标卡与快捷指标，让图表更接近真实 BI 模块"
      />

      <StepCard
        n="01"
        left={123}
        top={274}
        width={489}
        title="基于图表数据，先给出关键摘要"
        desc="在真实 BI 页面里，用户通常会先看核心指标，再看图表细节"
        delay={0.32}
      />
      <StepCard
        n="02"
        left={683}
        top={274}
        width={489}
        title="让高频统计指标，支持一键生成"
        desc="最大/小/总计等常用聚合指标，可以直接从图表数据中提取"
        delay={0.4}
      />
      <StepCard
        n="03"
        left={1282}
        top={274}
        width={489}
        title="除预设指标之外，保留自定义空间"
        desc="可按业务需要补充自定义指标，并拖拽调整排列顺序"
        delay={0.48}
      />

      <div
        className="absolute w-px bg-white/20 anim-fade-in"
        style={{ left: 1227, top: 241, height: 839, animationDelay: "0.6s" }}
      />

      <Screenshot
        src={SUMMARY_CARD}
        left={123}
        top={409}
        width={489}
        height={340}
        delay={0.58}
        radius={0}
        objectFit="fill"
      />
      <Screenshot
        src={METRICS_SCREEN}
        left={715}
        top={409}
        width={425}
        height={718}
        delay={0.66}
        radius={12}
      />
      <Screenshot
        src={CUSTOM_SCREEN}
        left={1314}
        top={409}
        width={425}
        height={718}
        delay={0.74}
        radius={12}
      />
    </PageFrame>
  );
}
