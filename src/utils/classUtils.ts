import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const getClassNames = (
  classNames: string,
  extraClassNames: string = "",
) => {
  return `${twMerge(clsx(classNames))} ${extraClassNames}`;
};
