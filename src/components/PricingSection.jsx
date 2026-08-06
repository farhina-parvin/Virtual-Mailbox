import Link from "next/link";

export default function PricingSection() {
  const pricingPlans = [
  {
    name: "BASIC",
    price: "$9.99",
    storage: "5GB",
    seats: "1 User seat",
    description: "Perfect for individuals starting out.",
    product: "virtual-mailbox-canada",
    plan: "basic",
  },
  {
    name: "ADVANCED",
    price: "$24.99",
    storage: "25GB",
    seats: "5 User seats",
    description: "Ideal for small teams and growing businesses.",
    recommended: true,
    product: "virtual-mailbox-canada",
    plan: "professional",
  },
  {
    name: "PRO",
    price: "$49.99",
    storage: "100GB",
    seats: "Unlimited seats",
    description: "For enterprises needing maximum capacity.",
    product: "virtual-mailbox-canada",
    plan: "enterprise",
  },
];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 mt-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Choose Your Perfect Plan
        </h1>
        <p className="text-gray-400 text-lg">
          Transparent pricing for modern mail management.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-8 rounded-2xl border flex flex-col ${
              plan.recommended
                ? "border-teal-500 bg-[#0e1424] shadow-2xl shadow-teal-500/10"
                : "border-gray-800 bg-[#0b0f19]"
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </span>
            )}

            <h3 className="text-xl font-bold text-white mb-2">
              {plan.name}
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              {plan.description}
            </p>

            <div className="text-4xl font-extrabold text-white mb-6">
              {plan.price}
              <span className="text-lg text-gray-500">
                /mo
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="text-gray-300 text-sm">
                ✓ {plan.storage} Secure Storage
              </li>
              <li className="text-gray-300 text-sm">
                ✓ {plan.seats}
              </li>
              <li className="text-gray-300 text-sm">
                ✓ API Access
              </li>
            </ul>
            <a
              href={`http://127.0.0.1:8000/?product=${plan.product}&plan=${plan.plan}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center font-semibold transition-all duration-300 hover:from-teal-600 hover:to-blue-700 hover:scale-[1.02]"
            >
               Select Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}