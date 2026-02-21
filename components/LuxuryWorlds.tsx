"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function LuxuryWorlds({ locale }: { locale: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements?.forEach((el) => observer.observe(el));
  }, []);

  const worlds = [
    {
      title: locale === "ar" ? "الخدمات" : "Services",
      href: `/${locale}/services`,
      image: "/services.jpg"
    },
    {
      title: locale === "ar" ? "المجوهرات والفساتين" : "Jewelry & Dresses",
      href: `/${locale}/jewelry`,
      image: "/jewelry.jpg"
    },
    {
      title: locale === "ar" ? "المناسبات" : "Events",
      href: `/${locale}/events`,
      image: "/events.jpg"
    },
    {
      title: locale === "ar" ? "السباحة واللياقة المائية" : "Swimming & Aquatic Fitness",
      href: `/${locale}/pool`,
      image: "/pool.jpg"
    }
  ];

  return (
    <section className="relative bg-[var(--color-cream)] py-24 overflow-hidden">

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/grain.png')]" />

      <div ref={containerRef} className="relative space-y-32">

        {worlds.map((world, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto px-8 reveal ${
              index % 2 !== 0 ? "md:grid-flow-dense" : ""
            }`}
          >

            {/* Text Side */}
            <div
              className={`space-y-6 ${
                index % 2 !== 0 ? "md:col-start-2" : ""
              }`}
            >
              <div className="gold-line" />

              <h3 className="text-3xl md:text-4xl font-light text-[var(--color-burgundy)]">
                {world.title}
              </h3>

              <p className="text-lg text-[var(--color-charcoal)]/80 leading-relaxed">
                {locale === "ar"
                  ? "تجربة راقية تجمع بين الفخامة والهدوء والتفاصيل الدقيقة."
                  : "An elevated experience blending elegance, tranquility, and refined detail."}
              </p>

              <Link
                href={world.href}
                className="inline-block mt-4 text-sm uppercase tracking-[3px] text-[var(--color-gold)] hover:opacity-70 transition"
              >
                {locale === "ar" ? "اكتشف المزيد" : "Discover More"}
              </Link>
            </div>

            {/* Image Side */}
            <div className="relative group overflow-hidden h-[420px]">

              <img
                src={world.image}
                alt={world.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-90"
              />

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-40 transition duration-500" />

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
