import {
  AboutTile,
  CaseStudyTile,
  ContactTile,
  ExperienceList,
  MarqueeTicker,
  SkillsCarousel,
  SocialLink,
  resolveSocialLinkColor,
} from "@/components/bento";
import {
  BentoBox,
  BentoGrid,
  BentoPage,
  BentoSection,
} from "@/components/layout";
import {
  availabilityTicker,
  experience,
  profile,
  projects,
  services,
  social,
  tickerItems,
} from "@/data/portfolio";

export function Home() {
  const featuredProject = projects[0];
  const moreProjects = projects.slice(1);
  const primarySocial = social[0];

  return (
    <BentoPage>
      <BentoGrid columns={4}>
        <BentoSection id="about">
          <BentoBox colSpan={1} rowSpan={1} variant="body">
            <AboutTile variant="text" bio={profile.bio} />
          </BentoBox>
          <BentoBox colSpan={1} rowSpan={1} variant="image">
            <AboutTile
              variant="image"
              image={profile.image}
              name={profile.name}
            />
          </BentoBox>
          <BentoBox colSpan={1} rowSpan={1} variant="colStack">
            <BentoBox nested variant="marquee" className="min-h-0 flex-1">
              <MarqueeTicker items={tickerItems} speed={28} />
            </BentoBox>
            <BentoBox nested variant="marquee" className="min-h-0 flex-1">
              <MarqueeTicker items={availabilityTicker} speed={22} />
            </BentoBox>
          </BentoBox>
          <BentoBox
            colSpan={1}
            rowSpan={1}
            variant="social"
            href={primarySocial.href}
            external
            style={{
              backgroundColor: resolveSocialLinkColor(
                primarySocial.platform,
                primarySocial.color,
              ),
            }}
            aria-label={`Visit ${primarySocial.platform} profile`}
          >
            <SocialLink link={primarySocial} className="text-white" />
          </BentoBox>
        </BentoSection>

        <BentoSection id="work">
          <BentoBox
            colSpan={2}
            rowSpan={2}
            variant="caseStudy"
            href={featuredProject.href}
            external={featuredProject.href.startsWith("http")}
          >
            <CaseStudyTile
              title={featuredProject.title}
              image={featuredProject.image}
              tag={featuredProject.tag}
            />
          </BentoBox>
        </BentoSection>

        <BentoSection id="experience">
          <BentoBox colSpan={2} rowSpan={2} variant="body">
            <ExperienceList
              items={experience.slice(0, 4)}
              resumeHref={profile.resumeHref}
            />
          </BentoBox>
        </BentoSection>

        <BentoSection id="services">
          <BentoBox colSpan={4} rowSpan={1} variant="stack">
            <SkillsCarousel items={services} />
          </BentoBox>
        </BentoSection>

        {moreProjects.length > 0 && (
          <>
            {moreProjects.map((project, i) => {
              const isLarge = i === 0;
              return (
                <BentoBox
                  key={project.slug}
                  colSpan={isLarge ? 2 : 1}
                  rowSpan={isLarge ? 2 : 1}
                  variant="caseStudy"
                  href={project.href}
                  external={project.href.startsWith("http")}
                >
                  <CaseStudyTile
                    title={project.title}
                    image={project.image}
                    tag={project.tag}
                    compact={!isLarge}
                  />
                </BentoBox>
              );
            })}
          </>
        )}

        <BentoSection id="contact">
          <BentoBox colSpan={4} rowSpan={1} variant="contact">
            <ContactTile
              links={social}
              cta={{ label: "Say Hello", href: `mailto:${profile.email}` }}
            />
          </BentoBox>
        </BentoSection>
      </BentoGrid>
    </BentoPage>
  );
}
