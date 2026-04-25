"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PageHeader } from "./PageHeader";

type Plate = {
  src: string;
  alt: string;
  caption: string;
  code: string;
  span: "wide" | "tall" | "square";
  note?: string;
};

const plates: Plate[] = [
  {
    src: "/studio/control-room.jpg",
    alt: "Control Room A — the desk and FS logo wall",
    caption: "Plate I · Control Room A",
    code: "FS.R01 · 50mm · f/2.8",
    span: "wide",
    note: "The room where mixes are made.",
  },
  {
    src: "/studio/console-faders.jpg",
    alt: "Yamaha digital console with faders raised",
    caption: "Plate II · The Desk",
    code: "FS.G01 · Yamaha TF",
    span: "tall",
    note: "Hands-on routing. Channels printed on the way in.",
  },
  {
    src: "/studio/control-room-rgb.jpg",
    alt: "Control room ambient lighting",
    caption: "Plate III · Ambient Light",
    code: "FS.R03 · After Hours",
    span: "tall",
  },
  {
    src: "/studio/drums-live.jpg",
    alt: "Live room with full acoustic drum kit",
    caption: "Plate IV · The Live Room",
    code: "FS.R02 · 35mm · f/1.8",
    span: "wide",
    note: "A real kit. Treated room. Plants for the room tone.",
  },
  {
    src: "/studio/drums-detail.jpg",
    alt: "Detail of the drum kit cymbals",
    caption: "Plate V · Cymbal Detail",
    code: "FS.G05 · Centent",
    span: "square",
  },
  {
    src: "/studio/drums-wide.jpg",
    alt: "Wider view of the drum kit",
    caption: "Plate VI · Kick & Toms",
    code: "FS.G06 · Mic'd Up",
    span: "square",
  },
  {
    src: "/studio/console-detail.jpg",
    alt: "Console detail",
    caption: "Plate VII · Console Detail",
    code: "FS.G02 · The Routing",
    span: "square",
  },
  {
    src: "/studio/mic-collection.jpg",
    alt: "The full microphone locker",
    caption: "Plate VIII · The Mic Locker",
    code: "FS.G03 · sE · Shure",
    span: "wide",
    note: "Each microphone chosen for a specific voice.",
  },
  {
    src: "/studio/mic-shure-1.jpg",
    alt: "Shure MV7 broadcast microphone",
    caption: "Plate IX · Vocal Chain",
    code: "FS.G04 · Shure MV7",
    span: "tall",
  },
  {
    src: "/studio/mic-se-series.jpg",
    alt: "sE Electronics condenser microphones",
    caption: "Plate X · The Condensers",
    code: "FS.G07 · sE 2200/2300",
    span: "tall",
  },
  {
    src: "/studio/mic-closeup.jpg",
    alt: "Microphone close-up",
    caption: "Plate XI · The Capsule",
    code: "FS.G08 · Cardioid",
    span: "square",
  },
  {
    src: "/studio/mic-ribbon.jpg",
    alt: "Ribbon and dynamic microphones",
    caption: "Plate XII · Ribbons & Dynamics",
    code: "FS.G09 · Tracking",
    span: "square",
  },
];

function Plate({ plate, index }: { plate: Plate; index: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [22, -22]);

  const heightClass =
    plate.span === "tall"
      ? "h-[70vw] sm:h-[520px] md:h-[680px]"
      : plate.span === "wide"
        ? "h-[55vw] sm:h-[420px] md:h-[560px]"
        : "h-[55vw] sm:h-[360px] md:h-[440px]";

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, delay: 0.02 * index, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className={`relative w-full overflow-hidden bg-paper-2 ${heightClass}`}>
        <motion.div style={{ y }} className="absolute inset-0 -top-4 -bottom-4">
          <Image
            src={plate.src}
            alt={plate.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-paper/55 via-transparent to-transparent" />
      </div>
      <figcaption className="mt-3 md:mt-4">
        <div className="flex items-center justify-between gap-3">
          <span className="mono text-[10px] tracking-[0.28em] uppercase text-ink-soft">
            {plate.caption}
          </span>
          <span className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim text-right">
            {plate.code}
          </span>
        </div>
        {plate.note && (
          <p className="mt-2 font-[var(--font-serif)] italic text-ink-soft text-[15px] md:text-[16px] leading-[1.5] max-w-[460px]">
            {plate.note}
          </p>
        )}
      </figcaption>
    </motion.figure>
  );
}

export function StudioPageContent() {
  return (
    <>
      <PageHeader
        num="01"
        kicker="A Visual Tour, In Twelve Plates"
        title={
          <>
            Inside the{" "}
            <span className="gold-text serif-italic font-normal">Recording House.</span>
          </>
        }
        caption="No stock photos. Every frame was made in the rooms — by the people who work in them."
      />

      <section className="relative pb-24 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {plates.map((p, i) => (
              <div
                key={p.src}
                className={
                  // Make some plates span wider on desktop for editorial rhythm
                  p.span === "wide" && i % 4 === 0
                    ? "md:col-span-2"
                    : ""
                }
              >
                <Plate plate={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities ledger — informational, not pricing */}
      <section className="relative py-20 md:py-32 border-t border-[var(--color-rule)] bg-paper-2/30">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-5">
              <p className="label mb-4">The Capability Ledger</p>
              <h2
                className="font-[var(--font-display)] text-ink leading-[0.94] tracking-[-0.02em]"
                style={{
                  fontSize: "clamp(36px, 5vw, 68px)",
                  fontVariationSettings: "'opsz' 96, 'SOFT' 40",
                }}
              >
                What the room <span className="serif-italic text-gold">can do</span>.
              </h2>
            </div>

            <div className="md:col-span-7">
              <ul className="border-t border-[var(--color-rule)]">
                {[
                  {
                    n: "i.",
                    t: "Vocal recording",
                    d: "Lead vocals, choirs, harmonies. Curated mic locker, treated booth, considered headphone mixes.",
                  },
                  {
                    n: "ii.",
                    t: "Live drums",
                    d: "Real acoustic kit, multi-mic setup, room tone preserved. Mic'd by ear, not by template.",
                  },
                  {
                    n: "iii.",
                    t: "Live instrumentation",
                    d: "Keys, guitar, bass and percussion. Programmed when it serves the song, played when the song asks for it.",
                  },
                  {
                    n: "iv.",
                    t: "Production & arrangement",
                    d: "Beats and full arrangements across Afrobeat, Gospel, R&B, Hip-Hop, Pop, Reggae and Worship.",
                  },
                  {
                    n: "v.",
                    t: "Mixing",
                    d: "Hybrid sensibility — depth, weight, air. Vocal-first balances that translate to phones, cars and rooms.",
                  },
                  {
                    n: "vi.",
                    t: "Mastering",
                    d: "Streaming-ready masters. Loudness handled responsibly, dynamics preserved.",
                  },
                  {
                    n: "vii.",
                    t: "Podcast & spoken word",
                    d: "Editing, levelling and mastering for episodic releases.",
                  },
                ].map((row) => (
                  <li
                    key={row.t}
                    className="grid grid-cols-12 gap-4 py-6 md:py-7 border-b border-[var(--color-rule)]"
                  >
                    <span className="col-span-2 md:col-span-1 mono text-[11px] tracking-[0.22em] uppercase text-gold pt-1">
                      {row.n}
                    </span>
                    <div className="col-span-10 md:col-span-11">
                      <h3
                        className="font-[var(--font-display)] text-ink leading-tight"
                        style={{
                          fontSize: "clamp(22px, 2.4vw, 30px)",
                          fontVariationSettings: "'opsz' 72, 'SOFT' 30",
                        }}
                      >
                        {row.t}
                      </h3>
                      <p className="mt-2 text-ink-soft text-[15px] md:text-[16px] leading-[1.55] font-[var(--font-serif)] max-w-[640px]">
                        {row.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-6 py-4 bg-gold text-paper hover:bg-gold-hi transition-colors mono text-[11px] tracking-[0.28em] uppercase"
                >
                  Discuss your project
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/voices"
                  className="group inline-flex items-center gap-3 px-6 py-4 border border-[var(--color-rule)] text-ink-soft hover:text-ink hover:border-ink-soft transition-colors mono text-[11px] tracking-[0.28em] uppercase"
                >
                  Read what artists say
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
