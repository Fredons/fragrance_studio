"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const items = [
  { href: "/", label: "Home", num: "00" },
  { href: "/studio", label: "The Studio", num: "01" },
  { href: "/voices", label: "Voices", num: "02" },
  { href: "/contact", label: "Contact", num: "03" },
];

export function Nav() {
  const [time, setTime] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const wat = new Date(d.getTime() + (d.getTimezoneOffset() + 60) * 60000);
      const hh = String(wat.getHours()).padStart(2, "0");
      const mm = String(wat.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm} WAT`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when drawer open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled || open
            ? "backdrop-blur-md bg-paper/75 border-b border-[var(--color-rule)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-14 flex items-center justify-between">
          <Link href="/" aria-label="Fragrance Studios — Home" className="flex items-center gap-3 shrink-0">
            <svg width="24" height="24" viewBox="0 0 22 22" aria-hidden>
              <circle cx="11" cy="11" r="10" stroke="var(--color-gold)" strokeWidth="1" fill="none" />
              <text
                x="11"
                y="15"
                textAnchor="middle"
                fontFamily="var(--font-display), serif"
                fontSize="11"
                fontWeight="600"
                fill="var(--color-gold)"
              >
                FS
              </text>
            </svg>
            <span className="mono text-[10px] tracking-[0.28em] text-ink-soft uppercase hidden sm:inline">
              Fragrance Studios · Abuja
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            {items.map((it) => {
              const active =
                it.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(it.href);
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={[
                    "sweep mono text-[11px] tracking-[0.18em] uppercase transition-colors",
                    active ? "text-ink" : "text-ink-soft hover:text-ink",
                  ].join(" ")}
                >
                  <span className={active ? "text-gold mr-2" : "text-gold mr-2"}>
                    {it.num}
                  </span>
                  {it.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <span className="mono text-[10px] tracking-[0.2em] text-ink-dim uppercase hidden lg:inline">
              {time}
            </span>
            <Link
              href="/contact"
              className="hidden sm:inline-flex mono text-[10px] tracking-[0.22em] uppercase px-3 py-2 border border-[var(--color-rule)] hover:border-gold hover:text-gold transition-colors"
            >
              Book a Session
            </Link>

            {/* Mobile burger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative w-10 h-10 -mr-2 inline-flex items-center justify-center"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span
                className={[
                  "absolute block h-px w-5 bg-ink transition-all duration-300",
                  open ? "rotate-45 translate-y-0" : "-translate-y-1.5",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute block h-px w-5 bg-ink transition-all duration-200",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute block h-px w-5 bg-ink transition-all duration-300",
                  open ? "-rotate-45 translate-y-0" : "translate-y-1.5",
                ].join(" ")}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-paper/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-14 bottom-0 px-6 pt-10 pb-12 overflow-y-auto"
            >
              <p className="label mb-6">Menu</p>
              <ul className="space-y-1 border-t border-[var(--color-rule)]">
                {items.map((it, i) => {
                  const active =
                    it.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(it.href);
                  return (
                    <li key={it.href} className="border-b border-[var(--color-rule)]">
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.06 * i, duration: 0.4 }}
                      >
                        <Link
                          href={it.href}
                          className="group py-5 flex items-center gap-4 text-ink"
                        >
                          <span className="mono text-[10px] tracking-[0.28em] uppercase text-gold w-10">
                            {it.num}
                          </span>
                          <span
                            className="font-[var(--font-display)] text-[40px] leading-none tracking-[-0.01em] flex-1"
                            style={{
                              fontVariationSettings: "'opsz' 96, 'SOFT' 30",
                            }}
                          >
                            {it.label}
                            {active && (
                              <span className="ml-2 align-super text-[14px] text-gold">
                                ✦
                              </span>
                            )}
                          </span>
                          <span className="mono text-[12px] text-ink-dim group-active:translate-x-1 transition-transform">
                            →
                          </span>
                        </Link>
                      </motion.div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/fragrancestudios/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[var(--color-rule)] p-4 mono text-[10px] tracking-[0.22em] uppercase text-ink-soft hover:text-gold hover:border-gold transition-colors"
                >
                  Instagram ↗
                </a>
                <a
                  href="https://www.facebook.com/fragrancestudios/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[var(--color-rule)] p-4 mono text-[10px] tracking-[0.22em] uppercase text-ink-soft hover:text-gold hover:border-gold transition-colors"
                >
                  Facebook ↗
                </a>
              </div>

              <p className="mt-10 mono text-[10px] tracking-[0.24em] uppercase text-ink-dim">
                {time} · Abuja, FCT
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
