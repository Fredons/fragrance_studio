import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[var(--color-rule)]">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-14 md:py-24">
        {/* Giant faded wordmark */}
        <div className="relative overflow-hidden select-none">
          <p
            className="font-[var(--font-display)] text-ink-dim/40 leading-[0.8] tracking-[-0.04em] whitespace-nowrap"
            style={{
              fontSize: "clamp(60px, 22vw, 360px)",
              fontVariationSettings: "'opsz' 144, 'SOFT' 20",
            }}
          >
            Fragrance <span className="serif-italic">Studios</span>
          </p>
        </div>

        <div className="hairline my-8 md:my-10" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-4">
            <p className="label mb-3">Colophon</p>
            <p className="font-[var(--font-serif)] italic text-ink-soft text-[16px] md:text-[17px] leading-[1.5] max-w-[420px]">
              Set in Fraunces &amp; Instrument Serif. Recorded in Abuja.
              Photographs in available light. Paper is black.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-3">Index</p>
            <ul className="mono text-[12px] tracking-[0.06em] text-ink-soft space-y-2">
              <li>
                <Link href="/" className="hover:text-gold">
                  00 · Home
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-gold">
                  01 · The Studio
                </Link>
              </li>
              <li>
                <Link href="/voices" className="hover:text-gold">
                  02 · Voices
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold">
                  03 · Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-3">Channels</p>
            <ul className="mono text-[12px] tracking-[0.06em] text-ink-soft space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/fragrancestudios/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@fragrancestudios"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  TikTok ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/fragrancestudios/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  Facebook ↗
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347066272462"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:fragrancestudios@gmail.com"
                  className="hover:text-gold break-all"
                >
                  fragrancestudios@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label mb-3">End Slate</p>
            <p className="mono text-[11px] tracking-[0.22em] uppercase text-ink-dim leading-relaxed">
              © {year}
              <br />
              Fragrance Studios
              <br />
              Abuja · FCT
            </p>
          </div>
        </div>

        <div className="hairline my-8 md:my-10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim">
            A Recording House · Vol. MMXXVI
          </p>
          <p className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 rec-dot inline-block" />
            Room is warm. Tea is on.
          </p>
        </div>
      </div>
    </footer>
  );
}
