import { cn } from "@/lib/utils";

export const BENTO_MOBILE_COLUMNS = 2;

const DESKTOP_COLS: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

type BentoGridProps = {
  columns?: number;
  className?: string;
  children?: React.ReactNode;
};

export function BentoGrid({
  columns = 4,
  className,
  children,
}: BentoGridProps) {
  const desktopCols = DESKTOP_COLS[columns] ?? `md:grid-cols-${columns}`;

  return (
    <div
      className={cn(
        "bento-grid grid w-full grid-cols-2",
        desktopCols,
        className,
      )}
      data-columns={columns}
    >
      {children}
    </div>
  );
}
