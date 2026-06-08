type MarqueeTickerProps = {
  items: string[];
  speed?: number;
};

export function MarqueeTicker({ items, speed = 30 }: MarqueeTickerProps) {
  const content = items.join(" ");

  return (
    <div
      className="w-full overflow-hidden"
      style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
    >
      <div className="animate-marquee flex w-max whitespace-nowrap">
        <span className="bento-text-ticker">{content}</span>
        <span className="bento-text-ticker" aria-hidden>
          {content}
        </span>
      </div>
    </div>
  );
}
