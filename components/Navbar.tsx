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

      <div className="bg-white border-b border-[var(--color-beige)]">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image src="/logo.png" alt="La Bonita" width={45} height={45} />
            <span className="text-xl font-light text-[var(--color-burgundy)]">
              La Bonita
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} />
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-black" />
            <span className="w-6 h-[2px] bg-black" />
            <span className="w-6 h-[2px] bg-black" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[400px] py-6" : "max-h-0"
          } bg-white`}
        >
          <div className="flex flex-col items-center gap-6">

            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg"
              >
                {item.label}
              </Link>
            ))}

            <LanguageSwitcher locale={locale} />

          </div>
        </div>

      </div>
    </header>
  );
}