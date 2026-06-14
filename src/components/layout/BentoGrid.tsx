import * as React from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type BentoGridProps = {
  className?: string;
  children?: React.ReactNode;
};

export function BentoGrid({ className, children }: BentoGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const style = getComputedStyle(el);
      const cols = parseInt(style.getPropertyValue("--cols")) || 4;
      const gap = parseFloat(style.getPropertyValue("--gap")) || 24;
      const innerWidth =
        el.clientWidth -
        parseFloat(style.paddingLeft) -
        parseFloat(style.paddingRight);
      const colWidth = (innerWidth - gap * (cols - 1)) / cols;
      el.style.setProperty("--cell", `${colWidth}px`);
    };
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("grid gap-6 px-6 mx-auto bento-grid", className)}
    >
      {children}
    </div>
  );
}
