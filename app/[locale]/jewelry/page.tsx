"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function JewelryPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <>
      {/* HERO */}
      <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">

        <Image
          src="/jewelry1.jpg"
          alt="Luxury Jewelry Collection"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-xl text-white space-y-6">
            <p className="uppercase tracking-[12px] text-xs text-[var(--color-gold)]">
              {locale === "ar" ? "مجموعة حصرية" : "Exclusive Boutique"}
            </p>

            <h1 className="text-3xl md:text-6xl font-light leading-tight">
              {locale === "ar"
                ? "المجوهرات والهدايا الخاصة"
                : "Jewelry & Special Gifts"}
            </h1>

            <div className="w-16 h-[1px] bg-[var(--color-gold)]" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-24 max-w-3xl mx-auto px-6 md:px-8 text-center space-y-6">
        <h2 className="text-xl md:text-3xl font-light text-[var(--color-burgundy)]">
          {locale === "ar"
            ? "قطع مختارة بعناية لتجسيد الفخامة"
            : "Curated Pieces Designed to Embody Luxury"}
        </h2>

        <p className="text-base md:text-lg opacity-70 leading-relaxed">
          {locale === "ar"
            ? "تشكيلة فاخرة من المجوهرات والهدايا الخاصة المصممة لتضفي حضورًا استثنائيًا."
            : "A refined selection of jewelry and special gifts crafted to elevate every moment."}
        </p>
      </section>

      {/* FINE JEWELRY */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-6 md:px-8 space-y-12">

        <div className="text-center space-y-3">
          <h3 className="text-2xl md:text-3xl font-light text-[var(--color-charcoal)]">
            {locale === "ar" ? "المجوهرات الراقية" : "Fine Jewelry"}
          </h3>
          <div className="w-14 h-[1px] bg-[var(--color-gold)] mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            { title: locale === "ar" ? "عقود ذهبية" : "Gold Necklaces", image: "/jewelry-necklace.png" },
            { title: locale === "ar" ? "أقراط ماسية" : "Diamond Earrings", image: "/jewelry-earrings.png" },
            { title: locale === "ar" ? "أساور فاخرة" : "Luxury Bracelets", image: "/jewelry-bracelet.png" }
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white border border-[var(--color-beige)] shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-base font-light">
                  {item.title}
                </h4>
              </div>
            </div>

          ))}

        </div>
      </section>

      {/* BAGS & DRESSES */}
      <section className="py-20 md:py-24 bg-[var(--color-cream)] border-t border-[var(--color-beige)]">

        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-20 md:space-y-24">

          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-light text-[var(--color-charcoal)]">
              {locale === "ar" ? "الحقائب والفساتين" : "Bags & Dresses"}
            </h3>
            <div className="w-14 h-[1px] bg-[var(--color-gold)] mx-auto" />
          </div>

          {/* BAGS */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            <div className="relative w-full aspect-[4/5] overflow-hidden shadow-xl border border-[var(--color-beige)] bg-white">
              <Image
                src="/gift-bag.png"
                alt="Luxury Bags"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6 max-w-lg">
              <div className="w-12 h-[1px] bg-[var(--color-gold)]" />
              <h4 className="text-2xl md:text-3xl font-light text-[var(--color-burgundy)]">
                {locale === "ar" ? "حقائب فاخرة" : "Luxury Bags"}
              </h4>
              <p className="opacity-70 leading-relaxed text-base md:text-lg">
                {locale === "ar"
                  ? "تصاميم راقية تضيف لمسة من الأناقة الرفيعة."
                  : "Elegant statement pieces crafted to elevate every refined look."}
              </p>
            </div>

          </div>

          {/* DRESSES */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:grid-flow-dense">

            <div className="relative w-full aspect-[4/5] overflow-hidden shadow-xl border border-[var(--color-beige)] bg-white md:col-start-2">
              <Image
                src="/gift-dress.png"
                alt="Elegant Dresses"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6 max-w-lg">
              <div className="w-12 h-[1px] bg-[var(--color-gold)]" />
              <h4 className="text-2xl md:text-3xl font-light text-[var(--color-burgundy)]">
                {locale === "ar" ? "فساتين راقية" : "Elegant Dresses"}
              </h4>
              <p className="opacity-70 leading-relaxed text-base md:text-lg">
                {locale === "ar"
                  ? "قطع مختارة بعناية لتمنحك حضورًا استثنائيًا."
                  : "Curated couture designed to create unforgettable elegance."}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center space-y-5 px-6">
        <h2 className="text-xl md:text-2xl font-light text-[var(--color-burgundy)]">
          {locale === "ar"
            ? "احجز تجربة تسوق خاصة"
            : "Book a Private Shopping Experience"}
        </h2>

        <div className="w-14 h-[1px] bg-[var(--color-gold)] mx-auto" />

        <Link
          href={`/${locale}/book`}
          className="inline-block mt-4 px-8 md:px-10 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition uppercase tracking-[2px] text-sm"
        >
          {locale === "ar" ? "احجز زيارة" : "Book Private Visit"}
        </Link>
      </section>

      <Footer locale={locale} />
    </>
  );
}