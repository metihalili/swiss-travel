import type{ PropsWithChildren } from "react";

export default function Badge({
  children,
  variant = "primary",
}: PropsWithChildren<{ variant?: "primary" | "muted" }>) {
  const cls =
    variant === "primary"
      ? "bg-green-100 text-green-800"
      : "bg-neutral-100 text-neutral-700";
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${cls}`}>
      {children}
    </span>
  );
}
