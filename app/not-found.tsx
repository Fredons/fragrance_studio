import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-20">
      <div className="mx-auto max-w-[1100px] px-5 md:px-10 text-center">
        <p className="label mb-6">404 · Page Not Found</p>
        <h1
          className="font-[var(--font-display)] text-ink leading-[0.92] tracking-[-0.02em]"
          style={{
            fontSize: "clamp(56px, 12vw, 168px)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 40",
          }}
        >
          The track you&apos;re looking for{" "}
          <span className="gold-text serif-italic font-normal">
            isn&apos;t in the catalogue.
          </span>
        </h1>
        <p className="mt-8 font-[var(--font-serif)] italic text-ink-soft text-[18px] md:text-[20px] max-w-[640px] mx-auto">
          The room is still here — let&apos;s find what you came for.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-4 bg-gold text-paper hover:bg-gold-hi transition-colors mono text-[11px] tracking-[0.28em] uppercase"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-4 border border-[var(--color-rule)] text-ink-soft hover:text-ink hover:border-ink-soft transition-colors mono text-[11px] tracking-[0.28em] uppercase"
          >
            Begin a session
          </Link>
        </div>
      </div>
    </section>
  );
}
