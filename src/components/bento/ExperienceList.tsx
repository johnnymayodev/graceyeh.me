import type { Experience } from "@/data/portfolio";
import { SectionLabel } from "@/components/layout/SectionLabel";

import { ExperienceItem } from "./ExperienceItem";
import { LinkCTA } from "./LinkCTA";

type ExperienceListProps = {
  items: Experience[];
  resumeHref?: string;
  showLabel?: boolean;
};

export function ExperienceList({
  items,
  resumeHref,
  showLabel = true,
}: ExperienceListProps) {
  return (
    <>
      <div>
        {showLabel && <SectionLabel title="Experience" className="mb-6 block" />}
        <div className="divide-y divide-border">
          {items.map((item) => (
            <ExperienceItem
              key={`${item.company}-${item.dates}`}
              role={item.role}
              company={item.company}
              dates={item.dates}
            />
          ))}
        </div>
      </div>
      {resumeHref && (
        <LinkCTA label="View resume" href={resumeHref} external />
      )}
    </>
  );
}
