import type { HTMLAttributes } from "react";

export function H5({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={`font-display font-bold text-lg tracking-tight ${className}`}
      {...props}
    />
  );
}
