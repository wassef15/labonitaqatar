"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";

export default function Footer({ locale }: { locale: string }) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gold-line-visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    if (lineRef.current) observer.observe(lineRef.current);
  }, []);

  return (
    <footer className="relative bg-[#121212] text-white pt-32 pb-20 overflow-hidden">

      {/* Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "url('/images/grain.png')",
          backgroundRepeat: "repeat"
        }}
      />

      {/* Top Gold Line (animated on scroll) */}
      <div
        ref={lineRef}
        className="gold-line mx-auto mb-20"
      />

      <div className="relative max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-20">

        {/* Brand */}
        <div className="space-y-6">
          <h3 className="text-3xl font-light shimmer-gold">
            La Bonita
          </h3>

          <p className="text-sm opacity-60 leading-relaxed max-w-xs">
            {locale === "ar"
              ? "حيث تبدأ الفخامة من أدق التفاصيل."
              : "Where luxury begins in the finest details."}
          </p>

          {/* Booking CTA */}
          <Link
            href={`/${locale}/book`}
            className="inline-block mt-6 px-8 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition-all duration-500 uppercase tracking-[3px] text-xs"
          >
            {locale === "ar" ? "احجز موعدك" : "Book Appointment"}
          </Link>
        </div>

        {/* Navigation */}
        <div className="space-y-4 text-sm opacity-70">
          <p className="hover:text-[var(--color-gold)] transition">Services</p>
          <p className="hover:text-[var(--color-gold)] transition">Events</p>
          <p className="hover:text-[var(--color-gold)] transition">Jewelry</p>
          <p className="hover:text-[var(--color-gold)] transition">Swimming</p>
        </div>

        {/* Contact + Instagram */}
        <div className="space-y-6 text-sm opacity-70">
          <div>
            <p>Doha, Qatar</p>
            <p>+974 0000 0000</p>
            <p>info@labonita.qa</p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Instagram
              className="text-[var(--color-gold)] hover:scale-110 transition-transform duration-300 cursor-pointer"
              size={20}
            />
            <span className="uppercase tracking-[3px] text-xs">
              Instagram
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-24 text-center text-xs opacity-40 tracking-[4px]">
        © 2026 LA BONITA
      </div>
    </footer>
  );
}
