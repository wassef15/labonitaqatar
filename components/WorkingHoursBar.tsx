"use client";

export default function WorkingHoursBar({ locale }: { locale: string }) {
  return (
    <div className="fixed top-[96px] md:top-[110px] left-0 w-full z-40">

      <div className="bg-[var(--color-burgundy)] text-white py-2 text-center text-xs tracking-[3px] uppercase">

        {locale === "ar"
          ? "ساعات العمل: يومياً من 9 صباحاً حتى 9 مساءً"
          : "Working Hours: Daily from 9 AM to 9 PM"}

      </div>

    </div>
  );
}
