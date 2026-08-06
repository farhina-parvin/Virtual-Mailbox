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
 const handleLogin = async (
  e: FormEvent<HTMLFormElement>
) => {
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
      }
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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0f19] p-6">
      <div className="fixed top-6 right-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg border border-gray-800 bg-[#0e1424] px-4 py-2 text-sm text-gray-300 transition hover:border-teal-500/50 hover:text-white"
        >
          ← Back To Home
        </Link>
      </div>

      <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-gradient-to-b from-teal-900/10 to-transparent" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[150px]" />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-gray-800 bg-[#0e1424] p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="mb-2 inline-block bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent"
          >
            📬 Mail-box
          </Link>
          <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
          <p className="mt-1 text-sm text-gray-400">
            Log in to manage your digital mails.
          </p>
        </div>

        {loginError && (
          <p className="mb-4 text-center text-sm text-red-400">{loginError}</p>
        )}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-400">
              Email Address
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

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-400">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-xs text-teal-400 hover:text-teal-300"
              >
                Forgot?
              </Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-700 bg-[#131b30] px-4 py-3 pr-20 text-white transition focus:border-teal-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {passwordError && (
              <p className="mt-1 text-xs text-red-400">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 py-3 font-medium text-white shadow-lg shadow-teal-500/25 transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-teal-400 hover:text-teal-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
