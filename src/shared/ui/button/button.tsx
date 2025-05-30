import { type VariantProps } from "class-variance-authority";

import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { buttonVariants } from "./button.cva";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof buttonVariants>;

export function Button({
  children,
  colorPallete,
  size,
  radius,
  shadow,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ colorPallete, size, radius, shadow })}
      {...rest}
    >
      {children}
    </button>
  );
}
