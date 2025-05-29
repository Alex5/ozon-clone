import type { ReactNode } from "react";

export function Grid({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
