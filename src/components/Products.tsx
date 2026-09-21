import Image from "next/image";
import { products, store } from "@/lib/store";

export function Products() {
  return (
    <section id="products" className="bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brass)]">
              From Instagram
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-[-0.02em] md:text-5xl">
              Fresh from the shelf
            </h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Real products we post at {store.handle}. Message us to confirm availability and
              place an order.
            </p>
          </div>
          <a
            href={store.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          >
            View on Instagram
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <figure
              key={product.src}
              className="product-tile product-frame reveal"
              style={{ transitionDelay: `${(index % 6) * 40}ms` }}
            >
              <div className="product-frame__media">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="product-frame__img"
                />
              </div>
              <figcaption className="product-frame__caption">{product.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
