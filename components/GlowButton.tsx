"use client";

import Link from "next/link";
import { type ReactNode, useRef } from "react";

type GlowButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "accent" | "outline";
  className?: string;
  external?: boolean;
};

export function GlowButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  external,
}: GlowButtonProps) {
  const hostRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]";

  const styles = {
    primary:
      "bg-gradient-to-r from-brand to-brand-dark text-white btn-glow hover:shadow-glow",
    accent:
      "bg-gradient-to-r from-accent to-accent-soft text-surface btn-glow-accent",
    outline:
      "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-brand/50 hover:bg-white/10",
  }[variant];

  const ripple = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    const el = hostRef.current;
    if (!el) return;
    const circle = document.createElement("span");
    const rect = el.getBoundingClientRect();
    const d = Math.max(rect.width, rect.height) * 1.2;
    circle.style.width = circle.style.height = `${d}px`;
    circle.style.left = `${e.clientX - rect.left - d / 2}px`;
    circle.style.top = `${e.clientY - rect.top - d / 2}px`;
    circle.className =
      "pointer-events-none absolute rounded-full bg-white/20";
    circle.style.animation = "ripple 0.65s ease-out forwards";
    el.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  };

  const inner = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  if (href) {
    const isExternal = external ?? href.startsWith("http");
    if (isExternal) {
      return (
        <a
          ref={hostRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${styles} ${className}`}
          onMouseDown={ripple}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link
        ref={hostRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={`${base} ${styles} ${className}`}
        onMouseDown={ripple}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      ref={hostRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
      onMouseDown={ripple}
    >
      {inner}
    </button>
  );
}
