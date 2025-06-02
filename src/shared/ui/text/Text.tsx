import { text, type TextVariants } from "./text.tv";

interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    TextVariants {}

export function Text({ children, textStyle, fontWeight, ...props }: TextProps) {
  return (
    <span className={text({ textStyle, fontWeight })} {...props}>
      {children}
    </span>
  );
}
