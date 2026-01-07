// import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { H3 } from "@/components/typography/H3";
import { P } from "@/components/typography/P";

export function Experience() {
  type Experience = {
    company: string;
    role: string;
    duration: string;
    description: string;
    href?: string;
    pictureUrl?: string;
  };

  const experiences: Experience[] = [
    {
      company: "Company A",
      role: "Role A",
      duration: "Jan 2024 - Present",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eum recusandae? Autem libero voluptate similique. Minus, adipisci ratione accusamus necessitatibus maxime vitae. Vel aliquam laboriosam adipisci ducimus architecto totam eius.",
    },
    {
      company: "Company B",
      role: "Role B",
      duration: "Jun 2022 - Dec 2023",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eum recusandae? Autem libero voluptate similique. Minus, adipisci ratione accusamus necessitatibus maxime vitae. Vel aliquam laboriosam adipisci ducimus architecto totam eius.",
    },
    {
      company: "Company C",
      role: "Role C",
      duration: "Jan 2020 - May 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eum recusandae? Autem libero voluptate similique. Minus, adipisci ratione accusamus necessitatibus maxime vitae. Vel aliquam laboriosam adipisci ducimus architecto totam eius.",
    },
    {
      company: "Company D",
      role: "Role D",
      duration: "Jun 2018 - Dec 2019",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eum recusandae? Autem libero voluptate similique. Minus, adipisci ratione accusamus necessitatibus maxime vitae. Vel aliquam laboriosam adipisci ducimus architecto totam eius.",
    },
    {
      company: "Company E",
      role: "Role E",
      duration: "Jan 2016 - May 2018",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eum recusandae? Autem libero voluptate similique. Minus, adipisci ratione accusamus necessitatibus maxime vitae. Vel aliquam laboriosam adipisci ducimus architecto totam eius.",
    },
    {
      company: "Company F",
      role: "Role F",
      duration: "Jun 2014 - Dec 2015",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eum recusandae? Autem libero voluptate similique. Minus, adipisci ratione accusamus necessitatibus maxime vitae. Vel aliquam laboriosam adipisci ducimus architecto totam eius.",
    },
  ];

  return (
    <>
      <section className="max-w-sm md:max-w-4xl mx-auto center mb-16 mt-32">
        <div className="-my-6">
          {experiences.splice(0).map((_) => (
            <div key={_.company} className="py-6">
              <H2>{_.company}</H2>
              <H3 className="mt-2">
                {_.role} | {_.duration}
              </H3>
              <P className="mt-2">{_.description}</P>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
