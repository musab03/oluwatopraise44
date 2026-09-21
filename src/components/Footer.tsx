import { store } from "@/lib/store";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-8 md:py-5">
      <p>
        © {year} {store.name}
      </p>
      <p className="max-w-md md:text-right">{store.tagline}</p>
    </footer>
  );
}
