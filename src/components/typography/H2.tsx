import type { HTMLAttributes } from "react";

export function H2({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={`font-display font-bold text-3xl tracking-tight text-balance md:text-4xl ${className}`}
      {...props}
    />
  );
}
