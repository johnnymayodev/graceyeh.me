import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { TileBadge } from "./TileBadge";

type CaseStudyTileProps = {
  title: string;
  image: string;
  tag?: string;
  compact?: boolean;
  className?: string;
};

export function CaseStudyTile({
  title,
  image,
  tag = "Case Study",
  compact = false,
  className,
}: CaseStudyTileProps) {
  if (compact) {
    return (
      <div className={cn("relative h-full min-h-0 w-full", className)}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-linear-to-t from-black/70 to-transparent p-3 pt-8">
          <div className="flex min-w-0 flex-col gap-1">
            <TileBadge>{tag}</TileBadge>
            <span className="bento-display-sm truncate text-white">{title}</span>
          </div>
          <span className="bento-icon-btn shrink-0">
            <ArrowUpRight className="size-4 text-black" aria-hidden />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex h-full min-h-0 flex-col", className)}>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-end justify-between gap-3 p-4">
        <div className="flex flex-col gap-1.5">
          <TileBadge>{tag}</TileBadge>
          <span className="bento-display-sm">{title}</span>
        </div>
        <span className="bento-icon-btn">
          <ArrowUpRight className="size-4 text-black" aria-hidden />
        </span>
      </div>
    </div>
  );
}
