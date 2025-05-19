import type { ReactNode } from "react";

export function Image({
  aspectRatio,
  src,
  children,
}: {
  src?: string;
  aspectRatio?: string;
  children?: ReactNode;
}) {
  return (
    <img
      src={src}
      alt=""
      style={{ aspectRatio, position: children ? "relative" : "inherit" }}
    >
      {children}
    </img>
  );
}
