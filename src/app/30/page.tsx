import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/6e9ca28d-fb5c-499b-a1ef-f45c4f5e84fe.png";
const DIVIDER = "/figma/8fc06ba9-b2d1-482e-8f69-42999da91807.svg";
const ARROW_INK = "/figma/2657cc30-d823-4a1a-a1f3-8c1c1673895e.svg";
const DIVIDER2 = "/figma/574a77d7-3a97-4cf0-8505-2a2fffcc0da2.svg";

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

const NumberPill = ({ n }: { n: string }) => (
  <div
    className="flex items-center justify-center rounded-full shrink-0"
    style={{
      width: 23.485,
      height: 23.485,
      background: "#2d2d2d",
      boxShadow:
        "inset 0 -1.678px 1.678px 0 rgba(0,0,0,0.25), inset 0 1.678px 2.097px 0 #3f3e44",
    }}
  >
    <span className="font-display italic font-bold text-[10.065px] leading-none text-[#f7f8fa]">
      {n}
    </span>
  </div>
);

type SemanticCard = {
  n: string;
  title: string;
  body: string;
  code: React.ReactNode;
  delay: number;
};

const SEMANTIC_CARDS: SemanticCard[] = [
  {
    n: "01",
    title: "组件语义",
    body: "说明组件适用场景、类型与变体、状态定义、使用规则、交互约束，以及和其他组件的常见组合关系等",
    code: (
      <>
        <p>例：Button</p>
        <p>- Primary：仅用于页面主操作</p>
        <p>- Danger：仅用于删除、驳回等破坏性行为</p>
        <p>- States: default / loading / disabled</p>
        <p>- Rule：Danger 按钮触发的高风险操作，应优先搭配二次确认（Modal / Popconfirm）</p>
      </>
    ),
    delay: 0.45,
  },
  {
    n: "02",
    title: "页面模板",
    body: "说明页面适用场景、核心布局结构、异常状态表现，以及内部组件的层级与联动关系等",
    code: (
      <>
        <p>例：Dashboard</p>
        <p>- Goal：针对经营分析等场景，回答业务表现，首屏须独立表达结论</p>
        <p>- Layout：遵循"先总览后原因"优先级，自上而下排布指标、图表与明细</p>
        <p>- Linkage：全局筛选变更时各区块联动</p>
        <p>- State：各数据区块需支持独立的 Loading / Empty / Error 状态展示</p>
      </>
    ),
    delay: 0.55,
  },
  {
    n: "03",
    title: "流程规则",
    body: "说明跨页面的跳转逻辑、关键步骤的先后顺序、全局状态反馈，以及异常和权限相关的承接方式等",
    code: (
      <>
        <p>例：语音填报（浓缩版）</p>
        <p>- Goal：适用于语音填报场景，用户说话完成信息录入、确认与提交</p>
        <p>- Capture：语音转写后映射到字段，结果需可见、可编辑</p>
        <p>- Confirm：关键信息需逐项确认，缺失或冲突时引导补充</p>
        <p>- State：需定义 listening / transcribing / confirming / submitting / error 状态</p>
        <p>- Rule：未经确认的关键字段不得提交；高风险操作需二次确认</p>
      </>
    ),
    delay: 0.65,
  },
];

const SemanticCard = ({ card }: { card: SemanticCard }) => (
  <div
    className="flex-1 flex flex-col gap-4 items-start p-4 rounded-2xl self-stretch anim-fade-up"
    style={{
      background: "rgba(255,255,255,0.02)",
      border: "0.919px solid rgba(255,255,255,0.2)",
      animationDelay: `${card.delay}s`,
    }}
  >
    <div className="flex gap-3 items-center">
      <NumberPill n={card.n} />
      <p className="font-hei font-bold text-[18px] leading-8 text-white/90 whitespace-nowrap">
        {card.title}
      </p>
    </div>
    <p className="text-[16px] leading-[29px] text-white/70 w-full">
      {card.body}
    </p>
    <div
      className="px-3 py-2 rounded-xl w-full"
      style={{ background: "#262626" }}
    >
      <div
        className="text-[14px] leading-6 text-white/70"
        style={{ fontFamily: "ui-monospace, monospace" }}
      >
        {card.code}
      </div>
    </div>
  </div>
);

type MidCard = {
  n: string;
  title: string;
  body: string;
};

const MID_CARDS: MidCard[] = [
  {
    n: "01",
    title: "规则整理",
    body: "把设计系统里的规则，整理成 AI 可读的内容（类似Google → DESIGN.md）",
  },
  {
    n: "02",
    title: "结构映射",
    body: "把设计中的组件、状态、属性和页面结构，对应到实现里的组件、props、token等（比如通过MCP）",
  },
];

type BottomCard = {
  title: string;
  body: string;
  tag: string;
};

const BOTTOM_CARDS: BottomCard[] = [
  {
    title: "视觉基础",
    body: "颜色、字体、间距、阴影等基础样式规则",
    tag: "Design Tokens",
  },
  {
    title: "基础组件",
    body: "按钮、输入框、下拉、表格、弹窗等通用组件",
    tag: "Components",
  },
  {
    title: "页面模式",
    body: "表单页、列表页、详情页等常见页面结构",
    tag: "Patterns",
  },
  {
    title: "规范文档",
    body: "组件怎么用、什么时候用、有哪些注意事项",
    tag: "Files",
  },
];

const Divider = ({
  label,
  delay,
  src,
}: {
  label: string;
  delay: number;
  src: string;
}) => (
  <div
    className="w-full flex gap-6 items-center justify-center anim-fade-in"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="flex-1">
      <Img src={src} alt="" style={{ width: "100%", height: 1 }} />
    </div>
    <Img src={ARROW_INK} alt="" style={{ width: 20, height: 11.5 }} />
    <p className="font-hei font-bold text-[19.8px] leading-[24px] text-white/90 text-center whitespace-nowrap">
      {label}
    </p>
    <Img src={ARROW_INK} alt="" style={{ width: 20, height: 11.5 }} />
    <div className="flex-1">
      <Img src={src} alt="" style={{ width: "100%", height: 1 }} />
    </div>
  </div>
);

export default function Page30() {
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

      {/* Section title with 01-3 chip */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div className="anim-scale-in" style={{ animationDelay: "0.1s" }}>
          <SectionChip id="01-3" />
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          所以：“设计系统”，可以有哪些新变化？
        </p>
      </div>

      {/* Main content stack */}
      <div
        className="absolute flex flex-col gap-8 items-center justify-center"
        style={{
          left: 202,
          top: 239,
          width: 1517,
          height: 790,
        }}
      >
        {/* Top row: heading + 3 semantic cards */}
        <div className="flex flex-col gap-6 items-center w-full">
          <p
            className="font-hei font-bold text-[24px] leading-[29px] text-white/90 text-center anim-fade-up"
            style={{ width: 375, animationDelay: "0.3s" }}
          >
            📁 开始进一步包含什么？
          </p>
          <div className="flex gap-6 items-start w-full">
            {SEMANTIC_CARDS.map((c) => (
              <SemanticCard key={c.n} card={c} />
            ))}
          </div>
        </div>

        {/* Divider with 映射 */}
        <Divider label="映射" delay={0.85} src={DIVIDER} />

        {/* Middle row: 2 cards */}
        <div
          className="flex gap-6 items-center justify-center w-full px-6 py-5 rounded-2xl anim-fade-up"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "0.759px solid rgba(255,255,255,0.2)",
            animationDelay: "0.9s",
          }}
        >
          {MID_CARDS.map((c) => (
            <div
              key={c.n}
              className="flex-1 flex flex-col gap-2 items-start"
            >
              <div className="flex gap-3 items-center">
                <NumberPill n={c.n} />
                <p className="font-hei font-bold text-[18px] leading-8 text-white/90 whitespace-nowrap">
                  {c.title}
                </p>
              </div>
              <p className="text-[16px] leading-[29px] text-white/70 w-full">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* Divider with 原有底座 */}
        <Divider label="原有底座" delay={0.95} src={DIVIDER2} />

        {/* Bottom row: 4 small cards (faded) */}
        <div
          className="flex gap-6 items-center opacity-70 w-full anim-fade-up"
          style={{ animationDelay: "1.0s" }}
        >
          {BOTTOM_CARDS.map((c) => (
            <div
              key={c.title}
              className="flex-1 flex flex-col items-start rounded-[13.2px]"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "0.759px solid rgba(255,255,255,0.2)",
                padding: "19.819px",
              }}
            >
              <div className="flex flex-col gap-[3.3px] items-start w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="font-hei font-bold text-[13.2px] leading-6 text-white/90 whitespace-nowrap">
                    {c.title}
                  </p>
                  <div
                    className="inline-flex items-center justify-center px-1.5 rounded"
                    style={{ background: "#262626", height: 19.8 }}
                  >
                    <p
                      className="text-[11.6px] leading-6 text-white/70 whitespace-nowrap"
                      style={{ fontFamily: "ui-monospace, monospace" }}
                    >
                      {c.tag}
                    </p>
                  </div>
                </div>
                <p className="text-[13.2px] leading-6 text-white/70 w-full">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
