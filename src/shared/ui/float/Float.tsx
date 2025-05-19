import type { ReactNode } from "react";

const placements = {
  "bottom-start": { bottom: 10, left: 10 },
} as const;

export function Float({
  children,
  placement,
}: {
  children: ReactNode;
  placement: "bottom-start";
}) {
  return (
    <div style={{ position: "absolute", ...placements[placement] }}>
      {children}
    </div>
  );
}
