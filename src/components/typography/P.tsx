import { cn } from "@/lib/utils";

export function P({
  children,
  className,
}: {
  children?: React.ReactNode | string;
  className?: string;
}) {
  return (
    <p className={cn("leading-7 not-first:mt-6", className)}>{children}</p>
  );
}
