export default function SectionTitle({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl md:text-5xl font-light text-[var(--color-gold)]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg text-[var(--color-charcoal)] opacity-80">
          {subtitle}
        </p>
      )}
    </div>
  );
}
