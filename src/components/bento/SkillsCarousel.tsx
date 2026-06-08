import type { Service } from "@/data/portfolio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionLabel } from "@/components/layout/SectionLabel";

type SkillsCarouselProps = {
  items: Service[];
};

export function SkillsCarousel({ items }: SkillsCarouselProps) {
  return (
    <>
      <SectionLabel title="Services" />
      <Carousel
        opts={{ align: "start", loop: true }}
        className="min-w-0 w-full"
      >
        <div className="grid w-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2">
          <CarouselPrevious className="bento-carousel-nav" />
          <div className="min-w-0 w-full overflow-hidden">
            <CarouselContent className="ml-0 gap-3">
              {items.map((item) => (
                <CarouselItem key={item.title} className="bento-carousel-item">
                  <div className="bento-service-card">
                    <h3 className="bento-display-sm wrap-break-words">
                      {item.title}
                    </h3>
                    <p className="bento-text-caption-relaxed wrap-break-words">
                      {item.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselNext className="bento-carousel-nav" />
        </div>
      </Carousel>
    </>
  );
}
