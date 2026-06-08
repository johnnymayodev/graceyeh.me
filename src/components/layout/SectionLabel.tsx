import { Link } from "react-router";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  number?: string;
  title: string;
  to?: string;
  className?: string;
};

export function SectionLabel({
  number,
  title,
  to,
  className,
}: SectionLabelProps) {
  const label = number ? `${number}_${title}` : title;
  const content = to ? (
    <Link
      to={to}
      className="group inline-flex items-center gap-1 hover:underline"
    >
      {label}
      <span className="transition-transform group-hover:translate-x-0.5">
        ›
      </span>
    </Link>
  ) : (
    label
  );

  return (
    <span className={cn("bento-text-label", className)}>
      {content}
    </span>
  );
}
