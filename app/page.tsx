import Link from "next/link";
import FlipSliders from "./components/FlipSliders";

export const metadata = {
  title: "澳港五日遊",
  description: "Welcome to Snow's Macau and Hongkong trip guide",
};

export default function Home() {
  return (
    <main
      id="homePage"
      className="min-h-[100dvh] px-3 flex flex-col items-center justify-center gap-9"
    >
      <div className="w-full">
        <iframe
          className="w-full h-96 rounded-2xl"
          src="https://www.smg.gov.mo/zh"
        />
      </div>

      {/* Flip card */}
      <div className="w-full text-center">
        <FlipSliders />
        <p>粵語小教室</p>
      </div>
    </main>
  );
}
