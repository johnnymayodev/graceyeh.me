import * as React from "react";

import { cn } from "@/lib/utils";

const COL_SPAN_CLASS: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
};

const ROW_SPAN_CLASS: Record<number, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
};

type BentoBoxProps = {
  className?: string;
  children?: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  fullWidth?: boolean;
  stretchable?: boolean;
};

export function BentoBox({
  className,
  children,
  colSpan = 1,
  rowSpan = 1,
  fullWidth,
}: BentoBoxProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between p-4 sm:p-6 rounded-4xl bg-card text-card-foreground",
        "overflow-hidden",
        fullWidth ? "col-span-full" : (COL_SPAN_CLASS[colSpan] ?? "col-span-1"),
        ROW_SPAN_CLASS[rowSpan] ?? "row-span-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
