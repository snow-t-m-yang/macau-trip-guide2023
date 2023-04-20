import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Mocau and HonKong trip 2023",
  description: "A website guide for Macau and HongKong trip 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-primary">
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      <body className="max-w-3xl mx-auto text-white">
        {children}
        <div className="fixed inset-x-0 bottom-0 flex w-full mx-auto">
          <ul className="flex justify-center w-full menu bg-white/20 backdrop-blur-3xl menu-horizontal">
            <Link href="/info">
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </li>
            </Link>

            <Link href="/">
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </a>
              </li>
            </Link>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        {/* <ul
          className={` group absolute bottom-0 w-56 menu bg-base-100 rounded-box`}
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul> */}

        <footer className="p-10 bg-primary footer footer-center text-base-content">
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">需帶物品</a>
            <a className="link link-hover">飯店資訊</a>
            <a className="link link-hover">航班資訊</a>
            <a className="link link-hover">聯繫方式</a>
          </div>

          <div>
            <p>Copyright © 2023 - All right reserved by Snow Yang</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
