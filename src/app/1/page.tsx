import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { Signature } from "@/components/Signature";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <div
    className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-[20px] leading-none text-[#f7f8fa]"
    style={{
      background: "#2d2d2d",
      boxShadow: "inset 0 1px 1px 0 #3f3e44",
    }}
  >
    {children}
  </div>
);

const Bullet = () => (
  <Img
    src="/figma/8aa167f6-c8fe-45a0-b7cc-9043e61367a2.svg"
    alt=""
    className="w-1.5 h-1.5"
  />
);

const VLine = ({ height = 1 }: { height?: number }) => (
  <div
    className="w-px shrink-0"
    style={{ height, background: "rgba(255,255,255,0.15)" }}
  />
);

const HLine = () => (
  <div
    className="w-full h-px"
    style={{ background: "rgba(255,255,255,0.15)" }}
  />
);

const ContactIcon = ({
  src,
  label,
  withAvatar,
}: {
  src: string;
  label: string;
  withAvatar?: boolean;
}) => (
  <div className="flex items-center gap-2">
    <Img src={src} alt="" className="w-[18px] h-[18px]" />
    <span className="text-[16px] leading-[20px] text-white">{label}</span>
    {withAvatar && (
      <Img
        src="/figma/0a525389-fa02-4397-956e-3658c01ebdfd.png"
        alt=""
        className="w-5 h-5 rounded-full object-cover"
      />
    )}
  </div>
);

export default function Page1() {
  return (
    <PageFrame>
      <Stripes coverage="top" />

      <DarkPanel top={203} />

      <PageHeader
        subtitle="个人信息"
        right={
          <div className="flex items-center gap-16">
            <ContactIcon
              src="/figma/f6c94229-9c85-4521-9031-a6acb133b596.svg"
              label="18660557495"
            />
            <ContactIcon
              src="/figma/115ad976-5157-4a09-b3d5-b3f71a5c9ce7.svg"
              label="vanvan_0422 (范米花儿)"
              withAvatar
            />
            <ContactIcon
              src="/figma/ed39812c-dc89-4364-afbd-5f3df34e3f54.svg"
              label="fan422601@gmail.com"
            />
          </div>
        }
      />

      {/* Left column: signature + role chips */}
      <div className="absolute" style={{ left: 81, top: 497 }}>
        <Signature x={0} y={0} />
        <div className="flex flex-col gap-3 mt-12" style={{ marginLeft: 0 }}>
          <Chip>UI/UX Designer</Chip>
          <Chip>Design Engineer</Chip>
        </div>
      </div>

      {/* Middle column: Work */}
      <div
        className="absolute flex gap-6"
        style={{ left: 528, top: 391, width: 814, height: 472 }}
      >
        <div className="flex flex-col items-center h-full">
          <Bullet />
          <div
            className="flex-1 w-px"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-9">
            <h2 className="font-display font-bold text-[28px] leading-8 text-white">
              Work
            </h2>
            <div className="flex flex-col gap-3 text-[16px] leading-6">
              <p className="text-white/70">2019.10 - 至今</p>
              <p className="text-white">北京东方晨旭科技发展有限公司</p>
              <p className="text-white/70">B端 UI/UX & 可视化设计师</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[16px] leading-[31px] text-white/70">
              负责航天领域财务管理与数据分析类产品的 UI/UX
              设计，持续参与几十套后台系统与数据看板的设计与迭代。
            </p>
            <HLine />
            <p className="text-[16px] leading-[31px] text-white/70">
              在业务实践中，逐步从页面设计转向高频问题的抽象，沉淀可复用的
              <span className="text-white">可视化组件体系与设计资产</span>
              ，并结合 AI Coding 持续探索
              <span className="text-white">插件与生成化工具</span>
              ，推动设计能力从规范沉淀走向复用与配置。
            </p>
            <HLine />
            <p className="text-[16px] leading-[31px] text-white/70">
              进一步地，我将这套能力延伸到企业内部工具的
              <span className="text-white"> 0-1 全链路开发</span>
              中，通过 Coding 直接参与产品构建，将 AI
              融入日常业务流程，推动设计从方案走向真正落地。
            </p>
          </div>
        </div>
      </div>

      {/* Right column: Learn + Certify */}
      <div
        className="absolute flex flex-col"
        style={{ left: 1549, top: 391, width: 291, gap: 120 }}
      >
        <div className="flex gap-6">
          <div
            className="w-1.5 shrink-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
              height: 176,
              borderRadius: 999,
            }}
          />
          <div className="flex flex-col gap-9 w-[91px]">
            <h2 className="font-display font-bold text-[28px] leading-8 text-white">
              Learn
            </h2>
            <div className="flex flex-col gap-3 text-[16px] leading-6">
              <p className="text-white/70">2015 - 2019</p>
              <p className="text-white">青岛大学</p>
              <p className="text-white/70">软件工程</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div
            className="w-1.5 shrink-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
              height: 176,
              borderRadius: 999,
            }}
          />
          <div className="flex flex-col gap-9 w-[140px]">
            <h2 className="font-display font-bold text-[28px] leading-8 text-white">
              Certify
            </h2>
            <div className="flex flex-col gap-3 text-[16px] leading-6 text-white/70">
              <p>NPDP 产品经理认证</p>
              <p>雅思 6.5</p>
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
