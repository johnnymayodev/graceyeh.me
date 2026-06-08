import { cn } from "@/lib/utils";

type ExperienceItemProps = {
  role: string;
  company: string;
  dates: string;
  className?: string;
};

export function ExperienceItem({
  role,
  company,
  dates,
  className,
}: ExperienceItemProps) {
  return (
    <div className={cn("bento-exp-item", className)}>
      <div className="bento-exp-header">
        <h4 className="bento-display-sm text-[16px]">{role}</h4>
        <span className="bento-text-meta shrink-0">{dates}</span>
      </div>
      <p className="bento-text-caption">{company}</p>
    </div>
  );
}
