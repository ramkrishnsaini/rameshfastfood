"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { PHONE_DISPLAY, whatsappHref } from "@/lib/constants";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#featured", label: "Featured" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

const deliveryWa = whatsappHref(
  "Hi Ramesh Fast Food — I'd like to order food for home delivery.",
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="border-b border-white/10 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1.5 px-4 py-2 text-[11px] sm:flex-row sm:justify-between sm:gap-4 sm:py-2.5 sm:text-xs md:text-sm">
          <p className="font-semibold uppercase tracking-[0.12em] text-accent sm:tracking-[0.18em]">
            Home delivery available
          </p>
          <a
            href={deliveryWa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-3 py-1 font-semibold text-white ring-1 ring-[#25D366]/40 transition hover:bg-[#25D366]/25"
            aria-label={`WhatsApp home delivery — ${PHONE_DISPLAY}`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-surface/85 py-3 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "border-b border-white/5 bg-surface/40 py-4 backdrop-blur-md sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <ul className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-brand"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#menu"
            className="rounded-full bg-brand/15 px-4 py-2 text-xs font-semibold text-brand ring-1 ring-brand/40 transition hover:bg-brand/25 sm:text-sm"
          >
            Order
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
