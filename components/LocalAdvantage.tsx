import { ScrollReveal } from "@/components/ScrollReveal";
import { SERVING_SINCE_YEAR, SITE_NAME } from "@/lib/constants";

const advantages = [
  {
    title: "2 minutes from SDM Court",
    body: "Perfectly located for a quick lunch or a refreshing juice break between work.",
  },
  {
    title: "Local favourite",
    body: "Popular with local students and residents, SDM and Tehsil office workers, and tourists or guests passing through — affordable, tasty meals in Lachhmangarh.",
  },
  {
    title: "Fresh & hygienic",
    body: "From our famous Mysore Masala Dosa to crispy burgers and pizzas, every dish uses quality ingredients.",
  },
  {
    title: "Easy access",
    body: "On the main route for takeaway or a sit-down meal with friends.",
  },
] as const;

const quickLinks = [
  {
    label: "Food near me in Lachhmangarh",
    text: "We are right around the corner from the SDM Court.",
  },
  {
    label: "Best Dosa in Sikar district",
    text: "Our South Indian menu is legendary across town.",
  },
  {
    label: "Comfort food for students and travellers",
    text: "Pav Bhaji, Chowmein, and more — hearty options for residents, office-goers, and guests.",
  },
] as const;

export function LocalAdvantage() {
  return (
    <section
      id="why-locals"
      className="relative scroll-mt-36 border-t border-white/5 bg-gradient-to-b from-surface-elevated/40 to-surface py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-brand-muted">
            <span aria-hidden className="mr-1.5 inline-block">
              📍
            </span>
            Why locals love us
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            The {SITE_NAME} advantage
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.06} className="mt-12">
          <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
            The heart of Lachhmangarh&apos;s food scene
          </h3>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-400">
            Located strategically near the SDM Court in Lachhmangarh (Sikar), we are
            the go-to spot for fresh, hygienic, and delicious street food. Local
            students and residents, people working at the SDM or Tehsil office, and
            tourists or guests exploring the area — everyone finds the flavours they
            crave, whether it&apos;s a quick lunch or a relaxed bite with friends.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {advantages.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm sm:p-6"
              >
                <p className="font-display text-lg font-semibold text-brand-muted">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-base">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.14} className="mt-14">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8 md:p-10">
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
              Quick links for hungry locals
            </h3>
            <ul className="mt-6 space-y-5">
              {quickLinks.map((row) => (
                <li key={row.label} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                  <p className="text-sm font-medium text-accent-soft">
                    Searching for &ldquo;{row.label}&rdquo;?
                  </p>
                  <p className="mt-1.5 text-gray-400">{row.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-500 sm:text-base">
              <span className="font-semibold text-gray-300">
                {SITE_NAME} &amp; Juice Corner
              </span>
              {" — "}
              Serving Lachhmangarh since {SERVING_SINCE_YEAR} with love and spice.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
