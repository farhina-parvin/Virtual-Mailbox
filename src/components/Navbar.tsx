"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/Themetoggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass =
    "relative text-sm text-gray-700 transition-all duration-300 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-teal-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="relative z-50 w-full px-3 pt-3 md:px-6 md:pt-5">
      {/* Glow behind navbar */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl dark:bg-purple-500/10" />

      <nav className="relative mx-auto w-full max-w-[1600px] rounded-2xl border border-teal-200/60 bg-gradient-to-r from-teal-50/90 via-white/90 to-purple-50/90 shadow-[0_8px_35px_rgba(20,184,166,0.10)] backdrop-blur-xl transition-all duration-300 dark:border-teal-500/20 dark:bg-gradient-to-r dark:from-[#0b1720]/95 dark:via-[#111827]/95 dark:to-[#171226]/95 dark:shadow-[0_8px_40px_rgba(20,184,166,0.08)]">
        <div className="flex w-full items-center justify-between px-5 py-4 md:px-8 lg:px-10">
          <Link
            href="/"
            onClick={closeMenu}
            className="relative flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11 md:h-12 md:w-12">
              <Image
                src="/images/mailbox_logo.png"
                alt="Virtual Mailbox Canada"
                fill
                priority
                className="scale-[1.35] object-contain"
              />
            </div>

            <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-sm font-bold whitespace-nowrap text-transparent sm:text-base md:text-xl lg:text-2xl">
              Virtual Mailbox Canada
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-7 lg:flex">
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

            <ThemeToggle />
          </div>

          {/* DESKTOP BUTTONS */}
          {/* <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="rounded-full bg-gradient-to-r from-teal-500 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-teal-500/10 transition-all duration-300 hover:scale-105 hover:shadow-teal-500/25"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-full border border-gray-300/80 bg-white/30 px-5 py-2 text-sm text-gray-700 transition-all duration-300 hover:border-teal-400 hover:bg-teal-400/10 hover:text-teal-600 dark:border-gray-700 dark:bg-white/5 dark:text-gray-300 dark:hover:text-teal-400"
            >
              Sign Up
            </Link>
          </div> */}

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-gray-700 transition-all duration-300 hover:bg-teal-100 hover:text-teal-600 lg:hidden dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-teal-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mx-3 mb-3 rounded-xl border border-teal-200/60 bg-gradient-to-br from-teal-50/95 via-white/95 to-purple-50/95 p-5 shadow-xl backdrop-blur-xl dark:border-gray-800 dark:from-[#0d1a24]/98 dark:via-[#111827]/98 dark:to-[#171226]/98">
            <div className="flex flex-col gap-5">
              <Link href="/" onClick={closeMenu} className={navLinkClass}>
                Home
              </Link>

              <Link
                href="/how-it-works"
                onClick={closeMenu}
                className={navLinkClass}
              >
                How It Works
              </Link>

              <Link
                href="/pricing"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Pricing
              </Link>

              <Link href="/terms" onClick={closeMenu} className={navLinkClass}>
                Terms
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Privacy
              </Link>

              {/* MOBILE THEME */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-5 dark:border-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Theme
                </span>

                <ThemeToggle />
              </div>

              {/* MOBILE BUTTONS */}
              {/* <div className="flex gap-3 border-t border-gray-200 pt-5 dark:border-gray-800">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="rounded-full bg-gradient-to-r from-teal-500 to-purple-600 px-5 py-2 text-sm text-white"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="rounded-full border border-gray-300 bg-white/30 px-5 py-2 text-sm text-gray-700 dark:border-gray-700 dark:bg-white/5 dark:text-gray-300"
                >
                  Sign Up
                </Link>
              </div> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
