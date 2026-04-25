import type { ReactNode } from "react";

export function PageHeader({
  num,
  kicker,
  title,
  caption,
}: {
  num: string;
  kicker: string;
  title: ReactNode;
  caption?: string;
}) {
  return (
    <header className="relative pt-32 md:pt-44 pb-14 md:pb-24 border-b border-[var(--color-rule)]">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-5 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="mono text-[10px] tracking-[0.3em] uppercase text-gold">
              {num}
            </span>
            <span className="hairline flex-1 max-w-[60px]" />
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="label mb-3 md:mb-4">{kicker}</p>
            <h1
              className="font-[var(--font-display)] text-ink leading-[0.94] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(44px, 8vw, 132px)",
                fontVariationSettings: "'opsz' 144, 'SOFT' 40",
              }}
            >
              {title}
            </h1>
          </div>
          {caption && (
            <div className="col-span-12 md:col-span-3">
              <p className="font-[var(--font-serif)] italic text-ink-soft text-[16px] md:text-[18px] leading-[1.5]">
                {caption}
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
