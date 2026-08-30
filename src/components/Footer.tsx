import Link from "next/link";
import Image from "next/image";

import {
  MapPin,
  Phone,
  Clock,
  Mail,
  CreditCard,
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
      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* =========================
              COLUMN 1 - CONTACT INFO
          ========================== */}
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

            {/* =========================
                SOCIAL MEDIA
            ========================== */}
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

          {/* =========================
              COLUMN 2 - COMPANY
          ========================== */}
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

          {/* =========================
              COLUMN 3 - CUSTOMER CARE
          ========================== */}
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
                {/* <Link
                  href="/how-it-works"
                  className="transition-colors duration-300 hover:text-teal-400"
                >
                  Help Center
                </Link> */}
              </li>

            </ul>
          </div>

          {/* =========================
              COLUMN 4 - PAYMENT METHODS
          ========================== */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Payment Methods
            </h3>

            <div className="grid grid-cols-3 gap-3">

              {/* VISA */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white px-3">
                <Image
                  src="/images/visa.png"
                  alt="Visa"
                  width={70}
                  height={40}
                  className="max-h-8 w-auto object-contain"
                />
              </div>

              {/* MASTERCARD */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white px-3">
                <Image
                  src="/images/mastercard.png"
                  alt="Mastercard"
                  width={70}
                  height={40}
                  className="max-h-9 w-auto object-contain"
                />
              </div>

              {/* AMERICAN EXPRESS */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white px-3">
                <Image
                  src="/images/amex.png"
                  alt="American Express"
                  width={70}
                  height={40}
                  className="max-h-9 w-auto object-contain"
                />
              </div>

              {/* BKASH */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white px-3">
                <Image
                  src="/images/bkash.png"
                  alt="bKash"
                  width={70}
                  height={40}
                  className="max-h-9 w-auto object-contain"
                />
              </div>

              {/* NAGAD */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white px-3">
                <Image
                  src="/images/nagad.png"
                  alt="Nagad"
                  width={70}
                  height={40}
                  className="max-h-9 w-auto object-contain"
                />
              </div>

              {/* CASH ON DELIVERY */}
              <div className="flex h-14 items-center justify-center rounded-lg border border-gray-800 bg-white px-2">
                <div className="flex flex-col items-center justify-center">
                  <CreditCard
                    size={22}
                    strokeWidth={1.8}
                    className="mb-1 text-gray-700"
                  />

                  <span className="text-center text-[9px] font-bold leading-tight text-gray-700">
                    CASH ON
                    <br />
                    DELIVERY
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =========================
          COPYRIGHT
      ========================== */}
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

