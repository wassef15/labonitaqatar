"use client";

import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EventsPage({
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
      {/* HERO — GRAND BALLROOM STYLE */}
      <section className="relative h-[90vh] bg-[url('/events-bg1.png')] bg-cover bg-center overflow-hidden">

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white space-y-8">

          <p className="uppercase tracking-[12px] text-xs text-[var(--color-gold)]">
            {locale === "ar" ? "لحظات استثنائية" : "Extraordinary Moments"}
          </p>

          <h1 className="text-5xl md:text-7xl font-light tracking-wide">
            {locale === "ar" ? "المناسبات" : "Events"}
          </h1>

          <div className="w-20 h-[1px] bg-[var(--color-gold)]" />

          <p className="max-w-2xl opacity-80 text-lg">
            {locale === "ar"
              ? "تنظيم مناسبات فاخرة تعكس الأناقة والتميز في كل تفصيلة."
              : "Curated celebrations infused with elegance and refined grandeur."}
          </p>

        </div>
      </section>

      {/* GRAND INTRO SECTION */}
      <section className="py-32 bg-[#141414] text-white text-center space-y-10">

        <h2 className="text-3xl md:text-4xl font-light">
          {locale === "ar"
            ? "حيث تتحول الرؤية إلى واقع فاخر"
            : "Where Vision Becomes Luxury"}
        </h2>

        <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto" />

        <p className="max-w-3xl mx-auto opacity-70 leading-relaxed text-lg">
          {locale === "ar"
            ? "من حفلات الزفاف الخاصة إلى المناسبات الحصرية، نقدم تجربة متكاملة تعكس الفخامة والرقي."
            : "From private weddings to exclusive celebrations, we create experiences that embody sophistication and timeless elegance."}
        </p>

      </section>

     {/* CINEMATIC SPLIT SECTIONS */}
<section
  ref={containerRef}
  className="py-24 max-w-6xl mx-auto px-8 space-y-24"
>

  {/* BLOCK 1 */}
  <div className="grid md:grid-cols-2 gap-16 items-center reveal">

    {/* TEXT */}
    <div className="space-y-6">
      <div className="w-12 h-[1px] bg-[var(--color-gold)]" />

      <h3 className="text-2xl md:text-3xl font-light">
        {locale === "ar" ? "حفلات الزفاف" : "Weddings"}
      </h3>

      <p className="opacity-70 leading-relaxed max-w-md">
        {locale === "ar"
          ? "تصميم مناسبات زفاف تعكس الفخامة والرقي في كل تفصيل."
          : "Designing wedding experiences infused with timeless luxury."}
      </p>
    </div>

    {/* IMAGE */}
    <div className="flex justify-center">
      <div className="w-[340px] md:w-[420px] h-[480px] overflow-hidden shadow-xl border border-[var(--color-beige)] bg-white">
        <img
          src="/wedding.png"
          alt="Luxury Wedding"
          className="w-full h-full object-cover transition duration-700 hover:scale-105"
        />
      </div>
    </div>

  </div>

  {/* BLOCK 2 */}
  <div className="grid md:grid-cols-2 gap-16 items-center reveal md:grid-flow-dense">

    {/* IMAGE */}
    <div className="flex justify-center md:col-start-2">
      <div className="w-[340px] md:w-[420px] h-[480px] overflow-hidden shadow-xl border border-[var(--color-beige)] bg-white">
        <img
          src="/private.png"
          alt="Private Celebration"
          className="w-full h-full object-cover transition duration-700 hover:scale-105"
        />
      </div>
    </div>

    {/* TEXT */}
    <div className="space-y-6">
      <div className="w-12 h-[1px] bg-[var(--color-gold)]" />

      <h3 className="text-2xl md:text-3xl font-light">
        {locale === "ar" ? "مناسبات خاصة" : "Private Celebrations"}
      </h3>

      <p className="opacity-70 leading-relaxed max-w-md">
        {locale === "ar"
          ? "تنسيق احتفالات خاصة بلمسة من الأناقة الراقية."
          : "Exclusive gatherings curated with refined attention to detail."}
      </p>
    </div>

  </div>

</section>

      {/* CALL TO ACTION */}
      <section className="py-28 bg-black text-white text-center space-y-6">

        <h2 className="text-3xl font-light">
          {locale === "ar"
            ? "دعنا نصنع لحظتك الفريدة"
            : "Let Us Craft Your Signature Moment"}
        </h2>

        <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto" />

        <Link
          href={`/${locale}/book`}
          className="inline-block mt-6 px-12 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition uppercase tracking-[3px] text-sm"
        >
          {locale === "ar" ? "تواصل معنا" : "Plan Your Event"}
        </Link>

      </section>

      <Footer locale={locale} />
    </>
  );
}
