"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/Themetoggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass =
    "relative text-sm text-gray-700 transition-all duration-300 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-teal-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-6">
      {/* LOGO */}
      <Link
        href="/"
        onClick={closeMenu}
        className="flex items-center gap-2 md:gap-3"
      >
        <Image
          src="/images/mailbox_logo.jpeg"
          alt="Virtual Mailbox Canada"
          width={45}
          height={45}
          className="h-10 w-10 object-contain md:h-[45px] md:w-[45px]"
        />

        <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-lg font-bold text-transparent sm:text-xl md:text-2xl">
          Virtual Mailbox Canada
        </span>
      </Link>

      {/* DESKTOP NAVIGATION */}
      <div className="hidden items-center gap-8 md:flex">
        <Link href="/" className={navLinkClass}>
          Home
        </Link>

        <Link href="/how-it-works" className={navLinkClass}>
          How It Works
        </Link>

        <Link href="/pricing" className={navLinkClass}>
          Pricing
        </Link>

        <Link href="/terms" className={navLinkClass}>
          Terms
        </Link>

        <Link href="/contact" className={navLinkClass}>
          Contact
        </Link>

        <Link href="/privacy" className={navLinkClass}>
          Privacy
        </Link>

        {/* DESKTOP THEME TOGGLE */}
        <ThemeToggle />
      </div>

      {/* DESKTOP BUTTONS */}
      <div className="hidden items-center gap-3 md:flex">
        <Link
          href="/login"
          className="rounded-full bg-gradient-to-r from-teal-500 to-purple-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-700 transition-all duration-300 hover:border-teal-400 hover:bg-teal-400/10 hover:text-teal-500 dark:border-gray-700 dark:text-gray-300 dark:hover:text-teal-400"
        >
          Sign Up
        </Link>
      </div>

      {/* MOBILE RIGHT SIDE */}
      <div className="flex items-center gap-2 md:hidden">
        {/* MOBILE THEME TOGGLE */}
        <ThemeToggle />

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-teal-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-teal-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full right-4 left-4 rounded-2xl border border-gray-200 bg-white/95 p-6 shadow-2xl backdrop-blur-xl md:hidden dark:border-gray-800 dark:bg-[#0b0f19]/95">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-gray-700 transition-all duration-300 hover:translate-x-1 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
            >
              Home
            </Link>

            <Link
              href="/how-it-works"
              onClick={closeMenu}
              className="text-gray-700 transition-all duration-300 hover:translate-x-1 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
            >
              How It Works
            </Link>

            <Link
              href="/pricing"
              onClick={closeMenu}
              className="text-gray-700 transition-all duration-300 hover:translate-x-1 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
            >
              Pricing
            </Link>

            <Link
              href="/terms"
              onClick={closeMenu}
              className="text-gray-700 transition-all duration-300 hover:translate-x-1 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-gray-700 transition-all duration-300 hover:translate-x-1 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
            >
              Contact
            </Link>

            <Link
              href="/privacy"
              onClick={closeMenu}
              className="text-gray-700 transition-all duration-300 hover:translate-x-1 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
            >
              Privacy
            </Link>

            {/* MOBILE BUTTONS */}
            <div className="flex gap-3 border-t border-gray-200 pt-5 dark:border-gray-800">
              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-full bg-gradient-to-r from-teal-500 to-purple-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={closeMenu}
                className="rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-700 transition-all duration-300 hover:border-teal-400 hover:bg-teal-400/10 hover:text-teal-500 dark:border-gray-700 dark:text-gray-300 dark:hover:text-teal-400"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

