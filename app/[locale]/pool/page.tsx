"use client";

import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

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
      <section className="relative h-[90vh] bg-[url('/pool-hero.png')] bg-cover bg-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white space-y-8">

          <p className="uppercase tracking-[12px] text-xs text-[var(--color-gold)]">
            {locale === "ar" ? "السكينة والحركة" : "Serenity in Motion"}
          </p>

          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            {locale === "ar"
              ? "السباحة واللياقة المائية"
              : "Swimming & Aquatic Fitness"}
          </h1>

          <div className="w-16 h-[1px] bg-[var(--color-gold)]" />

        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 max-w-4xl mx-auto px-8 text-center space-y-8 reveal">

        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-burgundy)]">
          {locale === "ar"
            ? "مساحة هادئة لإعادة التوازن"
            : "A Quiet Space to Rebalance"}
        </h2>

        <p className="text-lg opacity-70 leading-relaxed">
          {locale === "ar"
            ? "تجربة سباحة مصممة لتمنحك صفاءً داخليًا وقوة جسدية."
            : "An architectural aquatic experience designed to restore clarity and strength."}
        </p>

      </section>

      {/* ARCHITECTURAL SPLIT SECTION */}
      <section
        ref={containerRef}
        className="py-32 max-w-6xl mx-auto px-8 space-y-32"
      >

        {/* BLOCK 1 — POOL */}
        <div className="grid md:grid-cols-2 gap-24 items-center reveal">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="w-[500px] h-[420px] overflow-hidden shadow-xl border border-[var(--color-beige)]">
              <img
                src="/pool-enhanced.png"
                alt="Luxury Indoor Pool"
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* TEXT */}
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
        <div className="grid md:grid-cols-2 gap-24 items-center reveal md:grid-flow-dense">

          {/* TEXT */}
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

          {/* IMAGE */}
          <div className="flex justify-center md:col-start-2">
            <div className="w-[500px] h-[420px] overflow-hidden shadow-xl border border-[var(--color-beige)]">
              <img
                src="/gym-enhanced.png"
                alt="Luxury Gym"
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-28 bg-[var(--color-cream)] text-center space-y-6">

        <h2 className="text-3xl font-light text-[var(--color-burgundy)]">
          {locale === "ar"
            ? "ابدأ رحلتك المائية"
            : "Begin Your Aquatic Journey"}
        </h2>

        <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto" />

        <Link
          href={`/${locale}/book`}
          className="inline-block mt-6 px-10 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition uppercase tracking-[3px] text-sm"
        >
          {locale === "ar" ? "احجز الآن" : "Book Session"}
        </Link>

      </section>

      <Footer locale={locale} />
    </>
  );
}