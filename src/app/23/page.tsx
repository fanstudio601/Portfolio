import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 23 — 02-5 v5: 接入 MCP，让外部 AI 按图表规范生成，并在插件内统一接收
   Three step cards across the top (01 MCP-out, 02 batch-send, 03 reopen
   to edit), then two phone screenshots showing the chat → list flow and
   on the right a dark code-snippet panel showing the MCP server config.
   All chat/list/MCP-panel screenshots are individual image assets. */

const TRAE_CHAT = "/figma/24669db8-fb7f-4294-898f-6592e615d6f6.png";
const TRAE_MCP = "/figma/a05a9454-4eb4-4ec5-b43d-fea92ec6aaee.png";
const BUILDER_MCP = "/figma/607bf4ae-c6ff-4a87-971e-7ad4f0bf3da6.png";
const PLUGIN_LIST = "/figma/05b9bfce-8387-47b0-b6c3-d513d3ebca3f.png";
const PLUGIN_EDIT = "/figma/eae87863-13b7-4aeb-95e4-becc04d8dbc3.png";

function StepCard({
  left,
  n,
  title,
  desc,
  delay,
  width = 405,
}: {
  left: number;
  n: string;
  title: string;
  desc: string;
  delay: number;
  width?: number;
}) {
  return (
    <div
      className="absolute anim-fade-up"
      style={{
        left,
        top: 249,
        width,
        padding: 24,
        background: "rgba(255,255,255,0.02)",
        border: "0.9px solid rgba(255,255,255,0.2)",
        borderRadius: 16,
        animationDelay: `${delay}s`,
      }}
    >
      <p className="font-hei font-bold text-[16px] text-white/90 leading-7 mb-1 whitespace-nowrap">
        {title}
      </p>
      <p className="text-[16px] leading-7 text-white/70">{desc}</p>
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: -28,
          top: -28,
          width: 36,
          height: 36,
          borderRadius: 999,
          background: "#2d2d2d",
          boxShadow:
            "inset 0 -2px 2px 0 rgba(0,0,0,0.25), inset 0 2px 3px 0 #3f3e44",
          transform: "rotate(-20deg)",
        }}
      >
        <span className="font-display italic font-bold text-[12px] text-white leading-none">
          {n}
        </span>
      </div>
    </div>
  );
}

export default function Page23() {
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

      {/* 3 step cards */}
      <StepCard
        left={67}
        n="01"
        title={'通过 MCP，把"聊业务"放到外部'}
        desc="围绕业务完成分析，并按插件规范生成图表配置"
        delay={0.3}
      />
      <StepCard
        left={563}
        n="02"
        title="把图表结果，批量发送到插件"
        desc="结果统一接收到，插件列表集中管理"
        delay={0.38}
      />
      <StepCard
        left={1059}
        n="03"
        title="回到插件后，可二次编辑"
        desc="可基于原结果修改数据，也支持重置"
        delay={0.46}
      />

      {/* MCP code panel — right side */}
      <div
        className="absolute anim-fade-up"
        style={{
          left: 1536,
          top: 250,
          width: 384,
          height: 830,
          background: "black",
          borderTopLeftRadius: 20,
          boxShadow: "inset 3px 3px 3px 0 #2d2d2d",
          animationDelay: "0.5s",
        }}
      />
      {/* MCP code panel header */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 1536, top: 250, animationDelay: "0.55s" }}
      >
        <div
          className="inline-flex items-center gap-1 px-5 py-3 rounded-tl-[20px] rounded-br-[20px]"
          style={{
            background: "#2d2d2d",
            boxShadow: "inset 0 1px 1px 0 #5b5a61",
          }}
        >
          <span className="text-[18px] leading-none">📃</span>
          <span className="font-hei font-bold text-[18px] text-white leading-none whitespace-nowrap">
            统一配置协议，约束外部 AI 生成
          </span>
        </div>
      </div>
      <p
        className="absolute text-[16px] leading-7 text-white/70 anim-fade-up"
        style={{ left: 1569, top: 319, width: 328, animationDelay: "0.6s" }}
      >
        预先定义图表配置结构、样式字段和默认规则，限制外部 AI 的输出范围，让生成结果符合插件需求并可进入统一渲染流程。
      </p>
      <p
        className="absolute font-display font-bold text-[16px] text-white/80 leading-7 anim-fade-up whitespace-nowrap"
        style={{ left: 1569, top: 442, animationDelay: "0.65s" }}
      >
        mcp-server-cloud.js 👇
      </p>
      <div
        className="absolute font-display text-[12px] leading-6 text-white/70 anim-fade-up"
        style={{ left: 1569, top: 480, animationDelay: "0.7s" }}
      >
        {[
          "theme: 'light',",
          "useCustomColors: false,",
          "customUIColors: {",
          "  containerBg: '#FFFFFF',",
          "  containerBorder: '#FFFFFF',",
          "  titleText: '#1C1F23',",
          "  axisTitleText: '#86909C',",
          "  xAxisLabelText: '#1C1F23',",
          "  yAxisLabelText: '#86909C',",
          "  gridLine: '#E5E6EB',",
          "  axisLine: '#1C1F23',",
          "  legendText: '#1C1F23',",
          "  indicatorBg: '#FFFFFF',",
          "  chartAreaBg: '#FFFFFF',",
          "  indicatorLabelText: '#86909C',",
          "  indicatorCategoryText: '#1C1F23',",
          "  indicatorValueText: '#006EF9'",
          "},",
          "opacitySettings: {",
          "  container: 70,",
          "  indicator: 100,",
          "  chartArea: 100",
          "}",
        ].map((line, i) => (
          <p key={i} className="whitespace-pre">
            {line}
          </p>
        ))}
      </div>

      {/* Left small TRAE chat input screenshot */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 67,
          top: 375,
          width: 284,
          height: 115,
          borderRadius: 9,
          boxShadow: "-4px 0 4px rgba(0,0,0,0.08)",
          animationDelay: "0.55s",
        }}
      >
        <Img
          src={TRAE_CHAT}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </div>
      {/* Left bottom — TRAE MCP panel */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 67,
          top: 510,
          width: 373,
          height: 622,
          borderRadius: 9,
          animationDelay: "0.65s",
        }}
      >
        <Img
          src={TRAE_MCP}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      {/* Middle Builder MCP panel */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 565,
          top: 375,
          width: 396,
          height: 667,
          borderRadius: 12,
          border: "2px solid #2d2d2d",
          animationDelay: "0.7s",
        }}
      >
        <Img
          src={BUILDER_MCP}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      {/* Right plugin list panel */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1061,
          top: 375,
          width: 396,
          height: 667,
          borderRadius: 12,
          border: "2px solid #2d2d2d",
          animationDelay: "0.78s",
        }}
      >
        <Img
          src={PLUGIN_LIST}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      {/* Right edit overlay — small popup */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 232,
          top: 510,
          width: 255,
          height: 113,
          borderRadius: 9,
          boxShadow: "-4px 0 4px rgba(0,0,0,0.08)",
          animationDelay: "0.85s",
        }}
      >
        <Img
          src={PLUGIN_EDIT}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      {/* Section chip with 02-5 */}
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
            02-5
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          v5：接入 MCP，让外部 AI 按图表规范生成，并在插件内统一接收
        </p>
      </div>
    </PageFrame>
  );
}
