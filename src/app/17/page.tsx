import type { ReactNode } from "react";
import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/case-avatar.png";
const COMPONENT_TREE = "/figma/fe75b5ab-b01c-45b2-8f80-465d7fc4930b.png";
const CHART_RESPONSIVE = "/figma/603261e0-3d30-4834-ab57-2e4c83fbdf38.png";
const AUTO_LAYOUT_TALL = "/figma/d503e276-89b7-4e0c-82df-baa63b4109a0.png";
const AUTO_LAYOUT_PANEL = "/figma/eeba84c5-dd47-4711-90c3-a8637f4ca3cc.png";
const AUTO_LAYOUT_WIDE = "/figma/ab3b21b3-0435-4ad6-b18b-899544e7c31e.png";
const POSITION_PANEL = "/figma/19652aea-f4d0-4681-b5b1-2b460a209c1f.png";

const yTicks = ["1000.00", "800.00", "600.00", "400.00", "200.00", "0"];
const bars = [
  [72, 56],
  [50, 91],
  [65, 55],
  [79, 44],
  [93, 66],
  [56, 31],
  [72, 54],
  [41, 66],
  [56, 44],
];

function LabelBox({
  children,
  left,
  top,
  delay = 0.45,
}: {
  children: ReactNode;
  left: number;
  top: number;
  delay?: number;
}) {
  return (
    <div
      className="absolute inline-flex flex-col items-center justify-center rounded-lg px-4 py-[9px] anim-fade-up"
      style={{
        left,
        top,
        background: "#2d2d2d",
        boxShadow: "inset 0 1px 1px 0 #5b5a61",
        animationDelay: `${delay}s`,
      }}
    >
      <div className="text-[16px] leading-6 text-[#f7f8fa] whitespace-nowrap">
        {children}
      </div>
    </div>
  );
}

function MainChart() {
  return (
    <div
      className="absolute rounded-xl bg-white p-4 anim-fade-up"
      style={{ left: 33, top: 290, width: 659, height: 340, animationDelay: "0.32s" }}
    >
      <div className="flex items-center gap-5">
        <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[16px] font-medium leading-6 text-[#1d2129]">
          分组柱形图
        </p>
        <div className="flex items-center gap-2 text-[#4e5969]" aria-hidden>
          <span className="grid size-4 grid-cols-2 gap-[2px]">
            <span className="border border-current" />
            <span className="border border-current" />
            <span className="border border-current" />
            <span className="border border-current" />
          </span>
          <span className="size-4 border-2 border-current" />
          <span className="h-4 w-4 rotate-[-45deg] border-b-2 border-current" />
          <span className="text-[21px] leading-4">↻</span>
          <span className="text-[22px] leading-4">⋮</span>
        </div>
      </div>

      <div className="mt-1 flex items-center gap-5">
        <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[13px] leading-[22px] text-[#4e5969]">
          这里是注释内容
        </p>
        <p className="text-[12px] leading-5 text-[#86909c]">今天 04:23 更新</p>
      </div>

      <div className="mt-3 flex items-center">
        <p className="text-[12px] leading-5 text-[#86909c]">Y轴名称(单位)</p>
        <div className="ml-auto flex items-center gap-4">
          {[
            ["#165dff", "图例"],
            ["#14c9c9", "图例"],
          ].map(([color, text]) => (
            <span key={color} className="flex items-center gap-1 text-[12px] leading-5 text-[#4e5969]">
              <span className="size-2" style={{ background: color }} />
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-2 flex h-[204px]">
        <div className="flex w-[68px] flex-col justify-between pb-6 pr-1 text-right text-[12px] leading-5 text-[#86909c]">
          {yTicks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>
        <div className="relative h-full flex-1">
          <div className="absolute inset-0 bottom-6 flex flex-col justify-between">
            {yTicks.map((tick) => (
              <span
                key={tick}
                className="block h-px w-full border-t border-dashed border-[#e5e6eb]"
              />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-6 h-px bg-[#c9cdd4]" />
          <div className="absolute inset-x-0 bottom-6 top-0 flex items-end">
            {bars.map(([blue, cyan], index) => (
              <div key={index} className="flex h-full flex-1 items-end justify-center gap-0.5 px-2">
                <span className="block w-full max-w-[14px] bg-[#165dff]" style={{ height: `${blue}%` }} />
                <span className="block w-full max-w-[14px] bg-[#14c9c9]" style={{ height: `${cyan}%` }} />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex h-6 items-start justify-between pt-1 text-center text-[12px] leading-5 text-[#86909c]">
            {bars.map((_, index) => (
              <span key={index} className="flex-1">
                {index + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Screenshot({
  src,
  left,
  top,
  width,
  height,
  delay,
  rounded = 0,
  alt = "",
}: {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
  delay: number;
  rounded?: number;
  alt?: string;
}) {
  return (
    <div
      className="absolute overflow-hidden anim-fade-up"
      style={{
        left,
        top,
        width,
        height,
        borderRadius: rounded,
        animationDelay: `${delay}s`,
      }}
    >
      <Img src={src} alt={alt} className="block h-full w-full object-cover" />
    </div>
  );
}

function Connectors() {
  return (
    <svg
      className="absolute left-0 top-0 pointer-events-none anim-fade-in"
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      style={{ animationDelay: "0.75s" }}
      aria-hidden
    >
      <path
        d="M231 766 C269 784 293 790 328 790"
        stroke="rgba(255,255,255,0.36)"
        strokeWidth="1.4"
        strokeDasharray="3 3"
      />
      <path
        d="M874 657 L874 975 L1025 975"
        stroke="rgba(255,255,255,0.34)"
        strokeWidth="1.3"
        strokeDasharray="4 4"
      />
      <path
        d="M874 657 L887 843"
        stroke="rgba(255,255,255,0.34)"
        strokeWidth="1.3"
        strokeDasharray="4 4"
      />
      <path
        d="M1445 644 C1508 604 1574 597 1759 610"
        stroke="rgba(255,255,255,0.36)"
        strokeWidth="1.4"
      />
      <path
        d="M1445 482 C1520 471 1587 484 1759 482"
        stroke="rgba(255,255,255,0.36)"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function Page17() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <div
        className="absolute rounded-tr-[20px] border border-white/20 bg-white/[0.02] anim-fade-up"
        style={{ left: -1, top: 256, width: 722, height: 824, animationDelay: "0.2s" }}
      />

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
            01-4
          </span>
        </div>
        <p
          className="font-hei text-[36px] font-bold leading-10 text-white anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          自动布局 & 约束：随尺寸、数量调整自动适配
        </p>
      </div>

      <MainChart />
      <Screenshot
        src={COMPONENT_TREE}
        left={33}
        top={651}
        width={223}
        height={388}
        rounded={12}
        delay={0.42}
        alt="组件树细节"
      />

      <LabelBox left={339} top={651} delay={0.48}>
        组件树细节
      </LabelBox>
      <p
        className="absolute text-[16px] leading-6 text-[#f7f8fa] anim-fade-up"
        style={{ left: 339, top: 727, animationDelay: "0.54s" }}
      >
        其中：图形与网格线，存在z轴关系
        <br />
        因此，使用画框，收纳内部元素
      </p>
      <p
        className="absolute text-[16px] leading-6 text-[#f7f8fa] anim-fade-up"
        style={{ left: 339, top: 787, animationDelay: "0.6s" }}
      >
        同时内部元素，通过「约束&缩放」
        <br />
        实现宽度自适应
      </p>
      <Screenshot
        src={POSITION_PANEL}
        left={339}
        top={834}
        width={195}
        height={205}
        delay={0.66}
        alt="Position Constraints panel"
      />

      <p
        className="absolute font-hei text-[20px] font-bold leading-10 text-white anim-fade-up"
        style={{ left: 761, top: 256, animationDelay: "0.38s" }}
      >
        一些元素自适应细节，举例：
      </p>
      <LabelBox left={761} top={314} delay={0.45}>
        <span>柱形、网格线、X轴，跟随宽度自适应</span>
        <br />
        <span>其中柱形，可根据数量增加自动调整</span>
      </LabelBox>
      <Screenshot
        src={CHART_RESPONSIVE}
        left={761}
        top={404}
        width={503}
        height={302}
        rounded={4}
        delay={0.54}
        alt="横向尺寸自适应示例"
      />
      <Screenshot
        src={AUTO_LAYOUT_WIDE}
        left={761}
        top={724}
        width={257}
        height={305}
        rounded={8}
        delay={0.62}
        alt="Auto layout wide panel"
      />

      <div
        className="absolute border-l border-dashed border-white/20 anim-fade-up"
        style={{ left: 1306, top: 290, height: 790, animationDelay: "0.48s" }}
      />
      <LabelBox left={1346} top={314} delay={0.48}>
        <span>柱形顶部，在高度调整时，始终跟y轴刻度保持同步，</span>
        <br />
        <span>不会因为尺寸而影响数据比例</span>
      </LabelBox>
      <Screenshot
        src={AUTO_LAYOUT_TALL}
        left={1346}
        top={404}
        width={256}
        height={598}
        delay={0.58}
        alt="纵向尺寸自适应柱形图"
      />
      <Screenshot
        src={AUTO_LAYOUT_PANEL}
        left={1625}
        top={404}
        width={226}
        height={292}
        rounded={8}
        delay={0.68}
        alt="Auto layout panel"
      />

      <Connectors />
    </PageFrame>
  );
}
