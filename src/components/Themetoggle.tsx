"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative flex h-10 w-10 items-center justify-center
        rounded-xl border
        border-gray-200
        bg-white/80
        text-gray-700
        shadow-sm
        backdrop-blur-md
        transition-all duration-300
        hover:scale-105
        hover:bg-gray-50

        dark:border-gray-700
        dark:bg-[#111827]/80
        dark:text-gray-200
        dark:hover:bg-[#1a2235]
      "
    >
      {theme === "light" ? (
        <Moon size={19} strokeWidth={2} />
      ) : (
        <Sun size={19} strokeWidth={2} />
      )}
    </button>
  );
}

