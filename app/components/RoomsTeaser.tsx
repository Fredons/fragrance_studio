"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHead } from "./SectionHead";

export function RoomsTeaser() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="rooms"
      className="relative py-24 md:py-40 border-b border-[var(--color-rule)]"
    >
      <div ref={ref} className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHead
          num="02"
          kicker="A Tour In Two Plates"
          title="The Rooms & Their Instruments"
          caption="Photographed in available light. The gear is chosen for colour, not noise."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 group"
          >
            <Link
              href="/studio"
              aria-label="Tour the control room"
              className="block relative w-full h-[60vw] sm:h-[460px] md:h-[600px] overflow-hidden"
            >
              <Image
                src="/studio/control-room.jpg"
                alt="Fragrance Studios — control room"
                fill
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper/80 via-transparent to-transparent" />
            </Link>
            <figcaption className="flex items-center justify-between mt-3 md:mt-4">
              <span className="mono text-[10px] tracking-[0.28em] uppercase text-ink-soft">
                Plate I · Control Room A
              </span>
              <span className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim">
                FS.R01 · 50mm
              </span>
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 group"
          >
            <Link
              href="/studio"
              aria-label="Tour the live room"
              className="block relative w-full h-[60vw] sm:h-[460px] md:h-[600px] overflow-hidden"
            >
              <Image
                src="/studio/drums-live.jpg"
                alt="Fragrance Studios — live room with drum kit"
                fill
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper/80 via-transparent to-transparent" />
            </Link>
            <figcaption className="flex items-center justify-between mt-3 md:mt-4">
              <span className="mono text-[10px] tracking-[0.28em] uppercase text-ink-soft">
                Plate II · Live Room
              </span>
              <span className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim">
                FS.R02 · 35mm
              </span>
            </figcaption>
          </motion.figure>
        </div>

        <div className="mt-10 md:mt-14 flex justify-center">
          <Link
            href="/studio"
            className="group inline-flex items-center gap-3 mono text-[11px] tracking-[0.28em] uppercase text-ink-soft hover:text-gold transition-colors"
          >
            <span className="hairline w-12" />
            Tour the full studio
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
