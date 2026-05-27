import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/4c6570a8-e7d7-4868-aa84-aa6a1abf046d.png";
const PHONE_LEFT = "/figma/e19eb0a1-d678-41c3-95d7-ff7d626c2065.png";
const PHONE_RIGHT = "/figma/00579cbd-969a-4ab1-bb5d-4028cca7339f.png";
const PHONE_FRONT = "/figma/edc1b8ef-2fa5-44e4-b767-b200b9cb7356.png";
const CODE_SCREEN = "/figma/db78c199-d7f9-4128-8060-41e484cc28b9.png";

const LEFT_ITEMS = [
  {
    title: "图表仍然要手动调整",
    desc: "只要指标变化，坐标轴、图形等，都要重新调整",
  },
  {
    title: "图表修改会反复发生",
    desc: "在项目前期讨论阶段，要不断复制、改图、推翻、重来",
  },
  {
    title: "数据真实性很难保证",
    desc: "BI类对数据敏感度更高，人工调整图表很难贴近真实数据",
  },
];

const chartCards = [
  { title: "条形图", en: "Bar Chart", type: "bar", active: true },
  { title: "柱形图", en: "Column Chart", type: "column" },
  { title: "面积图", en: "Area Chart", type: "area" },
  { title: "折线图", en: "Line Chart", type: "line" },
  { title: "折柱混合图", en: "Mixed Chart", type: "mixed" },
  { title: "环形图", en: "Donut Chart", type: "donut" },
];

function VersionChip({ v, text }: { v: string; text: string }) {
  return (
    <div
      className="inline-flex h-[31px] items-center gap-2.5 rounded-lg border border-[#28282a] bg-white/[0.03] px-[13px] py-1"
    >
      <span className="font-display text-[16px] font-bold italic leading-none text-white/50">
        {v}
      </span>
      <span className="whitespace-nowrap text-[16px] leading-[29px] text-white/70">
        {text}
      </span>
    </div>
  );
}

function Arrow({ width = 40 }: { width?: number }) {
  return (
    <svg width={width} height="6" viewBox={`0 0 ${width} 6`} fill="none" aria-hidden>
      <path
        d={`M0 3H${width - 2}M${width - 2} 3L${width - 5} 0M${width - 2} 3L${width - 5} 6`}
        stroke="white"
        strokeOpacity="0.24"
        strokeWidth="1"
      />
    </svg>
  );
}

function ColumnHeader({ left, text, delay }: { left: number; text: string; delay: number }) {
  return (
    <div
      className="absolute inline-flex items-center justify-center rounded-lg px-[17px] py-2 anim-fade-up"
      style={{
        left,
        top: 275,
        background: "#2d2d2d",
        boxShadow: "inset 0 1px 1px 0 #5b5a61",
        animationDelay: `${delay}s`,
      }}
    >
      <span className="font-hei text-[16px] font-bold leading-6 text-white">
        {text}
      </span>
    </div>
  );
}

function TimelineLine({ x, height = 792 }: { x: number; height?: number }) {
  return (
    <div className="absolute anim-fade-up" style={{ left: x - 3, top: 248, animationDelay: "0.38s" }}>
      <span className="block size-[6px] rounded-full bg-white/55" />
      <span
        className="ml-[3px] mt-0 block w-px border-l border-dashed border-white/20"
        style={{ height }}
      />
    </div>
  );
}

function LeftTextBlock({
  top,
  title,
  desc,
  delay,
}: {
  top: number;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <div
      className="absolute flex h-[180px] w-[593px] flex-col justify-center gap-3 px-12 anim-fade-up"
      style={{ left: 72, top, animationDelay: `${delay}s` }}
    >
      <p className="font-hei text-[20px] font-bold leading-10 text-white">{title}</p>
      <p className="whitespace-nowrap text-[16px] leading-[29px] text-white/70">{desc}</p>
    </div>
  );
}

function RightPhase({
  top,
  title,
  children,
  delay,
}: {
  top: number;
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <div
      className="absolute flex h-[180px] w-[594px] flex-col justify-center gap-4 px-12 anim-fade-up"
      style={{ left: 1257, top, animationDelay: `${delay}s` }}
    >
      <p className="font-hei text-[20px] font-bold leading-10 text-white">{title}</p>
      {children}
    </div>
  );
}

function ChartMini({
  left,
  top,
  card,
  delay,
}: {
  left: number;
  top: number;
  card: (typeof chartCards)[number];
  delay: number;
}) {
  return (
    <div
      className="absolute h-[106px] w-[164px] overflow-hidden rounded-[9px] border-[2.267px] border-[#2d2d2d] bg-white p-3 anim-fade-up"
      style={{ left, top, opacity: card.active ? 0.9 : 0.3, animationDelay: `${delay}s` }}
    >
      <div className="mb-2 flex items-end gap-[5px] text-[#1d2129]">
        <span className="font-hei text-[10.6px] font-bold leading-3">{card.title}</span>
        <span className="font-display text-[9px] leading-[10px]">/ {card.en}</span>
      </div>
      <MiniGraphic type={card.type} />
    </div>
  );
}

function MiniGraphic({ type }: { type: string }) {
  if (type === "bar") {
    return (
      <div className="flex h-[64px] flex-col justify-center gap-[4px]">
        {[128, 116, 105, 67, 37].map((width) => (
          <span key={width} className="block h-[7px] bg-[#165dff]" style={{ width }} />
        ))}
      </div>
    );
  }

  if (type === "column") {
    return (
      <div className="flex h-[64px] items-end gap-[8px] px-1">
        {[50, 51, 37, 47, 34, 44, 61].map((height, index) => (
          <span key={index} className="w-[9px] bg-[#165dff]" style={{ height }} />
        ))}
      </div>
    );
  }

  if (type === "donut") {
    return (
      <div className="flex h-[64px] items-center justify-center">
        <div
          className="h-[58px] w-[58px] rounded-full"
          style={{
            background:
              "conic-gradient(#165dff 0 35%, #14c9c9 35% 66%, #f7ba1e 66% 100%)",
          }}
        >
          <div className="m-[15px] h-7 w-7 rounded-full bg-white" />
        </div>
      </div>
    );
  }

  const stroke = type === "area" ? "#165dff" : type === "mixed" ? "#f7ba1e" : "#165dff";
  return (
    <svg className="block h-[64px] w-full" viewBox="0 0 140 64" fill="none" aria-hidden>
      {type === "mixed" &&
        [26, 48, 31, 45, 34, 42, 29, 55, 23, 38, 31, 53].map((height, index) => (
          <rect
            key={index}
            x={index * 11 + 2}
            y={64 - height}
            width="7"
            height={height}
            fill="#165dff"
            opacity="0.9"
          />
        ))}
      {type === "area" && (
        <path
          d="M1 51L18 24L36 43L55 15L75 35L92 10L111 39L136 18V64H1Z"
          fill="#165dff"
          fillOpacity="0.22"
        />
      )}
      <path
        d="M1 51L18 24L36 43L55 15L75 35L92 10L111 39L136 18"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}

function BottomScreenshot({
  src,
  left,
  top,
  width,
  height,
  opacity,
  delay,
}: {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
  opacity: number;
  delay: number;
}) {
  return (
    <div
      className="absolute overflow-hidden rounded-xl border-[3px] border-[#2d2d2d] shadow-[0_2px_16px_rgba(0,0,0,0.35)] anim-fade-up"
      style={{ left, top, width, height, opacity, animationDelay: `${delay}s` }}
    >
      <Img src={src} alt="" className="block h-full w-full object-cover" />
    </div>
  );
}

export default function Page18() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="图表组件库与Figma看板插件"
        right={
          <div
            className="overflow-hidden rounded-full anim-fade-down"
            style={{
              width: 36,
              height: 36,
              border: "2px solid rgba(255,255,255,0.5)",
              animationDelay: "0.1s",
            }}
          >
            <Img src={AVATAR} alt="" className="h-full w-full object-cover" />
          </div>
        }
      />

      <div className="absolute flex items-center gap-5" style={{ left: 80, top: 148 }}>
        <div
          className="inline-flex h-14 items-center justify-center rounded-full px-4 py-1.5 anim-scale-in"
          style={{
            background: "#2d2d2d",
            boxShadow:
              "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
            animationDelay: "0.12s",
          }}
        >
          <span className="font-display text-[24px] font-bold italic leading-none text-white/50">
            02-0
          </span>
        </div>
        <p
          className="font-hei text-[36px] font-bold leading-10 text-white anim-fade-right"
          style={{ animationDelay: "0.22s" }}
        >
          从图表组件库→Figma插件：为什么做？
        </p>
      </div>

      <div className="absolute h-[87px] w-[593px] bg-white/[0.04]" style={{ left: 72, top: 251 }} />
      <div className="absolute h-[87px] w-[593px] bg-white/[0.04]" style={{ left: 665, top: 251 }} />
      <div className="absolute h-[87px] w-[594px] bg-white/[0.04]" style={{ left: 1257, top: 251 }} />

      <TimelineLine x={72} />
      <TimelineLine x={665} />
      <TimelineLine x={1258} />
      <TimelineLine x={1851} height={600} />

      <ColumnHeader left={295} text="组件库的局限性" delay={0.32} />
      <ColumnHeader left={894} text="AI 带来的转机" delay={0.38} />
      <ColumnHeader left={1473} text="插件的尝试与迭代" delay={0.44} />

      {LEFT_ITEMS.map((item, index) => (
        <LeftTextBlock
          key={item.title}
          top={338 + index * 180}
          title={item.title}
          desc={item.desc}
          delay={0.48 + index * 0.06}
        />
      ))}
      <div className="absolute left-[72px] top-[518px] h-px w-[593px] bg-white/10" />
      <div className="absolute left-[72px] top-[698px] h-px w-[593px] bg-white/10" />

      <svg
        className="absolute anim-fade-in"
        width="310"
        height="64"
        viewBox="0 0 310 64"
        fill="none"
        style={{ left: 805, top: 576, animationDelay: "0.55s" }}
        aria-hidden
      >
        <path d="M0 32L24 12V28L48 12V28L72 12V52L48 36V52L24 36V52L0 32Z" fill="white" opacity="0.12" />
        <path d="M310 32L286 12V28L262 12V28L238 12V52L262 36V52L286 36V52L310 32Z" fill="white" opacity="0.12" />
      </svg>

      <div
        className="absolute flex size-[208px] flex-col items-center justify-center gap-2.5 rounded-full bg-[#2d2d2d] anim-scale-in"
        style={{
          left: 856,
          top: 504,
          boxShadow:
            "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
          animationDelay: "0.55s",
        }}
      >
        <p className="font-display text-[18px] font-bold italic leading-none tracking-[0.72px] text-[#f7f8fa]/70">
          2025/07-08
        </p>
        <p className="font-display text-[37px] font-bold italic leading-none text-[#f7f8fa]">
          Cursor
        </p>
      </div>

      <RightPhase top={338} title="基础能力建立" delay={0.5}>
        <div className="flex items-center gap-2">
          <VersionChip v="v1" text="MVP 开发" />
          <Arrow />
          <VersionChip v="v2" text="扩展14类图表" />
        </div>
      </RightPhase>
      <RightPhase top={518} title="基于业务场景完善" delay={0.58}>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <VersionChip v="v3" text="支持指标卡配置" />
            <Arrow width={24} />
            <VersionChip v="v4" text="接入AI，支持对话生成" />
          </div>
          <div className="flex items-center gap-2">
            <VersionChip v="v5" text="搭建MCP，连接外部AI工具" />
            <Arrow width={24} />
            <VersionChip v="v6" text="支持收藏与复用修改" />
          </div>
        </div>
      </RightPhase>
      <RightPhase top={698} title="看板与交付延伸" delay={0.66}>
        <div className="flex items-center gap-2">
          <VersionChip v="v7" text="看板配置与导出" />
          <Arrow />
          <VersionChip v="v8" text="HTML导出" />
        </div>
      </RightPhase>
      <div className="absolute left-[1257px] top-[518px] h-px w-[594px] bg-white/10" />
      <div className="absolute left-[1257px] top-[698px] h-px w-[594px] bg-white/10" />

      {chartCards.map((card, index) => (
        <ChartMini
          key={card.title}
          left={index % 3 === 0 ? 120 : index % 3 === 1 ? 287 : 454}
          top={index < 3 ? 878 : 987}
          card={card}
          delay={0.78 + index * 0.04}
        />
      ))}

      <BottomScreenshot
        src={CODE_SCREEN}
        left={711.5}
        top={878}
        width={497}
        height={228}
        opacity={0.9}
        delay={0.82}
      />
      <BottomScreenshot
        src={PHONE_LEFT}
        left={1305}
        top={924}
        width={170}
        height={297}
        opacity={0.3}
        delay={0.86}
      />
      <BottomScreenshot
        src={PHONE_RIGHT}
        left={1650}
        top={924}
        width={170}
        height={297}
        opacity={0.3}
        delay={0.9}
      />
      <BottomScreenshot
        src={PHONE_FRONT}
        left={1469}
        top={878}
        width={188}
        height={329}
        opacity={0.9}
        delay={0.94}
      />
    </PageFrame>
  );
}
