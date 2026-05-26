import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/**
 * 03-2 长按触发：从“顺滑”交互 → “重新长按”的体验取舍
 *
 * Layout: three info cards (我原本想要的与prompt / AI执行 / 真机测试暴露的问题与取舍)
 * + two phone screenshots showing the long-press behavior.
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

const FieldBlock = ({
  title,
  body,
  delay = 0,
}: {
  title: string;
  body: React.ReactNode;
  delay?: number;
}) => (
  <div
    className="flex flex-col gap-[9px] w-full anim-fade-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90">
      {title}
    </p>
    <div className="text-[16px] leading-[29px] text-white/70">{body}</div>
  </div>
);

const Card = ({
  left,
  chip,
  children,
  delay = 0,
}: {
  left: number;
  chip: string;
  children: React.ReactNode;
  delay?: number;
}) => (
  <div
    className="absolute flex flex-col gap-[35px] items-start anim-fade-up"
    style={{
      left,
      top: 249,
      width: 341,
      height: 754,
      padding: "31px 28px 34px 32px",
      borderRadius: 16,
      background: "rgba(255,255,255,0.02)",
      border: "0.919px solid rgba(255,255,255,0.2)",
      animationDelay: `${delay}s`,
    }}
  >
    <SectionChip label={chip} />
    <div className="flex flex-col gap-10 w-full">{children}</div>
  </div>
);

export default function Page8() {
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
              src="/figma/f42bdf18-3f7a-43f9-a355-74b499b26799.png"
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
              03-2
            </span>
          </div>
        </div>
        <p
          className="font-hei font-bold text-[32px] leading-[38px] text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          长按触发：从“顺滑”交互 → “重新长按”的体验取舍
        </p>
      </div>

      {/* Card 1: 我原本想要的与prompt */}
      <Card left={80} chip="我原本想要的与prompt" delay={0.3}>
        <FieldBlock
          delay={0.4}
          title="交互方式"
          body="用户长按后开始录音，松手后结束，上滑后取消。"
        />
        <FieldBlock
          delay={0.5}
          title="录音反馈"
          body="长按后进入录音状态，并给出明确提示：“松手发送、上滑取消”。"
        />
        <FieldBlock
          delay={0.6}
          title="取消状态"
          body="如果用户上滑进入取消区，提示文案要同步切换“松手取消”。"
        />
      </Card>

      {/* Card 2: AI执行 */}
      <Card left={453} chip="AI执行" delay={0.38}>
        <FieldBlock
          delay={0.48}
          title="长按触发"
          body={
            <div className="flex flex-col gap-2 items-start">
              <CodeChip>handlePressStart()</CodeChip>
              <p>启动长按计时器，并计时</p>
              <CodeChip>LONG_PRESS_DELAY = 350ms</CodeChip>
              <p>达到阈值后开始录音</p>
              <CodeChip>startRecordingLogic()</CodeChip>
            </div>
          }
        />
        <FieldBlock
          delay={0.58}
          title="手势监听"
          body={
            <div className="flex flex-col gap-2 items-start">
              <p>处理开始、结束、取消和移动的切换</p>
              <CodeChip>@touchstart / @touchend</CodeChip>
              <CodeChip>@touchcancel / @touchmove</CodeChip>
            </div>
          }
        />
        <FieldBlock
          delay={0.68}
          title="上滑取消"
          body={
            <div className="flex flex-col gap-2 items-start">
              <p>
                通过{" "}
                <span style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  @touchmove
                </span>{" "}
                判断手指位移，上滑超过 80 后，切换到取消态
              </p>
              <CodeChip>CANCEL_THRESHOLD = 80</CodeChip>
            </div>
          }
        />
      </Card>

      {/* Card 3: 真机测试暴露的问题与取舍 */}
      <Card left={826} chip="真机测试暴露的问题与取舍" delay={0.46}>
        <FieldBlock
          delay={0.56}
          title="首次授权会打断长按"
          body="小程序内，第一次录音会先弹出麦克风授权，用户点完“允许”时，手已经离开屏幕，但系统这时才刚准备进入录音态。"
        />
        <FieldBlock
          delay={0.66}
          title="录音状态和用户手势脱节"
          body="这时原本那条的完整手势流程不再成立。用户已经不在长按，系统却还停在录音开始阶段，后续的发送和取消，因为监听不到长按动作，而无法取消，从而陷入死循环。"
        />
        <div className="anim-fade-in" style={{ animationDelay: "0.76s" }}>
          <Img
            src="/figma/722c81df-c271-446d-9188-5d6f0d7a6377.svg"
            alt=""
            style={{ width: 20, height: 26.2 }}
          />
        </div>
        <FieldBlock
          delay={0.86}
          title="因为平台机制，对体验做取舍"
          body={
            <>
              <p>允许权限后才能真正开始录音</p>
              <p>提示：麦克风已开启，请再次长按</p>
              <p>重新开始一条新链路</p>
            </>
          }
        />
      </Card>

      {/* Right-side phones */}
      <div className="anim-fade-left" style={{ animationDelay: "0.3s" }}>
        <div
          className="absolute overflow-hidden"
          style={{
            left: 1220,
            top: 236,
            width: 346.5,
            height: 749.7,
            borderRadius: 20.8,
            border: "0.866px solid #cfc1ad",
          }}
        >
          <Img
            src="/figma/b771fceb-4c83-4d7c-a7cc-47b534a81c68.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="anim-fade-left" style={{ animationDelay: "0.4s" }}>
        <div
          className="absolute overflow-hidden"
          style={{
            left: 1584.5,
            top: 236,
            width: 346.5,
            height: 749.7,
            borderRadius: 20.8,
            border: "0.866px solid #cfc1ad",
          }}
        >
          <Img
            src="/figma/2566287e-e986-4992-9bd2-379af179c60c.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </PageFrame>
  );
}
