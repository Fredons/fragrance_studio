export function SectionHead({
  num,
  kicker,
  title,
  caption,
}: {
  num: string;
  kicker: string;
  title: string;
  caption?: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-14 md:mb-20">
      <div className="col-span-12 md:col-span-2 flex items-center gap-3">
        <span className="mono text-[10px] tracking-[0.3em] uppercase text-gold">
          {num}
        </span>
        <span className="hairline flex-1 max-w-[60px]" />
      </div>
      <div className="col-span-12 md:col-span-7">
        <p className="label mb-3">{kicker}</p>
        <h2
          className="font-[var(--font-display)] text-ink leading-[0.95] tracking-[-0.02em]"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            fontVariationSettings: "'opsz' 120, 'SOFT' 40",
          }}
        >
          {title}
        </h2>
      </div>
      {caption && (
        <div className="col-span-12 md:col-span-3">
          <p className="font-[var(--font-serif)] italic text-ink-soft text-[17px] leading-[1.5]">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
