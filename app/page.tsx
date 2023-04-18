import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "澳港五日遊",
  description: "Welcome to Snow's Macau and Hongkong trip guide",
};

export default function Home() {
  return (
    <main id="homePage" className="bg-primary min-h-[100dvh] p-7">
      <div className="grid items-center grid-cols-4 gap-7">
        <div className="col-span-2 col-start-1 row-span-2 row-start-1 text-center ">
          <iframe
            className="w-full rounded-2xl"
            src="https://www.smg.gov.mo/zh"
          />
        </div>
        <div className="col-span-4 row-span-2 row-start-3 px-2 py-7 justify-self-center bg-white/20 backdrop-blur-3xl rounded-2xl">
          <ul className="steps">
            <Link href="/day1">
              <li data-content="🛬" className="step step-neutral">
                Day1
              </li>
            </Link>
            <Link href="/day2">
              <li data-content="🇲🇴" className="step step-neutral">
                Day2
              </li>
            </Link>
            <Link href="/day3">
              <li data-content="🇨🇳" className="step step-neutral">
                Day3
              </li>
            </Link>
            <Link href="/day4">
              <li data-content="🇭🇰" className="step step-neutral">
                Day4
              </li>
            </Link>
            <Link href="/day5">
              <li data-content="🛫" className="step step-neutral">
                Day5
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-span-4 col-start-1 row-span-3 text-center">
          <iframe
            className="w-full h-80 rounded-2xl"
            src="https://motransportinfo.com/zh/search#2"
          />
        </div>
      </div>
    </main>
  );
}
