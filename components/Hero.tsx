"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlowButton } from "@/components/GlowButton";
import { whatsappHref } from "@/lib/constants";
import { publicImageSrc } from "@/lib/image-url";

const heroImage = "/images/Mysore Masala Dosa.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-36 sm:pt-40"
    >
      <div className="absolute inset-0 bg-hero-mesh" aria-hidden />
      <div className="absolute inset-0 opacity-[0.35]">
        <Image
          src={publicImageSrc(heroImage)}
          alt="Mysore Masala Dosa — signature dish at Ramesh Fast Food"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/85 to-surface/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-transparent to-surface/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent/90 sm:text-sm"
        >
          Best food in Lachhmangarh
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Best Fast Food in{" "}
          <span className="bg-gradient-to-r from-brand via-brand-muted to-accent bg-clip-text text-transparent">
            Lachhmangarh
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mx-auto mt-5 max-w-2xl text-base text-gray-300 sm:text-lg"
        >
          Dosa | Burger | Pizza | Chowmein | Sandwich — fresh, fast, and full
          of flavour. The best food in Lachhmangarh for families who love bold
          taste.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <GlowButton href="#menu" variant="primary">
            View Menu
          </GlowButton>
          <GlowButton
            href={whatsappHref()}
            variant="accent"
            external
          >
            Order on WhatsApp
          </GlowButton>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full border border-white/20"
        aria-hidden
      >
        <motion.span
          className="mx-auto mt-2 block h-2 w-1 rounded-full bg-accent"
          animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
