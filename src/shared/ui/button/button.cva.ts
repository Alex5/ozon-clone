import { cva } from "class-variance-authority";

import styles from "./button.module.css";

import { baseVariants } from "../base-variants";

export const buttonVariants = cva(styles.button, {
  variants: {
    ...baseVariants,
  },
  defaultVariants: {
    colorPallete: "yellow",
    shadow: "md",
    size: "lg",
  },
});
