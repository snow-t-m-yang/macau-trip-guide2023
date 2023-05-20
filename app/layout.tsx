"use client";

import "./globals.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-primary">
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      <body className="max-w-3xl mx-auto text-white">
        <main className="z-0 max-w-md mx-auto">{children}</main>
        <div className="z-10">
          <Navbar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
