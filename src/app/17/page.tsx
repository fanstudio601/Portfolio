import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 17 — 01-4 自动布局 & 约束：随尺寸、数量调整自动适配
   Left:    big "分组柱形图" main chart + small example below
   Center:  layout-detail caption + preview chart + arrow + larger preview
   Right:   2×2 grid of responsive chart variants with annotations */

const AVATAR = "/figma/4c6570a8-e7d7-4868-aa84-aa6a1abf046d.png";
// Charts from page 17 design context
const CHART_MAIN = "/figma/0fb9f119-c9d3-44f5-8696-73a97af28741.png"; // big chart (top-left)
const CHART_98 = "/figma/fe75b5ab-b01c-45b2-8f80-465d7fc4930b.png"; // component tree panel
const CHART_100 = "/figma/d503e276-89b7-4e0c-82df-baa63b4109a0.png"; // right grid top-left
const CHART_101 = "/figma/eeba84c5-dd47-4711-90c3-a8637f4ca3cc.png"; // right grid top-right
const CHART_102 = "/figma/603261e0-3d30-4834-ab57-2e4c83fbdf38.png"; // center small chart
const CHART_103 = "/figma/ab3b21b3-0435-4ad6-b18b-899544e7c31e.png"; // center bigger chart
const CHART_104 = "/figma/19652aea-f4d0-4681-b5b1-2b460a209c1f.png"; // bottom-left auto layout demo

const AnnotationLabel = ({
  left,
  top,
  width,
  children,
  delay = 0,
  align = "left",
}: {
  left: number;
  top: number;
  width?: number;
  children: React.ReactNode;
  delay?: number;
  align?: "left" | "right";
}) => (
  <p
    className="absolute text-[14px] leading-6 text-white/70 anim-fade-up"
    style={{
      left,
      top,
      width,
      textAlign: align,
      animationDelay: `${delay}s`,
    }}
  >
    {children}
  </p>
);

export default function Page17() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="图表组件库与Figma看板插件"
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

      {/* Section chip + title */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div
          className="anim-scale-in inline-flex items-center justify-center px-5 py-1.5 rounded-full"
          style={{
            background: "#2d2d2d",
            height: 56,
            boxShadow:
              "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
            animationDelay: "0.1s",
          }}
        >
          <span className="font-display italic font-bold text-[24px] text-white/50 whitespace-nowrap leading-none">
            01-4
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          自动布局 & 约束：随尺寸、数量调整自动适配
        </p>
      </div>

      {/* Left column: Big main chart (分组柱形图) */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 33, top: 290, width: 685, height: 343, animationDelay: "0.3s" }}
      >
        <Img
          src={CHART_MAIN}
          alt="分组柱形图"
          className="block w-full h-full object-contain"
        />
      </div>

      {/* Left column annotations around big chart */}
      <AnnotationLabel left={78} top={638} width={285} delay={0.4}>
        柱形、网格线、X轴，跟随宽度自适应
        <br />
        其中柱形，可根据数量增加自动调整
      </AnnotationLabel>

      {/* Bottom-left: component-tree detail panel */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 33, top: 651, width: 290, height: 380, animationDelay: "0.45s" }}
      >
        <Img
          src={CHART_98}
          alt="组件树细节"
          className="block w-full h-full object-contain"
        />
      </div>

      {/* Caption "组件树细节" near tree panel */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 339, top: 651, width: 380, animationDelay: "0.5s" }}
      >
        <p className="font-hei font-bold text-[18px] leading-7 text-white mb-2">
          组件树细节
        </p>
        <p className="text-[14px] leading-6 text-white/70">
          其中：图形与网格线，存在z轴关系
          <br />
          因此，使用画框，收纳内部元素
          <br />
          实现宽度自适应
        </p>
      </div>

      {/* Center label: 一些元素自适应细节 */}
      <p
        className="absolute font-hei font-bold text-[18px] leading-7 text-white anim-fade-up"
        style={{ left: 761, top: 256, animationDelay: "0.4s" }}
      >
        一些元素自适应细节，举例：
      </p>

      {/* Center chart preview (smaller, 分组柱形图 small) */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 761, top: 314, width: 320, height: 280, animationDelay: "0.55s" }}
      >
        <Img
          src={CHART_102}
          alt=""
          className="block w-full h-full object-contain"
        />
      </div>

      {/* Center caption "组件按响应" */}
      <p
        className="absolute font-hei font-bold text-[18px] leading-7 text-white anim-fade-up"
        style={{ left: 761, top: 700, animationDelay: "0.6s" }}
      >
        组件按响应
      </p>

      {/* Center bigger chart preview */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 761, top: 724, width: 558, height: 280, animationDelay: "0.65s" }}
      >
        <Img
          src={CHART_103}
          alt=""
          className="block w-full h-full object-contain"
        />
      </div>

      {/* Right column: 2×2 grid of responsive variants */}
      {/* Top-left variant */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 1346, top: 404, width: 260, height: 280, animationDelay: "0.7s" }}
      >
        <Img
          src={CHART_100}
          alt=""
          className="block w-full h-full object-contain"
        />
      </div>

      {/* Top-right variant */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 1625, top: 404, width: 260, height: 280, animationDelay: "0.78s" }}
      >
        <Img
          src={CHART_101}
          alt=""
          className="block w-full h-full object-contain"
        />
      </div>

      {/* Auto-Layout caption for right grid */}
      <AnnotationLabel left={1346} top={314} width={540} delay={0.6}>
        柱形顶部，在高度调整时，始终跟y轴刻度保持同步，
        <br />
        不会因为尺寸而影响数据比例
      </AnnotationLabel>

      {/* Bottom right caption */}
      <AnnotationLabel left={1346} top={700} width={540} delay={0.8}>
        Y轴名称(单位) · 图例
      </AnnotationLabel>

      {/* Bottom-left small example (image 104) */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 339, top: 834, width: 380, height: 180, animationDelay: "0.55s" }}
      >
        <Img
          src={CHART_104}
          alt=""
          className="block w-full h-full object-contain"
        />
      </div>
    </PageFrame>
  );
}
