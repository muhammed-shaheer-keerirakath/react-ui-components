import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
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
        small: clsx(styles["roundness-small-common"]),
        medium: clsx(styles["roundness-medium-common"]),
        large: clsx(styles["roundness-large-common"]),
      },
    },
    defaultVariants: {
      skin: "plain",
      roundness: "medium",
    },
  },
);

type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariantClasses>;

export default function Card({
  skin,
  roundness,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <div className={getClassNames(cardVariantClasses({ skin, roundness }))}>
      {children}
    </div>
  );
}
