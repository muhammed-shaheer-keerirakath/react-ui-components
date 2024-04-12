import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
import { getClassNames } from "../../src/utils/classUtils";

const cardVariantClasses = cva(
  clsx(
    "flex flex-col rounded border-solid shadow backdrop-blur-none transition-all",
    "bg-white bg-opacity-60 text-gray-950",
    "dark:bg-gray-950 dark:bg-opacity-60 dark:text-white",
  ),
  {
    variants: {
      skin: {
        outlined: clsx("border-2", "border-gray-950", "dark:border-white"),
        plain: clsx(""),
      },
      roundness: {
        small: clsx("gap-2 rounded-md p-2"),
        medium: clsx("gap-4 rounded-lg p-4"),
        large: clsx("gap-6 rounded-xl p-6"),
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
