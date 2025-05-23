import type { ComponentType, CSSProperties } from "react";

type WithBaseStyleOptions = {
  style?: CSSProperties;
  className?: string;
};

export function withBaseStyle<
  P extends { style?: CSSProperties; className?: string }
>(Component: ComponentType<P>, baseStyle: WithBaseStyleOptions) {
  return function ComponentWithBaseStyle(props: P) {
    const mergedStyle = { ...baseStyle.style, ...props.style };
    const mergedClassName = [baseStyle.className, props.className]
      .filter(Boolean)
      .join(" ");

    return (
      <Component {...props} style={mergedStyle} className={mergedClassName} />
    );
  };
}
