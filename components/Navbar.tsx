"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();

  const navItems = [
    {
      label: locale === "ar" ? "الخدمات" : "Services",
      href: `/${locale}/services`
    },
    {
      label: locale === "ar" ? "المجوهرات والفساتين" : "Jewelry & Special Gifts",
      href: `/${locale}/jewelry`
    },
    {
      label: locale === "ar" ? "المناسبات" : "Events Planning",
      href: `/${locale}/events`
    },
    {
      label: locale === "ar" ? "السباحة" : "Pool And Fitness",
      href: `/${locale}/pool`
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Elegant top gold accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="relative bg-white/80 backdrop-blur-lg border-b border-[var(--color-beige)]/60">

        <div className="relative max-w-7xl mx-auto px-8 md:px-16 py-6 flex items-center justify-between">

          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-4 group"
          >
            <Image
              src="/logo.png"
              alt="La Bonita"
              width={60}
              height={60}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-3xl md:text-4xl font-light tracking-wide text-[var(--color-burgundy)]">
                La Bonita
              </span>

              <span className="text-xs tracking-[5px] text-[var(--color-gold)] uppercase">
                Salon & Spa
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-10 items-center text-base font-semibold tracking-[0.5px] text-[var(--color-charcoal)]">

            {navItems.map((item, index) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className="relative group"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      active
                        ? "text-[var(--color-gold)]"
                        : "group-hover:text-[var(--color-gold)]"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Refined underline */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[1.5px] bg-[var(--color-gold)] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher */}
          <div className="ml-4">
            <LanguageSwitcher locale={locale} />
          </div>

        </div>
      </div>
    </header>
  );
}
