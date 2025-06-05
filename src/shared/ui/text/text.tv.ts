import { tv, type VariantProps } from "tailwind-variants";
import styles from "./Text.module.css";
import { baseVariants } from "../base.variants";

export const text = tv({
  base: styles.text,
  extend: baseVariants,
  variants: {
    textStyle: {
      xs: styles.xs,
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
      xl: styles.xl,
    },
    fontWeight: {
      thin: styles.thin,
      light: styles.light,
      normal: styles.normal,
      medium: styles.medium,
      bold: styles.bold,
    },
  },
  defaultVariants: {
    textStyle: "md",
    fontWeight: "normal",
  },
});

export type TextVariants = VariantProps<typeof text>;
