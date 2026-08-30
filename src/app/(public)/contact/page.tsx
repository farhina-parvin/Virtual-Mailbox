import Link from "next/link";
import { Mail, MessageCircle, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen text-white">
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm text-teal-300">
            We’re Here to Help
          </div>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Have a question about your virtual mailbox? Get in touch with our
            team and we’ll be happy to help.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* CONTACT INFO */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-gray-800 bg-[#0e1424]/80 p-7 backdrop-blur-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10">
                <Mail className="h-7 w-7 text-teal-400" />
              </div>

              <h2 className="text-2xl font-bold">Email Support</h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Send us an email and our support team will get back to you as
                soon as possible.
              </p>

              <a
                href="mailto:support@virtualmailboxcanada.com"
                className="mt-5 inline-block text-teal-400 transition hover:text-teal-300"
              >
                support@virtualmailboxcanada.com
              </a>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-[#0e1424]/80 p-7 backdrop-blur-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10">
                <MessageCircle className="h-7 w-7 text-purple-400" />
              </div>

              <h2 className="text-2xl font-bold">Customer Support</h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                We’re here to help with questions about your account, mailbox,
                plans, and services.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-[#0e1424]/80 p-7 backdrop-blur-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10">
                <Clock className="h-7 w-7 text-blue-400" />
              </div>

              <h2 className="text-2xl font-bold">Response Time</h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                We aim to respond to customer inquiries as quickly as reasonably
                possible.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-3xl border border-gray-800 bg-[#0e1424]/80 p-7 backdrop-blur-xl md:p-10 lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">Send Us a Message</h2>

              <p className="mt-2 text-gray-400">
                Fill out the form below and we’ll get back to you.
              </p>
            </div>

            <form className="space-y-6">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-700 bg-[#080e19]/80 px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
                />
              </div>

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
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-700 bg-[#080e19]/80 px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What can we help you with?"
                  className="w-full rounded-xl border border-gray-700 bg-[#080e19]/80 px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-gray-700 bg-[#080e19]/80 px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-purple-600 px-6 py-3.5 font-semibold transition hover:opacity-90"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ LINK */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">Looking for more information?</p>

          <Link
            href="/how-it-works"
            className="mt-2 inline-block text-teal-400 transition hover:text-teal-300"
          >
            Learn How It Works →
          </Link>
        </div>
      </main>
    </div>
  );
}
