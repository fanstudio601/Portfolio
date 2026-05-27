import { DarkPanel } from "@/components/DarkPanel";
import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import {
  PanelLabel,
  PanelShell,
  PortfolioHeader,
  Screenshot,
  SectionTitle,
  SimpleArrow,
} from "@/components/CaseStudySlide";

const TYPES_IMG = "/figma/figma-page20-types.png";
const INDEX_IMG = "/figma/figma-page20-index.png";
const SANKEY_CHECK = "/figma/figma-page20-sankey-check.png";
const SANKEY_FIX = "/figma/figma-page20-sankey-fix.png";
const SANKEY_BALANCE = "/figma/figma-page20-sankey-balance.png";

const CLASSIFY_ROWS = [
  { label: "对比", desc: "柱状图、条形图、雷达图" },
  { label: "趋势", desc: "折线图、面积图、K线图" },
  { label: "占比", desc: "饼图、环形图、玫瑰图、旭日图" },
  { label: "分布", desc: "散点图、气泡图、词云图" },
  { label: "转化", desc: "漏斗图、桑基图" },
];

function FlowPill({
  left,
  top,
  n,
  label,
  delay,
}: {
  left: number;
  top: number;
  n: string;
  label: string;
  delay: number;
}) {
  return (
    <div
      className="absolute inline-flex h-[22px] items-center gap-1 rounded-full bg-[#2d2d2d] px-3 anim-fade-up"
      style={{
        left,
        top,
        boxShadow:
          "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 2px 5px 0 #3f3e44",
        animationDelay: `${delay}s`,
      }}
    >
      <span className="font-display text-[8px] font-bold italic leading-none text-white/80">
        {n}.
      </span>
      <span className="font-hei text-[12px] font-bold leading-none text-white">
        {label}
      </span>
    </div>
  );
}

export default function Page20() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />
      <PortfolioHeader />
      <SectionTitle
        section="02-2"
        title="v2：参考组件库图表体系，扩展插件至 15 种"
      />

      <PanelShell left={80} top={244} width={860} height={781} delay={0.3} />
      <PanelLabel left={112} top={274} delay={0.38}>
        图表类型扩展
      </PanelLabel>
      <p
        className="absolute font-hei text-[24px] font-bold leading-[38px] text-white whitespace-nowrap anim-fade-up"
        style={{ left: 112, top: 343, animationDelay: "0.45s" }}
      >
        三层分类：分析目的 → 图表类型 → 图表子类
      </p>
      <Screenshot
        src={TYPES_IMG}
        left={112}
        top={408}
        width={801}
        height={228}
        border="2px solid #2d2d2d"
        delay={0.54}
        objectFit="cover"
        objectPosition="center"
      />
      <div
        className="absolute inline-flex items-center rounded-full bg-[#2d2d2d] px-4 py-2 anim-fade-up"
        style={{
          left: 785,
          top: 596,
          boxShadow:
            "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 2px 5px 0 #3f3e44",
          animationDelay: "0.6s",
        }}
      >
        <span className="font-hei text-[12px] font-bold leading-none text-white">
          图表组件库索引
        </span>
      </div>
      <Screenshot
        src={INDEX_IMG}
        left={112}
        top={715}
        width={344}
        height={280}
        delay={0.68}
        objectFit="cover"
      />
      <div
        className="absolute flex flex-col gap-3 anim-fade-up"
        style={{ left: 514, top: 727, width: 366, animationDelay: "0.74s" }}
      >
        {CLASSIFY_ROWS.map((row, index) => (
          <div key={row.label}>
            <div className="flex items-center gap-4">
              <span className="text-[16px] leading-8 text-white/90">{row.label}</span>
              <span className="text-[16px] leading-8 text-white/50">{row.desc}</span>
            </div>
            {index < CLASSIFY_ROWS.length - 1 && (
              <div className="mt-1 h-px bg-white/10" />
            )}
          </div>
        ))}
      </div>

      <PanelShell left={980} top={244} width={963} height={781} delay={0.34} />
      <PanelLabel left={1012} top={274} delay={0.42}>
        特殊图表：数据逻辑支持
      </PanelLabel>
      <p
        className="absolute font-hei text-[24px] font-bold leading-[38px] text-white whitespace-nowrap anim-fade-up"
        style={{ left: 1012, top: 343, animationDelay: "0.49s" }}
      >
        以桑基图为例，加入数据守恒检查和一键修改
      </p>
      <Screenshot
        src={SANKEY_CHECK}
        left={1012}
        top={408}
        width={304}
        height={514}
        delay={0.6}
        radius={12}
      />
      <Screenshot
        src={SANKEY_FIX}
        left={1281}
        top={443}
        width={305}
        height={512}
        delay={0.68}
        radius={12}
      />
      <Screenshot
        src={SANKEY_BALANCE}
        left={1571}
        top={477}
        width={306}
        height={513}
        delay={0.76}
        radius={12}
      />
      <FlowPill left={1136} top={397} n="1" label="检查" delay={0.66} />
      <FlowPill left={1401} top={432} n="2" label="修复" delay={0.74} />
      <FlowPill left={1696} top={466} n="3" label="守恒" delay={0.82} />
      <SimpleArrow left={1192} top={462} width={96} height={330} delay={0.78} />
      <SimpleArrow left={1487} top={494} width={96} height={330} delay={0.86} />
    </PageFrame>
  );
}
