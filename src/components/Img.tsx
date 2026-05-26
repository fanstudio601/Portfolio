import { withBase } from "@/lib/base";

/**
 * Thin <img> wrapper that automatically prepends the configured basePath
 * to absolute src URLs (so /figma/foo.png becomes /portfolio/figma/foo.png
 * when deployed to GitHub Pages project pages).
 */
export function Img({
  src,
  alt = "",
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const resolved = typeof src === "string" ? withBase(src) : src;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={resolved} alt={alt} {...rest} />;
}
