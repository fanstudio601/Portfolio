import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { Signature } from "@/components/Signature";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <div
    className="inline-flex items-center rounded-lg px-3 py-1 text-[16px] leading-6 text-white font-hei font-bold"
    style={{
      background: "#2d2d2d",
      boxShadow: "inset 0 1px 1px 0 #5b5a61",
    }}
  >
    {children}
  </div>
);

const Card = ({
  x,
  tag,
  title,
  description,
  children,
  delay = 0,
}: {
  x: number;
  tag: string;
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}) => (
  <div
    className="absolute overflow-hidden rounded-[20px] anim-fade-up hover-lift"
    style={{
      left: x,
      top: 260,
      width: 579.333,
      height: 755,
      background: "#000",
      boxShadow: "inset 0 3px 3px 0 #2d2d2d",
      animationDelay: `${delay}s`,
    }}
  >
    <div
      className="absolute flex flex-col gap-10 items-start"
      style={{ left: 40, top: 40, width: 499 }}
    >
      <Tag>{tag}</Tag>
      <div className="flex flex-col gap-5 w-full">
        <h2 className="font-hei font-bold text-[32px] leading-[44px] text-white">
          {title}
        </h2>
        <p className="text-[16px] leading-6 text-white/70 w-full">
          {description}
        </p>
      </div>
    </div>
    {children}
  </div>
);

export default function Page2() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={203} />

      <PageHeader
        subtitle="目录"
        right={
          <p className="text-[16px] leading-5 text-white/70 font-display">
            UI/UX Designer
          </p>
        }
      />

      {/* Top signature — fade in then float softly */}
      <div
        className="anim-fade-then-float"
        style={{ animationDelay: "0.2s" }}
      >
        <Signature x={787} y={41} />
      </div>

      {/* Card 1: 外勤语音填报 */}
      <Card
        delay={0.3}
        x={53}
        tag="0-1 全链路产品落地"
        title="员工外勤语音填报"
        description={
          <>
            主要展示：借助{" "}
            <span className="text-white/90 font-medium">AI Coding</span>
            ，为企业内部
            <span className="text-white/90 font-medium">独立完成</span>
            产品研发，从需求梳理、交互、视觉，到前后端实现、AI 接入与部署上线的
            <span className="text-white/90 font-medium">全流程实践</span>。
          </>
        }
      >
        {/* 3 phone screenshots */}
        <div className="absolute" style={{ left: -3, top: 309 }}>
          <div className="flex gap-[15px]">
            {[
              "/figma/ce7fd096-1f67-41cc-82ad-c6816a1ce7d1.png",
              "/figma/3191a564-ee60-471b-938a-70007686238f.png",
              "/figma/c5ad1477-360d-42f4-900b-de4af5d3e73b.png",
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  width: 216,
                  height: 468,
                  border: "5px solid #2d2d2d",
                }}
              >
                <Img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Card 2: 图表组件库 + Figma 看板 */}
      <Card
        delay={0.45}
        x={672}
        tag="可视化组件 × 插件工具"
        title="图表组件库 与 Figma 看板插件"
        description={
          <>
            主要展示：基于企业{" "}
            <span className="text-white/90 font-medium">BI 业务 </span>
            沉淀图表组件库，并尝试研发 Figma 插件，
            <span className="text-white/90 font-medium">加速</span>
            需求梳理、设计搭建与前端实现流程。
          </>
        }
      >
        <div
          className="absolute"
          style={{ left: -24, top: 367, width: 627, height: 465 }}
        >
          <div className="absolute opacity-30" style={{ left: 0, top: 0 }}>
            <Img
              src="/figma/12dc370f-cf17-453f-97e4-ebe16c82690a.png"
              alt=""
              style={{
                width: 266,
                height: 465,
                border: "5px solid #2d2d2d",
                borderRadius: 12,
                objectFit: "cover",
              }}
            />
          </div>
          <div className="absolute opacity-30" style={{ right: 0, top: 0 }}>
            <Img
              src="/figma/1f51cad9-4af3-4a49-84a7-a1f8938a7197.png"
              alt=""
              style={{
                width: 266,
                height: 465,
                border: "5px solid #2d2d2d",
                borderRadius: 12,
                objectFit: "cover",
              }}
            />
          </div>
          <div
            className="absolute"
            style={{
              left: 163,
              top: -58,
              width: 295,
              height: 515,
              filter: "drop-shadow(0 4px 25px rgba(0,0,0,0.45))",
            }}
          >
            <Img
              src="/figma/af7df5f9-d265-40a5-bd39-b649d1d621d5.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                border: "5px solid #2d2d2d",
                borderRadius: 12,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </Card>

      {/* Card 3: 设计系统 × AI */}
      <Card
        delay={0.6}
        x={1291}
        tag="设计系统 × AI"
        title={
          <>
            当 AI 开始写界面，
            <br />
            我对”设计系统”的再思考
          </>
        }
        description={
          <>
            主要展示：基于自己的 Coding 实践，重新理解设计系统开始从
            <span className="text-white/90 font-medium">
              统一视觉与组件规范
            </span>
            ，走向面向 AI 生成的
            <span className="text-white/90 font-medium">上下文与约束</span>
            系统。
          </>
        }
      >
        {/* Cone gradient backdrop — wide trapezoid converging into the central button.
            max-w-none overrides Tailwind preflight's max-width:100% so the SVG can extend
            past the card edges, then overflow-hidden on the card clips it cleanly. */}
        <Img
          src="/figma/3a786afc-3db9-42db-94d3-2e58c04cbda6.svg"
          alt=""
          className="absolute pointer-events-none max-w-none"
          style={{
            left: -139.67,
            top: 297,
            width: 834,
            height: 454,
          }}
        />
        {/* Inner outline path (smaller, layered on top) */}
        <Img
          src="/figma/8b561e87-e8ba-477f-a073-d896c1753ad3.svg"
          alt=""
          className="absolute pointer-events-none max-w-none"
          style={{
            left: -43.17,
            top: 377,
            width: 634.5,
            height: 308.4,
          }}
        />

        {/* Skills cloud */}
        <div
          className="absolute"
          style={{ left: 40, top: 330, width: 500, height: 380 }}
        >
          <p
            className="absolute font-hei font-bold text-[30px] text-white/90 text-center"
            style={{ left: "50%", transform: "translateX(-50%)", top: 0 }}
          >
            🤔
          </p>
          {[
            { text: "Components", x: 35, y: 80, rot: -10, dur: 5.2, off: 0 },
            { text: "IDE", x: 65, y: 145, rot: 4, dur: 4.8, off: 1.1 },
            { text: "skills", x: 170, y: 135, rot: 4, dur: 5.6, off: 0.4 },
            { text: "Tokens", x: 195, y: 65, rot: 6, dur: 5.4, off: 1.8 },
            { text: "xxx.md", x: 325, y: 80, rot: 25, dur: 5.0, off: 0.7 },
            { text: "Stitch", x: 290, y: 135, rot: 25, dur: 5.5, off: 2.2 },
            { text: "Figma MCP", x: 160, y: 200, rot: -5, dur: 4.6, off: 1.5 },
            { text: "...", x: 200, y: 265, rot: 10, dur: 4.9, off: 0.9 },
          ].map((t, i) => (
            <div
              key={i}
              className="absolute anim-fade-up"
              style={{
                left: t.x,
                top: t.y,
                animationDelay: `${1 + i * 0.06}s`,
              }}
            >
              <div
                className="anim-drift-v"
                style={
                  {
                    "--rot": `${t.rot}deg`,
                    animationDuration: `${t.dur}s`,
                    animationDelay: `${t.off}s`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="px-4 py-1 rounded-lg text-[16px] leading-[26px] text-white whitespace-nowrap hover-tag"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "0.75px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {t.text}
                </div>
              </div>
            </div>
          ))}
          {/* Central button — pulses with a soft glow */}
          <div
            className="absolute rounded-full flex items-center justify-center anim-pulse-glow"
            style={{
              left: "50%",
              top: 320,
              transform: "translateX(-50%)",
              width: 65,
              height: 65,
              background: "#2d2d2d",
            }}
          >
            <Img
              src="/figma/d91a9807-a6ec-4257-a0f8-712fdce89d94.svg"
              alt=""
              className="w-7 h-7"
            />
          </div>
        </div>
      </Card>
    </PageFrame>
  );
}
