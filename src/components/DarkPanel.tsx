import type { ReactNode } from "react";

/**
 * The dark rounded-top panel that overlays the bottom portion of pages 1-4.
 * On page 1/2 it's 877px tall starting at top:203; on page 3/4 it's 979px starting at top:101.
 */
export function DarkPanel({
  top,
  children,
}: {
  top: number;
  children?: ReactNode;
}) {
  return (
    <div
      className="absolute left-0 w-[1920px] rounded-t-[40px]"
      style={{
        top,
        height: 1080 - top,
        background: "#101012",
        boxShadow: "inset 0px 3px 3px 0px #3f3e44",
      }}
    >
      {children}
    </div>
  );
}
