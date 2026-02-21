import HeroSection from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import LuxuryWorlds from "@/components/LuxuryWorlds";
import Footer from "@/components/Footer";

export default function Home({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <>
      <HeroSection locale={locale} />

      <div className="py-16 md:py-20 bg-white">
        <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto opacity-60" />
      </div>

      <AboutSection locale={locale} />

      <div className="h-16 md:h-20 bg-[var(--color-cream)]" />

      <LuxuryWorlds locale={locale} />

      <Footer locale={locale} />
    </>
  );
}
