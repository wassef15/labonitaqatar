"use client";

import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ServicesPage({
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

  const services = [
    {
      title: locale === "ar" ? "الحمام المغربي" : "The Moroccan Ritual",
      description:
        locale === "ar"
          ? "طقوس تطهير وتجديد مستوحاة من التقاليد المغربية باستخدام منتجات فاخرة لإعادة التوازن والنقاء."
          : "A purification and renewal ritual inspired by Moroccan traditions, restoring harmony and radiance.",
      image: "/moroccan.png"
    },
    {
      title: locale === "ar" ? "المساج العلاجي" : "Massages",
      description:
        locale === "ar"
          ? "جلسات استرخاء وعلاج عميق تشمل المساج السويدي، العميق، والحجر الساخن."
          : "Relaxing, deep tissue, therapeutic and hot stone massages designed to restore balance.",
      image: "/massage.png"
    },
    {
      title: locale === "ar" ? "العناية بالبشرة" : "Facials",
      description:
        locale === "ar"
          ? "علاجات متقدمة باستخدام Chanel وSisley لإشراقة ونضارة البشرة."
          : "Advanced Chanel & Sisley facial treatments for rejuvenation and luminous skin.",
      image: "/facial.png"
    },
    {
      title: locale === "ar" ? "نحت الجسم والتنسيق" : "Body Rituals & Contouring",
      description:
        locale === "ar"
          ? "برامج تنحيف وشد الجسم باستخدام تقنيات حديثة وخبرات احترافية."
          : "Slimming, sculpting and contouring treatments using advanced technologies.",
      image: "/body.png"
    },
    {
      title: locale === "ar" ? "العناية بالشعر" : "Hair Care Rituals",
      description:
        locale === "ar"
          ? "قص، تلوين، كيراتين، وعلاجات Kérastase المتخصصة لإعادة الحيوية."
          : "Precision cuts, coloring, keratin and premium Kérastase rituals.",
      image: "/hair.png"
    },
    {
      title: locale === "ar" ? "العناية باليدين والقدمين" : "Hands & Feet Rituals",
      description:
        locale === "ar"
          ? "مانيكير وباديكير فاخر باستخدام Essie وVictoria Vynn."
          : "Luxury manicure and pedicure rituals using Essie and Victoria Vynn.",
      image: "/nails.png"
    },
    {
      title: locale === "ar" ? "المكياج الاحترافي" : "Glow-Up Makeup",
      description:
        locale === "ar"
          ? "مكياج يومي، مسائي، وعروس بإطلالة أنيقة ومميزة."
          : "Day, evening and bridal makeup tailored for elegance.",
      image: "/makeup.png"
    },
    {
      title: locale === "ar" ? "اللياقة والعافية" : "Fitness & Wellness",
      description:
        locale === "ar"
          ? "حصص خاصة، بيلاتس، أكوافيت، وبرامج عافية شاملة."
          : "Private fitness classes, Pilates, Aquafit and holistic wellness programs.",
      image: "/fitness.png"
    },
    {
      title: locale === "ar" ? "الفعاليات الخاصة" : "Private Events Venue",
      description:
        locale === "ar"
          ? "مساحة فاخرة للاحتفال بالمناسبات الخاصة للسيدات."
          : "An elegant private venue for celebrations and intimate gatherings.",
      image: "/events.png"
    }
  ];

  return (
    <>
    {/* HERO — MATCH EVENTS STYLE */}
<section className="relative h-screen bg-[url('/services-hero.png')] bg-cover bg-[position:center_35%] overflow-hidden">

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/75" />

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white space-y-8">

    <p className="uppercase tracking-[12px] text-xs text-[var(--color-gold)]">
      {locale === "ar" ? "الفخامة في التفاصيل" : "Luxury in Detail"}
    </p>

    <h1 className="text-5xl md:text-7xl font-light tracking-wide">
      {locale === "ar" ? "الخدمات" : "Services"}
    </h1>

    <div className="w-20 h-[1px] bg-[var(--color-gold)]" />

    <p className="max-w-2xl opacity-80 text-lg">
      {locale === "ar"
        ? "طقوس جمالية وعافية مصممة لتجربة راقية لا تُنسى."
        : "A curated collection of beauty and wellness rituals designed for refined luxury."}
    </p>

  </div>
</section>

      {/* INTRO */}
      <section className="py-24 max-w-4xl mx-auto px-8 text-center space-y-6 reveal">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-burgundy)]">
          {locale === "ar"
            ? "عناية راقية بتفاصيل استثنائية"
            : "Refined Care with Exceptional Detail"}
        </h2>

        <p className="text-lg opacity-70 leading-relaxed">
          {locale === "ar"
            ? "مجموعة متكاملة من الطقوس الجمالية والعافية المصممة لتجربة فاخرة."
            : "A curated collection of beauty and wellness rituals designed for an elevated experience."}
        </p>
      </section>

      {/* SERVICES */}
      <section ref={containerRef} className="pb-32 space-y-24 max-w-6xl mx-auto px-8">

        {services.map((service, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-16 items-center reveal ${
              index % 2 !== 0 ? "md:grid-flow-dense" : ""
            }`}
          >

            {/* TEXT */}
            <div className={`${index % 2 !== 0 ? "md:col-start-2" : ""} space-y-6`}>
              <div className="w-12 h-[1px] bg-[var(--color-gold)]" />

              <h3 className="text-2xl md:text-3xl font-light text-[var(--color-charcoal)]">
                {service.title}
              </h3>

              <p className="opacity-70 leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="w-[380px] h-[460px] overflow-hidden shadow-xl border border-[var(--color-beige)] bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="py-24 bg-[#141414] text-white text-center space-y-6">
        <h2 className="text-3xl font-light">
          {locale === "ar"
            ? "احجزي تجربتك الفاخرة الآن"
            : "Book Your Luxury Experience"}
        </h2>

        <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto" />

        <Link
          href={`/${locale}/book`}
          className="inline-block mt-6 px-10 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition uppercase tracking-[3px] text-sm"
        >
          {locale === "ar" ? "احجز موعدك" : "Book Appointment"}
        </Link>
      </section>

      <Footer locale={locale} />
    </>
  );
}