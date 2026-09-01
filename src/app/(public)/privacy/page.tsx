import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen text-gray-900 dark:text-white">
      <main className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-600 dark:text-purple-300">
            Your Privacy Matters
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 md:text-6xl dark:text-white">
            Privacy{" "}
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600 dark:text-gray-400">
            This Privacy Policy explains how Virtual Mailbox Canada may collect,
            use, and protect information when you use our services.
          </p>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-600">
            Last Updated: August 2026
          </p>
        </div>

        {/* POLICY */}
        <div className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-xl backdrop-blur-xl md:p-10 dark:border-gray-800 dark:bg-[#0e1424]/80">
          {/* 1 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              1. Information We Collect
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              When you create an account or use our services, we may collect
              information that is necessary to provide and maintain the service.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Account and login information</li>
              <li>Billing and subscription information</li>
              <li>Information related to your mailbox service</li>
            </ul>
          </section>

          {/* 2 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              2. How We Use Information
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              Information may be used to provide, operate, maintain, and improve
              our services and to communicate with you about your account.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
              <li>Provide and manage your account</li>
              <li>Process subscriptions and payments</li>
              <li>Provide mailbox-related services</li>
              <li>Send service notifications</li>
              <li>Respond to customer support requests</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          {/* 3 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              3. Information Security
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              We take reasonable measures to protect information from
              unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission or storage can be guaranteed to
              be completely secure.
            </p>
          </section>

          {/* 4 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              4. Cookies and Similar Technologies
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              Our website may use cookies or similar technologies to support
              essential functionality, improve user experience, and understand
              how our services are used.
            </p>
          </section>

          {/* 5 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              5. Information Sharing
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              We do not intend to sell your personal information. Information
              may be shared with service providers or other parties when
              necessary to operate the service, process payments, provide
              support, comply with legal requirements, or protect our rights.
            </p>
          </section>

          {/* 6 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              6. Third-Party Services
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              Our services may integrate with third-party providers for hosting,
              payment processing, analytics, authentication, or other
              functionality. These providers may process information according
              to their own privacy policies.
            </p>
          </section>

          {/* 7 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              7. Data Retention
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              We may retain information for as long as reasonably necessary to
              provide our services, maintain business records, comply with legal
              obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          {/* 8 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              8. Your Privacy Choices
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              Depending on applicable law, you may have rights regarding your
              personal information, including requesting access, correction, or
              deletion of certain information.
            </p>
          </section>

          {/* 9 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              9. Children's Privacy
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              Our services are not intended for children. We do not knowingly
              collect personal information from children where prohibited by
              applicable law.
            </p>
          </section>

          {/* 10 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              10. Changes to This Privacy Policy
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              We may update this Privacy Policy from time to time. Updated
              versions will be posted on this page with a revised update date.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              11. Contact Us
            </h2>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              If you have questions about this Privacy Policy or how your
              information is handled, please contact us.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-teal-500 to-purple-600 px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
