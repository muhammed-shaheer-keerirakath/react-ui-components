import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { getClassNames } from "../../src/utils/classUtils";
import styles from "./styles.module.scss";

const inputVariantClasses = cva(
  clsx(
    styles["base-common"],
    styles["base-light"],
    styles["base-light--hover"],
    styles["base-light--focus"],
    styles["base-dark"],
    styles["base-dark--hover"],
    styles["base-dark--focus"],
  ),
  {
    variants: {
      size: {
        small: clsx(styles["size-small-common"]),
        medium: clsx(styles["size-medium-common"]),
        large: clsx(styles["size-large-common"]),
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

type InputProps = VariantProps<typeof inputVariantClasses> &
  Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size"
  >;

export default function Input({ size, className, ...rest }: InputProps) {
  return (
    <input
      className={getClassNames(inputVariantClasses({ size }), className)}
      {...rest}
    />
  );
}
