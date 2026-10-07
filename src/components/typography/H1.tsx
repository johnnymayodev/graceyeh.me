import type { HTMLAttributes } from "react";

export function H1({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={`font-display font-extrabold text-5xl tracking-tight text-balance md:text-6xl ${className}`}
      {...props}
    />
  );
}
