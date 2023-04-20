import Link from "next/link";
import { Inter } from "next/font/google";
import FlipSliders from "./components/FlipSliders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "澳港五日遊",
  description: "Welcome to Snow's Macau and Hongkong trip guide",
};

export default function Home() {
  return (
    <main
      id="homePage"
      className="bg-primary min-h-[100dvh] p-7 max-w-md  mx-auto"
    >
      <div className="grid items-center grid-cols-4 gap-7">
        <div className="col-span-4 col-start-1 row-span-3 row-start-1 text-center ">
          <iframe
            className="w-full h-56 rounded-2xl"
            src="https://www.smg.gov.mo/zh"
          />
        </div>
        <div className="col-span-4 row-span-2 px-2 py-7 justify-self-center bg-white/20 backdrop-blur-3xl rounded-xl">
          <ul className="text-2xl steps">
            <Link href="/day1">
              <li data-content="🛬" className="step step-secondary">
                Day1
              </li>
            </Link>
            <Link href="/day2">
              <li data-content="🇲🇴" className="step step-secondary">
                Day2
              </li>
            </Link>
            <Link href="/day3">
              <li data-content="🇨🇳" className="step step-secondary">
                Day3
              </li>
            </Link>
            <Link href="/day4">
              <li data-content="🇭🇰" className="step step-secondary">
                Day4
              </li>
            </Link>
            <Link href="/day5">
              <li data-content="🛫" className="step step-secondary">
                Day5
              </li>
            </Link>
          </ul>
        </div>
        {/* Flip card */}
        <div className="col-span-4 col-start-1 row-span-3 text-center">
          <FlipSliders />
          <p>粵語小教室</p>
        </div>
      </div>
    </main>
  );
}
