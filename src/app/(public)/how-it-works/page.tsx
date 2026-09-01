import Link from "next/link";
import {
  UserPlus,
  MapPin,
  Mail,
  Bell,
  Eye,
  Download,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Create Your Account",
      description:
        "Sign up for your Virtual Mailbox Canada account and choose the mailbox plan that best fits your needs.",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Get Your Virtual Address",
      description:
        "After selecting your plan, you will receive your dedicated Canadian virtual mailing address.",
    },
    {
      number: "03",
      icon: Mail,
      title: "Receive Your Mail",
      description:
        "Use your virtual address to receive letters, documents, and other eligible mail on your behalf.",
    },
    {
      number: "04",
      icon: Bell,
      title: "Get Notified",
      description:
        "Whenever new mail arrives, you can receive a notification so you know your mailbox has new items.",
    },
    {
      number: "05",
      icon: Eye,
      title: "View Your Mail",
      description:
        "Log in to your account and securely view your available mail through your online mailbox.",
    },
    {
      number: "06",
      icon: Download,
      title: "Manage Your Mail",
      description:
        "Depending on your plan and available services, you can manage your mail conveniently from your account.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900 dark:text-white">
      {/* Page Glow */}
      <div className="pointer-events-none absolute top-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-[5%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[140px]" />

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-16 text-center md:pt-24 md:pb-24">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10">
          <Mail className="h-8 w-8 text-teal-500 dark:text-teal-400" />
        </div>

        <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-teal-600 uppercase dark:text-teal-400">
          Simple & Secure
        </p>

        <h1 className="text-4xl leading-tight font-extrabold text-gray-900 md:text-6xl dark:text-white">
          How It{" "}
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Works
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-400">
          Managing your mail has never been easier. Get your virtual Canadian
          address and manage your mail online from anywhere.
        </p>
      </section>

      {/* STEPS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-lg dark:border-gray-800 dark:bg-[#0e1424]/80 dark:hover:border-teal-500/40 dark:hover:shadow-[0_0_30px_rgba(20,184,166,0.08)]"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-5 text-5xl font-black text-gray-900/[0.035] dark:text-white/[0.035]">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-500/20">
                  <Icon className="h-6 w-6 text-teal-500 dark:text-teal-400" />
                </div>

                <p className="mb-2 text-xs font-semibold tracking-widest text-teal-600 dark:text-teal-400">
                  STEP {step.number}
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY VIRTUAL MAILBOX */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white/95 to-gray-50/95 p-8 shadow-sm backdrop-blur-xl md:p-12 dark:border-gray-800 dark:from-[#10192b]/90 dark:to-[#0d1220]/90">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase dark:text-teal-400">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Your mail,{" "}
                <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                  wherever you are.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
                Virtual Mailbox Canada gives you a convenient way to manage your
                mail without being tied to a physical mailbox.
              </p>

              <Link
                href="/pricing"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-purple-600 px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                View Plans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50/80 p-4 dark:border-gray-800 dark:bg-[#0b0f19]/70">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-teal-500 dark:text-teal-400" />

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Easy Online Management
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Manage your mailbox from your account.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50/80 p-4 dark:border-gray-800 dark:bg-[#0b0f19]/70">
                <ShieldCheck className="h-6 w-6 shrink-0 text-teal-500 dark:text-teal-400" />

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Secure Mail Management
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Keep your mailbox information organized and protected.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50/80 p-4 dark:border-gray-800 dark:bg-[#0b0f19]/70">
                <Mail className="h-6 w-6 shrink-0 text-teal-500 dark:text-teal-400" />

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Convenient Mail Access
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Access your mailbox information online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Ready to get started?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
          Choose a plan and start managing your virtual mailbox today.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="rounded-xl bg-gradient-to-r from-teal-500 to-purple-600 px-7 py-3 font-medium text-white transition hover:opacity-90"
          >
            Create Your Account
          </Link>

          <Link
            href="/pricing"
            className="rounded-xl border border-gray-300 px-7 py-3 font-medium text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
