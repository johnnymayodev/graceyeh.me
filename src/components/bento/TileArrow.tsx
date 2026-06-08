import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type TileArrowProps = {
  className?: string;
};

export function TileArrow({ className }: TileArrowProps) {
  return (
    <ArrowUpRight
      className={cn("size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5", className)}
      aria-hidden
    />
  );
}
