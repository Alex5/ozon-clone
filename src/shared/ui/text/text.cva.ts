import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Text.module.css";

export const text = cva(styles.text, {
  variants: {
    textStyle: {
      xs: styles.xs,
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
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