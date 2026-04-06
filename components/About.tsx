import { ScrollReveal } from "@/components/ScrollReveal";
import { ADDRESS, SITE_NAME } from "@/lib/constants";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-36 border-t border-white/5 bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              About us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {SITE_NAME}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              We serve the <strong className="font-semibold text-gray-200">best food in Lachhmangarh</strong>{" "}
              with a focus on freshness, hygiene, and bold flavour. From crisp
              dosas to loaded pizzas and indulgent kulfi — every plate is
              prepared with care for families, students, and food lovers who
              expect more from fast food.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-400">
              Visit us on SDM Ct Rd for dine-in vibes, or order on WhatsApp for
              quick service. Experience why locals call us the best fast food in
              Lachhmangarh.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
              <p className="text-sm font-medium text-gray-300">Visit us</p>
              <p className="mt-1 font-display text-lg text-white">{ADDRESS}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/25 via-transparent to-accent/15 blur-2xl" />
              <div className="glass-panel relative min-w-0 overflow-hidden rounded-[2rem] p-5 sm:p-8 md:p-10">
                <div className="grid min-w-0 grid-cols-2 gap-3 text-center sm:gap-4">
                  {[
                    { label: "Fresh prep", value: "Daily" },
                    { label: "Hygiene", value: "Priority" },
                    { label: "Flavour", value: "Bold" },
                    { label: "Local love", value: "Lachhmangarh" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20 px-2 py-4 sm:px-3 sm:py-5"
                    >
                      <p className="break-words font-display text-lg font-bold leading-snug text-brand-muted sm:text-xl md:text-2xl">
                        {s.value}
                      </p>
                      <p className="mt-1.5 text-[0.65rem] uppercase leading-tight tracking-wider text-gray-500 sm:text-xs">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-center text-sm text-gray-500">
                  Best food in Lachhmangarh — served with pride at Ramesh Fast
                  Food.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
