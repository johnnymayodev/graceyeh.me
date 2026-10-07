import type { HTMLAttributes } from "react";

export function H4({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={`font-display font-bold text-xl tracking-tight text-balance ${className}`}
      {...props}
    />
  );
}
