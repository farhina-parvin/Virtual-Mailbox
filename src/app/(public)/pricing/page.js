import Link from 'next/link';
import PricingSection from "@/components/PricingSection";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] relative overflow-hidden flexflex-col">
      {/* Background Gradients */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-gradient-to-br from-purple-600/20 to-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto w-full z-10">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent"
        >
          📬 Mail-box
        </Link>

        <Link
          href="/"
          className="text-gray-400 hover:text-white transition"
        >
          Back to Home
        </Link>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 z-10">
        <PricingSection />
      </main>
    </div>
  );
}