import PricingSection from "@/components/PricingSection";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen text-gray-900 dark:text-white">

      <main className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-12">
        <PricingSection />
      </main>

    </div>
  );
}