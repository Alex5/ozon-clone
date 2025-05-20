import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <article style={{ display: "flex", flexDirection: "column" }}>
      {children}
    </article>
  );
}
