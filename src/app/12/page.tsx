import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/**
 * 03-5-2 结构化解析：从“语音原文”到“字段结果”的全景链路
 *
 * Top: numbered breadcrumb of 12 steps + a rotated diamond for "解析结果类型".
 * Body: three vertical lanes (输入层 / 解析层 / 输出层) made of stacked cards,
 * each card carries a small tilted number chip in its upper-left corner.
 */

const Mono = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontFamily: "'Source Code Pro', monospace" }}>{children}</span>
);

const StepPill = ({
  n,
  text,
  width,
}: {
  n: string;
  text: string;
  width?: number | string;
}) => (
  <div
    className="inline-flex items-center gap-[10px] px-[13px] py-2 rounded-lg shrink-0"
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid #28282a",
      width,
    }}
  >
    <span className="font-display italic font-bold text-[16px] text-white/50 leading-none">
      {n}
    </span>
    <span className="text-[16px] leading-[26px] text-white/90 whitespace-nowrap">
      {text}
    </span>
  </div>
);

const Arrow = ({ src, width = 30 }: { src: string; width?: number | string }) => (
  <Img
    src={src}
    alt=""
    className="shrink-0"
    style={{ width, height: 6, flex: typeof width === "string" ? "1 0 0" : undefined }}
  />
);

/** Small tilted number chip in card corner */
const NumberChip = ({ n }: { n: string }) => (
  <div
    className="absolute flex items-center justify-center"
    style={{
      left: -27.72,
      top: -27.72,
      width: 36.45,
      height: 36.45,
      transform: "rotate(-20deg)",
    }}
  >
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: 28.4,
        height: 28.4,
        background: "#2d2d2d",
        boxShadow:
          "inset 0 -2px 2px 0 rgba(0,0,0,0.25), inset 0 2px 2.5px 0 #3f3e44",
      }}
    >
      <span
        className="font-display italic font-bold text-white"
        style={{ fontSize: 12.2, lineHeight: 1 }}
      >
        {n}
      </span>
    </div>
  </div>
);

const Card = ({
  n,
  title,
  code,
  body,
  delay = 0,
}: {
  n: string;
  title: string;
  code?: React.ReactNode;
  body?: React.ReactNode;
  delay?: number;
}) => (
  <div
    className="relative flex flex-col gap-[9px] items-start anim-fade-up"
    style={{
      width: "100%",
      padding: 16,
      borderRadius: 16,
      background: "rgba(255,255,255,0.02)",
      border: "0.919px solid rgba(255,255,255,0.2)",
      animationDelay: `${delay}s`,
    }}
  >
    <NumberChip n={n} />
    <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90 w-full">
      {title}
    </p>
    {code && (
      <div
        className="inline-flex items-center justify-center px-2 py-[2px] rounded-[5px]"
        style={{ background: "#262626" }}
      >
        <span
          className="text-[16px] leading-[29px] text-white/70 whitespace-nowrap"
          style={{ fontFamily: "'Source Code Pro', monospace" }}
        >
          {code}
        </span>
      </div>
    )}
    {body && (
      <div className="text-[16px] leading-[29px] text-white/70 w-full">
        {body}
      </div>
    )}
  </div>
);

export default function Page12() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="员工外勤语音填报"
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
              src="/figma/fce91961-98cf-4125-8341-ff318e639c38.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Section title */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div className="anim-scale-in" style={{ animationDelay: "0.15s" }}>
          <div
            className="flex items-center justify-center rounded-full px-4 py-1.5"
            style={{
              height: 56,
              background: "#2d2d2d",
              boxShadow:
                "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
            }}
          >
            <span className="font-display italic font-bold text-[24px] text-white/50">
              03-5-2
            </span>
          </div>
        </div>
        <p
          className="font-hei font-bold text-[32px] leading-[38px] text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          结构化解析：从“语音原文”到“字段结果”的全景链路
        </p>
      </div>

      {/* Top breadcrumb (steps 1-8, diamond 9, then 10-12 split lanes) */}
      <div
        className="absolute flex items-center anim-fade-up"
        style={{ left: 46, top: 244, animationDelay: "0.3s" }}
      >
        <StepPill n="1" text="语音录入" />
        <Arrow src="/figma/d4a63d1f-7b46-4004-a297-cebb597aea29.svg" />
        <StepPill n="2" text="上传音频" />
        <Arrow src="/figma/d4a63d1f-7b46-4004-a297-cebb597aea29.svg" />
        <StepPill n="3" text="语音识别" />
        <Arrow src="/figma/d4a63d1f-7b46-4004-a297-cebb597aea29.svg" />
        <StepPill n="4" text="结构化解析" />
        <Arrow src="/figma/542e5e8f-f42c-43d3-9621-d20232e555c6.svg" />
        <StepPill n="5" text="补业务上下文" />
        <Arrow src="/figma/542e5e8f-f42c-43d3-9621-d20232e555c6.svg" />
        <StepPill n="6" text="AI字段抽取" />
        <Arrow src="/figma/542e5e8f-f42c-43d3-9621-d20232e555c6.svg" />
        <StepPill n="7" text="规则矫正" />
        <Arrow src="/figma/542e5e8f-f42c-43d3-9621-d20232e555c6.svg" />
        <StepPill n="8" text="结果化规一" />
        <Arrow src="/figma/d4a63d1f-7b46-4004-a297-cebb597aea29.svg" />

        {/* Rotated diamond — 9: 解析结果类型 */}
        <div
          className="relative shrink-0"
          style={{ width: 141.4, height: 141.4 }}
        >
          <div
            className="absolute left-1/2 top-1/2 flex items-center justify-center"
            style={{
              transform: "translate(-50%, -50%) rotate(-45deg)",
              width: 100,
              height: 100,
              borderRadius: 8,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid #28282a",
            }}
          >
            <div style={{ transform: "rotate(45deg)" }}>
              <div className="font-display italic font-bold text-[16px] text-white/50 leading-none mb-1">
                9
              </div>
              <p className="text-[16px] leading-[26px] text-white/90 text-center">
                解析结果
                <br />
                类型
              </p>
            </div>
          </div>
        </div>

        {/* Branching arrow group */}
        <Img
          src="/figma/06d70e7a-1f67-4109-83d5-9a6199a134d8.svg"
          alt=""
          className="shrink-0"
          style={{ width: 40, height: 83 }}
        />

        {/* Two lanes after the branch */}
        <div className="flex flex-col gap-10 items-start shrink-0">
          <div
            className="flex items-center"
            style={{ width: 445 }}
          >
            <StepPill n="10" text="单项字段" />
            <Arrow src="/figma/53f3b5a8-d4b8-461e-adde-dead908f8348.svg" width="100%" />
            <StepPill n="11" text="确认页" width={115} />
            <Arrow src="/figma/53f3b5a8-d4b8-461e-adde-dead908f8348.svg" width="100%" />
            <StepPill n="12" text="提交1条" />
          </div>
          <div className="flex items-center" style={{ width: 445 }}>
            <StepPill n="10" text="批量字段" />
            <Arrow src="/figma/1afbcf86-899f-41c9-8d4b-4dd88eca6806.svg" width="100%" />
            <StepPill n="11" text="提示多条" />
            <Arrow src="/figma/1afbcf86-899f-41c9-8d4b-4dd88eca6806.svg" width="100%" />
            <StepPill n="12" text="提交多条" />
          </div>
        </div>
      </div>

      {/* Lane labels + dividers */}
      <div
        className="absolute anim-fade-up"
        style={{
          left: 0,
          top: 426,
          width: 448,
          height: 80,
          background: "rgba(255,255,255,0.05)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          animationDelay: "0.45s",
        }}
      />
      <div
        className="absolute anim-fade-up"
        style={{
          left: 448,
          top: 426,
          width: 945,
          height: 80,
          background: "rgba(255,255,255,0.05)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          animationDelay: "0.5s",
        }}
      />
      <div
        className="absolute anim-fade-up"
        style={{
          left: 1393,
          top: 426,
          width: 527,
          height: 80,
          background: "rgba(255,255,255,0.05)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          animationDelay: "0.55s",
        }}
      />
      <p
        className="absolute font-hei font-bold text-[24px] leading-[38px] text-white whitespace-nowrap anim-fade-up"
        style={{ left: 188, top: 447, animationDelay: "0.55s" }}
      >
        输入层
      </p>
      <p
        className="absolute font-hei font-bold text-[24px] leading-[38px] text-white whitespace-nowrap anim-fade-up"
        style={{ left: 884, top: 447, animationDelay: "0.6s" }}
      >
        解析层
      </p>
      <p
        className="absolute font-hei font-bold text-[24px] leading-[38px] text-white whitespace-nowrap anim-fade-up"
        style={{ left: 1620, top: 447, animationDelay: "0.65s" }}
      >
        输出层
      </p>

      {/* Vertical dividers between lanes */}
      <Img
        src="/figma/e0ded408-7f80-4ec8-9de7-3fe4a502860e.svg"
        alt=""
        className="absolute anim-fade-in"
        style={{ left: 448, top: 207, width: 1, height: 835, animationDelay: "0.5s" }}
      />
      <Img
        src="/figma/e0ded408-7f80-4ec8-9de7-3fe4a502860e.svg"
        alt=""
        className="absolute anim-fade-in"
        style={{ left: 1393, top: 207, width: 1, height: 835, animationDelay: "0.55s" }}
      />

      {/* Input lane (left) — three stacked cards */}
      <div
        className="absolute flex flex-col gap-5 items-start"
        style={{ left: 35, top: 540, width: 385 }}
      >
        <Card
          n="01"
          title="语音录入"
          body="只负责采集声音，暂未进入业务判断"
          delay={0.6}
        />
        <Card
          n="02"
          title="上传音频"
          code="/voice/upload"
          body={
            <p>
              后端生成 <Mono>audioId</Mono>，把这段语音固定成一个可追踪对象
            </p>
          }
          delay={0.7}
        />
        <Card
          n="03"
          title="语音识别"
          code="/voice/transcribe"
          body={
            <p>
              把音频转成 <Mono>rawText</Mono>，用于后续解析处理
            </p>
          }
          delay={0.8}
        />
      </div>

      {/* Middle lane (解析层) */}
      {/* 04 解析入口 */}
      <div
        className="absolute"
        style={{ left: 475, top: 540, width: 446 }}
      >
        <Card
          n="04"
          title="结构化解析入口"
          code="/voice/parse"
          body={
            <p>
              解析接口接收 <Mono>audioId + rawText</Mono>，开始进入字段解析
            </p>
          }
          delay={0.65}
        />
      </div>
      {/* 06 AI 字段抽取 */}
      <div className="absolute" style={{ left: 475, top: 696, width: 446 }}>
        <Card
          n="06"
          title="AI 字段抽取"
          code="extractWorklogFieldsByHunyuan()"
          body="混元先完成第一轮结构化抽取，返回字段草稿"
          delay={0.85}
        />
      </div>
      {/* 05 补业务上下文 */}
      <div className="absolute" style={{ left: 941, top: 540, width: 425 }}>
        <Card
          n="05"
          title="补业务上下文"
          code="todayStr / customerNames"
          body="先补当前日期和客户名单，让模型有明确参照"
          delay={0.75}
        />
      </div>
      {/* 07 规则校正 */}
      <div className="absolute" style={{ left: 941, top: 696, width: 425 }}>
        <Card
          n="07"
          title="规则校正"
          code="parseWithRules(rawText, customers)"
          body="抽取之后，用规则补一轮日期、时间、客户和事项判断"
          delay={0.95}
        />
      </div>
      {/* 08 结果归一化 */}
      <div className="absolute" style={{ left: 475, top: 852, width: 891 }}>
        <Card
          n="08"
          title="结果归一化"
          code="normalizeDateValue() / resolveParsedTimeRange() / formatWorkContent()"
          body="把解析内容，统一成表单能直接使用的格式"
          delay={1.05}
        />
      </div>

      {/* Right lane (输出层) */}
      <div
        className="absolute flex flex-col gap-5 items-start"
        style={{ left: 1420, top: 540, width: 469 }}
      >
        <Card
          n="09"
          title="解析结果类型"
          code="separateDates / entries"
          body="先判断这次结果是单项还是批量"
          delay={0.7}
        />
        <Card
          n="10"
          title="单项字段结果"
          code="fields + unresolvedFields"
          body="如果只对应一条记录，就输出单项字段结果"
          delay={0.8}
        />
        <Card
          n="11"
          title="批量字段结果"
          code="separateDates + entries"
          body="如果识别到多个独立日期，就进入批量生成分支"
          delay={0.9}
        />
      </div>
    </PageFrame>
  );
}
