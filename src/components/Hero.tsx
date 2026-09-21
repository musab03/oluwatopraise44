import Image from "next/image";
import { store } from "@/lib/store";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src="/instagram-extract/images/11-product-aug13.jpg"
          alt="Home essentials from Oluwatopraise Multipurpose Store"
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover object-[center_40%]"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-scrim)" }}
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-24">
        <p className="anim-rise mb-3 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
          {store.handle}
        </p>
        <h1 className="anim-rise anim-rise-delay-1 font-display max-w-3xl text-[clamp(2.6rem,7.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
          {store.shortName}
        </h1>
        <p className="anim-rise anim-rise-delay-2 mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/85 md:text-lg">
          Kitchen utensils, household items, gifts, and wears quality products with trusted
          service.
        </p>
        <div className="anim-rise anim-rise-delay-3 mt-7 flex flex-wrap gap-3">
          <a
            href={store.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Order on WhatsApp
          </a>
          <a
            href={`tel:${store.phoneTel}`}
            className="inline-flex items-center justify-center rounded-md border border-white/35 bg-white/8 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/16"
          >
            Call {store.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
