"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const TOTAL_PAGES = 37; // pages 0..36 — page 0 at "/", pages 1-36 at "/1".."/36"

function hrefFor(id: number) {
  return id === 0 ? "/" : `/${id}`;
}

function idFromPath(pathname: string | null): number | null {
  if (pathname === "/") return 0;
  const m = pathname?.match(/^\/(\d+)\/?$/);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  return n >= 0 && n < TOTAL_PAGES ? n : null;
}

/**
 * Floating prev/next navigation pinned to the viewport edges (outside the
 * scaled design canvas). Sits in the viewport, not the 1920x1080 page, so it
 * doesn't inherit the scale transform and stays a consistent size.
 *
 * - Wraps around: from page 4, "next" goes back to page 0 (the cover at "/").
 * - Keyboard shortcuts: ←/→ arrow keys also navigate.
 */
export function PageNav() {
  const pathname = usePathname();
  const router = useRouter();

  const currentId = idFromPath(pathname);
  const isPage = currentId !== null;

  const prevId =
    currentId === null ? null : (currentId - 1 + TOTAL_PAGES) % TOTAL_PAGES;
  const nextId = currentId === null ? null : (currentId + 1) % TOTAL_PAGES;

  // Arrow-key navigation
  useEffect(() => {
    if (!isPage) return;
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      if (e.key === "ArrowLeft" && prevId !== null) router.push(hrefFor(prevId));
      if (e.key === "ArrowRight" && nextId !== null) router.push(hrefFor(nextId));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isPage, prevId, nextId, router]);

  if (!isPage) return null;

  return (
    <>
      <Link
        href={hrefFor(prevId!)}
        aria-label="上一页"
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 grid place-items-center w-12 h-12 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-white/80 hover:bg-white/20 hover:text-white transition"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <Link
        href={hrefFor(nextId!)}
        aria-label="下一页"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 grid place-items-center w-12 h-12 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-white/80 hover:bg-white/20 hover:text-white transition"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Page indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[12px] text-white/70 font-display tabular-nums">
        <span className="text-white tabular-nums">{currentId! + 1}</span>
        <span className="text-white/40">/ {TOTAL_PAGES}</span>
      </div>
    </>
  );
}
