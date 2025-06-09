import { tv } from "tailwind-variants";

import styles from "./button.module.css";

import { baseVariants } from "../base.variants";

export const buttonStyles = tv({
  base: styles.button,
  extend: baseVariants,
  variants: {
    ...baseVariants,
  },
  defaultVariants: {
    colorPallete: "gray",
    shadow: "md",
  },
});
