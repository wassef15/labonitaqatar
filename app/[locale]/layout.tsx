import "../globals.css";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import { luxuryFont } from "@/lib/fonts";
import WorkingHoursBar from "@/components/WorkingHoursBar";

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!["en", "ar"].includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${luxuryFont.className} bg-[var(--color-cream)]`}>

        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Smooth Scroll → Desktop Only */}
        <div className="hidden md:block">
          <SmoothScroll />
        </div>

        {/* Cursor Glow → Desktop Only */}
        <div className="hidden md:block">
          <CursorGlow />
        </div>

        {/* Navbar */}
        <Navbar locale={locale} />

        {/* Working Hours Bar */}
        <WorkingHoursBar locale={locale} />

        {/* Main Content */}
        <main className="pt-28 md:pt-32">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

      </body>
    </html>
  );
}