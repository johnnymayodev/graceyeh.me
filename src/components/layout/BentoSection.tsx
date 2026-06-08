import { cn } from "@/lib/utils";

type BentoSectionProps = {
  id: string;
  className?: string;
  children?: React.ReactNode;
};

export function BentoSection({ id, className, children }: BentoSectionProps) {
  return (
    <section id={id} className={cn("contents", className)}>
      {children}
    </section>
  );
}
