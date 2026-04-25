"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHead } from "./SectionHead";
import { topVoices } from "@/app/lib/voices";

export function VoicesTeaser() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const trio = topVoices.slice(0, 3);

  return (
    <section
      ref={ref}
      id="voices"
      className="relative py-24 md:py-40 border-b border-[var(--color-rule)] bg-paper-2/30"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHead
          num="04"
          kicker="The House, In The Words Of Its Guests"
          title="Voices From The Room"
          caption="A selection of public reviews — verbatim, unedited, collected from Google."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-12 gap-5 md:gap-10 items-end mb-12 md:mb-20"
        >
          <div className="col-span-12 md:col-span-5">
            <p className="label mb-3 md:mb-4">As reviewed on Google</p>
            <div className="flex items-end gap-4 md:gap-6">
              <span
                className="font-[var(--font-display)] gold-text leading-[0.78] tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(110px, 22vw, 320px)",
                  fontVariationSettings: "'opsz' 144, 'SOFT' 20",
                }}
              >
                4.9
              </span>
              <div className="pb-4 md:pb-10">
                <div className="flex gap-1 text-gold text-[18px] md:text-[22px]">
                  ★ ★ ★ ★ ★
                </div>
                <p className="mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-ink-soft mt-2 md:mt-3">
                  50+ Ratings
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p
              className="font-[var(--font-display)] text-ink leading-[1.08] tracking-[-0.015em]"
              style={{
                fontSize: "clamp(22px, 3.2vw, 40px)",
                fontVariationSettings: "'opsz' 72, 'SOFT' 30",
              }}
            >
              Four years in, still{" "}
              <span className="serif-italic text-gold">consistent</span>.
              Still <span className="serif-italic text-gold">passionate</span>.
              Still the most-returned-to room in the city.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {trio.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className="border border-[var(--color-rule)] bg-paper-2/40 p-7 md:p-9 flex flex-col"
            >
              <span className="mono text-[10px] tracking-[0.28em] uppercase text-gold mb-5 md:mb-7">
                Quote {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className="font-[var(--font-display)] text-ink leading-[1.2] tracking-[-0.01em] flex-1"
                style={{
                  fontSize: "clamp(18px, 1.6vw, 22px)",
                  fontVariationSettings: "'opsz' 72, 'SOFT' 30",
                }}
              >
                <span className="text-gold serif-italic mr-1">&ldquo;</span>
                {q.body}
                <span className="text-gold serif-italic ml-1">&rdquo;</span>
              </p>
              <div className="mt-6 md:mt-8 flex items-center gap-3">
                <span className="hairline w-8" />
                <div>
                  <p className="font-[var(--font-serif)] italic text-ink text-[16px]">
                    {q.name}
                  </p>
                  <p className="mono text-[10px] tracking-[0.24em] uppercase text-ink-dim mt-0.5">
                    {q.tag}
                  </p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex justify-center">
          <Link
            href="/voices"
            className="group inline-flex items-center gap-3 mono text-[11px] tracking-[0.28em] uppercase text-ink-soft hover:text-gold transition-colors"
          >
            <span className="hairline w-12" />
            Read all {topVoices.length}+ voices
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
