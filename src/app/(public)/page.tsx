'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PricingSection from "@/components/PricingSection";
import { Shield, Folder, Smartphone, Menu, X } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0f19] text-white">
      {/* Background Glow */}
      <div className="absolute top-[-200px] right-[-200px] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-teal-500/30 to-purple-600/30 blur-[140px]" />
      <div className="absolute bottom-[-200px] left-[-200px] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-500/20 to-pink-500/20 blur-[140px]" />

      {/* NAVBAR */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/mailbox_logo.jpeg"
            alt="Mail-box Logo"
            width={45}
            height={45}
            className="object-contain"
          />

          <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
            Virtual Mailbox Canada
          </span>
        </div>
        {/* Desktop Links */}
        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/how-it-works" className="transition hover:text-white">
            How It Works
          </Link>
          <Link href="/pricing" className="transition hover:text-white">
            Pricing
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            Terms
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
          <Link href="/privacy" className="transition hover:text-white">
            Privacy
          </Link>
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full bg-gradient-to-r from-teal-500 to-purple-600 px-5 py-2 text-sm font-medium transition hover:opacity-90"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full border border-gray-700 px-5 py-2 text-sm transition hover:bg-gray-900"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-20 left-0 z-20 w-full space-y-4 border-b border-gray-800 bg-[#0b0f19] p-6 md:hidden">
          <Link href="/" className="block text-gray-300">
            Home
          </Link>
          <Link href="/terms" className="block text-gray-300">
            Terms
          </Link>
          <Link href="/how-it-works" className="block text-gray-300">
            How It Works
          </Link>
          <Link href="/contact" className="block text-gray-300">
            Contact
          </Link>
          <Link href="/privacy" className="block text-gray-300">
            Privacy
          </Link>

          <div className="flex gap-3 pt-4">
            <Link
              href="/login"
              className="rounded-full bg-gradient-to-r from-teal-500 to-purple-600 px-4 py-2 text-sm"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-full border border-gray-700 px-4 py-2 text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      {/* HERO */}
      <main className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between px-6 pt-12 md:flex-row md:px-10 md:pt-16">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl leading-tight font-extrabold md:text-6xl">
            Efficient, Secure, <br />
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Modern Mail-box
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-400 md:text-lg">
            Mail-box simplifies your digital communication with secure, fast,
            and beautifully organized mail management for modern users.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Link
              href="/"
              className="rounded-xl bg-gradient-to-r from-teal-500 to-purple-600 px-6 py-3 text-center font-medium transition hover:opacity-90"
            >
              Get Started
            </Link>

            <Link
              href="/pricing"
              className="rounded-xl border border-gray-700 px-6 py-3 text-center transition hover:bg-gray-900"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* VISUAL */}
        <div className="relative mt-14 scale-90 md:mt-0 md:scale-100">
          <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-3xl border border-gray-800 bg-gradient-to-br from-teal-500/20 to-purple-600/20 backdrop-blur-xl md:h-[320px] md:w-[320px]">
            <div className="absolute top-10 left-8 h-16 w-24 animate-pulse rounded-lg border border-gray-800 bg-[#131b30] md:h-20 md:w-28" />
            <div className="absolute top-28 right-6 h-14 w-20 rounded-lg border border-gray-800 bg-[#131b30] md:h-16 md:w-24" />
            <div className="absolute bottom-10 left-14 h-16 w-28 rounded-lg border border-gray-800 bg-[#131b30] md:h-18 md:w-32" />
            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-teal-400 to-purple-500 opacity-70 blur-sm md:h-20 md:w-20" />
          </div>
        </div>
      </main>

      {/* FEATURES */}
      <section className="relative z-10 mx-auto mt-20 max-w-7xl px-6 md:mt-24 md:px-10">
        <h2 className="mb-8 text-center text-2xl font-bold md:mb-10 md:text-left md:text-3xl">
          Features
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-[#0e1424] p-6">
            <Shield className="mb-3 text-teal-400" />
            <h3 className="mb-2 text-xl font-semibold">Security</h3>
            <p className="text-sm text-gray-400">
              End-to-end encrypted secure mail system.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#0e1424] p-6">
            <Folder className="mb-3 text-purple-400" />
            <h3 className="mb-2 text-xl font-semibold">Organization</h3>
            <p className="text-sm text-gray-400">
              Smart folders and structured inbox management.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#0e1424] p-6">
            <Smartphone className="mb-3 text-blue-400" />
            <h3 className="mb-2 text-xl font-semibold">Responsive UI</h3>
            <p className="text-sm text-gray-400">
              Fully responsive for mobile, tablet, and desktop.
            </p>
          </div>
        </div>
      </section>
      {/* PRICING */}
      <PricingSection />
      {/* FOOTER */}
      <footer className="mt-10 border-t border-gray-900 py-10 text-center text-sm text-gray-600">
        © 2026 Virtual Mailbox Canada. All Rights Reserved. Design and Developed by{" "}
        <a
          href="https://totalofftec.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-teal-400 transition-colors duration-300 hover:text-teal-300"
        >
          TOTALOFFTEC
        </a>
      </footer>
    </div>
  );
}