"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white z-[9999] border-b border-[var(--color-beige)]">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image src="/logo.png" alt="La Bonita" width={45} height={45} />
            <span className="text-xl font-light text-[var(--color-burgundy)]">
              La Bonita
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center font-medium text-[var(--color-charcoal)]">
            {navItems.map((item, index) => {
              const active = pathname === item.href;

              return (
                <Link key={index} href={item.href} className="relative group">
                  <span
                    className={`transition-colors duration-300 ${
                      active
                        ? "text-[var(--color-gold)]"
                        : "group-hover:text-[var(--color-gold)]"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Luxury Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] bg-[var(--color-gold)] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">

            {/* Language Switcher (Always Visible) */}
            <LanguageSwitcher locale={locale} />

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-[2px] bg-black" />
              <span className="w-6 h-[2px] bg-black" />
              <span className="w-6 h-[2px] bg-black" />
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[9998] flex flex-col items-center justify-center gap-10 md:hidden">

          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light hover:text-[var(--color-gold)] transition duration-300"
            >
              {item.label}
            </Link>
          ))}

        </div>
      )}
    </>
  );
}