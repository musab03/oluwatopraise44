import Image from "next/image";
import { store } from "@/lib/store";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden bg-[var(--bg-deep)] md:mx-0">
          <Image
            src="/instagram-extract/images/08-promo-food-for-thought.jpg"
            alt={`${store.name} — quality products, trusted service`}
            fill
            sizes="(max-width: 768px) 80vw, 360px"
            className="object-cover object-center"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brass)]">
            About the store
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-[-0.02em] md:text-5xl">
            {store.tagline}
          </h2>
          <p className="mt-5 max-w-xl text-[var(--muted)] leading-relaxed md:text-lg">
            {store.name} is a multipurpose retail shop for everyday home needs. We stock kitchen
            utensils, household items, gift items, wears, and drinks — and we keep service personal
            through Instagram and WhatsApp.
          </p>
          <p className="mt-4 max-w-xl text-[var(--muted)] leading-relaxed">
            Follow {store.handle} for new arrivals, then reach out to order. Little by little, a
            lot becomes a lot.
          </p>
        </div>
      </div>
    </section>
  );
}
