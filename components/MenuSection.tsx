"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  categories,
  type Category,
  menuItems,
} from "@/lib/menu-data";
import { publicImageSrc } from "@/lib/image-url";

export function MenuSection() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return menuItems;
    return menuItems.filter((i) => i.category === active);
  }, [active]);

  return (
    <section
      id="menu"
      className="relative scroll-mt-36 border-t border-white/5 bg-surface py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Best food in Lachhmangarh
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our Menu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Explore South Indian classics, fast food favourites, and desserts —
            all made with care. Ramesh Fast Food is your go-to for the best fast
            food in Lachhmangarh.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-10 flex flex-wrap justify-center gap-2">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === cat
                  ? "bg-brand text-white shadow-glow"
                  : "glass-panel text-gray-300 hover:border-brand/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.04}>
              <motion.article
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group glass-panel relative overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-card-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Image
                    src={publicImageSrc(item.image)}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-accent backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
