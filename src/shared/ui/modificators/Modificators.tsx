import { Slot } from "../slot/Slot";

type RadiusProps = {
  children: React.ReactNode;
  radius: "sm" | "md" | "lg" | "xl" | "round";
};

export function Modificators({ children, radius }: RadiusProps) {
  return (
    <Slot style={{ borderRadius: `--react-lavka-radius-${radius}` }}>
      {children}
    </Slot>
  );
}
