export type Project = {
  slug: string;
  title: string;
  image: string;
  href: string;
  tag?: string;
};

export type Experience = {
  role: string;
  company: string;
  dates: string;
  description?: string;
  pictureUrl?: string;
  href?: string;
};

export type Service = {
  title: string;
  description: string;
};

export type SocialLink = {
  platform: string;
  handle: string;
  href: string;
  title?: string;
  color?: string;
};

export type Section = {
  id: string;
  number: string;
  title: string;
};

export const profile = {
  name: "Grace Yeh",
  title: "Creative Strategist",
  bio: "Creative strategist and copywriter driven by a strong desire to craft compelling brand narratives and incorporate innovative strategies into the realms of marketing, business, and culture.",
  image: "/graceyeh1.jpg",
  available: true,
  resumeHref: "/resume.pdf",
  email: "hello@graceyeh.me",
};

export const tickerItems = [
  `${profile.name.toUpperCase()} ✦ ${profile.title.toUpperCase()} ✦`,
];

export const availabilityTicker = [
  profile.available ? "AVAILABLE FOR WORK ✦" : "NOT AVAILABLE ✦",
];

export const projects: Project[] = [
  {
    slug: "brand-campaign",
    title: "Brand Campaign",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    href: "#",
    tag: "Case Study",
  },
  {
    slug: "social-content",
    title: "Social Content Series",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    href: "#",
    tag: "Case Study",
  },
  {
    slug: "product-launch",
    title: "Product Launch",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    href: "#",
    tag: "Case Study",
  },
  {
    slug: "editorial",
    title: "Editorial Writing",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
    href: "#",
    tag: "Case Study",
  },
  {
    slug: "rebrand",
    title: "Rebrand Strategy",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    href: "#",
    tag: "Case Study",
  },
];

export const experience: Experience[] = [
  {
    role: "Senior Copywriter",
    company: "Agency A",
    dates: "2023 – Present",
    description:
      "Lead copywriter for brand campaigns across tech, lifestyle, and consumer goods clients.",
  },
  {
    role: "Content Strategist",
    company: "Brand Studio B",
    dates: "2021 – 2023",
    description:
      "Developed content strategies and social campaigns for emerging DTC brands.",
  },
  {
    role: "Freelance Writer",
    company: "Independent",
    dates: "2019 – 2021",
    description:
      "Crafted copy for startups, nonprofits, and creative agencies.",
  },
  {
    role: "Marketing Coordinator",
    company: "Company C",
    dates: "2017 – 2019",
    description:
      "Supported brand messaging and campaign execution for a regional retailer.",
  },
];

export const services: Service[] = [
  {
    title: "Copywriting",
    description:
      "Providing innovative solutions to complex problems to ensure better brand experiences.",
  },
  {
    title: "Brand Strategy",
    description:
      "Tailored to capture brand essence, creating functional and memorable messaging.",
  },
  {
    title: "Social Content",
    description:
      "Creating engaging content crafted for platforms that drive connection and growth.",
  },
  {
    title: "Creative Concept",
    description:
      "Developing campaign concepts that bridge business goals with creative storytelling.",
  },
];

export const social: SocialLink[] = [
  {
    platform: "LinkedIn",
    handle: "@graceyeh",
    href: "https://linkedin.com/in/graceyeh201",
    title: "in",
    color: "#2D64BC",
  },
  {
    platform: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
  },
];

export const sections: Section[] = [
  { id: "about", number: "01", title: "ABOUT" },
  { id: "work", number: "02", title: "WORK" },
  { id: "experience", number: "03", title: "EXPERIENCE" },
  { id: "services", number: "04", title: "SERVICES" },
  { id: "contact", number: "05", title: "CONTACT" },
];

export const skills = [
  "Copywriting",
  "Brand Strategy",
  "Social Content",
  "Creative Concept",
];
