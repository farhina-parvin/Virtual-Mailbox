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

return ( <section className="relative z-10 mx-auto mt-20 max-w-7xl px-6 md:px-10"> <div className="mb-12 text-center"> <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
Choose Your Perfect Plan </h1>

```
    <p className="text-lg text-gray-600 dark:text-gray-400">
      Transparent pricing for modern mail management.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-3">
    {pricingPlans.map((plan) => (
      <div
        key={plan.name}
        className={`
          relative flex flex-col rounded-2xl border p-8
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl

          ${
            plan.recommended
              ? `
                border-teal-500
                bg-white/90
                shadow-2xl
                shadow-teal-500/10

                dark:bg-[#0e1424]
              `
              : `
                border-gray-200
                bg-white/75
                shadow-sm

                dark:border-gray-800
                dark:bg-[#0b0f19]
                dark:shadow-none
              `
          }
        `}
      >
        {plan.recommended && (
          <span
            className="
              absolute
              -top-3
              left-1/2
              -translate-x-1/2
              rounded-full
              bg-gradient-to-r
              from-teal-400
              to-blue-500
              px-3
              py-1
              text-xs
              font-bold
              text-white
            "
          >
            MOST POPULAR
          </span>
        )}

        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {plan.name}
        </h3>

        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          {plan.description}
        </p>

        <div className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white">
          {plan.price}

          <span className="text-lg text-gray-500 dark:text-gray-400">
            /mo
          </span>
        </div>

        <ul className="mb-8 space-y-4">
          <li className="text-sm text-gray-700 dark:text-gray-300">
            ✓ {plan.storage} Secure Storage
          </li>

          <li className="text-sm text-gray-700 dark:text-gray-300">
            ✓ {plan.seats}
          </li>

          <li className="text-sm text-gray-700 dark:text-gray-300">
            ✓ API Access
          </li>
        </ul>

        <a
          href={`http://127.0.0.1:8000/?product=${plan.product}&plan=${plan.plan}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-auto
            w-full
            rounded-lg
            bg-gradient-to-r
            from-teal-500
            to-blue-600
            py-3
            text-center
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:from-teal-600
            hover:to-blue-700
          "
        >
          Select Plan
        </a>
      </div>
    ))}
  </div>
</section>
);
}
