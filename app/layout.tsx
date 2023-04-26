"use client";

import "./globals.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
        <footer className="p-10 mt-10 bg-primary footer footer-center text-base-content">
          <div className="grid grid-flow-col gap-4">
            <Link href="/info#air" className="link link-hover">
              航班資訊
            </Link>
            <Link href="/info#hotel" className="link link-hover">
              飯店資訊
            </Link>
            <Link href="/info#contact" className="link link-hover">
              聯繫方式
            </Link>
          </div>
          <div>
            <p>
              Copyright © 2023 - All right reserved by Snow Yang and Rhaenyra
              Liang
            </p>
          </div>
        </footer>

        <Footer />

      </body>
    </html>
  );
}
