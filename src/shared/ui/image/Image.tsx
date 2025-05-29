import type { DetailedHTMLProps } from "react";
import type { VariantProps } from "class-variance-authority";
import { imageVariants } from "./image-variants";

type BaseImageProps = {
  aspectRatio?: string;
} & DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  VariantProps<typeof imageVariants>;

export function Image({
  aspectRatio,
  src,
  radius,
  variant,
  colorPallete,
  onClick,
  className,
  ...rest
}: BaseImageProps) {
  return (
    <img
      src={src}
      style={{ aspectRatio }}
      className={
        `${className} ` +
        imageVariants({
          radius,
          variant,
          colorPallete,
          pointers: onClick ? "cursor" : undefined,
        })
      }
      onClick={onClick}
      {...rest}
    />
  );
}
