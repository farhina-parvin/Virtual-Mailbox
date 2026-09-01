import React from "react";
import "./globals.css";

export const metadata = {
  title: "My Application",
  description: "Built with Next.js",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className="bg-[#f7f9fc] text-[#172033]">
  {children}
      </body>
      </html>
  );
}