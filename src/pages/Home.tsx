// import { H1 } from "@/components/typography/H1";
// import { H2 } from "@/components/typography/H2";
import { P } from "@/components/typography/P";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Home() {
  return (
    <>
      <section className="relative md:p-24 grid md:grid-cols-2 md:gap-24 lg:gap-48 items-center">
        <div className="px-[8%] mx-auto">
          {/* <H1 className="text-6xl">Grace Yeh</H1> */}
          <P>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            veniam culpa repellat itaque atque incidunt illum! Modi optio fugit
            quia eaque, expedita temporibus inventore rerum quibusdam cum
            laudantium voluptate atque?
          </P>
          <Button
            className="
              cursor-pointer
              mt-6 w-full h-14
              md:px-6! md:w-auto
            "
          >
            Lets Connect <ArrowUpRight />
          </Button>
        </div>
        <img
          src="/graceyeh1.jpg"
          className="
            h-full top-0 w-full object-cover absolute -z-10 opacity-25
            md:relative md:opacity-100 md:z-0 md:overflow-hidden md:rounded-2xl
          "
        />
      </section>
    </>
  );
}
