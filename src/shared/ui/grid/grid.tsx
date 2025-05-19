import type { ReactNode } from "react";

export function Grid({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(1fr, auto)",
      }}
    >
      {children}
    </div>
  );
}
