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
    rounded: styles["rounded-full"],
  },
  shadow: {
    md: styles['shadow-md']
  }
} as const;
