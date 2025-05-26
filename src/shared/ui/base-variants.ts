import styles from "./base-styles.module.css";

export const baseVariants = {
  colorPallete: {
    yellow: styles["color-pallete-yellow"],
    gray: styles["color-pallete-gray"],
  },
  variant: {
    outline: styles["variant-outline"],
  },
  size: {
    lg: styles["size-lg"],
  },
  radius: {
    md: styles["radius-md"],
    lg: styles["radius-lg"],
    xl: styles["radius-xl"],
    rounded: styles["radius-rounded"],
  },
  shadow: {
    md: styles["shadow-md"],
  },
} as const;
