import type { ReactNode } from "react";

export function Grid({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "10px",
      }}
    >
      {children}
    </div>
  );
}
