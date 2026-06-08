import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type LinkCTAProps = {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
};

export function LinkCTA({ label, href, external, className }: LinkCTAProps) {
  const classes = cn("bento-link", className);

  const icon = (
    <span className="bento-icon-btn-sm">
      <ArrowUpRight className="size-3.5 text-black" aria-hidden />
    </span>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {label}
        {icon}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {label}
      {icon}
    </Link>
  );
}
