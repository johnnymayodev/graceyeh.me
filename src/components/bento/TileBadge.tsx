import { cn } from "@/lib/utils";

type TileBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function TileBadge({ children, className }: TileBadgeProps) {
  return (
    <span className={cn("bento-text-meta inline-block", className)}>
      {children}
    </span>
  );
}
