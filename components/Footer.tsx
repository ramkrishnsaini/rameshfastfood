import Link from "next/link";
import { Instagram } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { ADDRESS, INSTAGRAM_URL, SITE_NAME } from "@/lib/constants";

const quickLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#featured", label: "Featured" },
  { href: "#about", label: "About" },
  { href: "#why-locals", label: "Why locals" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0F1A] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo noLink stacked showName className="mb-4 max-w-sm" />
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Best food in Lachhmangarh — dosas, burgers, pizza, chowmein &
              more. Dark kitchens, bright flavours.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick links
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Location
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {ADDRESS}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-accent-soft"
              aria-label="Ramesh Fast Food on Instagram (@ramesh_fastfood)"
            >
              <Instagram className="h-5 w-5" />
              @ramesh_fastfood
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Best fast food in
            Lachhmangarh, Rajasthan.
          </p>
        </div>
      </div>
    </footer>
  );
}
