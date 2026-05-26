/**
 * Base path prefix for assets and links.
 * - In dev (no env): `""` — everything resolves at root.
 * - In GitHub Pages prod build: `"/portfolio"` — set via NEXT_PUBLIC_BASE_PATH.
 *
 * Use `withBase(path)` for asset URLs (so they get the prefix in prod).
 * Use `<Link href>` from next/link for route links — Next automatically prepends
 * basePath to those.
 */
export const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BP}${path}`;
}
