"use client";

import { useEffect, useState } from "react";
import { store } from "@/lib/store";

export function Header() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("top");
      const threshold = hero ? hero.offsetHeight - 48 : window.innerHeight - 48;
      setPastHero(window.scrollY > threshold);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className={`site-header ${pastHero ? "site-header--solid" : "site-header--hero"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.25rem] md:px-8">
        <a href="#top" className="site-header__brand font-display">
          {store.shortName}
        </a>
        <nav className="flex items-center gap-1 text-sm">
          <a href="#shop" className="site-header__link">
            Shop
          </a>
          <a href="#products" className="site-header__link site-header__link--desktop">
            Products
          </a>
          <a href="#contact" className="site-header__contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
