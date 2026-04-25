"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <Image
          src="/studio/control-room.jpg"
          alt="Fragrance Studios control room"
          fill
          priority
          className="object-cover object-center kb"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-paper/35 via-paper/55 to-paper"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-paper/85 via-transparent to-paper/65"
        />
      </div>

      {/* Top meta bar (magazine masthead) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 pt-24 md:pt-28"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="mono text-[10px] tracking-[0.28em] text-ink-soft uppercase">
              Vol. MMXXVI · Issue 01
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-ink-soft">
            <span className="mono text-[10px] tracking-[0.28em] uppercase">
              Abuja · FCT · 9.0765° N
            </span>
            <span className="flex items-center gap-2 mono text-[10px] tracking-[0.28em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 rec-dot inline-block" />
              On Air
            </span>
          </div>
        </div>
      </motion.div>

      {/* Wordmark */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-16">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mono text-[11px] tracking-[0.32em] uppercase text-gold"
        >
          A Recording House, Est. ca. 2019
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-[var(--font-display)] font-[350] leading-[0.86] tracking-[-0.025em] text-ink"
          style={{
            fontSize: "clamp(62px, 13.5vw, 224px)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 30",
          }}
        >
          <span className="block">Fragrance</span>
          <span className="block">
            <span className="gold-text serif-italic font-normal">Studios</span>
            <span className="text-gold align-super ml-2 mono text-[0.18em] tracking-[0.3em] translate-y-[-1em] inline-block">
              ✦
            </span>
          </span>
        </motion.h1>

        {/* Subheading + meta row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
        >
          <div className="md:col-span-6">
            <p className="font-[var(--font-serif)] italic text-ink-soft text-[22px] md:text-[28px] leading-[1.35] max-w-[560px]">
              A recording, production, mixing and mastering house —
              making records with the patience of a craftsman and the
              ear of a listener.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <p className="label mb-2">Disciplines</p>
            <ul className="mono text-[12px] tracking-[0.1em] text-ink space-y-1.5">
              <li>Recording — Vocal & Live</li>
              <li>Production — Afro · Gospel · R&B</li>
              <li>Mixing — Hybrid Analog Feel</li>
              <li>Mastering — Streaming-Ready</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-2">This Session</p>
            <div className="mono text-[12px] tracking-[0.1em] text-ink space-y-1.5">
              <div className="flex justify-between">
                <span>Reel</span>
                <span>FS.001</span>
              </div>
              <div className="flex justify-between">
                <span>Room</span>
                <span>Control A</span>
              </div>
              <div className="flex justify-between">
                <span>Mic</span>
                <span>SE2200</span>
              </div>
              <div className="flex justify-between">
                <span>Tempo</span>
                <span>72 BPM</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA strip + waveform */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 md:mt-20 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-4 text-ink hover:text-gold transition-colors"
          >
            <span className="relative w-10 h-10 border border-gold rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-125 transition-transform" />
              <span className="absolute inset-0 rounded-full border border-gold/40 animate-ping" />
            </span>
            <span className="mono text-[11px] tracking-[0.28em] uppercase">
              Begin a Session
            </span>
          </a>

          <div className="hidden md:block flex-1 h-[34px] relative overflow-hidden">
            <svg
              className="wave-flow absolute left-0 top-0"
              width="1400"
              height="34"
              viewBox="0 0 1400 34"
              fill="none"
            >
              {Array.from({ length: 140 }).map((_, i) => {
                const raw = 4 + Math.abs(Math.sin(i * 0.6)) * 22 + (i % 7 === 0 ? 6 : 0);
                const h = Math.round(raw * 100) / 100;
                const y = Math.round(((34 - h) / 2) * 100) / 100;
                const op = Math.round((0.35 + (h / 34) * 0.55) * 100) / 100;
                return (
                  <rect
                    key={i}
                    x={i * 10}
                    y={y}
                    width="2"
                    height={h}
                    fill="var(--color-gold)"
                    opacity={op}
                  />
                );
              })}
            </svg>
          </div>

          <a
            href="https://www.instagram.com/fragrancestudios/"
            target="_blank"
            rel="noreferrer"
            className="mono text-[11px] tracking-[0.28em] uppercase text-ink-soft hover:text-gold transition-colors sweep"
          >
            Instagram ↗
          </a>
        </motion.div>
      </div>

      {/* Bottom filmstrip credit */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[var(--color-rule)]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-4 flex items-center justify-between">
          <span className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim">
            Frame 001 · Control Room · 35mm · f/1.8
          </span>
          <span className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim">
            Scroll ↓
          </span>
        </div>
      </div>
    </section>
  );
}
