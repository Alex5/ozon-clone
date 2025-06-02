import { tv, type VariantProps } from "tailwind-variants";
import styles from "./Image.module.css";
import { baseVariants } from "../base.variants";

export const imageStyles = tv({
  base: styles.image,
  extend: baseVariants,
  variants: {
    pointers: {
      cursor: styles["image-pointer"],
    },
  },
});

export type ImageStylesProps = VariantProps<typeof imageStyles>;
