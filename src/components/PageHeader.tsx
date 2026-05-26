/**
 * Top breadcrumb used on pages 1-4.
 * Renders "Portfolio→<subtitle>" on the left and optional content on the right (avatar / contact info).
 */
export function PageHeader({
  subtitle,
  right,
}: {
  subtitle: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="absolute left-[80px] right-[80px] top-[42px] flex items-center justify-between">
      <p className="text-[16px] leading-[20px] text-white/70 whitespace-nowrap">
        <span className="font-display">Portfolio</span>
        <span className="mx-1">→</span>
        <span>{subtitle}</span>
      </p>
      {right}
    </div>
  );
}
