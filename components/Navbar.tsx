"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: locale === "ar" ? "الخدمات" : "Services", href: `/${locale}/services` },
    { label: locale === "ar" ? "المجوهرات والفساتين" : "Jewelry & Special Gifts", href: `/${locale}/jewelry` },
    { label: locale === "ar" ? "المناسبات" : "Events Planning", href: `/${locale}/events` },
    { label: locale === "ar" ? "السباحة" : "Pool And Fitness", href: `/${locale}/pool` }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="relative bg-white/90 backdrop-blur-lg border-b border-[var(--color-beige)]/60">

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="La Bonita"
              width={55}
              height={55}
              className="object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-light text-[var(--color-burgundy)]">
                La Bonita
              </span>
              <span className="text-[10px] tracking-[4px] text-[var(--color-gold)] uppercase">
                Salon & Spa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 items-center font-medium text-[var(--color-charcoal)]">
            {navItems.map((item, index) => {
              const active = pathname === item.href;

              return (
                <Link key={index} href={item.href} className="relative group">
                  <span
                    className={`transition-colors ${
                      active
                        ? "text-[var(--color-gold)]"
                        : "group-hover:text-[var(--color-gold)]"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] bg-[var(--color-gold)] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <LanguageSwitcher locale={locale} />
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-[2px] bg-[var(--color-charcoal)]" />
            <span className="w-6 h-[2px] bg-[var(--color-charcoal)]" />
            <span className="w-6 h-[2px] bg-[var(--color-charcoal)]" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-[var(--color-beige)]">
            <div className="flex flex-col items-center gap-6 py-8 text-[var(--color-charcoal)]">

              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg hover:text-[var(--color-gold)] transition"
                >
                  {item.label}
                </Link>
              ))}

              <LanguageSwitcher locale={locale} />

            </div>
          </div>
        )}

      </div>
    </header>
  );
}