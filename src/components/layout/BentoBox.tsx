import { Link } from "react-router";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { BENTO_MOBILE_COLUMNS } from "./BentoGrid";

const COL_SPAN_MOBILE: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
};

const COL_SPAN_DESKTOP: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
};

const ROW_SPAN: Record<number, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
};

const bentoBoxVariants = cva(
  "flex min-h-0 w-full flex-col overflow-hidden rounded-[var(--radius)] bg-bento-tile",
  {
    variants: {
      variant: {
        default: "h-full items-start justify-start p-5 text-left",
        body: "bento-tile-body p-5",
        stack: "bento-tile-stack p-5",
        contact: "bento-contact p-5",
        colStack: "bento-col-stack bg-transparent p-0 shadow-none",
        image: "h-full p-0 [&>img]:h-full [&>img]:w-full [&>img]:object-cover",
        caseStudy: "group relative h-full p-0",
        social:
          "bento-social relative h-full min-h-0 items-center justify-center p-0",
        marquee: "bento-marquee h-full items-center px-2",
        transparent: "h-full overflow-visible bg-transparent p-0 shadow-none",
      },
      interactive: {
        true: "bento-lift cursor-pointer",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        interactive: true,
        class: "transition-colors hover:bg-muted/40",
      },
      {
        variant: "body",
        interactive: true,
        class: "transition-colors hover:bg-muted/40",
      },
    ],
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  },
);

type BentoBoxProps = VariantProps<typeof bentoBoxVariants> & {
  colSpan?: number;
  rowSpan?: number;
  nested?: boolean;
  href?: string;
  external?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  children?: React.ReactNode;
};

export function BentoBox({
  variant = "default",
  interactive: interactiveProp,
  colSpan = 1,
  rowSpan = 1,
  nested,
  href,
  external,
  className,
  style: styleProp,
  "aria-label": ariaLabel,
  children,
}: BentoBoxProps) {
  const interactive = interactiveProp ?? Boolean(href);

  const mobileColClass = COL_SPAN_MOBILE[BENTO_MOBILE_COLUMNS];
  const desktopColClass = COL_SPAN_DESKTOP[colSpan];
  const rowClass = ROW_SPAN[rowSpan];

  const gridStyle: React.CSSProperties = {};
  if (!nested) {
    if (!mobileColClass) gridStyle.gridColumn = `span ${BENTO_MOBILE_COLUMNS}`;
    if (!rowClass) gridStyle.gridRow = `span ${rowSpan}`;
  }

  const style =
    Object.keys(gridStyle).length > 0 || styleProp
      ? { ...gridStyle, ...styleProp }
      : undefined;

  const classes = cn(
    bentoBoxVariants({ variant, interactive }),
    !nested && (mobileColClass ?? `col-span-${BENTO_MOBILE_COLUMNS}`),
    !nested && (desktopColClass ?? `md:col-span-${colSpan}`),
    !nested && rowClass,
    className,
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          style={style}
          aria-label={ariaLabel}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link to={href} className={classes} style={style} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
