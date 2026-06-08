import type { SocialLink } from "@/data/portfolio";

type ContactTileProps = {
  links: SocialLink[];
  cta?: { label: string; href: string };
};

export function ContactTile({ links, cta }: ContactTileProps) {
  const handles = links.map((link) => link.handle);

  return (
    <>
      <div className="min-w-0 flex-1">
        {handles.map((handle) => (
          <div key={handle}>{handle}</div>
        ))}
      </div>
      {cta && (
        <a
          href={cta.href}
          className="bento-cta-pill w-full shrink-0 text-black md:w-auto"
        >
          {cta.label}
        </a>
      )}
    </>
  );
}
