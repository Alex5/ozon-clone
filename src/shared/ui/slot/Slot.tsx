import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  Children,
  type BaseHTMLAttributes,
} from "react";

type SlotProps = {
  children: ReactNode;
  style?: React.CSSProperties;
};

export function Slot({ children, style }: SlotProps) {
  if (!isValidElement(children)) return null;

  const onlyChild = Children.only(children) as ReactElement<
    BaseHTMLAttributes<HTMLElement>
  >;

  return cloneElement(onlyChild, {
    ...onlyChild.props,
    style: {
      ...(onlyChild.props.style ?? {}),
      ...(style ?? {}),
    },
  });
}
