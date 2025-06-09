import { text, type TextVariants } from "./text.tv";

interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    TextVariants {}

export function Text(props: TextProps) {
  return (
    <span
      className={text(props)}
      title={props.children?.toLocaleString()}
      {...props}
    >
      {props.children}
    </span>
  );
}
