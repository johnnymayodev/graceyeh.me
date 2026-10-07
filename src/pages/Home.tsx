import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { H1 } from "@/components/typography/H1";
import { Pill } from "@/components/bento/Pill";
import { Asterisk, BentoItem, BentoLabel } from "@/components/bento/BentoItem";
import { useRevealOnScroll } from "@/components/bento/useRevealOnScroll";
import { Button } from "@/components/ui/button";
import {
  caseStudy,
  hero,
  marquee,
  profile,
  stats,
  toolkit,
} from "@/data/portfolio";

/* ── Tile 1: intro (2×2) ───────────────────────────────────────── */
function IntroTile() {
  return (
    <BentoItem
      span="sm:col-span-2 sm:row-span-2"
      contentClassName="flex h-full flex-col justify-between gap-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.role}</p>
        </div>
      </div>

      <div className="space-y-4">
        <Pill className="border-accent/40 text-accent">
          <span className="pulse-dot" aria-hidden="true" />{" "}
          {profile.availability}
        </Pill>
        <p className="max-w-72 text-sm leading-relaxed text-muted-foreground">
          {hero.sub}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {hero.chips.map((chip) => (
            <Pill key={chip}>{chip}</Pill>
          ))}
        </div>
      </div>
    </BentoItem>
  );
}

/* ── Tile 2: statement (2×2, ink) ──────────────────────────────── */
function StatementTile() {
  return (
    <BentoItem
      span="sm:col-span-2 sm:row-span-2"
      surface="bg-primary"
      className="heading-serif"
      contentClassName="flex h-full flex-col gap-5 text-primary-foreground"
    >
      <div className="flex flex-1 flex-col justify-center gap-5">
        <H1 className="text-3xl leading-[1.05] sm:text-4xl">
          {hero.statement[0]} <em>{hero.statement[1]}</em>
        </H1>
        <p className="text-sm text-primary-foreground/70">
          Marketing @ Ohio State · Columbus, OH
        </p>
        <div className="mt-2">
          <Button
            asChild
            className="rounded-full bg-primary-foreground font-semibold text-primary hover:bg-primary-foreground/90"
          >
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn <ArrowUpRight className="size-4!" />
            </a>
          </Button>
        </div>
      </div>
    </BentoItem>
  );
}

/* ── Tile 3: case study (full width) ───────────────────────────── */
function CaseStudyTile() {
  return (
    <BentoItem
      span="sm:col-span-4"
      className="min-h-56 sm:min-h-52"
      contentClassName="flex h-full flex-col justify-between gap-6"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <BentoLabel>{caseStudy.label}</BentoLabel>
        </div>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-balance md:text-3xl">
          {caseStudy.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {caseStudy.blurb}
        </p>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {caseStudy.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {caseStudy.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-2xl font-extrabold">{m.value}</p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </div>
          ))}
          <a
            href={caseStudy.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent"
          >
            View write-up <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </BentoItem>
  );
}

/* ── Tile 4: toolkit (half) ────────────────────────────────────── */
function ToolkitTile() {
  return (
    <BentoItem
      span="sm:col-span-2"
      contentClassName="flex h-full flex-col justify-between gap-6"
    >
      <div className="flex items-start justify-between gap-4">
        <BentoLabel>Toolkit</BentoLabel>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {toolkit.map((group) => (
          <div key={group.group}>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {group.group}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </BentoItem>
  );
}

/* ── Tile 5: stats (half) ──────────────────────────────────────── */
function StatsTile() {
  return (
    <BentoItem
      span="sm:col-span-2"
      surface="bg-secondary"
      contentClassName="flex h-full flex-col justify-between gap-6"
    >
      <div className="flex items-start justify-between gap-4">
        <BentoLabel>Highlights</BentoLabel>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-2xl font-extrabold">{s.value}</p>
            <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </BentoItem>
  );
}

/* ── Tile 6: LinkedIn (half) ───────────────────────────────────── */
function LinkedInTile() {
  return (
    <BentoItem
      span="sm:col-span-2"
      surface="bg-secondary"
      contentClassName="flex h-full flex-col justify-between gap-6"
    >
      <div className="flex items-start justify-between gap-4">
        <BentoLabel>Network</BentoLabel>
      </div>
      <div>
        <p className="font-display text-lg font-bold">Let&apos;s connect.</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Recruiting for internships or open to a collab? LinkedIn is the
          fastest way to reach me.
        </p>
      </div>
      <p className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
        {profile.linkedin.replace("https://www.", "")}
        <ArrowUpRight className="size-4" />
      </p>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0"
        aria-label={`Grace Yeh on LinkedIn`}
      >
        <span className="sr-only">Open LinkedIn profile</span>
      </a>
    </BentoItem>
  );
}

/* ── Tile 6b: headshot (half) ──────────────────────────────────── */
function PhotoTile() {
  return (
    <BentoItem
      span="sm:col-span-2"
      className="min-h-52 items-stretch p-0 sm:min-h-44"
      contentClassName="h-full"
    >
      <img
        src={profile.photo}
        alt="Grace Yeh"
        className="h-full min-h-52 w-full rounded-[inherit] object-cover sm:min-h-0"
        loading="lazy"
      />
    </BentoItem>
  );
}

/* ── Tile 7: marquee band (half, ink) ──────────────────────────── */
function MarqueeTile() {
  const items = [...marquee, ...marquee];
  return (
    <BentoItem
      span="sm:col-span-4"
      surface="bg-primary"
      className="min-h-36 sm:min-h-32"
      contentClassName="flex h-full flex-col justify-center gap-4"
    >
      <div className="flex items-center gap-2">
        <ArrowDownRight className="size-4 shrink-0 text-primary-foreground/60" />
        <BentoLabel className="text-primary-foreground/70">
          What I do
        </BentoLabel>
      </div>
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="marquee items-center gap-6">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-6 whitespace-nowrap font-display text-xl font-bold text-primary-foreground/90"
            >
              {item}
              <span className="text-base text-primary-foreground/35">✦</span>
            </span>
          ))}
        </div>
      </div>
    </BentoItem>
  );
}

/* ── Tile 8: contact closer (full width) ───────────────────────── */
function ContactTile() {
  return (
    <BentoItem
      span="sm:col-span-4"
      className="min-h-48 sm:min-h-40"
      contentClassName="flex h-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
    >
      <div>
        <BentoLabel>Say hello</BentoLabel>
        <p className="mt-2 font-display text-2xl font-bold tracking-tight text-balance md:text-3xl">
          Let&apos;s make something people remember.
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Internships, part-time roles, or just a good conversation about
          marketing — my inbox is open.
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        {profile.email ? (
          <Button asChild className="rounded-full font-semibold">
            <a href={`mailto:${profile.email}`}>
              <Mail className="size-4" /> Email me
            </a>
          </Button>
        ) : (
          <Button asChild className="rounded-full font-semibold">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Mail className="size-4" /> Reach out on LinkedIn
            </a>
          </Button>
        )}
      </div>
    </BentoItem>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */
export function Home() {
  const ref = useRevealOnScroll();

  return (
    <main ref={ref} className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
      {/* Top bar */}
      <header className="flex items-center justify-between gap-4 px-1 pb-6">
        <div className="flex items-center gap-2">
          <Asterisk className="size-5 text-accent" />
          <span className="font-display text-lg font-extrabold">
            {profile.name}
          </span>
        </div>
        <nav className="flex items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="pill hover:border-accent/50 hover:text-foreground"
          >
            LinkedIn <ArrowUpRight className="size-3" />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="pill hover:border-accent/50 hover:text-foreground"
          >
            Instagram <ArrowUpRight className="size-3" />
          </a>
        </nav>
      </header>

      {/* Bento grid: 1-col mobile, 4-col from sm up. Rows: intro+statement
          (2×2 each) → case study → toolkit+stats → linkedin+marquee → contact */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <StatementTile />
        <IntroTile />
        <CaseStudyTile />
        <ToolkitTile />
        <StatsTile />
        <LinkedInTile />
        <PhotoTile />
        <MarqueeTile />
        <ContactTile />
      </div>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-2 px-1 pt-6 text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <span>Designed &amp; built with intent</span>
      </footer>
    </main>
  );
}
