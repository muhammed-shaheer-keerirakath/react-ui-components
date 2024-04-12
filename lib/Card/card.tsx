import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

type CardProps = {
  title?: string;
};

export default function Card({
  title,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <div className={`flex flex-col ${styles.card}`}>
      {title}
      {children}
    </div>
  );
}
