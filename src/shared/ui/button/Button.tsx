import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Button.module.css";

import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { baseVariants } from "../base-variants";

const button = cva("button", {
  variants: {
    ...baseVariants,
    variant: {
      solid: "",
      outline: "mb-",
    },

    size: {
      icon: styles["size-icon"],
    },
  },
});

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof button>;

export function Button({
  children,
  variant,
  colorPallete,
  ...rest
}: ButtonProps) {
  return (
    <button className={button({ variant, colorPallete })} {...rest}>
      {children}
    </button>
  );
}
