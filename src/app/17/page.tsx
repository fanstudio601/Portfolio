import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 17 — 01-4 自动布局 & 约束：随尺寸、数量调整自动适配
   Top-left: a normal "分组柱形图" card.
   Top-right: two adapted variants showing width / height adaptation.
   Bottom-left: a component-tree screenshot with annotation chips.
   All chart-card and tree-panel screenshots are individual asset images;
   page chrome + all annotation chips are real DOM text. */

// Individual assets
const CHART_FULL = "/figma/268352ab-30ea-40c1-8196-b6b08edeca54.png"; // 分组柱形图 main
const CHART_WIDE = "/figma/edba4409-7b19-4be8-a126-0fc41634b6bb.png"; // auto-layout panel
const CHART_TALL = "/figma/2ca7e030-818d-4ec3-9416-02150d49f404.png"; // tall variant
const CHART_SMALL = "/figma/244fcceb-d7dd-46cd-955a-18775669f6b6.png"; // small variant
const TREE_IMG = "/figma/09f2e00d-f0fb-43ed-9cda-73df10c7867f.png"; // component tree
const FRAME_BG = "/figma/8ad836eb-21bf-4b55-ba7c-307be558313f.png"; // chart frame backdrop

function AnnoChip({
  left,
  top,
  children,
  delay = 0,
  multiline = false,
}: {
  left: number;
  top: number;
  children: React.ReactNode;
  delay?: number;
  multiline?: boolean;
}) {
  return (
    <div
      className="absolute inline-flex items-center px-4 py-2 rounded-lg anim-fade-up"
      style={{
        left,
        top,
        background: "#2d2d2d",
        boxShadow: "inset 0 1px 1px 0 #5b5a61",
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className={`text-[16px] text-white leading-6 ${
          multiline ? "" : "whitespace-nowrap"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

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
              src="/figma/4c6570a8-e7d7-4868-aa84-aa6a1abf046d.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Left main chart card */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 80,
          top: 264,
          width: 460,
          height: 380,
          background: "white",
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.4s",
        }}
      >
        <Img
          src={CHART_FULL}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Right top — wide variant card */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 730,
          top: 264,
          width: 540,
          height: 240,
          background: "white",
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.5s",
        }}
      >
        <Img
          src={CHART_FULL}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Right top right — tall variant card */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1295,
          top: 264,
          width: 280,
          height: 380,
          background: "white",
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.55s",
        }}
      >
        <Img
          src={CHART_FULL}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Right small variant card */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1600,
          top: 264,
          width: 240,
          height: 380,
          background: "white",
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.6s",
        }}
      >
        <Img
          src={CHART_TALL}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Bottom — component tree panel */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 80,
          top: 685,
          width: 240,
          height: 360,
          background: "white",
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.65s",
        }}
      >
        <Img
          src={TREE_IMG}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Bottom — Auto-layout panel screenshot */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 870,
          top: 685,
          width: 280,
          height: 360,
          background: "white",
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.7s",
        }}
      >
        <Img
          src={CHART_WIDE}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Bottom — small variant chart */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1200,
          top: 685,
          width: 240,
          height: 360,
          background: "white",
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.75s",
        }}
      >
        <Img
          src={CHART_SMALL}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Frame background — bottom right */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1490,
          top: 685,
          width: 350,
          height: 360,
          background: "white",
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.8s",
        }}
      >
        <Img
          src={FRAME_BG}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Heading — element auto-adaptation */}
      <p
        className="absolute font-hei font-bold text-[20px] text-white whitespace-nowrap anim-fade-up"
        style={{
          left: 761,
          top: 256,
          lineHeight: "40px",
          background: "#101012",
          paddingRight: 8,
          animationDelay: "0.4s",
        }}
      >
        一些元素自适应细节，举例：
      </p>

      {/* Inline annotation chips top row */}
      <AnnoChip left={761} top={314} delay={0.5} multiline>
        <p className="mb-0">柱形、网格线、X轴，跟随宽度自适应</p>
        <p>其中柱形，可根据数量增加自动调整</p>
      </AnnoChip>
      <AnnoChip left={1346} top={314} delay={0.55} multiline>
        <p className="mb-0">柱形顶部，在高度调整时，始终跟y轴刻度保持同步，</p>
        <p>不会因为尺寸而影响数据比例</p>
      </AnnoChip>

      {/* Component-tree annotation chip + 2 description lines */}
      <AnnoChip left={339} top={651} delay={0.65}>
        组件树细节
      </AnnoChip>
      <div
        className="absolute anim-fade-up"
        style={{ left: 339, top: 714, animationDelay: "0.7s" }}
      >
        <div
          className="inline-flex flex-col px-3 py-2"
          style={{ background: "#101012" }}
        >
          <p className="text-[16px] leading-6 text-white whitespace-nowrap mb-0">
            其中：图形与网格线，存在z轴关系
          </p>
          <p className="text-[16px] leading-6 text-white whitespace-nowrap">
            因此，使用画框，收纳内部元素
          </p>
        </div>
      </div>
      <div
        className="absolute anim-fade-up"
        style={{ left: 339, top: 798, animationDelay: "0.75s" }}
      >
        <div
          className="inline-flex flex-col px-3 py-2"
          style={{ background: "#101012" }}
        >
          <p className="text-[16px] leading-6 text-white whitespace-nowrap mb-0">
            同时内部元素，通过「约束&缩放」
          </p>
          <p className="text-[16px] leading-6 text-white whitespace-nowrap">
            实现宽度自适应
          </p>
        </div>
      </div>

      {/* Section chip with 01-4 */}
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
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          自动布局 & 约束：随尺寸、数量调整自动适配
        </p>
      </div>
    </PageFrame>
  );
}
