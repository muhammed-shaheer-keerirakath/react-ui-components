import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { getClassNames } from "../../src/utils/classUtils";
import styles from "./styles.module.scss";

const cardVariantClasses = cva(
  clsx(styles["base-common"], styles["base-light"], styles["base-dark"]),
  {
    variants: {
      skin: {
        outlined: clsx(
          styles["skin-outlined-common"],
          styles["skin-outlined-light"],
          styles["skin-outlined-dark"],
        ),
        plain: "",
      },
      roundness: {
        none: clsx(styles["roundness-none-common"]),
        small: clsx(styles["roundness-small-common"]),
        medium: clsx(styles["roundness-medium-common"]),
        large: clsx(styles["roundness-large-common"]),
      },
      spacing: {
        small: clsx(styles["spacing-small-common"]),
        medium: clsx(styles["spacing-medium-common"]),
        large: clsx(styles["spacing-large-common"]),
      },
      blurriness: {
        light: clsx(styles["blurriness-light-common"]),
        medium: clsx(styles["blurriness-medium-common"]),
        heavy: clsx(styles["blurriness-heavy-common"]),
      },
    },
    defaultVariants: {
      skin: "plain",
      roundness: "medium",
      spacing: "medium",
      blurriness: "light",
    },
  },
);

type CardProps = VariantProps<typeof cardVariantClasses> &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function Card({
  skin,
  blurriness,
  roundness,
  className,
  children,
  ...rest
}: PropsWithChildren<CardProps>) {
  return (
    <div
      className={getClassNames(
        cardVariantClasses({ skin, roundness, blurriness }),
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
