"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);

    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setAnimating(false);
    }, 400); // slightly longer for cinematic feel

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div className="relative overflow-hidden">
      
      {/* Gold swipe overlay */}
      <div
        className={`fixed inset-0 z-[9998] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          animating
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(198,165,74,0.15), rgba(0,0,0,0.85))",
        }}
      />

      {/* Page content */}
      <div
        className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          animating
            ? "opacity-0 translate-y-6 scale-[0.99]"
            : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        {displayChildren}
      </div>
    </div>
  );
}
