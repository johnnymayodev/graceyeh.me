import { BentoBox, BentoGrid } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Shell } from "lucide-react";
export function Home() {
  const hoverEffect =
    "hover:scale-105 transition-all duration-300 cursor-pointer";

  const experience = [
    {
      title: "Communications Manager",
      company: "Ohio State and Wilberforce EcoCAR",
      start: "Oct, 2022",
      end: "Aug, 2024",
    },
    {
      title: "Server",
      company: "Park West Tavern",
      start: "Jul, 2020",
      end: "Present",
    },
    {
      title: "Program Operations Intern",
      company: "Girls on the Run of Central Ohio",
      start: "Oct, 2022",
      end: "Aug, 2023",
    },
  ];

  return (
    <div className="pt-0 pb-16">
      <BentoGrid>
        <BentoBox colSpan={2} rowSpan={1}>
          <h2>About</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sint
            numquam quaerat vero, qui illo cumque perferendis.
          </p>
        </BentoBox>

        <BentoBox className="p-0! overflow-hidden">
          <img
            src="/graceyeh1.jpg"
            alt="Grace Yeh"
            className="object-cover size-full"
          />
        </BentoBox>

        <BentoBox rowSpan={2} className={`overflow-hidden ${hoverEffect}`}>
          <h2>Case Study</h2>
          <div>
            <p>Project Name</p>
          </div>
        </BentoBox>

        <BentoBox className={`relative ${hoverEffect}`}>
          <a
            href="https://www.linkedin.com/in/graceyeh201/details/skills/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 rounded-4xl"
            aria-label="View skills on LinkedIn"
          />
          <h2>Skills</h2>
          <span className="absolute right-3 bottom-3 p-2 rounded-full bg-card-foreground text-card scale-85">
            <ArrowUpRight />
          </span>
        </BentoBox>

        <BentoBox colSpan={2} rowSpan={3}>
          <h2>Experience</h2>
          <div className="[&>*:not(:last-child)]:mb-4">
            {experience.map((item, index) => (
              <>
                <div key={item.title} className="flex justify-between">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.company}</p>
                  </div>
                  <p className="text-sm font-light">
                    {item.start} - {item.end}
                  </p>
                </div>
                {index < experience.length - 1 && (
                  <hr key={`${item.title}-${index}`} />
                )}
              </>
            ))}
            <Button className="cursor-pointer w-fit hover:-translate-y-1 transition-all duration-300">
              Resume <ArrowUpRight />
            </Button>
          </div>
        </BentoBox>

        <BentoBox className={`bg-[#0967C2]!  relative ${hoverEffect}`}>
          <a
            href="https://www.linkedin.com/in/graceyeh201/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 rounded-4xl"
            aria-label="View LinkedIn profile"
          />
          <p className="flex justify-center items-center h-full text-7xl font-bold text-center text-white">
            in
          </p>
          <span className="absolute right-3 bottom-3 p-2 rounded-full bg-card text-card-foreground scale-85">
            <ArrowUpRight />
          </span>
        </BentoBox>

        <BentoBox rowSpan={2} className={hoverEffect}>
          <h2>Case Study</h2>
          <div>
            <p>Project Name</p>
          </div>
        </BentoBox>

        <BentoBox className={`relative ${hoverEffect}`}>
          <a
            href="https://www.linkedin.com/in/graceyeh201/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 rounded-4xl"
            aria-label="View LinkedIn profile"
          />
          <Shell />
          <p>@graceyeh</p>
          <span className="absolute right-3 bottom-3 p-2 rounded-full bg-card-foreground text-card scale-85">
            <ArrowUpRight />
          </span>
        </BentoBox>

        <BentoBox fullWidth>
          <p>Say Hello! 👋</p>
          <Button className="hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            Email me
          </Button>
        </BentoBox>
      </BentoGrid>
    </div>
  );
}
