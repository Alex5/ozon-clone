import { cva } from "class-variance-authority";
import styles from "./Image.module.css";
import { baseVariants } from "../base-variants";

export const imageVariants = cva(styles.image, {
  variants: { ...baseVariants },
});
