"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setLoginError("");

    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    let isValid = true;

    if (!cleanEmail.includes("@")) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (cleanPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    }

    if (!isValid) {
      setLoginError("Login failed. Please fix the errors below.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: cleanEmail,
            password: cleanPassword,
          }),
        },
      );

      const data = await response.json();

      console.log("STATUS:", response.status);
      console.log("LOGIN RESPONSE:", data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));

        router.push("/dashboard");
      } else {
        setLoginError(data.message || "Invalid Credentials");
      }
    } catch (error) {
      console.error(error);
      setLoginError("Server Error. Please check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-16">
      {/* Extra subtle glow for Login page */}
      <div className="pointer-events-none absolute top-[-180px] right-[-180px] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-teal-500/20 to-purple-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-500/15 to-pink-500/15 blur-[140px]" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-gray-800 bg-[#0e1424]/85 p-8 shadow-2xl backdrop-blur-xl md:p-10">
        {/* Logo / Heading */}
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="mb-5 inline-flex items-center justify-center"
          >
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
              📬 Virtual Mailbox Canada
            </span>
          </Link>

          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="mt-2 text-sm text-gray-400">
            Log in to manage your digital mail.
          </p>
        </div>

        {/* Login Error */}
        {loginError && (
          <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
            {loginError}
          </div>
        )}

        {/* FORM */}
        <form className="space-y-5" onSubmit={handleLogin}>
          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              className={`w-full rounded-xl border ${
                emailError ? "border-red-500/60" : "border-gray-700"
              } bg-[#131b30]/90 px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20`}
            />

            {emailError && (
              <p className="mt-2 text-xs text-red-400">{emailError}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300"
              >
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-xs text-teal-400 transition hover:text-teal-300"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full rounded-xl border ${
                  passwordError ? "border-red-500/60" : "border-gray-700"
                } bg-[#131b30]/90 px-4 py-3 pr-20 text-white transition outline-none placeholder:text-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-xs font-medium text-gray-400 transition hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {passwordError && (
              <p className="mt-2 text-xs text-red-400">{passwordError}</p>
            )}
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 py-3.5 font-semibold text-white shadow-lg shadow-teal-500/20 transition duration-300 hover:scale-[1.01] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* REGISTER */}
        <p className="mt-7 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-teal-400 transition hover:text-teal-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
