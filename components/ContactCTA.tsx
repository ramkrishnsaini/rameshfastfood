"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/GlowButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PHONE_DISPLAY, whatsappHref } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-36 overflow-hidden border-t border-white/5 bg-surface py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,0,0.12)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Order now
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Craving the best food in Lachhmangarh?
          </h2>
          <div className="mx-auto mt-4 max-w-xl space-y-2 text-gray-400">
            <p className="text-balance leading-relaxed">
              Tap WhatsApp to order — we&apos;ll confirm your favourites fast.
            </p>
            <p className="text-balance leading-relaxed">
              <span className="inline-block whitespace-nowrap">
                <span className="text-gray-500">Phone</span>
                {": "}
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
                  className="font-semibold text-white underline decoration-brand/50 underline-offset-4 hover:text-brand"
                >
                  {PHONE_DISPLAY}
                </a>
              </span>
              .
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <GlowButton
            href={whatsappHref(
              "Hi Ramesh Fast Food — I'd like to order from the best fast food in Lachhmangarh.",
            )}
            variant="primary"
            external
          >
            Order on WhatsApp
          </GlowButton>
          <GlowButton href="#menu" variant="outline">
            View Menu Again
          </GlowButton>
        </ScrollReveal>

        <motion.div
          className="mx-auto mt-14 max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm text-gray-400">
            Serving the <strong className="text-gray-200">best fast food in Lachhmangarh</strong>{" "}
            with quick turnaround — ideal for lunch breaks, family evenings, and
            late cravings.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
