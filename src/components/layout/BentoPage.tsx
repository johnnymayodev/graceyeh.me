import { cn } from "@/lib/utils";

type BentoPageProps = {
  className?: string;
  children?: React.ReactNode;
};

export function BentoPage({ className, children }: BentoPageProps) {
  return (
    <div
      className={cn(
        "w-full flex-1 bg-bento-page px-4 pt-8 pb-12",
        className,
      )}
    >
      <div className="bento-container mx-auto w-full max-w-[var(--bento-max-width)]">
        {children}
      </div>
    </div>
  );
}
