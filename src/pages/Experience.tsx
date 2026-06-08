import { ExperienceList } from "@/components/bento";
import { BentoBox, BentoGrid, BentoPage } from "@/components/layout";
import { H3 } from "@/components/typography/H3";
import { P } from "@/components/typography/P";
import { experience, profile } from "@/data/portfolio";

export function Experience() {
  return (
    <BentoPage>
      <BentoGrid columns={4}>
        <BentoBox colSpan={2} rowSpan={2} variant="body">
          <ExperienceList
            items={experience}
            resumeHref={profile.resumeHref}
          />
        </BentoBox>

        {experience.map((exp) => (
          <BentoBox
            key={`${exp.company}-${exp.dates}`}
            colSpan={2}
            variant="body"
          >
            <H3 className="bento-display-sm not-first:mt-0">{exp.role}</H3>
            <p className="bento-text-caption mt-1">
              {exp.company} · {exp.dates}
            </p>
            {exp.description && (
              <P className="bento-text-caption-relaxed mt-3 not-first:mt-3">
                {exp.description}
              </P>
            )}
          </BentoBox>
        ))}
      </BentoGrid>
    </BentoPage>
  );
}
