
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/Themetoggle";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setFormError("");
    setSuccessMessage("");

    let isValid = true;

    // Name validation
    if (name.trim().length < 3) {
      setNameError("Name must be at least 3 characters.");
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    // Password validation
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      isValid = false;
    }

    if (!isValid) {
      setFormError("Signup failed. Please fix the errors below.");
      return;
    }

    // Success
    setSuccessMessage(
      "Account created successfully! Redirecting to login..."
    );

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8fafc] p-6 text-[#172033] transition-colors duration-500 dark:bg-[#0b0f19] dark:text-white">
      {/* =====================================================
          THEME TOGGLE
          ===================================================== */}

      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* =====================================================
          BACKGROUND GLOW
          Same style as Home Page
          ===================================================== */}

      <div className="pointer-events-none absolute -top-[220px] -right-[180px] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-200/50 via-blue-200/30 to-purple-200/40 blur-[140px] dark:from-teal-500/30 dark:via-transparent dark:to-purple-600/30" />

      <div className="pointer-events-none absolute -bottom-[220px] -left-[180px] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-200/40 via-pink-200/30 to-purple-200/30 blur-[140px] dark:from-blue-500/20 dark:via-transparent dark:to-pink-500/20" />

      {/* =====================================================
          MAIN SIGNUP CARD
          ===================================================== */}

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-xl shadow-blue-100/40 backdrop-blur-xl transition-all duration-500 dark:border-gray-800 dark:bg-[#0e1424] dark:shadow-2xl">
        {/* =================================================
            HEADER
            ================================================= */}

        <div className="mb-8 text-center">
          <Link
            href="/"
            className="mb-5 flex flex-col items-center justify-center"
          >
            <Image
              src="/images/mailbox_logo.png"
              alt="Virtual Mailbox Canada"
              width={180}
              height={60}
              priority
              className="h-14 w-auto object-contain"
            />
            <span className="mt-2 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
              Virtual Mailbox Canada
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create an Account
          </h2>

          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Start managing your mail efficiently.
          </p>
        </div>

        {/* =================================================
            SUCCESS MESSAGE
            ================================================= */}

        {successMessage && (
          <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400">
            {successMessage}
          </div>
        )}

        {/* =================================================
            ERROR MESSAGE
            ================================================= */}

        {formError && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
            {formError}
          </div>
        )}

        {/* =================================================
            FORM
            ================================================= */}

        <form className="space-y-5" onSubmit={handleSignup}>
          {/* =================================================
              NAME
              ================================================= */}

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 shadow-sm transition placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:outline-none dark:border-gray-700 dark:bg-[#131b30] dark:text-white dark:placeholder:text-gray-500"
            />

            {nameError && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                {nameError}
              </p>
            )}
          </div>

          {/* =================================================
              EMAIL
              ================================================= */}

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Business Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 shadow-sm transition placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:outline-none dark:border-gray-700 dark:bg-[#131b30] dark:text-white dark:placeholder:text-gray-500"
            />

            {emailError && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                {emailError}
              </p>
            )}
          </div>

          {/* =================================================
              PASSWORD
              ================================================= */}

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pr-16 text-gray-800 shadow-sm transition placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:outline-none dark:border-gray-700 dark:bg-[#131b30] dark:text-white dark:placeholder:text-gray-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-xs font-medium text-gray-500 transition hover:text-teal-500 dark:text-gray-400 dark:hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
              Password must be at least 8 characters.
            </p>

            {passwordError && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                {passwordError}
              </p>
            )}
          </div>

          {/* =================================================
              SUBMIT BUTTON
              ================================================= */}

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 py-3 font-medium text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Sign Up
          </button>
        </form>

        {/* =================================================
            FOOTER
            ================================================= */}

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-teal-500 transition hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

