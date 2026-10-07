import type { HTMLAttributes } from "react";

export function H3({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`font-display font-bold text-2xl tracking-tight text-balance md:text-3xl ${className}`}
      {...props}
    />
  );
}
