"use client";

import Image from "next/image";
import Link from "next/link";
import { LOGO_PATH, SITE_NAME } from "@/lib/constants";

type LogoProps = {
  variant?: "full" | "mark";
  /** Show “Ramesh” + tagline next to the mark (default: true). */
  showName?: boolean;
  /** Stack image above name (e.g. footer column). */
  stacked?: boolean;
  className?: string;
  href?: string;
  noLink?: boolean;
};

const [namePrimary, ...nameRest] = SITE_NAME.split(" ");
const nameTagline = nameRest.join(" ") || "Fast Food";

export function Logo({
  variant = "full",
  showName = true,
  stacked = false,
  className = "",
  href = "#top",
  noLink = false,
}: LogoProps) {
  const compact = variant === "mark";

  const image = (
    <Image
      src={LOGO_PATH}
      alt={showName ? "" : SITE_NAME}
      width={compact ? 200 : 280}
      height={compact ? 80 : 90}
      className={
        compact
          ? "h-8 w-auto max-h-9 max-w-[min(100%,160px)] shrink-0 object-contain object-left"
          : showName
            ? "h-9 w-auto max-h-10 max-w-[min(100%,120px)] shrink-0 object-contain object-left sm:h-10 sm:max-w-[140px]"
            : "h-10 w-auto max-h-12 max-w-[min(100%,280px)] shrink-0 object-contain object-left sm:h-11 sm:max-h-14"
      }
      sizes={
        compact ? "160px" : showName ? "(max-width: 640px) 120px, 140px" : "(max-width: 640px) 220px, 280px"
      }
      priority
    />
  );

  const wordmark = (
    <div className="flex min-w-0 flex-col leading-none">
      <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg md:text-xl">
        {namePrimary}
      </span>
      <span className="mt-0.5 font-display text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-brand-muted sm:text-[0.65rem] sm:tracking-[0.28em] md:text-xs">
        {nameTagline}
      </span>
    </div>
  );

  const rowLayout = stacked
    ? "flex flex-col items-start gap-2"
    : "flex flex-row flex-wrap items-center gap-2 sm:gap-3";

  const inner = (
    <span className={`inline-flex ${rowLayout} ${className}`}>
      {image}
      {showName && variant === "full" ? wordmark : null}
    </span>
  );

  if (noLink) {
    return (
      <span className="inline-flex max-w-full" aria-label={SITE_NAME}>
        {inner}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex max-w-full min-w-0 items-center rounded-lg outline-none ring-brand/40 transition hover:opacity-95 focus-visible:ring-2"
      aria-label={`${SITE_NAME} — home`}
    >
      {inner}
    </Link>
  );
}
