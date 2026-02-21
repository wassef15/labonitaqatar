"use client";

export default function AboutSection({ locale }: { locale: string }) {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--color-cream)]">

      <div className="max-w-6xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/about.png')" }}
          />
        </div>

        {/* Text */}
        <div className="space-y-6">
          <p className="uppercase tracking-[8px] text-xs text-[var(--color-gold)]">
            {locale === "ar" ? "فلسفتنا" : "Our Philosophy"}
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-[var(--color-burgundy)]">
            {locale === "ar" ? "عن لا بونيتا" : "About La Bonita"}
          </h2>

          <p className="text-lg leading-relaxed text-[var(--color-charcoal)]/80">
            {locale === "ar"
              ? "واحة من الفخامة والهدوء حيث تلتقي الأناقة بالجمال."
              : "An oasis of luxury and tranquility where elegance meets beauty."}
          </p>
        </div>

      </div>
    </section>
  );
}
