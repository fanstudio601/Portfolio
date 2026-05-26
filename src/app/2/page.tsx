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
}: {
  x: number;
  tag: string;
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div
    className="absolute overflow-hidden rounded-[20px]"
    style={{
      left: x,
      top: 260,
      width: 579.333,
      height: 755,
      background: "#000",
      boxShadow: "inset 0 3px 3px 0 #2d2d2d",
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

      {/* Top signature */}
      <Signature x={787} y={41} />

      {/* Card 1: 外勤语音填报 */}
      <Card
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
            { text: "Components", x: 35, y: 80, rot: -10 },
            { text: "IDE", x: 65, y: 145, rot: 4 },
            { text: "skills", x: 170, y: 135, rot: 4 },
            { text: "Tokens", x: 195, y: 65, rot: 6 },
            { text: "xxx.md", x: 325, y: 80, rot: 25 },
            { text: "Stitch", x: 290, y: 135, rot: 25 },
            { text: "Figma MCP", x: 160, y: 200, rot: -5 },
            { text: "...", x: 200, y: 265, rot: 10 },
          ].map((t, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: t.x,
                top: t.y,
                transform: `rotate(${t.rot}deg)`,
              }}
            >
              <div
                className="px-4 py-1 rounded-lg text-[16px] leading-[26px] text-white whitespace-nowrap"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "0.75px solid rgba(255,255,255,0.2)",
                }}
              >
                {t.text}
              </div>
            </div>
          ))}
          {/* Central button */}
          <div
            className="absolute rounded-full flex items-center justify-center"
            style={{
              left: "50%",
              top: 320,
              transform: "translateX(-50%)",
              width: 65,
              height: 65,
              background: "#2d2d2d",
              boxShadow:
                "inset 0 -3px 3px 0 rgba(0,0,0,0.25), inset 0 3px 4px 0 #3f3e44",
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
