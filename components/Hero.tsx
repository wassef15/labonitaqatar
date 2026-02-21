"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection({ locale }: { locale: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-[75%_center] scale-105 animate-[slowZoom_25s_linear_infinite]"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Parallax Ambient Glow */}
      <div
        className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-[var(--color-gold)] opacity-[0.03] blur-3xl"
        style={{
          transform: "translateY(calc(var(--scrollY, 0px) * 0.15))"
        }}
      />

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b1d14]/85 via-[#2b1d14]/55 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[85vh] px-8 md:px-20">

        <div
          className={`max-w-lg text-white space-y-5 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="uppercase tracking-[8px] text-xs text-[var(--color-gold)]">
            {locale === "ar" ? "مرحبًا بكم في" : "Welcome To"}
          </p>

          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            La Bonita
          </h1>

          <div className="w-16 h-[1px] bg-[var(--color-gold)] opacity-70" />

          <p className="text-lg md:text-xl font-light opacity-90">
            {locale === "ar"
              ? "صالون وسبا للفخامة والجمال"
              : "Salon & Spa of Luxury & Elegance"}
          </p>

          <Link
            href={`/${locale}/book`}
            className="inline-block mt-4 px-8 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition-colors duration-300 uppercase tracking-[3px] text-sm"
          >
            {locale === "ar" ? "احجز موعدك" : "Book Appointment"}
          </Link>
        </div>

      </div>
    </section>
  );
}
