import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import { getClassNames } from "../../src/utils/classUtils";
import styles from "./styles.module.scss";

const buttonVariantClasses = cva(
  clsx(styles["base-common"], styles["base-light"], styles["base-dark"]),
  {
    variants: {
      skin: {
        primary: clsx(
          styles["skin-primary-light"],
          styles["skin-primary-light--hover"],
          styles["skin-primary-dark"],
        ),
        secondary: clsx(
          styles["skin-secondary-light"],
          styles["skin-secondary-light--hover"],
          styles["skin-secondary-dark"],
        ),
        danger: clsx(
          styles["skin-danger-light"],
          styles["skin-danger-light--hover"],
          styles["skin-danger-dark"],
        ),
      },
      size: {
        small: clsx(
          styles["size-small-common"],
          styles["size-small-common--hover"],
        ),
        medium: clsx(
          styles["size-medium-common"],
          styles["size-medium-common--hover"],
        ),
        large: clsx(
          styles["size-large-common"],
          styles["size-large-common--hover"],
        ),
      },
      disabled: {
        true: clsx(
          styles["disabled-true-common"],
          styles["disabled-true-light"],
          styles["disabled-true-light--hover"],
          styles["disabled-true-dark"],
        ),
      },
    },
    defaultVariants: {
      skin: "primary",
      size: "medium",
      disabled: false,
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariantClasses> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button({
  disabled,
  skin,
  size,
  className,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={getClassNames(
        buttonVariantClasses({ skin, size, disabled }),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
