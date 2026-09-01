"use client";

import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import ThemeToggle from "@/components/Themetoggle";

import {
  Shield,
  Folder,
  Smartphone,
  Mail,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f8fafc]
        text-[#172033]
        transition-colors
        duration-500

        dark:bg-[#0b0f19]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          -top-[220px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-gradient-to-br
          from-cyan-200/50
          via-blue-200/30
          to-purple-200/40
          blur-[140px]

          dark:from-teal-500/30
          dark:via-transparent
          dark:to-purple-600/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[220px]
          -left-[200px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-gradient-to-tr
          from-blue-200/40
          via-pink-200/30
          to-purple-200/30
          blur-[140px]

          dark:from-blue-500/20
          dark:via-transparent
          dark:to-pink-500/20
        "
      />

      {/* =====================================================
          TOP THEME TOGGLE
          ===================================================== */}

      <header
        className="
          relative
          z-30
          mx-auto
          flex
          max-w-7xl
          justify-end
          px-6
          pt-6
          md:px-10
        "
      >
        <ThemeToggle />
      </header>

      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <main
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-10
          px-6
          pb-10
          pt-10

          md:flex-row
          md:px-10
          md:pb-16
          md:pt-12
        "
      >
        {/* =================================================
            HERO LEFT CONTENT
            ================================================= */}

        <div className="max-w-xl text-center md:text-left">
          <h1
            className="
              text-4xl
              font-extrabold
              leading-tight
              tracking-tight

              md:text-6xl
            "
          >
            Efficient, Secure,
            <br />

            <span
              className="
                bg-gradient-to-r
                from-teal-500
                via-blue-500
                to-purple-600
                bg-clip-text
                text-transparent

                dark:from-teal-400
                dark:via-blue-500
                dark:to-purple-500
              "
            >
              Modern Mailbox
            </span>
          </h1>

          <p
            className="
              mt-6
              text-base
              leading-relaxed
              text-gray-600

              md:text-lg

              dark:text-gray-400
            "
          >
            Mailbox simplifies your digital communication with
            secure, fast, and beautifully organized mail management
            for modern users.
          </p>

          {/* =================================================
              HERO BUTTONS
              ================================================= */}

          <div
            className="
              mt-8
              flex
              flex-col
              justify-center
              gap-4

              sm:flex-row

              md:justify-start
            "
          >
            <Link
              href="/signup"
              className="
                rounded-xl
                bg-gradient-to-r
                from-teal-500
                to-purple-600
                px-6
                py-3
                text-center
                font-medium
                text-white
                shadow-lg
                shadow-purple-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:opacity-90
              "
            >
              Get Started
            </Link>

            <Link
              href="/pricing"
              className="
                rounded-xl
                border
                border-gray-200
                bg-white/70
                px-6
                py-3
                text-center
                font-medium
                text-gray-800
                shadow-sm
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:shadow-md

                dark:border-gray-700
                dark:bg-transparent
                dark:text-white
                dark:hover:bg-gray-900
              "
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* =================================================
            RIGHT SIDE
            VIRTUAL MAILBOX CANADA DESIGN
            ================================================= */}

        <div
          className="
            relative
            flex
            w-full
            items-center
            justify-center

            md:w-[48%]
          "
        >
          {/* Main Glow */}

          <div
            className="
              absolute
              h-[300px]
              w-[300px]
              rounded-full
              bg-gradient-to-br
              from-cyan-300/30
              via-blue-300/20
              to-purple-300/30
              blur-[80px]

              dark:from-teal-500/25
              dark:via-blue-500/15
              dark:to-purple-600/25
            "
          />

          {/* Mailbox Area */}

          <div
            className="
              relative
              flex
              h-[350px]
              w-[350px]
              items-center
              justify-center

              md:h-[420px]
              md:w-[420px]
            "
          >
            {/* =================================================
                CANADA BADGE
                ================================================= */}

            <div
              className="
                absolute
                right-3
                top-5
                z-30
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white/90
                text-2xl
                shadow-xl
                backdrop-blur-md
                transition-transform
                duration-300
                hover:scale-110

                dark:border-gray-700
                dark:bg-[#131b30]
              "
            >
              🇨🇦
            </div>

            {/* =================================================
                MAIN MAILBOX
                ================================================= */}

            <div
              className="
                relative
                mt-5
                h-[220px]
                w-[285px]
                rounded-[38px]
                border
                border-gray-200
                bg-gradient-to-br
                from-white
                via-gray-50
                to-blue-50
                shadow-2xl
                shadow-blue-200/50

                md:h-[255px]
                md:w-[330px]

                dark:border-gray-700
                dark:bg-gradient-to-br
                dark:from-[#182238]
                dark:via-[#111827]
                dark:to-[#0e1424]
                dark:shadow-black/40
              "
            >
              {/* =================================================
                  MAILBOX TOP / DOME
                  ================================================= */}

              <div
                className="
                  absolute
                  -top-[34px]
                  left-1/2
                  h-[75px]
                  w-[245px]
                  -translate-x-1/2
                  rounded-t-[140px]
                  border
                  border-b-0
                  border-gray-200
                  bg-white

                  md:w-[285px]

                  dark:border-gray-700
                  dark:bg-[#182238]
                "
              />

              {/* =================================================
                  MAIL SLOT
                  ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[55px]
                  flex
                  h-12
                  w-[205px]
                  -translate-x-1/2
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-100
                  shadow-inner

                  md:w-[245px]

                  dark:border-gray-700
                  dark:bg-[#090d16]
                "
              >
                <div
                  className="
                    h-2
                    w-28
                    rounded-full
                    bg-gray-300

                    dark:bg-gray-600
                  "
                />
              </div>

              {/* =================================================
                  STATUS LIGHT
                  ================================================= */}

              <div
                className="
                  absolute
                  right-6
                  top-5
                  h-3
                  w-3
                  animate-pulse
                  rounded-full
                  bg-teal-400
                  shadow-lg
                  shadow-teal-400/70
                "
              />

              {/* =================================================
                  MAILBOX TEXT
                  ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[112px]
                  -translate-x-1/2
                  text-center
                "
              >
                <div
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[0.35em]
                    text-gray-400

                    dark:text-gray-500
                  "
                >
                  VIRTUAL
                </div>

                <div
                  className="
                    mt-1
                    whitespace-nowrap
                    bg-gradient-to-r
                    from-teal-500
                    via-blue-500
                    to-purple-600
                    bg-clip-text
                    text-2xl
                    font-extrabold
                    tracking-tight
                    text-transparent

                    md:text-3xl
                  "
                >
                  MAILBOX
                </div>

                <div
                  className="
                    mt-1
                    text-[10px]
                    font-semibold
                    tracking-[0.4em]
                    text-gray-500

                    dark:text-gray-400
                  "
                >
                  CANADA
                </div>
              </div>

              {/* =================================================
                  MAILBOX HANDLE
                  ================================================= */}

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  h-3
                  w-20
                  -translate-x-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-teal-400
                  to-purple-500
                  shadow-lg
                  shadow-blue-400/30
                "
              />
            </div>

            {/* =================================================
                FLOATING NEW MAIL CARD
                ================================================= */}

            <div
              className="
                absolute
                bottom-4
                left-0
                z-30
                w-[155px]
                rotate-[-7deg]
                rounded-2xl
                border
                border-gray-200
                bg-white/95
                p-4
                shadow-xl
                backdrop-blur-md
                transition-transform
                duration-300
                hover:rotate-0

                dark:border-gray-700
                dark:bg-[#131b30]/95
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-teal-400
                    to-blue-500
                    text-white
                  "
                >
                  <Mail size={17} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      text-gray-800

                      dark:text-white
                    "
                  >
                    New Mail
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      text-gray-500

                      dark:text-gray-400
                    "
                  >
                    Securely received
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                CANADA LOCATION CARD
                ================================================= */}

            <div
              className="
                absolute
                bottom-1
                right-0
                z-30
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-gray-200
                bg-white/95
                px-4
                py-2.5
                text-xs
                font-semibold
                text-gray-700
                shadow-lg
                backdrop-blur-md

                dark:border-gray-700
                dark:bg-[#131b30]/95
                dark:text-gray-300
              "
            >
              <MapPin
                size={14}
                className="text-teal-500"
              />

              Canada
            </div>
          </div>
        </div>
      </main>

      {/* =====================================================
          FEATURES
          ===================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          mt-10
          max-w-7xl
          px-6
          pb-10

          md:mt-14
          md:px-10
        "
      >
        <h2
          className="
            mb-8
            text-center
            text-2xl
            font-bold

            md:mb-10
            md:text-left
            md:text-3xl
          "
        >
          Features
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {/* =================================================
              SECURITY
              ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white/75
              p-6
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg

              dark:border-gray-800
              dark:bg-[#0e1424]
              dark:shadow-none
            "
          >
            <Shield
              className="
                mb-3
                text-teal-500

                dark:text-teal-400
              "
              size={28}
            />

            <h3 className="mb-2 text-xl font-semibold">
              Security
            </h3>

            <p
              className="
                text-sm
                leading-relaxed
                text-gray-600

                dark:text-gray-400
              "
            >
              End-to-end encrypted secure mail system
              designed to keep your important mail protected.
            </p>
          </div>

          {/* =================================================
              ORGANIZATION
              ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white/75
              p-6
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg

              dark:border-gray-800
              dark:bg-[#0e1424]
              dark:shadow-none
            "
          >
            <Folder
              className="
                mb-3
                text-purple-500

                dark:text-purple-400
              "
              size={28}
            />

            <h3 className="mb-2 text-xl font-semibold">
              Organization
            </h3>

            <p
              className="
                text-sm
                leading-relaxed
                text-gray-600

                dark:text-gray-400
              "
            >
              Smart folders and structured inbox management
              for a cleaner and more organized mailbox.
            </p>
          </div>

          {/* =================================================
              RESPONSIVE
              ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white/75
              p-6
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg

              dark:border-gray-800
              dark:bg-[#0e1424]
              dark:shadow-none
            "
          >
            <Smartphone
              className="
                mb-3
                text-blue-500

                dark:text-blue-400
              "
              size={28}
            />

            <h3 className="mb-2 text-xl font-semibold">
              Responsive UI
            </h3>

            <p
              className="
                text-sm
                leading-relaxed
                text-gray-600

                dark:text-gray-400
              "
            >
              Fully responsive experience for mobile,
              tablet, and desktop users.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING
          ===================================================== */}

      <div className="relative z-10">
        <PricingSection />
      </div>
    </div>
  );
}

