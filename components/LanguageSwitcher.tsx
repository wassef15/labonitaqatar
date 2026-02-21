"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex gap-4 text-sm font-semibold text-[var(--color-gold)]">
      <button
        onClick={() => switchLanguage("en")}
        className={locale === "en" ? "underline" : ""}
      >
        EN
      </button>

      <button
        onClick={() => switchLanguage("ar")}
        className={locale === "ar" ? "underline" : ""}
      >
        AR
      </button>
    </div>
  );
}
