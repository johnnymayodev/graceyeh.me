import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BentoItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Tailwind col/row span classes, e.g. "sm:col-span-2" */
  span?: string;
  /** Card surface color classes */
  surface?: string;
  /** Classes for the inner content wrapper (fill + alignment) */
  contentClassName?: string;
  /** Render as a clickable card (adds pointer cursor + hover lift) */
  interactive?: boolean;
  children?: ReactNode;
}

/** One tile of the bento grid: surface + padding + reveal-on-scroll wrapper. */
export function BentoItem({
  span,
  surface = "bg-card",
  contentClassName,
  interactive = false,
  className,
  children,
  ...props
}: BentoItemProps) {
  return (
    <div
      className={cn(
        "reveal group relative flex min-h-44 flex-col overflow-hidden rounded-3xl border p-6 sm:min-h-48",
        span,
        surface,
        interactive
          ? "cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
          : "",
        className,
      )}
      {...props}
    >
      <div className={cn("min-w-0 flex-1", contentClassName)}>{children}</div>
    </div>
  );
}

/** Small uppercase marker label inside a tile. */
export function BentoLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold tracking-[0.14em] uppercase opacity-60",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Rose asterisk used as a recurring brand mark across tiles. */
export function Asterisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
