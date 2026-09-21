import { store } from "@/lib/store";

export function Contact() {
  return (
    <section id="contact" className="border-y border-[var(--line)] bg-[var(--ink)] text-[var(--surface)]">
      <div className="reveal mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:px-8 md:py-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brass)]">
            Get in touch
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-[-0.02em] md:text-5xl">
            Ready to shop?
          </h2>
          <p className="mt-4 max-w-md text-white/70 leading-relaxed">
            Tell us what you need — we&apos;ll confirm stock and arrange delivery or pickup.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={store.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              WhatsApp order
            </a>
            <a
              href={store.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Instagram {store.handle}
            </a>
          </div>
        </div>

        <dl className="space-y-6 self-center text-sm md:text-base">
          <div>
            <dt className="text-white/45">Phone</dt>
            <dd className="mt-1">
              <a href={`tel:${store.phoneTel}`} className="hover:underline">
                {store.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-white/45">Email</dt>
            <dd className="mt-1">
              <a href={store.emailMailto} className="hover:underline">
                {store.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-white/45">Social</dt>
            <dd className="mt-1">
              <a
                href={store.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram {store.handle}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
