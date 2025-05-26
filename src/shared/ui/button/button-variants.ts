import { cva } from "class-variance-authority";

import styles from "./Button.module.css";

import { baseVariants } from "../base-variants";

export const buttonVariants = cva(styles.button, {
  variants: {
    ...baseVariants,
  },
  defaultVariants: {
    colorPallete: "gray",
    shadow: "md",
    size: "lg",
  },
});
