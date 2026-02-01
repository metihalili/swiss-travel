import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold transition border";
  const styles =
    variant === "primary"
      ? "bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700"
      : variant === "danger"
      ? "bg-white text-red-700 border-red-200 hover:bg-red-50"
      : "bg-white text-neutral-800 border-neutral-200 hover:bg-neutral-50";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
