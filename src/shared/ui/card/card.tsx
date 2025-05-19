import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <article
      style={{ backgroundColor: "white", borderRadius: "18px", padding: "8px" }}
    >
      {children}
    </article>
  );
}
