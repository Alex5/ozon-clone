import type { DetailedHTMLProps } from "react";
import classes from "./Image.module.css";

type BaseImageProps = {
  aspectRatio: string;
} & DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function Image({ aspectRatio, src, ...rest }: BaseImageProps) {
  return (
    <img
      src={src}
      style={{ aspectRatio }}
      className={classes.image}
      {...rest}
    />
  );
}
