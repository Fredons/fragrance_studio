const words = [
  "Afrobeat",
  "Gospel",
  "R&B",
  "Hip-Hop",
  "Soul",
  "Reggae",
  "Pop",
  "Worship",
  "Live Drums",
  "Vocal Chains",
  "Mixing",
  "Mastering",
];

export function Marquee() {
  const line = [...words, ...words];
  return (
    <section
      aria-hidden
      className="relative border-y border-[var(--color-rule)] bg-paper-2/60 overflow-hidden"
    >
      <div className="flex marquee-track whitespace-nowrap py-5">
        {line.concat(line).map((w, i) => (
          <span
            key={i}
            className="mono text-[13px] tracking-[0.22em] uppercase mx-8 text-ink-soft"
          >
            {w}
            <span className="mx-8 text-gold">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
