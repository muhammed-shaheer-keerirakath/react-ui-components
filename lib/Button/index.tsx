import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
import { getClassNames } from "../../src/utils/classUtils";

const buttonVariantClasses = cva(
  clsx(
    "h-min rounded border-2 border-solid shadow backdrop-blur-none transition-all",
    "bg-white bg-opacity-60 text-gray-950",
    "dark:bg-gray-950 dark:bg-opacity-60 dark:text-white",
  ),
  {
    variants: {
      skin: {
        primary: clsx(
          "border-gray-950",
          "hover:bg-opacity-80",
          "dark:border-white",
        ),
        secondary: clsx(
          "border-transparent bg-opacity-25",
          "hover:bg-opacity-80",
          "dark:bg-opacity-25",
        ),
        danger: clsx(
          "border-red-700 text-red-700",
          "hover:bg-red-700 hover:text-white",
          "dark:text-red-700",
        ),
      },
      size: {
        small: clsx(
          "rounded-md px-2 py-0 text-sm font-normal shadow-sm backdrop-blur-0",
          "hover:shadow-lg",
        ),
        medium: clsx(
          "rounded-lg px-4 py-1 text-base font-medium shadow-md backdrop-blur-sm",
          "hover:shadow-xl",
        ),
        large: clsx(
          "rounded-xl px-6 py-2 text-lg font-semibold shadow-lg backdrop-blur-sm",
          "hover:shadow-2xl",
        ),
      },
      disabled: {
        true: clsx(
          "cursor-not-allowed border-transparent bg-slate-500 bg-opacity-30 font-normal text-gray-400 shadow-none",
          "hover:bg-slate-500 hover:bg-opacity-30 hover:text-gray-400 hover:shadow-none",
          "dark:border-transparent dark:bg-slate-500 dark:bg-opacity-30 dark:text-gray-400",
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

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariantClasses>;

export default function Button({
  disabled,
  skin,
  size,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={getClassNames(buttonVariantClasses({ skin, size, disabled }))}
      {...rest}
    >
      {children}
    </button>
  );
}
