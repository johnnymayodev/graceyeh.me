import { BentoBox, BentoGrid } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Shell } from "lucide-react";

export function Home() {
  return (
    <div className="pt-0 pb-16">
      <BentoGrid>
        <BentoBox colSpan={2} rowSpan={2}>
          <h2>About</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sint
            numquam quaerat vero, qui illo cumque perferendis. At eaque nostrum
            ab itaque, nulla laudantium ipsam unde temporibus ad eum placeat?
          </p>
        </BentoBox>

        <BentoBox className="p-0! overflow-hidden">
          <img
            src="/graceyeh1.jpg"
            alt="Grace Yeh"
            className="object-cover size-full"
          />
        </BentoBox>
        <BentoBox className="overflow-hidden justify-center">
          <p>Hi! I'm Grace Yeh</p>
        </BentoBox>
        <BentoBox className="transition-all duration-300 cursor-pointer hover:scale-105">
          <Shell />
          <p>@graceyeh</p>
        </BentoBox>
        <BentoBox className="bg-[#0967C2]! hover:scale-105 transition-all duration-300 cursor-pointer relative">
          <p className="flex justify-center items-center h-full text-7xl font-bold text-center text-white">
            in
          </p>
          <span className="absolute right-3 bottom-3 p-2 rounded-full bg-card text-card-foreground scale-85">
            <ArrowUpRight />
          </span>
        </BentoBox>
        <BentoBox colSpan={2} rowSpan={3}>
          <h2>Experience</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div>
                <h3>Job Title</h3>
                <p>Company Name</p>
              </div>
              <p className="text-sm font-light">Month, Year - Month, Year</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <div>
                <h3>Job Title</h3>
                <p>Company Name</p>
              </div>
              <p className="text-sm font-light">Month, Year - Month, Year</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <div>
                <h3>Job Title</h3>
                <p>Company Name</p>
              </div>
              <p className="text-sm font-light">Month, Year - Month, Year</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <div>
                <h3>Job Title</h3>
                <p>Company Name</p>
              </div>
              <p className="text-sm font-light">Month, Year - Month, Year</p>
            </div>
          </div>
          <Button className="cursor-pointer w-fit">
            Resume <ArrowUpRight />
          </Button>
        </BentoBox>
        <BentoBox fullWidth>
          <p>Say Hello! 👋</p>
          <Button>Email me</Button>
        </BentoBox>
      </BentoGrid>
    </div>
  );
}
