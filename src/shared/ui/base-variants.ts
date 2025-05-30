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
    none: styles["shadow-none"],
    md: styles["shadow-md"],
  },
  // Display
  ["flex"]: {
    true: styles["flex"],
    false: null,
  },
  ["inline-flex"]: {
    true: styles["inline-flex"],
    false: null,
  },

  // Direction
  ["flex-row"]: {
    true: styles["flex-row"],
    false: null,
  },
  ["flex-row-reverse"]: {
    true: styles["flex-row-reverse"],
    false: null,
  },
  ["flex-col"]: {
    true: styles["flex-col"],
    false: null,
  },
  ["flex-col-reverse"]: {
    true: styles["flex-col-reverse"],
    false: null,
  },

  // Wrap
  ["flex-wrap"]: {
    true: styles["flex-wrap"],
    false: null,
  },
  ["flex-nowrap"]: {
    true: styles["flex-nowrap"],
    false: null,
  },
  ["flex-wrap-reverse"]: {
    true: styles["flex-wrap-reverse"],
    false: null,
  },

  // Justify
  ["justify-start"]: {
    true: styles["justify-start"],
    false: null,
  },
  ["justify-end"]: {
    true: styles["justify-end"],
    false: null,
  },
  ["justify-center"]: {
    true: styles["justify-center"],
    false: null,
  },
  ["justify-between"]: {
    true: styles["justify-between"],
    false: null,
  },
  ["justify-around"]: {
    true: styles["justify-around"],
    false: null,
  },
  ["justify-evenly"]: {
    true: styles["justify-evenly"],
    false: null,
  },

  // Align items
  ["items-start"]: {
    true: styles["items-start"],
    false: null,
  },
  ["items-end"]: {
    true: styles["items-end"],
    false: null,
  },
  ["items-center"]: {
    true: styles["items-center"],
    false: null,
  },
  ["items-baseline"]: {
    true: styles["items-baseline"],
    false: null,
  },
  ["items-stretch"]: {
    true: styles["items-stretch"],
    false: null,
  },

  // Gap
  ["gap-1"]: {
    true: styles["gap-1"],
    false: null,
  },
  ["gap-2"]: {
    true: styles["gap-2"],
    false: null,
  },
  ["gap-4"]: {
    true: styles["gap-4"],
    false: null,
  },
} as const;
