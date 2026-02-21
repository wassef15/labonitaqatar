"use client";

import { useState } from "react";

export default function BookingModal({
  locale,
}: {
  locale: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] uppercase tracking-[3px] text-sm hover:bg-[var(--color-gold)] hover:text-black transition"
      >
        {locale === "ar" ? "احجز موعدك" : "Book Appointment"}
      </button>

      {open && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center">

          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* Modal Box */}
          <div className="relative bg-white max-w-lg w-full p-12 shadow-2xl space-y-6">

            <h2 className="text-2xl font-light text-[var(--color-burgundy)]">
              {locale === "ar"
                ? "احجز موعدك الآن"
                : "Book Your Appointment"}
            </h2>

            <input
              type="text"
              placeholder={locale === "ar" ? "الاسم" : "Name"}
              className="w-full border border-[var(--color-beige)] p-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[var(--color-beige)] p-3 outline-none"
            />

            <button className="w-full bg-[var(--color-gold)] text-black py-3 uppercase tracking-[3px] text-sm">
              {locale === "ar" ? "تأكيد" : "Confirm"}
            </button>

          </div>

        </div>
      )}
    </>
  );
}
