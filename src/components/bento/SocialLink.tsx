import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";

import type { SocialLink as SocialLinkData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const platformStyles: Record<string, { color: string; Icon: LucideIcon }> = {
  LinkedIn: { color: "#2D64BC", Icon: Linkedin },
  Instagram: { color: "#f5c4d8", Icon: Instagram },
  Email: { color: "#e9e9ec", Icon: Mail },
};

type SocialLinkVisualProps = {
  image?: string;
  imageAlt?: string;
  icon?: LucideIcon;
  title?: string;
};

type SocialLinkProps = SocialLinkVisualProps & {
  platform?: string;
  color?: string;
  className?: string;
};

type SocialLinkFromDataProps = SocialLinkVisualProps & {
  link: SocialLinkData;
  color?: string;
  className?: string;
};

function resolvePlatform(platform: string) {
  return (
    platformStyles[platform] ?? {
      color: "#e9e9ec",
      Icon: Linkedin,
    }
  );
}

export function resolveSocialLinkColor(
  platform: string,
  color?: string,
): string {
  return color ?? resolvePlatform(platform).color;
}

function SocialLinkVisual({
  image,
  imageAlt,
  icon: IconOverride,
  title,
  platform,
  fallbackIcon: FallbackIcon,
}: SocialLinkVisualProps & {
  platform: string;
  fallbackIcon: LucideIcon;
}) {
  if (image) {
    return (
      <img src={image} alt={imageAlt ?? platform} className="bento-icon-lg" />
    );
  }

  if (title) {
    return <span className="bento-display-hero">{title}</span>;
  }

  const Icon = IconOverride ?? FallbackIcon;

  return (
    <Icon
      className="bento-icon-lg text-foreground"
      strokeWidth={1.25}
      aria-hidden
    />
  );
}

export function SocialLink(props: SocialLinkProps | SocialLinkFromDataProps) {
  const platform =
    "link" in props ? props.link.platform : (props.platform ?? "LinkedIn");
  const title = props.title ?? ("link" in props ? props.link.title : undefined);
  const { image, imageAlt, icon, className } = props;
  const { Icon } = resolvePlatform(platform);

  return (
    <div className={cn("contents", className)}>
      <SocialLinkVisual
        image={image}
        imageAlt={imageAlt}
        icon={icon}
        title={title}
        platform={platform}
        fallbackIcon={Icon}
      />
      <span className="bento-external-badge">
        <ArrowUpRight className="size-4" aria-hidden />
      </span>
    </div>
  );
}
