import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/**
 * 03-1 录入引导：从“静态”说明 → “带记忆”的新手教育
 *
 * Layout: three info cards on the left (我的想法 / 我的prompt / AI执行) and
 * two phone screenshots on the right showing the guide UI.
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
    className="absolute flex flex-col gap-[35px] items-start anim-fade-up"
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
    <div className="flex flex-col gap-10 w-full">{children}</div>
  </div>
);

export default function Page7() {
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
              src="/figma/ff120c3f-b2ba-46c9-9fed-c0168dce138c.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Section title with 03-1 chip */}
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
              03-1
            </span>
          </div>
        </div>
        <p
          className="font-hei font-bold text-[32px] leading-[38px] text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          录入引导：从“静态”说明 → “带记忆”的新手教育
        </p>
      </div>

      {/* Three info cards (left side) */}
      <Card left={80} chip="我的想法" delay={0.3}>
        <FieldBlock
          delay={0.4}
          title="用槽位提示降低门槛"
          body="先提示语音录入需要日期、时间段、客户、事项等关键信息"
        />
        <FieldBlock
          delay={0.5}
          title="减少对熟练用户的打扰"
          body="第一次需要查看提示，之后引导自动隐藏，但也支持自主查看"
        />
        <FieldBlock
          delay={0.6}
          title="给记录区留出空间"
          body="让首页记录列表有更稳定的可视高度，尤其是小屏手机"
        />
      </Card>

      <Card
        left={453}
        chip="我的prompt"
        intro={<p>结构化、可执行的开发要求</p>}
        delay={0.38}
      >
        <FieldBlock
          delay={0.48}
          title="模块对象"
          body={
            <ul className="list-disc pl-6">
              <li>首页语音入口上方的槽位提示区域</li>
            </ul>
          }
        />
        <FieldBlock
          delay={0.58}
          title="状态要求"
          body={
            <ul className="list-disc pl-6">
              <li>新用户默认展开</li>
              <li>用户点“知道了”后收起</li>
              <li>下次进入首页时保持收起状态</li>
              <li>收起后支持手动再次展开</li>
            </ul>
          }
        />
        <FieldBlock
          delay={0.68}
          title="布局要求"
          body={
            <ul className="list-disc pl-6">
              <li>收起后要真正释放div空间</li>
              <li>不要只做视觉隐藏</li>
            </ul>
          }
        />
      </Card>

      <Card
        left={826}
        chip="AI执行"
        intro={
          <p>
            <span className="font-hei font-bold text-white/90">本地记忆 + 条件渲染</span>
            <span> 的引导逻辑</span>
          </p>
        }
        delay={0.46}
      >
        <FieldBlock
          delay={0.56}
          title="存储"
          body={
            <div className="flex flex-col gap-2 items-start">
              <CodeChip>QUICK_GUIDE_COLLAPSED_KEY</CodeChip>
              <p>记录用户之前是否主动收起过引导</p>
            </div>
          }
        />
        <FieldBlock
          delay={0.66}
          title="读取"
          body={
            <div className="flex flex-col gap-2 items-start">
              <CodeChip>uni.getStorageSync()</CodeChip>
              <p>如果读到收起记录，引导默认不展开</p>
            </div>
          }
        />
        <FieldBlock
          delay={0.76}
          title="交互回写"
          body={
            <div className="flex flex-col gap-2 items-start">
              <p>点击“知道了”后，把最新状态写回去</p>
              <CodeChip>uni.getStorageSync()</CodeChip>
            </div>
          }
        />
        <FieldBlock
          delay={0.86}
          title="渲染"
          body={
            <div className="flex flex-col gap-2 items-start">
              <p>收起后条件渲染退场，释放空间</p>
              <CodeChip>{`v-if="!isQuickGuideCollapsed"`}</CodeChip>
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
            src="/figma/48202857-5cd6-4999-95fd-5f737872789f.png"
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
            src="/figma/cef5a893-d0dd-498b-baea-9651a90ba868.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </PageFrame>
  );
}
