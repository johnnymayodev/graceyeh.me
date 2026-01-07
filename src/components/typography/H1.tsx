import { cn } from "@/lib/utils";

export function H1({
  children,
  className,
}: {
  children?: React.ReactNode | string;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h1>
  );
}
