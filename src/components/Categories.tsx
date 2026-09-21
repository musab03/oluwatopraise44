import Image from "next/image";
import { categories } from "@/lib/store";

export function Categories() {
  return (
    <section id="shop" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brass)]">
          What we sell
        </p>
        <h2 className="font-display mt-3 text-3xl tracking-[-0.02em] text-[var(--ink)] md:text-5xl">
          One store for the home
        </h2>
        <p className="mt-4 max-w-lg text-[var(--muted)] leading-relaxed">
          From the kitchen to gift-ready packages — browse by what you need today.
        </p>
      </div>

      <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {categories.map((category, index) => (
          <li
            key={category.id}
            className="reveal group grid gap-6 py-8 md:grid-cols-[1fr_minmax(0,18rem)] md:items-center md:gap-10"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <div>
              <h3 className="font-display text-2xl tracking-[-0.02em] md:text-3xl">
                {category.title}
              </h3>
              <p className="mt-2 max-w-xl text-[var(--muted)] leading-relaxed">
                {category.description}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-deep)]">
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
