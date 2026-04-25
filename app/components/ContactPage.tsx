"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { PageHeader } from "./PageHeader";

const sessionTypes = [
  "Recording",
  "Production",
  "Mixing",
  "Mastering",
  "Full Record",
  "Podcast",
];

const studioPhone = ""; // Placeholder — fill with confirmed number, e.g. "2348012345678"
const studioEmail = "hello@fragrancestudios.ng";

type Errors = Partial<Record<"name" | "contact" | "type" | "note", string>>;

export function ContactPageContent() {
  const [type, setType] = useState("Recording");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [note, setNote] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors: Errors = useMemo(() => {
    const e: Errors = {};
    if (!name.trim()) e.name = "Please share your name.";
    if (!contact.trim())
      e.contact = "We need an email or phone number to reply.";
    else if (
      !/.+@.+\..+/.test(contact) &&
      !/^[+\d][\d\s\-()]{6,}$/.test(contact)
    )
      e.contact = "That doesn't look like a valid email or phone number.";
    if (!type) e.type = "Choose a session type.";
    if (!note.trim() || note.trim().length < 12)
      e.note = "Tell us a little about the project (≥ 12 characters).";
    return e;
  }, [name, contact, type, note]);

  const valid = Object.keys(errors).length === 0;

  const message = `Hello Fragrance Studios 👋

I'd like to book a ${type.toLowerCase()} session.

Name: ${name || "—"}
Best contact: ${contact || "—"}

About the project:
${note || "—"}`;

  const waLink = studioPhone
    ? `https://wa.me/${studioPhone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;

  const mailLink = `mailto:${studioEmail}?subject=${encodeURIComponent(
    `New session inquiry — ${type}`
  )}&body=${encodeURIComponent(message)}`;

  function onSubmitWhatsApp(e: React.FormEvent) {
    if (!valid) {
      e.preventDefault();
      setTouched({ name: true, contact: true, note: true, type: true });
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        num="03"
        kicker="Visit · Book · Record"
        title={
          <>
            Come in.{" "}
            <span className="gold-text serif-italic font-normal">
              Let's talk.
            </span>
          </>
        }
        caption="Tell us about the project — we'll reply within 24 hours, Monday to Saturday."
      />

      <section className="relative py-14 md:py-24 overflow-hidden">
        {/* Soft backdrop */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 border border-[var(--color-rule)] bg-paper-2/60 backdrop-blur-sm p-6 sm:p-8 md:p-12"
            >
              <p className="label mb-6 md:mb-8">Start an Inquiry</p>

              <form
                className="space-y-7 md:space-y-9"
                onSubmit={(e) => e.preventDefault()}
                noValidate
              >
                {/* Type */}
                <div>
                  <p className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim mb-3">
                    Session Type
                  </p>
                  <div role="radiogroup" aria-label="Session type" className="flex flex-wrap gap-2">
                    {sessionTypes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        role="radio"
                        aria-checked={type === s}
                        onClick={() => setType(s)}
                        className={[
                          "mono text-[11px] tracking-[0.22em] uppercase px-4 py-2.5 border transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-paper",
                          type === s
                            ? "border-gold text-paper bg-gold"
                            : "border-[var(--color-rule)] text-ink-soft hover:text-ink hover:border-ink-soft",
                        ].join(" ")}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim mb-3 block"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ada Nnaji"
                    aria-invalid={!!(touched.name && errors.name)}
                    aria-describedby={errors.name ? "err-name" : undefined}
                    className="w-full bg-transparent border-b border-[var(--color-rule)] focus:border-gold py-3 text-ink text-[18px] md:text-[20px] font-[var(--font-serif)] italic placeholder:text-ink-dim outline-none transition-colors"
                  />
                  {touched.name && errors.name && (
                    <p id="err-name" className="mt-2 mono text-[10px] tracking-[0.18em] uppercase text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Contact */}
                <div>
                  <label
                    htmlFor="contact"
                    className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim mb-3 block"
                  >
                    Email or Phone
                  </label>
                  <input
                    id="contact"
                    type="text"
                    inputMode="email"
                    autoComplete="email"
                    value={contact}
                    onBlur={() => setTouched((t) => ({ ...t, contact: true }))}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="ada@example.com  ·  or  ·  +234 …"
                    aria-invalid={!!(touched.contact && errors.contact)}
                    aria-describedby={errors.contact ? "err-contact" : undefined}
                    className="w-full bg-transparent border-b border-[var(--color-rule)] focus:border-gold py-3 text-ink text-[18px] md:text-[20px] font-[var(--font-serif)] italic placeholder:text-ink-dim outline-none transition-colors"
                  />
                  {touched.contact && errors.contact && (
                    <p id="err-contact" className="mt-2 mono text-[10px] tracking-[0.18em] uppercase text-red-400">
                      {errors.contact}
                    </p>
                  )}
                </div>

                {/* Note */}
                <div>
                  <label
                    htmlFor="note"
                    className="mono text-[10px] tracking-[0.28em] uppercase text-ink-dim mb-3 block"
                  >
                    Tell Us About The Project
                  </label>
                  <textarea
                    id="note"
                    rows={4}
                    value={note}
                    onBlur={() => setTouched((t) => ({ ...t, note: true }))}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="A gospel EP, three tracks, looking to record and mix over two weekends."
                    aria-invalid={!!(touched.note && errors.note)}
                    aria-describedby={errors.note ? "err-note" : undefined}
                    className="w-full bg-transparent border-b border-[var(--color-rule)] focus:border-gold py-3 text-ink text-[18px] md:text-[20px] font-[var(--font-serif)] italic placeholder:text-ink-dim outline-none transition-colors resize-none"
                  />
                  <div className="flex items-center justify-between mt-2">
                    {touched.note && errors.note ? (
                      <p id="err-note" className="mono text-[10px] tracking-[0.18em] uppercase text-red-400">
                        {errors.note}
                      </p>
                    ) : (
                      <span />
                    )}
                    <p className="mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
                      {note.length} / 600
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={onSubmitWhatsApp}
                    aria-disabled={!valid}
                    tabIndex={valid ? 0 : -1}
                    className={[
                      "group inline-flex items-center gap-3 px-6 py-4 transition-colors mono text-[11px] tracking-[0.28em] uppercase",
                      valid
                        ? "bg-gold text-paper hover:bg-gold-hi"
                        : "bg-ink-dim/30 text-ink-dim cursor-not-allowed",
                    ].join(" ")}
                  >
                    Send via WhatsApp
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href={valid ? mailLink : undefined}
                    aria-disabled={!valid}
                    tabIndex={valid ? 0 : -1}
                    className={[
                      "group inline-flex items-center gap-3 px-6 py-4 border transition-colors mono text-[11px] tracking-[0.28em] uppercase",
                      valid
                        ? "border-[var(--color-rule)] text-ink-soft hover:text-ink hover:border-ink-soft"
                        : "border-[var(--color-rule)]/40 text-ink-dim cursor-not-allowed",
                    ].join(" ")}
                  >
                    Email Instead
                  </a>
                </div>

                {!valid && Object.keys(touched).length > 0 && (
                  <p className="mono text-[10px] tracking-[0.18em] uppercase text-ink-dim">
                    Fill the fields above to enable sending.
                  </p>
                )}

                {submitted && (
                  <p className="mono text-[10px] tracking-[0.22em] uppercase text-gold">
                    ✦ Opened in WhatsApp — finish sending from there.
                  </p>
                )}

                <p className="mono text-[10px] tracking-[0.2em] uppercase text-ink-dim leading-relaxed">
                  {studioPhone
                    ? "Your note pre-fills the WhatsApp message. We reply within 24 hours, Monday–Saturday."
                    : "Your note pre-fills a WhatsApp message you can send to our line. We reply within 24 hours, Mon–Sat."}
                </p>
              </form>
            </motion.div>

            {/* Sidebar */}
            <div className="md:col-span-5 flex flex-col gap-5 md:gap-8">
              <div className="border border-[var(--color-rule)] bg-paper-2/60 backdrop-blur-sm p-6 sm:p-8 md:p-10">
                <p className="label mb-5">The Studio</p>
                <p
                  className="font-[var(--font-display)] text-ink leading-[1] tracking-[-0.01em]"
                  style={{
                    fontSize: "clamp(28px, 3.4vw, 44px)",
                    fontVariationSettings: "'opsz' 72, 'SOFT' 40",
                  }}
                >
                  Abuja,
                  <br />
                  <span className="gold-text serif-italic">F.C.T. Nigeria</span>
                </p>
                <div className="hairline my-6" />
                <ul className="mono text-[12px] tracking-[0.06em] text-ink-soft space-y-3">
                  <li className="flex items-center justify-between gap-3">
                    <span className="text-ink-dim">Address</span>
                    <span className="text-ink text-right">Shared on confirmation</span>
                  </li>
                  <li className="flex items-center justify-between gap-3">
                    <span className="text-ink-dim">Hours</span>
                    <span className="text-ink text-right">Mon–Sat · By Appt.</span>
                  </li>
                  <li className="flex items-center justify-between gap-3">
                    <span className="text-ink-dim">Rating</span>
                    <span className="text-gold text-right">4.9 ★ on Google</span>
                  </li>
                  <li className="flex items-center justify-between gap-3">
                    <span className="text-ink-dim">Reply window</span>
                    <span className="text-ink text-right">Within 24 hours</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[var(--color-rule)] bg-paper-2/60 backdrop-blur-sm p-6 sm:p-8 md:p-10">
                <p className="label mb-5">Elsewhere</p>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://www.instagram.com/fragrancestudios/"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 text-ink hover:text-gold transition-colors"
                    >
                      <span className="font-[var(--font-serif)] italic text-[18px] md:text-[20px]">
                        Instagram
                      </span>
                      <span className="mono text-[10px] tracking-[0.28em] uppercase group-hover:translate-x-1 transition-transform">
                        @fragrancestudios ↗
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/fragrancestudios/"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 text-ink hover:text-gold transition-colors"
                    >
                      <span className="font-[var(--font-serif)] italic text-[18px] md:text-[20px]">
                        Facebook
                      </span>
                      <span className="mono text-[10px] tracking-[0.28em] uppercase group-hover:translate-x-1 transition-transform">
                        /fragrancestudios ↗
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${studioEmail}`}
                      className="group flex items-center justify-between gap-3 text-ink hover:text-gold transition-colors"
                    >
                      <span className="font-[var(--font-serif)] italic text-[18px] md:text-[20px]">
                        Email
                      </span>
                      <span className="mono text-[10px] tracking-[0.28em] uppercase group-hover:translate-x-1 transition-transform break-all">
                        {studioEmail} ↗
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border border-[var(--color-rule)] bg-paper-2/60 backdrop-blur-sm p-6 sm:p-8 md:p-10">
                <p className="label mb-5">FAQ</p>
                <ul className="space-y-5">
                  <li>
                    <p className="font-[var(--font-serif)] italic text-ink text-[17px] md:text-[18px]">
                      Do you take walk-ins?
                    </p>
                    <p className="mt-1 text-ink-soft text-[14px] md:text-[15px] leading-[1.55] font-[var(--font-serif)]">
                      No — sessions are by appointment only, so we can prepare the
                      room properly for your record.
                    </p>
                  </li>
                  <li>
                    <p className="font-[var(--font-serif)] italic text-ink text-[17px] md:text-[18px]">
                      How quickly do you reply?
                    </p>
                    <p className="mt-1 text-ink-soft text-[14px] md:text-[15px] leading-[1.55] font-[var(--font-serif)]">
                      Within 24 hours, Monday to Saturday.
                    </p>
                  </li>
                  <li>
                    <p className="font-[var(--font-serif)] italic text-ink text-[17px] md:text-[18px]">
                      What about pricing?
                    </p>
                    <p className="mt-1 text-ink-soft text-[14px] md:text-[15px] leading-[1.55] font-[var(--font-serif)]">
                      Quoted per project after a short call. Tell us the scope —
                      we'll come back with a proposal.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 flex justify-center">
            <Link
              href="/voices"
              className="group inline-flex items-center gap-3 mono text-[11px] tracking-[0.28em] uppercase text-ink-soft hover:text-gold transition-colors"
            >
              <span className="hairline w-12" />
              Read what artists say first
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
