import { tv } from "tailwind-variants";

import styles from "./button.module.css";

import { baseVariants } from "../base.variants";

export const buttonStyles = tv({
  base: styles.button,
  extend: baseVariants,
  variants: {
    ...baseVariants,
    size: {
      icon: styles["size-icon"]
    }
  },
  defaultVariants: {
    colorPallete: "yellow",
    shadow: "md",
    size: "lg",
  },
});
