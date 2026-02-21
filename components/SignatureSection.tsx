export default function SignatureSection({ locale }: { locale: string }) {
  return (
    <section className="py-24 md:py-32 bg-white">

      <div className="max-w-4xl mx-auto px-8 text-center space-y-8">

        <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto" />

        <p className="text-2xl md:text-3xl font-light leading-relaxed text-[var(--color-charcoal)]">
          {locale === "ar"
            ? "الجمال ليس مظهراً، بل تجربة متكاملة من الفخامة والهدوء."
            : "Beauty is not appearance — it is an experience of elegance and tranquility."}
        </p>

        <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto" />

      </div>

    </section>
  );
}
