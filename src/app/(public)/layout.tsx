import { Outfit } from "next/font/google";
import "../globals.css";
import "flatpickr/dist/flatpickr.css";

import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Virtual Mailbox Canada",
  description: "Secure and modern virtual mailbox service in Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SidebarProvider>
            <div className="relative min-h-screen overflow-hidden bg-[#f8fafc] text-gray-900 transition-colors duration-500 dark:bg-[#0b0f19] dark:text-white">
              {/* LIGHT MODE GLOW */}
              <div className="pointer-events-none absolute -top-[220px] -right-[200px] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-200/50 via-blue-200/30 to-purple-200/40 blur-[140px] dark:from-teal-500/30 dark:via-transparent dark:to-purple-600/30" />

              {/* LIGHT MODE GLOW */}
              <div className="pointer-events-none absolute -bottom-[220px] -left-[200px] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-200/40 via-pink-200/30 to-purple-200/30 blur-[140px] dark:from-blue-500/20 dark:via-transparent dark:to-pink-500/20" />

              {/* NAVBAR */}
              <Navbar />

              {/* CONTENT */}
              <main className="relative z-10">{children}</main>

              {/* FOOTER */}
              <Footer />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
