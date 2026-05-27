import { DarkPanel } from "@/components/DarkPanel";
import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import {
  PortfolioHeader,
  Screenshot,
  SectionTitle,
  SimpleArrow,
  StepCard,
} from "@/components/CaseStudySlide";

const STEPS = [
  {
    n: "01",
    left: 80,
    title: "导出 HTML",
    desc: "除了绘制画布外，也可直接导出为 HTML",
  },
  {
    n: "02",
    left: 534,
    title: "独立预览与响应式布局",
    desc: "导出后可本地预览，并支持响应式",
  },
  {
    n: "03",
    left: 988,
    title: "真实 API 对接",
    desc: "可接入真实数据源配置，或保持静态做Demo演示",
  },
  {
    n: "04",
    left: 1442,
    title: "作为外链嵌入后台",
    desc: "CSS与JS集中在同一文件中，可外链管理后台",
  },
];

export default function Page26() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />
      <PortfolioHeader />
      <SectionTitle
        section="02-8"
        title="v8：加入 HTML 导出，让看板从设计结果走向可落地页面"
      />

      {STEPS.map((step, index) => (
        <StepCard
          key={step.n}
          n={step.n}
          left={step.left}
          top={261}
          width={397}
          title={step.title}
          desc={step.desc}
          delay={0.3 + index * 0.08}
        />
      ))}

      <Screenshot
        src="/figma/figma-page26-export-wide.png"
        left={80}
        top={410}
        width={766}
        height={574}
        radius={12}
        delay={0.58}
        opacity={0.7}
        objectFit="cover"
      />
      <Screenshot
        src="/figma/figma-page26-export-mobile.png"
        left={622}
        top={410}
        width={313}
        height={574}
        radius={12}
        delay={0.66}
        objectFit="cover"
      />
      <Screenshot
        src="/figma/figma-page26-api-wide.png"
        left={988}
        top={410}
        width={825}
        height={574}
        radius={12}
        delay={0.74}
        objectFit="cover"
      />
      <Screenshot
        src="/figma/figma-page26-admin-wide.png"
        left={1446}
        top={410}
        width={697}
        height={574}
        radius={12}
        delay={0.82}
        objectFit="cover"
        shadow="-4px 0 4px rgba(0,0,0,0.08)"
      />

      <SimpleArrow left={1203} top={373} width={100} height={415} delay={0.86} />
      <SimpleArrow left={1500} top={373} width={90} height={371} delay={0.94} />
    </PageFrame>
  );
}
