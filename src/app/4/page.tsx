import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const ChatBubble = ({
  role,
  text,
  align = "left",
}: {
  role: string;
  text: string;
  align?: "left" | "right";
}) => (
  <div className="flex gap-3 items-start w-full">
    <div className="w-9 h-9 shrink-0">
      <Img
        src="/figma/9424410d-3ba1-4c9b-9f23-23ce76b3e0a0.svg"
        alt=""
        className="w-full h-full"
      />
    </div>
    <div className="flex-1 flex flex-col gap-1.5 min-w-0">
      <p className="text-[14px] leading-5 text-white/50">{role}</p>
      <div
        className="inline-flex items-center px-3.5 py-[5px] rounded-lg w-fit"
        style={{ background: "#252529" }}
      >
        <p
          className={`text-[16px] leading-8 text-white/70 whitespace-nowrap ${align === "right" ? "text-right" : ""}`}
        >
          {text}
        </p>
      </div>
    </div>
  </div>
);

const Section = ({
  x,
  intro,
  bubbles,
  title,
  description,
}: {
  x: number;
  intro: string;
  bubbles: React.ReactNode;
  title: string;
  description: string;
}) => (
  <>
    <p
      className="absolute text-[20px] leading-9 text-white/70 whitespace-nowrap"
      style={{ left: x, top: 253 }}
    >
      {intro}
    </p>
    <div
      className="absolute flex flex-col gap-7"
      style={{ left: x, top: 328, width: 510 }}
    >
      {bubbles}
    </div>
    <div
      className="absolute flex flex-col gap-4"
      style={{ left: x, top: 681, width: 510 }}
    >
      <p className="font-hei font-bold text-[24px] leading-[38px] text-white whitespace-nowrap">
        {title}
      </p>
      <p className="text-[16px] leading-8 text-white/70">{description}</p>
    </div>
  </>
);

const NumberChip = () => (
  <div
    className="inline-flex items-center justify-center px-4 py-1.5 rounded-full"
    style={{
      background: "#2d2d2d",
      width: 56,
      height: 56,
      boxShadow:
        "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
    }}
  >
    <span className="font-display italic font-bold text-[24px] text-white/50">
      01
    </span>
  </div>
);

export default function Page4() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="员工外勤语音填报"
        right={
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: 36,
              height: 36,
              border: "2px solid rgba(255,255,255,0.5)",
            }}
          >
            <Img
              src="/figma/b4a721d7-39be-4983-ad60-534162a2ec49.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Section title with 01 chip */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <NumberChip />
        <p className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap">
          从日常场景，到这个 Idea 的出现
        </p>
      </div>

      {/* Left timeline indicators */}
      <div
        className="absolute flex flex-col gap-6 items-center"
        style={{ left: 26, top: 410 }}
      >
        <span className="text-[32px]">👩🏻‍💻</span>
        <div
          className="w-px"
          style={{ height: 196, background: "rgba(255,255,255,0.2)" }}
        />
        <span className="text-[32px]">🤔</span>
        <div
          className="w-px"
          style={{ height: 111, background: "rgba(255,255,255,0.2)" }}
        />
        <span className="text-[32px]">💡</span>
      </div>

      {/* Vertical separators */}
      <div
        className="absolute w-px"
        style={{
          left: 72,
          top: 241,
          height: 792,
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <div
        className="absolute w-px"
        style={{
          left: 665,
          top: 241,
          height: 589,
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <div
        className="absolute w-px"
        style={{
          left: 1258,
          top: 241,
          height: 589,
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <div
        className="absolute w-px"
        style={{
          left: 1851,
          top: 233,
          height: 800,
          background: "rgba(255,255,255,0.08)",
        }}
      />

      {/* Three columns of chat */}
      <Section
        x={112}
        intro="在团队的日常协作里，大家经常需要临时确认："
        title="员工间协作问题"
        description="员工频繁在公司与现场之间流动，谁已到场、谁在处理、谁来接手，常常缺少统一记录，只能靠群里反复确认。"
        bubbles={
          <>
            <ChatBubble role="员工1" text="今天谁去航天502了？" />
            <ChatBubble role="员工2" text="XX，好像去了" align="right" />
            <ChatBubble
              role="员工1"
              text="@XX，你抽时间去楼上财务部给客户处理个问题"
            />
          </>
        }
      />

      <Section
        x={705}
        intro="到了考勤统计时，人力与员工之间要反复确认："
        title="考勤统计问题"
        description="员工外出频繁，单靠打卡难以反映真实出勤情况。缺少及时记录时，人力只能事后反复核对。"
        bubbles={
          <>
            <ChatBubble role="人力" text="你这天打卡是空白，去外勤了吗？" />
            <ChatBubble role="员工" text="对，那天去航天502了" align="right" />
          </>
        }
      />

      <Section
        x={1298}
        intro="项目收尾和结项沟通时，客户还会进一步追问："
        title="过程留痕问题"
        description="现场支持和推进过程缺少持续记录，到了项目收尾时，只能临时回找和零散整理，缺少清晰依据，导致尾款暂缓。"
        bubbles={
          <>
            <ChatBubble
              role="客户"
              text="项目到末尾了，前面现场支持和推进内容，梳理一份发我"
            />
            <div className="flex gap-7 w-full">
              <div className="flex-1">
                <ChatBubble role="员工" text="好的，我们整理一下" align="right" />
              </div>
              <div className="flex-1">
                <ChatBubble
                  role="内部视角"
                  text="临时回找、零散整理"
                  align="right"
                />
              </div>
            </div>
            <ChatBubble
              role="客户"
              text="缺少时间线和过程依据，等材料梳理清楚后，再推进结项"
            />
          </>
        }
      />

      {/* Horizontal gradient band */}
      <div
        className="absolute"
        style={{
          left: 0,
          top: 649,
          width: 1920,
          height: 1,
          background:
            "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 33%, rgba(255,255,255,0.15) 67%, transparent 100%)",
        }}
      />

      {/* Conclusion */}
      <p
        className="absolute font-hei font-bold text-[24px] text-white"
        style={{ left: 112, top: 905, lineHeight: "39px", width: 1700 }}
      >
        所以，我希望做一个工具，把员工外勤记录从零散口头同步，变成可留痕、可汇总、可追溯的结构化信息。
        <br />
        它既服务于内部协作和统计，也让后续与客户项目过程沟通更清晰、更有依据。
      </p>
    </PageFrame>
  );
}
