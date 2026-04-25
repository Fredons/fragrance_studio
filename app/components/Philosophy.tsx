"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Philosophy() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative py-28 md:py-40 border-b border-[var(--color-rule)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-2 flex items-start gap-3">
            <span className="mono text-[10px] tracking-[0.3em] uppercase text-gold">
              01
            </span>
            <span className="hairline flex-1 max-w-[60px] mt-[10px]" />
          </div>

          <div className="col-span-12 md:col-span-9">
            <p className="label mb-6">A Word From The Room</p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-[var(--font-display)] text-ink leading-[1.04] tracking-[-0.015em]"
              style={{
                fontSize: "clamp(30px, 4.6vw, 68px)",
                fontVariationSettings: "'opsz' 96, 'SOFT' 30",
              }}
            >
              A record is not a file. It is a{" "}
              <span className="serif-italic text-gold">room</span>, a{" "}
              <span className="serif-italic text-gold">breath</span>, an{" "}
              <span className="serif-italic text-gold">hour of attention</span>
              —<br className="hidden md:block" />
              pressed into sound so carefully that,
              years later, it still feels like the first take.
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              <span className="hairline w-12" />
              <span className="mono text-[11px] tracking-[0.28em] uppercase text-ink-soft">
                Godwin Owulo · Producer in Residence
              </span>
            </motion.div>
          </div>
        </div>

        {/* Disciplines cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 border-t border-[var(--color-rule)]">
          {[
            {
              n: "i.",
              t: "Recording",
              d: "Vocals, drums, horns, strings — tracked patiently with a curated mic locker and the room's own voice.",
            },
            {
              n: "ii.",
              t: "Production",
              d: "Beats, arrangements and full productions across Afrobeat, Gospel, R&B, Hip-Hop and Pop — built for the artist in front of us.",
            },
            {
              n: "iii.",
              t: "Mixing",
              d: "A hybrid sensibility — depth, weight and air. Mixes that sit at the front of the speaker and stay there.",
            },
            {
              n: "iv.",
              t: "Mastering",
              d: "Final polish for streaming, radio and vinyl — translating from room monitors to earbuds without losing the spirit.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="group relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-[var(--color-rule)] last:border-r-0 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <span className="mono text-[11px] tracking-[0.28em] uppercase text-gold">
                  {c.n}
                </span>
                <h3
                  className="mt-5 font-[var(--font-display)] text-ink"
                  style={{
                    fontSize: "34px",
                    lineHeight: 1.05,
                    fontVariationSettings: "'opsz' 72, 'SOFT' 40",
                  }}
                >
                  {c.t}
                </h3>
                <p className="mt-4 text-ink-soft text-[15px] leading-[1.55] font-[var(--font-serif)]">
                  {c.d}
                </p>
                <div className="mt-8 mono text-[10px] tracking-[0.28em] uppercase text-ink-dim group-hover:text-gold transition-colors">
                  Inquire →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
