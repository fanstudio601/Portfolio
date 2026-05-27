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
            <div className="anim-fade-down" style={{ animationDelay: "0.1s" }}>
              <ContactIcon
                src="/figma/f6c94229-9c85-4521-9031-a6acb133b596.svg"
                label="18660557495"
              />
            </div>
            <div className="anim-fade-down" style={{ animationDelay: "0.2s" }}>
              <ContactIcon
                src="/figma/115ad976-5157-4a09-b3d5-b3f71a5c9ce7.svg"
                label="vanvan_0422 (范米花儿)"
                withAvatar
              />
            </div>
            <div className="anim-fade-down" style={{ animationDelay: "0.3s" }}>
              <ContactIcon
                src="/figma/ed39812c-dc89-4364-afbd-5f3df34e3f54.svg"
                label="fan422601@gmail.com"
              />
            </div>
          </div>
        }
      />

      {/* Left column: signature with continuous float */}
      <div
        className="anim-fade-then-float"
        style={{ animationDelay: "0.2s" }}
      >
        <Signature x={81} y={497} />
      </div>

      {/* Role chips — staggered fade-up */}
      <div
        className="absolute flex flex-col gap-3 items-start"
        style={{ left: 81, top: 668 }}
      >
        <div className="anim-fade-up" style={{ animationDelay: "0.5s" }}>
          <Chip>UI/UX Designer</Chip>
        </div>
        <div className="anim-fade-up" style={{ animationDelay: "0.6s" }}>
          <Chip>Design Engineer</Chip>
        </div>
      </div>

      {/* Middle column: Work — slides up */}
      <div
        className="absolute flex gap-6 anim-fade-up"
        style={{
          left: 528,
          top: 391,
          width: 814,
          height: 472,
          animationDelay: "0.4s",
        }}
      >
        <div className="flex flex-col items-center h-full w-1.5 shrink-0">
          <Bullet />
          {/* Dashed vertical line under the bullet */}
          <Img
            src="/figma/8ce42eb4-a54f-41b3-8817-0fb75611f55c.svg"
            alt=""
            className="block flex-1"
            style={{ width: 1 }}
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

      {/* Right column: Learn + Certify — slides from the right */}
      <div
        className="absolute flex flex-col anim-fade-left"
        style={{
          left: 1549,
          top: 391,
          width: 291,
          gap: 120,
          animationDelay: "0.55s",
        }}
      >
        <div className="flex gap-6">
          {/* Dot + dashed vertical line (Figma imgCol0 SVG) */}
          <Img
            src="/figma/6a5ed92c-6e3e-4ac6-b6fe-7baa736258fd.svg"
            alt=""
            className="block shrink-0"
            style={{ width: 6, height: 176 }}
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
          {/* Dot + dashed vertical line (Figma imgCol0 SVG) */}
          <Img
            src="/figma/6a5ed92c-6e3e-4ac6-b6fe-7baa736258fd.svg"
            alt=""
            className="block shrink-0"
            style={{ width: 6, height: 176 }}
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
