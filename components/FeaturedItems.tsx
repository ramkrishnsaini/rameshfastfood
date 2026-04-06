"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "./Icons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getFeaturedItems } from "@/lib/menu-data";
import { publicImageSrc } from "@/lib/image-url";

const featured = getFeaturedItems();

export function FeaturedItems() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % featured.length);
    }, 5200);
    return () => clearInterval(t);
  }, []);

  const current = featured[index];

  return (
    <section
      id="featured"
      className="relative scroll-mt-36 overflow-hidden bg-gradient-to-b from-surface via-surface-elevated/50 to-surface py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-accent/10 blur-[90px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-brand-muted">
            Chef&apos;s picks — best food in Lachhmangarh
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Featured Items
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Mysore Dosa, Paneer Pizza, Cheese Sandwich & Kulfi — larger cards,
            spotlight flavours.
          </p>
        </ScrollReveal>

        <div className="relative mt-14">
          <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/11] min-h-[280px] lg:aspect-auto lg:min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={publicImageSrc(current.image)}
                      alt={current.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent lg:bg-gradient-to-r" />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12 lg:pl-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                      Featured
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                      {current.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-400">
                      {current.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous"
                    onClick={() =>
                      setIndex((i) => (i - 1 + featured.length) % featured.length)
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-brand/50 hover:bg-brand/10"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex flex-1 justify-center gap-2">
                    {featured.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === index
                            ? "w-8 bg-brand"
                            : "w-2 bg-white/25 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    aria-label="Next"
                    onClick={() =>
                      setIndex((i) => (i + 1) % featured.length)
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-brand/50 hover:bg-brand/10"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
