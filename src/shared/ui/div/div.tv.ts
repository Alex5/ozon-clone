import { tv } from "tailwind-variants";

import styles from "./div.module.css";
import { baseVariants } from "../base.variants";

export const divStyles = tv({
  base: styles.div,
  extend: baseVariants,
  variants: {},
});
