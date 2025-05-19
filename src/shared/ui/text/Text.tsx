import type { ReactNode } from "react";
import classes from "./Text.module.css";

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
    <span className={classes.Text} data-size={size} data-palette={palette}>
      {children}
    </span>
  );
}
