import type { VariantProps } from "tailwind-variants";
import { buttonStyles } from "../button/button.tv";
import classes from "./button-link.module.css";

type VartiantTypes = VariantProps<typeof buttonStyles>;

type ButtonLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  VartiantTypes;

export function ButtonLink(props: ButtonLinkProps) {
  return (
    <a
      className={buttonStyles({ ...props, className: classes["button-link"] })}
      {...props}
    >
      {props.children}
    </a>
  );
}
