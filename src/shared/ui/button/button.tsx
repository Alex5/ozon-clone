import { type VariantProps } from "tailwind-variants";

import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { buttonStyles } from "./button.tv";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof buttonStyles>;

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
      className={buttonStyles({ colorPallete, size, radius, shadow })}
      {...rest}
    >
      {children}
    </button>
  );
}
