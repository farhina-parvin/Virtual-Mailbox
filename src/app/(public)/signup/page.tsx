"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    setSuccessMessage("Account created successfully! Redirecting to login...");

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0f19] p-6">
      <div className="fixed top-6 right-6 z-50"></div>
      {/* Background */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-full bg-gradient-to-b from-blue-900/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[150px]" />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-gray-800 bg-[#0e1424] p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="mb-2 inline-block bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent"
          >
            <span>📬</span>Virtual Maillbox Canada
          </Link>

          <h2 className="text-2xl font-bold text-white">Create an Account</h2>

          <p className="mt-1 text-sm text-gray-400">
            Start managing your mail efficiently.
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {formError && (
          <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {formError}
          </div>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSignup}>
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-400">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full rounded-lg border border-gray-700 bg-[#131b30] px-4 py-3 text-white transition focus:border-teal-500 focus:outline-none"
            />

            {nameError && (
              <p className="mt-1 text-xs text-red-400">{nameError}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-400">
              Business Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              className="w-full rounded-lg border border-gray-700 bg-[#131b30] px-4 py-3 text-white transition focus:border-teal-500 focus:outline-none"
            />

            {emailError && (
              <p className="mt-1 text-xs text-red-400">{emailError}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-400">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-700 bg-[#131b30] px-4 py-3 pr-16 text-white transition focus:border-teal-500 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="mt-1 text-xs text-gray-500">
              Password must be at least 8 characters.
            </p>

            {passwordError && (
              <p className="mt-1 text-xs text-red-400">{passwordError}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 py-3 font-medium text-white shadow-lg shadow-teal-500/25 transition hover:opacity-90"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-teal-400 hover:text-teal-300"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
