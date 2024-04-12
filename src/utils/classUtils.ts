import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export const getClassNames = (...classNames: ClassValue[]) => {
  return twMerge(clsx(classNames));
};
