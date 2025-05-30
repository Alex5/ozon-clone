import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { divCva } from "./div.cva";

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  VariantProps<typeof divCva>;

export function Div({
  flex,
  radius,
  shadow,
  size,
  colorPallete,
  ...rest
}: DivProps) {
  return (
    <div
      className={divCva({ flex, radius, shadow, size, colorPallete })}
      {...rest}
    ></div>
  );
}
