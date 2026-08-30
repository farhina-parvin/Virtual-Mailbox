import Link from "next/link";
import Image from "next/image";

import {
  MapPin,
  Phone,
  Clock,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-[#080c14] text-gray-400">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* COLUMN 1 - CONTACT INFO */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Virtual Mailbox Canada
            </h3>

            <div className="space-y-5 text-sm">

              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-teal-400"
                />

                <p className="leading-6">
                  191/1, Tejgaon C/A,
                  <br />
                  Dhaka-1208,
                  <br />
                  Bangladesh
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone
                  size={19}
                  className="shrink-0 text-teal-400"
                />

                <a
                  href="tel:+8809613444455"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  +8809613444455
                </a>
              </div>

              {/* Opening Hours */}
              <div className="flex items-center gap-3">
                <Clock
                  size={19}
                  className="shrink-0 text-teal-400"
                />

                <span>9 am - 9 pm (Everyday)</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail
                  size={19}
                  className="shrink-0 text-teal-400"
                />

                <a
                  href="mailto:hello@virtualmailboxcanada.com"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  hello@virtualmailboxcanada.com
                </a>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-7">
              <p className="mb-4 text-sm text-gray-300">
                Follow us on
              </p>

              <div className="flex gap-3">

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 transition-all duration-300 hover:border-teal-400 hover:bg-teal-400/10 hover:text-teal-400"
                >
                  <FaFacebookF size={17} />
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 transition-all duration-300 hover:border-teal-400 hover:bg-teal-400/10 hover:text-teal-400"
                >
                  <FaYoutube size={17} />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 transition-all duration-300 hover:border-teal-400 hover:bg-teal-400/10 hover:text-teal-400"
                >
                  <FaLinkedinIn size={17} />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 transition-all duration-300 hover:border-teal-400 hover:bg-teal-400/10 hover:text-teal-400"
                >
                  <FaInstagram size={17} />
                </a>

              </div>
            </div>
          </div>

          {/* COLUMN 2 - COMPANY */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link
                  href="/"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/how-it-works"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* COLUMN 3 - CUSTOMER CARE */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Customer Care
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Contact Support
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/refund-policy"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Return & Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/how-it-works"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Help Center
                </Link>
              </li>

            </ul>
          </div>

          {/* COLUMN 4 - PAYMENT METHODS */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Payment Methods
            </h3>

            <div className="grid grid-cols-3 gap-3">

              {/* VISA */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white">
                <span className="text-xl font-bold italic text-blue-700">
                  VISA
                </span>
              </div>

              {/* Mastercard */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white">
                <div className="flex">
                  <span className="h-6 w-6 rounded-full bg-red-500" />
                  <span className="-ml-3 h-6 w-6 rounded-full bg-yellow-400 opacity-90" />
                </div>
              </div>

              {/* AMEX */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white">
                <span className="text-xs font-bold text-blue-600">
                  AMERICAN
                  <br />
                  EXPRESS
                </span>
              </div>

              {/* bKash */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white">
                <span className="font-bold text-pink-600">
                  bKash
                </span>
              </div>

              {/* Nagad */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white">
                <span className="font-bold text-orange-500">
                  নগদ
                </span>
              </div>

              {/* Cash on Delivery */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white">
                <span className="text-center text-xs font-bold text-gray-700">
                  Cash on
                  <br />
                  Delivery
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">

          <span>
            © 2026 Virtual Mailbox Canada. All Rights Reserved.
          </span>

          <span className="mx-1">
            Designed & Developed by
          </span>

          <a
            href="https://totalofftec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-400 transition-colors duration-300 hover:text-teal-300"
          >
            TOTALOFFTEC
          </a>

        </div>
      </div>
    </footer>
  );
}
