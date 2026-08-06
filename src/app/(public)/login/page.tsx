'use client';

import { useState } from "react";
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
  const handleLogin = async (e) => {
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
        "http://127.0.0.1:8000/api/login",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
          },
          body:JSON.stringify({
            email:cleanEmail,
            password:cleanPassword
          })
        }
      );
      const data = await response.json();
      console.log("STATUS:", response.status);
      console.log("LOGIN RESPONSE:", data);
      if(response.ok){
        localStorage.setItem(
          "token",
          data.token
        );
        localStorage.setItem(
          "user",
          JSON.stringify(data)
        );
        router.push("/dashboard");
      }
      else{
        setLoginError(
          data.message || "Invalid Credentials"
        );
      }
    }
    catch(error){
      console.log("LOGIN ERROR:",error);
      setLoginError(
        "Server Error. Please check backend."
      );
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="fixed top-6 right-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-[#0e1424] border border-gray-800 text-gray-300 hover:text-white hover:border-teal-500/50 transition"
        >
          ← Back To Home
        </Link>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="w-full max-w-md bg-[#0e1424] p-8 rounded-2xl border border-gray-800 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-block text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent mb-2"
          >
            📬 Mail-box
          </Link>
          <h2 className="text-2xl font-bold text-white">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Log in to manage your digital mails.
          </p>
        </div>

        {loginError && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {loginError}
          </p>
        )}
        <form
          className="space-y-5"
          onSubmit={handleLogin}
        >
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="name@gmail.com"
              className="w-full bg-[#131b30] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition"
            />
            {emailError && (
              <p className="text-red-400 text-xs mt-1">
                {emailError}
              </p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
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
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#131b30] border border-gray-700 rounded-lg px-4 py-3 pr-20 text-white focus:outline-none focus:border-teal-500 transition"
              />
              <button
                type="button"
                onClick={()=>setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                {showPassword ? "Hide":"Show"}
              </button>
            </div>

            {passwordError && (
              <p className="text-red-400 text-xs mt-1">
                {passwordError}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90 rounded-lg text-white font-medium transition shadow-lg shadow-teal-500/25 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-teal-400 hover:text-teal-300 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}