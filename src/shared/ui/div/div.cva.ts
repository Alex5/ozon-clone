import { cva } from "class-variance-authority";

import styles from "./div.module.css";
import { baseVariants } from "../base-variants";

export const divCva = cva(styles.div, {
  variants: {
    ...baseVariants,
  },
});
