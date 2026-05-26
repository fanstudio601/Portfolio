import { Children, cloneElement, isValidElement, type ReactNode } from "react";

/**
 * Wraps children and applies an incrementing `animationDelay` to each.
 * Usage:
 *   <Stagger anim="anim-fade-up" delay={0.2} step={0.08}>
 *     <div>one</div>
 *     <div>two</div>
 *   </Stagger>
 *
 * Each child receives the animation class plus its own delay. The child
 * keeps its existing className/style.
 */
export function Stagger({
  children,
  anim = "anim-fade-up",
  delay = 0,
  step = 0.1,
}: {
  children: ReactNode;
  anim?: string;
  delay?: number;
  step?: number;
}) {
  return (
    <>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        const childProps = child.props as {
          className?: string;
          style?: React.CSSProperties;
        };
        const existingClassName = childProps.className ?? "";
        const existingStyle = childProps.style ?? {};
        return cloneElement(child as React.ReactElement<{ className?: string; style?: React.CSSProperties }>, {
          className: `${existingClassName} ${anim}`.trim(),
          style: {
            ...existingStyle,
            animationDelay: `${(delay + i * step).toFixed(2)}s`,
          },
        });
      })}
    </>
  );
}
