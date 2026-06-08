import { ContactTile } from "@/components/bento";
import { BentoBox, BentoGrid, BentoPage } from "@/components/layout";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { profile, social } from "@/data/portfolio";

export function Contact() {
  return (
    <BentoPage>
      <BentoGrid columns={4}>
        <BentoBox colSpan={4} rowSpan={2} variant="body">
          <SectionLabel title="Contact" className="mb-6 block" />
          <ContactTile
            links={social}
            cta={{ label: "Say Hello", href: `mailto:${profile.email}` }}
          />
        </BentoBox>

        <BentoBox colSpan={2} variant="body">
          <SectionLabel title="Availability" className="mb-4 block" />
          <p className="bento-text-body">
            {profile.available
              ? "Currently available for freelance and full-time opportunities."
              : "Not currently accepting new projects."}
          </p>
        </BentoBox>

        <BentoBox colSpan={2} variant="body">
          <SectionLabel title="Email" className="mb-4 block" />
          <a
            href={`mailto:${profile.email}`}
            className="bento-display-sm break-all hover:underline"
          >
            {profile.email}
          </a>
        </BentoBox>
      </BentoGrid>
    </BentoPage>
  );
}
