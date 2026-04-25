"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { PageHeader } from "./PageHeader";
import { topVoices } from "@/app/lib/voices";

export function VoicesPageContent() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return topVoices;
    return topVoices.filter(
      (v) =>
        v.body.toLowerCase().includes(q) ||
        v.name.toLowerCase().includes(q) ||
        v.tag.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <PageHeader
        num="02"
        kicker="The House, In The Words Of Its Guests"
        title={
          <>
            <span className="block">Voices from</span>
            <span className="gold-text serif-italic font-normal">the room.</span>
          </>
        }
        caption="A selection of public reviews — verbatim, unedited, collected from Google."
      />

      {/* Aggregate */}
      <section className="relative py-14 md:py-24 border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-5 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-5">
              <p className="label mb-3 md:mb-4">Aggregate Rating</p>
              <div className="flex items-end gap-4 md:gap-6">
                <span
                  className="font-[var(--font-display)] gold-text leading-[0.78] tracking-[-0.04em]"
                  style={{
                    fontSize: "clamp(120px, 22vw, 280px)",
                    fontVariationSettings: "'opsz' 144, 'SOFT' 20",
                  }}
                >
                  4.9
                </span>
                <div className="pb-3 md:pb-8">
                  <div className="flex gap-1 text-gold text-[18px] md:text-[22px]">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-ink-soft mt-2">
                    50+ Ratings · Google
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-7">
              <div className="flex items-baseline justify-between gap-3 mb-3">
                <label htmlFor="search" className="label">
                  Search the ledger
                </label>
                <span className="mono text-[10px] tracking-[0.22em] uppercase text-ink-dim">
                  {filtered.length}/{topVoices.length}
                </span>
              </div>
              <div className="relative border-b border-[var(--color-rule)] focus-within:border-gold transition-colors">
                <input
                  id="search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="By artist, word or feeling"
                  className="w-full bg-transparent py-3 md:py-4 pr-10 text-ink text-[18px] md:text-[20px] font-[var(--font-serif)] italic placeholder:text-ink-dim outline-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 inline-flex items-center justify-center text-ink-dim hover:text-gold transition-colors"
                  >
                    <span aria-hidden className="text-[18px] leading-none">
                      ×
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          {filtered.length === 0 ? (
            <p className="font-[var(--font-serif)] italic text-ink-soft text-[20px]">
              No voices match &ldquo;{query}&rdquo;. Try a different word —
              or{" "}
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-gold underline-offset-4 hover:underline"
              >
                clear the search
              </button>
              .
            </p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {filtered.map((q, i) => (
                <motion.li
                  key={`${q.name}-${i}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: 0.04 * (i % 6) }}
                  className="border border-[var(--color-rule)] bg-paper-2/40 p-7 md:p-8 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5 md:mb-6">
                    <span className="mono text-[10px] tracking-[0.28em] uppercase text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex gap-0.5 text-gold text-[12px]">
                      ★ ★ ★ ★ ★
                    </div>
                  </div>

                  <p
                    className="font-[var(--font-display)] text-ink leading-[1.25] tracking-[-0.005em] flex-1"
                    style={{
                      fontSize: "clamp(17px, 1.5vw, 21px)",
                      fontVariationSettings: "'opsz' 72, 'SOFT' 30",
                    }}
                  >
                    <span className="text-gold serif-italic mr-1">&ldquo;</span>
                    {q.body}
                    <span className="text-gold serif-italic ml-1">&rdquo;</span>
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="hairline w-7" />
                    <div>
                      <p className="font-[var(--font-serif)] italic text-ink text-[16px] md:text-[17px]">
                        {q.name}
                      </p>
                      <p className="mono text-[10px] tracking-[0.22em] uppercase text-ink-dim mt-0.5">
                        {q.tag}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="relative py-20 md:py-32 border-t border-[var(--color-rule)] bg-paper-2/30">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 text-center">
          <p className="label mb-4">Add Your Voice</p>
          <h2
            className="font-[var(--font-display)] text-ink leading-[0.96] tracking-[-0.02em] max-w-[860px] mx-auto"
            style={{
              fontSize: "clamp(34px, 5vw, 64px)",
              fontVariationSettings: "'opsz' 96, 'SOFT' 40",
            }}
          >
            The next quote on this page <br />
            could be{" "}
            <span className="serif-italic text-gold">about your record.</span>
          </h2>
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-6 py-4 bg-gold text-paper hover:bg-gold-hi transition-colors mono text-[11px] tracking-[0.28em] uppercase"
            >
              Begin a session
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/studio"
              className="group inline-flex items-center gap-3 px-6 py-4 border border-[var(--color-rule)] text-ink-soft hover:text-ink hover:border-ink-soft transition-colors mono text-[11px] tracking-[0.28em] uppercase"
            >
              Tour the studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
