"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Producer() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="producer"
      className="relative py-28 md:py-40 border-b border-[var(--color-rule)] overflow-hidden"
    >
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 relative"
          >
            <div className="relative w-full h-[520px] md:h-[760px] overflow-hidden bg-paper-2">
              <Image
                src="/portraits/godwin-at-keys.jpg"
                alt="Godwin Owulo at the keys, in session"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper/70 via-transparent to-transparent" />

              {/* Editorial corner marks */}
              <span className="absolute top-4 left-4 w-3 h-3 border-l border-t border-gold/60" aria-hidden />
              <span className="absolute top-4 right-4 w-3 h-3 border-r border-t border-gold/60" aria-hidden />
              <span className="absolute bottom-4 left-4 w-3 h-3 border-l border-b border-gold/60" aria-hidden />
              <span className="absolute bottom-4 right-4 w-3 h-3 border-r border-b border-gold/60" aria-hidden />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="mono text-[10px] tracking-[0.28em] uppercase text-ink-soft">
                In Session · Abuja
              </span>
              <span className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim">
                Plate VI · f/2.8 · 35mm
              </span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 md:pt-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="mono text-[10px] tracking-[0.3em] uppercase text-gold">
                03
              </span>
              <span className="hairline flex-1 max-w-[80px]" />
              <span className="label">The Producer</span>
            </div>

            <h2
              className="font-[var(--font-display)] text-ink leading-[0.95] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(54px, 8vw, 120px)",
                fontVariationSettings: "'opsz' 144, 'SOFT' 40",
              }}
            >
              Godwin
              <br />
              <span className="gold-text serif-italic font-normal">
                Owulo.
              </span>
            </h2>

            <p className="mt-8 font-[var(--font-serif)] italic text-ink-soft text-[20px] md:text-[22px] leading-[1.5] max-w-[560px]">
              A musician since boyhood. A decade in the chair. A producer who
              can programme a drum pattern at breakfast and arrange a live
              choir by supper — and who believes every record should feel
              like it was made for one listener in particular.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-[520px]">
              {[
                { k: "Practice", v: "10+ Years" },
                { k: "Sessions", v: "400+ Records" },
                { k: "Instruments", v: "Keys · Synths · Drums" },
                { k: "Idioms", v: "Afro · Gospel · R&B · Hip-Hop" },
                { k: "Mix Style", v: "Warm · Spacious · Vocal-First" },
                { k: "Turnaround", v: "Considered, Not Rushed" },
              ].map((row) => (
                <div key={row.k}>
                  <p className="label mb-1">{row.k}</p>
                  <p className="mono text-[13px] tracking-[0.04em] text-ink">
                    {row.v}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 px-5 py-3 border border-gold text-gold hover:bg-gold hover:text-paper transition-colors mono text-[11px] tracking-[0.28em] uppercase"
              >
                Book the Chair
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="https://www.deezer.com/us/artist/63278562"
                target="_blank"
                rel="noreferrer"
                className="sweep mono text-[11px] tracking-[0.28em] uppercase text-ink-soft hover:text-ink"
              >
                Discography on Deezer ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
