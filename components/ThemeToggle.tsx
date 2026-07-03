"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as
      | "light"
      | "dark") || "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} theme` : "Toggle theme"}
      className="group relative grid h-9 w-9 place-items-center rounded-full border border-line-strong text-fg transition-transform duration-200 ease-instrument hover:-translate-y-0.5"
    >
      <span className="relative h-[18px] w-[18px]">
        {/* sun */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 transition-[transform,opacity] duration-300 ease-instrument"
          style={{
            transform: theme === "dark" ? "scale(1) rotate(0deg)" : "scale(0) rotate(-90deg)",
            opacity: theme === "dark" ? 1 : 0,
          }}
          aria-hidden
        >
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line
              key={a}
              x1="12"
              y1="1.5"
              x2="12"
              y2="4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              transform={`rotate(${a} 12 12)`}
            />
          ))}
        </svg>
        {/* moon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 transition-[transform,opacity] duration-300 ease-instrument"
          style={{
            transform: theme === "dark" ? "scale(0) rotate(90deg)" : "scale(1) rotate(0deg)",
            opacity: theme === "dark" ? 0 : 1,
          }}
          aria-hidden
        >
          <path
            d="M20 14.5A8 8 0 1 1 9.5 4a6.3 6.3 0 0 0 10.5 10.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
