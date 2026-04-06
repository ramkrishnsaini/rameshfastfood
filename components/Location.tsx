import { GlowButton } from "@/components/GlowButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  ADDRESS,
  GOOGLE_MAPS_URL,
  googleMapsEmbedUrl,
} from "@/lib/constants";

const MAP_EMBED = googleMapsEmbedUrl();

export function Location() {
  return (
    <section
      id="location"
      className="relative scroll-mt-36 bg-gradient-to-b from-surface to-surface-elevated py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-brand-muted">
            Find us — best fast food in Lachhmangarh
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Location
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Ramesh Fast Food — {ADDRESS}. Easy to find on SDM Court Road in
            Lachhmangarh (Laxmangarh).
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <GlowButton href={GOOGLE_MAPS_URL} variant="accent" external>
              Open in Google Maps
            </GlowButton>
            <p className="max-w-md text-center text-sm text-gray-500 sm:text-left">
              Same location as on{" "}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-muted underline decoration-brand/40 underline-offset-2 hover:text-brand"
              >
                Google Maps
              </a>{" "}
              — directions and reviews in one tap.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
            <div className="aspect-[21/9] min-h-[280px] w-full sm:aspect-[21/8]">
              <iframe
                title="Map — Ramesh Fast Food, Lachhmangarh"
                src={MAP_EMBED}
                className="h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Embedded map is centred on our pin. Use{" "}
            <strong className="font-medium text-gray-400">Open in Google Maps</strong>{" "}
            for navigation in the app.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
