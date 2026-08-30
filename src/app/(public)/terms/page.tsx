import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Page Content */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm text-teal-300">
            Legal Information
          </div>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Terms of{" "}
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Please read these terms carefully before using Virtual Mailbox
            Canada.
          </p>

          <p className="mt-3 text-sm text-gray-600">
            Last Updated: August 2026
          </p>
        </div>

        {/* Terms Card */}
        <div className="rounded-3xl border border-gray-800 bg-[#0e1424]/80 p-6 shadow-2xl backdrop-blur-xl md:p-10">
          {/* 1 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">1. Acceptance of Terms</h2>

            <p className="leading-7 text-gray-400">
              By accessing or using Virtual Mailbox Canada, you agree to be
              bound by these Terms of Service. If you do not agree with any part
              of these terms, please do not use our services.
            </p>
          </section>

          {/* 2 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">2. Our Services</h2>

            <p className="leading-7 text-gray-400">
              Virtual Mailbox Canada provides virtual mailbox and mail
              management services. Depending on your selected plan, services may
              include receiving mail, mail notifications, online mail
              management, and other related features.
            </p>
          </section>

          {/* 3 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">3. Account Registration</h2>

            <p className="leading-7 text-gray-400">
              To use certain features, you may need to create an account. You
              are responsible for providing accurate information and keeping
              your account credentials secure.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              You are responsible for all activities performed through your
              account. Please notify us if you believe your account has been
              accessed without authorization.
            </p>
          </section>

          {/* 4 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">4. Mail and Packages</h2>

            <p className="leading-7 text-gray-400">
              Mail and packages received through the service are handled
              according to the policies associated with your selected mailbox
              plan.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Users are responsible for ensuring that their use of the mailbox
              complies with applicable laws and regulations.
            </p>
          </section>

          {/* 5 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">5. Prohibited Use</h2>

            <p className="leading-7 text-gray-400">
              You agree not to use Virtual Mailbox Canada for unlawful,
              fraudulent, abusive, or otherwise prohibited activities.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-400">
              <li>Fraudulent or deceptive activities</li>

              <li>Activities that violate applicable laws</li>

              <li>Unauthorized use of another person's information</li>

              <li>Activities that could harm our systems or services</li>
            </ul>
          </section>

          {/* 6 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">
              6. Payments and Subscriptions
            </h2>

            <p className="leading-7 text-gray-400">
              Paid services are billed according to the pricing and billing
              terms associated with your selected plan. You agree to provide
              valid payment information when required.
            </p>
          </section>

          {/* 7 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">7. Service Availability</h2>

            <p className="leading-7 text-gray-400">
              We aim to provide reliable and continuous service, but we do not
              guarantee that the service will always be available without
              interruption. Maintenance, technical issues, or circumstances
              outside our control may temporarily affect availability.
            </p>
          </section>

          {/* 8 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">
              8. Account Suspension or Termination
            </h2>

            <p className="leading-7 text-gray-400">
              We reserve the right to suspend or terminate an account if we
              reasonably believe that the account is being used in violation of
              these terms or applicable laws.
            </p>
          </section>

          {/* 9 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">9. Privacy</h2>

            <p className="leading-7 text-gray-400">
              Your use of our services is also subject to our Privacy Policy.
              Please review the Privacy Policy to understand how information is
              collected, used, and protected.
            </p>

            <Link
              href="/privacy"
              className="mt-4 inline-block text-teal-400 transition hover:text-teal-300"
            >
              Read our Privacy Policy →
            </Link>
          </section>

          {/* 10 */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">
              10. Changes to These Terms
            </h2>

            <p className="leading-7 text-gray-400">
              We may update these Terms of Service from time to time. Any
              changes will become effective when the updated terms are published
              on this page.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">11. Contact Us</h2>

            <p className="leading-7 text-gray-400">
              If you have questions about these Terms of Service, please contact
              us through our Contact page.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-teal-500 to-purple-600 px-6 py-3 font-medium transition hover:opacity-90"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
