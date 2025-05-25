import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Button.module.css";

import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { baseVariants } from "../base-variants";

const button = cva(styles.button, {
  variants: {
    ...baseVariants,
  },
  defaultVariants: {
    colorPallete: "gray",
    shadow: "md",
    size: "lg",
  },
});

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof button>;

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
      className={button({ colorPallete, size, radius, shadow })}
      {...rest}
    >
      {children}
    </button>
  );
}
