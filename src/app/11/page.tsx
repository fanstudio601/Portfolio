import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/**
 * 03-5-1 结构化解析：从“一段原话”输入 → “业务字段”输出
 *
 * Layout:
 *   - left narrow card (我的想法)
 *   - top-right wide card with 4 sub-issues (testing exposed problems)
 *   - bottom-right card with 4 solutions
 *   - far right phone screenshot
 */

const SectionChip = ({ label }: { label: string }) => (
  <div
    className="inline-flex items-center rounded-lg px-4 py-[9px]"
    style={{
      background: "#2d2d2d",
      boxShadow: "inset 0 1px 1px 0 #5b5a61",
    }}
  >
    <span className="text-[16px] leading-none text-white">{label}</span>
  </div>
);

const Mono = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontFamily: "'Source Code Pro', monospace" }}>{children}</span>
);

const CodeChip = ({ children }: { children: React.ReactNode }) => (
  <div
    className="inline-flex items-center justify-center px-2 py-[2px] rounded-[5px]"
    style={{ background: "#262626" }}
  >
    <span
      className="text-[16px] leading-[29px] text-white/70 whitespace-nowrap"
      style={{ fontFamily: "'Source Code Pro', monospace" }}
    >
      {children}
    </span>
  </div>
);

const VerticalSep = ({ src }: { src: string }) => (
  <Img src={src} alt="" className="self-stretch shrink-0" style={{ width: 1 }} />
);

const IssueCol = ({
  title,
  body,
  img,
  imgHeight = 171,
  delay = 0,
}: {
  title: string;
  body: string;
  img: string;
  imgHeight?: number;
  delay?: number;
}) => (
  <div
    className="flex-1 flex flex-col gap-6 items-start anim-fade-up"
    style={{ animationDelay: `${delay}s`, minWidth: 0 }}
  >
    <div className="flex flex-col gap-3 text-[16px] leading-[29px] w-full">
      <p className="font-hei font-bold text-white/90">{title}</p>
      <p className="text-white/70">{body}</p>
    </div>
    <div
      className="relative shrink-0 overflow-hidden"
      style={{ width: 230, height: imgHeight, borderRadius: 15 }}
    >
      <Img
        src={img}
        alt=""
        className="absolute w-full"
        style={{ height: "149.96%", top: 0, left: 0 }}
      />
    </div>
  </div>
);

export default function Page11() {
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
              src="/figma/4b048499-31d0-4a49-b50d-716a92752113.png"
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
              03-5-1
            </span>
          </div>
        </div>
        <p
          className="font-hei font-bold text-[32px] leading-[38px] text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          结构化解析：从“一段原话”输入 → “业务字段”输出
        </p>
      </div>

      {/* Right phone */}
      <div className="anim-fade-left" style={{ animationDelay: "0.3s" }}>
        <div
          className="absolute overflow-hidden"
          style={{
            left: 1560,
            top: 176,
            width: 388,
            height: 839,
            borderRadius: 24,
            border: "1px solid #cfc1ad",
          }}
        >
          <Img
            src="/figma/7df7b43c-0950-43af-84b6-6008ebbcea63.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Left card: 我的想法 */}
      <div
        className="absolute flex flex-col gap-10 items-start anim-fade-up"
        style={{
          left: 36,
          top: 234,
          width: 237,
          height: 810,
          padding: "31px 24px 34px 24px",
          borderRadius: 16,
          background: "rgba(255,255,255,0.02)",
          border: "0.919px solid rgba(255,255,255,0.2)",
          animationDelay: "0.3s",
        }}
      >
        <SectionChip label="我的想法" />
        <div className="flex flex-col gap-[9px] w-full">
          <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90">
            把自然语言转成业务字段
          </p>
          <p className="text-[16px] leading-[29px] text-white/70">
            语音识别之后，不停在原话，而是继续拆成业务字段。
          </p>
        </div>
        <div className="flex flex-col gap-[9px] w-full">
          <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90">
            接入 AI 做结构化解析
          </p>
          <p className="text-[16px] leading-[29px] text-white/70">
            在语音识别之后接入混元，先完成第一轮字段整理。
          </p>
        </div>
        <div className="flex flex-col gap-[9px] w-full">
          <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90">
            支持批量创建
          </p>
          <p className="text-[16px] leading-[29px] text-white/70">
            识别到多个独立日期时，可以创建多条记录。
          </p>
        </div>
        <div className="flex flex-col gap-[9px] w-full">
          <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90">
            保留人工纠错空间
          </p>
          <p className="text-[16px] leading-[29px] text-white/70">
            解析不可能完全准确，所以保留确认页让用户调整
          </p>
        </div>
      </div>

      {/* Top-right wide card: 测试后暴露的问题 */}
      <div
        className="absolute flex flex-col gap-6 items-start anim-fade-up"
        style={{
          left: 303,
          top: 234,
          width: 1218,
          height: 419,
          padding: "31px 32px 34px 32px",
          borderRadius: 16,
          background: "rgba(255,255,255,0.02)",
          border: "0.919px solid rgba(255,255,255,0.2)",
          animationDelay: "0.4s",
        }}
      >
        <SectionChip label="测试后暴露的问题，举例：" />
        <div className="flex gap-8 items-start w-full">
          <IssueCol
            delay={0.55}
            title="日期解析错误"
            body="原话里的 本周三，落到确认页后的真实日期和原话对不上。"
            img="/figma/fca76b5b-a31a-40e6-bf8f-c4baa1b6aa20.png"
          />
          <VerticalSep src="/figma/77732a57-c738-486f-a853-c8e2d91e45e9.svg" />
          <IssueCol
            delay={0.65}
            title="时间解析错误"
            body="原话里的 上午 没有正确落成时间范围；未提及时还会补默认值。"
            img="/figma/8b43f055-05b4-487b-86ea-1d2ddc8afce3.png"
            imgHeight={157}
          />
          <VerticalSep src="/figma/77732a57-c738-486f-a853-c8e2d91e45e9.svg" />
          <IssueCol
            delay={0.75}
            title="客户识别失败"
            body="原话里提到了客户名称，但没有正确映射成系统里的客户字段。"
            img="/figma/1c5189b4-2cb2-408b-b127-7250a04f7bca.png"
          />
          <VerticalSep src="/figma/77732a57-c738-486f-a853-c8e2d91e45e9.svg" />
          <IssueCol
            delay={0.85}
            title="事项内容未整理"
            body="外勤事项直接等于整段原话，没有被整理成结构化的内容。"
            img="/figma/20228374-8853-4680-a6ec-aa1a432ebab2.png"
            imgHeight={191}
          />
        </div>
      </div>

      {/* Bottom-right card: 最后的解决 */}
      <div
        className="absolute flex flex-col gap-6 items-start anim-fade-up"
        style={{
          left: 303,
          top: 669,
          width: 1218,
          height: 375,
          padding: "31px 32px 34px 32px",
          borderRadius: 16,
          background: "rgba(255,255,255,0.02)",
          border: "0.919px solid rgba(255,255,255,0.2)",
          animationDelay: "0.55s",
        }}
      >
        <SectionChip label="最后的解决" />
        <div className="flex flex-1 gap-8 items-start w-full">
          {/* 补参考日期 */}
          <div
            className="flex-1 flex flex-col gap-[26px] items-start anim-fade-up"
            style={{ animationDelay: "0.7s", minWidth: 0 }}
          >
            <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90 w-full">
              补参考日期
            </p>
            <div className="flex flex-col gap-3 w-full">
              <CodeChip>今天是 {"${todayStr}"}</CodeChip>
              <p className="text-[16px] leading-[29px] text-white/70">
                先给模型一个明确的日期参照
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <CodeChip>normalizeDateValue()</CodeChip>
              <p className="text-[16px] leading-[29px] text-white/70">
                把日期统一改成 YYYY-MM-DD
              </p>
            </div>
          </div>
          <VerticalSep src="/figma/e4129824-d84a-447a-a2d8-070e5dbe95e0.svg" />
          {/* 收口时间语义 */}
          <div
            className="flex-1 flex flex-col gap-[26px] items-start anim-fade-up"
            style={{ animationDelay: "0.78s", minWidth: 0 }}
          >
            <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90 w-full">
              收口时间语义
            </p>
            <div className="flex flex-col gap-[9px] w-full">
              <CodeChip>resolveParsedTimeRange()</CodeChip>
              <p className="text-[16px] leading-[29px] text-white/70">
                把“上午 / 全天”换成固定时间段
              </p>
            </div>
            <div className="flex flex-col gap-[9px] w-full">
              <CodeChip>{`startTime: ""/endTime: ""`}</CodeChip>
              <p className="text-[16px] leading-[29px] text-white/70">
                没提到时间时，允许字段为空
              </p>
            </div>
          </div>
          <VerticalSep src="/figma/e4129824-d84a-447a-a2d8-070e5dbe95e0.svg" />
          {/* 约束客户匹配 */}
          <div
            className="flex-1 flex flex-col gap-[26px] items-start anim-fade-up"
            style={{ animationDelay: "0.86s", minWidth: 0 }}
          >
            <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90 w-full">
              约束客户匹配
            </p>
            <div className="flex flex-col gap-[9px] w-full">
              <CodeChip>customerNames</CodeChip>
              <p className="text-[16px] leading-[29px] text-white/70">
                先把客户识别限制在已有名单里
              </p>
            </div>
            <div className="flex flex-col gap-[9px] w-full">
              <div
                className="inline-flex items-center justify-center px-2 py-[2px] rounded-[5px]"
                style={{ background: "#262626" }}
              >
                <span
                  className="text-[16px] leading-[25px] text-white/70 whitespace-pre"
                  style={{ fontFamily: "'Source Code Pro', monospace" }}
                >
                  {"parseWithRules(rawText, customers)"}
                </span>
              </div>
              <p className="text-[16px] leading-[29px] text-white/70">
                模型没匹配稳时，再用规则兜底
              </p>
            </div>
          </div>
          <VerticalSep src="/figma/e4129824-d84a-447a-a2d8-070e5dbe95e0.svg" />
          {/* 编号事项内容 */}
          <div
            className="flex-1 flex flex-col gap-[26px] items-start anim-fade-up"
            style={{ animationDelay: "0.94s", minWidth: 0 }}
          >
            <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90 w-full">
              编号事项内容
            </p>
            <div className="flex flex-col gap-[9px] w-full">
              <CodeChip>contentItems</CodeChip>
              <p className="text-[16px] leading-[29px] text-white/70">
                先把整段口语拆成事项数组
              </p>
            </div>
            <div className="flex flex-col gap-[9px] w-full">
              <CodeChip>formatWorkContent()</CodeChip>
              <p className="text-[16px] leading-[29px] text-white/70">
                再整理成最终的结构化内容
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* keep Mono type-active to silence unused warnings */}
      <div className="hidden">
        <Mono>x</Mono>
      </div>
    </PageFrame>
  );
}
