import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { getClassNames } from "../../src/utils/classUtils";
import styles from "./styles.module.css";

const buttonVariantClasses = cva(styles.base, {
  variants: {
    skin: {
      primary: "border-2 border-gray-950 dark:border-white",
      secondary: "bg-opacity-25",
      danger: "border-2 border-red-700 text-red-700",
    },
    size: {
      small:
        "rounded-md px-2 py-0 text-sm font-normal shadow-sm backdrop-blur-0 hover:shadow-lg",
      medium:
        "rounded-lg px-4 py-1 text-base font-medium shadow-md backdrop-blur-sm hover:shadow-xl",
      large:
        "rounded-xl px-6 py-2 text-lg font-semibold shadow-lg backdrop-blur-sm hover:shadow-2xl",
    },
  },
  defaultVariants: {
    skin: "primary",
    size: "medium",
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariantClasses>;

export default function Button({
  skin,
  size,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={getClassNames(buttonVariantClasses({ skin, size }))}
      {...rest}
    >
      {children}
    </button>
  );
}
