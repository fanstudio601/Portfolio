import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/**
 * 03-3 录音反馈：从“写死”SVG 动画 → “可感知”听写
 *
 * Three info cards (我的想法 / 我的prompt / AI执行) + two phone screenshots.
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
  intro,
  children,
  delay = 0,
}: {
  left: number;
  chip: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}) => (
  <div
    className="absolute flex flex-col gap-[28px] items-start anim-fade-up"
    style={{
      left,
      top: 247,
      width: 341,
      height: 754,
      padding: "31px 29px 34px 32px",
      borderRadius: 16,
      background: "rgba(255,255,255,0.02)",
      border: "0.919px solid rgba(255,255,255,0.2)",
      animationDelay: `${delay}s`,
    }}
  >
    <SectionChip label={chip} />
    {intro && (
      <div className="text-[16px] leading-[29px] text-white/70 w-full">
        {intro}
      </div>
    )}
    <div className="flex flex-col gap-7 w-full">{children}</div>
  </div>
);

export default function Page9() {
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
              src="/figma/ee69d44d-ceeb-4948-bf63-857dc04dbba1.png"
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
              03-3
            </span>
          </div>
        </div>
        <p
          className="font-hei font-bold text-[32px] leading-[38px] text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          录音反馈：从“写死”SVG 动画 → “可感知”听写
        </p>
      </div>

      {/* Card 1: 我的想法 */}
      <Card
        left={80}
        chip="我的想法"
        intro={
          <>
            <p>前情提要：</p>
            <p>第一版实现出来的，其实只是一个固定循环的 SVG 动画</p>
            <p className="mt-4">But，我希望再优化：</p>
          </>
        }
        delay={0.3}
      >
        <FieldBlock
          delay={0.45}
          title="让用户“感知正在录音”"
          body="录音开始后，页面能明显进入“正在录音”的状态。"
        />
        <FieldBlock
          delay={0.55}
          title="让波形成为“可信度反馈”"
          body="更根据实时音量，让用户从它的变化里感知到：系统真的在听、真的在处理。"
        />
      </Card>

      {/* Card 2: 我的prompt */}
      <Card
        left={453}
        chip="我的prompt"
        intro={<p>针对动效类很难完整描述，所以我会先定义它的核心元素，再让 AI 基于这些约束给出实现方案。</p>}
        delay={0.38}
      >
        <FieldBlock
          delay={0.5}
          title="模块对象"
          body={
            <ul className="list-disc pl-6">
              <li>录音浮层中的波形区域</li>
            </ul>
          }
        />
        <FieldBlock
          delay={0.6}
          title="运动形式"
          body={
            <ul className="list-disc pl-6">
              <li>采用连续起伏的胶囊柱状波形</li>
              <li>中间振幅更明显，两侧相对收束</li>
            </ul>
          }
        />
        <FieldBlock
          delay={0.7}
          title="变化依据"
          body={
            <ul className="list-disc pl-6">
              <li>波形振幅跟随实时音量变化</li>
              <li>声音越强，波形越高；安静时明显收缩，但要保持可见</li>
            </ul>
          }
        />
        <FieldBlock
          delay={0.8}
          title="状态切换"
          body={
            <ul className="list-disc pl-6">
              <li>正常录音态为主题色</li>
              <li>进入取消区后同步切换为取消态颜色</li>
            </ul>
          }
        />
      </Card>

      {/* Card 3: AI执行 */}
      <Card left={826} chip="AI执行" delay={0.46}>
        <FieldBlock
          delay={0.58}
          title="音频帧采样"
          body={
            <div className="flex flex-col gap-2 items-start">
              <CodeChip>onFrameRecorded</CodeChip>
              <p>边录边收取一段段原始音频PCM切片</p>
            </div>
          }
        />
        <FieldBlock
          delay={0.68}
          title="音量计算"
          body={
            <div className="flex flex-col gap-2 items-start">
              <CodeChip>calculateVolumeRMS()</CodeChip>
              <p>对PCM，计算当前音量强度，供后面的波形绘制使用</p>
            </div>
          }
        />
        <FieldBlock
          delay={0.78}
          title="目标振幅"
          body={
            <div className="flex flex-col gap-2 items-start">
              <CodeChip>targetVolume / currentVolume</CodeChip>
              <p>RMS结果不会直接绘制，而是确定“最大值”，再“逐步增长”，让视觉更连续</p>
            </div>
          }
        />
        <FieldBlock
          delay={0.88}
          title="波形绘制"
          body={
            <div className="flex flex-col gap-2 items-start">
              <CodeChip>drawSiriWave()</CodeChip>
              <p>
                基于
                <span style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  {" "}currentVolume，{" "}
                </span>
                用
                <span style={{ fontFamily: "'Source Code Pro', monospace" }}>
                  {" "}Canvas{" "}
                </span>
                逐帧绘制柱状波形
              </p>
            </div>
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
            src="/figma/fac624d6-fe02-46a2-88ed-7f8315081992.png"
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
            src="/figma/7e258904-b9ef-44a7-92b2-9816f583300e.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </PageFrame>
  );
}
