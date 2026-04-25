"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function ContactCTA() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="contact-cta"
      ref={ref}
      className="relative py-24 md:py-44 overflow-hidden border-b border-[var(--color-rule)]"
    >
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/studio/control-room-rgb.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/60 to-paper" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-5 md:gap-10 items-end mb-10 md:mb-16"
        >
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="mono text-[10px] tracking-[0.3em] uppercase text-gold">
              05
            </span>
            <span className="hairline flex-1 max-w-[60px]" />
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="label mb-3">Visit · Book · Record</p>
            <h2
              className="font-[var(--font-display)] text-ink leading-[0.94] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(40px, 8vw, 128px)",
                fontVariationSettings: "'opsz' 144, 'SOFT' 40",
              }}
            >
              Come in.{" "}
              <span className="gold-text serif-italic font-normal">
                Let's make something
              </span>{" "}
              you'll still love in ten years.
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.18 }}
          className="flex flex-col sm:flex-row gap-4 sm:items-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-6 py-4 bg-gold text-paper hover:bg-gold-hi transition-colors mono text-[11px] tracking-[0.28em] uppercase"
          >
            Begin a Session
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/voices"
            className="group inline-flex items-center gap-3 px-6 py-4 border border-[var(--color-rule)] text-ink-soft hover:text-ink hover:border-ink-soft transition-colors mono text-[11px] tracking-[0.28em] uppercase"
          >
            Read the reviews first
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
