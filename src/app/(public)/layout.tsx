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
        className={`${outfit.className} bg-[#0b0f19] text-white antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SidebarProvider>
            <div className="relative min-h-screen overflow-hidden bg-[#0b0f19] text-white">
              {/* Background Glow - TOP RIGHT */}
              <div className="pointer-events-none absolute top-[-200px] right-[-200px] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-teal-500/30 to-purple-600/30 blur-[140px]" />

              {/* Background Glow - BOTTOM LEFT */}
              <div className="pointer-events-none absolute bottom-[-200px] left-[-200px] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-500/20 to-pink-500/20 blur-[140px]" />

              {/* NAVBAR */}
              <Navbar />

              {/* PAGE CONTENT */}
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
