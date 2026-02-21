"use client";

import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function PoolPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;
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

  return (
    <>
      {/* HERO */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">

        <Image
          src="/pool-hero.png"
          alt="Luxury Indoor Pool"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 space-y-8">

          <p className="uppercase tracking-[12px] text-xs text-[var(--color-gold)]">
            {locale === "ar" ? "السكينة والحركة" : "Serenity in Motion"}
          </p>

          <h1 className="text-3xl md:text-6xl font-light tracking-wide">
            {locale === "ar"
              ? "السباحة واللياقة المائية"
              : "Swimming & Aquatic Fitness"}
          </h1>

          <div className="w-16 h-[1px] bg-[var(--color-gold)]" />

        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-32 max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8 reveal">

        <h2 className="text-xl md:text-3xl font-light text-[var(--color-burgundy)]">
          {locale === "ar"
            ? "مساحة هادئة لإعادة التوازن"
            : "A Quiet Space to Rebalance"}
        </h2>

        <p className="text-base md:text-lg opacity-70 leading-relaxed">
          {locale === "ar"
            ? "تجربة سباحة مصممة لتمنحك صفاءً داخليًا وقوة جسدية."
            : "An architectural aquatic experience designed to restore clarity and strength."}
        </p>

      </section>

      {/* SPLIT SECTION */}
      <section
        ref={containerRef}
        className="py-20 md:py-32 max-w-6xl mx-auto px-6 md:px-8 space-y-20 md:space-y-32"
      >

        {/* BLOCK 1 — POOL */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center reveal">

          <div className="relative w-full aspect-[5/4] overflow-hidden shadow-xl border border-[var(--color-beige)]">
            <Image
              src="/pool-enhanced.png"
              alt="Luxury Indoor Pool"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6">
            <div className="w-12 h-[1px] bg-[var(--color-gold)]" />

            <h3 className="text-2xl md:text-3xl font-light">
              {locale === "ar" ? "تصميم معماري هادئ" : "Architectural Calm"}
            </h3>

            <p className="opacity-70 leading-relaxed">
              {locale === "ar"
                ? "تصميم يعتمد على الضوء الطبيعي والخطوط النظيفة لخلق تجربة فريدة."
                : "Clean lines and natural light shaping a refined aquatic sanctuary."}
            </p>
          </div>

        </div>

        {/* BLOCK 2 — GYM */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center reveal md:grid-flow-dense">

          <div className="relative w-full aspect-[5/4] overflow-hidden shadow-xl border border-[var(--color-beige)] md:col-start-2">
            <Image
              src="/gym-enhanced.png"
              alt="Luxury Gym"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6">
            <div className="w-12 h-[1px] bg-[var(--color-gold)]" />

            <h3 className="text-2xl md:text-3xl font-light">
              {locale === "ar" ? "لياقة مائية متقدمة" : "Advanced Aquatic Fitness"}
            </h3>

            <p className="opacity-70 leading-relaxed">
              {locale === "ar"
                ? "برامج تدريبية مصممة لتحسين الأداء وتعزيز القوة."
                : "Structured programs designed to elevate performance and endurance."}
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[var(--color-cream)] text-center px-6 space-y-6">

        <h2 className="text-xl md:text-3xl font-light text-[var(--color-burgundy)]">
          {locale === "ar"
            ? "ابدأ رحلتك المائية"
            : "Begin Your Aquatic Journey"}
        </h2>

        <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto" />

        <Link
          href={`/${locale}/book`}
          className="inline-block mt-6 px-8 md:px-10 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition uppercase tracking-[3px] text-sm"
        >
          {locale === "ar" ? "احجز الآن" : "Book Session"}
        </Link>

      </section>

      <Footer locale={locale} />
    </>
  );
}