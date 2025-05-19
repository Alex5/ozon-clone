import type { ReactNode } from "react";
import classes from "./text.module.css";

export function Text({
  children,
  size,
  palette,
}: {
  children: ReactNode;
  size: "sm" | "md";
  palette?: "red";
}) {
  return (
    <span
      className={classes.Text}
      data-ui-size={size}
      data-ui-palette={palette}
    >
      {children}
    </span>
  );
}
