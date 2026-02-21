"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isRTL = locale === "ar";

  const navItems = [
    { label: locale === "ar" ? "الخدمات" : "Services", href: `/${locale}/services` },
    { label: locale === "ar" ? "المجوهرات والفساتين" : "Jewelry & Special Gifts", href: `/${locale}/jewelry` },
    { label: locale === "ar" ? "المناسبات" : "Events Planning", href: `/${locale}/events` },
    { label: locale === "ar" ? "السباحة" : "Pool And Fitness", href: `/${locale}/pool` }
  ];

  // Lock scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">

      <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="bg-white/90 backdrop-blur-lg border-b border-[var(--color-beige)]/60">

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

          {/* Desktop Nav */}
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

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
          >
            <span
              className={`absolute w-6 h-[2px] bg-[var(--color-charcoal)] transition-all duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-[var(--color-charcoal)] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-[var(--color-charcoal)] transition-all duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >

        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl tracking-wide hover:text-[var(--color-gold)] transition"
          >
            {item.label}
          </Link>
        ))}

        <LanguageSwitcher locale={locale} />

      </div>

    </header>
  );
}