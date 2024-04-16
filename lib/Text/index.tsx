import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
import { getClassNames } from "../../src/utils/classUtils";
import styles from "./styles.module.scss";

const textVariantClasses = cva("", {
  variants: {
    size: {
      small: clsx(styles["size-small-common"]),
      medium: clsx(styles["size-medium-common"]),
      large: clsx(styles["size-large-common"]),
    },
    italic: {
      true: clsx(styles["italic-common"]),
    },
    bold: {
      true: clsx(styles["bold-common"]),
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

type TextProps = VariantProps<typeof textVariantClasses> &
  HTMLAttributes<HTMLSpanElement>;

export default function Text({
  size,
  italic,
  className,
  children,
}: PropsWithChildren<TextProps>) {
  return (
    <span
      className={getClassNames(textVariantClasses({ size, italic }), className)}
    >
      {children}
    </span>
  );
}
