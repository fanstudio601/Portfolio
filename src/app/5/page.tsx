import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Step pill: small "STEP 01" badge that sits at the top of each card */
const StepBadge = ({ n }: { n: string }) => (
  <div
    className="inline-flex items-center justify-center rounded-full px-3 py-1.5"
    style={{
      background: "#2d2d2d",
      boxShadow:
        "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
    }}
  >
    <span className="font-display italic font-bold text-[8px] text-[#f7f8fa]/82 leading-none">
      STEP
    </span>
    <span className="font-display italic font-bold text-[14px] text-[#f7f8fa] leading-none ml-0.5">
      {n}
    </span>
  </div>
);

type Step = {
  num: string;
  name: string;
  description: string;
  // Custom image area (each step has different layouts)
  image: React.ReactNode;
};

/* Each Step image area is unique, varied compositions of phone screenshots */
const STEPS: Step[][] = [
  // Column 1: 01, 05
  [
    {
      num: "01",
      name: "小程序注册与合规",
      description:
        "先完成“文书类工作”：主体认证、类目和备案提交，与项目开发并行。",
      image: (
        <Img
          src="/figma/e2af6167-2cd0-4a55-90d7-c934d08e6921.png"
          alt=""
          className="absolute left-0 top-0 max-w-none object-cover"
          style={{ width: 377, height: 256 }}
        />
      ),
    },
    {
      num: "05",
      name: "数据库与接口",
      description: "在前后台确定后，统一用户、客户、记录和语音链路的数据结构。",
      image: (
        <Img
          src="/figma/3fd4ca44-d819-4f90-9580-e5c2bcd3d760.png"
          alt=""
          className="absolute left-0 top-[-52px] max-w-none object-cover rounded-[5.5px]"
          style={{ width: 377, height: 248 }}
        />
      ),
    },
  ],
  // Column 2: 02, 07 (权限)
  [
    {
      num: "02",
      name: "定义前台功能",
      description:
        "明确员工和管理员的关键动作，通过过 ASCII 和 Mermaid 图梳理页面内容和页面关系。",
      image: (
        <>
          <Img
            src="/figma/989338dc-de97-4d47-b826-27010686f0d2.png"
            alt=""
            className="absolute left-[-14.75px] top-0 max-w-none object-cover rounded-[4.76px]"
            style={{ width: 277, height: 196 }}
          />
          <div
            className="absolute overflow-hidden rounded-[4.76px]"
            style={{ left: 170.44, top: 0, width: 213.67, height: 196 }}
          >
            <Img
              src="/figma/cc7b3474-ae95-480f-b952-7713b3958776.png"
              alt=""
              className="absolute h-full max-w-none"
              style={{ left: "-37.19%", top: 0, width: "137.17%" }}
            />
          </div>
        </>
      ),
    },
    {
      num: "07",
      name: "权限",
      description: "用登录校验拦住未登录请求，再用 admin / staff 做角色区分。",
      image: (
        <div className="absolute inset-0 overflow-hidden rounded-[5.5px]">
          <Img
            src="/figma/da201f59-88de-4eae-a08e-b6583cfaef4d.png"
            alt=""
            className="absolute left-0 top-0 max-w-none"
            style={{ width: "100%", height: "107.42%" }}
          />
        </div>
      ),
    },
  ],
  // Column 3: 03, 07 (接入语音与模型)
  [
    {
      num: "03",
      name: "前端三段式落地",
      description:
        "先用 React 快速验证交互方案，再迁移到 Uniapp，最后结合真机联调统一处理平台差异。",
      image: (
        <>
          <Img
            src="/figma/0dcbac44-4de2-4229-90f7-592c6755e845.png"
            alt=""
            className="absolute top-0 max-w-none object-cover"
            style={{ left: -0.25, width: 142, height: 197.5 }}
          />
          <Img
            src="/figma/1f0f4b32-7a9f-4d2c-8a15-e65f64dfb6f7.png"
            alt=""
            className="absolute top-0 max-w-none object-cover rounded-[5.13px]"
            style={{ left: 96.75, width: 303, height: 194 }}
          />
          <Img
            src="/figma/f70a58c4-614f-4b90-97dc-a7440125f5ce.png"
            alt=""
            className="absolute right-0 top-0 max-w-none object-cover rounded-[4.76px]"
            style={{ width: 147.56, height: 196 }}
          />
        </>
      ),
    },
    {
      num: "07",
      name: "接入语音与模型",
      description:
        "在前后台功能稳定，接入腾讯云 ASR 和 混元模型，把自然语言变成确认页可用的结构草稿。",
      image: (
        <div className="absolute inset-0 overflow-hidden">
          <Img
            src="/figma/e3b41e46-4c27-4910-b59a-c60999be2c7f.png"
            alt=""
            className="absolute top-0 max-w-none"
            style={{ left: -110.5, width: 619.81, height: 196 }}
          />
        </div>
      ),
    },
  ],
  // Column 4: 04, 08
  [
    {
      num: "04",
      name: "补齐管理后台",
      description:
        "当前台主流程稳定后，再根据前台内容，对齐后台需要的记录、客户、成员等信息表。",
      image: (
        <>
          <div
            className="absolute overflow-hidden rounded-[6.56px]"
            style={{ left: -47, top: 0, width: 377, height: 196 }}
          >
            <Img
              src="/figma/399682c6-fe1e-41e4-b777-3220daf57f07.png"
              alt=""
              className="absolute left-0 max-w-none"
              style={{ top: "-10.9%", width: "100.04%", height: "110.9%" }}
            />
          </div>
          <Img
            src="/figma/bc39a970-ecac-4065-8b84-afab066fd166.png"
            alt=""
            className="absolute top-0 max-w-none object-cover rounded-[4.76px]"
            style={{ right: -134.63, width: 313.38, height: 196 }}
          />
        </>
      ),
    },
    {
      num: "08",
      name: "上线校验与部署",
      description: "按照微信敏感词与内容合规规则完成上线前校验，提交审核并发布。",
      image: (
        <Img
          src="/figma/271f4562-0070-425d-8672-bb7ed33a68b9.png"
          alt=""
          className="absolute top-[-5px] max-w-none object-cover"
          style={{ left: -25.25, width: 460, height: 204 }}
        />
      ),
    },
  ],
];

const StepHeader = ({
  n,
  name,
  delay,
}: {
  n: string;
  name: string;
  delay: number;
}) => (
  <div
    className="flex items-center gap-3 px-5 py-2.5 -mb-px border border-[#28282a] anim-fade-up"
    style={{
      background: "rgba(255,255,255,0.02)",
      animationDelay: `${delay}s`,
    }}
  >
    <StepBadge n={n} />
    <p className="font-hei font-bold text-[20px] leading-9 text-white whitespace-nowrap">
      {name}
    </p>
  </div>
);

const StepBody = ({
  description,
  image,
  delay,
}: {
  description: string;
  image: React.ReactNode;
  delay: number;
}) => (
  <div
    className="flex flex-col gap-5 p-8 -mb-px flex-1 border border-[#28282a] justify-center anim-fade-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <p className="text-[16px] leading-[29px] text-white/90">{description}</p>
    <div className="relative w-full h-[196px] overflow-hidden bg-white rounded-xl">
      {image}
    </div>
  </div>
);

export default function Page5() {
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
              src="/figma/6a066222-0631-4ced-8a15-5802311e6316.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Title row: 02 chip + section title */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div
          className="anim-scale-in inline-flex items-center justify-center px-4 py-1.5 rounded-full"
          style={{
            background: "#2d2d2d",
            width: 56,
            height: 56,
            boxShadow:
              "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
            animationDelay: "0.1s",
          }}
        >
          <span className="font-display italic font-bold text-[24px] text-white/50">
            02
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          从 Idea，到体验版落地（7天）
        </p>
      </div>

      {/* Date */}
      <p
        className="absolute font-sans text-[20px] leading-9 text-white/70 text-right whitespace-nowrap anim-fade-left"
        style={{ right: 80, top: 155, animationDelay: "0.3s" }}
      >
        26/02/25 - 03/03
      </p>

      {/* Step grid: 4 columns × 2 rows of alternating Header + Body */}
      <div
        className="absolute flex"
        style={{ left: 80, top: 255, width: 1760, height: 757 }}
      >
        {STEPS.map((column, colIdx) => (
          <div
            key={colIdx}
            className="flex flex-col flex-1 min-w-0"
            style={{ marginRight: colIdx < 3 ? -1 : 0 }}
          >
            {column.map((step, rowIdx) => {
              const baseDelay = 0.4 + (rowIdx * 4 + colIdx) * 0.06;
              return (
                <div key={rowIdx} className="flex flex-col flex-1 min-h-0">
                  <StepHeader n={step.num} name={step.name} delay={baseDelay} />
                  <StepBody
                    description={step.description}
                    image={step.image}
                    delay={baseDelay + 0.04}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </PageFrame>
  );
}
