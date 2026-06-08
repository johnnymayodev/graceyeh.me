import { SectionLabel } from "@/components/layout/SectionLabel";

type AboutTileProps = {
  variant: "image" | "text";
  image?: string;
  name?: string;
  title?: string;
  bio?: string;
};

export function AboutTile({
  variant,
  image,
  name,
  title,
  bio,
}: AboutTileProps) {
  if (variant === "image" && image) {
    return <img src={image} alt={name ?? "Profile"} />;
  }

  return (
    <>
      <SectionLabel title="About" />
      <div className="flex min-h-0 flex-1 flex-col gap-3">
        {name && <h1 className="bento-display-lg">{name}</h1>}
        {bio && (
          <p className="bento-text-body line-clamp-[7] min-h-0">{bio}</p>
        )}
        {title && <p className="bento-text-meta">{title}</p>}
      </div>
    </>
  );
}
