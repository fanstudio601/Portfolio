import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/**
 * 03-4 实时转写：从“组件视角” → “共享资源冲突”
 *
 * Layout: one wide card on the left (从设计出发的想法 + 基于指令的AI实现) and
 * two narrow cards on the right (问题 / 解决).
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

export default function Page10() {
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
              src="/figma/c9a724f8-a4f2-417c-a605-c9dbdbd60b1e.png"
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
              03-4
            </span>
          </div>
        </div>
        <p
          className="font-hei font-bold text-[32px] leading-[38px] text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          实时转写：从“组件视角” → “共享资源冲突”
        </p>
      </div>

      {/* Intro paragraph */}
      <p
        className="absolute text-[20px] leading-9 text-white/80 anim-fade-up"
        style={{ left: 81, top: 225, width: 1758, animationDelay: "0.3s" }}
      >
        这页我们换一个角度来讲，重点不在实时转写功能本身，而在于作为一个设计师，从设计复用和体验一致性的角度推动 AI Coding，结果在真实开发中暴露出共享资源冲突，并继续方案的过程。
      </p>

      {/* Wide-left card */}
      <div
        className="absolute flex flex-col gap-10 items-start anim-fade-up"
        style={{
          left: 80,
          top: 301,
          width: 1044,
          height: 720,
          padding: "31px 29px 34px 32px",
          borderRadius: 16,
          background: "rgba(255,255,255,0.02)",
          border: "0.919px solid rgba(255,255,255,0.2)",
          animationDelay: "0.4s",
        }}
      >
        {/* Top section: 从设计出发的想法 */}
        <div className="flex flex-col gap-6 w-full">
          <SectionChip label="从设计出发的想法" />
          <div className="flex gap-7 items-center">
            <div className="flex-1 text-[16px] leading-[29px] text-white/70">
              <p>因为首页主入口、确认页补录、确认页重录都涉及语音。</p>
              <p>所以，我希望实现体验一致性，保持样式、交互、反馈统一。</p>
              <p>因此给AI下达了指令“把它做成同一个组件”。</p>
            </div>
            <div className="flex gap-7 items-start">
              <div
                className="relative overflow-hidden shrink-0"
                style={{
                  width: 248,
                  height: 110,
                  borderRadius: 14.88,
                  border: "0.62px solid #cfc1ad",
                }}
              >
                <Img
                  src="/figma/215986d0-729d-4166-bc48-c213d3ba210d.png"
                  alt=""
                  className="absolute w-full"
                  style={{ height: "487.78%", top: "-387.57%", left: 0 }}
                />
                {/* dashed highlight overlay */}
                <div
                  className="absolute"
                  style={{
                    left: 69.44,
                    top: 19.58,
                    width: 173,
                    height: 40.3,
                    border: "1.24px dashed #1d1d1f",
                    borderRadius: 7.44,
                  }}
                />
              </div>
              <div
                className="relative overflow-hidden shrink-0"
                style={{
                  width: 248,
                  height: 110,
                  borderRadius: 14.88,
                  border: "0.62px solid #cfc1ad",
                }}
              >
                <Img
                  src="/figma/955699c0-85a6-484d-9892-c886aaff36d6.png"
                  alt=""
                  className="absolute"
                  style={{
                    height: "488.11%",
                    top: "-352.24%",
                    left: "-0.03%",
                    width: "100.07%",
                  }}
                />
                <div
                  className="absolute"
                  style={{
                    left: 7.44,
                    top: 63.28,
                    width: 126.48,
                    height: 36.58,
                    border: "1.24px dashed #1d1d1f",
                    borderRadius: 7.44,
                  }}
                />
                <div
                  className="absolute"
                  style={{
                    left: 199.02,
                    top: 11.82,
                    width: 33.48,
                    height: 32.24,
                    border: "1.24px dashed #1d1d1f",
                    borderRadius: 7.44,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: 基于指令的AI实现 */}
        <div className="flex flex-col gap-6 w-full">
          <SectionChip label="基于指令的AI实现" />
          <div className="text-[16px] leading-[29px] text-white/70">
            <p>
              <Mono>VoiceRecordButton</Mono>
              （组件层：被首页录音、确认页补录、确认页重录三个入口同时复用）
            </p>
            <p>
              ├── <Mono>ButtonUI</Mono>（视觉层：按钮样式、图标、浮层、波形、提示文字等界面反馈）
            </p>
            <p>
              ├── <Mono>PressGesture</Mono>（交互层：处理
              <Mono> touchstart、touchmove、touchend</Mono>
              ，控制长按、取消和松手结束）
            </p>
            <p>
              ├── <Mono>RecorderRuntime</Mono>（能力层：直接启动和停止录音器，占用同一套底层录音资源）
            </p>
            <p>
              ├── <Mono>RealtimeSocket</Mono>（连接层：建立实时转写连接，发送音频流并接收返回结果）
            </p>
            <p>
              ├── <Mono>RealtimeTranscriptState</Mono>（状态层：维护实时字幕内容，区分当前正在变化和已经稳定的文本）
            </p>
            <p>
              └── <Mono>RecordingPhase</Mono>（流程层：管理
              <Mono> stop / cancel / finalizing </Mono>
              等录音收尾状态）
            </p>
          </div>
          <Img
            src="/figma/9e8428f9-12e3-4881-a4ec-0d61ccdc7474.svg"
            alt=""
            style={{ width: 20, height: 26.2 }}
          />
          <div className="flex flex-col gap-3 w-full">
            <p className="font-hei font-bold text-[16px] leading-[29px] text-white/90">
              我理解的组件仅包含：
            </p>
            <p className="text-[16px] leading-[29px] text-white/70">
              <Mono>ButtonUI</Mono>
              （视觉层：按钮样式、图标、浮层、波形、提示文字等界面反馈）
            </p>
          </div>
        </div>
      </div>

      {/* Middle card: 测试后暴露的问题 */}
      <div
        className="absolute flex flex-col gap-8 items-start anim-fade-up"
        style={{
          left: 1150,
          top: 301,
          width: 335,
          height: 720,
          padding: "31px 29px 34px 32px",
          borderRadius: 16,
          background: "rgba(255,255,255,0.02)",
          border: "0.919px solid rgba(255,255,255,0.2)",
          animationDelay: "0.5s",
        }}
      >
        <SectionChip label="测试后暴露的问题" />
        <p className="text-[16px] leading-[29px] text-white/70">
          实时字幕只有第一次录音时显示，第二次则失效，始终显示默认文案
        </p>
        <div
          className="relative overflow-hidden shrink-0"
          style={{
            width: 274,
            height: 62,
            borderRadius: 16.44,
            border: "0.685px solid #cfc1ad",
          }}
        >
          <Img
            src="/figma/0809364f-9ac5-4a6b-b546-82bba447ead7.png"
            alt=""
            className="absolute"
            style={{
              height: "956.79%",
              top: "-225.8%",
              left: "-0.03%",
              width: "100.07%",
            }}
          />
        </div>
        <FieldBlock
          delay={0.65}
          title="实时字幕归属错位"
          body={
            <>
              <p>
                <Mono>RealtimeTranscriptState</Mono>
              </p>
              <p>在组件内，多个入口同时维护各自状态</p>
            </>
          }
        />
        <FieldBlock
          delay={0.75}
          title="连接和监听残留"
          body={
            <>
              <p>
                <Mono>RealtimeSocket</Mono>
              </p>
              <p>旧的实时连接仍然占着上一段录音状态</p>
            </>
          }
        />
        <FieldBlock
          delay={0.85}
          title="第二次长按失效"
          body={
            <>
              <p>
                <Mono>RecordingPhase</Mono>
              </p>
              <p>上一段录音的收尾状态没有完全释放</p>
            </>
          }
        />
      </div>

      {/* Right card: 最后的解决 */}
      <div
        className="absolute flex flex-col gap-8 items-start anim-fade-up"
        style={{
          left: 1511,
          top: 301,
          width: 330,
          height: 720,
          padding: "31px 29px 34px 32px",
          borderRadius: 16,
          background: "rgba(255,255,255,0.02)",
          border: "0.919px solid rgba(255,255,255,0.2)",
          animationDelay: "0.6s",
        }}
      >
        <SectionChip label="最后的解决" />
        <div className="font-hei font-bold text-[16px] leading-[29px] text-white/90">
          <p>组件负责渲染和交互，</p>
          <p>不负责共享能力和全局状态</p>
        </div>
        <Img
          src="/figma/9e8428f9-12e3-4881-a4ec-0d61ccdc7474.svg"
          alt=""
          style={{ width: 20, height: 26.2 }}
        />
        <FieldBlock
          delay={0.75}
          title="组件层"
          body="负责界面和交互，让体验统一"
        />
        <FieldBlock
          delay={0.85}
          title="系统层"
          body="负责录音和实时转写，让能力统一"
        />
        <FieldBlock
          delay={0.95}
          title="状态治理"
          body="负责协调多入口状态，避免冲突"
        />
      </div>
    </PageFrame>
  );
}
